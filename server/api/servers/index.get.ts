import type { FHR3CcKcnHdlsHWzr5RZ5KMJ0EvSkVlWXnHV23RyWXo as GameServerInfo } from '~/constants/servers';

const gameServerListUrl = "https://api.steampowered.com/IGameServersService/GetServerList/v1/";
const CACHE_DURATION = 30000; // 30 seconds cache
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10; // 10 requests per minute per IP

const cache = new Map<string, { data: GameServerInfo[]; timestamp: number }>();
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export default defineEventHandler(async (event) => {
  try {
    // Rate limiting
    const clientIP = event.node.req.headers['x-forwarded-for'] as string || 
                     event.node.req.headers['x-real-ip'] as string || 
                     event.node.req.connection?.remoteAddress || 
                     'unknown';
    const now = Date.now();
    const rateLimitKey = clientIP;
    
    const rateLimit = rateLimitMap.get(rateLimitKey);
    if (rateLimit) {
      if (now < rateLimit.resetTime) {
        if (rateLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
          throw createError({
            statusCode: 429,
            statusMessage: 'Too many requests. Please try again later.'
          });
        }
        rateLimit.count++;
      } else {
        rateLimitMap.set(rateLimitKey, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
      }
    } else {
      rateLimitMap.set(rateLimitKey, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }

    const config = useRuntimeConfig();
    const apiKey = config.steamGameServerApiKey;
    
    if (!apiKey) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Steam API key not configured'
      });
    }

    // Check cache first
    const cacheKey = 'servers';
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      console.log('Returning cached server data');
      return cached.data;
    }

    // Get server IP from query params or use default
    const query = getQuery(event);
    const serverIp = query.ip as string || '74.91.122.168';
    
    // Validate IP format
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipRegex.test(serverIp)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid IP address format'
      });
    }

    const url = `${gameServerListUrl}?key=${apiKey}&filter=${encodeURIComponent(`addr\\${serverIp}`)}`;
    
    console.log(`Fetching server data from Steam API for IP: ${serverIp}`);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error(`Steam API error: ${response.status} ${response.statusText}`);
      throw createError({
        statusCode: response.status,
        statusMessage: `Steam API error: ${response.statusText}`
      });
    }

    const data: GameServerInfo = await response.json();
    
    // The Steam API response structure is: { response: { servers: [...] } }
    // So we need to access data.response.servers, not data.servers
    const rawServers = data.response?.servers || [];
    
    // Transform the data to map max_players to maxPlayers
    const flattenedData = rawServers.map(server => ({
      ...server,
      maxPlayers: server.max_players
    }));

    // Cache the flattened response
    cache.set(cacheKey, { data: flattenedData, timestamp: Date.now() });
    console.log(`Successfully fetched ${flattenedData.length} servers`);
    
    return flattenedData;
    
  } catch (err: unknown) {
    console.error('Error in servers API:', err);
    
    if (err && typeof err === 'object' && 'statusCode' in err) {
      // Re-throw createError instances
      throw err;
    }
    
    // Handle unexpected errors
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error'
    });
  }
});

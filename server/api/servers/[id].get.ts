import type { FHR3CcKcnHdlsHWzr5RZ5KMJ0EvSkVlWXnHV23RyWXo as GameServerInfo } from "~/constants/servers";

const idServerMap = {
  "vsh_1": "74.91.122.168:27015",
  "vsh_2": "74.91.122.168:27016",
  "vsh_3": "74.91.122.168:27018",
}

const CACHE_DURATION = 30000;
const RATE_LIMIT_WINDOW = 60000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const cache = new Map<string, { data: GameServerInfo; timestamp: number }>();
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: "ID is required"
      });
    }

    const serverAddress = idServerMap[id as keyof typeof idServerMap];
    
    if (!serverAddress) {
      throw createError({
        statusCode: 404,
        statusMessage: "Unknown ID"
      });
    }

    // Rate limiting
    const clientIP = event.node.req.headers["x-forwarded-for"] as string || 
                     event.node.req.headers["x-real-ip"] as string || 
                     event.node.req.connection?.remoteAddress || 
                     "unknown";
    const now = Date.now();
    const rateLimitKey = clientIP;
    
    const rateLimit = rateLimitMap.get(rateLimitKey);
    if (rateLimit) {
      if (now < rateLimit.resetTime) {
        if (rateLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
          throw createError({
            statusCode: 429,
            statusMessage: "Too many requests. Please try again later."
          });
        }
        rateLimit.count++;
      } else {
        rateLimitMap.set(rateLimitKey, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
      }
    } else {
      rateLimitMap.set(rateLimitKey, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }

    // Check cache first
    const cacheKey = `server_${id}`;
    const cached = cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      console.log(`Returning cached server data for ${id}`);
      return cached.data;
    }

    const config = useRuntimeConfig();
    const apiKey = config.steamGameServerApiKey;
    
    if (!apiKey) {
      throw createError({
        statusCode: 500,
        statusMessage: "Steam API key not configured"
      });
    }

    const gameServerListUrl = "https://api.steampowered.com/IGameServersService/GetServerList/v1/";
    const url = `${gameServerListUrl}?key=${apiKey}&filter=${encodeURIComponent(`addr\\${serverAddress}`)}`;
    
    console.log(`Retrieving server info for ${serverAddress}`);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error(`Steam API error: ${response.status} ${response.statusText}`);
      throw createError({
        statusCode: response.status,
        statusMessage: `Steam API error: ${response.statusText}`
      });
    }

    const data: { response: { servers: SteamServerResponse[] } } = await response.json();
    
    // Get the first server from the response (should be only one)
    const servers = data.response?.servers || [];
    
    if (servers.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: "Server not found or not responding"
      });
    }

    // Transform the data to map max_players to maxPlayers
    const serverData: GameServerInfo = {
      ...servers[0],
      maxPlayers: servers[0].max_players
    };

    // Cache the response
    cache.set(cacheKey, { data: serverData, timestamp: Date.now() });
    console.log(`Successfully fetched server data for ${id}`);
    
    return serverData;
    
  } catch (err: unknown) {
    console.error("Error in server API:", err);
    
    if (err && typeof err === "object" && "statusCode" in err) {
      // Re-throw createError instances
      throw err;
    }
    
    // Handle unexpected errors
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error"
    });
  }
});

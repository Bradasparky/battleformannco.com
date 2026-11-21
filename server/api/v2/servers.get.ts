import { queryGameServerInfo, type InfoResponse } from "steam-server-query";

const serverAddresses = [
  "74.91.122.168:27018",
  "74.91.122.168:27019",
];
const cacheDuration = 30_000;

type GameServerInfo = Pick<InfoResponse, "name" | "map" | "players" | "maxPlayers"> & {
  addr: string;
};

let cachedServers: { data: GameServerInfo[]; timestamp: number } | undefined;

export default defineEventHandler(async () => {
  if (cachedServers && Date.now() - cachedServers.timestamp < cacheDuration) {
    return cachedServers.data;
  }

  const servers = await Promise.all(
    serverAddresses.map(async (addr): Promise<GameServerInfo> => {
      const { name, map, players, maxPlayers } = await queryGameServerInfo(addr);
      return { addr, name, map, players, maxPlayers };
    }),
  );

  cachedServers = { data: servers, timestamp: Date.now() };
  return servers;
});

import { queryGameServerInfo, type InfoResponse } from "steam-server-query";

const serverAddresses = [
  "74.91.122.168:27018",
  "74.91.122.168:27019",
];
const cacheDuration = 30_000;
const queryAttempts = 3;
const queryTimeouts = [1_000, 2_000, 4_000];

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
      const { name, map, players, maxPlayers } = await queryGameServerInfo(
        addr,
        queryAttempts,
        queryTimeouts,
      );
      return { addr, name, map, players, maxPlayers };
    }),
  );

  cachedServers = { data: servers, timestamp: Date.now() };
  return servers;
});

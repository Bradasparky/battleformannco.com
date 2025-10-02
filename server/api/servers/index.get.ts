const gameServerListUrl = "https://api.steampowered.com/IGameServersService/GetServerList/v1/";
const gameServerApiKey = "7BF431448D1F461CF86C4BFB5DF54D03";

export default defineEventHandler(async (event) => {
  try {
    const url = `${gameServerListUrl}?key=${gameServerApiKey}&filter=${encodeURIComponent("addr\\74.91.122.168")}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Steam API error: ${response.status}`);
    }
    const data = await response;
    return data.json();
  } catch (err: unknown) {
    sendError(event, err as Error);
  }
});

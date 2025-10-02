export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    return new Response(JSON.stringify({ message: "Error: Not yet implemented", id: id }), { status: 500 });
  } catch (err: unknown) {
    sendError(event, err as Error);
  }
});

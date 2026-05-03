export default async function handler(req, res) {
  const { universeId } = req.query;

  if (!universeId) {
    return res.status(400).json({ error: "Missing universeId" });
  }

  try {
    const response = await fetch(
      `https://games.roblox.com/v1/games?universeIds=${universeId}`,
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Roblox API failed" });
    }

    const data = await response.json();
    const visits = data?.data?.[0]?.visits ?? null;

    return res.status(200).json({ visits });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
}

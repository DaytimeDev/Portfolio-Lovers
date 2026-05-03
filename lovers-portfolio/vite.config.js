import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "local-visits-api",
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (!req.url?.startsWith("/api/visits")) {
            return next();
          }

          const requestUrl = new URL(req.url, "http://localhost");
          const universeId = requestUrl.searchParams.get("universeId");

          if (!universeId) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Missing universeId" }));
            return;
          }

          try {
            const response = await fetch(
              `https://games.roblox.com/v1/games?universeIds=${universeId}`,
            );

            if (!response.ok) {
              res.statusCode = response.status;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "Roblox API failed" }));
              return;
            }

            const data = await response.json();
            const visits = data?.data?.[0]?.visits ?? null;

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ visits }));
          } catch (error) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Server error" }));
          }
        });
      },
    },
  ],
});

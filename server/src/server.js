const http = require("http");

const app = require("./app");
const { loadPlanetData } = require("./models/planets.model");

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
const startServer = async () => {
  await loadPlanetData();
  server.listen(PORT, () => {
    console.log(`Express app is listening on port : ${PORT}`);
  });
};

startServer();

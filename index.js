import express from "express";
import cors from "cors"
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is ready")
});
app.get("/gamedata", (req, res) => {
  const serverData = {
    name: "#1 | NASA | Noobs Welcome | Conquest 40Hz",
    region: "CONQUEST LARGE - SIEGE OF SHANGAI - NORMAL - 40HZ",
    linkData:
      "server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d",
    players: "63/64",
    ping: "47ms",
    tickrate: "40HZ",
    regioneurope: "DE",
    punkbaster: "ON",
    fairfight: "ON",
    password: "OF",
    preset: "normal",
    tickets: "400",
    minimap: "ON",
    vehicals: "ON",
    teambalance: "ON",
    regenerativehealth: "ON",
    bulletdamage: "25",
    playerhealth: "100"


  };
  res.send(serverData)
});
const PORT = 4000;

app.listen(PORT, () => (
  console.log(`server is running on port    hppts://localhost:${PORT}`)
));


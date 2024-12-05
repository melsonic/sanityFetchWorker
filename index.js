import express from "express";
import cors from "cors";
import {
  experiences,
  fetchDetails,
  interests,
  job,
  siteGlobals,
  softwares,
  technology,
} from "./helper/job.js";
const app = express();
app.use(cors());
const PORT = process.env.PORT | 8081;

// cron job start
job.start();

// routers
app.get("/", function (_req, res) {
  res.send("Hello from sanity fetch!!!");
});

// experiences route
app.get("/experiences", function (_req, res) {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(experiences));
});

// interests
app.get("/interests", function (_req, res) {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(interests));
});

// softwares
app.get("/softwares", function (_req, res) {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(softwares));
});

// technology
app.get("/technology", function (_req, res) {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(technology));
});

// siteGlobals
app.get("/globals", function (_req, res) {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(siteGlobals));
});

app.listen(PORT, async () => {
  // fetch once at the start of the application
  await fetchDetails();
  console.log(`App is listening on PORT ${PORT}`);
});

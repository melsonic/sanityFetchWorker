import { CronJob } from "cron";
import { getImageUrl, sanityClient } from "../sanity/client.js";

let experiences;
let siteGlobals;
let interests;
let softwares;
let technology;

// cronjob function
async function fetchDetails() {
  experiences = await sanityClient.fetch(
    `*[_type == "experience"]`,
  );
  siteGlobals = await sanityClient.fetch(
    `*[_type == "siteGlobals"]`,
  );
  interests = await sanityClient.fetch(
    `*[_type == "interest"]`,
  );
  softwares = await sanityClient.fetch(
    `*[_type == "software"]`,
  );
  technology = await sanityClient.fetch(
    `*[_type == "technology"]`,
  );
  // process profileImage in siteGlobals to store cdn url
  siteGlobals.forEach((_, i) => {
    siteGlobals[i].profilePicture = getImageUrl(siteGlobals[i]?.profilePicture)
      .url();
  });
  // process demoImage in softwares to store cdn url
  softwares.forEach((_, i) => {
    softwares[i].demoImage = getImageUrl(softwares[i]?.demoImage).url();
  });
}

const job = new CronJob(
  // It will run once per day at 0th hour
  "0 0 * * *",
  fetchDetails,
  null,
  false,
  "America/Los_Angeles",
);

export {
  experiences,
  fetchDetails,
  interests,
  job,
  siteGlobals,
  softwares,
  technology,
};

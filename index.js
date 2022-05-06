const fs = require('fs').promises;

const express = require('express');
const server = express();

const {database} = require('./react/src/database');

const WEBSITE_NAME = "Ecco the Dolphin Online";
const PUBLIC_ROOT = "/";

server.use(express.static("react/build"));

server.use('*', async (req, res) => {

  const url = req.params[0].replace(/(.)\/$/, "$1");

  const file = await fs.readFile("react/build/main.html");
  let output = file.toString('utf8');

  let index = 0, item = null;
  for (index = 0; index < database.length; index++) {

    if (url == "" && database[index].url == "") {
      item = database[index];
      break;
    }
    else if (url == PUBLIC_ROOT + database[index].url) {
      item = database[index];
      break;
    }
  }

  if (item != null) {
    output = output.replace(/%WEBSITE_NAME%/g, WEBSITE_NAME);
    output = output.replace(/%PAGE_TITLE%/g, item.title);
    output = output.replace(/%PAGE_DESCRIPTION%/g, item.description);
    output = output.replace(/%PAGE_CARD%/g, "https://eccothedolphin.online" + PUBLIC_ROOT + item.media);
    output = output.replace(/%PAGE_URL%/g, PUBLIC_ROOT + item.url);
  }
  else {
    output = output.replace(/%WEBSITE_NAME%/g, WEBSITE_NAME);
    output = output.replace(/%PAGE_TITLE%/g, "");
    output = output.replace(/%PAGE_DESCRIPTION%/g, "");
    output = output.replace(/%PAGE_CARD%/g, "");
    output = output.replace(/%PAGE_URL%/g, "");
  }

  res.send(output);
});

const port = 4000;
console.log("Starting Ecco Online on port " + port + "...");
server.listen(port);

// index.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/scrape", (req, res) => {
  const groupLink = req.body.group_link;
  console.log("🟢 Scraping group:", groupLink);

  const members = [
    { username: "user1", id: 123 },
    { username: "user2", id: 456 },
  ];

  res.json({
    status: "success",
    group: groupLink,
    total_members: members.length,
    members: members,
  });
});

app.listen(5000, () => console.log("🚀 Server running on port 5000"));

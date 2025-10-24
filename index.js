// index.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Simple POST endpoint
app.post("/scrape", (req, res) => {
  const groupLink = req.body.group_link;
  console.log("🟢 Scraping group:", groupLink);

  // Example mock members (replace with actual scraper later)
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

// Render provides PORT in environment variable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

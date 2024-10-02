const express = require("express");
const router = express.Router();
const Config = require("./Config"); // Adjust the path as necessary

// API for "/ictk/issue/admin/config/info"
router.post("/info", async (req, res) => {
  const { header, body } = req.body;
  const { trId } = header;

//   if (trId !== "500500") {
//     return res.status(400).json({
//       trId,
//       rtnCode: "999999",
//       rtnMessage: "Invalid trId",
//     });
//   }

  try {
    const configData = await Config.findById("66fd0bae594eaf479e741ec0"); // Adjust as necessary

    if (!configData) {
      return res.status(404).json({
        trId,
        rtnCode: "999999",
        rtnMessage: "Data not found",
      });
    }

    console.log("configData@infoAPI: ", configData);
    res.json(configData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

module.exports = router;

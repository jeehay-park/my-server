const express = require("express");
const router = express.Router();
const Config = require("./Config"); // Adjust the path as necessary

// API for "/ictk/issue/admin/config/list"
router.post("/list", async (req, res) => {
  const { header, body } = req.body;
  const { trId } = header;
  const { configType } = body;

  switch (configType) {
    case "PROFILE":
      if (trId !== "500400") {
        return res.status(400).json({
          trId,
          rtnCode: "999999",
          rtnMessage: "Invalid trId",
        });
      }

      try {
        // Fetch data from the MongoDB database
        const configData = await Config.findById("66fa44ceb1033019d71d4a8d"); // Adjust as necessary to fetch the desired document

        if (!configData) {
          return res.status(404).json({
            trId: "500400",
            rtnCode: "999999",
            rtnMessage: "Data not found",
          });
        }

        console.log("configData@server: ", configData);

        res.json(configData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching data" });
      }

      break; // Prevent fall-through

    case "KEYISSUE":
      if (trId !== "500400") {
        return res.status(400).json({
          trId,
          rtnCode: "999999",
          rtnMessage: "Invalid trId",
        });
      }

      try {
        // Fetch data from the MongoDB database
        const configData = await Config.findById("66fa6503b1033019d71d4a8f"); // Adjust as necessary to fetch the desired document

        if (!configData) {
          return res.status(404).json({
            trId: "500400",
            rtnCode: "999999",
            rtnMessage: "Data not found",
          });
        }
        console.log("configData@server: ", configData);

        res.json(configData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching data" });
      }

      break; // Prevent fall-through

    case "SCRIPT":
      if (trId !== "500400") {
        return res.status(400).json({
          trId,
          rtnCode: "999999",
          rtnMessage: "Invalid trId",
        });
      }

      try {
        // Fetch data from the MongoDB database
        const configData = await Config.findById("66fcfb57594eaf479e741ebf"); // Adjust as necessary to fetch the desired document

        if (!configData) {
          return res.status(404).json({
            trId: "500400",
            rtnCode: "999999",
            rtnMessage: "Data not found",
          });
        }
        console.log("configData@server: ", configData);

        res.json(configData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching data" });
      }

      break; // Prevent fall-through

      default:
      return res.status(400).json({
        trId,
        rtnCode: "999999",
        rtnMessage: "Invalid configType",
      });
  }
});

module.exports = router;

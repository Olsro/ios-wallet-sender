const express = require("express");
const path = require("path");
const router = express.Router();

router
   .get("/", (req, res) => {
       res.json("Hello world!!");
   });

router.get("/getpass", (req, res) => {
       res.set("Content-Disposition", 'attachment; filename="pass.pkpass"');
       res.set("Content-Type", 'application/vnd.apple.pkpass');
       res.sendFile(path.join(__dirname, "pass.pkpass"));
})

router
   .use((req, res) => {
           res.status(404);
           res.json({
               error: "Page not found"
           });
       });

module.exports = router;

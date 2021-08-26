const express = require("express");
const router = express.Router();
const jsftp = require("jsftp");
const fs = require("fs");
const formidable = require("formidable");
require("dotenv/config");

const ftp = new jsftp({
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT,
  user: process.env.FTP_USER,
  pass: process.env.FTP_PASS,
});

router.post("/", (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    fs.readFile(files.file.path, function (err, buffer) {
      if (err) {
        console.error(err);
      } else {
        let obj = JSON.parse(fields.obj);
        ftp.put(
          buffer,
          "public_html/uploads/" + obj.resource + "/" + obj.id,
          (err) => {
            if (!err) {
              console.log("File transferred successfully!");
            }
            console.log(err);
          }
        );
      }
    });

    res.end();
  });
});

module.exports = router;

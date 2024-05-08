const express = require("express");
const  url= require("url");
const app = express();

app.get("/", function (req, res) {
  res.render("form.ejs");
});

app.get("/save_data", function (req, res) {
      
    var urldata = url.parse(req.url, true);

    res.send(urldata);
  });

app.listen(2000); f




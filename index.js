import express from "express";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const title = "Contact app";

app.get("/", (req, res) => {
  res.render("home", { title });
});

app.get("/add-contact", (req, res) => {
  res.render("add-contact", { title });
});

app.get("/show-contact", (req, res) => {
  res.render("show-contact", { title });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Express Server started on port ${port}`);
});

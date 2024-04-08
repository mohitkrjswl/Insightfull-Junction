const express = require("express");
const articleRouter = require("./routes/articles");
const mongoose = require("mongoose");
const Article = require("./models/article");
const app = express();

mongoose.connect("mongodb://localhost/MohitscornerDataBase");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article 1",
      createdAt: new Date(),
      description: "Testing Description",
    },
    {
      title: "Test Article 1",
      createdAt: new Date(),
      description: "Testing Description",
    },
    {
      title: "Test Article 1",
      createdAt: new Date(),
      description: "Testing Description",
    },]

  res.render("articles/index", { articles: articles }
  )
  app.use("/articles", articleRouter);
})

app.listen(3000);

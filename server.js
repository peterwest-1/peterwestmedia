const express = require("express");
const hbs = require("express-handlebars").create({ defaultLayout: "main.hbs" });
const compression = require("compression");
const helmet = require("helmet");

const app = express();

app.use(compression());
app.use(helmet());
app.use(express.static(__dirname + "/assets/"));

//setting our app engine to handlebars
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.get("/", (request, response) => {
  response.render("home", { title: "Home | Peter West Media" });
});

app.get("/about", (request, response) => {
  response.render("about", { title: "About | Peter West Media" });
});

app.get("/portfolio", (request, response) => {
  response.render("portfolio", { title: "Portfolio | Peter West Media" });
});

app.get("/contact", (request, response) => {
  response.render("contact", { title: "Contact | Peter West Media" });
});

//PORTFOLIO PAGES
app.get("/warranty", (request, response) => {
  response.render("./portfolio/warranty", {
    title: "Warranty | Peter West Media"
  });
});

app.get("/peterwestmedia", (request, response) => {
  response.render("./portfolio/pwm", {
    title: "peterwestmedia.com | Peter West Media"
  });
});

app.get("/travel-bucket", (request, response) => {
  response.render("./portfolio//travel-bucket", {
    title: "Travel Bucket | Peter West Media"
  });
});

//BLOG POSTS
app.get("/blog", (request, response) => {
  response.render("blog", { title: "Blog | Peter West Media" });
});

app.get("/blog/mosaic", (request, response) => {
  response.render("./blog/mosiac", {
    title: "Mosaic Processing | Peter West Media"
  });
});

app.listen(3000, () => console.log("Express server started at port 3000"));

const express = require("express")
const app = express()

const handlebars = require("express-handlebars").create({
  defaultLayout: "main",
  extname: ".hbs",
  layoutsDir: __dirname + "/views/layouts",
})
app.engine("hbs", handlebars.engine)
app.set("view engine", "hbs")

app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))

// routes
app.get("/", function (req, res) {
  res.render("home", {
    title: "main-home",
    home_title: "Home",
    about: "This is handlebars site",
  })
})
app.get("/about", function (req, res) {
  res.render("about", { title: "main-contact", about_title: "Hello" })
})
app.get("/contact", function (req, res) {
  res.render("contact", { title: "main-contact", contact: 1923728129 })
})

const PORT = process.env.PORT || 5001
app.listen(PORT, function () {
  console.clear()
  console.log(`Server listening on port ${PORT}`)
})

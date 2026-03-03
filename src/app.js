import express from "express"
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/job-list", (req, res) => {
    res.render("job-list");
})

app.get("/category", (req, res) => {
    res.render("category");
})

app.get("/404", (req, res) => {
    res.render("404");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/testimonial", (req, res) => {
    res.render("testimonial");
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
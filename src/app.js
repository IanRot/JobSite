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


const categories = [
  { icon: "fa-mail-bulk", title: "Marketing", vacancies: 123, delay: "0.1s" },
  { icon: "fa-headset", title: "Customer Service", vacancies: 123, delay: "0.3s" },
  { icon: "fa-user-tie", title: "Human Resource", vacancies: 123, delay: "0.5s" },
  { icon: "fa-tasks", title: "Project Management", vacancies: 123, delay: "0.7s" },
  { icon: "fa-chart-line", title: "Business Development", vacancies: 123, delay: "0.1s" },
  { icon: "fa-hands-helping", title: "Sales & Communication", vacancies: 123, delay: "0.3s" },
  { icon: "fa-book-reader", title: "Teaching & Education", vacancies: 123, delay: "0.5s" },
  { icon: "fa-drafting-compass", title: "Design & Creative", vacancies: 123, delay: "0.7s" }
];

const jobs = [
    {
        title: "Software Engineer",
        location: "New York, USA",
        type: "Full Time",
        salary: "$123 - $456",
        img: "img/com-logo-1.jpg",
        date: "01 Jan, 2045"
    },
    {
        title: "Marketing Manager",
        location: "New York, USA",
        type: "Full Time",
        salary: "$123 - $456",
        img: "img/com-logo-2.jpg",
        date: "01 Jan, 2045"
    },
    {
        title: "Product Designer",
        location: "New York, USA",
        type: "Full Time",
        salary: "$123 - $456",
        img: "img/com-logo-3.jpg",
        date: "01 Jan, 2045"
    },
    {
        title: "Creative Director",
        location: "New York, USA",
        type: "Full Time",
        salary: "$123 - $456",
        img: "img/com-logo-4.jpg",
        date: "01 Jan, 2045"
    },
    {
        title: "Wordpress Developer",
        location: "New York, USA",
        type: "Full Time",
        salary: "$123 - $456",
        img: "img/com-logo-5.jpg",
        date: "01 Jan, 2045"
    }
];

const testimonials = [
{
    img: "img/testimonial-1.jpg",
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    name: "Client Name",
    profession: "Profession"
},
{
    img: "img/testimonial-2.jpg",
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    name: "Client Name",
    profession: "Profession"
},
{
    img: "img/testimonial-3.jpg",
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    name: "Client Name",
    profession: "Profession"
},
{
    img: "img/testimonial-4.jpg",
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    name: "Client Name",
    profession: "Profession"
}
];

app.get("/", (req, res) => {
    res.render("index", { categories, jobs, testimonials });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/job-list", (req, res) => {
    res.render("job-list", { jobs });
});

app.get("/category", (req, res) => {
    res.render("category", { categories });
});

app.get("/404", (req, res) => {
    res.render("404");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/testimonial", (req, res) => {
    res.render("testimonial", { testimonials });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
var successSound = document.getElementById("success-sound");

document.getElementById("resume-link-1").addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/1bCcaQSDLKWTFjPxoZcjjc_jaepL6zw1f/view?usp=share_link"
  );
});

document.getElementById("resume-link-2").addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/1bCcaQSDLKWTFjPxoZcjjc_jaepL6zw1f/view?usp=share_link"
  );
});

let details = document.getElementsByClassName("skill-ed");
let content = document.getElementsByClassName("contents");

opentab = (name) => {
  for (detail of details) {
    detail.classList.remove("active");
  }
  for (con of content) {
    con.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active");
  document.getElementById(name).classList.add("active-tab");
};

let sidemenu = document.getElementById("sidemenu");

openmenu = () => {
  sidemenu.style.right = "0";
};

closemenu = () => {
  sidemenu.style.right = "-200px";
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbx82hI_piwkiQD_at1DeSyXlBLq53Twggg1suj3j8zfUQryozddn4zZHOQb1bYPbQfs/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      successSound.play();
      swal("", "Message Sent Successfully", "success");
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

window.addEventListener("scroll", function () {
  let nav = this.document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

let container = document.getElementById("skill_container");

let skill_arr = [
  "./images/html.png",
  "./images/css.png",
  "./images/js.png",
  "./images/bootstrap.jpg",
  "./images/java.jpg",
  "./images/spring.jpg",
  "./images/springboot.jpg",
  "./images/hibernate.jpg",
  "./images/mysql.png",
];
let skill_name = [
  "HTML",
  "CSS",
  "JavaScript",
  "BootStrap",
  "Java",
  "Spring",
  "Spring Boot",
  "Hibernate",
  "mysql",
];
let count = 0;
AppendSkills = (arr) => {
  container.innerHTML = null;
  arr.forEach((ele) => {
    let div = document.createElement("div");

    div.classList.add("skills-card");

    let img = document.createElement("img");
    img.src = ele;
    img.classList.add("skills-card-img");

    let name = document.createElement("h2");
    name.classList.add("skills-card-name");

    name.innerText = skill_name[count];
    name.style.color = "white";
    count++;
    div.append(img, name);
    container.append(div);
  });
};

window.addEventListener("load", () => {
  AppendSkills(skill_arr);
});

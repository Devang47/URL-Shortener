

let navbar = document.querySelector("#navContent");

const navbarToggle = () => {
  if (navbar.style.display == "") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "";
  }
};


AOS.init({
  duration: 300,
});

let navbar = document.querySelector("#navContent");

const navbarToggle = () => {
  if (navbar.style.display == "") {
    navbar.style.display = "block";
    anime({
      targets: navbar,
      height: [0, 378],
      duration: 1200,
      // easing: 'easeInOutCirc'
    });
  } else {
    anime({
      targets: navbar,
      height: [378, 0],
      duration: 1200,
      // easing: 'easeInOutCirc',
      changeComplete: () => {
        navbar.style.display = "";
      },
    });
  }
};

var logotxt = document.querySelector("#footer-logo");
logotxt.innerHTML = logotxt.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

document.addEventListener("aos:in:super-duper", ({ detail }) => {
  let anime1 = anime.timeline({});
  anime1
    .add({
      targets: ".letter",
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      fontWeight: 700,
      delay: (el, i) => 150 * (i + 1),
    })
    .add(
      {
        targets: ".letter",
        translateX: 200,
        duration: 100,
      },
      '100'
    );
});

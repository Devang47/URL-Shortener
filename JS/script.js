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
      duration: 800,
      // easing: 'easeInOutCirc'
    });
  } else {
    anime({
      targets: navbar,
      height: [378, 0],
      duration: 800,
      // easing: 'easeInQuad',
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

document.addEventListener("aos:in:super-duper", () => {
  let anime1 = anime.timeline({});
  anime1.add({
    targets: ".letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 1000,
    fontWeight: 700,
    delay: (el, i) => 150 * (i + 1),
  });
});

const getStarted = () => {
  let Temp = anime.timeline({});
  let btn = document.getElementById("get-started");
  Temp.add({
    targets: "#get-started",
    backgroundColor: "#2E294E",
    innerHTML: ["0", "100%"],
    duration: 3000,
    easing: "easeInExpo",
    round: 1,
    endDelay: 200,
  }).add(
    {
      targets: "#get-started",
      backgroundColor: "#2374AB",
      duration: 1,
      complete: () => {
        btn.innerHTML = "Done!";
        btn.disabled = true;
      },
    },
    "+=200"
  );
};

const shorten = () => {
  let btnTxt = document.getElementById("shorten-btn-txt");
  let spinner = document.getElementById("spinner");
  let shortenBtn = document.querySelector(".shorten-btn");

  spinner.style.display = "flex";
  btnTxt.style.display = "none";
  shortenBtn.style.backgroundColor = "#F7CE5B";
  setTimeout(() => {
    spinner.style.display = "none";
    btnTxt.style.display = "block";

    let error = false;
    if (error) {
      shortenBtn.style.backgroundColor = "#7692FF";
      shortenBtn.disabled = true;
      btnTxt.innerHTML = "Done!";
    } else {
      shortenBtn.style.backgroundColor = "#EF626C";
      // shortenBtn.disabled = true
      btnTxt.innerHTML = "ERROR!";
    }
  }, 2000);
};

const copyLink = (ind, tag) => {
  anime({
    targets: tag,
    backgroundColor: "#084B83",
    duration: 500,
    // easing: "linear",
    begin: () => {
      tag.innerHTML = "Done!";
    },
    complete: () => {
      setTimeout(() => {
        tag.innerHTML = "Copy";
        tag.style.backgroundColor = "hsl(180, 66%, 49%)";
      }, 1000);
    },
  });
  // setTimeout(() => {
  //   anime({
  //     targets : tag,
  //     backgroundColor = 'hsl(180, 66%, 49%)',
  //     duration: 100,
  //     easing: 'linear',

  //   })
  // }, 2000);
};

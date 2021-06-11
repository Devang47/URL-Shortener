let result


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
    });
  } else {
    anime({
      targets: navbar,
      height: [378, 0],
      duration: 800,
      changeComplete: () => {
        navbar.style.display = "";
      },
    });
  }
};


const getStarted = (btn) => {
  let Temp = anime.timeline({});
  // let btn = document.getElementById("get-started");
  Temp.add({
    targets: btn,
    backgroundColor: "#2E294E",
    innerHTML: ["0", "100%"],
    duration: 3000,
    easing: "easeInExpo",
    round: 1,
    endDelay: 200,
  }).add(
    {
      targets: btn,
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
    let errorCanvas = document.querySelector("#error-msg");
    let btnTxt = document.getElementById("shorten-btn-txt");
    let spinner = document.getElementById("spinner");
    let shortenBtn = document.querySelector(".shorten-btn");
    
    
    let websiteLink = document.querySelector("#linkForShortening").value;
    
    if (websiteLink) {
      
      spinner.style.display = "flex";
      btnTxt.style.display = "none";
      shortenBtn.style.backgroundColor = "#F7CE5B";
      
      
      fetch(`https://api.shrtco.de/v2/shorten?url=${websiteLink}`)
      .then((e) => e.json())
      .then((data) => {
        
        errorCanvas.style.display = "none";
        spinner.style.display = "none";
        btnTxt.style.display = "block";
        shortenBtn.style.backgroundColor = "#7692FF";
        shortenBtn.disabled = true;
        btnTxt.innerHTML = "Done!";
        document.querySelector("#linkForShortening").value = '';
        result = data.result.full_short_link;
        console.log(result);
      })
      .catch((res) => {
        spinner.style.display = "none";
        btnTxt.style.display = "block";
        shortenBtn.style.backgroundColor = "#EF626C";
        btnTxt.innerHTML = "ERROR!";
        errorCanvas.style.display = 'block';
        errorCanvas.innerHTML = res;
        console.log(res);
      
    });
  }else if(websiteLink == '')
  {
    
    shortenBtn.style.backgroundColor = "#EF626C";
    btnTxt.innerHTML = "No URL!";
  }
}





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
  };


  //footer logo
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

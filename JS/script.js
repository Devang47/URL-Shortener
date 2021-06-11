let result

AOS.init({
  duration: 500,
});


const navbarToggle = () => {
  let navbar = document.querySelector("#navContent");
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
  

  //main working
  let counter = 0

  const append = (link , biglink) => {
    const parentEle = document.querySelector("#previous");
    counter ++
  let data = `<div class="item" data-aos="zoom-in"> <div class="url">${biglink}</div> <button type="text" value="${link}" class="shortened-url" >${link} </button> <div class="copy-btn"> <button onclick="copyLink(${counter} , this)" value="${link}"> Copy </button> </div> </div>`;


    let newDiv = document.createElement('div')
    newDiv.innerHTML= data
    newDiv.classList.add('.item')
    parentEle.appendChild(newDiv)
  }


  const shorten = () => {
    let errorMsg = document.querySelector("#error-msg");
    let btnTxt = document.getElementById("shorten-btn-txt");
    let spinner = document.getElementById("spinner");
    let shortenBtn = document.querySelector(".shorten-btn")
    let websiteLink = document.querySelector("#linkForShortening").value;
    
    const spinnerON = () => {
      spinner.style.display = "flex";
      btnTxt.style.display = "none";
    }
    const spinnerOff = () => {
      spinner.style.display = "none";
      btnTxt.style.display = "block";
      
    }
    if (websiteLink) {
      spinnerON()
      
      shortenBtn.style.backgroundColor = "#F7CE5B";
      axios.get(`https://api.shrtco.de/v2/shorten?url=${websiteLink}`)
      .then((resdata) => {
        spinnerOff()
        errorMsg.style.display = "none";
        shortenBtn.style.backgroundColor = "#7692FF";
        shortenBtn.disabled = true;
        btnTxt.innerHTML = "Done!";
        document.querySelector("#linkForShortening").value = '';
        result = resdata.data.result.full_short_link;
        console.log(result);
        append(result , websiteLink)
      })
      
      .catch((res) => {
        spinnerOff()
        shortenBtn.style.backgroundColor = "#EF626C";
        btnTxt.innerHTML = "ERROR!";
        errorMsg.style.display = 'block';
        errorMsg.innerHTML = `<u> ${res}</u> <br>Please recheck your link and your network connectivity!`;
        console.log(res);
    })
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
    async function clipboardCopy() {
      let text = tag.value;
      await navigator.clipboard.writeText(text);
    }
    clipboardCopy();
    // var copyText = document.getElementById("myInput");
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


let requestLink = document.getElementById("requestLink");
let getShorten = document.getElementById("getBtn");
let generated = document.getElementById("generated");
let shortenLink = document.getElementById("shortenLink");

let buttons = document.getElementsByClassName("short");

let choice;
for (let btn of buttons) {
  btn.onclick = () => {
    choice = btn.value;
  };
}

async function getAPI(link) {
  let request = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
  console.log(request);
  let data = await request.json();
  return data.result;
}

getShorten.onclick = async () => {
  if (choice) {
    if (requestLink.value) {
      getShorten.innerHTML = `<i class="fas fa-spinner fa-spin"></i>`;
      let res = await getAPI(requestLink.value);
      getShorten.innerHTML = `<i class="fas fa-arrow-right"></i>`;

      generated.style.display = "block";

      if (choice === 1) {
        shortenLink.innerHTML = res.short_link;
      } else if (choice === 2) {
        shortenLink.innerHTML = res.short_link2;
      } else {
        shortenLink.innerHTML = res.short_link3;
      }
    } else {
      alert("Enter a link here: ");
    }
  } else {
    alert("You must pick 1 of those choice!");
  }
};

let mode = document.querySelector("#mode");
let bginner = document.querySelector("#bginner");
let h1 = document.querySelectorAll("h1");
let h2 = document.querySelectorAll("h2");
let para = document.querySelectorAll("p");
let darkMode = false;
let body = document.querySelector("#body");
let icon = document.querySelector("#icon");

mode.addEventListener("click", function bgchanger() {
  if (darkMode) {
    bginner.style.backgroundColor = "white";

    h2.forEach((element) => {
      element.style.borderColor = "black";
    });

    body.style.backgroundColor = "grey";
    icon.style.backgroundColor = "black";
    icon.style.color = "white";
    bginner.style.color = "black";

    darkMode = false;
  } else {
    bginner.style.backgroundColor = "black";
    bginner.style.color = "white";

    h2.forEach((element) => {
      element.style.borderColor = "white";
    });

    body.style.backgroundColor = "#1E293B";
    icon.style.backgroundColor = "white";
    icon.style.color = "black";

    darkMode = true;
  }

  console.log("Clicked");
});

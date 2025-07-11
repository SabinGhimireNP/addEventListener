const divs = document.querySelectorAll("div");
const btn = document.querySelector("button");

function divEvent(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // what it does is doesnt allow the event to trigger for more then one element for example: in this case, we will see blue only in normal addEventListener and red in addEventListner with capture set as a true
}

// divs.forEach((data) => data.addEventListener("click", divEvent)); // normaly addEventListener trigger form the clicked once to the outer one for example when i click blue, it loads the elements first then  we see blue green and red in console

// divs.forEach((data) =>
//   data.addEventListener("click", divEvent, {
//     capture: true,
//   })
// ); // What capture will do is it will load the iteam from top to the clicked once like before but will trigger the output while at it.

btn.addEventListener(
  "click",
  () => {
    console.log("clicked");
  },
  {
    once: true,
  }
);

function writePoem(event) {
  event.preventDefault();

  let poemInput = document.querySelector("#text-input");

  new Typewriter("#poem-typewriter", {
    strings: `Test if peom can be entered! ${poemInput.value}`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemElement = document.querySelector("#input-form");
poemElement.addEventListener("submit", writePoem);

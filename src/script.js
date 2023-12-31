function writePoem(event) {
  event.preventDefault();

  let poemInput = document.querySelector("#text-input");
  alert(poemInput.value);
}

let poemElement = document.querySelector("#input-form");
poemElement.addEventListener("submit", writePoem);

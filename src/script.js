let apiKey = "f6314bt59a4db7709bf2fa9bob1f9379";

function generatePoem(response) {
  new Typewriter("#poem-typewriter", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function callAPI(event) {
  event.preventDefault();

  let poemInput = document.querySelector("#text-input");

  let prompt = `Please provide a poem according to the form input ${poemInput.value}`;
  let context = `You are an english poem author. Generate a poem of 4 lines according to the context provided. Be precise, polite and write in a rhyme!`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(generatePoem);

  console.log(prompt);
  console.log(context);
  console.log("API is generating the poem");
}

let poemElement = document.querySelector("#input-form");
poemElement.addEventListener("submit", callAPI);

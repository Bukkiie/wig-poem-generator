function displayPoem (response) {
     new Typewriter("#poem", {
       strings: response.data.answer,
       autoStart: true,
       delay: 1,
       cursor: null,
     });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector ("#user-instruction");
  let apiKey = "8c0c4c1tabboa3733f55eb4e7a8c07bf";
  let prompt = `User Instruction: Generate a catchy poem about ${instructionInput.value}`;
  let context = "You are a poem expert that loves to write short and catchy poems. Your mission is to generate a 4 line poem and separate each line with a <br/>. Make sure to follow the user instruction";
  let apiUrl =
    `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector ("#poem");
    poemElement.classList.remove ("hidden");
    poemElement.innerHTML = `<div class = "blink">Generating a poem about ${instructionInput.value}...</div>`;

    axios.get (apiUrl). then (displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

function displayVerse(response) {
  console.log("Verse generated");
  new Typewriter("#verse", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateVerse(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a6o39f9bfd94a3a0b8at8901262029f4";
  let context =
    "You are an expert in different types of religions and spirituality. You love to write bible verses. Your mission is to generate a 4 line verse and separate each line with a <br />.Please include the name of the book and chapter the verse is from. Make sure to follow the user instructions. Add a <br />. Sign the verse with 'SheCodes AI' inside a <strong> element at the end of the verse.";
  let prompt = `User instructions: Generate a bible verse about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating verse");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayVerse);
}

let verseFormElement = document.querySelector("#verse-generator-form");
verseFormElement.addEventListener("submit", generateVerse);

function generateVerse(event) {
  event.preventDefault();

  new Typewriter("#verse", {
    strings: "The verse goes here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let verseFormElement = document.querySelector("#verse-generator-form");
verseFormElement.addEventListener("submit", generateVerse);

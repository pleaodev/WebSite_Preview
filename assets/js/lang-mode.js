// the hash value of the page
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Define the language reload anchors
var language = {
  ptBr: {
    welcome: "Welcome to the GeeksforGeeks " +
    "Portal! You can choose any language " + 
    "using the buttons above!"
  },
  ptPt: {
    welcome: "Welcome to the GeeksforGeeks " +
    "Portal! You can choose any language " + 
    "using the buttons above!"
  },
  es: {
    welcome: "¡Bienvenido al portal GeeksforGeeks! " +
    "¡Puedes elegir cualquier idioma usando " +
    "los botones de arriba!"
  },
  eng: {
    welcome: "I love to build things, materialize " +
    "ideas in a creative way. Being a developer is " + 
    "building solutions that improve market logistics, " +
    "so that's what I do, with a lot of love  in the process." +
    " " +
    "To make creation possible, I think of the best technologies," +
    "this includes graphic beauty, easy maintenance and optimization "+
    "of my time and the user's."
  }
};

// Check if a hash value exists in the URL
if (window.location.hash) {

  // Set the content of the webpage 
  // depending on the hash value
  if (window.location.hash == "#es") {
    siteContent.textContent =
      language.es.welcome;
  }
  else if (window.location.hash == "#hin") {
    siteContent.textContent =
      language.hin.welcome;
  }
}
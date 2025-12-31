const abusiveWords = [

  "fuck","fucking","fucker","shit","bullshit","asshole","bastard",
  "bitch","slut","whore","dick","cock","pussy","motherfucker",
  "mf","jerk","retard","moron","idiot","stupid","dumb",
  "bloody","damn","sonofabitch","boobs",


  "madarchod","bhenchod","behenchod","bhosdike","bhosdiwala",
  "chutiya","lund","loda","lauda","gaand","gandu",
  "harami","kameena","kamina","randi","saala","sala",
  "kutta","kamine","haraami",

  "fuker","fuking"
];

const regex = new RegExp(`\\b(${abusiveWords.join("|")})\\b`, "gi");
function censorText(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(regex, "****");
  }
}
function walkDOM(element) {
  element.childNodes.forEach(child => {
    censorText(child);
    walkDOM(child);
  });
}

walkDOM(document.body);
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        walkDOM(node);
      }
    });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
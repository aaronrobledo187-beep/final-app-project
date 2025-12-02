

// Default quotes (app-provided)
const allQuotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "There is always light and the end of a tunnel.", author: "Jacob Campbell" },
  { text: ""}
];

//Used Ai
// Load custom quotes from localStorage and keep them separate so we only persist user entries


function loadCustomQuotes() {
  

}

function saveCustomQuotes() {
  
}

function displayQuote() {
  let randomIndex = Math.floor(Math.random() * allQuotes.length);
  let quote = allQuotes[randomIndex];
  let quoteElement = document.getElementById("quote");
  quoteElement.innerText =quote.text;
  

   let authorElement = document.getElementById("author");
   authorElement.innerText = quote.author || "Unknown"; 




}




function addCustomQuote(text, author) {
  let newQuote = {
    text: text
    author: author
    
  }
}


// Initialize
loadCustomQuotes();
// Default quotes (app-provided)
const allQuotes = [ // Used Ai for some of the quotes most quotes are my own
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "There is always light and the end of a tunnel.", author: "Jacob Campbell" },
  { text: "Nunca digas que no puedes.", author: "Alvaro Robledo" },
  { text: "I am always proud of you.", author: "Jacob Campbell" },
  { text: "Be your self everyone is already taken.", author: "Oscar Wilde"},
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein"},
  { text: "There is no shortcuts to any place worth going.",author: "Beverly sills"},
  { text: "Hard work beats talent when talent doesn't work hard.", author:"Tim Notke"},
  { text: "Too many overvalue what they are and not and undervalue what they are.",author:"Malcom Flores"},
  { text: "It never rains for ever the storm will always end.",author:"Aaron Robledo"},
  
  
  
  
];

// Loads custom quotes from localStorage (you can implement this later)
function loadCustomQuotes() {
  // This will load saved quotes from browser storage
}

function saveCustomQuotes() {
 
}

function displayQuote() { //Use A1 on this function
  let randomIndex = Math.floor(Math.random() * allQuotes.length);
  let quote = allQuotes[randomIndex];
  let quoteElement = document.getElementById("quote");
  quoteElement.innerText = `"${quote.text}"`;
  
  let authorElement = document.getElementById("author");
  authorElement.innerText = `— ${quote.author || "Unknown"}`;
}

function addCustomQuote(text, author) {
  let newQuote = {
    text: text,
    author: author || "Unknown"  
  };
  
  
  allQuotes.push(newQuote);
  
  console.log("Quote added:", newQuote);
  console.log("All quotes now:", allQuotes);
}

// Initialize
loadCustomQuotes();

// Add event listener for the Add Quote button
document.getElementById('add-quote-btn').addEventListener('click', function() {
  let quoteText = document.getElementById('new-quote-text').value;
  let authorName = document.getElementById('new-author').value;
  
  // Checks if quote text is not empty
  if (quoteText.trim() !== '') {
    addCustomQuote(quoteText, authorName);
    
    // Clears the form after adding
    document.getElementById('new-quote-text').value = '';
    document.getElementById('new-author').value = '';
    
    // Display the new quote immediately
    displayQuote();
  } else {
    alert("Please enter a quote!");
  }
});

// Adds event listener for the New Quote button
document.getElementById('new-quote').addEventListener('click', displayQuote);

// Displays the initial quote when page loads
displayQuote();



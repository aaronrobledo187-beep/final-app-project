//used Ai
const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "There is light at the end of the tunnel.", author: "Jacob Campbell" },
  { text: "Nunca digas que no puedes.", author: "Alvaro Robledo"},
  { text: "Believe you can and you're half way there.", author: "Theodore Roosevelt"},
  { text: "I am A product of my circumstances. I am a product of my decisions." , author: "Stephen R Covey"},
  { text: ""}
];

function displayNewQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById("quote").textContent = `"${randomQuote.text}"`;
  document.getElementById("author").textContent = `— ${randomQuote.author}`;
}

document.getElementById("new-quote").addEventListener("click", displayNewQuote);
document.getElementById("copy-quote").addEventListener("click", function() {
  const quoteText = document.getElementById("quote").textContent;
  navigator.clipboard.writeText(quoteText);
});

displayNewQuote();
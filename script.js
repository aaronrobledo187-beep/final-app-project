// Minimal JS hooks for the quote generator UI
document.addEventListener('DOMContentLoaded', function(){
  const quoteEl = document.getElementById('quote');
  const authorEl = document.getElementById('author');
  const newBtn = document.getElementById('new-quote');
  const copyBtn = document.getElementById('copy-quote');

  function setQuote(text, author){
    quoteEl.textContent = '"' + text + '"';
    authorEl.textContent = author ? '— ' + author : '— Unknown';
  }

  newBtn.addEventListener('click', function(){
    // placeholder: replace with real fetch or local array later
    setQuote('Be yourself; everyone else is already taken.', 'Oscar Wilde');
  });

  copyBtn.addEventListener('click', function(){
    const text = quoteEl.textContent + ' ' + authorEl.textContent;
    navigator.clipboard && navigator.clipboard.writeText(text);
  });
});

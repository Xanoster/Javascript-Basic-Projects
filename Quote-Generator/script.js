const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

const localQuotes = [
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "If you don't build your dream, someone else will hire you to help them build theirs.", author: "Dhirubhai Ambani" },
    { text: "Patience is a virtue.", author: "Proverb" }
];

function getNewQuote() {
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    quoteText.textContent = `"${quote.text}"`;
    authorText.textContent = `- ${quote.author || 'Unknown'}`;
}

newQuoteBtn.addEventListener('click', getNewQuote);

// On Load
getNewQuote();

// feat: define initial local quote array

// feat: implement random selection logic

// feat: bind new quote button event

// feat: load first quote on page load

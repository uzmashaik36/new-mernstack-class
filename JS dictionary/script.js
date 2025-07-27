const terms = [
  {
    term: "JavaScript",
    meaning: "A high-level programming language used to create interactive effects within web browsers.",
    example: "console.log('Hello World');"
  },
  {
    term: "HTML",
    meaning: "The standard markup language for documents designed to be displayed in a web browser.",
    example: "<p>This is a paragraph</p>"
  },
  {
    term: "CSS",
    meaning: "A style sheet language used for describing the presentation of a document written in HTML.",
    example: "p { color: red; }"
  },
  {
    term: "API",
    meaning: "A set of functions that allow applications to access data and interact with external software.",
    example: "Fetching weather data from OpenWeatherMap API."
  },
  {
    term: "React",
    meaning: "A JavaScript library for building user interfaces.",
    example: "function App() { return <h1>Hello</h1>; }"
  }
];

// Render all terms
function renderTerms(data) {
  const container = document.getElementById('dictionary');
  container.innerHTML = ""; // Clear
  data.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <div class="term">${item.term}</div>
        <div class="meaning">${item.meaning}</div>
        <div class="example">💡 ${item.example}</div>
      </div>
    `;
  });
}

// Search feature
document.getElementById("searchInput").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const filtered = terms.filter(item => item.term.toLowerCase().includes(value));
  renderTerms(filtered);
});

// Initial load
renderTerms(terms);

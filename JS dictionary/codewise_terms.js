const terms = [
  {
    "term": "JavaScript",
    "meaning": "A high-level, interpreted programming language.",
    "example": "console.log('Hello');"
  },
  {
    "term": "HTML",
    "meaning": "Standard markup language for documents displayed in a web browser.",
    "example": "<h1>Hello</h1>"
  },
  {
    "term": "CSS",
    "meaning": "A style sheet language used to describe the presentation of a document.",
    "example": "h1 { color: blue; }"
  },
  {
    "term": "API",
    "meaning": "A set of functions that allow applications to access data and interact with external software components.",
    "example": "REST APIs used to access server resources."
  },
  {
    "term": "React",
    "meaning": "A JavaScript library for building user interfaces.",
    "example": "function App() { return <div>Hello</div>; }"
  },
  {
    "term": "Node.js",
    "meaning": "A JavaScript runtime built on Chrome's V8 engine.",
    "example": "Used for building backend services."
  },
  {
    "term": "Express.js",
    "meaning": "A web application framework for Node.js.",
    "example": "app.get('/', (req, res) => res.send('Hello'))"
  },
  {
    "term": "MongoDB",
    "meaning": "A NoSQL database that stores data in JSON-like documents.",
    "example": "db.users.insertOne({name: 'Uzma'})"
  },
  {
    "term": "Git",
    "meaning": "Version control system to track changes in code.",
    "example": "git commit -m 'Initial commit'"
  },
  {
    "term": "GitHub",
    "meaning": "A platform for hosting and collaborating on code repositories.",
    "example": "Push projects to GitHub for sharing."
  },
  {
    "term": "HTML",
    "meaning": "Hyper text markup language.",
    "example": "This is how term 11 is used in an example."
  },
  {
    "term": "sql",
    "meaning": "structured query language.",
    "example": "This is how term 12 is used in an example."
  },
  {
    "term": "Term13",
    "meaning": "This is the meaning of term 13.",
    "example": "This is how term 13 is used in an example."
  },
  {
    "term": "Term14",
    "meaning": "This is the meaning of term 14.",
    "example": "This is how term 14 is used in an example."
  },
  {
    "term": "Term15",
    "meaning": "This is the meaning of term 15.",
    "example": "This is how term 15 is used in an example."
  },
  {
    "term": "Term16",
    "meaning": "This is the meaning of term 16.",
    "example": "This is how term 16 is used in an example."
  },
  {
    "term": "Term17",
    "meaning": "This is the meaning of term 17.",
    "example": "This is how term 17 is used in an example."
  },
  {
    "term": "Term18",
    "meaning": "This is the meaning of term 18.",
    "example": "This is how term 18 is used in an example."
  },
  {
    "term": "Term19",
    "meaning": "This is the meaning of term 19.",
    "example": "This is how term 19 is used in an example."
  },
  {
    "term": "Term20",
    "meaning": "This is the meaning of term 20.",
    "example": "This is how term 20 is used in an example."
  },
  {
    "term": "Term21",
    "meaning": "This is the meaning of term 21.",
    "example": "This is how term 21 is used in an example."
  },
  {
    "term": "Term22",
    "meaning": "This is the meaning of term 22.",
    "example": "This is how term 22 is used in an example."
  },
  {
    "term": "Term23",
    "meaning": "This is the meaning of term 23.",
    "example": "This is how term 23 is used in an example."
  },
  {
    "term": "Term24",
    "meaning": "This is the meaning of term 24.",
    "example": "This is how term 24 is used in an example."
  },
  {
    "term": "Term25",
    "meaning": "This is the meaning of term 25.",
    "example": "This is how term 25 is used in an example."
  },
  {
    "term": "Term26",
    "meaning": "This is the meaning of term 26.",
    "example": "This is how term 26 is used in an example."
  },
  {
    "term": "Term27",
    "meaning": "This is the meaning of term 27.",
    "example": "This is how term 27 is used in an example."
  },
  {
    "term": "Term28",
    "meaning": "This is the meaning of term 28.",
    "example": "This is how term 28 is used in an example."
  },
  {
    "term": "Term29",
    "meaning": "This is the meaning of term 29.",
    "example": "This is how term 29 is used in an example."
  },
  {
    "term": "Term30",
    "meaning": "This is the meaning of term 30.",
    "example": "This is how term 30 is used in an example."
  },
  {
    "term": "Term31",
    "meaning": "This is the meaning of term 31.",
    "example": "This is how term 31 is used in an example."
  },
  {
    "term": "Term32",
    "meaning": "This is the meaning of term 32.",
    "example": "This is how term 32 is used in an example."
  },
  {
    "term": "Term33",
    "meaning": "This is the meaning of term 33.",
    "example": "This is how term 33 is used in an example."
  },
  {
    "term": "Term34",
    "meaning": "This is the meaning of term 34.",
    "example": "This is how term 34 is used in an example."
  },
  {
    "term": "Term35",
    "meaning": "This is the meaning of term 35.",
    "example": "This is how term 35 is used in an example."
  },
  {
    "term": "Term36",
    "meaning": "This is the meaning of term 36.",
    "example": "This is how term 36 is used in an example."
  },
  {
    "term": "Term37",
    "meaning": "This is the meaning of term 37.",
    "example": "This is how term 37 is used in an example."
  },
  {
    "term": "Term38",
    "meaning": "This is the meaning of term 38.",
    "example": "This is how term 38 is used in an example."
  },
  {
    "term": "Term39",
    "meaning": "This is the meaning of term 39.",
    "example": "This is how term 39 is used in an example."
  },
  {
    "term": "Term40",
    "meaning": "This is the meaning of term 40.",
    "example": "This is how term 40 is used in an example."
  },
  {
    "term": "Term41",
    "meaning": "This is the meaning of term 41.",
    "example": "This is how term 41 is used in an example."
  },
  {
    "term": "Term42",
    "meaning": "This is the meaning of term 42.",
    "example": "This is how term 42 is used in an example."
  },
  {
    "term": "Term43",
    "meaning": "This is the meaning of term 43.",
    "example": "This is how term 43 is used in an example."
  },
  {
    "term": "Term44",
    "meaning": "This is the meaning of term 44.",
    "example": "This is how term 44 is used in an example."
  },
  {
    "term": "Term45",
    "meaning": "This is the meaning of term 45.",
    "example": "This is how term 45 is used in an example."
  },
  {
    "term": "Term46",
    "meaning": "This is the meaning of term 46.",
    "example": "This is how term 46 is used in an example."
  },
  {
    "term": "Term47",
    "meaning": "This is the meaning of term 47.",
    "example": "This is how term 47 is used in an example."
  },
  {
    "term": "Term48",
    "meaning": "This is the meaning of term 48.",
    "example": "This is how term 48 is used in an example."
  },
  {
    "term": "Term49",
    "meaning": "This is the meaning of term 49.",
    "example": "This is how term 49 is used in an example."
  },
  {
    "term": "Term50",
    "meaning": "This is the meaning of term 50.",
    "example": "This is how term 50 is used in an example."
  },
  {
    "term": "Term51",
    "meaning": "This is the meaning of term 51.",
    "example": "This is how term 51 is used in an example."
  },
  {
    "term": "Term52",
    "meaning": "This is the meaning of term 52.",
    "example": "This is how term 52 is used in an example."
  },
  {
    "term": "Term53",
    "meaning": "This is the meaning of term 53.",
    "example": "This is how term 53 is used in an example."
  },
  {
    "term": "Term54",
    "meaning": "This is the meaning of term 54.",
    "example": "This is how term 54 is used in an example."
  },
  {
    "term": "Term55",
    "meaning": "This is the meaning of term 55.",
    "example": "This is how term 55 is used in an example."
  },
  {
    "term": "Term56",
    "meaning": "This is the meaning of term 56.",
    "example": "This is how term 56 is used in an example."
  },
  {
    "term": "Term57",
    "meaning": "This is the meaning of term 57.",
    "example": "This is how term 57 is used in an example."
  },
  {
    "term": "Term58",
    "meaning": "This is the meaning of term 58.",
    "example": "This is how term 58 is used in an example."
  },
  {
    "term": "Term59",
    "meaning": "This is the meaning of term 59.",
    "example": "This is how term 59 is used in an example."
  },
  {
    "term": "Term60",
    "meaning": "This is the meaning of term 60.",
    "example": "This is how term 60 is used in an example."
  },
  {
    "term": "Term61",
    "meaning": "This is the meaning of term 61.",
    "example": "This is how term 61 is used in an example."
  },
  {
    "term": "Term62",
    "meaning": "This is the meaning of term 62.",
    "example": "This is how term 62 is used in an example."
  },
  {
    "term": "Term63",
    "meaning": "This is the meaning of term 63.",
    "example": "This is how term 63 is used in an example."
  },
  {
    "term": "Term64",
    "meaning": "This is the meaning of term 64.",
    "example": "This is how term 64 is used in an example."
  },
  {
    "term": "Term65",
    "meaning": "This is the meaning of term 65.",
    "example": "This is how term 65 is used in an example."
  },
  {
    "term": "Term66",
    "meaning": "This is the meaning of term 66.",
    "example": "This is how term 66 is used in an example."
  },
  {
    "term": "Term67",
    "meaning": "This is the meaning of term 67.",
    "example": "This is how term 67 is used in an example."
  },
  {
    "term": "Term68",
    "meaning": "This is the meaning of term 68.",
    "example": "This is how term 68 is used in an example."
  },
  {
    "term": "Term69",
    "meaning": "This is the meaning of term 69.",
    "example": "This is how term 69 is used in an example."
  },
  {
    "term": "Term70",
    "meaning": "This is the meaning of term 70.",
    "example": "This is how term 70 is used in an example."
  },
  {
    "term": "Term71",
    "meaning": "This is the meaning of term 71.",
    "example": "This is how term 71 is used in an example."
  },
  {
    "term": "Term72",
    "meaning": "This is the meaning of term 72.",
    "example": "This is how term 72 is used in an example."
  },
  {
    "term": "Term73",
    "meaning": "This is the meaning of term 73.",
    "example": "This is how term 73 is used in an example."
  },
  {
    "term": "Term74",
    "meaning": "This is the meaning of term 74.",
    "example": "This is how term 74 is used in an example."
  },
  {
    "term": "Term75",
    "meaning": "This is the meaning of term 75.",
    "example": "This is how term 75 is used in an example."
  },
  {
    "term": "Term76",
    "meaning": "This is the meaning of term 76.",
    "example": "This is how term 76 is used in an example."
  },
  {
    "term": "Term77",
    "meaning": "This is the meaning of term 77.",
    "example": "This is how term 77 is used in an example."
  },
  {
    "term": "Term78",
    "meaning": "This is the meaning of term 78.",
    "example": "This is how term 78 is used in an example."
  },
  {
    "term": "Term79",
    "meaning": "This is the meaning of term 79.",
    "example": "This is how term 79 is used in an example."
  },
  {
    "term": "Term80",
    "meaning": "This is the meaning of term 80.",
    "example": "This is how term 80 is used in an example."
  },
  {
    "term": "Term81",
    "meaning": "This is the meaning of term 81.",
    "example": "This is how term 81 is used in an example."
  },
  {
    "term": "Term82",
    "meaning": "This is the meaning of term 82.",
    "example": "This is how term 82 is used in an example."
  },
  {
    "term": "Term83",
    "meaning": "This is the meaning of term 83.",
    "example": "This is how term 83 is used in an example."
  },
  {
    "term": "Term84",
    "meaning": "This is the meaning of term 84.",
    "example": "This is how term 84 is used in an example."
  },
  {
    "term": "Term85",
    "meaning": "This is the meaning of term 85.",
    "example": "This is how term 85 is used in an example."
  },
  {
    "term": "Term86",
    "meaning": "This is the meaning of term 86.",
    "example": "This is how term 86 is used in an example."
  },
  {
    "term": "Term87",
    "meaning": "This is the meaning of term 87.",
    "example": "This is how term 87 is used in an example."
  },
  {
    "term": "Term88",
    "meaning": "This is the meaning of term 88.",
    "example": "This is how term 88 is used in an example."
  },
  {
    "term": "Term89",
    "meaning": "This is the meaning of term 89.",
    "example": "This is how term 89 is used in an example."
  },
  {
    "term": "Term90",
    "meaning": "This is the meaning of term 90.",
    "example": "This is how term 90 is used in an example."
  },
  {
    "term": "Term91",
    "meaning": "This is the meaning of term 91.",
    "example": "This is how term 91 is used in an example."
  },
  {
    "term": "Term92",
    "meaning": "This is the meaning of term 92.",
    "example": "This is how term 92 is used in an example."
  },
  {
    "term": "Term93",
    "meaning": "This is the meaning of term 93.",
    "example": "This is how term 93 is used in an example."
  },
  {
    "term": "Term94",
    "meaning": "This is the meaning of term 94.",
    "example": "This is how term 94 is used in an example."
  },
  {
    "term": "Term95",
    "meaning": "This is the meaning of term 95.",
    "example": "This is how term 95 is used in an example."
  },
  {
    "term": "Term96",
    "meaning": "This is the meaning of term 96.",
    "example": "This is how term 96 is used in an example."
  },
  {
    "term": "Term97",
    "meaning": "This is the meaning of term 97.",
    "example": "This is how term 97 is used in an example."
  },
  {
    "term": "Term98",
    "meaning": "This is the meaning of term 98.",
    "example": "This is how term 98 is used in an example."
  },
  {
    "term": "Term99",
    "meaning": "This is the meaning of term 99.",
    "example": "This is how term 99 is used in an example."
  },
  {
    "term": "Term100",
    "meaning": "This is the meaning of term 100.",
    "example": "This is how term 100 is used in an example."
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

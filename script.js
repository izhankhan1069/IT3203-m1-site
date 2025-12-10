// Handle quiz grading and results
const form = document.getElementById('quizForm');
const resultsDiv = document.getElementById('results');
const resetBtn = document.getElementById('resetBtn');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  let totalScore = 0;
  const maxScore = 100;
  const details = [];

  // Q1 is fill in the blank
  const q1Value = document.getElementById('q1').value.trim().toLowerCase();
  const q1Keywords = ["style", "styling", "design", "appearance"];
  let q1Score = 0;
  const q1Correct = q1Keywords.some(word => q1Value.includes(word));
  if (q1Correct) {
    q1Score = 20;
    totalScore += q1Score;
    details.push("Q1: Correct (20/20). CSS mainly controls the styling/appearance of a page.");
  } else {
    details.push("Q1: Incorrect (0/20). CSS mainly controls the styling/appearance of a page.");
  }

  // Q2 is main tag
  let q2Score = 0;
  const q2 = form.q2.value;
  if (q2 === "main") {
    q2Score = 20;
    totalScore += q2Score;
    details.push("Q2: Correct (20/20). The <main> tag is best for the main content area.");
  } else {
    details.push("Q2: Incorrect (0/20). Correct answer: <main>.");
  }

  // Q3 is semantic meaning
  let q3Score = 0;
  const q3 = form.q3.value;
  if (q3 === "meaning") {
    q3Score = 20;
    totalScore += q3Score;
    details.push("Q3: Correct (20/20). Semantic HTML gives the structure more meaning.");
  } else {
    details.push("Q3: Incorrect (0/20). Correct answer: to give the structure more meaning.");
  }

  // Q4 is about responsive design
  let q4Score = 0;
  const q4 = form.q4.value;
  if (q4 === "screens") {
    q4Score = 20;
    totalScore += q4Score;
    details.push("Q4: Correct (20/20). Responsive design means it adjusts to different screen sizes.");
  } else {
    details.push("Q4: Incorrect (0/20). Correct answer: the site adjusts to different screen sizes.");
  }

  // Q5 is multiple choices with a grid box
  let q5Score = 0;
  const checked = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(c => c.value);
  const correctSet = ["flexbox", "grid"];
  const hasAllCorrect = correctSet.every(v => checked.includes(v));
  const hasNoExtra = checked.every(v => correctSet.includes(v));

  if (hasAllCorrect && hasNoExtra) {
    q5Score = 20;
    totalScore += q5Score;
    details.push("Q5: Correct (20/20). Flexbox and CSS Grid are common layout tools.");
  } else {
    details.push("Q5: Incorrect (0/20). Correct answer: Flexbox and CSS Grid.");
  }

  const passed = totalScore >= 70;

  // build results area
  let html = "";
  html += `<h2>Your Results</h2>`;
  html += `<p><strong>Total score:</strong> <span class="${passed ? 'pass' : 'fail'}">${totalScore}/${maxScore}</span></p>`;
  html += `<p><strong>Result:</strong> <span class="${passed ? 'pass' : 'fail'}">${passed ? 'Pass' : 'Fail'}</span></p>`;
  html += `<h3>Question Breakdown</h3>`;
  html += "<ul>";
  details.forEach(line => {
    html += `<li>${line}</li>`;
  });
  html += "</ul>";

  resultsDiv.innerHTML = html;
});

// Reset button clears form and results
resetBtn.addEventListener('click', function () {
  form.reset();
  resultsDiv.innerHTML = "";
});

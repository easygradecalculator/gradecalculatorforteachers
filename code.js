<script>
function showTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');

  tabs.forEach(tab => {
    tab.style.display = 'none';
  });

  buttons.forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(tabName).style.display = 'block';

  if(tabName === 'questions') {
    buttons[0].classList.add('active');
  } else {
    buttons[1].classList.add('active');
  }
}

function getGrade(percentage) {
  if (percentage >= 90) return 'A';
  if (percentage >= 80) return 'B';
  if (percentage >= 70) return 'C';
  if (percentage >= 60) return 'D';
  return 'F';
}

function calculateQuestions() {
  const total = parseFloat(document.getElementById('totalQuestions').value);
  const wrong = parseFloat(document.getElementById('wrongAnswers').value);

  if (isNaN(total) || isNaN(wrong) || total <= 0 || wrong < 0 || wrong > total) {
    document.getElementById('resultQuestions').innerHTML = 'Please enter valid numbers';
    return;
  }

  const correct = total - wrong;
  const percentage = (correct / total) * 100;
  const grade = getGrade(percentage);

  document.getElementById('resultQuestions').innerHTML =
    'Correct Answers: ' + correct.toFixed(0) +
    '<br>Percentage: ' + percentage.toFixed(2) + '%' +
    '<br>Grade: ' + grade;
}

function calculateMarks() {
  const total = parseFloat(document.getElementById('totalMarks').value);
  const obtained = parseFloat(document.getElementById('obtainedMarks').value);

  if (isNaN(total) || isNaN(obtained) || total <= 0 || obtained < 0 || obtained > total) {
    document.getElementById('resultMarks').innerHTML = 'Please enter valid numbers';
    return;
  }

  const percentage = (obtained / total) * 100;
  const grade = getGrade(percentage);

  document.getElementById('resultMarks').innerHTML =
    'Percentage: ' + percentage.toFixed(2) + '%' +
    '<br>Grade: ' + grade;
}
</script>
// Get form element and result container element
const budgetForm = document.getElementById('budget-form');
const remainingBudget = document.getElementById('remaining-budget');

// Add event listener for form submission
budgetForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const income = parseFloat(document.getElementById('income-input').value);
  const expenses = parseFloat(document.getElementById('expenses-input').value);

  // Calculate remaining budget
  const remaining = income - expenses;

  // Display result
  if (isNaN(remaining)) {
    remainingBudget.textContent = 'Please enter valid numbers for income and expenses.';
  } else {
    remainingBudget.textContent = `Remaining Budget: $${remaining.toFixed(2)}`;
  }
});

// LISTEN FOR SUBMIT
document.querySelector('#loan-form').addEventListener('submit', function(e){
  // Hide results
  document.querySelector('.results').style.display = 'none';
  // Show loader
  document.querySelector('#loading').style.display = 'block';

  setTimeout(calculateResults, 2000);
  
  e.preventDefault();
});

// Calculate results
function calculateResults(){
  // UI vars
  const amount = document.querySelector('#amount');
  const intrest = document.querySelector('#intrest');
  const years = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalIntrest = document.querySelector('#total-intrest');

  const principal = parseFloat(amount.value);
  const calculatedIntrest = parseFloat(intrest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payments
  const x = Math.pow(1 + calculatedIntrest, calculatedPayments);
  const monthly = (principal * x * calculatedIntrest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalIntrest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    // Show results
    document.querySelector('.results').style.display = 'block';

    // Hide loader
    document.querySelector('#loading').style.display = 'none';
  } else {
    showError("please check your numbers");
  }
};

// Show Error
function showError(error) {
  // Show results
  document.querySelector('.results').style.display = 'none';

  // Hide loader
  document.querySelector('#loading').style.display = 'none';

  // Create a div 
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add Class
  errorDiv.className = 'alert alert-danger';

  // Create Text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert erroeabove heading

  card.insertBefore(errorDiv, heading);

  // Clear error
  setTimeout(clearError, 3000);

};

function clearError(){
  document.querySelector('.alert').remove();
};
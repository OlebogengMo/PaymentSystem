document.getElementById('payment-form').addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const cardholderName = document.getElementById('cardholder-name').value.trim();
  const cardNumber = document.getElementById('cardnumber').value.trim();
  const csv = document.getElementById('csv').value.trim();
  const expiryDate = document.getElementById('expirydate').value.trim();
  const cardPin = prompt("Enter your 4-digit PIN:"); // Prompt for PIN
  const amount = prompt("Enter the amount:"); // Prompt for amount

  // Basic validation
  if (!cardholderName || !cardNumber || !csv || !expiryDate || !cardPin || !amount) {
    alert('Please fill out all fields.');
    return;
  }

  if (cardNumber.length !== 16 || isNaN(cardNumber)) {
    alert('Please enter a valid 16-digit card number.');
    return;
  }

  if (csv.length !== 3 || isNaN(csv)) {
    alert('Please enter a valid 3-digit CSV.');
    return;
  }

  if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
    alert('Please enter a valid expiration date in the format MM/YY.');
    return;
  }

  if (cardPin.length !== 4 || isNaN(cardPin)) {
    alert('Please enter a valid 4-digit PIN.');
    return;
  }

  if (isNaN(amount) || parseFloat(amount) < 100) {
    alert('Please enter a valid amount (minimum R100).');
    return;
  }

  // Send data to the Flask back-end
  try {
    const response = await fetch('http://127.0.0.1:5000/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        card_pin: cardPin,
        amount: amount,
      }),
    });

    const result = await response.json();
    alert(result.message); // Show response message
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while processing your payment.');
  }
});
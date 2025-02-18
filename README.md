# Payment Gateway System

A full-stack payment gateway system built with **Flask** (Python back-end) and **HTML/CSS/JavaScript** (front-end). This project demonstrates how to integrate a payment system with a modern user interface and secure back-end processing.

---

## Features

- **Front-End**:
  - Clean and responsive payment form.
  - Real-time validation for card details (card number, CSV, expiry date).
  - User-friendly interface for entering payment details.

- **Back-End**:
  - Built with **Flask** for handling payment requests.
  - Validates card numbers using the **Luhn algorithm**.
  - Integrates with **Stripe API** for secure payment processing.
  - Handles errors and provides meaningful feedback to users.

- **Security**:
  - Card details are validated on the back-end before processing.
  - Uses **Stripe** for secure payment transactions.

---

## Technologies Used

- **Front-End**: HTML, CSS, JavaScript
- **Back-End**: Python (Flask)
- **Payment Gateway**: Stripe API
- **Other Tools**: Flask-CORS (for cross-origin requests)

---

## Setup Instructions

### Prerequisites

1. **Python 3.x**: Install Python from [python.org](https://www.python.org/).
2. **Stripe Account**: Sign up at [Stripe](https://stripe.com/) and get your API keys.
3. **Git**: Install Git from [git-scm.com](https://git-scm.com/).

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/payment-system.git
   cd payment-system

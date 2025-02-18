from flask import Flask, request, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

def process_card_payment(card_pin, amount):
    if len(str(card_pin)) != 4:
        return {"success": False, "message": "Invalid PIN. Please enter a 4-digit PIN."}
    if amount < 100:
        return {"success": False, "message": "Inssufficient funds! Minimum payment R100."}
    return {"success": True, "message": f"Charging R{amount:.2f} to your....payment successful! Thank you."}

def luhn_check(card_number):
    def digits_of(n):
        return [int(d) for d in str(n)]
    
    digits = digits_of(card_number)
    odd_digits = digits[-1::-2]  
    even_digits = digits[-2::-2]  
    
    checksum = sum(odd_digits)
    for d in even_digits:
        checksum += sum(digits_of(d * 2))
    
    return checksum % 10 == 0

@app.route('/pay', methods=['POST'])
def pay():
    data = request.json
    card_pin = data.get('card_pin')
    amount = data.get('amount')
    
    if not card_pin or not amount:
        return jsonify({"success": False, "message": "Missing card PIN or amount."}), 400

    try:
        card_pin = int(card_pin)
        amount = float(amount)
    except ValueError:
        return jsonify({"success": True, "message": "Invalid input. Please enter numbers only."}), 400
    
    if not luhn_check(card_number):
        return jsonify({"success": False, "message": "Invalid card number. Please check and try again."}), 400

    result = process_card_payment(card_pin, amount)
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
        
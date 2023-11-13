# app.py

import random
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/roll_dice', methods=['POST'])
def roll_dice():
    die_type = request.form.get('die_type')  # Get the selected die type from the front end
    if die_type in ['d4', 'd6', 'd8', 'd10', 'd12', 'd20']:
        # Extract the number of sides from the die_type, e.g., 'd6' -> 6
        num_sides = int(die_type[1:])
        result = random.randint(1, num_sides)
        return jsonify({"result": result})
    else:
        return jsonify({"error": "Invalid die type"})

if __name__ == '__main__':
    app.run(debug=True)
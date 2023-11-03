from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

import json

app = Flask(__name__)
CORS(app)

def find_element(symbol):
    """here we will find the element from the list and return the info about it"""
    with open("elements.json", "r") as file:
        elemets = json.load(file)

    for element in elemets:
        if element['symbol'] == symbol:
            return element

    return None

@app.route("/")
def index():
    """Landing page"""
    return render_template("index.html")

@app.route("/apps")
def apps():
    """Applixations page"""
    return render_template("apps.html")

# Route to get multiple elements
# /api/elements?symbol=He&symbol=O
@app.route("/api/elements")
def get_multiple_elements():
    symbols = request.args.getlist('symbol')  # Get a list of symbols from the query parameters
    elements = [find_element(symbol) for symbol in symbols]
    return jsonify(elements)

# Route to get all elements
@app.route("/api/all")
def get_all_elements():
    with open("elements.json", "r") as file:
        elements = json.load(file)
    return jsonify(elements)

if __name__ == "__main__":
    app.run(debug=True)
    
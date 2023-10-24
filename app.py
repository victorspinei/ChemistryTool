from flask import Flask, request, jsonify

import json


app = Flask(__name__)



@app.route("/")
def index():
    """Landing page"""
    return "<h1>Hello from flask</h1>"

@app.route("/api")
def element():
    element = request.args.get('element')
    method = request.args.get('m')

    return "TODO!"

@app.route("/all")
def get_all():
    with open("elements.json", "r") as file:
        elements = json.load(file)

    return jsonify(elements)
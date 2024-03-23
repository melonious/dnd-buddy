from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
cors = CORS(app, origins='*')

# @app.route("/api/users", methods=['GET'])
# def users():
#     return jsonify(
#         {
#             "users": [
#                 'deanna',
#                 'laurel',
#                 'melin',
#                 'delorel'
#             ]
#         }
#     )

@app.route("/", defaults={'path':''})
def test(path):
    return "Hello World"

@app.route("/api/classes", methods=['GET'])
def classes():
    r = requests.get('https://api.open5e.com/v1/classes/?format=json')
    results = r.json()["results"]
    classes = [x['name'] for x in results]
    return classes

if __name__ == "__main__":
    app.run(debug=True, host='localhost', port=8080)
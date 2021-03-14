from flask import Flask, jsonify, render_template
from flask_cors import CORS, cross_origin
from serve import serve
app = Flask(__name__)
app.register_blueprint(serve)


@app.route("/tasks")
@cross_origin()
def tasks():
    return jsonify([
        {
            "id": 1,
            "text": "Food Shopping",
            "day": "Feb 6th at 1:30pm",
            "reminder": True
        },
        {
            "id": 2,
            "text": "Yoga",
            "day": "Feb 5th at 2:30pm",
            "reminder": True
        },
        {
            "id": 3,
            "text": "Swimming",
            "day": "Feb 7th at 12:30pm",
            "reminder": True
        },
        {
            "id": 4,
            "text": "Gym",
            "day": "Mar 8th at 1:30pm",
            "reminder": True
        }
    ])


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/tutorial/")
def tutorial():
    return "tutorial"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

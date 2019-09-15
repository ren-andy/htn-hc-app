from flask import Flask, jsonify, request
import requests
import os
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def analyze_text(phrase):
    subscription_key = "b321c4df35534633a4ed9f35ec5e7ae3"
    endpoint = "https://westcentralus.api.cognitive.microsoft.com/text/analytics"
    keyphrase_url = endpoint + "/v2.1/keyphrases"
    text = {"documents": [{"id": 1, "language": "en", "text": phrase}]}
    headers = {"Ocp-Apim-Subscription-Key": subscription_key}
    response = requests.post(keyphrase_url, headers=headers, json=text)
    key_phrases = response.json()
    return key_phrases

@app.route("/")
def output():
    return "Hello World!"

@app.route('/get/keywords/<string:phrase>', methods=['GET'])
def get_tasks(phrase):
    phrase = analyze_text(phrase.replace('%20', ' '))

    return phrase
    
#@app.route('/yeet/avery', methods=['POST'])
#def yeet():
#    re = request.json
#    ep = {}
#    for i in range(len(re['name'])):
#        ep['name '+ str(i)] = re['name'][i]
#
#    return jsonify(ep)

if __name__ == '__main__':
    app.run(debug=True)
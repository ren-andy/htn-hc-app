from flask import Flask, jsonify, request
import requests
import os
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def find_disease(symptoms):
    with open("./disease.json", "r") as read_file:
        data = json.load(read_file)

    symptoms_data = data['symptoms']
    disease_data = {}

    for symptom in symptoms:
        if symptom.lower() in symptoms_data:
            diseases = symptoms_data[symptom]
            for disease in diseases:
                if disease not in disease_data:
                    disease_data[disease] = []
                disease_data[disease].append(symptom)
    return disease_data


def analyze_text(phrase):
    subscription_key = "b321c4df35534633a4ed9f35ec5e7ae3"
    endpoint = "https://westcentralus.api.cognitive.microsoft.com/text/analytics"
    keyphrase_url = endpoint + "/v2.1/keyphrases"
    text = {"documents": [{"id": 1, "language": "en", "text": phrase}]}
    headers = {"Ocp-Apim-Subscription-Key": subscription_key}
    response = requests.post(keyphrase_url, headers=headers, json=text)
    key_phrases = response.json()
    
    symptoms = []
    for phrase in key_phrases['documents'][0]['keyPhrases'][0].split():
        if phrase not in symptoms:
            symptoms.append(phrase)
    
    diseases = find_disease(symptoms)

    return diseases

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
from flask import Flask, request, jsonify
import pickle
import pandas as pd
import featureextractor as fe
import numpy as np

'''python api2.py'''

app = Flask(__name__)


with open("stacking.pickle.dat", "rb") as f:
    model = pickle.load(f)


feature_names = ['Have_IP', 'Have_At', 'URL_Length', 'URL_Depth', 'Redirection', 
                 'https_Domain', 'TinyURL', 'Prefix/Suffix', 'DNS_Record', 
                 'Domain_Age', 'Domain_End', 'iFrame', 'Mouse_Over', 'Right_Click', 'Web_Forwards']

@app.route('/predict', methods=['POST'])
def predict():

    url = request.json.get('url')

 
    features = fe.featureExtraction(url)

   
    df = pd.DataFrame([features[1:]], columns=feature_names)
  

   
    prediction = model.predict(df)
    if prediction == 0:
        result = "phishing"
    elif prediction == 1:
        result = "Safe"
    elif prediction == 2:
        result = "Safe but requires personal info sometimes"
    elif prediction == 3:
        result = "Malware"
    else:
        result = "Unknown"
    print(result)

  
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)

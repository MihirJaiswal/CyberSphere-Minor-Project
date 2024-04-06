import pickle
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

import featureextractor as fe


app = Flask(__name__)
CORS(app)  


with open("model/XGBoostClassifier.pickle.dat", "rb") as f:
    model = pickle.load(f)

feature_names = ['Have_IP', 'Have_At', 'URL_Length', 'URL_Depth', 'Redirection', 
                 'https_Domain', 'TinyURL', 'Prefix/Suffix', 'DNS_Record', 
                 'Domain_Age', 'Domain_End', 'iFrame', 'Mouse_Over', 'Right_Click', 'Web_Forwards']

@app.route('/predict', methods=['POST'])
def predict():
    try:
     
        url = request.json.get('url')

        features = fe.featureExtraction(url)

       
        df = pd.DataFrame([features[1:]], columns=feature_names)

        prediction = model.predict(df)

        result = "safe" if prediction == 0 else "not safe"

        
        return jsonify({'prediction': result})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)

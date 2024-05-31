from flask import Flask, render_template, request
import pickle
import numpy as np
import pandas as pd
import featureextractor as fe


 

app = Flask(__name__)

@app.route('/') 
def home():
    return render_template('index.html')
feature_names = [ 'Have_IP', 'Have_At', 'URL_Length', 'URL_Depth','Redirection', 
                      'https_Domain', 'TinyURL', 'Prefix/Suffix', 'DNS_Record', 
                      'Domain_Age', 'Domain_End', 'iFrame', 'Mouse_Over','Right_Click', 'Web_Forwards']

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        url= request.form['url']
        feature=fe.featureExtraction(url)
        values = feature[1:]
        df = pd.DataFrame([values], columns=feature_names)
        loaded_model = pickle.load(open("model\XGBoostClassifier.pickle.dat", "rb"))
        result = loaded_model.predict(df)
        if result == 0:
            final="Given website is a legitimate site"
        else:
            final="Given website is a phishing site"
              
        return render_template('result.html',final=final)

            

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, render_template, request
import pickle
import pandas as pd
import featureextractor as fe

app = Flask(__name__)

# Feature names used for prediction
feature_names = ['Have_IP', 'Have_At', 'URL_Length', 'URL_Depth', 'Redirection', 
                 'https_Domain', 'TinyURL', 'Prefix/Suffix', 'DNS_Record', 
                 'Domain_Age', 'Domain_End', 'iFrame', 'Mouse_Over', 'Right_Click', 'Web_Forwards']

@app.route('/') 
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        url = request.form['url']
        
        try:
            # Extract features from the URL
            features = fe.featureExtraction(url)
            values = features[1:]
            df = pd.DataFrame([values], columns=feature_names)
            
            # Load the trained model
            with open("model/XGBoostClassifier.pickle.dat", "rb") as f:
                loaded_model = pickle.load(f)
                
            # Predict whether the website is legitimate or phishing
            result = loaded_model.predict(df)
            
            if result == 0:
                final = "Given website is a legitimate site"
            else:
                final = "Given website is a phishing site"
        
        except Exception as e:
            final = "An error occurred: {}".format(str(e))
        
        return render_template('result.html', final=final)

if __name__ == '__main__':
    app.run(debug=True)


import requests

url = 'http://127.0.0.1:5000/predict'
data = {'url': 'http://52.37.150.193/ecampus/login'}

response = requests.post(url, json=data)
print(response.json())

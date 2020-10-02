import requests

//Place your api endpoint here
url = 'https://dummyapi.io/data/api/user/'

//replace with own personal api key
headers = {'app-id': 'YOUR_API_KEY'}
r = requests.get(url, headers = headers)

print(r.text)

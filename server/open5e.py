import requests

r = requests.get('https://api.open5e.com/v1/classes/?format=json')
results = r.json()["results"]
classes = [x['name'] for x in results]
print(classes)
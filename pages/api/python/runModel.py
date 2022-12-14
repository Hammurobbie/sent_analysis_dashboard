from transformers import AutoModelForSequenceClassification
from transformers import TFAutoModelForSequenceClassification
from transformers import AutoTokenizer
import numpy as np
from scipy.special import softmax
import csv
import urllib.request
from pointless_words import pointless_words
import string
import socket
import urllib3
import urllib3.util.connection as urllib3_cn

def runModel(text, query=None):

    # IPv4 lag fix
    def allowed_gai_family(): 
        return socket.AF_INET
    urllib3_cn.allowed_gai_family = allowed_gai_family

    def preprocess(text):
        new_text = []
    
        text = text.translate(str.maketrans('', '', string.punctuation))
        for t in text.split(" "):
            if(t.startswith('@') or t.isdigit() or t.startswith('http') or t.startswith('#') or t.lower() in pointless_words or len(t) < 2 or t.lower() == query):
                t = ''
            new_text.append(t)
        return " ".join(new_text)

    # Tasks:
    # emoji, emotion, hate, irony, offensive, sentiment
    # stance/abortion, stance/atheism, stance/climate, stance/feminist, stance/hillary

    task='sentiment'
    MODEL = f"cardiffnlp/twitter-roberta-base-{task}"

    tokenizer = AutoTokenizer.from_pretrained(MODEL)

    # download label mapping
    labels=[]
    mapping_link = f"https://raw.githubusercontent.com/cardiffnlp/tweeteval/main/datasets/{task}/mapping.txt"
    http = urllib3.PoolManager()
    res = http.request('GET', mapping_link)
    # with urllib.request.urlopen(mapping_link) as f:
        # html = f.read().decode('utf-8').split("\n")
        # csvreader = csv.reader(html, delimiter='\t')
    # labels = [row[1] for row in csvreader if len(row) > 1]
    def format_res(n):
        if (n):
            return n[2:]

    labels = res.data.decode('utf-8').split("\n")
    labels = [*map(format_res, labels)]

    # PT
    model = AutoModelForSequenceClassification.from_pretrained(MODEL)
    # v - this breaks after first run - v
    # model.save_pretrained(MODEL)

    text = preprocess(text)
    encoded_input = tokenizer(text, return_tensors='pt')
    output = model(**encoded_input)
    scores = output[0][0].detach().numpy()
    scores = softmax(scores)

    # # TF
    # model = TFAutoModelForSequenceClassification.from_pretrained(MODEL)
    # model.save_pretrained(MODEL)

    # text = "Good night 😊"
    # encoded_input = tokenizer(text, return_tensors='tf')
    # output = model(encoded_input)
    # scores = output[0][0].numpy()
    # scores = softmax(scores)

    ranking = np.argsort(scores)
    ranking = ranking[::-1]
    results = { "text": text }
    for i in range(scores.shape[0]):
        l = labels[ranking[i]]
        s = scores[ranking[i]]
        results[l] = np.round(float(s), 4)

    return results

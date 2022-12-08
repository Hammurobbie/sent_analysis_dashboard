from twitterApi import getTweets
from runModel import runModel
from pointless_words import pointless_words
import sys

query = sys.argv[1]
sources = sys.argv[2]
time_filter = sys.argv[3]

tweets = getTweets(query)

pos_tot = 0
neu_tot = 0
neg_tot = 0
words = ""
word1 = ["", 0]
word2 = ["", 0]
word3 = ["", 0]

if (not tweets.data):
    print("no results")
else:
    for t in tweets.data:
        tweet_results = runModel(t.text, query)
        words += f"{tweet_results['text']} "
        pos_tot += tweet_results["positive"]
        neu_tot += tweet_results["neutral"]
        neg_tot += tweet_results["negative"]

    words_arr = words.split(" ")
    words_arr = [var for var in words_arr if var.lower() not in pointless_words and len(var) > 2 and not var.isdigit()]
    for w in words_arr:
        c = words_arr.count(w)
        if(c > word1[1]):
            word1 = [w, c]
        elif(c > word2[1] and w != word1[0] and w != word3[0]):
            word2 = [w, c]
        elif(c > word3[1]and w != word1[0] and w != word2[0]):
            word3 = [w, c]

    top_words = [word1,word2,word3]
    for i, w in enumerate(top_words):
        scores = runModel(w[0])
        sent = "positive"
        if scores["neutral"] > scores["positive"] and scores["neutral"] > scores["negative"]:
            sent = "neutral"
        if scores["negative"] > scores["positive"] and scores["negative"] > scores["neutral"]:
            sent = "neutral"
        top_words[i].append(sent)

    final_result = {
        "pos_tot": round(pos_tot / len(tweets.data), 4),
        "neu_tot": round(neu_tot / len(tweets.data), 4), 
        "neg_tot": round(neg_tot / len(tweets.data), 4), 
        "com_words": top_words
        }

    print(final_result)

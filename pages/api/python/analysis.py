from twitterApi import getTweets
from runModel import runModel
import sys

query = sys.argv[1]
sources = sys.argv[2]
time_filter = sys.argv[3]

tweets = getTweets(query)

# TODO: Get top three most common words

pos_tot = 0
neu_tot = 0
neg_tot = 0
words = ""
com_words=[]

if (not tweets.data):
    print("no results")
else:
    for t in tweets.data:
        tweet_results = runModel(t.text)
        words += tweet_results["text"]
        pos_tot += tweet_results["positive"]
        neu_tot += tweet_results["neutral"]
        neg_tot += tweet_results["negative"]

    final_result = {
        "pos_tot": round(pos_tot / len(tweets.data), 4),
        "neu_tot": round(neu_tot / len(tweets.data), 4), 
        "neg_tot": round(neg_tot / len(tweets.data), 4), 
        "com_words": com_words
        }

    print(final_result)

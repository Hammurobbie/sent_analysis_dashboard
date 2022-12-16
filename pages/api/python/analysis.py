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
all_scores = []
all_word_counts = []
tot_followers = 0

if (not tweets.data):
    print("no results")
else:
    for i, t in enumerate(tweets.data):
        tweet_results = runModel(t.text, query)
        words += f"{tweet_results['text']} "
        # pos_tot += tweet_results["positive"]
        # neu_tot += tweet_results["neutral"]
        # neg_tot += tweet_results["negative"]

        com_id = next((i for i, item in enumerate(
            tweets.includes["users"]) if item.id == t.author_id), -1)
        followers = tweets.includes["users"][com_id].public_metrics["followers_count"]
        tweet = {"author_id": t.author_id,
                 "num_followers": followers,
                 "positive": tweet_results["positive"],
                 "neutral": tweet_results["neutral"],
                 "negative": tweet_results["negative"]
                 }
        tot_followers += followers
        all_scores.append(tweet)

    words_arr = words.split(" ")
    words_arr = [var for var in words_arr if var.lower(
    ) not in pointless_words and len(var) > 2 and not var.isdigit()]
    for w in words_arr:
        c = words_arr.count(w.lower())
        if(c > word1[1]):
            word1 = [w, c]
        elif(c > word2[1] and w != word1[0] and w != word3[0]):
            word2 = [w, c]
        elif(c > word3[1]and w != word1[0] and w != word2[0]):
            word3 = [w, c]

        if len(all_word_counts) == 0:
            all_word_counts.append({"value": w.lower(), "count": 1})
        else:
            for i, obj in enumerate(all_word_counts):
                if obj["value"] == w.lower():
                    all_word_counts[i]["count"] += 1
                    break
                else:
                    all_word_counts.append({"value": w.lower(), "count": 1})
                    break

    top_words = [word1, word2, word3]
    for i, w in enumerate(top_words):
        scores = runModel(w[0])
        sent = "positive"
        if scores["neutral"] > scores["positive"] and scores["neutral"] > scores["negative"]:
            sent = "neutral"
        if scores["negative"] > scores["positive"] and scores["negative"] > scores["neutral"]:
            sent = "neutral"
        top_words[i].append(sent)

    # get weighted scores where users's tweets with more follorowers
    for s in all_scores:
        pos_tot += (s["num_followers"]/tot_followers) * s["positive"]
        neu_tot += (s["num_followers"]/tot_followers) * s["neutral"]
        neg_tot += (s["num_followers"]/tot_followers) * s["negative"]

    final_result = {
        # "pos_tot": round(pos_tot / len(tweets.data), 4),
        # "neu_tot": round(neu_tot / len(tweets.data), 4),
        # "neg_tot": round(neg_tot / len(tweets.data), 4),
        "pos_tot": round(pos_tot, 4),
        "neu_tot": round(neu_tot, 4),
        "neg_tot": round(neg_tot, 4),
        "com_words": top_words,
        "all_scores": all_scores,
        "all_word_counts": all_word_counts,
    }

    print(final_result)
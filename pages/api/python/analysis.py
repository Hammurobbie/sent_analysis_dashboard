from twitterApi import tweets
from runModel import runModel

# TODO: Get averages and commonly used words

for t in tweets.data:
    runModel(t.text)

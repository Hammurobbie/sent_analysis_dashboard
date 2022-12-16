import tweepy


def getTweets(search_term):

    bearer_token = "AAAAAAAAAAAAAAAAAAAAAMJGjQEAAAAAUjd4N5ZP7gd9Mmeim5xqGNbpwEk%3DOHZjuDck5SYVT3W6iwwcVVNKsfPM5CdnitjlP7dkJLWV1VEELV"

    hilton_accounts = " -from:Hilton -from:HiltonCVGHotel -from:HiltonHotels -from:DoubleTree"

    filters = " lang:en -Perez -is:retweet" + hilton_accounts
    query = '#' + search_term + filters
    count = 30

    client = tweepy.Client(bearer_token=bearer_token)

    tweets = client.search_recent_tweets(
        query=query, max_results=count, tweet_fields=['author_id', 'text'], user_fields=['public_metrics', 'id'], expansions='author_id')
    return tweets

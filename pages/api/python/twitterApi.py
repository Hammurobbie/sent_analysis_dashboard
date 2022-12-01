import tweepy

bearer_token = "AAAAAAAAAAAAAAAAAAAAAMJGjQEAAAAAUjd4N5ZP7gd9Mmeim5xqGNbpwEk%3DOHZjuDck5SYVT3W6iwwcVVNKsfPM5CdnitjlP7dkJLWV1VEELV"

hilton_accounts = " -from:Hilton -from:HiltonCVGHotel -from:HiltonHotels -from:DoubleTree"

filters = " -Perez -is:retweet" + hilton_accounts
query = '#hilton' + filters
count = 10

client = tweepy.Client(bearer_token=bearer_token, wait_on_rate_limit=False)
 
tweets = client.search_recent_tweets(query=query, max_results=count)
import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
nltk.download('vader_lexicon')

reviews = ["Great quality bike! I love it.", "The bike was okay.", "Poor quality, not recommended."]

sia = SentimentIntensityAnalyzer()
for review in reviews:
    print(review)
    print(sia.polarity_scores(review))

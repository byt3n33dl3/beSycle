from sklearn.cluster import KMeans
import pandas as pd

customer_data = pd.read_csv('path/to/your/customer_data.csv')
features = customer_data[['age', 'annual_income', 'spending_score']]

kmeans = KMeans(n_clusters=5, random_state=0).fit(features)
customer_data['Segment'] = kmeans.labels_

print(customer_data.head())

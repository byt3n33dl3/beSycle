import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

sales_data = pd.read_csv('path/to/your/sales_data.csv')

print("Missing values per column:")
print(sales_data.isnull().sum())

# Remove the duplicates if any inside
sales_data.drop_duplicates(inplace=True)

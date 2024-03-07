import pandas as pd
import matplotlib.pyplot as plt

sales_data = pd.read_csv('path/to/your/sales_data.csv')

monthly_sales = sales_data.groupby('month').sum()

plt.figure(figsize=(10, 6))
monthly_sales['total_sales'].plot(kind='bar')
plt.title('Monthly Sales')
plt.xlabel('Month')
plt.ylabel('Total Sales')
plt.show()

# Yearly sales trends
plt.figure(figsize=(12, 6))
yearly_sales = sales_data.groupby('year')['total_sales'].sum()
yearly_sales.plot(kind='line', marker='o')
plt.title('Yearly Sales Trends')
plt.xlabel('Year')
plt.ylabel('Total Sales')
plt.grid(True)
plt.show()

# Monthly sales trends for a particular year, 2002 - 2022
plt.figure(figsize=(12, 6))
sales_2022 = sales_data[sales_data['year'] == 2022]
monthly_sales_2022 = sales_2022.groupby('month')['total_sales'].sum()
monthly_sales_2022.plot(kind='bar', color='skyblue')
plt.title('Monthly Sales Trends in 2022')
plt.xlabel('Month')
plt.ylabel('Total Sales')
plt.xticks(rotation=45)
plt.show()

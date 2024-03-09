# Assuming 'month' and 'year' columns are available for more detailed analysis
yearly_monthly_sales = sales_data.groupby(['year', 'month']).sum().reset_index()

#sum().sort_values(ascending=False)

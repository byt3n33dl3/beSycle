from statsmodels.tsa.arima.model import ARIMA
import pandas as pd

sales_data = pd.read_csv('path/to/your/sales_data.csv', parse_dates=['date'], index_col='date')
model = ARIMA(sales_data, order=(5,1,0))
model_fit = model.fit()

forecast = model_fit.forecast(steps=12)
print(forecast)

from bokeh.plotting import figure, output_file, show
#Below is a line graph

output_file("output.html")

p = figure()
p.line(x=[1, 2, 3], y=[4,6,2])

show(p)

#Below are multiple graphs

from bokeh.plotting import figure, output_file, show

output_file("patch.html")

p = figure(plot_width=400, plot_height=400)

p.multi_line([[1, 3, 2], [3, 4, 6, 6]], [[2, 1, 4], [4, 7, 8, 5]],
             color=["firebrick", "navy"], alpha=[0.8, 0.3], line_width=4)

show(p)

#Graph of AAPL

import pandas as pd
from bokeh.plotting import figure, output_file, show

AAPL = pd.read_csv(
        "http://ichart.yahoo.com/table.csv?s=AAPL&a=0&b=1&c=2000&d=0&e=1&f=2010",
        parse_dates=['Date']
    )

output_file("datetime.html")

# create a new plot with a datetime axis type
p = figure(width=800, height=250, x_axis_type="datetime")

p.line(AAPL['Date'], AAPL['Close'], color='navy', alpha=0.5)

show(p)

from bokeh.charts import Bar, output_file, show
from bokeh.sampledata.autompg import autompg as df

p = Bar(df, label='yr', values='mpg', agg='median', group='origin',
        title="Median MPG by YR, grouped by ORIGIN", legend='top_right')

output_file("bar.html")

show(p)

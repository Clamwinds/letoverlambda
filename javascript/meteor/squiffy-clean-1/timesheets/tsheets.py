from tsheets.api import TSheets
api = TSheets("S.2__b373f1ea7eaadb407bbdedb5372b7cd083182be3")


list_of_results = api.timesheets.where(start_date='2015-10-24', end_date='2015-12-23').all()
for item in list_of_results:
    print item

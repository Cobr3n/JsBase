import xlrd
import json
book = xlrd.open_workbook('z1.xls')
sh1 = book.sheet_by_index(0)
store = []
framenames = []
for rx in range(1, 300):
    temp = sh1.row(rx)
    part = {
    "id": int(temp[0].value),
    "document": temp[2].value,
    "from": temp[3].value,
    "to": temp[4].value,
    "weight": int(temp[6].value),
    "count": int(temp[7].value),
    "delivery": int(temp[8].value),
    "type": temp[9].value
    }
    store.append(part)
with open( 'output.json', 'w') as file:
    json.dump(store, file)
    file.close

print 'zalupa complete'
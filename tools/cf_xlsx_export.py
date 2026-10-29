"""Turns an .xlsx download of the English Quest sheet into the platform's import format (specs/cloudflare.md):
{"names": [...], "sheets": {name: [[cell, ...], ...]}, "props": {}} with Dates as {"$d": ms since 1970}, the way
Apps Script's getValues() returns them (sheet time zone Asia/Jerusalem). Trailing empty rows and cells are dropped.

    python -I tools/cf_xlsx_export.py <sheet.xlsx> <out.json>

The file holds the kids' names and PINs: keep it in EnglishLessons-work/migration/, never in the repo.
"""
import datetime
import json
import sys
from zoneinfo import ZoneInfo

import openpyxl

TZ = ZoneInfo('Asia/Jerusalem')


def cell(v):
    if v is None:
        return ''
    if isinstance(v, datetime.datetime):
        return {'$d': int(v.replace(tzinfo=TZ).timestamp() * 1000)}
    if isinstance(v, datetime.date):
        return {'$d': int(datetime.datetime(v.year, v.month, v.day, tzinfo=TZ).timestamp() * 1000)}
    if isinstance(v, datetime.time):
        return v.isoformat()
    if isinstance(v, float) and v.is_integer():
        return int(v)
    return v


def main(src, out):
    wb = openpyxl.load_workbook(src, data_only=True)
    data = {'names': [], 'sheets': {}, 'props': {}}
    for ws in wb.worksheets:
        rows = []
        for r in ws.iter_rows(values_only=True):
            line = [cell(v) for v in r]
            while line and line[-1] == '':
                line.pop()
            rows.append(line)
        while rows and not rows[-1]:
            rows.pop()
        data['names'].append(ws.title)
        data['sheets'][ws.title] = rows
    with open(out, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False)
    for n in data['names']:
        print(n, max(0, len(data['sheets'][n]) - 1))


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])

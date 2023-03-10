class DateFormatHelper
  @iso8601: (date) ->
    date.toISOString()

  @full: (date) ->
    parts = [
      date.getDate(),
      date.getMonth() + 1
      date.getFullYear()
    ]
    parts.join('.')

  @fullMonthName: (date) ->
    v = date.toLocaleString('ru-RU', {day: 'numeric', month: "long", year: 'numeric'})
    v.replace(/\s*г\.\s*$/, '')

  @day: (date) ->
    v = date.getDate()
    if v < 10
      v = "0#{v}"
    v.toString()

  @month: (date) ->
    v = date.getMonth() + 1
    if v < 10
      v = "0#{v}"
    v.toString()

  @monthName: (date) ->
    v = date.toLocaleString('ru-RU', {day: 'numeric', month: "long"})
    v.split(' ' )[1]

  @year: (date) ->
    date.getFullYear()

  @yearShort: (date) ->
    parseInt(date.getFullYear().toString().replace(/^\d{2}/, ''))

export default DateFormatHelper

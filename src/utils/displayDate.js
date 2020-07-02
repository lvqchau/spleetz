export const displayDate = (date, type) => {
  // 2020-07-02T11:51:11.479Z
  let day = date.split('T')[0].split('-')
  let str = day[2] + '.' + day[1] + '.' + day[0]
  return str
}
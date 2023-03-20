export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const GENRE_COLORS: { [key: string]: string } = {
  Pop: '#ff0000',
  Hiphop: '#0a0a0a',
  Techno: '#3458eb',
  Latin: '#9242c7',
  Electric: '#bf9a69',
  House: '#063d0c',
  Festival: '#47cad1',
  Bar: '#086166',
  Jazz: '#71ab81',
  'Live Music': '#8a3e6f',
}

export const getTagColor = (tagName: string) => {
  return GENRE_COLORS[tagName] || '#00000'
}

const listMonths = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

const listMonthsShort = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic'
];

const listWeekdaysShort = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

const toFormat = string => {
  const date = new Date(string);

  return `${listMonthsShort[date.getMonth()]} ${('0' + date.getDate()).slice(
    -2
  )}, ${date.getFullYear()}`;
};

const toFormatLarge = string => {
  const date = new Date(string);

  return `${listMonths[date.getMonth()]} ${('0' + date.getDate()).slice(
    -2
  )}, ${date.getFullYear()}`;
};

const toFormat12Hour = string => {
  const date = new Date(string);
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${('0' + hours).slice(-2)}:${('0' + date.getMinutes()).slice(
    -2
  )} ${ampm}`;
};

const getDate = string => {
  const date = !!string ? new Date(string) : new Date();
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  ).toISOString();
};

const convertDatetoEnd = string => {
  const date = new Date(string);
  date.setHours(23);
  date.setMinutes(59);
  date.setSeconds(59);
  return date.toISOString();
};

const upDay = (string, num) => {
  const date = new Date(string);
  date.setDate(date.getDate() + num);
  return date.toISOString();
};

const downDay = (string, num) => {
  const date = new Date(string);
  date.setDate(date.getDate() - num);
  return date.toISOString();
};

const upMonth = (string, num) => {
  const date = new Date(string);
  date.setMonth(date.getMonth() + num);
  return date.toISOString();
};

const downMonth = (string, num) => {
  const date = new Date(string);
  date.setMonth(date.getMonth() - num);
  return date.toISOString();
};

const setDay = (string, day) => {
  const date = new Date(string);
  date.setDate(day);
  return date.toISOString();
};

export {
  listMonths,
  listMonthsShort,
  listWeekdaysShort,
  toFormat,
  toFormatLarge,
  toFormat12Hour,
  getDate,
  convertDatetoEnd,
  upDay,
  downDay,
  upMonth,
  downMonth,
  setDay
};

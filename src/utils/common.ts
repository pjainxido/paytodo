const options: Record<string, string> = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'short',
  timeZone: 'UTC',
};
export const dateToString = (date: Date | string): string => {
  return typeof date === 'string'
    ? new Date(date).toLocaleString('ko-KR', options)
    : date.toLocaleString('ko-KR', options);
};
export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

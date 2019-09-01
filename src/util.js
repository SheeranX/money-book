export const LIST_VIEW = 'list';
export const CHART_VIEW = 'chart';

export const padLeft = (num) => {
  return num < 10 ? '0' + num : num;
};

export const range = (startAt = 0, ranger = 0) => {
  let _arr = [];
  for(let i = 0 ; i < ranger; i++) {
    _arr[i] = startAt + i;
  }
  return _arr;
}

export const getCurrentDate = (str) => {
  const _date = str ? new Date(str) : new Date();
  return {
    year: _date.getFullYear(),
    month: _date.getMonth() + 1
  }
};
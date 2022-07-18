import clockPayloads from './clockPayloads';

const { DATE, HOUR, MINUTE, SECOND } = clockPayloads;

const getTimeFromTimeStamp = ({ timeStamp, payload }) => {
  const date = new Date(timeStamp);
  let time = null;

  if (payload === HOUR) time = date.getHours();
  else if (payload === MINUTE) time = date.getMinutes();
  else if (payload === SECOND) time = date.getSeconds();
  else if (payload === DATE) time = [date.getMonth(), date.getDay(), date.getDate()];


  if (typeof time === 'number') return `0${time}`.slice(-2);

  return time;
};

export default getTimeFromTimeStamp;

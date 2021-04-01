import { DateTime } from 'luxon';

export const getNYDateTime = () => {
  return DateTime.fromObject({ zone: 'America/New_York' });
}

export const isWeekday = (dateTime: DateTime) => {
  return dateTime.weekdayShort != "Sat" && dateTime.weekdayShort != "Sun"
}

export const isWallStreetOpen = () => {
  const OPEN_HOUR = DateTime.fromObject({ hour: 9, minute: 30, second: 0, zone: 'America/New_York'})
  const CLOSE_HOUR = DateTime.fromObject({ hour: 16, minute: 0, second: 0, zone: 'America/New_York'})

  const now = getNYDateTime();  
  return isWeekday(now) && OPEN_HOUR <= now && now <= CLOSE_HOUR;
}

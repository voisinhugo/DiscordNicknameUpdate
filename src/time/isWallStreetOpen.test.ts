import { DateTime } from "luxon";
import { isWeekday } from "./isWallStreetOpen";

describe("isWeekday", () => {
  it("returns true when a week day is given", () => {
    const dt = DateTime.fromISO("2021-03-26T15:42:23.123"); // Friday
    expect(isWeekday(dt)).toEqual(true);
  });

  it("returns false when a weekend day is given", () => {
    const dt = DateTime.fromISO("2021-03-27T15:42:23.123"); // Saturday
    const dt2 = DateTime.fromISO("2021-03-28T15:42:23.123"); // Sunday
    expect(isWeekday(dt)).toEqual(false);
    expect(isWeekday(dt2)).toEqual(false);
  });
});

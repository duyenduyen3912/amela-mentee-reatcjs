import { calculate_age, checkDay, dayCount, endOfMonth, getCurrentDate, getDaysInMonth, now, startOfWeek } from "../session5/ex";

test('get date now', () => {
  expect(getCurrentDate("/")).toBe("5/4/2024");
});

test('get date in month', () => {
  expect(getDaysInMonth(8, 2020)).toBe(31);
});

test('check weekend', () => {
  expect(checkDay("6/4/2024")).toBe(true);
});

test('count the day', () => {
  expect(dayCount()).toBe(96);
});

test('age', () => {
  expect(calculate_age(new Date(2001,3,8))).toBe(23);
});


test('end of month', () => {
  expect(endOfMonth(new Date())).toBe(30);
});






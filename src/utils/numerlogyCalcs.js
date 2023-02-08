// Determine date numerology calculation based on today's date
import { getMonth, getDate, getYear } from "date-fns"

// time now
const now = new Date()

// gets current month, add 1 for calc
const month = getMonth(now) + 1

// gets current day of month including double digit days
const rawDay = getDate(now)
const dayDigits = ("" + rawDay).split("")

export let sumDay = 0
if (rawDay !== 11 || rawDay !== 22) {
  for (let i = 0; i < dayDigits.length; i++) {
    sumDay = sumDay + parseInt(dayDigits[i], 10)
  }
} else sumDay = rawDay

// gets year
const rawYear = getYear(now)
const digits = ("" + rawYear).split("")

// sums current year
let sumYear = 0
for (let i = 0; i < digits.length; i++) {
  sumYear = sumYear + parseInt(digits[i], 10)
}

// Calculate day and lifepath of date numbers below
export const lifePath = month + sumDay + sumYear

export let resLP = 0
if ([22].includes(lifePath)) {
  resLP = 22
}
if ([33].includes(lifePath)) {
  resLP = 33
}
if ([11, 20, 29, 38].includes(lifePath)) {
  resLP = 11
}
if ([1, 10, 19, 28, 37, 46, 64, 73].includes(lifePath)) {
  resLP = 1
}

if ([3, 12, 21, 30].includes(lifePath)) {
  resLP = 3
}
if ([4, 13, 31, 40].includes(lifePath)) {
  resLP = 4
}
if ([5, 14, 23, 32, 41, 50].includes(lifePath)) {
  resLP = 5
}
if ([6, 15, 24, 42, 51, 60].includes(lifePath)) {
  resLP = 6
}
if ([7, 16, 25, 34, 43, 52].includes(lifePath)) {
  resLP = 7
}
if ([8, 17, 26, 35, 44, 53].includes(lifePath)) {
  resLP = 8
}
if ([9, 18, 27, 36, 45, 54].includes(lifePath)) {
  resLP = 9
}

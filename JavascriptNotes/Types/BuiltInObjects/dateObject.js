/// DATE
// - The Date object represents a specific point in time. It provides methods to create, format, and manipulate dates.
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const myFavDay = new Date();

// Common Properties
// Date.now(): Returns the current time in milliseconds since the Unix epoch (January 1, 1970).
// Date.UTC(year, month, day, hour, minute, second, millisecond): Creates a new Date object for a specific UTC time.

// Common Methods
// getFullYear(): Returns the year (4 digits).
// getMonth(): Returns the month (0-11).
// getDate(): Returns the day of the month (1-31).
// getHours(): Returns the hours (0-23).
// getMinutes(): Returns the minutes (0-59).
// getSeconds(): Returns the seconds (0-59).
// getMilliseconds(): Returns the milliseconds (0-999).
// getTime(): Returns the time in milliseconds since the Unix epoch.
// setFullYear(year, month, day): Sets the year, month, and day.
// setMonth(month, day): Sets the month and day.
// setDate(day): Sets the day of the month.
// setHours(hours, minutes, seconds, milliseconds): Sets the hours, minutes, seconds, and milliseconds.
// setMinutes(minutes, seconds, milliseconds): Sets the minutes, seconds, and milliseconds.
// setSeconds(seconds, milliseconds): Sets the seconds and milliseconds.
// setMilliseconds(milliseconds): Sets the milliseconds.
// getTimezoneOffset(): Returns the time zone offset in minutes from UTC.
// toISOString(): Returns the date as an ISO 8601 string.
// toDateString(): Returns the date as a human-readable string.
// toTimeString(): Returns the time as a human-readable string.

//
//

// Getting Date and Time Components
// Once you have a Date object, you can use various methods to extract its components:

// getFullYear(): Returns the year (4 digits).
// getMonth(): Returns the month (0-11).
// getDate(): Returns the day of the month (1-31).
// getHours(): Returns the hours (0-23).
// getMinutes(): Returns the minutes (0-59).
// getSeconds(): Returns the seconds (0-59).
// getMilliseconds(): Returns the milliseconds (0-999).
// getTime(): Returns the time in milliseconds since the Unix epoch.

//
//

// Setting Date and Time Components
// You can also modify the components of a Date object using these methods:

// setFullYear(year, month, day): Sets the year, month, and day.
// setMonth(month, day): Sets the month and day.
// setDate(day): Sets the day of the month.
// setHours(hours, minutes, seconds, milliseconds): Sets the hours, minutes, seconds, and milliseconds.
// setMinutes(minutes, seconds, milliseconds): Sets the minutes, seconds, and milliseconds.
// setSeconds(seconds, milliseconds): Sets the seconds and milliseconds.
// setMilliseconds(milliseconds): Sets the milliseconds.

//
//

//

// Understanding toISOString():
// toISOString() converts a JavaScript Date object into an ISO 8601 string representation.
// ISO 8601 is a standardized format for representing dates and times, ensuring consistency and compatibility across different systems.
// The format is YYYY-MM-DDTHH:MM:SS.SSS+TZD, where:
// YYYY: Year (4 digits)
// MM: Month (2 digits, 01-12)
// DD: Day of the month (2 digits, 01-31)
// T: Separator between date and time
// HH: Hour (2 digits, 00-23)
// MM: Minute (2 digits, 00-59)
// SS: Second (2 digits, 00-59)
// SSS: Millisecond (3 digits, 000-999)
// TZD: Time zone designator (e.g., +00:00 for UTC)

// Benefits of Using toISOString():
// Standardized Format: Ensures consistent date and time representation across different systems.
// Human-Readable: The ISO 8601 format is easy to read and understand.
// Machine-Readable: Can be easily parsed and processed by various programming languages and libraries.
// Time Zone Awareness: Includes the time zone offset, making it suitable for handling dates and times across different regions.

// Client-side

// On the Client Side:
// 1. Create a Date object representing the desired date and time.
// 2. Use toISOString() to convert the Date object into an ISO 8601 string.
// 3. Send the ISO 8601 string to the server in a request.

const now = new Date();
const isoStringClient = now.toISOString();

// Server-side
const isoStringServer = request.body.date;
const date = new Date(isoString); // Output: 2023-12-31T23:59:59.999+00:00
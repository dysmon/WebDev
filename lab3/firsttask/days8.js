// Format the relative date
alert(formatDate(new Date(new Date() - 1))); // "right now"

alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));

// Filter unique array members

function unique(arr) {
  /* your code */
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(values)); // Hare, Krishna, :-O

function unique(arr) {
  return Array.from(new Set(arr));
}

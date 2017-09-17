// https://stackoverflow.com/questions/31495239/title-case-a-sentence
function titleCase(str) {
  let newstr = str.split(" ");
  for (i = 0; i < newstr.length; i++) {
    if (newstr[i] === "") continue;
    let copy = newstr[i].substring(1).toLowerCase();
    newstr[i] = newstr[i][0].toUpperCase() + copy;
  }
  newstr = newstr.join(" ");
  return newstr;
}
// jshint esversion:6

function urlFromString(title) {

    let url = title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");

    return url;

}

console.log(urlFromString(" hey yoooo i go to schooolll  "));
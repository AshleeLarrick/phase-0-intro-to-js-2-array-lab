const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
  cats.push(Ralph)
}

function destructivelyPrependCat(Bob) {
  cats.unshift(Bob)
}

function destructivelyRemoveLastCat(Ralph) {
  cats.pop(Ralph)
}

function destructivelyRemoveFirstCat(Milo) {
  cats.shift(Milo)
}

function appendCat(name) {
  const copyOfCats = [...cats];
  copyOfCats.push(name)
  return copyOfCats
}

function prependCat(name) {
  const copyOfCats = [...cats];
  copyOfCats.unshift(name)
  return copyOfCats
}

function removeLastCat() {
  const copyOfCats = [...cats];
  copyOfCats.pop(name)
  return copyOfCats
}

function removeFirstCat() {
  const copyOfCats = [...cats];
  copyOfCats.shift(name)
  return copyOfCats
}
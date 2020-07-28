var chocolateBars = [snickers, hundred grand, kitkat, skittles]

function addElementToBeginningOfArray(array, element) {
  const array = [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.push("element")
  return array
}

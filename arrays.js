var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  array[1] = "element"
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("element")
  return array
}

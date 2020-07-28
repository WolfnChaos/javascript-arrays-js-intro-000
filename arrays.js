var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  [...array, "element"]
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unpush("element")
  return array
}

const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr){
  let result = "undefined"

   result = arr.find(object => object.result === "W")

  return !!result ? result.year : result;

}

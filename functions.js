function test_return() {
  console.log("in the test_return function");
  return;
  console.log("return is already called");
}

function test_print(message){
  console.log("in the test_print function");
  console.log(message);
  console.log("exciting the test_print function");
  return;
}

function sum(arg1, arg2){
  var output = arg1 + arg2;
  return output;
}

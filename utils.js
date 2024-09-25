//reducing the class backs
const deBounce = (func, delay) => {
  //timeOutId for the setTimeout
  let timeId;
  //function to return
  return (...args) => {
    //to avoid from the calling the function callback
    if (timeId) clearTimeout(timeId);
    timeId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

//SMALL EXAMPLE
/*
const args = ["Hello", "Alice"];
greet.apply(null, args); // Outputs: Hello, Alice!
*/

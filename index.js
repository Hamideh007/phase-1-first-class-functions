function receivesAFunction(callback) {
    if (typeof callback === 'function') {
      callback();
    } else {
      throw new Error('Callback is not a function');
    }
  }
  
  function namedFunction() {
    console.log('This is a named function');
  }
  
  function returnsANamedFunction() {
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('This is an anonymous function');
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
  };
  
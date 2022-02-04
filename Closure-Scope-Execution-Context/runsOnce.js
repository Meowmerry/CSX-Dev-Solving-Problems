function runsOnce(fn) {
    let hasRun = false;
    let result;
    function oncifiedFunc(param) {
      if (!hasRun) {
        hasRun = true;
        result = fn(param);
      }
      return result;
    }
    return oncifiedFunc;
  };
  
  const sayHello = (name) => `Hello ${name}`;
  
  const logHello = runsOnce(sayHello);
  
  console.log(logHello('River'));
  console.log(logHello(`River's friend`));
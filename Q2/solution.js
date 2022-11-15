function checkValidation() {
  const numOfRecord = prompt();
  const records = []
  if (parseInt(numOfRecord) === 0) {
    return;
  } else {
    for (let i = 0; i < parseInt(numOfRecord); i++) {
      const inputString = prompt();
      const inputArray = inputString.trim().split(/\s+/);
      const inputObject = {};
      for (let j = 0; j < parseInt(inputArray); j++) {
        if (j === 0) inputObject.id = inputArray[j];
        else if (j === 1) inputObject.isValid = inputArray[j];
        else inputObject.errorMessage = inputArray[j];
      }
      records.push(inputObject);
    }
  }

  var allValid = true;
  const errorCodes = [];

  for (let item = 0; item < records.length; item++) {
    allValid = allValid && records[item].isValid;
    if (!records[item].isValid) errorCodes.push(records[item].errorMessage);
  }

  if (allValid) {
    console.log("Yes");
  } else {
    console.log("No");
    console.log(errorCodes.join(' '));
  }
}

checkValidation();
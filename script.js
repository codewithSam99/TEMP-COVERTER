document.getElementById('calculateBtn').addEventListener('click', function () {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
      document.getElementById('result').innerText = "Please enter valid values.";
      return;
    }
  
    const bmi = weight / (height * height);
    const category = getBMICategory(bmi);
  
    const resultMessage = `Your BMI is ${bmi.toFixed(2)}, which is considered ${category}.`;
    document.getElementById('result').innerText = resultMessage;
  });
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }
  
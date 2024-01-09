function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById('weight').value);
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      alert('Please enter valid values for height and weight.');
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmiResult').textContent = bmi;
  
    displayChart(bmi);
  }
  
  function displayChart(bmiValue) {
    const ctx = document.getElementById('bmiChart').getContext('2d');
  
    const bmiChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Your BMI'],
        datasets: [{
          label: 'BMI',
          data: [bmiValue],
          backgroundColor: ['#007bff'],
          borderColor: ['#007bff'],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  
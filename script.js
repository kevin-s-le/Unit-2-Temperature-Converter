document.addEventListener('DOMContentLoaded', () => {
    const tempInput = document.getElementById('temp');
    const tempType = document.getElementById('tempType');
    const convertBtn = document.getElementById('convertBtn');
    const resultDisplay = document.getElementById('result');

    convertBtn.addEventListener('click', function() {
        const tempValue = parseFloat(tempInput.value);
        const selectedType = tempType.value;

        if (isNaN(tempValue)) {
            resultDisplay.textContent = 'Please enter a valid number for temperature';
            return;
        }

        let convertedTemp;

        if (selectedType === 'Celcius') {
            convertedTemp = (tempValue * 9/5) + 32;
            resultDisplay.textContent = `${tempValue} degrees celcius is ${convertedTemp.toFixed(2)} degrees fahrenheit`;
        } else if (selectedType === 'Fahrenheit') {
            convertedTemp = (tempValue - 32) * 5/9;
            resultDisplay.textContent = `${tempValue} degrees fahrenheit is ${convertedTemp.toFixed(2)} degrees celcius`;
        } else {
            resultDisplay.textContent = 'Please select a temperature type for conversion.';
        }
    });
});
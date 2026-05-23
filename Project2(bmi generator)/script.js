const form = document.querySelector('form')
// this usecase will give empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    
    if (height === '' || height === 0 || isNaN(height)) {
        results.innerHTML =`Please give a valid height ${height}`
    }else if (weight === '' || weight === 0 || isNaN(weight)) {
        results.innerHTML =`Please give a valid weight ${weight}`
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        
        let condition = ""

        if (bmi < 18.6){
            condition = "Underweight"
        } else if(bmi >=18.6 && bmi < 24.9){
            condition = "Normal weight"
        } else if(bmi > 24.9){
            condition = "Overweight"
        }else{
            condition = "Obese"
        }

        // show the result
        results.innerHTML = `<span>${bmi}</span>
                             <p>${condition}</p>   `
    }
})
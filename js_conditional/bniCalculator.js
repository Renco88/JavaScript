const weight =29
const hight = 1
const bmi = weight/(hight*hight);

if(bmi < 18.5){
    console.log('Underweight');
}
else if (bmi > 18.5 && bmi < 24.9 ) {
    console.log('Normal weight');
}
else if (bmi >= 25 && bmi <29.9 ) {
    console.log('Overweight');
} 
else if (bmi >= 30) {
    console.log('Obesity');
} 



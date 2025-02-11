/**
 * Calculate BMI
 * - takes a weight in KG
 * - takes a height in cm
 * - returns the calculated BMI
 */
function calculateBMI(weight, height) {
   const height= height/100
   const BMI = weight/ (height * height);
   //const BMI = 0;

  return BMI;
}

/**
 * Get BMI State
 * - takes the BMI
 * - returns a string with the BMI state
 */
function getBMIState(BMI) {
  if (BMI <18.5 )
  {
    BMIState= "underWeight";
  }
  else if( BMI >= 18.5 && BMI <24.9){
    BMIState="healthy";
  }
   
  else if(BMI >= 25 && BMI <29.9){
    BMIState="over weight";
  }
  else {
    BMIState="obese";
  }
  
  /**
   *  Write your code here 👇🏼
   */
  let BMIState;

  /**
   * Stop making changes here!
   */
  return BMIState;
}

/**
 * Get BMI State by Age
 * - takes the BMI
 * - takes the age
 * - returns a string with the BMI state
 */
function getBMIStateByAge(BMI, age) {
  /**
   *  Write your code here 👇🏼
   */
  let BMIState = "not healthy";
if (age >= 19 && age <24 && BMI >=19 && BMI <24)
{
  BMIState= "healthy";
}
else if ( age >= 25 && age <34 && BMI >=20 && BMI <25)
{
  BMIState= "healthy";
}
else if ( age >= 35 && age< 44 && BMI>= 21 && BMI <26 )
{
  BMIState= "healthy";
}
else if ( age >= 45 && age < 54 && BMI >=22 && 27)
{
  BMIState= "healthy";
}
else if (age >= 55 && age <64 && BMI >= 23 && BMI <28)
{
  BMIState= "healthy";
}
else if (age > 65 && BMI >= 24 && BMI < 29)
{
  BMIState= "healthy";
}
return BMIState;

}

module.exports = { calculateBMI, getBMIState, getBMIStateByAge };

const result = document.getElementById('result');
const commentDisp = document.getElementsByClassName('comment')[0];
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', function () {
    const age = document.getElementById("ageInput").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;

    if (age === "" || height === "" || weight === "" || (!genderMale && !genderFemale)) {
        alert("Please fill in all the fields.");
        return;
    }
    const heightInMeters = height / 100;
    let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    console.log(bmi)
    result.textContent = bmi;

    let comment = "";
    if (bmi < 18.5) {
        comment = "underweight  : Udd jayega re! 🦜 Kha le kuch 🍔🍕";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        comment = "normal weight :Bilkul mast! 🎯 Aise hi reh 💪😎";
    } else if (bmi >= 25 && bmi < 29.9) {
        comment = "overweight:Bas kar bhai,ab Tanker banega  kya! 🚛";
    } else {
        comment = " obese :Tanker ban gaya tu ! 🚛  gym ja! 🏃‍♂️ kam kha🥗";
    }
    

    commentDisp.textContent = comment;
});

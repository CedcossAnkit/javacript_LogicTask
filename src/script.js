function bt() {
    var name = document.getElementById('namee').value;
    var age = document.getElementById('age').value;
    var weight = document.getElementById('weight').value;

    validate(name, age, weight);
    checkWeight(name, age, weight);
}

function display(result) {
    document.getElementById('result').innerHTML = result;
}
function validate(f1, f2, f3) {
    if (f1 == "" || f2 == "" || f3 == "") {
        display("All Feilds Are Required");
    }
}



function checkWeight(name, age, weight) {
    if ((age >= 5 && age <= 7) || (age >= 8 && age <= 10) || (age >= 11 && age <= 15) || (age >= 16 && age <= 20)) {
        if (age >= 5 && age <= 7 && weight >= 15 && weight <= 20) {
            var result = "Hello " + name + " !! Your Weight is Perfect";
            display(result);
            console.log("chekc weight");
        }
        else if (age >= 5 && age <= 7 && weight > 20) {
            var result = "Hello " + name + " !! Your Weight is less than recommended value of 20kg at the age of " + age;
            display(result);
            console.log("chekc weight");
        }
        else if (age >= 5 && age <= 7 && weight < 15) {
            var result = "Hello " + name + " !! Your Weight is less than recommended value of 15kg at the age of " + age;
            display(result);
            console.log("chekc weight");
        }


        if (age >= 8 && age <= 10 && weight >= 21 && weight <= 25) {
            var result = "Hello " + name + " !! Your Weight is Perfect";
            display(result);
        }
        else if (age >= 8 && age <= 10 && weight < 21) {
            var result = "Hello " + name + " !! Your Weight is less than recommended value of 21kg at the age of " + age;
            display(result);
            console.log("chekc weight");
        }
        else if (age >= 8 && age <= 10 && weight > 25) {
            var result = "Hello " + name + " !! Your Weight is less than recommended value of 25kg at the age of " + age;
            display(result);
            console.log("chekc weight");
        }


        if (age >= 11 && age <= 15 && weight >= 26 && weight <= 30) {
            var result = "Hello " + name + " !! Your Weight is Perfect";
            display(result);
        }
        else if (age >= 11 && age <= 15 && weight > 30) {
            var result = "Hello " + name + " !! Your Weight is less than recommended value of 30kg at the age of " + age;
            display(result);
            console.log("chekc weight");
        }
        else if (age >= 11 && age <= 15 && weight < 26) {
            var result = "Hello " + name + " !! Your Weight is less than recommended value of 26kg at the age of " + age;
            display(result);
            console.log("chekc weight");
        }


        if (age >= 16 && age <= 20 && weight >= 31 && weight <= 40) {
            var result = "Hello " + name + " !! Your Weight is Perfect";
            display(result);
        }
        else if (age >= 16 && age <= 20 && weight > 40) {
            var result = "Hello " + name + " !! Your Weight is less than recommended value of 40kg at the age of " + age;
            display(result);
            console.log("chekc weight");
        }
        else if (age >= 16 && age <= 20 && weight < 31) {
            var result = "Hello " + name + " !! Your Weight is less than recommended value of 31kg at the age of " + age;
            display(result);
            console.log("chekc weight");
        }

    }
    else {
        display('Please Enter given range age!')
    }

}

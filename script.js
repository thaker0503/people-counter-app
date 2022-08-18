// window load event listener make make container display none
window.addEventListener("load", function() {
    document.getElementById("a2").style.display = "none";
    document.getElementById("a1").style.display = "flex";
} );

$(document).keypress(function (e) {
    if (e.which == 13) {
        passwordCheck();
    }
});

var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var pass3 = document.getElementById("pass3");
var pass4 = document.getElementById("pass4");
var pass5 = document.getElementById("pass5");
var pass6 = document.getElementById("pass6");


function passwordCheck() {
    var final_password = pass1.value + pass2.value + pass3.value + pass4.value + pass5.value + pass6.value;
    if (checkPassword(final_password) === true) {
        document.getElementById("a2").style.display = "flex";
        document.getElementById("a1").style.display = "none";
    } 
    else{
        alert("Wrong Password");
        pass1.value = "";
        pass2.value = "";
        pass3.value = "";
        pass4.value = "";
        pass5.value = "";
        pass6.value = "";
        pass1.focus();
    }
}

function checkPassword(a) {
    var password = "000000";
    console.log(password);
    if (a === password) {
        return true;
    }
    return false;
}

const count = document.getElementById('count');
        const inc = document.getElementById('increment');
        const save = document.getElementById('save');
        const previous = document.getElementById('previous');
        let countValue = 0;
        const array = []
        const arrFor = []
        inc.addEventListener('click', () => {
            countValue++;
            count.innerHTML = countValue;
        }); 

        //Version 0.1.0
        save.addEventListener('click', () => {
            array.push(countValue);
            console.log("Using Push() ==>")
            console.log(array)
            previous.innerHTML += countValue + ' - ';
            countValue = 0;
            count.textContent = countValue;
        });

        //Version 0.2.0
        // save.addEventListener('click', () => {
        //     //create a new array and push the countValue to it
        //     arrFor.push(countValue);
        //     //create a condition to display single digit numbers with a 0 in front of it of countValue is less than 10
        //     previous.innerHTML += `<li class="list">${countValue < 10 ? "0" : ""}${countValue} - ${new Date().toLocaleString()}</li>`;
        //     countValue = 0;
        //     count.innerHTML = countValue;
        // });
        
const password = document.getElementById('password');

       

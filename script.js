
window.addEventListener("load", function() {
    document.getElementById("a2").style.display = "none";
    document.getElementById("a1").style.display = "flex";
} );



var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var pass3 = document.getElementById("pass3");
var pass4 = document.getElementById("pass4");
var pass5 = document.getElementById("pass5");
var pass6 = document.getElementById("pass6");
var finalPassword = "";

pass1.addEventListener("input", function() {
    if (pass1.value.length > 0) {
        pass2.focus();
    }
} );

pass2.addEventListener("input", function() {
    if (pass2.value.length > 0) {
        pass3.focus();
    }
} );

pass3.addEventListener("input", function() {
    if (pass3.value.length > 0) {
        pass4.focus();
    }
} );

pass4.addEventListener("input", function() {
    if (pass4.value.length > 0) {
        pass5.focus();
    }
} );

pass5.addEventListener("input", function() {
    if (pass5.value.length > 0) {
        pass6.focus();
    }
} );

pass6.addEventListener("input", function() {
    if (pass6.value.length > 0) {
        finalPassword = pass1.value + pass2.value + pass3.value + pass4.value + pass5.value + pass6.value;
        console.log("finalPassword: " + finalPassword);
        console.log("finalPassword.length: " + finalPassword.length);
        if(finalPassword.length === 6) {
            passwordCheck();
        }
    }
} );

function passwordCheck() {
    
    if (checkPassword(finalPassword) === true) {
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
        // save.addEventListener('click', () => {
        //     array.push(countValue);
        //     console.log("Using Push() ==>")
        //     console.log(array)
        //     previous.innerHTML += countValue + ' - ';
        //     countValue = 0;
        //     count.textContent = countValue;
        // });

        //Version 0.2.0
        save.addEventListener('click', () => {
            arrFor.push(countValue);
            previous.innerHTML += `<li class="list">${countValue < 10 ? "0" : ""}${countValue} - ${new Date().toLocaleString()}</li>`;
            countValue = 0;
            count.innerHTML = countValue;
        });


       


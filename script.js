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
            function addDash(array) {
                for (let i = 0; i < array.length; i++) {
                    if (i < array.length - 1) {
                        arrFor.push(array[i] + "-");
                    } else {
                        arrFor.push(array[i]);
                    }
                }
                return arrFor;
            }
            countValue = 0;
            count.innerHTML = countValue;
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
        
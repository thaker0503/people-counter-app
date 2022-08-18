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
        //     previous.innerHTML += countValue + '-';
        //     countValue = 0;
        //     count.innerHTML = countValue;
        // });

        //Version 0.2.0
        save.addEventListener('click', () => {
            //create a new array and push the countValue to it
            arrFor.push(countValue);
            //create a condition to display single digit numbers with a 0 in front of it of countValue is less than 10
            if(countValue < 10){
                previous.innerHTML += `<li class="list">0${countValue} - ${new Date().toLocaleString()}</li>`;
            }else{
                previous.innerHTML += `<li class="list">${countValue} - ${new Date().toLocaleString()}</li>`;
            }
            //print the array in previous span with current date and time as a list
            
            countValue = 0;
            count.innerHTML = countValue;
        });
        

let count = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false; 

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

start.addEventListener('click',()=>{
    timer = true;
    stopwatch();
});

stop.addEventListener('click',()=>{
    timer = false;
});

reset.addEventListener('click',()=>{
    timer = false;

    count = 0;
    sec = 0;
    min = 0;
    hr = 0;

    document.getElementById('count').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('hr').innerHTML = '00';
});

function stopwatch(){
    if (timer == true) {
        count = count + 1;
        
        
        if (count == 100) {
            count = 0;
            sec = sec + 1;
        }
        
        
        if (sec == 60) {
            sec = 0;
            min = min + 1
        }
        
        if (min == 60) {
            min = 0;
            hr = hr + 1
        }
        
        var count_str = count;
        var sec_str = sec;
        var min_str = min;
        var hr_str = hr;
        
        if (count < 10) {
            count_str = '0' + count_str;
        }

        if (sec < 10) {
            sec_str = '0' + sec_str
        }
        
        if (min < 10) {
            min_str = '0' + min_str
        }
        
        if (hr < 10) {
            hr_str = '0' + hr_str
        }
        
        document.getElementById('count').innerHTML = count_str;
        document.getElementById('sec').innerHTML = sec_str;
        document.getElementById('min').innerHTML = min_str;
        document.getElementById('hr').innerHTML = hr_str;
        
        setTimeout('stopwatch()',10);
    } 
}

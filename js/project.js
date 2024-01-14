    // JavaScript code to increment counters and update <h3> elements
    const counter1 = document.getElementById('counter1');
    const counter2 = document.getElementById('counter2');
    let count1 = 0;
    let count2 = 0;

    function incrementCounters() {
    if (count1 <= 500000) {
        counter1.textContent ='+'+ count1;
        count1=count1+1000;
    }
    if (count2 <= 150) {
        counter2.textContent = count2;
        count2++;
    }
    if (count1 <= 500000 || count2 <= 150) {
        setTimeout(incrementCounters, 27);
    }
    }
        
     setTimeout(incrementCounters,27);
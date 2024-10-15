
function updateHands() {
    const date = new Date();
    //Updating secs hand 
    const sec_hand = document.querySelector('.sec-hand');    
    const seconds = date.getSeconds();
    const sec_degree = (seconds / 60) * 360 + 90;
    sec_hand.style.transform = `rotate(${sec_degree}deg)` 

    //Updating min hand
    const min_hand = document.querySelector('.min-hand');    
    const minutes = date.getMinutes();
    const minutes_degree = (minutes / 60) * 360 + 90;
    min_hand.style.transform = `rotate(${minutes_degree}deg)`

    //Updating hour hand
    const hour_hand = document.querySelector('.hr-hand');    
    const hour = date.getHours();
    const hour_degree = ((hour / 12) * 360) + 90;
    hour_hand.style.transform = `rotate(${hour_degree}deg)`
}

setInterval(updateHands, 1000);

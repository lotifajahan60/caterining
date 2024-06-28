function displayClock(){
    const time=new Date();
    const formatedTime=time.toLocaleTimeString("en-Us")
    const formatedDate=time.toLocaleDateString("en-Us")
    const clock=document.getElementById("clock")
    const date=document.getElementById("date")
    clock.innerText=formatedTime;
    date.innerText=formatedDate;
}
setInterval(displayClock,1000);
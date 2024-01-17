function subscribe(){

  let subscribeBtn = document.querySelector('.sub-btn');

  if(subscribeBtn.innerText === 'Subscribe'){
    subscribeBtn.innerHTML = 'Subscribed';
  }
  else{
    subscribeBtn.innerHTML = 'Subscribe';
  }

}

function startBtn(){
  let start = document.querySelector('.start-btn');

  if(start.innerText === 'Start'){
    setTimeout(function(){
      start.innerText = "Finished!";
    },1000);
  } 

  start.innerText = "Loading..."
}



function addToCart(){
  let displayTimeOut;
  let add = document.querySelector('.add-cart-btn');
  let displayAdded = document.querySelector('.display-added');

    displayAdded.innerText = "Added";
    
    clearTimeout(displayTimeOut);

      displayTimeOut =  setTimeout(function(){
      displayAdded.innerText = "";
    },2000);

}


let messages = 2;
let isDisplaying;
let messageUpdation;
displayNotification();
function displayNotification(){
  if(isDisplaying){
    return;
  }

  messageUpdation = setInterval(function(){

if(document.title === "App" && messages > 0){
 document.title = `(${messages} new messages)`
}
else{
 document.title = "App";
}  
},1000);

}

isDisplaying = true;





function stopNotification(){
  isDisplaying = false;

  clearInterval(messageUpdation);
  document.title = "App";
}

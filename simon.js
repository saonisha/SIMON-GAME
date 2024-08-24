// let order=[];
// let playerOrder=[];
// let flash;
// let turn;
// let good;
// let compTurn;
// let intervalId;
// let strict=false;
// let noise =true;
// let on=false;
// let win;

// const turnCounter=document.querySelector("#turn");
// const topLeft=document.querySelector("#topleft");
// const topRight=document.querySelector("#topright");
// const bottomLeft=document.querySelector("#bottomleft");
// const bottomRight=document.querySelector("#bottomright");
// const strictButton=document.querySelector("#strict");
// const onButton=document.querySelector("#on");
// const startButton=document.querySelector("#start");

// strictButton.addEventListener('click',(event)=>{
//     if(strictButton.checked==true){
//         strict=true;
//     }
//     else{
//         strict=false;
//     }

// });

// onButton.addEventListener('click',(event)=>{
//     if(onButton.checked==true){
//         on=true;
//         turnCounter.innerHTML="-";
//     }
//     else{
//         on=false;
//         turnCounter.innerHTML="";
//         clearColor();
//         clearInterval(intervalId);
//     }
   
// })

// startButton.addEventListener("click",(event)=>{
// if(on || win){
//     play();
// }
// });

// function play(){
//     win=false; //will have to reset all the variables
//     order=[]; //the order in which colors are flashed
//     playerOrder=[];
//     flash=0; //i guess the numbers of colors flashed
//     intervalId=0;
//     turn=1;//since we are starting the game again
//     turnCounter.innerHTML=1;//so we will be at first round 
//     good=true;//means player hasnot hit anything incorrect yet
//     for(var i=0;i<10;i++){
//         order.push(Math.floor(Math.random()*4)+1);
        
//     }
//     console.log(order);
//     compTurn=true;  //means computer flashing lights and the user has to copy
//     intervalId=setInterval(gameTurn,8000);//set interval is going to run a function*gameTurn after every 8000 milliseconds 
//     //the comp flashes a light every 8000 miliioseconds and thats gonna keep repeating until the intervalId is cleared
//     // and its gonna get cleared after all the lights are flashed
//     //gameTurn function flashes the colors
//     }

//     function gameTurn(){//gameTurn function flashes colors , this function starts the game
//         on=false; //when on is false the player cannot click any of the buttons
//         //while the computer is flashing colors we dont want player to click any of the buttons
//         if(flash==turn) //if the number of times lights have flashed is equal to the turn we are on that means the computer turns is over 
//         //so if computer's turn is over  we will clear Interval 
//         {
//         clearInterval(intervalId);
//         compTurn=false;
//         clearColor();
//         on=true; //meand the player can start pressing the buttons

//         }
//         if(compTurn){
//             clearColor();//we wanna clear the color from the last time it lit up 
//             setTimeout(()=>{
//             //now its gonna flash a color
//             if(order[flash]==1) one();
//             if(order[flash]==2) two();
//             if(order[flash]==3) three();
//             if(order[flash]==4) four();
//             flash++;
//             },200 ) //it will do something once after certain amount of milliseconds
      
//         }
//     }

//     function one(){
//         if(noise){
//             let audio=document.getElementById("clip1");
//             audio.play();
//         }
//         noise=true;
//         topLeft.style.backgroundColor="lightgreen";

//     }

//     function two(){
//         if(noise){
//             let audio=document.getElementById("clip2");
//             audio.play();
//         }
//         noise=true;
//         topRight.style.backgroundColor="tomato";
        
//     }

//     function three(){
//         if(noise){
//             let audio=document.getElementById("clip3");
//             audio.play();
//         }
//         noise=true;
//         bottomLeft.style.backgroundColor="purple";
        
//     }

//     function four(){
//         if(noise){
//             let audio=document.getElementById("clip4");
//             audio.play();
//         }
//         noise=true;
//         bottomRight.style.backgroundColor="lightskyblue";
        
//     }

//     function clearColor(){
//         topLeft.style.backgroundColor="darkgreen";
//         topRight.style.backgroundColor="darkred";
//         bottomLeft.style.backgroundColor="goldenrod";
//         bottomRight.style.backgroundColor="darkblue";
//     }

//     topLeft.addEventListener('click',(event)=>{
//         if(on){
//             playerOrder.push(1);//array of colors that player has clicked
//             check();  //function to check if the player was right
//                      //whether or not the player was right 
//                     //this one() function will be called which lights up the function

//             one();
//             if(!win){ //if player has not won yet we will set time out and clear the color
//                 setTimeout(()=>{
//                     clearColor();
//                 },300);
//             }
//         }
//     });
//     topRight.addEventListener('click',(event)=>{
//             if(on){
//                 playerOrder.push(2);
//                 check();
//                 two();
//                 if(!win){ 
//                     setTimeout(()=>{
//                         clearColor();
//                     },300);
//                 }
//             }
//         });
//     bottomLeft.addEventListener('click',(event)=>{
//             if(on){
//                 playerOrder.push(3);
//                 check();
//                 three();
//                 if(!win){ 
//                     setTimeout(()=>{
//                         clearColor();
//                     },300);
//                 }
//             }
//         });
//     bottomRight.addEventListener('click',(event)=>{
//             if(on){
//                 playerOrder.push(4);
//                 check();
//                 four();
//                 if(!win){ 
//                     setTimeout(()=>{
//                         clearColor();
//                     },300);
//                 }
//             }
//         });

    //CODE COPIED
    
    let order = []; //array to store the  order in which colors will be flashed by the computer
    let playerOrder = []; //array to store the order in which user flashes colors
    let flash; //variable to track the no of flashes
    let turn;// variable to track the no of turns
    let good; //boolean variable if good==true means player hasnot made any wrong move if good==false means player has made a false move
    let compTurn; //booelan variable to check if its computer's turn or not
    let intervalId;
    let strict = false; 
    let noise = true;
    let on = false; //boolean variable 
    let win;

    const turnCounter = document.querySelector("#turn");
    const topLeft = document.querySelector("#topleft");
    const topRight = document.querySelector("#topright");
    const bottomLeft = document.querySelector("#bottomleft");
    const bottomRight = document.querySelector("#bottomright");
    const strictButton = document.querySelector("#strict");
    const onButton = document.querySelector("#on");
    const startButton = document.querySelector("#start");

    strictButton.addEventListener('click', (event) => {
    if (strictButton.checked == true) {
        strict = true;
    } else {
        strict = false;
    }
    });

    onButton.addEventListener('click', (event) => {
    if (onButton.checked == true) {
        on = true;
        turnCounter.innerHTML = "-";
    } else {
        on = false;
        turnCounter.innerHTML = "";
        clearColor();  //if power button is not on then all the color will be cleared that is its default value
        clearInterval(intervalId); //function to clear the interval
    }
    });

    startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
    });

    function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
        console.log(order);
    }
    compTurn = true;

    intervalId = setInterval(gameTurn, 800);
    }





    function gameTurn() {
    on = false;

    if (flash == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {
        if (order[flash] == 1) one();
        if (order[flash] == 2) two();
        if (order[flash] == 3) three();
        if (order[flash] == 4) four();
        flash++;
        }, 200);
    }
    }




    function one() {
    if (noise) {
        let audio = document.getElementById("clip1");
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "lightgreen";
    }

    function two() {
    if (noise) {
        let audio = document.getElementById("clip2");
        audio.play();
    }
    noise = true;
    topRight.style.backgroundColor = "tomato";
    }

    function three() {
    if (noise) {
        let audio = document.getElementById("clip3");
        audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = "yellow";
    }

    function four() {
    if (noise) {
        let audio = document.getElementById("clip4");
        audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = "lightskyblue";
    }

    function clearColor() {
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "darkblue";
    }

    function flashColor() {
    topLeft.style.backgroundColor = "lightgreen";
    topRight.style.backgroundColor = "tomato";
    bottomLeft.style.backgroundColor = "yellow";
    bottomRight.style.backgroundColor = "lightskyblue";
    }

    topLeft.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(1);
        check();
        one();
        if(!win) {
        setTimeout(() => {
            clearColor();
        }, 300);
        }
    }
    })

    topRight.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(2);
        check();
        two();
        if(!win) {
        setTimeout(() => {
            clearColor();
        }, 300);
        }
    }
    })

    bottomLeft.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(3);
        check();
        three();
        if(!win) {
        setTimeout(() => {
            clearColor();
        }, 300);
        }
    }
    })

    bottomRight.addEventListener('click', (event) => {
    if (on) {
        playerOrder.push(4);
        check();
        four();
        if(!win) {
        setTimeout(() => {
            clearColor();
        }, 300);
        }
    }
    })



    function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
        good = false;

    if (playerOrder.length == 5 && good) {
        winGame();
    }

    if (good == false) {
        flashColor();
        turnCounter.innerHTML = "NO!";
        setTimeout(() => {
        turnCounter.innerHTML = turn;
        clearColor();

        if (strict) {
            play();
        } else {
            compTurn = true;
            flash = 0;
            playerOrder = [];
            good = true;
            intervalId = setInterval(gameTurn, 800);
        }
        }, 800);

        noise = false;
    }

    if (turn == playerOrder.length && good && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalId = setInterval(gameTurn, 800);
    }

    }

    function winGame() {
    flashColor();
    turnCounter.innerHTML = "WIN!";
    on = false;
    win = true;
    }

/*Start Control Visibility of tab*/
let bars = document.querySelector(".bars");
let tab =  document.querySelector(".tab");
let logIn = document.querySelector(".log-demo .log-in");
let GetDemo = document.querySelectorAll(".get-demo");

let before = document.querySelector(".before");
let after = document.querySelector(".after");
let Control = document.querySelector(".control");

let price1 =  document.querySelector(".number1");
let price2 =  document.querySelector(".number2");
let price3 =  document.querySelector(".number3");

let box = document.querySelectorAll(".surprise .row .box")


let prices =[price1 , price2 , price3]; 



bars.addEventListener("click" , ()=>{
    if ( tab.style.visibility === "hidden")
    {
        tab.style.width = "295px";
        tab.style.opacity = "0.9" ;
        tab.style.visibility = "visible";
    }
    else
    {
        tab.style.visibility = "hidden";
        tab.style.width = "0";
        tab.style.opacity = "0" ;
    }
});


GetDemo.forEach((demo) =>{
    demo.addEventListener("click" , () =>{
        window.location.href = "Get_Demo.html";
    });
})

logIn.addEventListener("click" , () =>{
    window.location.href = "LogIn.html";
});


document.querySelectorAll("header ul li").forEach((li) => {
    li.addEventListener("click", (event) => {
        const clickedLink = li.querySelector("a");
        const href = clickedLink.getAttribute("href");

        sessionStorage.setItem("sessionstore", href);
        localStorage.setItem("localStore", "index.html");
    });
});

window.addEventListener("load", () => {
    const sessionStore = sessionStorage.getItem("sessionstore");

    if (sessionStore) {
        document.querySelectorAll("header ul li").forEach((li) => {
            const link = li.querySelector("a");
            if (link.getAttribute("href") === sessionStore ) {
                link.classList.add("active");
                link.style.color = "#2196f3";
                li.style.borderBottom = "solid 3px #2196f3";
            }
        });
    }
    else
    {
        const localStoreLink =   localStorage.getItem("localStore");
        if (localStoreLink) {
            document.querySelectorAll("header ul li").forEach((li) => {
                const link = li.querySelector("a");
                if (link.getAttribute("href") === localStoreLink ) {
                    link.classList.add("active");
                    link.style.color = "#2196f3";
                    li.style.borderBottom = "solid 3px #2196f3";
                }
            });
        }
    }
   
});



let flag = 0 ;
Control.addEventListener("click" , (e)=>{
    if (flag === 0)
    {
        before.style.visibility = "hidden";
        after.style.visibility = "visible";
        Control.style.backgroundColor = "#5BCBF5";
        prices[0].innerHTML = "1099";
        prices[1].innerHTML = "1599";
        prices[2].innerHTML = "1799";
        flag ++ ;
    }
    else
    {
        before.style.visibility = "visible";
        after.style.visibility = "hidden";
        Control.style.backgroundColor = "gray";

        prices[0].innerHTML = "725";
        prices[1].innerHTML = "1055";
        prices[2].innerHTML = "1088";
        flag = 0 ;
    }
       

});

/*before.addEventListener("click" , ()=>{
   before.style.visibility = "hidden";
   after.style.visibility = "visible";
   Control.style.backgroundColor = "#5BCBF5";
   prices[0].innerHTML = "1099";
   prices[1].innerHTML = "1599";
   prices[2].innerHTML = "1799";

});


after.addEventListener("click" , ()=>{
    before.style.visibility = "visible";
    after.style.visibility = "hidden";
    Control.style.backgroundColor = "gray";

    prices[0].innerHTML = "725";
    prices[1].innerHTML = "1055";
    prices[2].innerHTML = "1088";
 
 });*/


 box.forEach((box)=>{
    box.addEventListener("mouseenter" , (e)=>{
        e.target.style.opacity = "0.7";
        e.target.style.transform = "translateY(-10%)";
    });
    box.addEventListener("mouseleave" , (e)=>{
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
    });
 });


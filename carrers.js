let tab =  document.querySelector(".tab");
let bars = document.querySelector(".bars");
let logIn = document.querySelector(".log-demo .log-in");
let GetDemo = document.querySelectorAll(".get-demo");
let LandBackground = document.querySelector(".landing") ;
let box = document.querySelectorAll(".surprise .row .box");


let viewLink = document.querySelector(".view a");




bars.addEventListener("click" , ()=>{
    if (tab.style.visibility === "hidden")
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

window.onload = () =>{
    const currentOpacity = window.getComputedStyle(LandBackground).opacity;
   
    if (currentOpacity === "0")
    {
        
        LandBackground.style.opacity = "1";
    }
    else
    {
        console.log("omaur");
    }
    
};

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

 viewLink.addEventListener("click" , ()=>{
    
    localStorage.setItem("activeLink", "index.html");
});
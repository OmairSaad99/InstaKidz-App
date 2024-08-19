// دالة لتحديث الصورة بناءً على عرض النافذة
// تأكد من أنك حصلت على العنصر الصحيح، مثل
const image = document.querySelector('img');

// التحقق من عرض نافذة المتصفح


window.addEventListener("load" , ()=>{
    if (window.innerWidth <= 425) {
        // تعيين مصدر الصورة وفقًا للعرض
        image.setAttribute("src", "Images/Instalogo.jpeg");
        document.querySelector(".logo").style.width = "120px";
        document.querySelector(".logo").style.height = "120px";
    } else {
        image.setAttribute("src", "Images/logo.jpeg");
        document.querySelector(".logo").style.width = "150px";
        document.querySelector(".logo").style.height = "150px";
    }
})


window.addEventListener("resize" , ()=>{
    if (window.innerWidth <= 425) {
        // تعيين مصدر الصورة وفقًا للعرض
        image.setAttribute("src", "Images/Instalogo.jpeg");
        document.querySelector(".logo").style.width = "120px";
        document.querySelector(".logo").style.height = "120px";
    } else {
        image.setAttribute("src", "Images/logo.jpeg");
        document.querySelector(".logo").style.width = "150px";
        document.querySelector(".logo").style.height = "150px";
    }
})
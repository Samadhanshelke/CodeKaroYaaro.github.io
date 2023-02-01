const OpenPopup=document.getElementsByClassName("open-popup")[0];
const ClosePopup=document.querySelector(".popup img");
const popup=document.getElementsByClassName("popup")[0]
 OpenPopup.addEventListener("click",()=>{
    // e.preventDefault;
// alert("hello")
    popup.classList.add("active");
});
ClosePopup.addEventListener("click",(e)=>{
    console.log(e.target)
    popup.classList.remove("active");
});

const openNav=document.querySelector(".open_nav");
const closeNav=document.querySelector(".close_nav");
const navLinks=document.querySelector(".navlinks");
openNav.addEventListener("click",()=>{
    navLinks.classList.add("active_nav");
    if(navLinks.classList.contains("active_nav")){
        openNav.style.display="none";
        closeNav.style.display="block";

    }
    else{
        closeNav.style.display="none";
        openNav.style.display="block";

    }

})
closeNav.addEventListener("click",()=>{
    navLinks.classList.remove("active_nav");
    // closeNav.style.display="none";
    if(navLinks.classList.contains("active_nav")){
        closeNav.style.display="none";
        openNav.style.display="block";

    }
    else{
        closeNav.style.display="none";
        openNav.style.display="block";

    }
    

})

// ---------------grades-section-----------

const Components=document.querySelectorAll(".price-component");
const Grades=document.querySelectorAll(".grade-name");
const Activegrade=document.querySelectorAll(".price-section .grade-div span")
// console.log(Grades.length)
Components[0].style.display='flex';
Activegrade[0].classList.add("active-grade")
Grades.forEach((grade,n)=>{
   
    grade.addEventListener("click",()=>{
        // alert("hi")
        reset();
        Activegrade[n].classList.add("active-grade")
        Components[n].style.display='flex';

    })
    
})

function reset(){
    Components.forEach((component)=>{
        component.style.display='none';
    })
    Activegrade.forEach((grade)=>{
      grade.classList.remove("active-grade")
    })
}




// ---------------------------------------------------------------------
function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
    }
    function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
    countNum: element.html()
    }).animate({
    countNum: maxval
    }, {
    //duration 5 seconds
    duration: 5000,
    easing: 'linear',
    step: function() {
    element.html(Math.floor(this.countNum) + html);
    },
    complete: function() {
    element.html(this.countNum + html);
    }
    });
    }
    }
    //When the document is ready
    $(function() {
    //This is triggered when the
    //user scrolls the page
    $(window).scroll(function() {
    //Checking if each items to animate are
    //visible in the viewport
    $("h2[data-max]").each(function() {
    inVisible($(this));
    });
    })
    });


    // -----------------footer accordion----------------//
    const openBox = document.querySelectorAll(".box");
const labels = document.querySelectorAll(".label");
for(let i=0;i<labels.length;i++){
    labels[i].addEventListener('click',function(){
         for(let j=0;j<openBox.length;j++){
          if(i==j){
            openBox[j].classList.toggle("active");
          }
          else{
            openBox[j].classList.remove("active");
          }
         }
    });   
}
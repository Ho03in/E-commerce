' use strict ' ;
/*
  add event on element
  */
 const addEventOnElem = function(elem , type , callback){
    if(elem.length > 1){
        for(let i = 0 ; i < elem.length ; i++)
        elem[i].addEventListener(type , callback) ;
    }   else {
        elem.addEventListener(type , callback) ;
    }
 }
 /*
navbar toggle
  */
 const  navTogglers = document.querySelectorAll("[data-nav-toggler]") ;
 const  navbar = document.querySelector("[data-navbar]") ;
 const  navbarLinks = document.querySelectorAll("[data-nav-link]") ;
 const  overlay = document.querySelector("[data-overlay]") ;
const toggleNavbar = function(){
    navbar.classList.toggle("active") ;
    overlay.classList.toggle("active") ;
}
addEventOnElem(navTogglers, "click" ,toggleNavbar)
const closeNavbar = function(){
navbar.classList.remove("active")
overlay.classList.remove("active")
}
addEventOnElem(navbarLinks, "click" , closeNavbar)
/*
header sticky
  */
 const header = document.querySelector("[data-header]")
 const headerActive = function() {
    if (window.scrollY > 100){
        header.classList.add("active")
    }   else {
        header.classList.remove("active")
    }
 }
 addEventOnElem(window , "scroll" , headerActive)

 let lastScrolledpos = 0
 const headerSticky = function(){
    if(lastScrolledpos >= window.scrollY){
        header.classList.remove("header-hide")
    }   else {
        header.classList.add("header-hide")
    }
    lastScrolledpos = window.scrollY
 }
 addEventOnElem(window , "scroll" , headerSticky)
 
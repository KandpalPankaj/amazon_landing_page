// ---------------navbar---------------------------

import navbar1 from "/components/navbar1.js"

let navbardiv= document.getElementById("navbar1");
navbardiv.innerHTML=navbar1();

import navbar2 from "/components/navbar2.js"
console.log(' navbar2', navbar2);
let navbar2div= document.getElementById("navbar2");
navbar2div.innerHTML=navbar2();

// -----------------imageslider----------------------------

let imgArr=[{img:"./images/imageslider/1.jpg"},
            {img:"./images/imageslider/2.jpg"},
            {img:"./images/imageslider/3.jpg"},
            {img:"./images/imageslider/4.jpg"},
            {img:"./images/imageslider/5.jpg"},
            {img:"./images/imageslider/6.jpg"},
            {img:"./images/imageslider/7.jpg"},
            {img:"./images/imageslider/8.jpg"}]

import {slide,responsiveSlider} from "/components/imageslider.js";

let imgslider=document.getElementById("slider");
slide(imgslider,imgArr);
responsiveSlider();

// -----------------------product data------------------------------------------


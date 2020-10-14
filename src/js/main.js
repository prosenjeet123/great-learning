import './../scss/main'

//import './allscripts.js'

import imgx from './../img/sakht-launda-anim.gif'

import img2 from './../img/sakht-launda.jpg'

console.log('Core js Deployed! Happy Coding.');

function Person(developer, mail,project) {
    this.developer = developer;
    this.email = mail;
    this.project=project;
  }
  
  var me = new Person("Prosenjeet Paul", "prosenjeet123@gmail.com","GreatLearning");
  
  console.table(me);
  
//for youtuber hover

  var youtuberimg=document.getElementsByClassName('row--youtubeimg')[0];
  youtuberimg.addEventListener("mouseover",function(){
    this.setAttribute("src", imgx);
    document.getElementsByClassName('row__youtubewrap')[0].classList.add('preview');
  });
  youtuberimg.addEventListener("mouseleave",function(){
    this.setAttribute("src", img2);
    document.getElementsByClassName('row__youtubewrap')[0].classList.remove('preview');
  });

  //for accordian
  var accordele= document.getElementsByClassName('row__accord__li');
 
  if(accordele){
    for (var i=0;i<accordele.length;i++){
      accordele[i].addEventListener('click',function(){
        //close all opened accords
        resetall();
        this.classList.add('active');
        var phei=this.querySelectorAll('.row__accord__panel p')[0];
        phei.style.height= phei.scrollHeight+'px';
      });
    }
  }

  //reset accordian
  function resetall(){
    if(accordele){
      for (var i=0;i<accordele.length;i++){
        accordele[i].classList.remove('active');
         var phei=accordele[i].querySelectorAll('.row__accord__panel p')[0];
         phei.style.height= '0px';
      }
    }
  }

  //slider with slideintoview() method
  //this one is the first for me
  //you can also see my other project in slider which is in pure javascript
  //and without slideintoview()
  //see here: https://github.com/prosenjeet123/swiperforall


  //slider properly not working in mobile
  var slidewi=document.getElementsByClassName('row__slider-wrap__slider')[0].scrollWidth;
  //count slider items
  var slideitems=document.getElementsByClassName('row__slider-wrap__slider__ul__li');
  var slideitemcount=0;
  if(slideitems){
    for(var i=0;i<slideitems.length;i++){
      slideitemcount=slideitemcount+1;
      
    }
  }

  //now divide with items
  var oneslidew=slidewi/slideitemcount;

  var sliderul=document.getElementsByClassName('row__slider-wrap__slider__ul')[0];
 
    var indexval=0;
    var leftar=document.getElementsByClassName('row__slider-wrap__leftar')[0];
    leftar.addEventListener('click',function(){
      if(indexval!=0){
        document.getElementsByClassName('row__slider-wrap__leftar')[0].style.opacity="1";
        document.getElementsByClassName('row__slider-wrap__rightar')[0].style.opacity="1";
        indexval=indexval-1;
        document.getElementsByClassName('row__slider-wrap__slider__ul__li').item(indexval).scrollIntoView();
        console.log(indexval)
      }else{
        //set arrow opacity
        document.getElementsByClassName('row__slider-wrap__leftar')[0].style.opacity="0.2";
      }
    });
  
    var rightar=document.getElementsByClassName('row__slider-wrap__rightar')[0];
    rightar.addEventListener('click',function(){
      if(indexval<slideitemcount-1){
        document.getElementsByClassName('row__slider-wrap__rightar')[0].style.opacity="1";
        document.getElementsByClassName('row__slider-wrap__leftar')[0].style.opacity="1";
        indexval=indexval+1;
        document.getElementsByClassName('row__slider-wrap__slider__ul__li').item(indexval).scrollIntoView();
        console.log(indexval)
      }else{
        //set arrow opacity
        document.getElementsByClassName('row__slider-wrap__rightar')[0].style.opacity="0.2";
      }
    });


  


  //for sticky footer
  window.onscroll = function() { 
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 390) {
    document.getElementsByClassName('sticky')[0].classList.add('sticky--makeitactive');
  } else {
    document.getElementsByClassName('sticky')[0].classList.remove('sticky--makeitactive');
  }
};

//on sticky apply button click
document.getElementById('scrollmetop').addEventListener('click',function(){
  var ele=document.getElementsByClassName('card')[0];
  window.scrollTo(0, 0);
})

//form validations
document.getElementById("topform").onsubmit = function() {
  var name=document.getElementsByName('name')[0].value;
  var email=document.getElementsByName('email')[0].value;
  var mobile=document.getElementsByName('mobile')[0].value;
  var work=document.getElementsByName('work')[0].value;
  var company=document.getElementsByName('organization')[0].value;

  if(mobile.length <10 || mobile.length >10 ){
    alert('Please enter a valid 10 digit mobile number');
    return;
  }else{
    var ar={name:name,email:email,mobile:mobile,work:work,company:company};

    localStorage.setItem('greatformdata',JSON.stringify(ar));
    alert('Data Submitted succesfully!')
    this.reset();
    window.location.reload();
  }
  
  
};

//auto fill formdata
if(localStorage.getItem("greatformdata")){
  console.log('It has localstorage data, init auto fill!');
  var parsedata=JSON.parse(localStorage.getItem("greatformdata"));

  document.getElementsByName('name')[0].value=parsedata.name;
  document.getElementsByName('email')[0].value=parsedata.email;
  document.getElementsByName('mobile')[0].value=parsedata.mobile;
  document.getElementsByName('work')[0].value=parsedata.work;
  document.getElementsByName('organization')[0].value=parsedata.company;
}else{
  console.log('No Localstorage Data found. Go ahead and fill the data.')
}




 



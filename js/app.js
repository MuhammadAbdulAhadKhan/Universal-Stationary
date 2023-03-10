/* Top Products */
$(document).ready(function(){
   $('.brand-slider').slick({
       autoplay:true,
      slidesToShow:3,
      slidesToScroll:1,
      prevArrow:".prev-btn",
      nextArrow:".next-btn",
      responsive:[
         {
            breakpoint:992,
            settings:{
             slidesToShow:2,
            }
         },
         {
          breakpoint:768,
          settings:{
           slidesToShow:1,
          }
       }
      ]
 
   });





  

   $('#menu-bar').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

   $(window).on('load scroll',function(){

      $('#menu-bar').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      $('section').each(function(){

          let top = $(window).scrollTop();
          let height = $(this).height();
          let id = $(this).attr('id');
          let offset = $(this).offset().top - 200;

          if(top > offset && top < offset + height){
              $('.navbar ul li a').removeClass('active');
              $('.navbar').find(`[href="#${id}"]`).addClass('active');
          }

      });

   });

   $('.list .btn').click(function(){
      $(this).addClass('active').siblings().removeClass('active');
      let src = $(this).attr('data-src');
      $('.menu .row .image img').attr('src',src);
   });
       


   $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   });
});



/**Form */


function validate()
                    {
                        
                        var NameRegex=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
                        var EmailRegex=/^[a-zA-Z0-9\.\_\%\+\-]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/;
                        var ContactRegex=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})([0-9]{2})?$/;
                        
                        var name=document.getElementById('Name').value;
                        var email=document.getElementById('Email').value;
                        var contact=document.getElementById('Contact').value;
                        
                        var nameErr=document.getElementById('nameError');
                        var contactErr=document.getElementById('contactError');
                        var emailErr=document.getElementById('emailError');
                    
                        nameErr.innerHTML="";
                        contactErr.innerHTML="";
                        emailErr.innerHTML="";
                    
                        if(name=="")
                        {
                            //alert("All fields required");
                            nameErr.innerHTML="Name is required";
                        }else if(email=="")
                        {
                            emailErr.innerHTML="Email is required";
                        }else if(contact=="")
                        {
                            contactErr.innerHTML="Contact is required";
                        }else
                        {
                            if(!NameRegex.test(name))
                            {
                                //alert("Name is invalid");
                                nameErr.innerHTML="Name is invalid";
                            }else if(!EmailRegex.test(email))
                            {
                                //alert("Email is not valid");
                                emailErr.innerHTML="Email is invalid";
                            }else if(!ContactRegex.test(contact))
                            {
                                //alert("Contact no is not valid");
                                contactErr.innerHTML="Contact is invalid";
                            }
                            else
                            {
                                alert("thank you for your response");
                            }
                        }
                            
                    }
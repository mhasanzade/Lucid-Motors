function openNav() {
    document.getElementById("mySidepanel").style.width = "400px";

  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
  function openShow(){
    document.getElementById('show').style.opacity= '1';
    document.getElementById('pink').style.height= '500px';

    document.getElementById('hideh').style.opacity= '1';
    document.getElementById('hideh').addClass('animate_animated animate_fadeInUp').show();
  }
  
  
  
  

  jQuery(function($) {
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        var navOpacity = scrollPos / 800;

        $('nav').css("opacity", navOpacity);

        if ($('nav').css('opacity') < 1) {
            $('nav').css('opacity', 1)
        };
    });
});

function closeBorder() {
  document.getElementById("js").style.border= "none";

}
// jQuery(function($) {
//   $(window).scroll(function() {
//       var scrollPos = $(window).scrollTop();
//       var lucidOpacity = scrollPos / 800;

//       $('.lucid-air').css("opacity", lucidOpacity);

//       if ($('.lucid-air').css('opacity') = 1) {
//           $('.lucid-air').css('opacity', 0)
//       };
//   });
// });

// $(document).ready(function(){       
//   var scroll_pos = 0;
//   $(document).scroll(function() { 
//       scroll_pos = $(this).scrollTop();
//       if(scroll_pos > 210) {
//           $('.text').css('color', '#000');
//       } else {
//           $('.text').css('color', '#fff');
//       }
//   });
// });


// function logoSwitch () {
//   $('.altLogo').each(function() {
//     $(this).css('top',
//       $('.startLogo').offset().top -  $(this).closest('.row').offset().top
//     );
//   });
// };

// $(document).scroll(function() {logoSwitch();});

// logoSwitch();

$(document).ready(function(){
  //Take your div into one js variable
  var div = $("#divToShowHide");
  //Take the current position (vertical position from top) of your div in the variable
  var pos = div.position();
  //Now when scroll event trigger do following
  $(window).scroll(function () {
   var windowpos = $(window).scrollTop();
   //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
   // I am taking 100px scroll, you can take whatever you need
   if (windowpos >= (pos.top - 100)) {
     div.addClass("AfterScroll");
   }
   //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again 
   else {
     s.removeClass("AfterScroll");
   }
   //Note: If you want the content should be shown always once you scroll and do not want to hide it again when go to top agian, no need to write the else part
 });
});


// const container = document.querySelector('.lucid-air');
// const text = document.querySelector('h1');
// const containerRect = container.getBoundingClientRect();
// console.log(containerRect);
// const textRect = text.getBoundingClientRect();
// const textHeight = textRect.height;
// const cutOffPoint = textRect.top;
// console.log(`cutoff is ${cutOffPoint}`)
// const verticalScrollAmount = containerRect.height - textRect.top;
// console.log(`vertical amount to scroll is ${verticalScrollAmount}`);
// console.log(textRect);
// window.addEventListener('scroll', (event) => {
// 	const {scrollY} = window;
//   console.log(scrollY);
// 	if (scrollY > cutOffPoint) {
// 	const travelled = verticalScrollAmount - (scrollY - cutOffPoint);
// 	console.log(travelled)
// 	const opacity = (travelled) / (verticalScrollAmount);
// 	console.log(opacity);
// 	text.style.opacity = opacity;
// 	} 
// 	else {
// 	text.style.opacity = 1;
// 	}
// })



		
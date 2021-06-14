
//    59.html Dom Target Method

// var element;

// 	element = document.getElementById("mainContainer");

// 	console.log(element);


	

	// 60.html get and set method in Dom

   // var element;

   // document.getElementById("Header").setAttribute("style","border: 10px solid yellow");

   // element = document.getElementById("Header").getAttribute("style");

   // console.log(element);


   

   // 61.html  queryselector() and queryselectorAll() method


   /*
   var element;

   element =  document.querySelector("#Header");

   		document.querySelectorAll(".format");

   console.log(element);

   */



   // 62.html Dom css styling method



   /*
   (1) style method

   var element;

   					// get

   element = document.querySelector("#Header").style.border;

   				    // set

   		document.querySelector("#Header").style.border = "5px solid green";

   console.log(element);

   */



   // // (2) className method

   // var element;


   //  				document.querySelector("#Header").className = "abc xyz";

   //  		       element =  document.querySelector("#Header").className;



   //  console.log(element);



   // (3) classList method

   /*

   var element;

   document.querySelector("#Header").classList.add("xyz", "jkl");

   element = document.querySelector("#Header").classList;

   console.log(element);

   */


   // 63.html Dom addEventListener method()

   var element;

   var element = document.getElementById("footer").addEventListener("click",xyz);

   function xyz(){

   	document.getElementById("footer").style.border = "10px solid black";

   }


 
 var canvas;
 var canvas2DContext;
 var imagePlan1 = new Image();
 var imagePlan2 = new Image();
 var imagePlan3 = new Image();
 var imagePlan4 = new Image();
 
 var plan1Y1 = 600;
 var plan2Y1 = 600;
 var plan3Y1 = 600;
 var plan4Y1 = 600;
 var plan1Y2 = 0;
 var plan2Y2 = 0;
 var plan3Y2 = 0;
 var plan4Y2 = 0;
 
 var initialisation = function() {
  canvas = document.getElementById("back_canvas");
  canvas2DContext = canvas.getContext('2d');
  imagePlan1.src = "images_background/plan1.png";
  imagePlan2.src = "images_background/plan2.png";
  imagePlan3.src = "images_background/plan3.png";
  imagePlan4.src = "images_background/plan4.png";

 }
 
 function scroll() {
  plan1Y1 = ((plan1Y1 + 0.8) % 1200);
  plan1Y2 = ((plan1Y2 + 0.8) % 1200);
  plan2Y1 = ((plan2Y1 + 0.4) % 1200);
  plan2Y2 = ((plan2Y2 + 0.4) % 1200);
  plan3Y1 = ((plan3Y1 + 0.2) % 1200);
  plan3Y2 = ((plan3Y2 + 0.2) % 1200);
  plan4Y1 = ((plan4Y1 + 0.1) % 1200);
  plan4Y2 = ((plan4Y2 + 0.1) % 1200);
  canvas2DContext.clearRect(0, 0, canvas.width, canvas.height);
  canvas2DContext.drawImage(imagePlan4,0,plan4Y1-600);
  canvas2DContext.drawImage(imagePlan4,0,plan4Y2-600);
  canvas2DContext.drawImage(imagePlan3,0,plan3Y1-600);
  canvas2DContext.drawImage(imagePlan3,0,plan3Y2-600);
  canvas2DContext.drawImage(imagePlan2,0,plan2Y1-600);
  canvas2DContext.drawImage(imagePlan2,0,plan2Y2-600);
  canvas2DContext.drawImage(imagePlan1,0,plan1Y1-600);
  canvas2DContext.drawImage(imagePlan1,0,plan1Y2-600);
 }
 
 window.addEventListener('load', function() {
  initialisation();
  setInterval(scroll, 50);
 });
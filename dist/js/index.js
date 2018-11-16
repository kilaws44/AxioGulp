
var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../img/apolo/r1.jpg',
            w: 1366,
            h: 768,   
            title: 'Fabrica de balines, ubicada en la zona industrial norte de Justiniano Posse.<br>Proyecto:&nbsp Apolo <br> M2 Construidos: &nbsp 785 <br> Año de Construcción: &nbsp 2018',
                    // if you skip it, there won't be any caption
            

// You may add more properties here and use them.
// For example, demo gallery uses "author" property, which is used in the caption.
// author: 'John Doe'

        }, 
      {
            src: '../img/apolo/r2.jpg',
            w: 1366,
            h: 768,   
            title: 'Fabrica de balines, ubicada en la zona industrial norte de Justiniano Posse.<br>Proyecto:&nbsp Apolo <br> M2 Construidos: &nbsp 785 <br> Año de Construcción: &nbsp 2018',
                    // if you skip it, there won't be any caption
            

// You may add more properties here and use them.
// For example, demo gallery uses "author" property, which is used in the caption.
// author: 'John Doe'

        }, 
      {
            src: '../img/apolo/r3.jpg',
            w: 1366,
            h: 768,   
            title: 'Fabrica de balines, ubicada en la zona industrial norte de Justiniano Posse.<br>Proyecto:&nbsp Apolo <br> M2 Construidos: &nbsp 785 <br> Año de Construcción: &nbsp 2018',
                    // if you skip it, there won't be any caption
            

                  /*  You may add more properties here and use them.
 For example, demo gallery uses "author" property, which is used in the caption.
author: 'John Doe'*/

        }, 
        {
              src: '../img/apolo/r4.jpg',
              w: 1366,
              h: 768,   
              title: 'Fabrica de balines, ubicada en la zona industrial norte de Justiniano Posse.<br>Proyecto:&nbsp Apolo <br> M2 Construidos: &nbsp 785 <br> Año de Construcción: &nbsp 2018',
                      // if you skip it, there won't be any caption
              
  
  // You may add more properties here and use them.
  // For example, demo gallery uses "author" property, which is used in the caption.
  // author: 'John Doe'
  
          },
          {
                src: '../img/apolo/r5.jpg',
                w: 1366,
                h: 768,   
                title: 'Fabrica de balines, ubicada en la zona industrial norte de Justiniano Posse.<br>Proyecto:&nbsp Apolo <br> M2 Construidos: &nbsp 785 <br> Año de Construcción: &nbsp 2018',
            // if you skip it, there won't be any caption
                
    
    // You may add more properties here and use them.
    // For example, demo gallery uses "author" property, which is used in the caption.
    // author: 'John Doe'
    
            } 
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};
  
document.getElementById('btnapolo').onclick = openPhotoSwipe;
 

var openPhotoSwipe3 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../img/pduplex/1.jpg',
            w: 1366,
            h: 768,
            title: 'Creación de  duplex <br> Ubicación:&nbsp Juan Manuel De Rosas <br> M2 Construidos: &nbsp 82<br> Año de Construcción: &nbsp 2018',

        },
        {
            src: '../img/pduplex/2.jpg',
            w: 1366,
            h: 768,
            title: 'Creación de  duplex <br> Ubicación:&nbsp Juan Manuel De Rosas <br> M2 Construidos: &nbsp 82<br> Año de Construcción: &nbsp 2018',
                

        }
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};
  
document.getElementById('btnduplex').onclick = openPhotoSwipe3;

var openPhotoSwipe4 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../img/screens/4.jpg',
            w: 1366,
            h: 768,
            title: 'Duplex Trix <br>  M2 Construidos: &nbsp 89 <br> Año de Construcción: &nbsp 2016 <br>Detalles: &nbsp  Con la idea de aprovechar al maximo la dispocision del terreno pureza y simplicidad dos rasgos que caracterizan este proyecto.',

        },
         
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};
  
document.getElementById('btntrix').onclick = openPhotoSwipe4; 

//FARMACIA PIERUCCI


var openPhotoSwipe5 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../img/screens/6.jpg',
            w: 1366,
            h: 768,
            title: 'Creación de Local comercial <br> Ubicación:&nbsp ?<br> M2 Construidos: &nbsp 104 <br> Año de Construcción: &nbsp 2016',
              
        },
         
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};
  
document.getElementById('btnfarm').onclick = openPhotoSwipe5; 

//VATIOVa


var openPhotoSwipe5 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../img/vatiova/v1.jpg',
            w: 1366,
            h: 768,
            title: 'Fabrica de Luces Led <br> Ubicación:&nbsp ?<br> M2 Construidos: &nbsp ? <br> Año de Construcción: &nbsp 2018',
              
        },       
              {
            src: '../img/vatiova/v3.jpg',
            w: 1366,
            h: 768,
            title: 'Fabrica de Luces Led <br> Ubicación:&nbsp ?<br> M2 Construidos: &nbsp ? <br> Año de Construcción: &nbsp 2018',
              
        },     
           {
            src: '../img/vatiova/v4.jpg',
            w: 1366,
            h: 768,
            title: 'Fabrica de Luces Led <br> Ubicación:&nbsp ?<br> M2 Construidos: &nbsp ? <br> Año de Construcción: &nbsp 2018',
              
        },
         
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};
  
document.getElementById('btnvatiova').onclick = openPhotoSwipe5; 



var openPhotoSwipe6 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: '../img/screens/r8.jpg',
            w: 1366,
            h: 768,
            title: 'Primer edificio de oficinas en Justiniano Posse <br> Ubicación:&nbsp ?<br> M2 Construidos: &nbsp 951.00 <br> Año de Construcción: &nbsp 2018<br>  Proyecto:  &nbsp Representacion y direccion tecnica junto a Diego Carnevale.',
              
        },     
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};
  
document.getElementById('btnconcept').onclick = openPhotoSwipe6; 









//<p>Local Comercial -Remodelación de lo existente generando cambios y una nueva vision comerciál. Cuenta con dos plantas. planta baja se realizaron 104 m2 de local y en planta alta 65 m2 de vivienda unifamiliar.  Año de Construcción: 2016 </p>

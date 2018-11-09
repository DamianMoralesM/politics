window.sr = ScrollReveal();
        sr.reveal('.test', {
          duration: 2000,
          origin:'bottom',
          rotate: { x: 3, y: 69, z: 7 }
          
        });



sr.reveal('.dosmil', {
          duration: 2000,
          origin:'right',
          distance:'400px',
          repeat:true,
          delay: 0.3
        });

 sr.reveal('.titulo', {
          duration: 2000,
          origin:'right',
          distance:'240px',
           delay: 0.2
        });

 sr.reveal('.sub', {
          duration: 2000,
          origin:'left',
          distance:'300px',
          delay: 0.6,
          easing: 'cubic-bezier(0.1, 0.2, 0.1, 1)',
          repeat:true
          
        });

         sr.reveal('.reveal', {
          duration: 1000,
            easing: 'cubic-bezier(0.1, 0.1, 0.1, 1)'
         
          
        });
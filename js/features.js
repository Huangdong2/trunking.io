/* Features Slide-Show */
$(document).ready(function() {
    $('#interface-slideshow').crossSlide({
      sleep: 3,
      fade: 1
    }, [
        { src: '../images/1.jpg' },
        { src: '../images/2.jpg' },
        { src: '../images/3.jpg' },
        { src: '../images/4.jpg' },
        { src: '../images/5.jpg' },
        { src: '../images/6.jpg' },
        { src: '../images/7.jpg' }
    ]);  
}); 

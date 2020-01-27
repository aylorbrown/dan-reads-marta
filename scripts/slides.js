console.log(screen.width);




//  pick all of the images and layer them based on the z-index

const slideAreaArray = document.querySelectorAll("div.slides")
slideAreaArray.forEach ( (slideArea) => {

    const images = slideArea.querySelectorAll("img")

// keep track of two things:
let currentSlide = 0;
let z = 1;

// when i click the slide area, change the slide based on z index 
slideArea.addEventListener("click", () => {
    currentSlide += 1;

    if(currentSlide > images.length -1) {
        currentSlide =0;
    }
    z += 1;

    // remove the animation from the style for every image - loop over each image, one by one 
    // aka makes it so the fade continues after 5th photo
    images.forEach( (image) => {
        image.style.animation = "";
    });

    // pick the right image 
    images[currentSlide].style.zIndex = z;
    images[currentSlide].style.animation = "fade 0.5s";

});



// mouse over randomness 
// when user puts mouse over the slide area, put all of the images in a random place 

slideArea.addEventListener("mouseover", () => {
    images.forEach(image => {
        // snap to a grid, make it look more natural 
        //creates x and y translate variable
        let xTranslate;
        let yTranslate;
        const imageWidth = 400;
        // media query for mobile
        if (screen.width <= 768) {
            const y = 25 * (Math.floor(Math.random() * 5)) -50;
            //max x and y distance left and right
            // subtract one full image(max distance) 
            const maxXTranslateFromCenter = (screen.width * .8 - imageWidth) / 2;
            xTranslate = ((Math.floor(Math.random() * 5)) -2) / 2 * maxXTranslateFromCenter;
            yTranslate = y;
        // media query for laptop +
        } else {
            xTranslate = 20 * (Math.floor(Math.random() * 5)) -40;
            const y = 25 * (Math.floor(Math.random() * 5)) -50;
            yTranslate = y;
        }
        
        image.style.transform = `translate(${xTranslate}px, ${yTranslate}px)`
    })
});


// mouse out event 
// when user moves moves mouse away, move images back

slideArea.addEventListener("mouseout", () => {
    images.forEach(image => {
        image.style.transform = "";
    })
});

})

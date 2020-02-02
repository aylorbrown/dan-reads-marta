### Dan Reads MARTA 
A visual collection of the books my partner read on Atlanta's public transit over the  years. Dan Reads MARTA represents the burning of a little less fossil fuels and the  making of a more active and informed citizen.

Built with CSS, HTML, and Javascript. Responsible for all design and development from wireframe to site build.

![Dan Reads MARTA Demo](gifs/Kapture2020-02-01at19.32.58.gif)

## Challenges 

Ultimately, this was a way for me to practice building more things in Javascript. The biggest challenge was making the mouseover event responsive. The mouseover loops over each image and when the area is hovered over, the images move in lots of different ways. This is done by applying a mouseover event listener to the slideArea, looping through each image using a .forEach(), and applying a Math.random to the x and y axis. 

```javascript 
slideArea.addEventListener("mouseover", () => {
    images.forEach(image => {
        const x = 25 * (Math.floor(Math.random() * 5)) -50;
        const y = 25 * (Math.floor(Math.random() * 5)) -50;

        image.style.transform = `translate(${x}px, ${y}px)`
    })
});
```

This was a pretty simple function when the screen width was greater than 768 px. On mobile, the random point on the x-axis was not constrained to the div containing the slideArray. I originally tried to solve the problem with media queries in CSS, but soon realized I would have to add an if/else statement to the Javascript mouseover eventListener. 

The trick was creating a const that defined the image width. All my images are the same width. From there, using some math logic to base the randomness on the screen width. x and y became xTranslate and yTranslate. The yTranslate stays the same on any screen size but the xTranslate (or x if screen width is less than 768px) uses some tricky logic based on the size of the screen. maxXTranslateFromCenter is added to create a number that is the furthest from the center of the page. The screen width is multiplied by .8, then subtracted by the image width and dividen by 2 to create 10% margins on either side of the image. 


```javascript
slideArea.addEventListener("mouseover", () => {
    images.forEach(image => {
        let xTranslate;
        let yTranslate;
        const imageWidth = 400;
        if (screen.width <= 768) {
            const y = 25 * (Math.floor(Math.random() * 5)) -50;
            const maxXTranslateFromCenter = (screen.width * .8 - imageWidth) / 2;
            xTranslate = ((Math.floor(Math.random() * 5)) -2) / 2 * maxXTranslateFromCenter;
            yTranslate = y;
        } else {
            xTranslate = 20 * (Math.floor(Math.random() * 5)) -40;
            const y = 25 * (Math.floor(Math.random() * 5)) -50;
            yTranslate = y;
        }
        
        image.style.transform = `translate(${xTranslate}px, ${yTranslate}px)`
    })
});
```

The result => 

![Dan Reads MARTA mobile](images/screenshot-mobile.png)

![Megan thee Stallion gif](https://media.giphy.com/media/Q8fYXIL6siCpJlun0i/giphy.gif)




## What's Next 
We're not driving anytime soon and Dan keeps reading so this project is ongoing. My goal is to add a backend so Dan could take ownership and take photos to update his progress. I would also like to add a interactive element that links the book photo to the book's page on [Indiebound](https://www.indiebound.org/).

## Author
[Aylor Brown](http://aylorbrown.com)
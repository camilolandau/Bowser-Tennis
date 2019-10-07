// <canvas> is an html element that can be used to draw graphicss with scripting. Size is initially 300px wide and 150px high, can be set with css but the css must respect the ratio of the intial canvas otherswise images (which are scaled to fit initial layout size) will be distorted. 

// 1. Canvas element has two attributes, width and height.

        <canvas id="court" width="150" height="150"></canvas>


// 2. Fallback content can be provided inside of the canvas tag for older browsers in the form of an image or specified html. (Check what this might be for a tennis court)

        <canvas id="court" width="150" height="150">
        <img src="images/clock.png" width="150" height="150" alt=""/>
        </canvas>;


// 3. The <canvas> element creates a fixed-size drawing surface that renders objects in different "environments", 2D, 3D etc. To display something on the surface, acess it through javascript canvas method getContext() after retrieving the node in the DOM that represents <canvas>, as seen below. 

        let canvas = document.getElementById('court');
        let ctx = canvas.getContext('2d');

        var canvas = document.getElementById('tutorial');

        //Content below used for scripts to check fallback content.
            if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            // drawing code here
            } else {
            // canvas-unsupported code here
            }



// 4.



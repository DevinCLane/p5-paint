# p5 paint
Creating a painting application with p5.js

## Learning Notes

- Filling the entire window with the canvas (including variously sized browsers)
    - pass `windowWidth, windowHeight` to `createCanvas` to fill the screen
    - pass the same variables to `resizeCanvas` within the `resizeCanvas` function so that the canvas resizes and fills the whole window no matter the screen size.
    - set `display: block` to avoid scroll bars
    - use flexbox to center the sketch: `justify-content: center` for centering horizontally, `align-items: center` to center vertically.
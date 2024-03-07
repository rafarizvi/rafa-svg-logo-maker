const SvgLogo = require('../logo.js'); 

describe ('circle', () => {
    it('should return an circle svg with appropriate text and colors', () => {

        const input = {
            text:'svg', 
            textColor: 'white', 
            shape: 'circle',
            shapeColor: 'green'
        };

        const output = 
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="90" fill="green" />

  <text x="150" y="115" font-size="60" text-anchor="middle" fill="white">svg</text>

</svg>`

        expect(SvgLogo.shape(input)).toBe(output);
    
    })
})

describe ('square', () => {
    it('should return a square svg with appropriate text and colors', () => {

        const input = {
            text:'svg', 
            textColor: 'white', 
            shape: 'square',
            shapeColor: 'green'
        };

        const output = 
        `<svg version="1.1" width="250" height="250" xmlns="http://www.w3.org/2000/svg">

   <polygon points="50 50, 250 50, 250 250, 50 250, 50 50" fill="green"/>

  <text x="150" y="165" font-size="60" text-anchor="middle" fill="white">svg</text>

</svg>`

        expect(SvgLogo.shape(input)).toBe(output);
    
    })
})

describe ('triangle', () => {
    it('should return an triangle svg with appropriate text and colors', () => {

        const input = {
            text:'svg', 
            textColor: 'white', 
            shape: 'triangle',
            shapeColor: 'green'
        };

        const output = 
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="175 50, 300 250, 50 250, 175 50" fill="green"/>

  <text x="175" y="185" font-size="40" text-anchor="middle" fill="white">svg</text>

</svg>`

        expect(SvgLogo.shape(input)).toBe(output);
    
    })
})

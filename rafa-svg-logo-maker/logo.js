const shape = ({text, textColor, shape, shapeColor}) => {

  if (shape === 'circle') {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="90" fill="${shapeColor}" />

    <text x="150" y="115" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>`


  } else if (shape === 'square') {
    
    return `<svg version="1.1" width="250" height="250" xmlns="http://www.w3.org/2000/svg">

    <polygon points="50 50, 250 50, 250 250, 50 250, 50 50" fill="${shapeColor}"/>

    <text x="150" y="165" font-size="50" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>`
    

  } else {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

    <polygon points="175 50, 300 250, 50 250, 175 50" fill="${shapeColor}"/>

    <text x="175" y="185" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>`

  }
}


    module.exports = { shape };
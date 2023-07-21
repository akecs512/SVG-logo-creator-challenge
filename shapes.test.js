test('generateLogoSVG should generate an SVG logo witha square shape', () => {
    const size = 200;
    const text ='square logo';
    const textColor = '#000FF';
    const shape = 'square';
    const shapeColor = '#FF0000';

const expectedSVG =
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 400 400">
<rect width="100%" height="100%" fill="#FFF00"/>
<text x="50%" y="50%" dominant-baseline= "middle" text-anchor="middle" style="text-align: center; fill="${textColor}">${text}</text>
</svg>
;

expect(generateLogoSVG(size, text, textColor, shape, shapeColor)).toEqual(expectedSVG);

})
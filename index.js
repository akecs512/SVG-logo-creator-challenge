import inquirer from "inquirer";
import fs from "fs";
inquirer
  .prompt([
    {
      type: "input",
      name: "brandInitials",
      message: "What are the 3 letters to use for your brand initials?",
      maxLength: 3,
    },
    {
      type: "input",
      name: "textColor",
      message: "What color would you like your text?",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape would you like?",
      choices: ["Square", "Circle", "Triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color do you want your shape?",
    }
  
  ])
  .then(({brandInitials, textColor, shape, shapeColor}) => {
    let SVGlogo;
    switch(shape){
      case "Circle":
        SVGlogo = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
        
        break;

      // case "square":
      //     shape = new Square();
      //     break;

      // case "triangle":
      //     shape = new Triangle();
      //     break;

       default:
            break;
    }
// create a variable to hold the SVG text string with the proper ${brandInitials} and ${textColor} 
// create the SVG container with the ${shape} ${SVGtextString}
// write file with fs
if (brandInitials.length > 3) {
  throw new Error("Text must not exceed 3 characters.");
}
const SVGtextString = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${brandInitials}</text>`;
const SVGContainer = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${SVGlogo}${SVGtextString}</svg>`;
fs.writeFile("logo.svg",SVGContainer, (error) => {if (error) console.log(error)})
})

  


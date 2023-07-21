import inquirer from "inquirer";
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
    },
    {
      type: "input",
      name: "brandInitials",
      message: "What are the 3 letters to use for your brand initials?",
    },
  ])
  .then((answers) => {
    const svg = new svg(
      answers.brandInitials,
      answers.textColor,
      answers.shape,
      answers.shapeColor
    );
  });


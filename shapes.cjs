class svg {
    constructor(brandInitials, textColor, shape, shapeColor) {
      this.brandInitials = brandInitials;
      this.textColor = textColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
    renderSVG() {}
  }
  class Triangle extends svg {
    constructor(shapeColor) {}
    renderTriangle() {}
  }
  class Square extends svg {
    constructor(shapeColor) {}
    renderSquare() {}
  }
  
  class Circle extends svg {
    constructor(shapeColor) {}
    renderCircle() {}
  }
  
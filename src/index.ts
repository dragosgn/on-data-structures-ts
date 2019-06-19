document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

class Node {
  //field
  data: number;
  left: Node;
  right: Node;

  //constructor
  constructor(data: number) {
    this.data = data;
  }

  // function
  disp(): void {
    console.log("The data is  :   " + this.data);
  }

  // insert
  insert(value: number) {
    if (value <= this.data) {
      if (this.left == null) {
        this.left = new Node(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right == null) {
        this.right = new Node(value);
      } else {
        right.insert(value);
      }
    }
  }
}

var newNode = new Node(12);

console.log(newNode.disp());

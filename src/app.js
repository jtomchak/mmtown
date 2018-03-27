import "./style.scss";

//Create 4 Boxes, labeled "Box 1 - 4" using only javascript! NO HTML
//And yes you probably want to loop over some sort of collection or Array!!!!
let containerDiv = document.createElement("div");
let rowDiv = document.createElement("div");
containerDiv.setAttribute("class", "container");
rowDiv.setAttribute("class", "row");

for (let i = 0; i < 4; i++) {
  let columnDiv = document.createElement("div");
  let boxDiv = document.createElement("div");
  let headTag = document.createElement("h3");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  p1.innerHTML = "Lorem ipsum dolor..";
  p2.innerHTML = "Ut enim ad..";

  columnDiv.setAttribute("class", "col-md-4");
  boxDiv.setAttribute("class", "box-bg");
  headTag.innerHTML = "BOX " + (i + 1);

  boxDiv.append(headTag, p1, p2);

  columnDiv.appendChild(boxDiv);
  rowDiv.append(columnDiv);
}

containerDiv.append(rowDiv);
document.body.appendChild(containerDiv);

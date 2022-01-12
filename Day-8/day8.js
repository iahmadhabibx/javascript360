const createHTMLElement = (tag, parent, content, classes) =>{
	let element = document.createElement(tag);
  classes.length && classes.forEach(cls => {element.classList.add(cls)});
  element.innerHTML = content;
  parent.appendChild(element);
}

let p = document.getElementById("parent");
createHTMLElement("span", p, "Hi, I am created by a method", ["bg","clr"])
function generateelem(tagname, attribute, ...childs) {
  let element = document.createElement(tagname);

  if (attribute) {
    Object.keys(attribute).forEach((key) => {
      element.setAttribute(key, attribute[key]);
    });
  }
  if (childs) {
    childs.forEach((child) => {
      if (typeof child == "string") {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
  }
  return element;
  console.log(element);
}

export default generateelem;

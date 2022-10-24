window.addEventListener("load", function() {

  const body = document.querySelector("body");
  const p = document.createElement("p");
  const h1One = document.createElement("h1");
  const h1Two = document.createElement("h1");
  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const ul = document.createElement("ul");
  const liOne = document.createElement("li");
  const liTwo = document.createElement("li");
  const a = document.createElement("a");

  body.append(h1One,p,img,h1Two,ul,h2,a);  
  h1One.append("Webpage Recreation Practice");
  p.append("The HTML of this webpage was created with JavaScript.");
  img.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
  img.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
  img.setAttribute("style", "width:50%");
  h1Two.append("Facts about the Multicolored Tanager");
  ul.append(liOne, liTwo);
  liOne.append("It is endemic to the mountains of Colombia.");
  liTwo.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet."); 
  h2.append("Source");
  a.setAttribute("href","https://en.wikipedia.org/wiki/Multicoloured_tanager");
  a.append("Wikipedia");

  

});
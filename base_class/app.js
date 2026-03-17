/**
 * 1. Basic Data Types
 * 2. Variables
 * 3. const and let
 * 4. Boolean
 * 5. Arrays
 * 6. Objects
 * 7. Function
 * 8. return
 * 9. Conditional
 * 10. console.dir(document) / console.dir(element)
 * 11. document.querySelector / document.querySelectorAll
 * 12. event / addEventListener() / window event
 *
 */

const h1 = document.querySelector("div.hello h1#title");

function handleTitleClick () {
  let clickedClass = "clicked";
  // const currentClassList = h1.classList;
  // if(currentClassList.contains(clickedClass)) {
  //   currentClassList.remove(clickedClass);
  // }else {
  //   currentClassList.add(clickedClass);
  // }
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://th.bing.com/th/id/R.8bbf769b39bb26eefb9b6de51c23851d?rik=crTnc5i8A%2b8p7A&riu=http%3a%2f%2fpicview.iituku.com%2fcontentm%2fzhuanji%2fimg%2f202207%2f09%2fe7196ac159f7cf2b.jpg%2fnu&ehk=DYPLVpoNAXLj5qzwgR5vHf9DladFh%2b34s4UcuP3Kn6E%3d&risl=&pid=ImgRaw&r=0") {
    myImage.setAttribute("src", "https://cdn.pixabay.com/photo/2020/04/13/19/40/sun-5039871_1280.jpg");
  } else {
    myImage.setAttribute("src", "https://th.bing.com/th/id/R.8bbf769b39bb26eefb9b6de51c23851d?rik=crTnc5i8A%2b8p7A&riu=http%3a%2f%2fpicview.iituku.com%2fcontentm%2fzhuanji%2fimg%2f202207%2f09%2fe7196ac159f7cf2b.jpg%2fnu&ehk=DYPLVpoNAXLj5qzwgR5vHf9DladFh%2b34s4UcuP3Kn6E%3d&risl=&pid=ImgRaw&r=0");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();

});




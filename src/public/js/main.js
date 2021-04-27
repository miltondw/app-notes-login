const dlttitle = document.getElementById("dlttitle");
const dltdescription = document.getElementById("dltdescription");
const Contentdlttitle = document.getElementById("Contentdlttitle");
const Contentdltdescription = document.getElementById("Contentdltdescription");

dlttitle.addEventListener("click", () => {
  Contentdlttitle.classList.toggle("show");
});
dltdescription.addEventListener("click", () => {
  Contentdltdescription.classList.toggle("show");
})


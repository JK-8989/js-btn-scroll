let btn = document.getElementById("back-to-top"),
  docElem = document.documentElement,
  docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight),
  offset,
  scroll = docElem.scrollTop;

if (docHeight != 0) {
  offset = docHeight / 4;
}
window.addEventListener("scroll", () => {
  scroll = docElem.scrollTop;
  console.log(scroll);

  btn.className = scroll > offset ? "visible" : "";
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  // docElem.scrollTop = 0;
  scrollToTop();
});
scrollToTop = () => {
  let scrollInterval = setInterval(() => {
    if (scroll != 0) {
      window.scrollBy(0, -55);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
};

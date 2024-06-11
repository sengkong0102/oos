let observer = new IntersectionObserver(() => {});
observer.observe();

let p = document.querySelectorAll(".second_textson");
observer.observe(second_textson);

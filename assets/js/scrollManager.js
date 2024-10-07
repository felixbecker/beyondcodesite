// assets/js/scrollManager.js
export function manageScrollAndStyle(settings) {
  document.addEventListener("DOMContentLoaded", function () {
    let scrollpos = window.scrollY;
    let header = document.getElementById(settings.headerId);
    let navcontent = document.getElementById(settings.navContentId);
    let navaction = document.getElementById(settings.navActionId);
    let toToggle = document.querySelectorAll(settings.toggleSelector);

    const transitionDuration = "0.3s";

    // Set transition on styles (smooth effect)
    header.style.transition = `background-color ${transitionDuration} ease, box-shadow ${transitionDuration} ease`;
    navcontent.style.transition = `background-color ${transitionDuration} ease`;
    navaction.style.transition = `background-color ${transitionDuration} ease, color ${transitionDuration} ease`;

    // Add scroll event listener
    window.addEventListener("scroll", function () {
      scrollpos = window.scrollY;

      if (scrollpos > 10) {
        header.style.backgroundColor = settings.bgColor;
        header.classList.add("shadow-lg");
        navcontent.style.backgroundColor = settings.bgColor;
        navaction.classList.add(settings.navActionBgClass);
        navaction.classList.add(settings.navActionTextClass);
        toToggle.forEach(function (element) {
          element.classList.add(settings.toggleTextClass);
          element.classList.remove(settings.toggleTextClassInverse);
        });
      } else {
        header.style.backgroundColor = "transparent";
        header.classList.remove("shadow-lg");
        navcontent.style.backgroundColor = "transparent";
        navaction.classList.remove(settings.navActionBgClass);
        navaction.classList.remove(settings.navActionTextClass);
        toToggle.forEach(function (element) {
          element.classList.add(settings.toggleTextClassInverse);
          element.classList.remove(settings.toggleTextClass);
        });
      }
    });
  });
}
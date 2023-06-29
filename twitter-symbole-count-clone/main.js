(function () {
  // Global Variables
  var text = document.querySelector("#text");

  var counterOutput = document.querySelector(".counter-output");
  var maxLength = 20;

  /**
   * First Approach
   * - This approach uses too many eventListeners
   * - This isn't a good approach because it's not DRY (Don't Repeat Yourself)
   */

  text.addEventListener("keyup", () => {
    var count = text.value.length;
    var counting = maxLength - count;
    if (count > maxLength) {
      counterOutput.classList.add("text-color-red");
    } else {
      counterOutput.classList.remove("text-color-red");
    }
    counterOutput.textContent = `Your text includes ${text.value.length} of ${maxLength} characters. You have ${counting} characters left`;
  });
  text.addEventListener("keydown", () => {
    var count = text.value.length;
    var counting = maxLength - count;
    if (count > maxLength) {
      counterOutput.classList.add("text-color-red");
    } else {
      counterOutput.classList.remove("text-color-red");
    }
    counterOutput.textContent = `Your text includes ${text.value.length} of ${maxLength} characters. You have ${counting} characters left`;
  });
  text.addEventListener("change", () => {
    var count = text.value.length;
    var counting = maxLength - count;
    if (count > maxLength) {
      counterOutput.classList.add("text-color-red");
    } else {
      counterOutput.classList.remove("text-color-red");
    }
    counterOutput.textContent = `Your text includes ${text.value.length} of ${maxLength} characters. You have ${counting} characters left`;
  });
})();
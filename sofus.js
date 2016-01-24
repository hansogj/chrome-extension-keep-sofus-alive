(function (w) {
  "use strict";
  console.log("Sofus Reloaded", new Date());

  function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
      element.addEventListener(eventName, callback, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + eventName, callback);
    } else {
      element["on" + eventName] = callback;
    }
  }

  addEvent(document, "keydown", function (e) {
    e = e || window.event;
    if(e.code === "KeyS" && e.ctrlKey) {
      console.log("Saving document")
      e.preventDefault()
      document.querySelector(".mainContentArea input[type=submit]").click();
    } else {
      return true;
    }
  });


  w.setTimeout(function () {
    w.location.reload();
  }, 1000*60*15);
}(window));

let classes = [
  "avia-cookie-consent-wrap"
];

let ids = [
  "onetrust-consent-sdk",
  "didomi-host",
  "axeptio_overlay",
  "notification"
];

// In case the element is loaded after the page.
let observer = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    if (mutation.target) {
      classes.forEach(claz => {
        if (mutation.target.className == claz) {
          mutation.target.remove();
        }
      });

      ids.forEach(id => {
        if (mutation.target.id == id) {
          mutation.target.remove();
        }
      });
    }
  }
});

let options = {
  childList: true,
  attributes: true,
  subtree: true
};
observer.observe(document.body, options);


// In case the element in loaded when the page is loaded.
ids.forEach(id => {
  var elem = document.getElementById(id);
  if (elem) {
    elem.remove();
  }
});

classes.forEach(claz => {
  var elem = document.getElementsByClassName(claz);
  if (elem) {
    elem.remove();
  }
});
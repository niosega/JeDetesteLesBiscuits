const PREFIX = "JDLB:";

function elementReady(selector) {
    return new Promise((resolve, reject) => {
      let el = document.querySelector(selector);
      if (el) {
        resolve(el);
      }
      new MutationObserver((mutationRecords, observer) => {
        Array.from(document.querySelectorAll(selector)).forEach((element) => {
          resolve(element);
          observer.disconnect();
        });
      })
        .observe(document.documentElement, {
          childList: true,
          subtree: true
        });
    });
}

function waitAndRemoveById(id) {
    elementReady(id).then(elem => {
      console.log(elem);
      elem.remove();
    });
}

function process() {
    const hostname = window.location.hostname;
    
    if (hostname.includes("veepee.fr")) {
      waitAndRemoveById("#onetrust-consent-sdk");
    } else if (hostname.includes("marmiton.org")) {
      waitAndRemoveById("#didomi-host");
    } else if (hostname.includes("quarkslab.com")) {
      waitAndRemoveById("#axeptio_overlay");
    } else if (hostname.includes("altaprofits.com")) {
      waitAndRemoveById("#notification");
    }
}

process();
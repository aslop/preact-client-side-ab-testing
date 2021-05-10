// TODO Must type cb type
export const waitForElement = (cssSelector: string, cb: any) => {
  const reqAnId = window.requestAnimationFrame(lookForElement);

  function lookForElement() {
    if (elementFound()) {
      cb(cssSelector);
      cancelAnimationFrame(reqAnId);
    } else {
      window.requestAnimationFrame(lookForElement);
    }
  }

  function elementFound() {
    let e = document.querySelector(cssSelector);
    if (e) {
      return true;
    } else {
      return false;
    }
  }
};

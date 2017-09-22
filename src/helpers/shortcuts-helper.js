class ShortcutsHelper {
  constructor() {
    this.mapFunctions = [];
    this.objAvoided = [];
    this.elementAvoided = [];
    this.keyPressed = false;
  }

  init() {
    document.addEventListener('ekeydown', (event) => {
      const decodedKey = decodeKey(event);
      if (filteringElement(decodedKey)) {
        event.preventDefault();
        event.stopPropagation();
        _.forEach(this.mapFunctions[decodedKey], (mapFunction) => {
          console.log(mapFunction);
          if (mapFunction.fn) {
            keyDown(event, mapFunction, decodedKey);
            this.keyPressed = true;
          } else if (!this.keyPressed) {
            mapFunction.el.focus();
            this.keyPressed = true;
          }
        });
      }
    }, true);

    document.addEventListener('keyup', (event) => {
      const decodedKey = decodeKey(event);
      if (filteringElement(decodedKey)) {
        event.preventDefault();
        event.stopPropagation();
        _.forEach(this.mapFunctions[decodedKey], (mapFunction) => {
          if (mapFunction.oc || mapFunction.ps) {
            keyUp(event, mapFunction, decodedKey);
          }
        });
      }
      this.keyPressed = false;
    }, true);
  };

  decodeKey(pKey) {
    let k = '';
    if (pKey.key === 'Shift' || pKey.shiftKey) {
      k += 'shift';
    }
    if (pKey.key === 'Control' || pKey.ctrlKey) {
      k += 'ctrl';
    }
    if (pKey.key === 'Meta' || pKey.metaKey) {
      k += 'meta';
    }
    if (pKey.key === 'Alt' || pKey.altKey) {
      k += 'alt';
    }
    if (pKey.key === 'ArrowUp') {
      k += 'arrowup';
    }
    if (pKey.key === 'ArrowLeft') {
      k += 'arrowleft';
    }
    if (pKey.key === 'ArrowRight') {
      k += 'arrowright';
    }
    if (pKey.key === 'ArrowDown') {
      k += 'arrowdown';
    }
    if (pKey.key === 'AltGraph') {
      k += 'altgraph';
    }
    if (pKey.key === 'Escape') {
      k += 'esc';
    }
    if (pKey.key === 'Enter') {
      k += 'enter';
    }
    if (pKey.key === 'Tab') {
      k += 'tab';
    }
    if (pKey.key === ' ') {
      k += 'space';
    }
    if (pKey.key === 'PageUp') {
      k += 'pageup';
    }
    if (pKey.key === 'PageDown') {
      k += 'pagedown';
    }
    if (pKey.key === 'Home') {
      k += 'home';
    }
    if (pKey.key === 'End') {
      k += 'end';
    }
    if ((pKey.key && pKey.key !== ' ' && pKey.key.length === 1) || /F\d{1,2}/g.test(pKey.key)) k += pKey.key.toLowerCase();
    return k;
  };

  keyDown(event, mapFunction, decodedKey) {
    if ((!mapFunction.oc && !mapFunction.ps) || (mapFunction.ps && !this.keyPressed)) {
      mapFunction.cb(event, decodedKey);
    }
  };
  keyUp(event, mapFunction, decodedKey) {
    mapFunction.cb(event, decodedKey);
  };

  filteringElement(decodedKey) {
    const objectAvoid = this.objAvoided.find(r => r === document.activeElement);
    const elementSeparate = checkElementType();
    const elementTypeAvoid = elementSeparate.avoidedTypes;
    const elementClassAvoid = elementSeparate.avoidedClasses;
    const filterTypeAvoid = elementTypeAvoid.find(r => r === document.activeElement.tagName.toLowerCase());
    const filterClassAvoid = elementClassAvoid.find(r => r === '.' + document.activeElement.className.toLowerCase());
    return !objectAvoid && !_.isEmpty(this.mapFunctions[decodedKey]) && !filterTypeAvoid && !filterClassAvoid;
  };

  checkElementType() {
    let elmTypeAvoid = [];
    let elmClassAvoid = [];
    this.elementAvoided.forEach(r => {
      const dotPosition = r.indexOf('.');
      if (dotPosition === 0) {
        elmClassAvoid.push(r);
      } else if (dotPosition > 0) {
        elmTypeAvoid.push(r.split('.')[0]);
        elmClassAvoid.push('.' + r.split('.')[1]);
      } else {
        elmTypeAvoid.push(r);
      }
    });

    return { avoidedTypes: elmTypeAvoid, avoidedClasses: elmClassAvoid };
  };
}

let shortcutsHelper = new ShortcutsHelper();
export { shortcutsHelper as ShortcutsHelper };

/*
 * shortcuts.directive.js
 * Copyright (C) 2017 pavle <pavle@hp>
 *
 * Distributed under terms of the BSD 2-Clause license.
 */

import { ShortcutsHelper } from './../helpers/shortcuts-helper';

const shortcutsDirective = {
  bind: (el, binding, vnode) => {
    let bindings = typeof binding.value === 'string' ? JSON.parse(binding.value.replace(/'/gi, '"')) : binding.value;
    _.forEach(bindings, (b) => {
      if (b.avoid) {
        ShortcutsHelper.objAvoided.push(el);
        return;
      }
      let k = b.shortkey.join('');
      if (!ShortcutsHelper.mapFunctions[k]) {
        ShortcutsHelper.mapFunctions[k] = [];
      }
      ShortcutsHelper.mapFunctions[k].push({
        'ps': b.push === true,
        'oc': b.once === true,
        'fn': !(b.focus === true),
        'cb': b.callback,
        'el': vnode.elm
      });
    });
  },
  unbind: (el, binding) => {
    let bindings = typeof binding.value === 'string' ? JSON.parse(binding.value.replace(/'/gi, '"')) : binding.value;
    _.forEach(bindings, (b) => {
      if (b) {
        let k = b.shortkey.join('');
        let mapFunctionIndex = _.findIndex(ShortcutsHelper.mapFunctions[k], { el: el });
        delete ShortcutsHelper.mapFunctions[k][mapFunctionIndex];
      }

      ShortcutsHelper.objAvoided = _.reject(ShortcutsHelper.objAvoided, (obj) => {
        return obj === el;
      });
    });
  }
}

export { shortcutsDirective };

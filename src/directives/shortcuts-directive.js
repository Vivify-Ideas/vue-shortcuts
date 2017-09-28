import { ShortcutsHelper } from './../helpers/shortcuts-helper';

const ShortcutsDirective = {
  bind: (el, binding, vnode) => {
    let bindings = binding.value;
    for (let i = 0; i < bindings.length; i++) {
      if (bindings[i].avoid) {
        ShortcutsHelper.objAvoided.push(el);
        return;
      }
      let k = bindings[i].shortcut.join('');
      if (!ShortcutsHelper.mapFunctions[k]) {
        ShortcutsHelper.mapFunctions[k] = [];
      }
      ShortcutsHelper.mapFunctions[k].push({
        'ps': bindings[i].push === true,
        'oc': bindings[i].once === true,
        'fn': !(bindings[i].focus === true),
        'db': bindings[i].disabled || false,
        'pv': bindings[i].prevent === false ? false : true,
        'cb': bindings[i].callback,
        'el': vnode.elm
      });
    }
  },
  unbind: (el, binding) => {
    let bindings = binding.value;
    for (let i = 0; i < bindings.length; i++) {
      if (bindings[i]) {
        let k = bindings[i].shortcut.join('');
        ShortcutsHelper.mapFunctions[k].splice(ShortcutsHelper.findIndexOf(k, el), 1);
      }
    }
    for (let j = 0; j < ShortcutsHelper.objAvoided.length; j++) {
      if (ShortcutsHelper.objAvoided[j] === el) {
        ShortcutsHelper.objAvoided.splice(j, 1);
        break;
      }
    }
  },
  update: (el, binding, vnode) => {
    let bindings = binding.value;
    for (let i = 0; i < bindings.length; i++) {
      let k = bindings[i].shortcut.join('');
      ShortcutsHelper.mapFunctions[k][ShortcutsHelper.findIndexOf(k, el)].db = bindings[i].disabled || false;
    }
  }
}

export { ShortcutsDirective };

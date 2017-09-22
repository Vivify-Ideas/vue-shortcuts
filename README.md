# VueShortcuts

[![npm](https://img.shields.io/npm/v/vue-shortcuts.svg)](https://www.npmjs.com/package/vue-shortcuts) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A Simple keyboard shortcut plugin for Vue

## Installation

```bash
npm install --save vue-shortcuts
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueShortcuts from 'vue-shortcuts'

Vue.use(VueShortcuts, { prevent: ['input'] })
```
### Options
| Prop | Type | Default | Describe |
| ---- | ---- | ------- | ------- |
| prevent | Array | `[]` | List of selectors that will ignore the event |

### Syntax
```
<component v-shortcuts="[
  { shortcut: [ 'ctrl', 'space' ], callback: foo, push: true, focus: true },
  { shortcut: [ 'shift', 'esc' ], callback: bar, once: true, disabled: someBoolean },
]">

<component2 v-shortcuts="[ { avoid: true } ]">

```
### Props

| Prop | Type | Default | Describe |
| ---- | ---- | ------- | ------- |
| shortcut | Array | `[]` | Array of keystrokes that trigger the callback |
| callback | Function | `none` | Callback function called while the key is pressed |
| once | Boolean | `false` | Trigger only on keyup |
| push | Boolean | `false` | Trigger only on keydown and up, not contiuously while held |
| focus | Boolean | `false` | Focus element instead of calling callback |
| disabled | Boolean | `false` | Reactive property that disables that key |
| avoid | Boolean | `false` | Prevent the event when this element is focused |

#### Key list
| Key                        | Shortkey Name |
|----------------------------|---------------|
| Shift                      | shift         |
| Control                    | ctrl          |
| Alt                        | alt           |
| Alt Graph                  | altgraph      |
| Super (Windows or Mac Cmd) | meta          |
| Arrow Up                   | arrowup       |
| Arrow Down                 | arrowdown     |
| Arrow Left                 | arrowleft     |
| Arrow Right                | arrowright    |
| Enter                      | enter         |
| Escape                     | esc           |
| Tab                        | tab           |
| Space                      | space         |
| Page Up                    | pageup        |
| Page Down                  | pagedown      |
| Home                       | home          |
| End                        | end           |
| A - Z                      | a-z           |
| 0-9                        | 0-9           |
| F1-F12                     | f1-f12        |

## Credit

Initally forked from [iFgR/vue-shortkey](https://github.com/iFgR/vue-shortkey)

## License

[MIT](http://opensource.org/licenses/MIT)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["newui"] = factory();
	else
		root["newui"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "b20f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "NewAppBar", function() { return components_NewAppBar; });
__webpack_require__.d(components_namespaceObject, "NewButton", function() { return components_NewButton; });
__webpack_require__.d(components_namespaceObject, "NewButtonToolbar", function() { return components_NewButtonToolbar; });
__webpack_require__.d(components_namespaceObject, "NewCard", function() { return components_NewCard; });
__webpack_require__.d(components_namespaceObject, "NewLink", function() { return components_NewLink; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71d1dc0e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewAppBar/NewAppBar.vue?vue&type=template&id=7fa3382c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"new-ui new-appbar",class:[_vm.stateClass, {'new-appbar--collapsed': _vm.collapsed}]},[_c('div',{staticClass:"new-ui new-appbar__menu-button"}),_c('div',{staticClass:"new-ui new-appbar__title"},[_c('h3',{staticClass:"new-ui new-appbar__title-content"},[_vm._v(" "+_vm._s(_vm.title)+" ")])]),_c('div',{staticClass:"new-ui new-appbar__actions"},[_vm._t("actions")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewAppBar/NewAppBar.vue?vue&type=template&id=7fa3382c&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewAppBar/NewAppBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NewAppBarvue_type_script_lang_js_ = ({
  name: 'NewAppBar',
  props: {
    title: {
      type: String,
      default: 'My NewUI App'
    },
    state: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['info', 'success', 'warn', 'error', 'default', 'accent', 'brand'].indexOf(value) !== -1
      }
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    stateClass() {
      return `new-appbar--state-${this.state}`
    }
  }
});

// CONCATENATED MODULE: ./src/components/NewAppBar/NewAppBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewAppBar_NewAppBarvue_type_script_lang_js_ = (NewAppBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/NewAppBar/NewAppBar.vue





/* normalize component */

var component = normalizeComponent(
  NewAppBar_NewAppBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewAppBar = (component.exports);
// CONCATENATED MODULE: ./src/components/NewAppBar/index.js


const exported = Vue => {
  Vue.component(NewAppBar.name, NewAppBar)
}

/* harmony default export */ var components_NewAppBar = (exported);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71d1dc0e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewButton/NewButton.vue?vue&type=template&id=c1a7e280&
var NewButtonvue_type_template_id_c1a7e280_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:"new-ui new-button new-button--" + _vm.state + "--" + _vm.appearance + " " + _vm.is_expanded+' new-button--'+_vm.shape},[_vm._t("default")],2)}
var NewButtonvue_type_template_id_c1a7e280_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewButton/NewButton.vue?vue&type=template&id=c1a7e280&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewButton/NewButton.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var NewButtonvue_type_script_lang_js_ = ({
  name: 'NewButton',
  props: {
    shape: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['default', 'pill', 'tile'].indexOf(value) !== -1
      }
    },
    expanded: {
      type: Boolean,
      default: false
    },
    appearance: {
      type: String,
      default: 'filled',
      validator: function (value) {
        return ['stroked', 'filled', 'text'].indexOf(value) !== -1
      }
    },
    state: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['info', 'success', 'warn', 'error', 'default', 'secondary', 'brand'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    is_expanded: function () {
      if (this.expanded == true) {return 'new-button--expanded'}
      return ''
    },
    class: function () {
      let returned = `new-ui new-button new-button--${this.state}--${this.appearance}`
      if (this.expanded == true) {
        returned = returned + ` new-button--expanded`
      }
      if (this.style != "default") {
        returned = returned + ` new-button--${this.style}`
      }
      return returned
    }
  }
});

// CONCATENATED MODULE: ./src/components/NewButton/NewButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewButton_NewButtonvue_type_script_lang_js_ = (NewButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NewButton/NewButton.vue





/* normalize component */

var NewButton_component = normalizeComponent(
  NewButton_NewButtonvue_type_script_lang_js_,
  NewButtonvue_type_template_id_c1a7e280_render,
  NewButtonvue_type_template_id_c1a7e280_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewButton = (NewButton_component.exports);
// CONCATENATED MODULE: ./src/components/NewButton/index.js


const NewButton_exported = Vue => {
  Vue.component(NewButton.name, NewButton)
}

/* harmony default export */ var components_NewButton = (NewButton_exported);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71d1dc0e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewButtonToolbar/NewButtonToolbar.vue?vue&type=template&id=73993008&
var NewButtonToolbarvue_type_template_id_73993008_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"new-ui new-button-toolbar"},[_vm._t("default")],2)}
var NewButtonToolbarvue_type_template_id_73993008_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewButtonToolbar/NewButtonToolbar.vue?vue&type=template&id=73993008&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewButtonToolbar/NewButtonToolbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var NewButtonToolbarvue_type_script_lang_js_ = ({
  name: 'NewButtonToolbar',
});

// CONCATENATED MODULE: ./src/components/NewButtonToolbar/NewButtonToolbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewButtonToolbar_NewButtonToolbarvue_type_script_lang_js_ = (NewButtonToolbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NewButtonToolbar/NewButtonToolbar.vue





/* normalize component */

var NewButtonToolbar_component = normalizeComponent(
  NewButtonToolbar_NewButtonToolbarvue_type_script_lang_js_,
  NewButtonToolbarvue_type_template_id_73993008_render,
  NewButtonToolbarvue_type_template_id_73993008_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewButtonToolbar = (NewButtonToolbar_component.exports);
// CONCATENATED MODULE: ./src/components/NewButtonToolbar/index.js


const NewButtonToolbar_exported = Vue => {
  Vue.component(NewButtonToolbar.name, NewButtonToolbar)
}

/* harmony default export */ var components_NewButtonToolbar = (NewButtonToolbar_exported);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71d1dc0e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/NewCard.vue?vue&type=template&id=0615aeb9&
var NewCardvue_type_template_id_0615aeb9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"new-ui new-card",class:_vm.classes},[_vm._t("default")],2)}
var NewCardvue_type_template_id_0615aeb9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewCard/NewCard.vue?vue&type=template&id=0615aeb9&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/NewCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var NewCardvue_type_script_lang_js_ = ({
  name: 'NewCard',
  props: {
    interactable: Boolean
  },
  data () {
    return {
      provided: {
        expanded: false
      }
    }
  },
  provide () {
    card: this.provided
  },
  computed: {
    classes () {
      return {
        "expanded": this.provided.expanded,
        "interactable": this.interactable
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/NewCard/NewCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewCard_NewCardvue_type_script_lang_js_ = (NewCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NewCard/NewCard.vue





/* normalize component */

var NewCard_component = normalizeComponent(
  NewCard_NewCardvue_type_script_lang_js_,
  NewCardvue_type_template_id_0615aeb9_render,
  NewCardvue_type_template_id_0615aeb9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewCard = (NewCard_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71d1dc0e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardActions/NewCardActions.vue?vue&type=template&id=b0a1de32&
var NewCardActionsvue_type_template_id_b0a1de32_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"new-card__actions",class:("md-alignment-" + _vm.mdAlignment)},[_vm._t("default")],2)}
var NewCardActionsvue_type_template_id_b0a1de32_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardActions/NewCardActions.vue?vue&type=template&id=b0a1de32&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardActions/NewCardActions.vue?vue&type=script&lang=js&
//
//
//
//
//
//

const alignments = ['left', 'right', 'space-between']
/* harmony default export */ var NewCardActionsvue_type_script_lang_js_ = ({
  name: 'NewCardActions',
  props: {
    mdAlignment: {
      type: String,
      default: 'right',
      validator: function (value) {
        return ['left', 'right', 'space-between'].indexOf(value) !== -1
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardActions/NewCardActions.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewCardActions_NewCardActionsvue_type_script_lang_js_ = (NewCardActionsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardActions/NewCardActions.vue





/* normalize component */

var NewCardActions_component = normalizeComponent(
  NewCardActions_NewCardActionsvue_type_script_lang_js_,
  NewCardActionsvue_type_template_id_b0a1de32_render,
  NewCardActionsvue_type_template_id_b0a1de32_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewCardActions = (NewCardActions_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71d1dc0e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardArea/NewCardArea.vue?vue&type=template&id=1604b129&
var NewCardAreavue_type_template_id_1604b129_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"new-card__area",class:_vm.areaClasses},[_vm._t("default")],2)}
var NewCardAreavue_type_template_id_1604b129_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardArea/NewCardArea.vue?vue&type=template&id=1604b129&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardArea/NewCardArea.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var NewCardAreavue_type_script_lang_js_ = ({
  name: 'NewCardArea',
  props: {
    inset: Boolean
  },
  computed: {
    areaClasses () {
      return {
        'new-inset': this.inset
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardArea/NewCardArea.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewCardArea_NewCardAreavue_type_script_lang_js_ = (NewCardAreavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardArea/NewCardArea.vue





/* normalize component */

var NewCardArea_component = normalizeComponent(
  NewCardArea_NewCardAreavue_type_script_lang_js_,
  NewCardAreavue_type_template_id_1604b129_render,
  NewCardAreavue_type_template_id_1604b129_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewCardArea = (NewCardArea_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71d1dc0e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardContent/NewCardContent.vue?vue&type=template&id=6b7e11ef&
var NewCardContentvue_type_template_id_6b7e11ef_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"new-ui new-card__content"},[_vm._t("default")],2)}
var NewCardContentvue_type_template_id_6b7e11ef_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardContent/NewCardContent.vue?vue&type=template&id=6b7e11ef&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardContent/NewCardContent.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var NewCardContentvue_type_script_lang_js_ = ({
  name: 'NewCardContent'
});

// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardContent/NewCardContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewCardContent_NewCardContentvue_type_script_lang_js_ = (NewCardContentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardContent/NewCardContent.vue





/* normalize component */

var NewCardContent_component = normalizeComponent(
  NewCardContent_NewCardContentvue_type_script_lang_js_,
  NewCardContentvue_type_template_id_6b7e11ef_render,
  NewCardContentvue_type_template_id_6b7e11ef_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewCardContent = (NewCardContent_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71d1dc0e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardHeader/NewCardHeader.vue?vue&type=template&id=15aedbbe&
var NewCardHeadervue_type_template_id_15aedbbe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"new-ui new-card__header"},[_vm._t("default")],2)}
var NewCardHeadervue_type_template_id_15aedbbe_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardHeader/NewCardHeader.vue?vue&type=template&id=15aedbbe&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardHeader/NewCardHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var NewCardHeadervue_type_script_lang_js_ = ({
  name: 'NewCardHeader'
});

// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardHeader/NewCardHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewCardHeader_NewCardHeadervue_type_script_lang_js_ = (NewCardHeadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardHeader/NewCardHeader.vue





/* normalize component */

var NewCardHeader_component = normalizeComponent(
  NewCardHeader_NewCardHeadervue_type_script_lang_js_,
  NewCardHeadervue_type_template_id_15aedbbe_render,
  NewCardHeadervue_type_template_id_15aedbbe_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewCardHeader = (NewCardHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71d1dc0e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardHeader/NewCardHeaderText.vue?vue&type=template&id=7473d840&
var NewCardHeaderTextvue_type_template_id_7473d840_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"new-ui new-card__header-text"},[_vm._t("default")],2)}
var NewCardHeaderTextvue_type_template_id_7473d840_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardHeader/NewCardHeaderText.vue?vue&type=template&id=7473d840&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardHeader/NewCardHeaderText.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var NewCardHeaderTextvue_type_script_lang_js_ = ({
  name: 'NewCardHeaderText',
  data: () => {
    return {
      parentClasses: null
    }
  },
  mounted () {
    this.parentClasses = this.$parent.$el.classList
    if (this.parentClasses.contains('new-card__header')) {
      this.parentClasses.add('new-card__header-flex')
    }
  },
  beforeDestroy () {
    this.parentClasses.remove('new-card__header-flex')
  }
});

// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardHeader/NewCardHeaderText.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewCardHeader_NewCardHeaderTextvue_type_script_lang_js_ = (NewCardHeaderTextvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardHeader/NewCardHeaderText.vue





/* normalize component */

var NewCardHeaderText_component = normalizeComponent(
  NewCardHeader_NewCardHeaderTextvue_type_script_lang_js_,
  NewCardHeaderTextvue_type_template_id_7473d840_render,
  NewCardHeaderTextvue_type_template_id_7473d840_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewCardHeaderText = (NewCardHeaderText_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71d1dc0e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardMedia/NewCardMedia.vue?vue&type=template&id=2d86082f&
var NewCardMediavue_type_template_id_2d86082f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"new-card-media",class:_vm.mediaClasses},[_vm._t("default")],2)}
var NewCardMediavue_type_template_id_2d86082f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardMedia/NewCardMedia.vue?vue&type=template&id=2d86082f&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardMedia/NewCardMedia.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var NewCardMediavue_type_script_lang_js_ = ({
  name: 'NewCardMedia',
  props: {
    mdRatio: {
      type: String,
      validator: function (value) {
        return ['16-9',
        '16/9',
        '16:9',
        '4-3',
        '4/3',
        '4:3',
        '1-1',
        '1/1',
        '1:1'].indexOf(value) !== -1
      }
    },
    mediaMedium: Boolean,
    mediaBig: Boolean
  },
  computed: {
    mediaClasses () {
      let classes = {}
      if (this.mdRatio) {
        const ratio = this.getAspectRatio()
        if (ratio) {
          const [horiz, vert] = ratio
          classes[`media-ratio-${horiz}-${vert}`] = true
        }
      }
      if (this.mdMedium || this.mdBig) {
        classes = {
          'media-medium': this.mediaMedium,
          'media-big': this.mediaBig
        }
      }
      return classes
    }
  },
  methods: {
    getAspectRatio () {
      let ratio = []
      if (this.mediaRatio.indexOf(':') !== -1) {
        ratio = this.mediaRatio.split(':')
      } else if (this.mediaRatio.indexOf('/') !== -1) {
        ratio = this.mediaRatio.split('/')
      } else if (this.mediaRatio.indexOf('-') !== -1) {
        ratio = this.mediaRatio.split('-')
      }
      return ratio.length === 2 ? ratio : null
    }
  }
});

// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardMedia/NewCardMedia.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewCardMedia_NewCardMediavue_type_script_lang_js_ = (NewCardMediavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardMedia/NewCardMedia.vue





/* normalize component */

var NewCardMedia_component = normalizeComponent(
  NewCardMedia_NewCardMediavue_type_script_lang_js_,
  NewCardMediavue_type_template_id_2d86082f_render,
  NewCardMediavue_type_template_id_2d86082f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewCardMedia = (NewCardMedia_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71d1dc0e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardMedia/NewCardMediaCover.vue?vue&type=template&id=c3ac9888&
var NewCardMediaCovervue_type_template_id_c3ac9888_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"new-card__media-cover",class:_vm.coverClasses},[_vm._t("default"),(_vm.textScrim)?_c('div',{ref:"backdrop",staticClass:"new-card__backdrop",style:(_vm.coverStyles)}):_vm._e()],2)}
var NewCardMediaCovervue_type_template_id_c3ac9888_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardMedia/NewCardMediaCover.vue?vue&type=template&id=c3ac9888&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardMedia/NewCardMediaCover.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var NewCardMediaCovervue_type_script_lang_js_ = ({
  name: 'NewCardMediaCover',
  props: {
    textScrim: Boolean,
    solid: Boolean
  },
  data: () => ({
    backdropBackground: {}
  }),
  computed: {
    coverClasses () {
      return {
        'text-scrim': this.textScrim,
        'solid': this.solid
      }
    },
    coverStyles () {
      return {
        background: this.backdropBackground
      }
    }
  },
  methods: {
    applyScrimColor (darkness) {
      if (this.$refs.backdrop) {
        this.backdropBackground = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, ${darkness / 2}) 66%, rgba(0, 0, 0, ${darkness}) 100%)`
      }
    },
    applySolidColor (darkness) {
      let area = this.$el.querySelector('.new-card-area')
      if (area) {
        area.style.background = `rgba(0, 0, 0, ${darkness})`
      }
    },
    getImageLightness (image, onLoad, onError) {
      let canvas = document.createElement('canvas')
      image.crossOrigin = 'Anonymous'
      image.onload = function () {
        let colorSum = 0
        let ctx
        let imageData
        let imageMetadata
        let r
        let g
        let b
        let average
        canvas.width = this.width
        canvas.height = this.height
        ctx = canvas.getContext('2d')
        ctx.drawImage(this, 0, 0)
        imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        imageMetadata = imageData.data
        for (let x = 0, len = imageMetadata.length; x < len; x += 4) {
          r = imageMetadata[x]
          g = imageMetadata[x + 1]
          b = imageMetadata[x + 2]
          average = Math.floor((r + g + b) / 3)
          colorSum += average
        }
        onLoad(Math.floor(colorSum / (this.width * this.height)))
      }
      image.onerror = onError
    }
  },
  mounted () {
    const applyBackground = (darkness = 0.6) => {
      if (this.textScrim) {
        this.applyScrimColor(darkness)
      } else if (this.solid) {
        this.applySolidColor(darkness)
      }
    }
    let image = this.$el.querySelector('img')
    if (image && (this.textScrim || this.solid)) {
      this.getImageLightness(image, (lightness) => {
        let limit = 256
        let darkness = (Math.abs(limit - lightness) * 100 / limit + 15) / 100
        if (darkness >= 0.7) {
          darkness = 0.7
        }
        applyBackground(darkness)
      }, applyBackground)
    }
  }
});

// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardMedia/NewCardMediaCover.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewCardMedia_NewCardMediaCovervue_type_script_lang_js_ = (NewCardMediaCovervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardMedia/NewCardMediaCover.vue





/* normalize component */

var NewCardMediaCover_component = normalizeComponent(
  NewCardMedia_NewCardMediaCovervue_type_script_lang_js_,
  NewCardMediaCovervue_type_template_id_c3ac9888_render,
  NewCardMediaCovervue_type_template_id_c3ac9888_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewCardMediaCover = (NewCardMediaCover_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71d1dc0e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardMedia/NewCardMediaActions.vue?vue&type=template&id=6ca2981c&
var NewCardMediaActionsvue_type_template_id_6ca2981c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"new-card__media-actions"},[_vm._t("default")],2)}
var NewCardMediaActionsvue_type_template_id_6ca2981c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardMedia/NewCardMediaActions.vue?vue&type=template&id=6ca2981c&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewCard/parts/NewCardMedia/NewCardMediaActions.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var NewCardMediaActionsvue_type_script_lang_js_ = ({
  name: 'NewCardMediaActions'
});

// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardMedia/NewCardMediaActions.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewCardMedia_NewCardMediaActionsvue_type_script_lang_js_ = (NewCardMediaActionsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NewCard/parts/NewCardMedia/NewCardMediaActions.vue





/* normalize component */

var NewCardMediaActions_component = normalizeComponent(
  NewCardMedia_NewCardMediaActionsvue_type_script_lang_js_,
  NewCardMediaActionsvue_type_template_id_6ca2981c_render,
  NewCardMediaActionsvue_type_template_id_6ca2981c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewCardMediaActions = (NewCardMediaActions_component.exports);
// CONCATENATED MODULE: ./src/components/NewCard/index.js










const NewCard_exported = Vue => {
  Vue.component(NewCard.name, NewCard)
  Vue.component(NewCardActions.name, NewCardActions)
  Vue.component(NewCardArea.name, NewCardArea)
  Vue.component(NewCardContent.name, NewCardContent)
  Vue.component(NewCardHeader.name, NewCardHeader)
  Vue.component(NewCardHeaderText.name, NewCardHeaderText)
  Vue.component(NewCardMedia.name, NewCardMedia)
  Vue.component(NewCardMediaCover.name, NewCardMediaCover)
  Vue.component(NewCardMediaActions.name, NewCardMediaActions)
}

/* harmony default export */ var components_NewCard = (NewCard_exported);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"71d1dc0e-vue-loader-template"}!./node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewLink/NewLink.vue?vue&type=template&id=54cd3b4a&
var NewLinkvue_type_template_id_54cd3b4a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"new-ui new-link"},[_vm._t("default")],2)}
var NewLinkvue_type_template_id_54cd3b4a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NewLink/NewLink.vue?vue&type=template&id=54cd3b4a&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/components/NewLink/NewLink.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var NewLinkvue_type_script_lang_js_ = ({
  name: 'NewButton',
  props: {
    state: {
      type: String,
      default: 'brand',
      validator: function (value) {
        return ['info', 'success', 'warn', 'error', 'secondary', 'brand'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    class: function () {
      let returned = `new-link--${this.state}`
      return returned
    }
  }
});

// CONCATENATED MODULE: ./src/components/NewLink/NewLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var NewLink_NewLinkvue_type_script_lang_js_ = (NewLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/NewLink/NewLink.vue





/* normalize component */

var NewLink_component = normalizeComponent(
  NewLink_NewLinkvue_type_script_lang_js_,
  NewLinkvue_type_template_id_54cd3b4a_render,
  NewLinkvue_type_template_id_54cd3b4a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewLink = (NewLink_component.exports);
// CONCATENATED MODULE: ./src/components/NewLink/index.js


const NewLink_exported = Vue => {
  Vue.component(NewLink.name, NewLink)
}

/* harmony default export */ var components_NewLink = (NewLink_exported);

// CONCATENATED MODULE: ./src/components/index.js








// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__("b20f");

// CONCATENATED MODULE: ./src/index.js



let NewUI = Vue => {
  Object.values(components_namespaceObject).forEach((component) => {
    Vue.use(component)
  })
}

/* harmony default export */ var src = (NewUI);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
});
//# sourceMappingURL=newui.umd.js.map
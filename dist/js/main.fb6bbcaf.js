// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"fonts/fredoka.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"fonts/lato.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../fonts/fredoka.css":"fonts/fredoka.css","./../fonts/lato.css":"fonts/lato.css","./..\\img\\bg.jpg":[["bg.c04a5f46.jpg","img/bg.jpg"],"img/bg.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"img/sakht-launda-anim.gif":[function(require,module,exports) {
module.exports = "/images/sakht-launda-anim.3df1d3d3.gif";
},{}],"img/sakht-launda.jpg":[function(require,module,exports) {
module.exports = "/images/sakht-launda.d5e54ca9.jpg";
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

require("./../scss/main");

var _sakhtLaundaAnim = _interopRequireDefault(require("./../img/sakht-launda-anim.gif"));

var _sakhtLaunda = _interopRequireDefault(require("./../img/sakht-launda.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import './allscripts.js'
console.log('Core js Deployed! Happy Coding.');

function Person(developer, mail, project) {
  this.developer = developer;
  this.email = mail;
  this.project = project;
}

var me = new Person("Prosenjeet Paul", "prosenjeet123@gmail.com", "GreatLearning");
console.table(me); //for youtuber hover

var youtuberimg = document.getElementsByClassName('row--youtubeimg')[0];
youtuberimg.addEventListener("mouseover", function () {
  this.setAttribute("src", _sakhtLaundaAnim.default);
  document.getElementsByClassName('row__youtubewrap')[0].classList.add('preview');
});
youtuberimg.addEventListener("mouseleave", function () {
  this.setAttribute("src", _sakhtLaunda.default);
  document.getElementsByClassName('row__youtubewrap')[0].classList.remove('preview');
}); //for accordian

var accordele = document.getElementsByClassName('row__accord__li');

if (accordele) {
  for (var i = 0; i < accordele.length; i++) {
    accordele[i].addEventListener('click', function () {
      //close all opened accords
      resetall();
      this.classList.add('active');
      var phei = this.querySelectorAll('.row__accord__panel p')[0];
      phei.style.height = phei.scrollHeight + 'px';
    });
  }
} //reset accordian


function resetall() {
  if (accordele) {
    for (var i = 0; i < accordele.length; i++) {
      accordele[i].classList.remove('active');
      var phei = accordele[i].querySelectorAll('.row__accord__panel p')[0];
      phei.style.height = '0px';
    }
  }
} //slider with slideintoview() method
//this one is the first for me
//you can also see my other project in slider which is in pure javascript
//and without slideintoview()
//see here: https://github.com/prosenjeet123/swiperforall
//slider properly not working in mobile


var slidewi = document.getElementsByClassName('row__slider-wrap__slider')[0].scrollWidth; //count slider items

var slideitems = document.getElementsByClassName('row__slider-wrap__slider__ul__li');
var slideitemcount = 0;

if (slideitems) {
  for (var i = 0; i < slideitems.length; i++) {
    slideitemcount = slideitemcount + 1;
  }
} //now divide with items


var oneslidew = slidewi / slideitemcount;
var sliderul = document.getElementsByClassName('row__slider-wrap__slider__ul')[0];
var indexval = 0;
var leftar = document.getElementsByClassName('row__slider-wrap__leftar')[0];
leftar.addEventListener('click', function () {
  if (indexval != 0) {
    document.getElementsByClassName('row__slider-wrap__leftar')[0].style.opacity = "1";
    document.getElementsByClassName('row__slider-wrap__rightar')[0].style.opacity = "1";
    indexval = indexval - 1;
    document.getElementsByClassName('row__slider-wrap__slider__ul__li').item(indexval).scrollIntoView();
    console.log(indexval);
  } else {
    //set arrow opacity
    document.getElementsByClassName('row__slider-wrap__leftar')[0].style.opacity = "0.2";
  }
});
var rightar = document.getElementsByClassName('row__slider-wrap__rightar')[0];
rightar.addEventListener('click', function () {
  if (indexval < slideitemcount - 1) {
    document.getElementsByClassName('row__slider-wrap__rightar')[0].style.opacity = "1";
    document.getElementsByClassName('row__slider-wrap__leftar')[0].style.opacity = "1";
    indexval = indexval + 1;
    document.getElementsByClassName('row__slider-wrap__slider__ul__li').item(indexval).scrollIntoView();
    console.log(indexval);
  } else {
    //set arrow opacity
    document.getElementsByClassName('row__slider-wrap__rightar')[0].style.opacity = "0.2";
  }
}); //for sticky footer

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 390) {
    document.getElementsByClassName('sticky')[0].classList.add('sticky--makeitactive');
  } else {
    document.getElementsByClassName('sticky')[0].classList.remove('sticky--makeitactive');
  }
}; //on sticky apply button click


document.getElementById('scrollmetop').addEventListener('click', function () {
  var ele = document.getElementsByClassName('card')[0];
  window.scrollTo(0, 0);
}); //form validations

document.getElementById("topform").onsubmit = function () {
  var name = document.getElementsByName('name')[0].value;
  var email = document.getElementsByName('email')[0].value;
  var mobile = document.getElementsByName('mobile')[0].value;
  var work = document.getElementsByName('work')[0].value;
  var company = document.getElementsByName('organization')[0].value;

  if (mobile.length < 10 || mobile.length > 10) {
    alert('Please enter a valid 10 digit mobile number');
    return;
  } else {
    var ar = {
      name: name,
      email: email,
      mobile: mobile,
      work: work,
      company: company
    };
    localStorage.setItem('greatformdata', JSON.stringify(ar));
    alert('Data Submitted succesfully!');
    this.reset();
    window.location.reload();
  }
}; //auto fill formdata


if (localStorage.getItem("greatformdata")) {
  console.log('It has localstorage data, init auto fill!');
  var parsedata = JSON.parse(localStorage.getItem("greatformdata"));
  document.getElementsByName('name')[0].value = parsedata.name;
  document.getElementsByName('email')[0].value = parsedata.email;
  document.getElementsByName('mobile')[0].value = parsedata.mobile;
  document.getElementsByName('work')[0].value = parsedata.work;
  document.getElementsByName('organization')[0].value = parsedata.company;
} else {
  console.log('No Localstorage Data found. Go ahead and fill the data.');
}
},{"./../scss/main":"scss/main.scss","./../img/sakht-launda-anim.gif":"img/sakht-launda-anim.gif","./../img/sakht-launda.jpg":"img/sakht-launda.jpg"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65413" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map
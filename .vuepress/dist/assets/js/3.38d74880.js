(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{189:function(e,t,r){"use strict";r.r(t);var a=r(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),r("p",[r("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/TutorialManager?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/TutorialManager&utm_campaign=Badge_Grade",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/282735fb74e647c4b630056271b66d77",alt:"Codacy Badge"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://styleci.io/repos/85628545",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://styleci.io/repos/85628545/shield?branch=master",alt:"StyleCI"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/tutorialmanager",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/tutorialmanager/license",alt:"License"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/tutorialmanager",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/tutorialmanager/downloads",alt:"Total Downloads"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/tutorialmanager",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/tutorialmanager/version",alt:"Latest Stable Version"}}),r("OutboundLink")],1)]),r("p",[e._v("Tutorial management dependency for "),r("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),r("OutboundLink")],1),e._v(".")]),r("p",[r("a",{attrs:{href:"https://laravel-enso.github.io/tutorialmanager/screenshots/bulma_023.png",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://laravel-enso.github.io/tutorialmanager/screenshots/bulma_023_thumb.png",alt:"Screenshot"}}),r("OutboundLink")],1)]),r("p",[r("a",{attrs:{href:"https://laravel-enso.github.io/tutorialmanager/videos/bulma_demo_01.webm",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://laravel-enso.github.io/tutorialmanager/screenshots/bulma_026_thumb.png",alt:"Watch the demo"}}),r("OutboundLink")],1)]),e._m(1),e._m(2),e._m(3),e._m(4),r("ul",[e._m(5),r("li",[e._v("tutorial entries are displayed using "),r("a",{attrs:{href:"http://introjs.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intro.js"),r("OutboundLink")],1)])]),e._m(6),e._m(7),e._m(8),r("p",[e._v("The "),r("a",{attrs:{href:"https://github.com/laravel-enso/Core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso Core"),r("OutboundLink")],1),e._v(" package comes with this package included.")]),r("p",[e._v("Depends on:")]),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/laravel-enso/Datatable",target:"_blank",rel:"noopener noreferrer"}},[e._v("Datatable"),r("OutboundLink")],1),e._v(" for displaying the list of tutorial entries")]),r("li",[r("a",{attrs:{href:"https://github.com/laravel-enso/FormBuilder",target:"_blank",rel:"noopener noreferrer"}},[e._v("FormBuilder"),r("OutboundLink")],1),e._v(" for creating the forms when managing tutorials")]),r("li",[r("a",{attrs:{href:"https://github.com/laravel-enso/Helpers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helpers"),r("OutboundLink")],1),e._v(" for utility classes and traits")]),r("li",[r("a",{attrs:{href:"https://github.com/laravel-enso/PermissionManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("PermissionManager"),r("OutboundLink")],1),e._v(" for using permissions and routes to determine what tutorials to load")]),r("li",[r("a",{attrs:{href:"https://github.com/laravel-enso/StructureManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("StructureManager"),r("OutboundLink")],1),e._v(" for the migrations")])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"tutorial-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-manager","aria-hidden":"true"}},[this._v("#")]),this._v(" Tutorial Manager")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("sup",[this._v("click on the photo to view a short demo in compatible browsers")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("allows for a user friendly way of teaching users how to use the interface of the application")]),t("li",[this._v("permits adding, updating and deleting tutorial entries that can then be played for the selected route")]),t("li",[this._v("the tutorial functionality may be started/restarted from the right-hand sidebar, using the "),t("code",[this._v("?")]),this._v(" button")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"under-the-hood"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#under-the-hood","aria-hidden":"true"}},[this._v("#")]),this._v(" Under the Hood")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[e._v("the "),r("code",[e._v("tutorials")]),e._v(" table is used for the tutorial module and has several key attributes:\n"),r("ul",[r("li",[r("code",[e._v("permission_id")]),e._v(" -  the permission where they're in use, since permissions are tied to routes,\nand we're using permissions to know which tutorials to load for a page")]),r("li",[r("code",[e._v("element")]),e._v(" - identifies the element within the DOM, and may be an element, an id, in which case it should be\nprefixed with a "),r("code",[e._v("#")]),e._v(" or a class, in which case it should be prefixed with "),r("code",[e._v(".")]),e._v(" or a combination of these")]),r("li",[r("code",[e._v("placement")]),e._v(" -  sets the position of the tutorial dialog, relative to the DOM element,\nand can be: "),r("code",[e._v("top")]),e._v(", "),r("code",[e._v("bottom")]),e._v(", "),r("code",[e._v("left")]),e._v(" or "),r("code",[e._v("right")])]),r("li",[r("code",[e._v("order_index")]),e._v(" - gives the order in which a particular tutorial element should be displayed,\nin the context of the available tutorials for a certain page")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"publishes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[this._v("#")]),this._v(" Publishes")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("code",[e._v("php artisan vendor:publish --tag=tutorials-factory")]),e._v(" - the factory for the "),r("code",[e._v("Tutorial")]),e._v(" model")]),r("li",[r("code",[e._v("php artisan vendor:publish --tag=tutorials-assets")]),e._v(" - the VueJS pages and components")]),r("li",[r("code",[e._v("php artisan vendor:publish --tag=enso-factories")]),e._v(" - a common alias for when wanting to update the factories,\nonce a newer version is released, usually used with the "),r("code",[e._v("--force")]),e._v(" flag")]),r("li",[r("code",[e._v("php artisan vendor:publish --tag=enso-assets")]),e._v(" - a common alias for when wanting to update the VueJS assets,\nonce a newer version is released, can be used with the "),r("code",[e._v("--force")]),e._v(" flag")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes")])}],!1,null,null,null);t.default=n.exports}}]);
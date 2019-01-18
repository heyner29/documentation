(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{157:function(e,a,r){"use strict";r.r(a);var t=r(0),s=Object(t.a)({},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"content"},[e._m(0),r("p",[r("a",{attrs:{href:"https://styleci.io/repos/94704466",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://styleci.io/repos/94704466/shield?branch=master",alt:"StyleCI"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://www.codacy.com/app/laravel-enso/AvatarManager?utm_source=github.com&utm_medium=referral&utm_content=laravel-enso/AvatarManager&utm_campaign=badger",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://api.codacy.com/project/badge/Grade/d84efcf2530348d29f2ca573d06f7314",alt:"Codacy Badge"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/avatarmanager",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/avatarmanager/license",alt:"License"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/avatarmanager",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/avatarmanager/downloads",alt:"Total Downloads"}}),r("OutboundLink")],1),r("a",{attrs:{href:"https://packagist.org/packages/laravel-enso/avatarmanager",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://poser.pugx.org/laravel-enso/avatarmanager/version",alt:"Latest Stable Version"}}),r("OutboundLink")],1)]),r("p",[e._v("User Avatar manager dependency for "),r("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),r("OutboundLink")],1),e._v(".")]),r("p",[r("a",{attrs:{href:"https://laravel-enso.github.io/avatarmanager/videos/bulma_avatar_change.webm",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://laravel-enso.github.io/avatarmanager/screenshots/bulma_cap001_thumb.png",alt:"Watch the demo"}}),r("OutboundLink")],1),r("sup",[e._v("click on the photo to view a short demo in compatible browsers")])]),e._m(1),r("ul",[r("li",[e._v("comes with a table migration, in order to be able to store avatar related data")]),r("li",[e._v("includes model, routes & controllers")]),r("li",[e._v("creates a folder used to store the avatar files and a default avatar for users that do not have an avatar set")]),r("li",[e._v("uses the "),r("a",{attrs:{href:"https://github.com/laravel-enso/FileManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("File Manager"),r("OutboundLink")],1),e._v(" package for uploading the avatar files")]),r("li",[e._v("uses the "),r("a",{attrs:{href:"https://github.com/laravel-enso/ImageTransformer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Image Transformer"),r("OutboundLink")],1),e._v(" package for cropping and optimizing the avatar files")]),r("li",[e._v("uses the "),r("a",{attrs:{href:"https://github.com/laravolt/avatar",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravolt Avatar"),r("OutboundLink")],1),e._v(" for generating avatars from user names")]),r("li",[e._v("uses a policy to ensure that normal users can only modify their own avatars, while administrators can modify any avatar")])]),e._m(2),e._m(3),r("p",[e._v("Failure to do so may result in silent errors if allotted memory is insufficient.")]),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),r("p",[e._v("The "),r("a",{attrs:{href:"https://github.com/laravel-enso/Enso",target:"_blank",rel:"noopener noreferrer"}},[e._v("Laravel Enso"),r("OutboundLink")],1),e._v(" package comes with this package included.")]),r("p",[e._v("Depends on:")]),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/laravel-enso/Core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Core"),r("OutboundLink")],1),e._v(" for middleware and user model")]),r("li",[r("a",{attrs:{href:"https://github.com/laravel-enso/ImageTransformer",target:"_blank",rel:"noopener noreferrer"}},[e._v("ImageTransformer"),r("OutboundLink")],1),e._v(" for the optimization of avatar images")]),r("li",[r("a",{attrs:{href:"https://github.com/laravel-enso/FileManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("FileManager"),r("OutboundLink")],1),e._v(" for managing the image files")]),r("li",[r("a",{attrs:{href:"https://github.com/laravel-enso/StructureManager",target:"_blank",rel:"noopener noreferrer"}},[e._v("Structure manager"),r("OutboundLink")],1),e._v(" for the migrations")])])])},[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{attrs:{id:"avatar-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avatar-manager","aria-hidden":"true"}},[this._v("#")]),this._v(" Avatar Manager")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"notes-on-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes-on-usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes on usage")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Since this package is using image processing libraries and these underlying libraries may use a lot of memory,\nespecially if the processed files are large (for example, for an 8MB image file, more than 128MB of memory might be used ),\nmake sure to configure php accordingly and/or do "),a("code",[this._v("ini_set(‘memory_limit’, ‘256M’);")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Commands")])},function(){var e=this.$createElement,a=this._self._c||e;return a("ul",[a("li",[a("code",[this._v("php artisan enso:avatars:generate")]),this._v(" - generates avatars for users which do not already have an avatar")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"publishes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishes","aria-hidden":"true"}},[this._v("#")]),this._v(" Publishes")])},function(){var e=this.$createElement,a=this._self._c||e;return a("ul",[a("li",[a("code",[this._v("php artisan vendor:publish --tag=avatars-storage")]),this._v(" - storage folder and default avatar")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes")])}],!1,null,null,null);a.default=s.exports}}]);
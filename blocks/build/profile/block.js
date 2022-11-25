/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/assets/components/dummy-data/dummy-data.js":
/*!***********************************************************!*\
  !*** ./blocks/assets/components/dummy-data/dummy-data.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/icons */ "./blocks/assets/components/icons/icons.js");

const dummy_data = [{
  name: 'Delores Baisley',
  email: 'Delores.Baisley@mail.com',
  level: 'Free',
  startdate: 'Apr 1, 2018',
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_0__["default"].placeholder_1
}, {
  name: 'Florencia Quill',
  email: 'Florencia.Quill@mail.com',
  level: 'VIP',
  startdate: 'Feb 12, 2019',
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_0__["default"].placeholder_2
}, {
  name: 'Lewis Shortridge',
  email: 'Lewis.Shortridge@mail.com',
  level: 'Unlimited',
  startdate: 'Jan 1, 2017',
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_0__["default"].placeholder_3
}, {
  name: 'Emanuel Maltese',
  email: 'Emanuel.Maltese@mail.com',
  level: 'Unlimited',
  startdate: 'Jan 1, 2017',
  icon: _icons_icons__WEBPACK_IMPORTED_MODULE_0__["default"].placeholder_4
}];
/* harmony default export */ __webpack_exports__["default"] = (dummy_data);

/***/ }),

/***/ "./blocks/assets/components/extra-fields/extra-fields.js":
/*!***************************************************************!*\
  !*** ./blocks/assets/components/extra-fields/extra-fields.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

function ShowExtraFields(_ref) {
  let {
    fields,
    type
  } = _ref;
  if (fields) {
    // Empty array to return styled data.
    const custom_fields = [];

    // take all fields and split them twice.
    const fields_array = fields.split('\n');
    for (const [index, value] of fields_array.entries()) {
      const field_data = value.split(',');
      if (type === 'profile') {
        custom_fields.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "pmpro-member-profile-wrapper"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "pmpro-member-profile-subheading"
        }, field_data[0]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "pmpro-member-profile-content"
        }, field_data[1])));
      } else {
        custom_fields.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "pmpro-member-profile-wrapper"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "pmpro-member-profile-subheading"
        }, field_data[0], ": "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
          className: "pmpro-member-profile-content"
        }, field_data[1])));
      }
    }
    return custom_fields;
  } else {
    return null;
  }
}
/* harmony default export */ __webpack_exports__["default"] = (ShowExtraFields);

/***/ }),

/***/ "./blocks/assets/components/icons/icons.js":
/*!*************************************************!*\
  !*** ./blocks/assets/components/icons/icons.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.placeholder_1 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#545454",
  d: "M13 7L19 1L25 7L19 13ZM31 1L37 7L31 13L25 7ZM37 43L31 49L25 43L31 37ZM19 49L13 43L19 37L25 43ZM1 19L7 13L13 19L7 25ZM43 13L49 19L43 25L37 19ZM49 31L43 37L37 31L43 25ZM7 37L1 31L7 25L13 31Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#d175b6",
  d: "M1 1L13 1L13 7ZM49 1L49 13L43 13ZM49 49L37 49L37 43ZM1 49L1 37L7 37Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#e8e8e8",
  d: "M25 19L25 25L19 25ZM31 25L25 25L25 19ZM25 31L25 25L31 25ZM19 25L25 25L25 31Z"
}));
icons.placeholder_2 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#e3e3e3",
  d: "M25 1L25 13L19 13ZM37 13L25 13L25 7ZM25 49L25 37L31 37ZM13 37L25 37L25 43ZM13 13L13 25L7 25ZM49 25L37 25L37 19ZM37 37L37 25L43 25ZM1 25L13 25L13 31Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#59c7c6",
  d: "M1 1L13 1L13 13ZM49 1L49 13L37 13ZM49 49L37 49L37 37ZM1 49L1 37L13 37Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#464646",
  d: "M16 16L24 16L24 24L16 24ZM34 16L34 24L26 24L26 16ZM34 34L26 34L26 26L34 26ZM16 34L16 26L24 26L24 34Z"
}));
icons.placeholder_3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#4c4c4c",
  d: "M15 7a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M27 7a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M27 43a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M15 43a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M3 19a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M39 19a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M39 31a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M3 31a4,4 0 1,1 8,0a4,4 0 1,1 -8,0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#7c6",
  d: "M13 13L1 13L1 7ZM37 13L37 1L43 1ZM37 37L49 37L49 43ZM13 37L13 49L7 49Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#e5e5e5",
  d: "M13 13L25 13L25 14.9L20 25L13 25ZM37 13L37 25L35.1 25L25 20L25 13ZM37 37L25 37L25 35.1L30 25L37 25ZM13 37L13 25L14.9 25L25 30L25 37Z"
}));
icons.placeholder_4 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 50 50"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#5b5b5b",
  d: "M15 7a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M27 7a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M27 43a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M15 43a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M3 19a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M39 19a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M39 31a4,4 0 1,1 8,0a4,4 0 1,1 -8,0M3 31a4,4 0 1,1 8,0a4,4 0 1,1 -8,0"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#ccc1ea",
  d: "M1 1L13 1L13 7ZM49 1L49 13L43 13ZM49 49L37 49L37 43ZM1 49L1 37L7 37Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#9a84d6",
  d: "M18 21a3,3 0 1,1 6,0a3,3 0 1,1 -6,0M26 21a3,3 0 1,1 6,0a3,3 0 1,1 -6,0M26 29a3,3 0 1,1 6,0a3,3 0 1,1 -6,0M18 29a3,3 0 1,1 6,0a3,3 0 1,1 -6,0"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./blocks/src/profile/block.json":
/*!***************************************!*\
  !*** ./blocks/src/profile/block.json ***!
  \***************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"pmpro-member-directory/profile","version":"1.0.0","title":"Member Profile","category":"pmpro","icon":"smile","description":"Redirect users to Stripe to manage their purchases.","supports":{"html":false},"textdomain":"pmpro-member-directory"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************************!*\
  !*** ./blocks/src/profile/block.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/components/dummy-data/dummy-data */ "./blocks/assets/components/dummy-data/dummy-data.js");
/* harmony import */ var _assets_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/components/extra-fields/extra-fields */ "./blocks/assets/components/extra-fields/extra-fields.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./blocks/src/profile/block.json");





const {
  registerBlockType
} = wp.blocks;
const {
  PanelBody,
  TextControl,
  TextareaControl,
  CheckboxControl
} = wp.components;
const {
  InspectorControls
} = wp.editor;
/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('pmpro-member-directory/profile', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Member Profile', 'pmpro-member-directory'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Display a profile for a Member.', 'pmpro-member-directory'),
  category: 'pmpro',
  icon: {
    background: '#2997c8',
    foreground: '#ffffff',
    src: 'admin-users'
  },
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Membership', 'jsforwpblocks'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('User', 'jsforwpblocks'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Member Profile', 'jsforwpblocks')],
  attributes: {
    avatar_size: {
      type: 'string',
      default: '128'
    },
    fields: {
      type: 'string',
      default: ''
    },
    show_avatar: {
      type: 'boolean',
      default: true
    },
    show_bio: {
      type: 'string',
      default: 'true'
    },
    show_billing: {
      type: 'boolean',
      default: true
    },
    show_email: {
      type: 'boolean',
      default: true
    },
    show_name: {
      type: 'boolean',
      default: true
    },
    show_level: {
      type: 'boolean',
      default: true
    },
    show_phone: {
      type: 'boolean',
      default: true
    },
    show_search: {
      type: 'boolean',
      default: true
    },
    show_startdate: {
      type: 'boolean',
      default: true
    },
    user_id: {
      type: 'string',
      default: ''
    }
  },
  edit: props => {
    const {
      attributes: {
        avatar_size,
        fields,
        show_avatar,
        show_bio,
        show_billing,
        show_email,
        show_name,
        show_level,
        show_phone,
        show_search,
        show_startdate,
        user_id
      },
      className,
      isSelected,
      setAttributes
    } = props;
    return [isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Display Settings', 'pmpro-member-directory')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show Search",
      checked: show_search,
      onChange: show_search => {
        setAttributes({
          show_search
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show Avatar",
      checked: show_avatar,
      onChange: show_avatar => {
        setAttributes({
          show_avatar
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Avatar Size",
      value: avatar_size,
      className: !show_avatar ? "hidden" : "",
      onChange: avatar_size => {
        setAttributes({
          avatar_size
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show Bio",
      checked: show_bio,
      onChange: show_bio => {
        setAttributes({
          show_bio
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show Level",
      checked: show_level,
      onChange: show_level => {
        setAttributes({
          show_level
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show Billing",
      checked: show_billing,
      onChange: show_billing => {
        setAttributes({
          show_billing
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show Email Address",
      checked: show_email,
      onChange: show_email => {
        setAttributes({
          show_email
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show Name",
      checked: show_name,
      onChange: show_name => {
        setAttributes({
          show_name
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show Phone",
      checked: show_phone,
      onChange: show_phone => {
        setAttributes({
          show_phone
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show Start Date",
      checked: show_startdate,
      onChange: show_startdate => {
        setAttributes({
          show_startdate
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "User ID",
      value: user_id,
      onChange: user_id => {
        setAttributes({
          user_id
        });
      },
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Set this to a user ID to show a profile of a specific user. Leave blank for current user.', 'pmpro-member-directory')
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Extra Fields', 'pmpro-member-directory')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
      label: "Fields",
      value: fields,
      onChange: fields => {
        setAttributes({
          fields
        });
      },
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Accepts a list of label names and metakeys per line. (i.e. Label,meta_key)', 'pmpro-member-directory')
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className,
      style: {
        fontFamily: 'arial',
        fontSize: '14px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: '30px',
        fontWeight: 'bold'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Membership Profile', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_search ? '' : 'pmpro-member-directory-hide',
      id: "pmpro-member-profile-search",
      style: {
        display: 'inline-block',
        float: 'right'
      }
    }, "Search Members"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide',
      style: {
        width: avatar_size + 'px',
        height: avatar_size + 'px',
        display: 'inline-block',
        float: 'right'
      }
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_1__["default"][0].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_name ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('August Dibble', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_bio ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Biographical Info', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, "Some biographical information")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_email ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Email Address', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('August.Dibble@mail.com', 'pmpro-member-directory'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_level ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Level', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Free', 'pmpro-member-directory'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_startdate ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Start Date', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Jan 21, 2019', 'pmpro-member-directory'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_billing ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Address', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, "Di Loreto Park", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "Witchita", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "Kansas, 67210", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "US")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_phone ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Phone Number', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, "(130) 024-XXX")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields,
      type: "profile"
    }), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", {
      style: {
        color: 'red'
      }
    }, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Example data for reference purposes only. Any resemblance to actual persons, living or dead is purely coincidental.', 'pmpro-member-directory'))))];
  },
  save: props => {
    return null;
  }
}));
}();
/******/ })()
;
//# sourceMappingURL=block.js.map
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

/***/ "./blocks/assets/components/templates/2col.js":
/*!****************************************************!*\
  !*** ./blocks/assets/components/templates/2col.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/extra-fields/extra-fields */ "./blocks/assets/components/extra-fields/extra-fields.js");
/* harmony import */ var _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dummy-data/dummy-data */ "./blocks/assets/components/dummy-data/dummy-data.js");




const {
  __
} = wp.i18n;
class Col2 extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    const {
      attributes: {
        show_avatar,
        avatar_size,
        fields,
        levels,
        show_email,
        show_level,
        show_search,
        show_startdate,
        layout,
        link
      }
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide',
      id: "",
      style: {
        width: avatar_size + 'px',
        height: avatar_size + 'px',
        display: 'inline-block',
        float: 'right'
      }
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_email ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Email Address"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].email)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_level ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Level"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].level)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_startdate ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Start Date"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].startdate)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields,
      type: "profile"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: link ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-directory-view-profile"
    }, "View Profile \u2192"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide',
      id: "",
      style: {
        width: avatar_size + 'px',
        height: avatar_size + 'px',
        display: 'inline-block',
        float: 'right'
      }
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_email ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Email Address"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].email)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_level ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Level"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].level)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_startdate ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Start Date"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].startdate)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields,
      type: "profile"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: link ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-directory-view-profile"
    }, "View Profile \u2192"))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Col2);

/***/ }),

/***/ "./blocks/assets/components/templates/3col.js":
/*!****************************************************!*\
  !*** ./blocks/assets/components/templates/3col.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/components/extra-fields/extra-fields */ "./blocks/assets/components/extra-fields/extra-fields.js");
/* harmony import */ var _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/components/dummy-data/dummy-data */ "./blocks/assets/components/dummy-data/dummy-data.js");




const {
  __
} = wp.i18n;
class Col3 extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    const {
      attributes: {
        show_avatar,
        avatar_size,
        fields,
        levels,
        show_email,
        show_level,
        show_search,
        show_startdate,
        layout,
        link
      }
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide',
      id: "",
      style: {
        width: avatar_size + 'px',
        height: avatar_size + 'px',
        display: 'inline-block',
        float: 'right'
      }
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_email ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Email Address"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].email)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_level ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Level"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].level)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_startdate ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Start Date"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].startdate)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: link ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-directory-view-profile"
    }, "View Profile \u2192"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide',
      id: "",
      style: {
        width: avatar_size + 'px',
        height: avatar_size + 'px',
        display: 'inline-block',
        float: 'right'
      }
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_email ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Email Address"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].email)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_level ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Level"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].level)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_startdate ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Start Date"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].startdate)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: link ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-directory-view-profile"
    }, "View Profile \u2192"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide',
      id: "",
      style: {
        width: avatar_size + 'px',
        height: avatar_size + 'px',
        display: 'inline-block',
        float: 'right'
      }
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_email ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Email Address"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].email)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_level ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Level"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].level)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_startdate ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Start Date"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _assets_components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].startdate)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: link ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-directory-view-profile"
    }, "View Profile \u2192"))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Col3);

/***/ }),

/***/ "./blocks/assets/components/templates/4col.js":
/*!****************************************************!*\
  !*** ./blocks/assets/components/templates/4col.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/extra-fields/extra-fields */ "./blocks/assets/components/extra-fields/extra-fields.js");
/* harmony import */ var _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dummy-data/dummy-data */ "./blocks/assets/components/dummy-data/dummy-data.js");




const {
  __
} = wp.i18n;
class Col4 extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    const {
      attributes: {
        show_avatar,
        avatar_size,
        fields,
        levels,
        show_email,
        show_level,
        show_startdate,
        layout,
        link
      }
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide',
      id: "",
      style: {
        width: avatar_size + 'px',
        height: avatar_size + 'px'
      }
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '10px'
      }
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_email ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Email Address"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].email)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_level ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Level"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].level)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_startdate ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Start Date"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].startdate)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: link ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-directory-view-profile"
    }, "View Profile \u2192"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide',
      id: "",
      style: {
        width: avatar_size + 'px',
        height: avatar_size + 'px'
      }
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_email ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Email Address"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].email)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_level ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Level"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].level)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_startdate ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Start Date"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].startdate)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: link ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-directory-view-profile"
    }, "View Profile \u2192"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide',
      id: "",
      style: {
        width: avatar_size + 'px',
        height: avatar_size + 'px'
      }
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_email ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Email Address"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].email)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_level ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Level"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].level)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_startdate ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Start Date"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].startdate)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: link ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-directory-view-profile"
    }, "View Profile \u2192"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide',
      id: "",
      style: {
        width: avatar_size + 'px',
        height: avatar_size + 'px'
      }
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][3].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][3].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_email ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Email Address"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][3].email)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_level ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Level"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][3].level)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_startdate ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Start Date"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][3].startdate)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: link ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-directory-view-profile"
    }, "View Profile \u2192"))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Col4);

/***/ }),

/***/ "./blocks/assets/components/templates/div.js":
/*!***************************************************!*\
  !*** ./blocks/assets/components/templates/div.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/extra-fields/extra-fields */ "./blocks/assets/components/extra-fields/extra-fields.js");
/* harmony import */ var _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dummy-data/dummy-data */ "./blocks/assets/components/dummy-data/dummy-data.js");




const {
  __
} = wp.i18n;
class DivLayout extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    const {
      attributes: {
        show_avatar,
        avatar_size,
        fields,
        levels,
        show_email,
        show_level,
        show_startdate,
        layout,
        link
      }
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide',
      id: "",
      style: {
        width: avatar_size + 'px',
        height: avatar_size + 'px',
        display: 'inline-block',
        float: 'right'
      }
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_email ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Email Address"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].email)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_level ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Level"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].level)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_startdate ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-subheading"
    }, "Start Date"), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-profile-content"
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].startdate)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields,
      type: "profile"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: link ? 'pmpro-member-profile-wrapper' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "pmpro-member-directory-view-profile"
    }, "View Profile \u2192")));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (DivLayout);

/***/ }),

/***/ "./blocks/assets/components/templates/table.js":
/*!*****************************************************!*\
  !*** ./blocks/assets/components/templates/table.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/extra-fields/extra-fields */ "./blocks/assets/components/extra-fields/extra-fields.js");
/* harmony import */ var _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dummy-data/dummy-data */ "./blocks/assets/components/dummy-data/dummy-data.js");




const {
  __
} = wp.i18n;
class TableLayout extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    const {
      attributes: {
        show_avatar,
        avatar_size,
        fields,
        levels,
        show_email,
        show_level,
        show_startdate,
        layout,
        link
      }
    } = this.props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "pmpro-table",
      style: {
        width: '100%',
        border: '1px solid black'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: show_avatar ? '' : 'hidden'
    }, __('Avatar', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, __('Member', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: show_email ? '' : 'hidden'
    }, __('Email Address', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: fields ? '' : 'hidden'
    }, __('More Information', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: show_level ? '' : 'hidden'
    }, __('Level', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: show_startdate ? '' : 'hidden'
    }, __('Start Date', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
      className: link ? '' : 'hidden'
    }, "\xA0")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_email ? '' : 'hidden'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].email), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: fields ? '' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_level ? '' : 'hidden'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].level), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_startdate ? '' : 'hidden'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][0].startdate), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: link ? '' : 'hidden'
    }, __('View Profile', 'pmpro-member-directory'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_email ? '' : 'hidden'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].email), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: fields ? '' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_level ? '' : 'hidden'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].level), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_startdate ? '' : 'hidden'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][1].startdate), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: link ? '' : 'hidden'
    }, __('View Profile', 'pmpro-member-directory'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_email ? '' : 'hidden'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].email), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: fields ? '' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_level ? '' : 'hidden'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].level), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_startdate ? '' : 'hidden'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][2].startdate), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: link ? '' : 'hidden'
    }, __('View Profile', 'pmpro-member-directory'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_avatar ? 'pmpro-member-directory-icon' : 'pmpro-member-directory-hide'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][3].icon), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][3].name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_email ? '' : 'hidden'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][3].email), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: fields ? '' : 'hidden'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_extra_fields_extra_fields__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fields: fields
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_level ? '' : 'hidden'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][3].level), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: show_startdate ? '' : 'hidden'
    }, _components_dummy_data_dummy_data__WEBPACK_IMPORTED_MODULE_3__["default"][3].startdate), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: link ? '' : 'hidden'
    }, __('View Profile', 'pmpro-member-directory')))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (TableLayout);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/*!***************************************!*\
  !*** ./blocks/src/directory/block.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_components_templates_div_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/components/templates/div.js */ "./blocks/assets/components/templates/div.js");
/* harmony import */ var _assets_components_templates_table_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/components/templates/table.js */ "./blocks/assets/components/templates/table.js");
/* harmony import */ var _assets_components_templates_2col_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/components/templates/2col.js */ "./blocks/assets/components/templates/2col.js");
/* harmony import */ var _assets_components_templates_3col_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/components/templates/3col.js */ "./blocks/assets/components/templates/3col.js");
/* harmony import */ var _assets_components_templates_4col_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/components/templates/4col.js */ "./blocks/assets/components/templates/4col.js");






const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  PanelBody,
  SelectControl,
  TextControl,
  TextareaControl,
  CheckboxControl
} = wp.components;
const {
  InspectorControls
} = wp.editor;
const all_levels = pmpro.all_level_values_and_labels;
/* harmony default export */ __webpack_exports__["default"] = (registerBlockType('pmpro-member-directory/directory', {
  title: __('Members Directory', 'pmpro-member-directory'),
  description: __('Display a directory of members.', 'pmpro-member-directory'),
  category: 'pmpro',
  icon: {
    background: '#2997c8',
    foreground: '#ffffff',
    src: 'groups'
  },
  keywords: [__('Membership', 'jsforwpblocks'), __('User', 'jsforwpblocks'), __('Member Directory', 'jsforwpblocks')],
  attributes: {
    avatar_size: {
      type: 'string',
      default: '128'
    },
    fields: {
      type: 'string',
      default: ''
    },
    levels: {
      type: 'array',
      default: ''
    },
    show_avatar: {
      type: 'boolean',
      default: true
    },
    show_email: {
      type: 'boolean',
      default: true
    },
    show_level: {
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
    layout: {
      type: 'string'
    },
    limit: {
      type: 'string'
    },
    link: {
      type: 'boolean',
      default: true
    },
    order: {
      type: 'string',
      default: 'ASC'
    },
    order_by: {
      type: 'string',
      default: 'u.display_name'
    }
  },
  edit: props => {
    const {
      attributes: {
        show_avatar,
        avatar_size,
        fields,
        levels,
        show_email,
        show_level,
        show_search,
        show_startdate,
        layout,
        limit,
        link,
        order,
        order_by
      },
      className,
      isSelected,
      setAttributes
    } = props;
    function show_layout_selected() {
      const layout_return = [];
      if (layout == 'div') {
        layout_return.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_templates_div_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
          attributes: props.attributes
        }));
      } else if (layout == 'table') {
        layout_return.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_templates_table_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
          attributes: props.attributes
        }));
      } else if (layout == '2col') {
        layout_return.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_templates_2col_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attributes: props.attributes
        }));
      } else if (layout == '3col') {
        layout_return.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_templates_3col_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
          attributes: props.attributes
        }));
      } else if (layout == '4col') {
        layout_return.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_templates_4col_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          attributes: props.attributes
        }));
      } else {
        layout_return.push((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_components_templates_div_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
          attributes: props.attributes
        }));
      }
      return layout_return;
    }
    function show_levels_selected() {
      if (!levels.length) {
        return null;
      }
      return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "pmpro-member-profile-levels",
        style: {
          fontSize: '12px'
        }
      }, __('Levels Selected: ', 'pmpro-member-directory') + levels), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)];
    }
    return [isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Display Options', 'pmpro-member-directory')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      multiple: true,
      label: __('Select levels', 'pmpro-member-directory'),
      help: __('List of level IDs that allow profiles. Default: All', 'pmpro-member-directory'),
      value: levels,
      onChange: levels => {
        setAttributes({
          levels
        });
      },
      options: all_levels,
      id: "pmpro_member_directory_levels_select"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Layout",
      value: layout,
      onChange: layout => {
        setAttributes({
          layout
        });
      },
      options: [{
        label: __('div', 'pmpro-member-directory'),
        value: 'div'
      }, {
        label: __('table', 'pmpro-member-directory'),
        value: 'table'
      }, {
        label: __('2col', 'pmpro-member-directory'),
        value: '2col'
      }, {
        label: __('3col', 'pmpro-member-directory'),
        value: '3col'
      }, {
        label: __('4col', 'pmpro-member-directory'),
        value: '4col'
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
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
      label: "Show Level",
      checked: show_level,
      onChange: show_level => {
        setAttributes({
          show_level
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
      label: "Show Start Date",
      checked: show_startdate,
      onChange: show_startdate => {
        setAttributes({
          show_startdate
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Show Link",
      checked: link,
      onChange: link => {
        setAttributes({
          link
        });
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Extra Fields', 'pmpro-member-directory')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
      label: "Fields",
      value: fields,
      onChange: fields => {
        setAttributes({
          fields
        });
      },
      help: "Accepts a list of label names and metakeys per line. Label,meta_key"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Filtering Options', 'pmpro-member-directory')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Order By",
      value: order_by,
      onChange: order_by => {
        setAttributes({
          order_by
        });
      },
      options: [{
        label: __('Display Name', 'pmpro-member-directory'),
        value: 'u.display_name'
      }, {
        label: __('User Email', 'pmpro-member-directory'),
        value: 'u.user_email'
      }, {
        label: __('User Login', 'pmpro-member-directory'),
        value: 'u.user_login'
      }, {
        label: __('User Registered', 'pmpro-member-directory'),
        value: 'u.user_registered'
      }, {
        label: __('Membership Level', 'pmpro-member-directory'),
        value: 'mu.membership_id'
      }, {
        label: __('Membership Start Date', 'pmpro-member-directory'),
        value: 'mu.startdate'
      }, {
        label: __('Join Date', 'pmpro-member-directory'),
        value: 'joindate`'
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "Order",
      value: order,
      onChange: order => {
        setAttributes({
          order
        });
      },
      options: [{
        label: __('ASC', 'pmpro-member-directory'),
        value: 'ASC'
      }, {
        label: __('DESC', 'pmpro-member-directory'),
        value: 'DESC'
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: "Limit",
      value: limit,
      onChange: limit => {
        setAttributes({
          limit
        });
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className,
      style: {
        fontFamily: 'arial',
        fontSize: '14px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pmpro-member-directory-title",
      style: {
        marginBottom: '2%'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      style: {
        fontSize: '30px',
        fontWeight: 'bold'
      }
    }, __('Membership Directory', 'pmpro-member-directory')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: show_search ? '' : 'pmpro-member-directory-hide',
      id: "pmpro-member-profile-search",
      style: {
        float: 'right'
      }
    }, "Search Members"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), show_levels_selected()), show_layout_selected(), isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", {
      style: {
        color: 'red'
      }
    }, " ", __('Example data for reference purposes only. Any resemblance to actual persons, living or dead is purely coincidental.', 'pmpro-member-directory'))))];
  },
  save: props => {
    return null;
  }
}));
}();
/******/ })()
;
//# sourceMappingURL=block.js.map
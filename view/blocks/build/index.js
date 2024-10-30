/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);








const agentImage = __webpack_require__(/*! ./images/user.jpg */ "./src/images/user.jpg");
const {
  SelectControl,
  TextControl
} = wp.components;
const timezones = [{
  value: 'Africa/Abidjan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Abidjan', 'better-chat-support')
}, {
  value: 'Africa/Accra',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Accra', 'better-chat-support')
}, {
  value: 'Africa/Addis_Ababa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Addis_Ababa', 'better-chat-support')
}, {
  value: 'Africa/Algiers',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Algiers', 'better-chat-support')
}, {
  value: 'Africa/Asmara',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Asmara', 'better-chat-support')
}, {
  value: 'Africa/Asmera',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Asmera', 'better-chat-support')
}, {
  value: 'Africa/Bamako',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bamako', 'better-chat-support')
}, {
  value: 'Africa/Bangui',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bangui', 'better-chat-support')
}, {
  value: 'Africa/Banjul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Banjul', 'better-chat-support')
}, {
  value: 'Africa/Bissau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bissau', 'better-chat-support')
}, {
  value: 'Africa/Blantyre',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Blantyre', 'better-chat-support')
}, {
  value: 'Africa/Brazzaville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Brazzaville', 'better-chat-support')
}, {
  value: 'Africa/Bujumbura',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Bujumbura', 'better-chat-support')
}, {
  value: 'Africa/Cairo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Cairo', 'better-chat-support')
}, {
  value: 'Africa/Casablanca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Casablanca', 'better-chat-support')
}, {
  value: 'Africa/Ceuta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Ceuta', 'better-chat-support')
}, {
  value: 'Africa/Conakry',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Conakry', 'better-chat-support')
}, {
  value: 'Africa/Dakar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Dakar', 'better-chat-support')
}, {
  value: 'Africa/Dar_es_Salaam',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Dar_es_Salaam', 'better-chat-support')
}, {
  value: 'Africa/Djibouti',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Djibouti', 'better-chat-support')
}, {
  value: 'Africa/Douala',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Douala', 'better-chat-support')
}, {
  value: 'Africa/El_Aaiun',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/El_Aaiun', 'better-chat-support')
}, {
  value: 'Africa/Freetown',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Freetown', 'better-chat-support')
}, {
  value: 'Africa/Gaborone',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Gaborone', 'better-chat-support')
}, {
  value: 'Africa/Harare',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Harare', 'better-chat-support')
}, {
  value: 'Africa/Johannesburg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Johannesburg', 'better-chat-support')
}, {
  value: 'Africa/Juba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Juba', 'better-chat-support')
}, {
  value: 'Africa/Kampala',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Kampala', 'better-chat-support')
}, {
  value: 'Africa/Khartoum',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Khartoum', 'better-chat-support')
}, {
  value: 'Africa/Kigali',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Kigali', 'better-chat-support')
}, {
  value: 'Africa/Kinshasa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Kinshasa', 'better-chat-support')
}, {
  value: 'Africa/Lagos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lagos', 'better-chat-support')
}, {
  value: 'Africa/Libreville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Libreville', 'better-chat-support')
}, {
  value: 'Africa/Lome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lome', 'better-chat-support')
}, {
  value: 'Africa/Luanda',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Luanda', 'better-chat-support')
}, {
  value: 'Africa/Lubumbashi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lubumbashi', 'better-chat-support')
}, {
  value: 'Africa/Lusaka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Lusaka', 'better-chat-support')
}, {
  value: 'Africa/Malabo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Malabo', 'better-chat-support')
}, {
  value: 'Africa/Maputo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Maputo', 'better-chat-support')
}, {
  value: 'Africa/Maseru',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Maseru', 'better-chat-support')
}, {
  value: 'Africa/Mbabane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Mbabane', 'better-chat-support')
}, {
  value: 'Africa/Mogadishu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Mogadishu', 'better-chat-support')
}, {
  value: 'Africa/Monrovia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Monrovia', 'better-chat-support')
}, {
  value: 'Africa/Nairobi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Nairobi', 'better-chat-support')
}, {
  value: 'Africa/Ndjamena',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Ndjamena', 'better-chat-support')
}, {
  value: 'Africa/Niamey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Niamey', 'better-chat-support')
}, {
  value: 'Africa/Nouakchott',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Nouakchott', 'better-chat-support')
}, {
  value: 'Africa/Ouagadougou',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Ouagadougou', 'better-chat-support')
}, {
  value: 'Africa/Porto-Novo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Porto-Novo', 'better-chat-support')
}, {
  value: 'Africa/Sao_Tome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Sao_Tome', 'better-chat-support')
}, {
  value: 'Africa/Timbuktu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Timbuktu', 'better-chat-support')
}, {
  value: 'Africa/Tripoli',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Tripoli', 'better-chat-support')
}, {
  value: 'Africa/Tunis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Tunis', 'better-chat-support')
}, {
  value: 'Africa/Windhoek',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Africa/Windhoek', 'better-chat-support')
}, {
  value: 'America/Adak',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Adak', 'better-chat-support')
}, {
  value: 'America/Anchorage',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Anchorage', 'better-chat-support')
}, {
  value: 'America/Anguilla',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Anguilla', 'better-chat-support')
}, {
  value: 'America/Antigua',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Antigua', 'better-chat-support')
}, {
  value: 'America/Araguaina',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Araguaina', 'better-chat-support')
}, {
  value: 'America/Argentina/Buenos_Aires',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Buenos_Aires', 'better-chat-support')
}, {
  value: 'America/Argentina/Catamarca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Catamarca', 'better-chat-support')
}, {
  value: 'America/Argentina/ComodRivadavia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/ComodRivadavia', 'better-chat-support')
}, {
  value: 'America/Argentina/Cordoba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Cordoba', 'better-chat-support')
}, {
  value: 'America/Argentina/Jujuy',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Jujuy', 'better-chat-support')
}, {
  value: 'America/Argentina/La_Rioja',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/La_Rioja', 'better-chat-support')
}, {
  value: 'America/Argentina/Mendoza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Mendoza', 'better-chat-support')
}, {
  value: 'America/Argentina/Rio_Gallegos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Rio_Gallegos', 'better-chat-support')
}, {
  value: 'America/Argentina/Salta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Salta', 'better-chat-support')
}, {
  value: 'America/Argentina/San_Juan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/San_Juan', 'better-chat-support')
}, {
  value: 'America/Argentina/San_Luis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/San_Luis', 'better-chat-support')
}, {
  value: 'America/Argentina/Tucuman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Tucuman', 'better-chat-support')
}, {
  value: 'America/Argentina/Ushuaia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Argentina/Ushuaia', 'better-chat-support')
}, {
  value: 'America/Aruba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Aruba', 'better-chat-support')
}, {
  value: 'America/Asuncion',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Asuncion', 'better-chat-support')
}, {
  value: 'America/Atikokan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Atikokan', 'better-chat-support')
}, {
  value: 'America/Atka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Atka', 'better-chat-support')
}, {
  value: 'America/Bahia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Bahia', 'better-chat-support')
}, {
  value: 'America/Bahia_Banderas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Bahia_Banderas', 'better-chat-support')
}, {
  value: 'America/Barbados',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Barbados', 'better-chat-support')
}, {
  value: 'America/Belem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Belem', 'better-chat-support')
}, {
  value: 'America/Belize',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Belize', 'better-chat-support')
}, {
  value: 'America/Blanc-Sablon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Blanc-Sablon', 'better-chat-support')
}, {
  value: 'America/Boa_Vista',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Boa_Vista', 'better-chat-support')
}, {
  value: 'America/Bogota',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Bogota', 'better-chat-support')
}, {
  value: 'America/Boise',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Boise', 'better-chat-support')
}, {
  value: 'America/Buenos_Aires',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Buenos_Aires', 'better-chat-support')
}, {
  value: 'America/Cambridge_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cambridge_Bay', 'better-chat-support')
}, {
  value: 'America/Campo_Grande',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Campo_Grande', 'better-chat-support')
}, {
  value: 'America/Cancun',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cancun', 'better-chat-support')
}, {
  value: 'America/Caracas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Caracas', 'better-chat-support')
}, {
  value: 'America/Catamarca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Catamarca', 'better-chat-support')
}, {
  value: 'America/Cayenne',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cayenne', 'better-chat-support')
}, {
  value: 'America/Cayman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cayman', 'better-chat-support')
}, {
  value: 'America/Chicago',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Chicago', 'better-chat-support')
}, {
  value: 'America/Chihuahua',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Chihuahua', 'better-chat-support')
}, {
  value: 'America/Coral_Harbour',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Coral_Harbour', 'better-chat-support')
}, {
  value: 'America/Cordoba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cordoba', 'better-chat-support')
}, {
  value: 'America/Costa_Rica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Costa_Rica', 'better-chat-support')
}, {
  value: 'America/Creston',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Creston', 'better-chat-support')
}, {
  value: 'America/Cuiaba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Cuiaba', 'better-chat-support')
}, {
  value: 'America/Curacao',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Curacao', 'better-chat-support')
}, {
  value: 'America/Danmarkshavn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Danmarkshavn', 'better-chat-support')
}, {
  value: 'America/Dawson',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Dawson', 'better-chat-support')
}, {
  value: 'America/Dawson_Creek',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Dawson_Creek', 'better-chat-support')
}, {
  value: 'America/Denver',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Denver', 'better-chat-support')
}, {
  value: 'America/Detroit',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Detroit', 'better-chat-support')
}, {
  value: 'America/Dominica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Dominica', 'better-chat-support')
}, {
  value: 'America/Edmonton',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Edmonton', 'better-chat-support')
}, {
  value: 'America/Eirunepe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Eirunepe', 'better-chat-support')
}, {
  value: 'America/El_Salvador',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/El_Salvador', 'better-chat-support')
}, {
  value: 'America/Ensenada',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Ensenada', 'better-chat-support')
}, {
  value: 'America/Fort_Nelson',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Fort_Nelson', 'better-chat-support')
}, {
  value: 'America/Fort_Wayne',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Fort_Wayne', 'better-chat-support')
}, {
  value: 'America/Fortaleza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Fortaleza', 'better-chat-support')
}, {
  value: 'America/Glace_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Glace_Bay', 'better-chat-support')
}, {
  value: 'America/Godthab',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Godthab', 'better-chat-support')
}, {
  value: 'America/Goose_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Goose_Bay', 'better-chat-support')
}, {
  value: 'America/Grand_Turk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Grand_Turk', 'better-chat-support')
}, {
  value: 'America/Grenada',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Grenada', 'better-chat-support')
}, {
  value: 'America/Guadeloupe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guadeloupe', 'better-chat-support')
}, {
  value: 'America/Guatemala',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guatemala', 'better-chat-support')
}, {
  value: 'America/Guayaquil',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guayaquil', 'better-chat-support')
}, {
  value: 'America/Guyana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Guyana', 'better-chat-support')
}, {
  value: 'America/Halifax',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Halifax', 'better-chat-support')
}, {
  value: 'America/Havana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Havana', 'better-chat-support')
}, {
  value: 'America/Hermosillo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Hermosillo', 'better-chat-support')
}, {
  value: 'America/Indiana/Indianapolis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Indianapolis', 'better-chat-support')
}, {
  value: 'America/Indiana/Knox',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Knox', 'better-chat-support')
}, {
  value: 'America/Indiana/Marengo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Marengo', 'better-chat-support')
}, {
  value: 'America/Indiana/Petersburg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Petersburg', 'better-chat-support')
}, {
  value: 'America/Indiana/Tell_City',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Tell_City', 'better-chat-support')
}, {
  value: 'America/Indiana/Vevay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Vevay', 'better-chat-support')
}, {
  value: 'America/Indiana/Vincennes',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Vincennes', 'better-chat-support')
}, {
  value: 'America/Indiana/Winamac',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indiana/Winamac', 'better-chat-support')
}, {
  value: 'America/Indianapolis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Indianapolis', 'better-chat-support')
}, {
  value: 'America/Inuvik',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Inuvik', 'better-chat-support')
}, {
  value: 'America/Iqaluit',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Iqaluit', 'better-chat-support')
}, {
  value: 'America/Jamaica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Jamaica', 'better-chat-support')
}, {
  value: 'America/Jujuy',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Jujuy', 'better-chat-support')
}, {
  value: 'America/Juneau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Juneau', 'better-chat-support')
}, {
  value: 'America/Kentucky/Louisville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Kentucky/Louisville', 'better-chat-support')
}, {
  value: 'America/Kentucky/Monticello',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Kentucky/Monticello', 'better-chat-support')
}, {
  value: 'America/Knox_IN',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Knox_IN', 'better-chat-support')
}, {
  value: 'America/Kralendijk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Kralendijk', 'better-chat-support')
}, {
  value: 'America/La_Paz',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/La_Paz', 'better-chat-support')
}, {
  value: 'America/Lima',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Lima', 'better-chat-support')
}, {
  value: 'America/Los_Angeles',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Los_Angeles', 'better-chat-support')
}, {
  value: 'America/Louisville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Louisville', 'better-chat-support')
}, {
  value: 'America/Lower_Princes',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Lower_Princes', 'better-chat-support')
}, {
  value: 'America/Maceio',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Maceio', 'better-chat-support')
}, {
  value: 'America/Managua',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Managua', 'better-chat-support')
}, {
  value: 'America/Manaus',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Manaus', 'better-chat-support')
}, {
  value: 'America/Marigot',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Marigot', 'better-chat-support')
}, {
  value: 'America/Martinique',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Martinique', 'better-chat-support')
}, {
  value: 'America/Matamoros',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Matamoros', 'better-chat-support')
}, {
  value: 'America/Mazatlan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Mazatlan', 'better-chat-support')
}, {
  value: 'America/Mendoza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Mendoza', 'better-chat-support')
}, {
  value: 'America/Menominee',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Menominee', 'better-chat-support')
}, {
  value: 'America/Merida',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Merida', 'better-chat-support')
}, {
  value: 'America/Metlakatla',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Metlakatla', 'better-chat-support')
}, {
  value: 'America/Mexico_City',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Mexico_City', 'better-chat-support')
}, {
  value: 'America/Miquelon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Miquelon', 'better-chat-support')
}, {
  value: 'America/Moncton',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Moncton', 'better-chat-support')
}, {
  value: 'America/Monterrey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Monterrey', 'better-chat-support')
}, {
  value: 'America/Montevideo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Montevideo', 'better-chat-support')
}, {
  value: 'America/Montreal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Montreal', 'better-chat-support')
}, {
  value: 'America/Montserrat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Montserrat', 'better-chat-support')
}, {
  value: 'America/Nassau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Nassau', 'better-chat-support')
}, {
  value: 'America/New_York',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/New_York', 'better-chat-support')
}, {
  value: 'America/Nipigon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Nipigon', 'better-chat-support')
}, {
  value: 'America/Nome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Nome', 'better-chat-support')
}, {
  value: 'America/Noronha',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Noronha', 'better-chat-support')
}, {
  value: 'America/North_Dakota/Beulah',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/North_Dakota/Beulah', 'better-chat-support')
}, {
  value: 'America/North_Dakota/Center',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/North_Dakota/Center', 'better-chat-support')
}, {
  value: 'America/North_Dakota/New_Salem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/North_Dakota/New_Salem', 'better-chat-support')
}, {
  value: 'America/Ojinaga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Ojinaga', 'better-chat-support')
}, {
  value: 'America/Panama',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Panama', 'better-chat-support')
}, {
  value: 'America/Pangnirtung',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Pangnirtung', 'better-chat-support')
}, {
  value: 'America/Paramaribo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Paramaribo', 'better-chat-support')
}, {
  value: 'America/Phoenix',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Phoenix', 'better-chat-support')
}, {
  value: 'America/Port-au-Prince',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Port-au-Prince', 'better-chat-support')
}, {
  value: 'America/Port_of_Spain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Port_of_Spain', 'better-chat-support')
}, {
  value: 'America/Porto_Acre',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Porto_Acre', 'better-chat-support')
}, {
  value: 'America/Porto_Velho',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Porto_Velho', 'better-chat-support')
}, {
  value: 'America/Puerto_Rico',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Puerto_Rico', 'better-chat-support')
}, {
  value: 'America/Punta_Arenas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Punta_Arenas', 'better-chat-support')
}, {
  value: 'America/Rainy_River',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rainy_River', 'better-chat-support')
}, {
  value: 'America/Rankin_Inlet',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rankin_Inlet', 'better-chat-support')
}, {
  value: 'America/Recife',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Recife', 'better-chat-support')
}, {
  value: 'America/Regina',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Regina', 'better-chat-support')
}, {
  value: 'America/Resolute',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Resolute', 'better-chat-support')
}, {
  value: 'America/Rio_Branco',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rio_Branco', 'better-chat-support')
}, {
  value: 'America/Rosario',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Rosario', 'better-chat-support')
}, {
  value: 'America/Santa_Isabel',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santa_Isabel', 'better-chat-support')
}, {
  value: 'America/Santarem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santarem', 'better-chat-support')
}, {
  value: 'America/Santiago',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santiago', 'better-chat-support')
}, {
  value: 'America/Santo_Domingo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Santo_Domingo', 'better-chat-support')
}, {
  value: 'America/Sao_Paulo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Sao_Paulo', 'better-chat-support')
}, {
  value: 'America/Scoresbysund',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Scoresbysund', 'better-chat-support')
}, {
  value: 'America/Shiprock',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Shiprock', 'better-chat-support')
}, {
  value: 'America/Sitka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Sitka', 'better-chat-support')
}, {
  value: 'America/St_Barthelemy',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Barthelemy', 'better-chat-support')
}, {
  value: 'America/St_Johns',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Johns', 'better-chat-support')
}, {
  value: 'America/St_Kitts',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Kitts', 'better-chat-support')
}, {
  value: 'America/St_Lucia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Lucia', 'better-chat-support')
}, {
  value: 'America/St_Thomas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Thomas', 'better-chat-support')
}, {
  value: 'America/St_Vincent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/St_Vincent', 'better-chat-support')
}, {
  value: 'America/Swift_Current',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Swift_Current', 'better-chat-support')
}, {
  value: 'America/Tegucigalpa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Tegucigalpa', 'better-chat-support')
}, {
  value: 'America/Thule',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Thule', 'better-chat-support')
}, {
  value: 'America/Thunder_Bay',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Thunder_Bay', 'better-chat-support')
}, {
  value: 'America/Tijuana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Tijuana', 'better-chat-support')
}, {
  value: 'America/Toronto',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Toronto', 'better-chat-support')
}, {
  value: 'America/Tortola',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Tortola', 'better-chat-support')
}, {
  value: 'America/Vancouver',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Vancouver', 'better-chat-support')
}, {
  value: 'America/Virgin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Virgin', 'better-chat-support')
}, {
  value: 'America/Whitehorse',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Whitehorse', 'better-chat-support')
}, {
  value: 'America/Winnipeg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Winnipeg', 'better-chat-support')
}, {
  value: 'America/Yakutat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Yakutat', 'better-chat-support')
}, {
  value: 'America/Yellowknife',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('America/Yellowknife', 'better-chat-support')
}, {
  value: 'Antarctica/Casey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Casey', 'better-chat-support')
}, {
  value: 'Antarctica/Davis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Davis', 'better-chat-support')
}, {
  value: 'Antarctica/DumontDUrville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/DumontDUrville', 'better-chat-support')
}, {
  value: 'Antarctica/Macquarie',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Macquarie', 'better-chat-support')
}, {
  value: 'Antarctica/Mawson',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Mawson', 'better-chat-support')
}, {
  value: 'Antarctica/McMurdo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/McMurdo', 'better-chat-support')
}, {
  value: 'Antarctica/Palmer',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Palmer', 'better-chat-support')
}, {
  value: 'Antarctica/Rothera',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Rothera', 'better-chat-support')
}, {
  value: 'Antarctica/South_Pole',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/South_Pole', 'better-chat-support')
}, {
  value: 'Antarctica/Syowa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Syowa', 'better-chat-support')
}, {
  value: 'Antarctica/Troll',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Troll', 'better-chat-support')
}, {
  value: 'Antarctica/Vostok',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Antarctica/Vostok', 'better-chat-support')
}, {
  value: 'Arctic/Longyearbyen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Arctic/Longyearbyen', 'better-chat-support')
}, {
  value: 'Asia/Aden',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Aden', 'better-chat-support')
}, {
  value: 'Asia/Almaty',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Almaty', 'better-chat-support')
}, {
  value: 'Asia/Amman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Amman', 'better-chat-support')
}, {
  value: 'Asia/Anadyr',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Anadyr', 'better-chat-support')
}, {
  value: 'Asia/Aqtau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Aqtau', 'better-chat-support')
}, {
  value: 'Asia/Aqtobe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Aqtobe', 'better-chat-support')
}, {
  value: 'Asia/Ashgabat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ashgabat', 'better-chat-support')
}, {
  value: 'Asia/Ashkhabad',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ashkhabad', 'better-chat-support')
}, {
  value: 'Asia/Atyrau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Atyrau', 'better-chat-support')
}, {
  value: 'Asia/Baghdad',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Baghdad', 'better-chat-support')
}, {
  value: 'Asia/Bahrain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Bahrain', 'better-chat-support')
}, {
  value: 'Asia/Baku',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Baku', 'better-chat-support')
}, {
  value: 'Asia/Bangkok',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Bangkok', 'better-chat-support')
}, {
  value: 'Asia/Barnaul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Barnaul', 'better-chat-support')
}, {
  value: 'Asia/Beirut',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Beirut', 'better-chat-support')
}, {
  value: 'Asia/Bishkek',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Bishkek', 'better-chat-support')
}, {
  value: 'Asia/Brunei',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Brunei', 'better-chat-support')
}, {
  value: 'Asia/Calcutta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Calcutta', 'better-chat-support')
}, {
  value: 'Asia/Chita',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Chita', 'better-chat-support')
}, {
  value: 'Asia/Choibalsan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Choibalsan', 'better-chat-support')
}, {
  value: 'Asia/Chongqing',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Chongqing', 'better-chat-support')
}, {
  value: 'Asia/Chungking',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Chungking', 'better-chat-support')
}, {
  value: 'Asia/Colombo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Colombo', 'better-chat-support')
}, {
  value: 'Asia/Dacca',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dacca', 'better-chat-support')
}, {
  value: 'Asia/Damascus',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Damascus', 'better-chat-support')
}, {
  value: 'Asia/Dhaka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dhaka', 'better-chat-support')
}, {
  value: 'Asia/Dili',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dili', 'better-chat-support')
}, {
  value: 'Asia/Dubai',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dubai', 'better-chat-support')
}, {
  value: 'Asia/Dushanbe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Dushanbe', 'better-chat-support')
}, {
  value: 'Asia/Famagusta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Famagusta', 'better-chat-support')
}, {
  value: 'Asia/Gaza',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Gaza', 'better-chat-support')
}, {
  value: 'Asia/Harbin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Harbin', 'better-chat-support')
}, {
  value: 'Asia/Hebron',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Hebron', 'better-chat-support')
}, {
  value: 'Asia/Ho_Chi_Minh',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ho_Chi_Minh', 'better-chat-support')
}, {
  value: 'Asia/Hong_Kong',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Hong_Kong', 'better-chat-support')
}, {
  value: 'Asia/Hovd',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Hovd', 'better-chat-support')
}, {
  value: 'Asia/Irkutsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Irkutsk', 'better-chat-support')
}, {
  value: 'Asia/Istanbul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Istanbul', 'better-chat-support')
}, {
  value: 'Asia/Jakarta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Jakarta', 'better-chat-support')
}, {
  value: 'Asia/Jayapura',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Jayapura', 'better-chat-support')
}, {
  value: 'Asia/Jerusalem',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Jerusalem', 'better-chat-support')
}, {
  value: 'Asia/Kabul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kabul', 'better-chat-support')
}, {
  value: 'Asia/Kamchatka',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kamchatka', 'better-chat-support')
}, {
  value: 'Asia/Karachi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Karachi', 'better-chat-support')
}, {
  value: 'Asia/Kashgar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kashgar', 'better-chat-support')
}, {
  value: 'Asia/Kathmandu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kathmandu', 'better-chat-support')
}, {
  value: 'Asia/Katmandu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Katmandu', 'better-chat-support')
}, {
  value: 'Asia/Khandyga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Khandyga', 'better-chat-support')
}, {
  value: 'Asia/Kolkata',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kolkata', 'better-chat-support')
}, {
  value: 'Asia/Krasnoyarsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Krasnoyarsk', 'better-chat-support')
}, {
  value: 'Asia/Kuala_Lumpur',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kuala_Lumpur', 'better-chat-support')
}, {
  value: 'Asia/Kuching',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kuching', 'better-chat-support')
}, {
  value: 'Asia/Kuwait',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Kuwait', 'better-chat-support')
}, {
  value: 'Asia/Macao',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Macao', 'better-chat-support')
}, {
  value: 'Asia/Macau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Macau', 'better-chat-support')
}, {
  value: 'Asia/Magadan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Magadan', 'better-chat-support')
}, {
  value: 'Asia/Makassar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Makassar', 'better-chat-support')
}, {
  value: 'Asia/Manila',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Manila', 'better-chat-support')
}, {
  value: 'Asia/Muscat',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Muscat', 'better-chat-support')
}, {
  value: 'Asia/Nicosia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Nicosia', 'better-chat-support')
}, {
  value: 'Asia/Novokuznetsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Novokuznetsk', 'better-chat-support')
}, {
  value: 'Asia/Novosibirsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Novosibirsk', 'better-chat-support')
}, {
  value: 'Asia/Omsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Omsk', 'better-chat-support')
}, {
  value: 'Asia/Oral',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Oral', 'better-chat-support')
}, {
  value: 'Asia/Phnom_Penh',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Phnom_Penh', 'better-chat-support')
}, {
  value: 'Asia/Pontianak',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Pontianak', 'better-chat-support')
}, {
  value: 'Asia/Pyongyang',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Pyongyang', 'better-chat-support')
}, {
  value: 'Asia/Qatar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Qatar', 'better-chat-support')
}, {
  value: 'Asia/Qyzylorda',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Qyzylorda', 'better-chat-support')
}, {
  value: 'Asia/Rangoon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Rangoon', 'better-chat-support')
}, {
  value: 'Asia/Riyadh',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Riyadh', 'better-chat-support')
}, {
  value: 'Asia/Saigon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Saigon', 'better-chat-support')
}, {
  value: 'Asia/Sakhalin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Sakhalin', 'better-chat-support')
}, {
  value: 'Asia/Samarkand',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Samarkand', 'better-chat-support')
}, {
  value: 'Asia/Seoul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Seoul', 'better-chat-support')
}, {
  value: 'Asia/Shanghai',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Shanghai', 'better-chat-support')
}, {
  value: 'Asia/Singapore',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Singapore', 'better-chat-support')
}, {
  value: 'Asia/Srednekolymsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Srednekolymsk', 'better-chat-support')
}, {
  value: 'Asia/Taipei',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Taipei', 'better-chat-support')
}, {
  value: 'Asia/Tashkent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tashkent', 'better-chat-support')
}, {
  value: 'Asia/Tbilisi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tbilisi', 'better-chat-support')
}, {
  value: 'Asia/Tehran',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tehran', 'better-chat-support')
}, {
  value: 'Asia/Tel_Aviv',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tel_Aviv', 'better-chat-support')
}, {
  value: 'Asia/Thimbu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Thimbu', 'better-chat-support')
}, {
  value: 'Asia/Thimphu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Thimphu', 'better-chat-support')
}, {
  value: 'Asia/Tokyo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tokyo', 'better-chat-support')
}, {
  value: 'Asia/Tomsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Tomsk', 'better-chat-support')
}, {
  value: 'Asia/Ujung_Pandang',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ujung_Pandang', 'better-chat-support')
}, {
  value: 'Asia/Ulaanbaatar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ulaanbaatar', 'better-chat-support')
}, {
  value: 'Asia/Ulan_Bator',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ulan_Bator', 'better-chat-support')
}, {
  value: 'Asia/Urumqi',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Urumqi', 'better-chat-support')
}, {
  value: 'Asia/Ust-Nera',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Ust-Nera', 'better-chat-support')
}, {
  value: 'Asia/Vientiane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Vientiane', 'better-chat-support')
}, {
  value: 'Asia/Vladivostok',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Vladivostok', 'better-chat-support')
}, {
  value: 'Asia/Yakutsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yakutsk', 'better-chat-support')
}, {
  value: 'Asia/Yangon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yangon', 'better-chat-support')
}, {
  value: 'Asia/Yekaterinburg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yekaterinburg', 'better-chat-support')
}, {
  value: 'Asia/Yerevan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Asia/Yerevan', 'better-chat-support')
}, {
  value: 'Atlantic/Azores',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Azores', 'better-chat-support')
}, {
  value: 'Atlantic/Bermuda',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Bermuda', 'better-chat-support')
}, {
  value: 'Atlantic/Canary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Canary', 'better-chat-support')
}, {
  value: 'Atlantic/Cape_Verde',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Cape_Verde', 'better-chat-support')
}, {
  value: 'Atlantic/Faeroe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Faeroe', 'better-chat-support')
}, {
  value: 'Atlantic/Faroe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Faroe', 'better-chat-support')
}, {
  value: 'Atlantic/Jan_Mayen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Jan_Mayen', 'better-chat-support')
}, {
  value: 'Atlantic/Madeira',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Madeira', 'better-chat-support')
}, {
  value: 'Atlantic/Reykjavik',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Reykjavik', 'better-chat-support')
}, {
  value: 'Atlantic/South_Georgia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/South_Georgia', 'better-chat-support')
}, {
  value: 'Atlantic/St_Helena',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/St_Helena', 'better-chat-support')
}, {
  value: 'Atlantic/Stanley',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Atlantic/Stanley', 'better-chat-support')
}, {
  value: 'Australia/ACT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/ACT', 'better-chat-support')
}, {
  value: 'Australia/Adelaide',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Adelaide', 'better-chat-support')
}, {
  value: 'Australia/Brisbane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Brisbane', 'better-chat-support')
}, {
  value: 'Australia/Broken_Hill',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Broken_Hill', 'better-chat-support')
}, {
  value: 'Australia/Canberra',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Canberra', 'better-chat-support')
}, {
  value: 'Australia/Currie',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Currie', 'better-chat-support')
}, {
  value: 'Australia/Darwin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Darwin', 'better-chat-support')
}, {
  value: 'Australia/Eucla',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Eucla', 'better-chat-support')
}, {
  value: 'Australia/Hobart',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Hobart', 'better-chat-support')
}, {
  value: 'Australia/LHI',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/LHI', 'better-chat-support')
}, {
  value: 'Australia/Lindeman',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Lindeman', 'better-chat-support')
}, {
  value: 'Australia/Lord_Howe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Lord_Howe', 'better-chat-support')
}, {
  value: 'Australia/Melbourne',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Melbourne', 'better-chat-support')
}, {
  value: 'Australia/NSW',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/NSW', 'better-chat-support')
}, {
  value: 'Australia/North',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/North', 'better-chat-support')
}, {
  value: 'Australia/Perth',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Perth', 'better-chat-support')
}, {
  value: 'Australia/Queensland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Queensland', 'better-chat-support')
}, {
  value: 'Australia/South',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/South', 'better-chat-support')
}, {
  value: 'Australia/Sydney',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Sydney', 'better-chat-support')
}, {
  value: 'Australia/Tasmania',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Tasmania', 'better-chat-support')
}, {
  value: 'Australia/Victoria',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Victoria', 'better-chat-support')
}, {
  value: 'Australia/West',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/West', 'better-chat-support')
}, {
  value: 'Australia/Yancowinna',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Australia/Yancowinna', 'better-chat-support')
}, {
  value: 'Brazil/Acre',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/Acre', 'better-chat-support')
}, {
  value: 'Brazil/DeNoronha',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/DeNoronha', 'better-chat-support')
}, {
  value: 'Brazil/East',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/East', 'better-chat-support')
}, {
  value: 'Brazil/West',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazil/West', 'better-chat-support')
}, {
  value: 'CET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('CET', 'better-chat-support')
}, {
  value: 'CST6CDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('CST6CDT', 'better-chat-support')
}, {
  value: 'Canada/Atlantic',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Atlantic', 'better-chat-support')
}, {
  value: 'Canada/Central',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Central', 'better-chat-support')
}, {
  value: 'Canada/Eastern',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Eastern', 'better-chat-support')
}, {
  value: 'Canada/Mountain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Mountain', 'better-chat-support')
}, {
  value: 'Canada/Newfoundland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Newfoundland', 'better-chat-support')
}, {
  value: 'Canada/Pacific',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Pacific', 'better-chat-support')
}, {
  value: 'Canada/Saskatchewan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Saskatchewan', 'better-chat-support')
}, {
  value: 'Canada/Yukon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Canada/Yukon', 'better-chat-support')
}, {
  value: 'Chile/Continental',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chile/Continental', 'better-chat-support')
}, {
  value: 'Chile/EasterIsland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chile/EasterIsland', 'better-chat-support')
}, {
  value: 'Cuba',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cuba', 'better-chat-support')
}, {
  value: 'EET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('EET', 'better-chat-support')
}, {
  value: 'EST',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('EST', 'better-chat-support')
}, {
  value: 'EST5EDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('EST5EDT', 'better-chat-support')
}, {
  value: 'Egypt',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Egypt', 'better-chat-support')
}, {
  value: 'Eire',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Eire', 'better-chat-support')
}, {
  value: 'Etc/GMT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT', 'better-chat-support')
}, {
  value: 'Etc/GMT+0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+0', 'better-chat-support')
}, {
  value: 'Etc/GMT+1',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+1', 'better-chat-support')
}, {
  value: 'Etc/GMT+10',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+10', 'better-chat-support')
}, {
  value: 'Etc/GMT+11',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+11', 'better-chat-support')
}, {
  value: 'Etc/GMT+12',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+12', 'better-chat-support')
}, {
  value: 'Etc/GMT+2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+2', 'better-chat-support')
}, {
  value: 'Etc/GMT+3',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+3', 'better-chat-support')
}, {
  value: 'Etc/GMT+4',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+4', 'better-chat-support')
}, {
  value: 'Etc/GMT+5',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+5', 'better-chat-support')
}, {
  value: 'Etc/GMT+6',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+6', 'better-chat-support')
}, {
  value: 'Etc/GMT+7',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+7', 'better-chat-support')
}, {
  value: 'Etc/GMT+8',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+8', 'better-chat-support')
}, {
  value: 'Etc/GMT+9',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT+9', 'better-chat-support')
}, {
  value: 'Etc/GMT-0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-0', 'better-chat-support')
}, {
  value: 'Etc/GMT-1',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-1', 'better-chat-support')
}, {
  value: 'Etc/GMT-10',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-10', 'better-chat-support')
}, {
  value: 'Etc/GMT-11',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-11', 'better-chat-support')
}, {
  value: 'Etc/GMT-12',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-12', 'better-chat-support')
}, {
  value: 'Etc/GMT-13',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-13', 'better-chat-support')
}, {
  value: 'Etc/GMT-14',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-14', 'better-chat-support')
}, {
  value: 'Etc/GMT-2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-2', 'better-chat-support')
}, {
  value: 'Etc/GMT-3',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-3', 'better-chat-support')
}, {
  value: 'Etc/GMT-4',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-4', 'better-chat-support')
}, {
  value: 'Etc/GMT-5',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-5', 'better-chat-support')
}, {
  value: 'Etc/GMT-6',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-6', 'better-chat-support')
}, {
  value: 'Etc/GMT-7',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-7', 'better-chat-support')
}, {
  value: 'Etc/GMT-8',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-8', 'better-chat-support')
}, {
  value: 'Etc/GMT-9',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT-9', 'better-chat-support')
}, {
  value: 'Etc/GMT0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/GMT0', 'better-chat-support')
}, {
  value: 'Etc/Greenwich',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/Greenwich', 'better-chat-support')
}, {
  value: 'Etc/UCT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/UCT', 'better-chat-support')
}, {
  value: 'Etc/UTC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/UTC', 'better-chat-support')
}, {
  value: 'Etc/Universal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/Universal', 'better-chat-support')
}, {
  value: 'Etc/Zulu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Etc/Zulu', 'better-chat-support')
}, {
  value: 'Europe/Amsterdam',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Amsterdam', 'better-chat-support')
}, {
  value: 'Europe/Andorra',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Andorra', 'better-chat-support')
}, {
  value: 'Europe/Astrakhan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Astrakhan', 'better-chat-support')
}, {
  value: 'Europe/Athens',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Athens', 'better-chat-support')
}, {
  value: 'Europe/Belfast',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Belfast', 'better-chat-support')
}, {
  value: 'Europe/Belgrade',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Belgrade', 'better-chat-support')
}, {
  value: 'Europe/Berlin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Berlin', 'better-chat-support')
}, {
  value: 'Europe/Bratislava',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Bratislava', 'better-chat-support')
}, {
  value: 'Europe/Brussels',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Brussels', 'better-chat-support')
}, {
  value: 'Europe/Bucharest',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Bucharest', 'better-chat-support')
}, {
  value: 'Europe/Budapest',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Budapest', 'better-chat-support')
}, {
  value: 'Europe/Busingen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Busingen', 'better-chat-support')
}, {
  value: 'Europe/Chisinau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Chisinau', 'better-chat-support')
}, {
  value: 'Europe/Copenhagen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Copenhagen', 'better-chat-support')
}, {
  value: 'Europe/Dublin',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Dublin', 'better-chat-support')
}, {
  value: 'Europe/Gibraltar',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Gibraltar', 'better-chat-support')
}, {
  value: 'Europe/Guernsey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Guernsey', 'better-chat-support')
}, {
  value: 'Europe/Helsinki',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Helsinki', 'better-chat-support')
}, {
  value: 'Europe/Isle_of_Man',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Isle_of_Man', 'better-chat-support')
}, {
  value: 'Europe/Istanbul',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Istanbul', 'better-chat-support')
}, {
  value: 'Europe/Jersey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Jersey', 'better-chat-support')
}, {
  value: 'Europe/Kaliningrad',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Kaliningrad', 'better-chat-support')
}, {
  value: 'Europe/Kiev',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Kiev', 'better-chat-support')
}, {
  value: 'Europe/Kirov',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Kirov', 'better-chat-support')
}, {
  value: 'Europe/Lisbon',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Lisbon', 'better-chat-support')
}, {
  value: 'Europe/Ljubljana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Ljubljana', 'better-chat-support')
}, {
  value: 'Europe/London',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/London', 'better-chat-support')
}, {
  value: 'Europe/Luxembourg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Luxembourg', 'better-chat-support')
}, {
  value: 'Europe/Madrid',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Madrid', 'better-chat-support')
}, {
  value: 'Europe/Malta',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Malta', 'better-chat-support')
}, {
  value: 'Europe/Mariehamn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Mariehamn', 'better-chat-support')
}, {
  value: 'Europe/Minsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Minsk', 'better-chat-support')
}, {
  value: 'Europe/Monaco',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Monaco', 'better-chat-support')
}, {
  value: 'Europe/Moscow',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Moscow', 'better-chat-support')
}, {
  value: 'Europe/Nicosia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Nicosia', 'better-chat-support')
}, {
  value: 'Europe/Oslo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Oslo', 'better-chat-support')
}, {
  value: 'Europe/Paris',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Paris', 'better-chat-support')
}, {
  value: 'Europe/Podgorica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Podgorica', 'better-chat-support')
}, {
  value: 'Europe/Prague',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Prague', 'better-chat-support')
}, {
  value: 'Europe/Riga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Riga', 'better-chat-support')
}, {
  value: 'Europe/Rome',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Rome', 'better-chat-support')
}, {
  value: 'Europe/Samara',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Samara', 'better-chat-support')
}, {
  value: 'Europe/San_Marino',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/San_Marino', 'better-chat-support')
}, {
  value: 'Europe/Sarajevo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Sarajevo', 'better-chat-support')
}, {
  value: 'Europe/Saratov',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Saratov', 'better-chat-support')
}, {
  value: 'Europe/Simferopol',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Simferopol', 'better-chat-support')
}, {
  value: 'Europe/Skopje',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Skopje', 'better-chat-support')
}, {
  value: 'Europe/Sofia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Sofia', 'better-chat-support')
}, {
  value: 'Europe/Stockholm',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Stockholm', 'better-chat-support')
}, {
  value: 'Europe/Tallinn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Tallinn', 'better-chat-support')
}, {
  value: 'Europe/Tirane',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Tirane', 'better-chat-support')
}, {
  value: 'Europe/Tiraspol',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Tiraspol', 'better-chat-support')
}, {
  value: 'Europe/Ulyanovsk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Ulyanovsk', 'better-chat-support')
}, {
  value: 'Europe/Uzhgorod',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Uzhgorod', 'better-chat-support')
}, {
  value: 'Europe/Vaduz',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vaduz', 'better-chat-support')
}, {
  value: 'Europe/Vatican',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vatican', 'better-chat-support')
}, {
  value: 'Europe/Vienna',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vienna', 'better-chat-support')
}, {
  value: 'Europe/Vilnius',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Vilnius', 'better-chat-support')
}, {
  value: 'Europe/Volgograd',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Volgograd', 'better-chat-support')
}, {
  value: 'Europe/Warsaw',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Warsaw', 'better-chat-support')
}, {
  value: 'Europe/Zagreb',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Zagreb', 'better-chat-support')
}, {
  value: 'Europe/Zaporozhye',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Zaporozhye', 'better-chat-support')
}, {
  value: 'Europe/Zurich',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Europe/Zurich', 'better-chat-support')
}, {
  value: 'GB',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GB', 'better-chat-support')
}, {
  value: 'GB-Eire',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GB-Eire', 'better-chat-support')
}, {
  value: 'GMT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT', 'better-chat-support')
}, {
  value: 'GMT+0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT+0', 'better-chat-support')
}, {
  value: 'GMT-0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT-0', 'better-chat-support')
}, {
  value: 'GMT0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('GMT0', 'better-chat-support')
}, {
  value: 'Greenwich',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Greenwich', 'better-chat-support')
}, {
  value: 'HST',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('HST', 'better-chat-support')
}, {
  value: 'Hongkong',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hongkong', 'better-chat-support')
}, {
  value: 'Iceland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Iceland', 'better-chat-support')
}, {
  value: 'Indian/Antananarivo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Antananarivo', 'better-chat-support')
}, {
  value: 'Indian/Chagos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Chagos', 'better-chat-support')
}, {
  value: 'Indian/Christmas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Christmas', 'better-chat-support')
}, {
  value: 'Indian/Cocos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Cocos', 'better-chat-support')
}, {
  value: 'Indian/Comoro',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Comoro', 'better-chat-support')
}, {
  value: 'Indian/Kerguelen',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Kerguelen', 'better-chat-support')
}, {
  value: 'Indian/Mahe',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Mahe', 'better-chat-support')
}, {
  value: 'Indian/Maldives',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Maldives', 'better-chat-support')
}, {
  value: 'Indian/Mauritius',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Mauritius', 'better-chat-support')
}, {
  value: 'Indian/Mayotte',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Mayotte', 'better-chat-support')
}, {
  value: 'Indian/Reunion',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Indian/Reunion', 'better-chat-support')
}, {
  value: 'Iran',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Iran', 'better-chat-support')
}, {
  value: 'Israel',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Israel', 'better-chat-support')
}, {
  value: 'Jamaica',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Jamaica', 'better-chat-support')
}, {
  value: 'Japan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Japan', 'better-chat-support')
}, {
  value: 'Kwajalein',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Kwajalein', 'better-chat-support')
}, {
  value: 'Libya',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Libya', 'better-chat-support')
}, {
  value: 'MET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MET', 'better-chat-support')
}, {
  value: 'MST',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MST', 'better-chat-support')
}, {
  value: 'MST7MDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('MST7MDT', 'better-chat-support')
}, {
  value: 'Mexico/BajaNorte',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mexico/BajaNorte', 'better-chat-support')
}, {
  value: 'Mexico/BajaSur',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mexico/BajaSur', 'better-chat-support')
}, {
  value: 'Mexico/General',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mexico/General', 'better-chat-support')
}, {
  value: 'NZ',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('NZ', 'better-chat-support')
}, {
  value: 'NZ-CHAT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('NZ-CHAT', 'better-chat-support')
}, {
  value: 'Navajo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Navajo', 'better-chat-support')
}, {
  value: 'PRC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('PRC', 'better-chat-support')
}, {
  value: 'PST8PDT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('PST8PDT', 'better-chat-support')
}, {
  value: 'Pacific/Apia',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Apia', 'better-chat-support')
}, {
  value: 'Pacific/Auckland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Auckland', 'better-chat-support')
}, {
  value: 'Pacific/Bougainville',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Bougainville', 'better-chat-support')
}, {
  value: 'Pacific/Chatham',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Chatham', 'better-chat-support')
}, {
  value: 'Pacific/Chuuk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Chuuk', 'better-chat-support')
}, {
  value: 'Pacific/Easter',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Easter', 'better-chat-support')
}, {
  value: 'Pacific/Efate',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Efate', 'better-chat-support')
}, {
  value: 'Pacific/Enderbury',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Enderbury', 'better-chat-support')
}, {
  value: 'Pacific/Fakaofo',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Fakaofo', 'better-chat-support')
}, {
  value: 'Pacific/Fiji',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Fiji', 'better-chat-support')
}, {
  value: 'Pacific/Funafuti',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Funafuti', 'better-chat-support')
}, {
  value: 'Pacific/Galapagos',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Galapagos', 'better-chat-support')
}, {
  value: 'Pacific/Gambier',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Gambier', 'better-chat-support')
}, {
  value: 'Pacific/Guadalcanal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Guadalcanal', 'better-chat-support')
}, {
  value: 'Pacific/Guam',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Guam', 'better-chat-support')
}, {
  value: 'Pacific/Honolulu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Honolulu', 'better-chat-support')
}, {
  value: 'Pacific/Johnston',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Johnston', 'better-chat-support')
}, {
  value: 'Pacific/Kiritimati',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Kiritimati', 'better-chat-support')
}, {
  value: 'Pacific/Kosrae',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Kosrae', 'better-chat-support')
}, {
  value: 'Pacific/Kwajalein',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Kwajalein', 'better-chat-support')
}, {
  value: 'Pacific/Majuro',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Majuro', 'better-chat-support')
}, {
  value: 'Pacific/Marquesas',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Marquesas', 'better-chat-support')
}, {
  value: 'Pacific/Midway',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Midway', 'better-chat-support')
}, {
  value: 'Pacific/Nauru',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Nauru', 'better-chat-support')
}, {
  value: 'Pacific/Niue',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Niue', 'better-chat-support')
}, {
  value: 'Pacific/Norfolk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Norfolk', 'better-chat-support')
}, {
  value: 'Pacific/Noumea',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Noumea', 'better-chat-support')
}, {
  value: 'Pacific/Pago_Pago',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Pago_Pago', 'better-chat-support')
}, {
  value: 'Pacific/Palau',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Palau', 'better-chat-support')
}, {
  value: 'Pacific/Pitcairn',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Pitcairn', 'better-chat-support')
}, {
  value: 'Pacific/Pohnpei',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Pohnpei', 'better-chat-support')
}, {
  value: 'Pacific/Ponape',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Ponape', 'better-chat-support')
}, {
  value: 'Pacific/Port_Moresby',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Port_Moresby', 'better-chat-support')
}, {
  value: 'Pacific/Rarotonga',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Rarotonga', 'better-chat-support')
}, {
  value: 'Pacific/Saipan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Saipan', 'better-chat-support')
}, {
  value: 'Pacific/Samoa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Samoa', 'better-chat-support')
}, {
  value: 'Pacific/Tahiti',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Tahiti', 'better-chat-support')
}, {
  value: 'Pacific/Tarawa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Tarawa', 'better-chat-support')
}, {
  value: 'Pacific/Tongatapu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Tongatapu', 'better-chat-support')
}, {
  value: 'Pacific/Truk',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Truk', 'better-chat-support')
}, {
  value: 'Pacific/Wake',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Wake', 'better-chat-support')
}, {
  value: 'Pacific/Wallis',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Wallis', 'better-chat-support')
}, {
  value: 'Pacific/Yap',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pacific/Yap', 'better-chat-support')
}, {
  value: 'Poland',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Poland', 'better-chat-support')
}, {
  value: 'Portugal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Portugal', 'better-chat-support')
}, {
  value: 'ROC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ROC', 'better-chat-support')
}, {
  value: 'ROK',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ROK', 'better-chat-support')
}, {
  value: 'Singapore',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Singapore', 'better-chat-support')
}, {
  value: 'Turkey',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Turkey', 'better-chat-support')
}, {
  value: 'UCT',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('UCT', 'better-chat-support')
}, {
  value: 'US/Alaska',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Alaska', 'better-chat-support')
}, {
  value: 'US/Aleutian',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Aleutian', 'better-chat-support')
}, {
  value: 'US/Arizona',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Arizona', 'better-chat-support')
}, {
  value: 'US/Central',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Central', 'better-chat-support')
}, {
  value: 'US/East-Indiana',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/East-Indiana', 'better-chat-support')
}, {
  value: 'US/Eastern',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Eastern', 'better-chat-support')
}, {
  value: 'US/Hawaii',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Hawaii', 'better-chat-support')
}, {
  value: 'US/Indiana-Starke',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Indiana-Starke', 'better-chat-support')
}, {
  value: 'US/Michigan',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Michigan', 'better-chat-support')
}, {
  value: 'US/Mountain',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Mountain', 'better-chat-support')
}, {
  value: 'US/Pacific',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Pacific', 'better-chat-support')
}, {
  value: 'US/Pacific-New',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Pacific-New', 'better-chat-support')
}, {
  value: 'US/Samoa',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('US/Samoa', 'better-chat-support')
}, {
  value: 'UTC',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('UTC', 'better-chat-support')
}, {
  value: 'Universal',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Universal', 'better-chat-support')
}, {
  value: 'W-SU',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('W-SU', 'better-chat-support')
}, {
  value: 'WET',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('WET', 'better-chat-support')
}, {
  value: 'Zulu',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Zulu', 'better-chat-support')
}];
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    buttonSize,
    buttonType,
    borderRadius,
    text,
    info,
    title,
    online,
    offline,
    textAlignment,
    iconTarget,
    visibility,
    buttonLinkTarget,
    numberInput,
    imageUrl,
    timeZone,
    mondayStart,
    mondayEnd,
    tuesdayStart,
    tuesdayEnd,
    wednesdayStart,
    wednesdayEnd,
    thursdayStart,
    thursdayEnd,
    fridayStart,
    fridayEnd,
    saturdayStart,
    saturdayEnd,
    sundayStart,
    sundayEnd
  } = attributes;
  const [filteredOptions, setFilteredOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(timezones);
  function onInputChange(value) {
    setFilteredOptions(timezones.filter(timezone => timezone.label.toLowerCase().includes(value.toLowerCase())));
  }
  function onFontSizeChange(value) {
    setAttributes({
      timeZone: value
    });
  }
  const onSelectImage = image => {
    setAttributes({
      imageUrl: image.url
    });
  };
  const onChangeAlignment = newAlignment => {
    setAttributes({
      textAlignment: newAlignment
    });
  };
  const onChangeText = newText => {
    setAttributes({
      text: newText
    });
  };
  const advancedBtnInfo = newInfo => {
    setAttributes({
      info: newInfo
    });
  };
  const advancedBtnTitle = newTitle => {
    setAttributes({
      title: newTitle
    });
  };
  const advancedBtnOnlineBadge = newOnline => {
    setAttributes({
      online: newOnline
    });
  };
  const onIconTarget = onIconTargets => {
    setAttributes({
      iconTarget: onIconTargets
    });
  };
  const onButtonLinkTarget = newLinkTarget => {
    setAttributes({
      buttonLinkTarget: newLinkTarget
    });
  };
  const textClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(`mSupportButtons-align-${textAlignment}`);
  const basicBtn = classnames__WEBPACK_IMPORTED_MODULE_4___default()(`mSupport-button-4 mSupport-btn-bg`);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(`mSupportButtons mSupport-button-4 mSupport-btn-bg`);
  const buttonSizeOptions = [{
    value: 'size-small',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Small', 'better-chat-support')
  }, {
    value: 'size-medium',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Medium', 'better-chat-support')
  }, {
    value: 'size-large',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Large', 'better-chat-support')
  }];
  const buttonTypeOptions = [{
    value: 'basic-button',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Basic Button', 'better-chat-support')
  }, {
    value: 'advance-button',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advance Button', 'better-chat-support')
  }];
  const borderRadiusOptions = [{
    value: 'border-squared',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Squared', 'better-chat-support')
  }, {
    value: 'border-rounded',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Rounded', 'better-chat-support')
  }];
  const visibilityOn = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Everywhere', 'better-chat-support')
  }, {
    value: 'mSupport-desktop-only',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Desktop only', 'better-chat-support')
  }, {
    value: 'mSupport-tablet-only',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tablets only', 'better-chat-support')
  }, {
    value: 'mSupport-mobile-tablet-only',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mobile and tablets', 'better-chat-support')
  }, {
    value: 'mSupport-mobile-only',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Mobile only', 'better-chat-support')
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Type', 'better-chat-support'),
    value: buttonType,
    options: buttonTypeOptions.map(_ref => {
      let {
        value,
        label
      } = _ref;
      return {
        value,
        label
      };
    }),
    onChange: newButton => {
      setAttributes({
        buttonType: newButton
      });
    }
  }))), buttonType === 'basic-button' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Settings', 'better-chat-support'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Messager User Name', 'better-chat-support'),
    value: numberInput,
    onChange: val => setAttributes({
      numberInput: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add your messager user name', 'better-chat-support')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open link in new window', 'better-chat-support'),
    checked: buttonLinkTarget,
    onChange: onButtonLinkTarget
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Style', 'better-chat-support'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Text', 'better-chat-support'),
    value: text,
    onChange: val => setAttributes({
      text: val
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Size', 'better-chat-support'),
    value: buttonSize,
    options: buttonSizeOptions.map(_ref2 => {
      let {
        value,
        label
      } = _ref2;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        buttonSize: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'better-chat-support'),
    value: borderRadius,
    options: borderRadiusOptions.map(_ref3 => {
      let {
        value,
        label
      } = _ref3;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        borderRadius: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Visibility on', 'better-chat-support'),
    value: visibility,
    options: visibilityOn.map(_ref4 => {
      let {
        value,
        label
      } = _ref4;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        visibility: newSize
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Icon', 'better-chat-support'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Icon', 'better-chat-support'),
    checked: iconTarget,
    onChange: onIconTarget
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: textAlignment,
    onChange: onChangeAlignment
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper mSupport-editor ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `${basicBtn} ${buttonSize} ${borderRadius} ${visibility}`
  }), iconTarget && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "dashicons dashicons-format-status"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: onChangeText,
    value: text,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('How can I help you?', 'better-chat-support'),
    tagName: "span",
    allowedFormats: []
  })))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('General Settings', 'better-chat-support'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Messanger User Name', 'better-chat-support'),
    value: numberInput,
    onChange: val => setAttributes({
      numberInput: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add your messanger user name', 'better-chat-support')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open link in new window', 'better-chat-support'),
    checked: buttonLinkTarget,
    onChange: onButtonLinkTarget
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Agent Image', 'better-chat-support'),
    onSelect: onSelectImage,
    allowedTypes: ['image'],
    render: _ref5 => {
      let {
        open
      } = _ref5;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
        onClick: open,
        style: {
          marginBottom: '20px',
          fontSize: '16px'
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
        style: {
          marginRight: '5px'
        },
        className: "dashicons dashicons-cloud-upload"
      }), ' ', "Agent photo");
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Agent Info', 'better-chat-support'),
    value: info,
    onChange: val => setAttributes({
      info: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Write agent name & agent title', 'better-chat-support')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button Label', 'better-chat-support'),
    value: title,
    onChange: val => setAttributes({
      title: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add custom button label', 'better-chat-support')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Online Badge Text', 'better-chat-support'),
    value: online,
    onChange: val => setAttributes({
      online: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add custom badget text when user in online.', 'better-chat-support')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Offline Badge Text', 'better-chat-support'),
    value: offline,
    onChange: val => setAttributes({
      offline: val
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add custom badget text when user in offline.', 'better-chat-support')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chat Settings', 'better-chat-support'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ComboboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Timezone', 'better-chat-support'),
    value: timeZone,
    options: filteredOptions,
    onChange: onFontSizeChange,
    onInputChange: onInputChange,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('When using the date and time from the user browser you can transform it to your current timezone (in case your user is in a different timezone)', 'better-chat-support')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Monthday', 'better-chat-support'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time', 'better-chat-support'),
    value: mondayStart,
    onChange: val => setAttributes({
      mondayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:00', 'better-chat-support')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time', 'better-chat-support'),
    value: mondayEnd,
    onChange: val => setAttributes({
      mondayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24:00', 'better-chat-support')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tuesday', 'better-chat-support'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time', 'better-chat-support'),
    value: tuesdayStart,
    onChange: val => setAttributes({
      tuesdayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:00', 'better-chat-support')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time', 'better-chat-support'),
    value: tuesdayEnd,
    onChange: val => setAttributes({
      tuesdayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24:00', 'better-chat-support')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Wednesday', 'better-chat-support'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time', 'better-chat-support'),
    value: wednesdayStart,
    onChange: val => setAttributes({
      wednesdayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:00', 'better-chat-support')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time', 'better-chat-support'),
    value: wednesdayEnd,
    onChange: val => setAttributes({
      wednesdayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24:00', 'better-chat-support')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thursday', 'better-chat-support'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time', 'better-chat-support'),
    value: thursdayStart,
    onChange: val => setAttributes({
      thursdayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:00', 'better-chat-support')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time', 'better-chat-support'),
    value: thursdayEnd,
    onChange: val => setAttributes({
      thursdayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24:00', 'better-chat-support')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Friday', 'better-chat-support'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time', 'better-chat-support'),
    value: fridayStart,
    onChange: val => setAttributes({
      fridayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:00', 'better-chat-support')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time', 'better-chat-support'),
    value: fridayEnd,
    onChange: val => setAttributes({
      fridayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24:00', 'better-chat-support')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Saturday', 'better-chat-support'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time', 'better-chat-support'),
    value: saturdayStart,
    onChange: val => setAttributes({
      saturdayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:00', 'better-chat-support')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time', 'better-chat-support'),
    value: saturdayEnd,
    onChange: val => setAttributes({
      saturdayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24:00', 'better-chat-support')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Sunday', 'better-chat-support'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start Time', 'better-chat-support'),
    value: sundayStart,
    onChange: val => setAttributes({
      sundayStart: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('00:00', 'better-chat-support')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End Time', 'better-chat-support'),
    value: sundayEnd,
    onChange: val => setAttributes({
      sundayEnd: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24:00', 'better-chat-support')
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Appearance settings', 'better-chat-support'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Visibility on', 'better-chat-support'),
    value: visibility,
    options: visibilityOn.map(_ref6 => {
      let {
        value,
        label
      } = _ref6;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        visibility: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'better-chat-support'),
    value: buttonSize,
    options: buttonSizeOptions.map(_ref7 => {
      let {
        value,
        label
      } = _ref7;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        buttonSize: newSize
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Radius', 'better-chat-support'),
    value: borderRadius,
    options: borderRadiusOptions.map(_ref8 => {
      let {
        value,
        label
      } = _ref8;
      return {
        value,
        label
      };
    }),
    onChange: newSize => {
      setAttributes({
        borderRadius: newSize
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
    value: textAlignment,
    onChange: onChangeAlignment
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper mSupport-editor ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `avatar-active ${classes} ${buttonSize} ${borderRadius} ${visibility}`
  }), {
    "data-btnavailablety": `{ "monday":"${mondayStart}-${mondayEnd}", "tuesday":"${tuesdayStart}-${tuesdayEnd}", "wednesday":"${wednesdayStart}-${wednesdayEnd}", "thursday":"${thursdayStart}-${thursdayEnd}", "friday":"${fridayStart}-${fridayEnd}", "saturday":"${saturdayStart}-${saturdayEnd}", "sunday":"${sundayStart}-${sundayEnd}" }`,
    "data-timezone": timeZone
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: imageUrl ? imageUrl : agentImage,
    alt: "agent"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "info-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnInfo,
    value: info,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Robert / Sales Support', 'better-chat-support'),
    tagName: "p",
    allowedFormats: [],
    className: "info"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnTitle,
    value: title,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('How can I help you?', 'better-chat-support'),
    tagName: "p",
    allowedFormats: [],
    className: "title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnOnlineBadge,
    value: online,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('I am online', 'better-chat-support'),
    tagName: "p",
    allowedFormats: [],
    className: "online"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    onChange: advancedBtnOnlineBadge,
    value: offline,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("I'm not available", 'better-chat-support'),
    tagName: "p",
    allowedFormats: [],
    className: "offline"
  }))))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block.json */ "./block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




const agentImage = __webpack_require__(/*! ./images/user.jpg */ "./src/images/user.jpg");
function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    buttonSize,
    borderRadius,
    buttonType,
    text,
    info,
    title,
    online,
    offline,
    textAlignment,
    buttonLinkTarget,
    visibility,
    border,
    iconTarget,
    imageUrl,
    numberInput,
    timeZone,
    mondayStart,
    mondayEnd,
    tuesdayStart,
    tuesdayEnd,
    wednesdayStart,
    wednesdayEnd,
    thursdayStart,
    thursdayEnd,
    fridayStart,
    fridayEnd,
    saturdayStart,
    saturdayEnd,
    sundayStart,
    sundayEnd
  } = attributes;
  const textClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(`mSupportButtons-align-${textAlignment}`);
  const basicBtn = classnames__WEBPACK_IMPORTED_MODULE_3___default()(`mSupport-button-4 mSupport-btn-bg`);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(`mSupportButtons mSupport-button-4 mSupport-btn-bg`);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, buttonType === 'basic-button' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `${basicBtn} ${buttonSize} ${borderRadius} ${visibility} ${border}`
  }), {
    href: `https://www.m.me/${numberInput}`,
    rel: "noopener noreferrer",
    target: buttonLinkTarget ? '_blank' : '_self'
  }), iconTarget && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "dashicons dashicons-format-status"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "span",
    value: text
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `button-wrapper ${textClasses}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `${classes} ${buttonSize} ${borderRadius} ${visibility}`
  }), {
    "data-btnavailablety": `{ "monday":"${mondayStart}-${mondayEnd}", "tuesday":"${tuesdayStart}-${tuesdayEnd}", "wednesday":"${wednesdayStart}-${wednesdayEnd}", "thursday":"${thursdayStart}-${thursdayEnd}", "friday":"${fridayStart}-${fridayEnd}", "saturday":"${saturdayStart}-${saturdayEnd}", "sunday":"${sundayStart}-${sundayEnd}" }`,
    "data-timezone": timeZone
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: imageUrl ? imageUrl : agentImage,
    alt: "agent"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "info-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: info,
    tagName: "p",
    className: "info"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: title,
    tagName: "p",
    className: "title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: online,
    tagName: "p",
    className: "online"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: offline,
    tagName: "p",
    className: "offline"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: `https://www.m.me/${numberInput}`,
    rel: "noopener noreferrer",
    target: buttonLinkTarget ? '_blank' : '_self'
  }))));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/user.jpg":
/*!*****************************!*\
  !*** ./src/images/user.jpg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "images/user.65223f50.jpg";

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"create-block/better-chat-support-button","title":"Better Chat Support Button","category":"better-chat-support-block","icon":"format-status","description":"Better chat support button block for Better chat support plugin.","textdomain":"better-chat-support","editorScript":"file:./build/index.js","editorStyle":"file:./build/index.css","style":"file:./build/style-index.css","supports":{"html":false,"color":{"background":true,"text":true,"gradients":true,"hover":true},"spacing":{},"typography":{}},"example":{"attributes":{"text":"How can I help you?","gradients":"red-to-blue","links":true}},"attributes":{"text":{"type":"string","default":"How can I help you?"},"info":{"type":"string","default":"Robert / Sales Support"},"title":{"type":"string","default":"How can I help you?"},"online":{"type":"string","default":"I am online"},"offline":{"type":"string","default":"I am offline"},"buttonType":{"type":"string","default":"basic-button"},"buttonSize":{"type":"string","default":"size-normal"},"borderRadius":{"type":"string","default":"border-radius-rounded"},"visibility":{"type":"string","default":""},"textAlignment":{"type":"string","default":"left"},"iconTarget":{"type":"boolean","default":false},"buttonLinkTarget":{"type":"boolean","default":false},"numberInput":{"type":"string","default":""},"imageUrl":{"type":"string","default":""},"timeZone":{"type":"string","default":""},"mondayStart":{"type":"string","default":"00:01"},"mondayEnd":{"type":"string","default":"23:59"},"tuesdayStart":{"type":"string","default":"00:01"},"tuesdayEnd":{"type":"string","default":"23:59"},"wednesdayStart":{"type":"string","default":"00:01"},"wednesdayEnd":{"type":"string","default":"23:59"},"thursdayStart":{"type":"string","default":"00:01"},"thursdayEnd":{"type":"string","default":"23:59"},"fridayStart":{"type":"string","default":"00:01"},"fridayEnd":{"type":"string","default":"23:59"},"saturdayStart":{"type":"string","default":"00:01"},"saturdayEnd":{"type":"string","default":"23:59"},"sundayStart":{"type":"string","default":"00:01"},"sundayEnd":{"type":"string","default":"05:00"}}}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbetter_chat_support_button"] = self["webpackChunkbetter_chat_support_button"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
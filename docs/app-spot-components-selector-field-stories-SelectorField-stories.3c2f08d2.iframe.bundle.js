"use strict";(globalThis.webpackChunkopenproject_frontend=globalThis.webpackChunkopenproject_frontend||[]).push([[6501],{"./src/app/spot/components/selector-field/stories/SelectorField.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FontWeight:()=>FontWeight,LongLabel:()=>LongLabel,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/core/i18n/i18n.service.ts"),_stories_i18n_service_stub__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/i18n.service.stub.ts"),_spot_module__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/spot/spot.module.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Patterns/SelectorField",component:__webpack_require__("./src/app/spot/components/selector-field/selector-field.component.ts").o,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_spot_module__WEBPACK_IMPORTED_MODULE_3__.s,_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UX,_angular_forms__WEBPACK_IMPORTED_MODULE_5__.u5],providers:[{provide:_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_1__.D,useFactory:()=>_stories_i18n_service_stub__WEBPACK_IMPORTED_MODULE_2__.r}]})]},Default={render:args=>({props:{...args,mixed:null},template:'\n      <div class="spot-container">\n        <spot-selector-field label="With a spot-checkbox">\n          <spot-checkbox slot="input"></spot-checkbox>\n        </spot-selector-field>\n\n        <spot-selector-field\n          label="Reverse label with a spot-checkbox"\n          [reverseLabel]="true"\n        >\n          <spot-checkbox slot="input"></spot-checkbox>\n        </spot-selector-field>\n\n        <hr class="spot-divider">\n\n        <spot-selector-field label="With a spot-switch">\n          <spot-switch\n            slot="input"\n            [checked]="false"\n          ></spot-switch>\n        </spot-selector-field>\n\n        <spot-selector-field\n          label="Reverse label with a spot-switch"\n          [reverseLabel]="true"\n        >\n          <spot-switch slot="input"></spot-switch>\n        </spot-selector-field>\n      </div>\n   '})},LongLabel={render:args=>({props:args,template:'\n      <spot-selector-field\n        label="This is an incredibly long label in the hopes that we\'ll be able to make it run over multiple lines even on very wide screens, incredibly wide screens that are way past full hd"\n      >\n        <spot-checkbox slot="input"></spot-checkbox>\n      </spot-selector-field>\n   '})},FontWeight={render:args=>({props:args,template:'\n      <div class="spot-container">\n        <spot-selector-field\n          label="Bold Label"\n          labelWeight="bold"\n        >\n          <spot-checkbox slot="input"></spot-checkbox>\n        </spot-selector-field>\n\n        <spot-selector-field label="Regular Label">\n          <spot-checkbox slot="input"></spot-checkbox>\n        </spot-selector-field>\n      </div>\n   '})}},"./src/stories/i18n.service.stub.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>I18nServiceStub});const I18nServiceStub={t:name=>({"date.abbr_day_names":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"date.day_names":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"date.abbr_month_names":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"date.month_names":["January","February","March","April","May","June","July","August","September","October","November","December"]}[name]||name)}}}]);
//# sourceMappingURL=app-spot-components-selector-field-stories-SelectorField-stories.3c2f08d2.iframe.bundle.js.map
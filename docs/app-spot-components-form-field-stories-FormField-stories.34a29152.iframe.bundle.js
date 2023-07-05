"use strict";(globalThis.webpackChunkopenproject_frontend=globalThis.webpackChunkopenproject_frontend||[]).push([[9991],{"./src/app/spot/components/form-field/stories/FormField.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActionSlot:()=>ActionSlot,BasicValidation:()=>BasicValidation,DescriptionSlot:()=>DescriptionSlot,InputSlot:()=>InputSlot,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/core/i18n/i18n.service.ts"),_stories_i18n_service_stub__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/i18n.service.stub.ts"),_spot_module__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/spot/spot.module.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Patterns/FormField",component:__webpack_require__("./src/app/spot/components/form-field/form-field.component.ts").I,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_spot_module__WEBPACK_IMPORTED_MODULE_3__.s,_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UX],providers:[{provide:_core_i18n_i18n_service__WEBPACK_IMPORTED_MODULE_1__.D,useFactory:()=>_stories_i18n_service_stub__WEBPACK_IMPORTED_MODULE_2__.r}]})]},InputSlot={render:args=>({props:args,template:'\n      <spot-form-field label="Form field with input">\n        <spot-text-field slot="input"></spot-text-field>\n      </spot-form-field>\n   '})},DescriptionSlot={render:args=>({props:args,template:'\n      <spot-form-field label="Form field with description">\n        <spot-text-field slot="input"></spot-text-field>\n        <span slot="description">\n          Helpful guidelines so the user can be confident about their input.\n        </span>\n      </spot-form-field>\n   '})},BasicValidation={render:args=>({props:{...args,myForm:new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.nJ({myInput:new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.p4(null,[_angular_forms__WEBPACK_IMPORTED_MODULE_5__.kI.required,_angular_forms__WEBPACK_IMPORTED_MODULE_5__.kI.minLength(8)])}),onSubmit:event=>console.log("onSubmit",event)},template:'\n      <form\n        [formGroup]="myForm"\n        (ngSubmit)="onSubmit($event)"\n        class="spot-container"\n      >\n        <spot-form-field\n          label="Form field with validation"\n          [required]="true"\n        >\n          <spot-text-field\n            formControlName="myInput"\n            slot="input"\n          ></spot-text-field>\n\n          <div\n            slot="errors"\n            class="spot-form-field--error"\n            *ngIf="myForm.get(\'myInput\')!.errors?.required"\n          >\n            This input is required.\n          </div>\n\n          <div\n            slot="errors"\n            class="spot-form-field--error"\n            *ngIf="myForm.get(\'myInput\')!.errors?.minlength"\n          >\n            This input needs to be at least 8 characters long.\n          </div>\n        </spot-form-field>\n\n        <div class="spot-action-bar">\n          <div class="spot-action-bar--right">\n            <button\n              type="submit"\n              class="button -highlight spot-action-bar--action"\n            >Submit data</button>\n          </div>\n        </div>\n      </form>\n   '})},ActionSlot={render:args=>({props:{...args,alert:s=>console.log(s)},template:'\n      <spot-form-field label="Form field with input">\n        <spot-text-field slot="input"></spot-text-field>\n        <button\n          type="button"\n          (click)="log(\'Some action\')"\n          class="spot-link"\n          slot="action"\n        >Some action</button>\n        <button\n          type="button"\n          (click)="log(\'Another action\')"\n          class="spot-link"\n          slot="action"\n        >Another action</button>\n      </spot-form-field>\n   '})}},"./src/stories/i18n.service.stub.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>I18nServiceStub});const I18nServiceStub={t:name=>({"date.abbr_day_names":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"date.day_names":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"date.abbr_month_names":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"date.month_names":["January","February","March","April","May","June","July","August","September","October","November","December"]}[name]||name)}}}]);
//# sourceMappingURL=app-spot-components-form-field-stories-FormField-stories.34a29152.iframe.bundle.js.map
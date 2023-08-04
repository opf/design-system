/*! For license information please see stories-DropdownMenu-mdx.ce8276fe.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkopenproject_frontend=globalThis.webpackChunkopenproject_frontend||[]).push([[994],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer,_:()=>defaultComponents});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},renderElement=function(){var _ref=(0,asyncToGenerator.Z)((function*(node,el){let root=yield getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))}));return function renderElement(_x,_x2){return _ref.apply(this,arguments)}}(),getReactRoot=function(){var _ref2=(0,asyncToGenerator.Z)((function*(el){let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root}));return function getReactRoot(_x3){return _ref2.apply(this,arguments)}}(),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.bD,a:dist.Ct,...dist.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=function(){var _ref=(0,asyncToGenerator.Z)((function*(context,docsParameter,element){let components={...defaultComponents,...docsParameter?.components},TDocs=dist.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(705).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>renderElement(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))}));return function(_x,_x2,_x3){return _ref.apply(this,arguments)}}(),this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{var m=__webpack_require__("./node_modules/react-dom/index.js");exports.createRoot=m.createRoot,exports.hydrateRoot=m.hydrateRoot},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/DropdownMenu.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",h2:"h2",em:"em"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.h_,{title:"Patterns/Dropdown menu"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"dropdown-menu",children:"Dropdown menu"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Example: A dropdown menu with four items"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The dropdown menu is a contextual menu triggered by clicking on a dropdown button. It provides options to the use."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"structure-and-options",children:"Structure and Options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The dropdown menu consists of a list of items, generally ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"menu rows"})," and an optional title."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The title is not interactive. It serves to provide additional context, if necessary."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A menu item is interactive and generally represents an action. The menu item can optionally have an icon on the left side."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Example of an existing more menu that has icons next to each menu row"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"states",children:"States"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Each menu item has three states: regular, hover and clicked."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"margins-and-spacing",children:"Margins and Spacing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Each item has a height of 1.5 rem. There is a 0.25 rem spacing between the optional icon and the label, and a 0.5 rem rem spacing to the left and right."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The width is determined by the longest object, or can be defined manually. If defined manually, items that are very long and exceed this length are truncated."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Eg: a menu item that's very long and truncated"}),"\n"]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);
//# sourceMappingURL=stories-DropdownMenu-mdx.ce8276fe.iframe.bundle.js.map
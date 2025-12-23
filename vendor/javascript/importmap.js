// importmap@0.0.0 downloaded from https://ga.jspm.io/npm:importmap@0.0.0/index.js

import r from"fs";import e from"util";import o from"process";var t={};function _nullRequire(r){var e=new Error("Cannot find module '"+r+"'");e.code="MODULE_NOT_FOUND";throw e}_nullRequire.resolve=_nullRequire;var n=o;const s=r;const i=e;const c=i.promisify(s.readFile);t.resolve=async function resolve(r=n.cwd()){const{dependencies:e}=JSON.parse(await c("./package.json","utf8"));const o={imports:{}};for(const t of Object.keys(e)){const e=ignoreError(()=>_nullRequire.resolve(t,{paths:[r]}),"");e.startsWith(r)&&(o.imports[t]=e.substr(r.length))}return o};function ignoreError(r,e){try{return r()}catch{return e}}const u=t.resolve;export default t;export{u as resolve};


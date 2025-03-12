'use strict';

var we = require('wkx');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var we__default = /*#__PURE__*/_interopDefault(we);

var s=Symbol.for("drizzle:entityKind");function y(t,e){if(!t||typeof t!="object")return !1;if(t instanceof e)return !0;if(!Object.prototype.hasOwnProperty.call(e,s))throw new Error(`Class "${e.name??"<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);let r=Object.getPrototypeOf(t).constructor;if(r)for(;r;){if(s in r&&r[s]===e[s])return !0;r=Object.getPrototypeOf(r);}return !1}var v=class{constructor(e,r){this.table=e,this.config=r,this.name=r.name,this.keyAsName=r.keyAsName,this.notNull=r.notNull,this.default=r.default,this.defaultFn=r.defaultFn,this.onUpdateFn=r.onUpdateFn,this.hasDefault=r.hasDefault,this.primary=r.primaryKey,this.isUnique=r.isUnique,this.uniqueName=r.uniqueName,this.uniqueType=r.uniqueType,this.dataType=r.dataType,this.columnType=r.columnType,this.generated=r.generated,this.generatedIdentity=r.generatedIdentity;}static[s]="Column";name;keyAsName;primary;notNull;default;defaultFn;onUpdateFn;hasDefault;isUnique;uniqueName;uniqueType;dataType;columnType;enumValues=void 0;generated=void 0;generatedIdentity=void 0;config;mapFromDriverValue(e){return e}mapToDriverValue(e){return e}shouldDisableInsert(){return this.config.generated!==void 0&&this.config.generated.type!=="byDefault"}};var D=Symbol.for("drizzle:Name");var ie=Symbol.for("drizzle:isPgEnum");function ae(t){return !!t&&typeof t=="function"&&ie in t&&t[ie]===!0}var P=class{static[s]="Subquery";constructor(e,r,n,i=!1){this._={brand:"Subquery",sql:e,selectedFields:r,alias:n,isWith:i};}};var me={startActiveSpan(t,e){return e()}};var G=Symbol.for("drizzle:ViewBaseConfig");var R=Symbol.for("drizzle:Schema"),fe=Symbol.for("drizzle:Columns"),pe=Symbol.for("drizzle:ExtraConfigColumns"),Z=Symbol.for("drizzle:OriginalName"),X=Symbol.for("drizzle:BaseName"),$=Symbol.for("drizzle:IsAlias"),ce=Symbol.for("drizzle:ExtraConfigBuilder"),be=Symbol.for("drizzle:IsDrizzleTable"),N=class{static[s]="Table";static Symbol={Name:D,Schema:R,OriginalName:Z,Columns:fe,ExtraConfigColumns:pe,BaseName:X,IsAlias:$,ExtraConfigBuilder:ce};[D];[Z];[R];[fe];[pe];[X];[$]=!1;[be]=!0;[ce]=void 0;constructor(e,r,n){this[D]=this[Z]=e,this[R]=r,this[X]=n;}};function Ne(t){return t!=null&&typeof t.getSQL=="function"}function xe(t){let e={sql:"",params:[]};for(let r of t)e.sql+=r.sql,e.params.push(...r.params),r.typings?.length&&(e.typings||(e.typings=[]),e.typings.push(...r.typings));return e}var h=class{static[s]="StringChunk";value;constructor(e){this.value=Array.isArray(e)?e:[e];}getSQL(){return new f([this])}},f=class t{constructor(e){this.queryChunks=e;}static[s]="SQL";decoder=de;shouldInlineParams=!1;append(e){return this.queryChunks.push(...e.queryChunks),this}toQuery(e){return me.startActiveSpan("drizzle.buildSQL",r=>{let n=this.buildQueryFromSourceParams(this.queryChunks,e);return r?.setAttributes({"drizzle.query.text":n.sql,"drizzle.query.params":JSON.stringify(n.params)}),n})}buildQueryFromSourceParams(e,r){let n=Object.assign({},r,{inlineParams:r.inlineParams||this.shouldInlineParams,paramStartIndex:r.paramStartIndex||{value:0}}),{casing:i,escapeName:a,escapeParam:p,prepareTyping:d,inlineParams:l,paramStartIndex:g}=n;return xe(e.map(o=>{if(y(o,h))return {sql:o.value.join(""),params:[]};if(y(o,L))return {sql:a(o.value),params:[]};if(o===void 0)return {sql:"",params:[]};if(Array.isArray(o)){let u=[new h("(")];for(let[c,Se]of o.entries())u.push(Se),c<o.length-1&&u.push(new h(", "));return u.push(new h(")")),this.buildQueryFromSourceParams(u,n)}if(y(o,t))return this.buildQueryFromSourceParams(o.queryChunks,{...n,inlineParams:l||o.shouldInlineParams});if(y(o,N)){let u=o[N.Symbol.Schema],c=o[N.Symbol.Name];return {sql:u===void 0||o[$]?a(c):a(u)+"."+a(c),params:[]}}if(y(o,v)){let u=i.getColumnCasing(o);if(r.invokeSource==="indexes")return {sql:a(u),params:[]};let c=o.table[N.Symbol.Schema];return {sql:o.table[$]||c===void 0?a(o.table[N.Symbol.Name])+"."+a(u):a(c)+"."+a(o.table[N.Symbol.Name])+"."+a(u),params:[]}}if(y(o,H)){let u=o[G].schema,c=o[G].name;return {sql:u===void 0||o[G].isAlias?a(c):a(u)+"."+a(c),params:[]}}if(y(o,A)){if(y(o.value,q))return {sql:p(g.value++,o),params:[o],typings:["none"]};let u=o.value===null?null:o.encoder.mapToDriverValue(o.value);if(y(u,t))return this.buildQueryFromSourceParams([u],n);if(l)return {sql:this.mapInlineParam(u,n),params:[]};let c=["none"];return d&&(c=[d(o.encoder)]),{sql:p(g.value++,u),params:[u],typings:c}}return y(o,q)?{sql:p(g.value++,o),params:[o],typings:["none"]}:y(o,t.Aliased)&&o.fieldAlias!==void 0?{sql:a(o.fieldAlias),params:[]}:y(o,P)?o._.isWith?{sql:a(o._.alias),params:[]}:this.buildQueryFromSourceParams([new h("("),o._.sql,new h(") "),new L(o._.alias)],n):ae(o)?o.schema?{sql:a(o.schema)+"."+a(o.enumName),params:[]}:{sql:a(o.enumName),params:[]}:Ne(o)?o.shouldOmitSQLParens?.()?this.buildQueryFromSourceParams([o.getSQL()],n):this.buildQueryFromSourceParams([new h("("),o.getSQL(),new h(")")],n):l?{sql:this.mapInlineParam(o,n),params:[]}:{sql:p(g.value++,o),params:[o],typings:["none"]}}))}mapInlineParam(e,{escapeString:r}){if(e===null)return "null";if(typeof e=="number"||typeof e=="boolean")return e.toString();if(typeof e=="string")return r(e);if(typeof e=="object"){let n=e.toString();return r(n==="[object Object]"?JSON.stringify(e):n)}throw new Error("Unexpected param value: "+e)}getSQL(){return this}as(e){return e===void 0?this:new t.Aliased(this,e)}mapWith(e){return this.decoder=typeof e=="function"?{mapFromDriverValue:e}:e,this}inlineParams(){return this.shouldInlineParams=!0,this}if(e){return e?this:void 0}},L=class{constructor(e){this.value=e;}static[s]="Name";brand;getSQL(){return new f([this])}};var de={mapFromDriverValue:t=>t},ge={mapToDriverValue:t=>t};({...de,...ge});var A=class{constructor(e,r=ge){this.value=e,this.encoder=r;}static[s]="Param";brand;getSQL(){return new f([this])}};function m(t,...e){let r=[];(e.length>0||t.length>0&&t[0]!=="")&&r.push(new h(t[0]));for(let[n,i]of e.entries())r.push(i,new h(t[n+1]));return new f(r)}(t=>{function e(){return new f([])}t.empty=e;function r(l){return new f(l)}t.fromList=r;function n(l){return new f([new h(l)])}t.raw=n;function i(l,g){let o=[];for(let[u,c]of l.entries())u>0&&g!==void 0&&o.push(g),o.push(c);return new f(o)}t.join=i;function a(l){return new L(l)}t.identifier=a;function p(l){return new q(l)}t.placeholder=p;function d(l,g){return new A(l,g)}t.param=d;})(m||(m={}));(t=>{class e{constructor(n,i){this.sql=n,this.fieldAlias=i;}static[s]="SQL.Aliased";isSelectionField=!1;getSQL(){return this.sql}clone(){return new e(this.sql,this.fieldAlias)}}t.Aliased=e;})(f||(f={}));var q=class{constructor(e){this.name=e;}static[s]="Placeholder";getSQL(){return new f([this])}};var De=Symbol.for("drizzle:IsDrizzleView"),H=class{static[s]="View";[G];[De]=!0;constructor({name:e,schema:r,selectedFields:n,query:i}){this[G]={name:e,originalName:e,schema:r,selectedFields:n,query:i,isExisting:!i,isAlias:!1};}getSQL(){return new f([this])}};v.prototype.getSQL=function(){return new f([this])};N.prototype.getSQL=function(){return new f([this])};P.prototype.getSQL=function(){return new f([this])};function S(t){let e=Buffer.from(t,"hex");return we__default.default.Geometry.parse(e).toGeoJSON({shortCrs:!0})}var b=m.raw("");function jt(t){return m`${b}ST_Area(${t})`.mapWith(Number)}function It(t,e){return m`${b}ST_ClosestPoint(${t}, ${e})`.mapWith(S)}function Kt(t){return m`${b}ST_GeomFromText(${t})`.mapWith(S)}function Et(t){return m`${b}ST_AsText(${t})`}function Bt(t){return m`${b}ST_X(${t})`.mapWith(Number)}function Ut(t){return m`${b}ST_Y(${t})`.mapWith(Number)}function _t(t){return m`${b}ST_IsValid(${t},0)`.mapWith(Boolean)}function Wt(t){return m`${b}ST_IsValidReason(${t})`}function Mt(t){return m`${b}ST_GeomFromGeoJSON(${JSON.stringify(t)})`.mapWith(S)}function Rt(t,e=20){return m`${b}ST_GeoHash(${t}, ${e})`}function Zt(t,e,r){return m`${b}ST_AddMeasure(${t}, ${e}, ${r})`}

exports.addMeasure = Zt;
exports.area = jt;
exports.asText = Et;
exports.closestPoint = It;
exports.geoHash = Rt;
exports.geomFromGeoJSON = Mt;
exports.geomFromText = Kt;
exports.isValid = _t;
exports.isValidReason = Wt;
exports.x = Bt;
exports.y = Ut;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=functions.js.map
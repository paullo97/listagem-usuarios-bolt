import{$ as Xi,A as oe,Aa as ft,B as Ui,Ba as gt,C as te,Ca as hn,D as Gi,Da as mn,E as Lt,Ea as pn,Fa as un,Ga as fn,H as De,I as Qi,J as Wi,K as st,L as ct,M as lt,N as qi,O as Be,P as dt,Q as ht,U as Ki,V as $i,Y as Yi,a as ye,b as at,c as Ft,ca as mt,d as Ii,da as Zi,f as Pt,g as qe,h as Le,ha as Ji,i as Ei,ia as en,j as K,ja as tn,k as Oi,ka as Bt,l as ot,la as nn,m as Ti,ma as an,n as Ai,na as Ke,o as Fi,oa as $e,pa as pt,q as rt,qa as on,r as Pi,ra as rn,s as Li,sa as sn,t as Bi,ta as cn,u as zi,ua as ut,va as ln,w as Ni,wa as dn,x as Vi,xa as zt,y as Hi,ya as Nt,z as ji,za as ze}from"./chunk-X37URQX4.js";import{$ as O,$a as l,A as ui,Ab as p,Ba as m,Bb as W,Bc as _n,Ca as ge,Cb as ae,Cc as vn,Da as J,Db as N,Dc as yn,E as pe,Eb as wi,Fa as Qe,Fb as Fe,Ga as xe,Gb as We,Gc as Vt,Ha as Oe,Hb as xi,Ja as y,Ka as T,La as f,Lb as nt,Ma as gi,Na as b,Oa as A,Pa as _i,S as we,Sa as vi,Sb as ee,Sc as bn,T as Ot,Ta as E,Tb as Pe,U as V,Ua as M,Ub as w,Vb as de,Wa as I,Xa as yi,Ya as bi,Za as Ci,_ as Ie,_a as x,_b as Di,a as re,aa as R,ab as d,ac as ki,b as di,bb as F,bc as Si,ca as s,cc as Ri,f as v,fb as _e,g as Se,ga as X,gb as ve,h as Ue,ha as Z,hb as Q,i as hi,ia as ue,ib as ce,ja as fi,jb as Te,jc as Mi,k as mi,ka as G,kb as C,la as Ge,ma as H,mb as g,na as Tt,nb as le,o as Re,ob as j,pb as Ae,q as pi,qa as Ee,qb as ne,rb as D,s as Ce,sa as fe,sb as k,t as he,ta as z,ua as B,w as Me,wb as tt,xb as it,xc as gn,y as se,yb as U,z as me,zb as At}from"./chunk-DKMAYW5K.js";var _t=class{applyChanges(a,e,t,i,o){a.forEachOperation((r,c,h)=>{let u,_;if(r.previousIndex==null){let S=t(r,c,h);u=e.createEmbeddedView(S.templateRef,S.context,S.index),_=Le.INSERTED}else h==null?(e.remove(c),_=Le.REMOVED):(u=e.get(c),e.move(u,h),_=Le.MOVED);o&&o({context:u?.context,operation:_,record:r})})}detach(){}};var sa=[[["caption"]],[["colgroup"],["col"]],"*"],ca=["caption","colgroup, col","*"];function la(n,a){n&1&&j(0,2)}function da(n,a){n&1&&(l(0,"thead",0),Q(1,1),d(),l(2,"tbody",0),Q(3,2)(4,3),d(),l(5,"tfoot",0),Q(6,4),d())}function ha(n,a){n&1&&Q(0,1)(1,2)(2,3)(3,4)}var ie=new R("CDK_TABLE");var bt=(()=>{class n{template=s(J);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),Ct=(()=>{class n{template=s(J);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),xn=(()=>{class n{template=s(J);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),Ne=(()=>{class n{_table=s(ie,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,i,o){if(t&1&&Ae(o,bt,5)(o,Ct,5)(o,xn,5),t&2){let r;D(r=k())&&(i.cell=r.first),D(r=k())&&(i.headerCell=r.first),D(r=k())&&(i.footerCell=r.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",w],stickyEnd:[2,"stickyEnd","stickyEnd",w]}})}return n})(),yt=class{constructor(a,e){e.nativeElement.classList.add(...a._columnCssClassName)}},Dn=(()=>{class n extends yt{constructor(){super(s(Ne),s(B))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[b]})}return n})();var kn=(()=>{class n extends yt{constructor(){let e=s(Ne),t=s(B);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute("role",i)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[b]})}return n})();var jt=(()=>{class n{template=s(J);_differs=s(Pe);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Xe?e.headerCell.template:this instanceof Ut?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,features:[fe]})}return n})(),Xe=(()=>{class n extends jt{_table=s(ie,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(J),s(Pe))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",w]},features:[b,fe]})}return n})(),Ut=(()=>{class n extends jt{_table=s(ie,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(J),s(Pe))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",w]},features:[b,fe]})}return n})(),wt=(()=>{class n extends jt{_table=s(ie,{optional:!0});when;constructor(){super(s(J),s(Pe))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[b]})}return n})(),ke=(()=>{class n{_viewContainer=s(Oe);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),Gt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&Q(0,0)},dependencies:[ke],encapsulation:2})}return n})();var Qt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&Q(0,0)},dependencies:[ke],encapsulation:2})}return n})(),xt=(()=>{class n{templateRef=s(J);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),Cn=["top","bottom","left","right"],Ht=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(a=>this._updateCachedSizes(a)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(a,e,t=!0,i=!0,o,r,c){this._isNativeHtmlTable=a,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=o,this._positionListener=r,this._tableInjector=c,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(a,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(a);let t=[];for(let i of a)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));ge({write:()=>{for(let i of t)this._removeStickyStyle(i,e)}},{injector:this._tableInjector})}updateStickyColumns(a,e,t,i=!0,o=!0){if(!a.length||!this._isBrowser||!(e.some(Y=>Y)||t.some(Y=>Y))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=a[0],c=r.children.length,h=this.direction==="rtl",u=h?"right":"left",_=h?"left":"right",S=e.lastIndexOf(!0),P=t.indexOf(!0),L,si,ci;o&&this._updateStickyColumnReplayQueue({rows:[...a],stickyStartStates:[...e],stickyEndStates:[...t]}),ge({earlyRead:()=>{L=this._getCellWidths(r,i),si=this._getStickyStartColumnPositions(L,e),ci=this._getStickyEndColumnPositions(L,t)},write:()=>{for(let Y of a)for(let q=0;q<c;q++){let li=Y.children[q];e[q]&&this._addStickyStyle(li,u,si[q],q===S),t[q]&&this._addStickyStyle(li,_,ci[q],q===P)}this._positionListener&&L.some(Y=>!!Y)&&(this._positionListener.stickyColumnsUpdated({sizes:S===-1?[]:L.slice(0,S+1).map((Y,q)=>e[q]?Y:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:P===-1?[]:L.slice(P).map((Y,q)=>t[q+P]?Y:null).reverse()}))}},{injector:this._tableInjector})}stickRows(a,e,t){if(!this._isBrowser)return;let i=t==="bottom"?a.slice().reverse():a,o=t==="bottom"?e.slice().reverse():e,r=[],c=[],h=[];ge({earlyRead:()=>{for(let u=0,_=0;u<i.length;u++){if(!o[u])continue;r[u]=_;let S=i[u];h[u]=this._isNativeHtmlTable?Array.from(S.children):[S];let P=this._retrieveElementSize(S).height;_+=P,c[u]=P}},write:()=>{let u=o.lastIndexOf(!0);for(let _=0;_<i.length;_++){if(!o[_])continue;let S=r[_],P=_===u;for(let L of h[_])this._addStickyStyle(L,t,S,P)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:c,offsets:r,elements:h}):this._positionListener?.stickyFooterRowsUpdated({sizes:c,offsets:r,elements:h})}},{injector:this._tableInjector})}updateStickyFooterContainer(a,e){this._isNativeHtmlTable&&ge({write:()=>{let t=a.querySelector("tfoot");t&&(e.some(i=>!i)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(a,e){if(!a.classList.contains(this._stickCellCss))return;for(let i of e)a.style[i]="",a.classList.remove(this._borderCellCss[i]);Cn.some(i=>e.indexOf(i)===-1&&a.style[i])?a.style.zIndex=this._getCalculatedZIndex(a):(a.style.zIndex="",this._needsPositionStickyOnElement&&(a.style.position=""),a.classList.remove(this._stickCellCss))}_addStickyStyle(a,e,t,i){a.classList.add(this._stickCellCss),i&&a.classList.add(this._borderCellCss[e]),a.style[e]=`${t}px`,a.style.zIndex=this._getCalculatedZIndex(a),this._needsPositionStickyOnElement&&(a.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(a){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of Cn)a.style[i]&&(t+=e[i]);return t?`${t}`:""}_getCellWidths(a,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=a.children;for(let o=0;o<i.length;o++){let r=i[o];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(a,e){let t=[],i=0;for(let o=0;o<a.length;o++)e[o]&&(t[o]=i,i+=a[o]);return t}_getStickyEndColumnPositions(a,e){let t=[],i=0;for(let o=a.length;o>0;o--)e[o]&&(t[o]=i,i+=a[o]);return t}_retrieveElementSize(a){let e=this._elemSizeCache.get(a);if(e)return e;let t=a.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(a,i),this._resizeObserver.observe(a,{box:"border-box"})),i}_updateStickyColumnReplayQueue(a){this._removeFromStickyColumnReplayQueue(a.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(a)}_removeFromStickyColumnReplayQueue(a){let e=new Set(a);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(a){let e=!1;for(let t of a){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&ma(t.target)&&(e=!0),this._elemSizeCache.set(t.target,i)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function ma(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(a=>n.classList.contains(a))}var Ye=new R("STICKY_POSITIONING_LISTENER");var Wt=(()=>{class n{viewContainer=s(Oe);elementRef=s(B);constructor(){let e=s(ie);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["","rowOutlet",""]]})}return n})(),qt=(()=>{class n{viewContainer=s(Oe);elementRef=s(B);constructor(){let e=s(ie);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),Kt=(()=>{class n{viewContainer=s(Oe);elementRef=s(B);constructor(){let e=s(ie);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),$t=(()=>{class n{viewContainer=s(Oe);elementRef=s(B);constructor(){let e=s(ie);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),Yt=(()=>{class n{_differs=s(Pe);_changeDetectorRef=s(ee);_elementRef=s(B);_dir=s(ye,{optional:!0});_platform=s(at);_viewRepeater;_viewportRuler=s(ot);_injector=s(G);_virtualScrollViewport=s(Ti,{optional:!0,host:!0});_positionListener=s(Ye,{optional:!0})||s(Ye,{optional:!0,skipSelf:!0});_document=s(Ge);_data;_renderedRange;_onDestroy=new v;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new v;_footerRowStickyUpdates=new v;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new v;_dataStream=new v;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new H;viewChange=new Se({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){s(new nt("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(V(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new Ei:new _t,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),qe(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,o,r)=>this._getEmbeddedViewArgs(i.item,r),i=>i.item.data,i=>{i.operation===Le.INSERTED&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{let o=t.get(i.currentIndex);o.context.$implicit=i.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=wn(this._headerRowOutlet,"thead");i&&(i.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=wn(this._footerRowOutlet,"tfoot");i&&(i.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,r)=>{this._addStickyColumnStyles([o],this._headerRowDefs[r])}),this._rowDefs.forEach(o=>{let r=[];for(let c=0;c<t.length;c++)this._renderRows[c].rowDef===o&&r.push(t[c]);this._addStickyColumnStyles(r,o)}),i.forEach((o,r)=>{this._addStickyColumnStyles([o],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<t;o++){let r=this._data[o],c=this._getRenderRowsForData(r,o,i.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let h=0;h<c.length;h++){let u=c[h],_=this._cachedRenderRowsMap.get(u.data);_.has(u.rowDef)?_.get(u.rowDef).push(u):_.set(u.rowDef,[u]),e.push(u)}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(r=>{let c=i&&i.has(r)?i.get(r):[];if(c.length){let h=c.shift();return h.dataIndex=t,h}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),vt(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=vt(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=vt(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=vt(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,c)=>{let h=!!c.getColumnsDiff();return r||h},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),t||i||o}_switchDataSource(e){this._data=[],qe(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;qe(this.dataSource)?e=this.dataSource.connect(this):pi(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Re(this.dataSource)),this._renderChangeSubscription=he([e,this.viewChange]).pipe(V(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(c=>{let h=this._columnDefsByName.get(c);return h}),o=i.map(c=>c.sticky),r=i.map(c=>c.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let o=e.viewContainer.get(i);t.push(o.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(o=>!o.when||o.when(t,e));else{let o=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;o&&i.push(o)}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,o={$implicit:e.data};return{templateRef:i.template,context:o,index:t}}_renderRow(e,t,i,o={}){let r=e.viewContainer.createEmbeddedView(t.template,o,i);return this._renderCellTemplateForItem(t,o),r}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))ke.mostRecentCellOutlet&&ke.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let r=e.get(t).context;r.count=i,r.first=t===0,r.last=t===i-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new Ht(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Re()).pipe(V(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?mi:hi;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(ui(0,t),V(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,o)=>this._measureRangeSize(i,o)}),he([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(V(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let c=o.elements[r];if(c){let h=o.offsets[r],u=i!==0?Math.max(i-h,h):-h;for(let _ of c)_.style.top=`${-u}px`}}}),he([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(V(this._onDestroy)).subscribe(([i,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let r=0;r<o.elements.length;r++){let c=o.elements[r];if(c)for(let h of c)h.style.bottom=`${i+o.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let o=i.createEmbeddedView(e.templateRef),r=o.rootNodes[0];if(o.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute("role","row"),r.classList.add(...e._contentClassNames);let c=r.querySelectorAll(e._cellSelector);for(let h=0;h<c.length;h++)c[h].classList.add(...e._cellClassNames)}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let i=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<i.start||e.end>i.end;let r=e.start-i.start,c=e.end-e.start,h,u;for(let P=0;P<c;P++){let L=o.get(P+r);if(L&&L.rootNodes.length){h=u=L.rootNodes[0];break}}for(let P=c-1;P>-1;P--){let L=o.get(P+r);if(L&&L.rootNodes.length){u=L.rootNodes[L.rootNodes.length-1];break}}let _=h?.getBoundingClientRect?.(),S=u?.getBoundingClientRect?.();return _&&S?S.bottom-_.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,i,o){if(t&1&&Ae(o,xt,5)(o,Ne,5)(o,wt,5)(o,Xe,5)(o,Ut,5),t&2){let r;D(r=k())&&(i._noDataRow=r.first),D(r=k())&&(i._contentColumnDefs=r),D(r=k())&&(i._contentRowDefs=r),D(r=k())&&(i._contentHeaderRowDefs=r),D(r=k())&&(i._contentFooterRowDefs=r)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,i){t&2&&U("cdk-table-fixed-layout",i.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",w],fixedLayout:[2,"fixedLayout","fixedLayout",w],recycleRows:[2,"recycleRows","recycleRows",w]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[N([{provide:ie,useExisting:n},{provide:Ye,useValue:null}])],ngContentSelectors:ca,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(le(sa),j(0),j(1,1),M(2,la,1,0),M(3,da,7,0)(4,ha,4,0)),t&2&&(m(2),I(i._isServer?2:-1),m(),I(i._isNativeHtmlTable?3:4))},dependencies:[qt,Wt,$t,Kt],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return n})();function vt(n,a){return n.concat(Array.from(a))}function wn(n,a){let e=a.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i==="TABLE")break;t=t.parentNode}return null}var Sn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=O({imports:[Fi]})}return n})();var Ze=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new v;constructor(a=!1,e,t=!0,i){this._multiple=a,this._emitChanges=t,this.compareWith=i,e&&e.length&&(a?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){this._verifyValueAssignment(a),a.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...a){this._verifyValueAssignment(a),a.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...a){this._verifyValueAssignment(a);let e=this.selected,t=new Set(a.map(o=>this._getConcreteValue(o)));a.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(a,t))return t;return a}else return a}};var pa=[[["caption"]],[["colgroup"],["col"]],"*"],ua=["caption","colgroup, col","*"];function fa(n,a){n&1&&j(0,2)}function ga(n,a){n&1&&(l(0,"thead",0),Q(1,1),d(),l(2,"tbody",2),Q(3,3)(4,4),d(),l(5,"tfoot",0),Q(6,5),d())}function _a(n,a){n&1&&Q(0,1)(1,3)(2,4)(3,5)}var Rn=(()=>{class n extends Yt{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(i){return(e||(e=z(n)))(i||n)}})();static \u0275cmp=y({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,i){t&2&&U("mat-table-fixed-layout",i.fixedLayout)},exportAs:["matTable"],features:[N([{provide:Yt,useExisting:n},{provide:ie,useExisting:n},{provide:Ye,useValue:null}]),b],ngContentSelectors:ua,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,i){t&1&&(le(pa),j(0),j(1,1),M(2,fa,1,0),M(3,ga,7,0)(4,_a,4,0)),t&2&&(m(2),I(i._isServer?2:-1),m(),I(i._isNativeHtmlTable?3:4))},dependencies:[qt,Wt,$t,Kt],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return n})(),Mn=(()=>{class n extends bt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=z(n)))(i||n)}})();static \u0275dir=f({type:n,selectors:[["","matCellDef",""]],features:[N([{provide:bt,useExisting:n}]),b]})}return n})(),In=(()=>{class n extends Ct{static \u0275fac=(()=>{let e;return function(i){return(e||(e=z(n)))(i||n)}})();static \u0275dir=f({type:n,selectors:[["","matHeaderCellDef",""]],features:[N([{provide:Ct,useExisting:n}]),b]})}return n})();var En=(()=>{class n extends Ne{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=z(n)))(i||n)}})();static \u0275dir=f({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[N([{provide:Ne,useExisting:n}]),b]})}return n})(),On=(()=>{class n extends Dn{static \u0275fac=(()=>{let e;return function(i){return(e||(e=z(n)))(i||n)}})();static \u0275dir=f({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[b]})}return n})();var Tn=(()=>{class n extends kn{static \u0275fac=(()=>{let e;return function(i){return(e||(e=z(n)))(i||n)}})();static \u0275dir=f({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[b]})}return n})();var An=(()=>{class n extends Xe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=z(n)))(i||n)}})();static \u0275dir=f({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",w]},features:[N([{provide:Xe,useExisting:n}]),b]})}return n})();var Fn=(()=>{class n extends wt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=z(n)))(i||n)}})();static \u0275dir=f({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[N([{provide:wt,useExisting:n}]),b]})}return n})(),Pn=(()=>{class n extends Gt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=z(n)))(i||n)}})();static \u0275cmp=y({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[N([{provide:Gt,useExisting:n}]),b],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&Q(0,0)},dependencies:[ke],encapsulation:2})}return n})();var Ln=(()=>{class n extends Qt{static \u0275fac=(()=>{let e;return function(i){return(e||(e=z(n)))(i||n)}})();static \u0275cmp=y({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[N([{provide:Qt,useExisting:n}]),b],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,i){t&1&&Q(0,0)},dependencies:[ke],encapsulation:2})}return n})(),Bn=(()=>{class n extends xt{_cellSelector="td, mat-cell, [mat-cell], .mat-cell";constructor(){super(),this._contentClassNames.push("mat-mdc-no-data-row","mat-mdc-row","mdc-data-table__row"),this._cellClassNames.push("mat-mdc-cell","mdc-data-table__cell","mat-no-data-cell")}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["ng-template","matNoDataRow",""]],features:[N([{provide:xt,useExisting:n}]),b]})}return n})();var zn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=O({imports:[Sn,K]})}return n})(),va=9007199254740991,Dt=class extends Pt{_data;_renderData=new Se([]);_filter=new Se("");_internalPageChanges=new v;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(a){a=Array.isArray(a)?a:[],this._data.next(a),this._renderChangesSubscription||this._filterData(a)}get filter(){return this._filter.value}set filter(a){this._filter.next(a),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(a){this._sort=a,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(a){this._paginator=a,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(a,e)=>{let t=a[e];if(Ii(t)){let i=Number(t);return i<va?i:t}return t};sortData=(a,e)=>{let t=e.active,i=e.direction;return!t||i==""?a:a.sort((o,r)=>{let c=this.sortingDataAccessor(o,t),h=this.sortingDataAccessor(r,t),u=typeof c,_=typeof h;u!==_&&(u==="number"&&(c+=""),_==="number"&&(h+=""));let S=0;return c!=null&&h!=null?c>h?S=1:c<h&&(S=-1):c!=null?S=1:h!=null&&(S=-1),S*(i=="asc"?1:-1)})};filterPredicate=(a,e)=>{let t=e.trim().toLowerCase();return Object.values(a).some(i=>`${i}`.toLowerCase().includes(t))};constructor(a=[]){super(),this._data=new Se(a),this._updateChangeSubscription()}_updateChangeSubscription(){let a=this._sort?se(this._sort.sortChange,this._sort.initialized):Re(null),e=this._paginator?se(this._paginator.page,this._internalPageChanges,this._paginator.initialized):Re(null),t=this._data,i=he([t,this._filter]).pipe(Ce(([c])=>this._filterData(c))),o=he([i,a]).pipe(Ce(([c])=>this._orderData(c))),r=he([o,e]).pipe(Ce(([c])=>this._pageData(c)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=r.subscribe(c=>this._renderData.next(c))}_filterData(a){return this.filteredData=this.filter==null||this.filter===""?a:a.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(a){return this.sort?this.sortData(a.slice(),this.sort):a}_pageData(a){if(!this.paginator)return a;let e=this.paginator.pageIndex*this.paginator.pageSize;return a.slice(e,e+this.paginator.pageSize)}_updatePaginator(a){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=a,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,i=Math.min(e.pageIndex,t);i!==e.pageIndex&&(e.pageIndex=i,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var wa=new R("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var Nn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=O({providers:[mt,{provide:wa,useValue:{separatorKeyCodes:[13]}}],imports:[ct,K]})}return n})();var Vn=(()=>{class n{_animationsDisabled=De();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,i){t&2&&U("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var xa=["text"],Da=[[["mat-icon"]],"*"],ka=["mat-icon","*"];function Sa(n,a){if(n&1&&F(0,"mat-pseudo-checkbox",1),n&2){let e=g();x("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Ra(n,a){if(n&1&&F(0,"mat-pseudo-checkbox",3),n&2){let e=g();x("disabled",e.disabled)}}function Ma(n,a){if(n&1&&(l(0,"span",4),p(1),d()),n&2){let e=g();m(),ae("(",e.group.label,")")}}var Zt=new R("MAT_OPTION_PARENT_COMPONENT"),Jt=new R("MatOptgroup");var Xt=class{source;isUserInput;constructor(a,e=!1){this.source=a,this.isUserInput=e}},He=(()=>{class n{_element=s(B);_changeDetectorRef=s(ee);_parent=s(Zt,{optional:!0});group=s(Jt,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(te).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Ee(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new H;_text;_stateChanges=new v;constructor(){let e=s(Bi);e.load(Wi),e.load(zi),this._signalDisableRipple=!!this._parent&&_i(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!oe(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Xt(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-option"]],viewQuery:function(t,i){if(t&1&&ne(xa,7),t&2){let o;D(o=k())&&(i._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,i){t&1&&C("click",function(){return i._selectViaInteraction()})("keydown",function(r){return i._handleKeydown(r)}),t&2&&(Te("id",i.id),E("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),U("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",w]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:ka,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,i){t&1&&(le(Da),M(0,Sa,1,2,"mat-pseudo-checkbox",1),j(1),l(2,"span",2,0),j(4,1),d(),M(5,Ra,1,1,"mat-pseudo-checkbox",3),M(6,Ma,2,1,"span",4),F(7,"div",5)),t&2&&(I(i.multiple?0:-1),m(5),I(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),m(),I(i.group&&i.group._inert?6:-1),m(),x("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[Vn,Qi],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function Hn(n,a,e){if(e.length){let t=a.toArray(),i=e.toArray(),o=0;for(let r=0;r<n+1;r++)t[r].group&&t[r].group===i[o]&&o++;return o}return 0}function jn(n,a,e,t){return n<e?n:n+a>e+t?Math.max(0,n-t+a):e}var Un=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=O({imports:[K]})}return n})();var ei=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=O({imports:[ct,Un,He,K]})}return n})();var Ta=["trigger"],Aa=["panel"],Fa=[[["mat-select-trigger"]],"*"],Pa=["mat-select-trigger","*"];function La(n,a){if(n&1&&(l(0,"span",4),p(1),d()),n&2){let e=g();m(),W(e.placeholder)}}function Ba(n,a){n&1&&j(0)}function za(n,a){if(n&1&&(l(0,"span",11),p(1),d()),n&2){let e=g(2);m(),W(e.triggerValue)}}function Na(n,a){if(n&1&&(l(0,"span",5),M(1,Ba,1,0)(2,za,2,1,"span",11),d()),n&2){let e=g();m(),I(e.customTrigger?1:2)}}function Va(n,a){if(n&1){let e=ce();l(0,"div",12,1),C("keydown",function(i){X(e);let o=g();return Z(o._handleKeydown(i))}),j(2,1),d()}if(n&2){let e=g();At(e.panelClass),U("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),E("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Ha=new R("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(G);return()=>on(n)}}),ja=new R("MAT_SELECT_CONFIG"),Ua=new R("MatSelectTrigger"),ti=class{source;value;constructor(a,e){this.source=a,this.value=e}},Wn=(()=>{class n{_viewportRuler=s(ot);_changeDetectorRef=s(ee);_elementRef=s(B);_dir=s(ye,{optional:!0});_idGenerator=s(te);_renderer=s(Qe);_parentFormField=s(en,{optional:!0});ngControl=s($i,{self:!0,optional:!0});_liveAnnouncer=s(Hi);_defaultOptions=s(ja,{optional:!0});_animationsDisabled=De();_popoverLocation;_initialized=new v;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,o=Hn(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&o===1?i.scrollTop=0:i.scrollTop=jn(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ti(this,e)}_scrollStrategyFactory=s(Ha);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new v;_errorStateTracker;stateChanges=new v;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Ee(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Ki.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Me(()=>{let e=this.options;return e?e.changes.pipe(we(e),Ot(()=>se(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ot(()=>this.optionSelectionChanges))});openedChange=new H;_openedStream=this.openedChange.pipe(me(e=>e),Ce(()=>{}));_closedStream=this.openedChange.pipe(me(e=>!e),Ce(()=>{}));selectionChange=new H;valueChange=new H;constructor(){let e=s(mt),t=s(Yi,{optional:!0}),i=s(Xi,{optional:!0}),o=s(new nt("tabindex"),{optional:!0}),r=s(ln,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Zi(e,this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Ze(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(V(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(V(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(we(null),V(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute("aria-labelledby",e):i.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(pe(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Lt(this._trackedModal,"aria-owns",t),Gi(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Lt(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,o=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&o&&!oe(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let c=this.selected;r.onKeydown(e);let h=this.selected;h&&c!==h&&this._liveAnnouncer.announce(h.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,o=i===40||i===38,r=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&t.activeItem&&!oe(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let c=this.options.some(h=>!h.disabled&&!h.selected);this.options.forEach(h=>{h.disabled||(c?h.select():h.deselect())})}else{let c=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==c&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!oe(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof zt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Ui(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=se(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(V(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),se(...this.options.map(t=>t._stateChanges)).pipe(V(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=Pi(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-select"]],contentQueries:function(t,i,o){if(t&1&&Ae(o,Ua,5)(o,He,5)(o,Jt,5),t&2){let r;D(r=k())&&(i.customTrigger=r.first),D(r=k())&&(i.options=r),D(r=k())&&(i.optionGroups=r)}},viewQuery:function(t,i){if(t&1&&ne(Ta,5)(Aa,5)(Nt,5),t&2){let o;D(o=k())&&(i.trigger=o.first),D(o=k())&&(i.panel=o.first),D(o=k())&&(i._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,i){t&1&&C("keydown",function(r){return i._handleKeydown(r)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),t&2&&(E("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),U("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",w],disableRipple:[2,"disableRipple","disableRipple",w],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:de(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",w],placeholder:"placeholder",required:[2,"required","required",w],multiple:[2,"multiple","multiple",w],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",w],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",de],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",w]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[N([{provide:Ji,useExisting:n},{provide:Zt,useExisting:n}]),fe],ngContentSelectors:Pa,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,i){if(t&1&&(le(Fa),l(0,"div",2,0),C("click",function(){return i.open()}),l(3,"div",3),M(4,La,2,1,"span",4)(5,Na,3,1,"span",5),d(),l(6,"div",6)(7,"div",7),ue(),l(8,"svg",8),F(9,"path",9),d()()()(),A(10,Va,3,16,"ng-template",10),C("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(r){return i._handleOverlayKeydown(r)})),t&2){let o=tt(1);m(3),E("id",i._valueId),m(),I(i.empty?4:5),m(6),x("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[zt,Nt],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var qn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=O({imports:[ze,ei,K,Ai,pn,ei]})}return n})();function Ga(n,a){if(n&1&&(l(0,"mat-option",17),p(1),d()),n&2){let e=a.$implicit;x("value",e),m(),ae(" ",e," ")}}function Qa(n,a){if(n&1){let e=ce();l(0,"mat-form-field",14)(1,"mat-select",16,0),C("selectionChange",function(i){X(e);let o=g(2);return Z(o._changePageSize(i.value))}),bi(3,Ga,2,2,"mat-option",17,yi),d(),l(5,"div",18),C("click",function(){X(e);let i=tt(2);return Z(i.open())}),d()()}if(n&2){let e=g(2);x("appearance",e._formFieldAppearance)("color",e.color),m(),x("value",e.pageSize)("disabled",e.disabled),vi("aria-labelledby",e._pageSizeLabelId),x("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),m(2),Ci(e._displayedPageSizeOptions)}}function Wa(n,a){if(n&1&&(l(0,"div",15),p(1),d()),n&2){let e=g(2);m(),W(e.pageSize)}}function qa(n,a){if(n&1&&(l(0,"div",3)(1,"div",13),p(2),d(),M(3,Qa,6,7,"mat-form-field",14),M(4,Wa,2,1,"div",15),d()),n&2){let e=g();m(),E("id",e._pageSizeLabelId),m(),ae(" ",e._intl.itemsPerPageLabel," "),m(),I(e._displayedPageSizeOptions.length>1?3:-1),m(),I(e._displayedPageSizeOptions.length<=1?4:-1)}}function Ka(n,a){if(n&1){let e=ce();l(0,"button",19),C("click",function(){X(e);let i=g();return Z(i._buttonClicked(0,i._previousButtonsDisabled()))}),ue(),l(1,"svg",8),F(2,"path",20),d()()}if(n&2){let e=g();x("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),E("aria-label",e._intl.firstPageLabel)}}function $a(n,a){if(n&1){let e=ce();l(0,"button",21),C("click",function(){X(e);let i=g();return Z(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),ue(),l(1,"svg",8),F(2,"path",22),d()()}if(n&2){let e=g();x("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),E("aria-label",e._intl.lastPageLabel)}}var Ya=(()=>{class n{changes=new v;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let o=e*t,r=o<i?Math.min(o+t,i):o+t;return`${o+1} \u2013 ${r} of ${i}`};static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Xa=50;var Za=new R("MAT_PAGINATOR_DEFAULT_OPTIONS"),Je=(()=>{class n{_intl=s(Ya);_changeDetectorRef=s(ee);_formFieldAppearance;_pageSizeLabelId=s(te).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new Ue(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>de(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new H;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=s(Za,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:o,hidePageSize:r,showFirstLastButtons:c}=t;i!=null&&(this._pageSize=i),o!=null&&(this._pageSizeOptions=o),r!=null&&(this.hidePageSize=r),c!=null&&(this.showFirstLastButtons=c)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Xa),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",de],length:[2,"length","length",de],pageSize:[2,"pageSize","pageSize",de],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",w],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",w],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",w]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){t&1&&(l(0,"div",1)(1,"div",2),M(2,qa,5,4,"div",3),l(3,"div",4)(4,"div",5),p(5),d(),M(6,Ka,3,5,"button",6),l(7,"button",7),C("click",function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),ue(),l(8,"svg",8),F(9,"path",9),d()(),fi(),l(10,"button",10),C("click",function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),ue(),l(11,"svg",8),F(12,"path",11),d()(),M(13,$a,3,5,"button",12),d()()()),t&2&&(m(2),I(i.hidePageSize?-1:2),m(3),ae(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),m(),I(i.showFirstLastButtons?6:-1),m(),x("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("disabled",i._previousButtonsDisabled())("tabindex",i._previousButtonsDisabled()?-1:null),E("aria-label",i._intl.previousPageLabel),m(3),x("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("disabled",i._nextButtonsDisabled())("tabindex",i._nextButtonsDisabled()?-1:null),E("aria-label",i._intl.nextPageLabel),m(3),I(i.showFirstLastButtons?13:-1))},dependencies:[tn,Wn,He,st,ft],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return n})(),Kn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=O({imports:[Be,qn,gt,Je]})}return n})();function eo(n,a){}var be=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var ni=(()=>{class n extends an{_elementRef=s(B);_focusTrapFactory=s(Vi);_config;_interactivityChecker=s(Ni);_ngZone=s(Tt);_focusMonitor=s(Li);_renderer=s(Qe);_changeDetectorRef=s(ee);_injector=s(G);_platform=s(at);_document=s(Ge);_portalOutlet;_focusTrapped=new v;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=s(be,{optional:!0})||new be,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{o(),r(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",i),r=this._renderer.listen(e,"mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||ge(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let i=rt(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=rt();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=rt()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=y({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,i){if(t&1&&ne(Ke,7),t&2){let o;D(o=k())&&(i._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,i){t&2&&E("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[b],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,i){t&1&&A(0,eo,0,0,"ng-template",0)},dependencies:[Ke],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),et=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new v;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!oe(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",e=""){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}},to=new R("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=s(G);return()=>pt(n)}}),io=new R("DialogData"),no=new R("DefaultDialogConfig");function ao(n){let a=Ee(n),e=new H;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var ai=(()=>{class n{_injector=s(G);_defaultOptions=s(no,{optional:!0});_parentDialog=s(n,{optional:!0,skipSelf:!0});_overlayContainer=s(sn);_idGenerator=s(te);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new v;_afterOpenedAtThisLevel=new v;_ariaHiddenElements=new Map;_scrollStrategy=s(to);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Me(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(we(void 0)));constructor(){}open(e,t){let i=this._defaultOptions||new be;t=re(re({},i),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let o=this._getOverlayConfig(t),r=dn(this._injector,o),c=new et(r,t),h=this._attachContainer(r,c,t);if(c.containerInstance=h,!this.openDialogs.length){let u=this._overlayContainer.getContainerElement();h._focusTrapped?h._focusTrapped.pipe(pe(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(u)}):this._hideNonDialogContentFromAssistiveTechnology(u)}return this._attachDialogContent(e,c,h,t),this.openDialogs.push(c),c.closed.subscribe(()=>this._removeOpenDialog(c,!0)),this.afterOpened.next(c),c}closeAll(){ii(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){ii(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),ii(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new rn({positionStrategy:e.positionStrategy||ut().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let o=i.injector||i.viewContainerRef?.injector,r=[{provide:be,useValue:i},{provide:et,useValue:t},{provide:cn,useValue:e}],c;i.container?typeof i.container=="function"?c=i.container:(c=i.container.type,r.push(...i.container.providers(i))):c=ni;let h=new Bt(c,i.viewContainerRef,G.create({parent:o||this._injector,providers:r}));return e.attach(h).instance}_attachDialogContent(e,t,i,o){if(e instanceof J){let r=this._createInjector(o,t,i,void 0),c={$implicit:o.data,dialogRef:t};o.templateContext&&(c=re(re({},c),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),i.attachTemplatePortal(new nn(e,null,c,r))}else{let r=this._createInjector(o,t,i,this._injector),c=i.attachComponentPortal(new Bt(e,o.viewContainerRef,r));t.componentRef=c,t.componentInstance=c.instance}}_createInjector(e,t,i,o){let r=e.injector||e.viewContainerRef?.injector,c=[{provide:io,useValue:e.data},{provide:et,useValue:t}];return e.providers&&(typeof e.providers=="function"?c.push(...e.providers(t,e,i)):c.push(...e.providers)),e.direction&&(!r||!r.get(ye,null,{optional:!0}))&&c.push({provide:ye,useValue:ao(e.direction)}),G.create({parent:r||o,providers:c})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,r)=>{o?r.setAttribute("aria-hidden",o):r.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let o=t[i];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function ii(n,a){let e=n.length;for(;e--;)a(n[e])}var $n=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=O({providers:[ai],imports:[ze,$e,ji,$e]})}return n})();function oo(n,a){}var Mt=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},oi="mdc-dialog--open",Yn="mdc-dialog--opening",Xn="mdc-dialog--closing",ro=150,so=75,co=(()=>{class n extends ni{_animationStateChanged=new H;_animationsEnabled=!De();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?Jn(this._config.enterAnimationDuration)??ro:0;_exitAnimationDuration=this._animationsEnabled?Jn(this._config.exitAnimationDuration)??so:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(Zn,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Yn,oi)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(oi),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(oi),this._animationsEnabled?(this._hostElement.style.setProperty(Zn,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Xn)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Yn,Xn)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(i){return(e||(e=z(n)))(i||n)}})();static \u0275cmp=y({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,i){t&2&&(Te("id",i._config.id),E("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),U("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},features:[b],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(l(0,"div",0)(1,"div",1),A(2,oo,0,0,"ng-template",2),d()())},dependencies:[Ke],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),Zn="--mat-dialog-transition-duration";function Jn(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?Ft(n.substring(0,n.length-2)):n.endsWith("s")?Ft(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var Rt=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})(Rt||{}),je=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Ue(1);_beforeClosed=new Ue(1);_result;_closeFallbackTimeout;_state=Rt.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(me(i=>i.state==="opened"),pe(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(me(i=>i.state==="closed"),pe(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),se(this.backdropClick(),this.keydownEvents().pipe(me(i=>i.keyCode===27&&!this.disableClose&&!oe(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),lo(this,i.type==="keydown"?"keyboard":"mouse"))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(me(t=>t.state==="closing"),pe(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Rt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",e=""){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=Rt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function lo(n,a,e){return n._closeInteractionType=a,n.close(e)}var ri=new R("MatMdcDialogData"),ho=new R("mat-mdc-dialog-default-options"),mo=new R("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(G);return()=>pt(n)}}),It=(()=>{class n{_defaultOptions=s(ho,{optional:!0});_scrollStrategy=s(mo);_parentDialog=s(n,{optional:!0,skipSelf:!0});_idGenerator=s(te);_injector=s(G);_dialog=s(ai);_animationsDisabled=De();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new v;_afterOpenedAtThisLevel=new v;dialogConfigClass=Mt;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Me(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(we(void 0)));constructor(){this._dialogRefConstructor=je,this._dialogContainerType=co,this._dialogDataToken=ri}open(e,t){let i;t=re(re({},this._defaultOptions||new Mt),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,di(re({},t),{positionStrategy:ut(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:be,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(r,c,h)=>(i=new this._dialogRefConstructor(r,t,h),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:h},{provide:this._dialogDataToken,useValue:c.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let r=this.openDialogs.indexOf(i);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ie({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ea=(()=>{class n{_dialogRef=s(je,{optional:!0});_elementRef=s(B);_dialog=s(It);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=po(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n})}return n})(),ta=(()=>{class n extends ea{id=s(te).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=z(n)))(i||n)}})();static \u0275dir=f({type:n,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,i){t&2&&Te("id",i.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[b]})}return n})(),ia=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=f({type:n,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[gi([Oi])]})}return n})(),na=(()=>{class n extends ea{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=z(n)))(i||n)}})();static \u0275dir=f({type:n,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,i){t&2&&U("mat-mdc-dialog-actions-align-start",i.align==="start")("mat-mdc-dialog-actions-align-center",i.align==="center")("mat-mdc-dialog-actions-align-end",i.align==="end")},inputs:{align:"align"},features:[b]})}return n})();function po(n,a){let e=n.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var aa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=T({type:n});static \u0275inj=O({providers:[It],imports:[$n,ze,$e,K]})}return n})();var Et=class n{constructor(a,e){this.dialogRef=a;this.data=e}onCancel(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}static \u0275fac=function(e){return new(e||n)(xe(je),xe(ri))};static \u0275cmp=y({type:n,selectors:[["app-confirm-delete-dialog"]],decls:24,vars:2,consts:[[1,"dialog-container"],[1,"dialog-header"],[1,"warning-icon"],["mat-dialog-title",""],["mat-dialog-content",""],[1,"confirmation-message"],[1,"user-email"],[1,"warning-text"],["mat-dialog-actions","","align","end"],["mat-button","",3,"click"],["mat-raised-button","","color","warn",1,"delete-button",3,"click"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"div",1)(2,"mat-icon",2),p(3,"warning"),d(),l(4,"h2",3),p(5,"Confirmar Exclus\xE3o"),d()(),l(6,"div",4)(7,"p",5),p(8," Tem certeza que deseja excluir o usu\xE1rio "),l(9,"strong"),p(10),d(),p(11,"? "),d(),l(12,"p",6)(13,"small"),p(14),d()(),l(15,"p",7),p(16," Esta a\xE7\xE3o n\xE3o pode ser desfeita. "),d()(),l(17,"div",8)(18,"button",9),C("click",function(){return t.onCancel()}),p(19,"Cancelar"),d(),l(20,"button",10),C("click",function(){return t.onConfirm()}),l(21,"mat-icon"),p(22,"delete"),d(),p(23," Excluir "),d()()()),e&2&&(m(10),W(t.data.userName),m(4),W(t.data.userEmail))},dependencies:[aa,ta,na,ia,Be,lt,ht,dt],styles:[".dialog-container[_ngcontent-%COMP%]{padding:20px;max-width:400px}.dialog-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:16px}.warning-icon[_ngcontent-%COMP%]{color:#f44336;font-size:24px;width:24px;height:24px}.dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:20px;font-weight:600;color:#333}.confirmation-message[_ngcontent-%COMP%]{margin:16px 0;font-size:16px;line-height:1.5}.user-email[_ngcontent-%COMP%]{margin:8px 0;color:#666}.warning-text[_ngcontent-%COMP%]{margin:16px 0;color:#f44336;font-weight:500;font-size:14px}mat-dialog-actions[_ngcontent-%COMP%]{padding-top:20px;gap:8px}.delete-button[_ngcontent-%COMP%]{background-color:#f44336!important;color:#fff!important}.delete-button[_ngcontent-%COMP%]:hover{background-color:#d32f2f!important}.delete-button[_ngcontent-%COMP%]:focus{background-color:#d32f2f!important}"]})};var _o=()=>[3,7,10];function vo(n,a){n&1&&(l(0,"div",12),F(1,"mat-spinner"),l(2,"p"),p(3,"Carregando usu\xE1rios..."),d()())}function yo(n,a){if(n&1){let e=ce();l(0,"div",13)(1,"mat-icon",14),p(2,"error"),d(),l(3,"div",15)(4,"p",16),p(5,"Ocorreu um erro ao carregar os usu\xE1rios"),d(),l(6,"p",17),p(7,"N\xE3o foi poss\xEDvel carregar a lista de usu\xE1rios no momento. Tente novamente mais tarde."),d(),l(8,"button",18),C("click",function(){X(e);let i=g();return Z(i.onRetry())}),l(9,"mat-icon"),p(10,"refresh"),d(),p(11," Tentar novamente "),d()()()}}function bo(n,a){n&1&&(l(0,"th",32),p(1,"Nome"),d())}function Co(n,a){if(n&1&&(l(0,"td",33)(1,"div",34)(2,"div",35),p(3),d(),l(4,"div",36)(5,"span",37),p(6),d(),l(7,"span",38),p(8),d()()()()),n&2){let e=a.$implicit,t=g(2);m(2),it("background",t.getAvatarColor(e.name)),m(),ae(" ",t.getInitials(e.name)," "),m(3),W(e.name),m(2),W(e.email)}}function wo(n,a){n&1&&(l(0,"th",32),p(1,"Telefone"),d())}function xo(n,a){if(n&1&&(l(0,"td",33)(1,"span",39),p(2),d()()),n&2){let e=a.$implicit,t=g(2);m(2),W(t.formatPhone(e.phone))}}function Do(n,a){n&1&&(l(0,"th",32),p(1,"CPF/CNPJ"),d())}function ko(n,a){if(n&1&&(l(0,"td",33)(1,"span",40),p(2),d()()),n&2){let e=a.$implicit,t=g(2);m(2),W(t.formatDocument(e.document,e.docType))}}function So(n,a){n&1&&(l(0,"th",32),p(1,"Ultima Atualiza\xE7\xE3o"),d())}function Ro(n,a){if(n&1&&(l(0,"td",33)(1,"span",41),p(2),Fe(3,"date"),d()()),n&2){let e=a.$implicit;m(2),W(xi(3,1,e.updatedAt||e.createdAt,"dd/MM/yyyy"))}}function Mo(n,a){n&1&&F(0,"th",32)}function Io(n,a){if(n&1){let e=ce();l(0,"td",42)(1,"button",43),C("click",function(){let i=X(e).$implicit,o=g(2);return Z(o.onEdit(i))}),l(2,"mat-icon"),p(3,"edit"),d()(),l(4,"button",44),C("click",function(){let i=X(e).$implicit,o=g(2);return Z(o.onDelete(i))}),l(5,"mat-icon"),p(6,"delete"),d()()()}}function Eo(n,a){n&1&&F(0,"tr",45)}function Oo(n,a){n&1&&F(0,"tr",46)}function To(n,a){if(n&1&&(l(0,"tr",47)(1,"td",48)(2,"mat-icon"),p(3,"group_off"),d(),l(4,"p"),p(5,"Nenhum usu\xE1rio encontrado"),d()()()),n&2){let e=g(2);m(),E("colspan",e.displayedColumns.length)}}function Ao(n,a){if(n&1&&(l(0,"div",19)(1,"table",20),_e(2,21),A(3,bo,2,0,"th",22)(4,Co,9,5,"td",23),ve(),_e(5,24),A(6,wo,2,0,"th",22)(7,xo,3,1,"td",23),ve(),_e(8,25),A(9,Do,2,0,"th",22)(10,ko,3,1,"td",23),ve(),_e(11,26),A(12,So,2,0,"th",22)(13,Ro,4,4,"td",23),ve(),_e(14,27),A(15,Mo,1,0,"th",22)(16,Io,7,0,"td",28),ve(),A(17,Eo,1,0,"tr",29)(18,Oo,1,0,"tr",30)(19,To,6,1,"tr",31),d()()),n&2){let e=g();m(),x("dataSource",e.dataSource),m(16),x("matHeaderRowDef",e.displayedColumns),m(),x("matRowDefColumns",e.displayedColumns)}}var ra=class n{constructor(a,e,t){this.router=a;this.store=e;this.dialog=t;this.users$=this.store.select(_n),this.loading$=this.store.select(vn),this.error$=this.store.select(yn)}displayedColumns=["name","phone","document","date","actions"];users$;loading$;error$;dataSource;pageSize=3;pageIndex=0;paginator;avatarColors=["#5C6BC0","#42A5F5","#26A69A","#66BB6A","#FFA726","#EF5350","#AB47BC","#EC407A"];destroy$=new v;ngOnInit(){this.users$.pipe(V(this.destroy$)).subscribe(a=>{a&&(this.dataSource=new Dt(a),a.length===0&&this.store.dispatch(Vt()),this.paginator&&(this.dataSource.paginator=this.paginator))})}ngAfterViewInit(){this.dataSource&&this.paginator&&(this.dataSource.paginator=this.paginator)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onAddUser(){this.router.navigate(["new"])}onEdit(a){this.router.navigate([a.id])}onPageChange(a){this.pageIndex=a.pageIndex,this.pageSize=a.pageSize}onRetry(){this.store.dispatch(Vt())}getInitials(a){return a.split(" ").slice(0,2).map(e=>e[0]).join("").toUpperCase()}getAvatarColor(a){let e=a.charCodeAt(0)%this.avatarColors.length;return this.avatarColors[e]}formatPhone(a){if(!a)return"";let e=a.replace(/\D/g,"");return e.length===11?e.replace(/(\d{2})(\d{5})(\d{4})/,"($1) $2-$3"):e.length===10?e.replace(/(\d{2})(\d{4})(\d{4})/,"($1) $2-$3"):a}formatDocument(a,e){if(!a)return"";let t=a.replace(/\D/g,"");return t.length===11?t.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4"):t.length===14?t.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3/$4-$5"):a}onDelete(a){this.dialog.open(Et,{data:{userName:a.name,userEmail:a.email},width:"400px"}).afterClosed().subscribe(t=>{t&&this.store.dispatch(bn({id:a.id}))})}static \u0275fac=function(e){return new(e||n)(xe(Mi),xe(gn),xe(It))};static \u0275cmp=y({type:n,selectors:[["app-list-users"]],viewQuery:function(e,t){if(e&1&&ne(Je,5),e&2){let i;D(i=k())&&(t.paginator=i.first)}},decls:22,vars:16,consts:[[1,"page-wrapper"],[1,"content-card"],[1,"card-header"],[1,"header-left"],[1,"header-eyebrow"],[1,"header-title"],[1,"header-actions"],["mat-fab","","extended","","color","primary",1,"add-btn",3,"click"],["class","loading-container",4,"ngIf"],["class","error-container",4,"ngIf"],["class","table-wrapper",4,"ngIf"],["showFirstLastButtons","","aria-label","Selecionar p\xE1gina",3,"page","pageSize","pageSizeOptions","length","pageIndex"],[1,"loading-container"],[1,"error-container"],[1,"error-icon"],[1,"error-content"],[1,"error-title"],[1,"error-message"],["mat-raised-button","","color","primary",3,"click"],[1,"table-wrapper"],["mat-table","",1,"users-table",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","phone"],["matColumnDef","document"],["matColumnDef","date"],["matColumnDef","actions"],["mat-cell","","class","actions-cell",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","table-row",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell",""],["mat-cell",""],[1,"user-cell"],[1,"avatar"],[1,"user-info"],[1,"user-name"],[1,"user-email"],[1,"user-phone"],[1,"user-document"],[1,"user-date"],["mat-cell","",1,"actions-cell"],["mat-icon-button","","matTooltip","Editar usu\xE1rio",1,"edit-btn",3,"click"],["mat-icon-button","","matTooltip","Excluir usu\xE1rio",1,"delete-btn",3,"click"],["mat-header-row",""],["mat-row","",1,"table-row"],[1,"mat-row"],[1,"mat-cell","empty-state"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),p(5,"Listagem de"),d(),l(6,"h1",5),p(7,"Usu\xE1rios"),d()(),l(8,"div",6)(9,"button",7),C("click",function(){return t.onAddUser()}),l(10,"mat-icon"),p(11,"add"),d(),p(12," Novo Usu\xE1rio "),d()()(),F(13,"mat-divider"),A(14,vo,4,0,"div",8),Fe(15,"async"),A(16,yo,12,0,"div",9),Fe(17,"async"),A(18,Ao,20,3,"div",10),Fe(19,"async"),Fe(20,"async"),l(21,"mat-paginator",11),C("page",function(o){return t.onPageChange(o)}),d()()()),e&2&&(m(14),x("ngIf",We(15,7,t.loading$)),m(2),x("ngIf",We(17,9,t.error$)),m(2),x("ngIf",!We(19,11,t.loading$)&&!We(20,13,t.error$)),m(3),x("pageSize",t.pageSize)("pageSizeOptions",wi(15,_o))("length",t.dataSource.data.length)("pageIndex",t.pageIndex))},dependencies:[Ri,Di,zn,Rn,In,An,En,Mn,Fn,On,Tn,Pn,Ln,Bn,Be,lt,st,qi,ht,dt,Nn,gt,ft,mn,hn,Kn,Je,fn,un,ki,Si],styles:[".add-btn[_ngcontent-%COMP%]{border-radius:12px!important;font-weight:600!important;letter-spacing:.01em!important;height:44px!important;padding:0 20px!important;box-shadow:0 2px 8px #1976d24d!important}.header-actions[_ngcontent-%COMP%]{display:flex;gap:12px;align-items:center}.table-wrapper[_ngcontent-%COMP%]{overflow-x:auto}.users-table[_ngcontent-%COMP%]{width:100%;background:transparent}.users-table[_ngcontent-%COMP%]   .mat-mdc-header-row[_ngcontent-%COMP%]{background:#fafafa}.users-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#9e9e9e;border-bottom-color:#f0f0f0;padding:0 16px}.users-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]:first-of-type{padding-left:32px}.users-table[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]:last-of-type{padding-right:32px}.users-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{border-bottom-color:#f5f5f5;padding:0 16px}.users-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]:first-of-type{padding-left:32px}.users-table[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]:last-of-type{padding-right:32px}.users-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{height:68px;transition:background .15s ease}.users-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover{background:#fafafa}.users-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover   .edit-btn[_ngcontent-%COMP%], .users-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover   .delete-btn[_ngcontent-%COMP%]{opacity:1}.users-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:last-child   .mat-mdc-cell[_ngcontent-%COMP%]{border-bottom:none}.user-cell[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px}.avatar[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#fff;flex-shrink:0;letter-spacing:.03em}.user-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.user-name[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#1a1a1a}.user-email[_ngcontent-%COMP%]{font-size:12px;color:#9e9e9e}.actions-cell[_ngcontent-%COMP%]{text-align:right}.edit-btn[_ngcontent-%COMP%]{opacity:0;transition:opacity .15s ease,color .15s ease;color:#9e9e9e!important}.edit-btn[_ngcontent-%COMP%]:hover{color:#1976d2!important}.delete-btn[_ngcontent-%COMP%]{opacity:0;transition:opacity .15s ease,color .15s ease;color:#9e9e9e!important}.delete-btn[_ngcontent-%COMP%]:hover{color:#d32f2f!important}.error-container[_ngcontent-%COMP%]{text-align:center;padding:64px 24px!important;color:#bdbdbd}.error-container[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%]{max-width:400px;margin:0 auto}.error-container[_ngcontent-%COMP%]   .error-title[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#d32f2f;margin:0 0 16px}.error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{font-size:14px;color:#666;margin:0 0 24px;line-height:1.5}.error-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;margin-bottom:16px;color:#d32f2f}.error-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:16px}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:64px 24px!important;color:#bdbdbd}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:12px 0 0;font-size:14px}.loading-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:64px 24px!important;color:#bdbdbd}.loading-container[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin-bottom:16px}.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:12px 0 0;font-size:14px}"]})};export{ra as ListUsers};

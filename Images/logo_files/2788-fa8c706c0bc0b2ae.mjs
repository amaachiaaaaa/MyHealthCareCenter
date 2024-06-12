"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2788],{552341:(e,s,t)=>{t.d(s,{Z:()=>r});var a=t(149722);let r=()=>{let e=(0,a.Z)(),s=!!e.isAuth&&e.isPartner;return s}},354500:(e,s,t)=>{t.d(s,{Oz:()=>a,mo:()=>n,nt:()=>i,v8:()=>r});let a={BUSINESS_ACCOUNT:"BUSINESS_ACCOUNT",BUSINESS_HIERARCHY:"BUSINESS_HIERARCHY",USER_ACCOUNT:"USER",AD_ACCOUNT:"AD_ACCOUNT",PROFILE:"PROFILE"},r="BUSINESS_PANEL",i="ASSET_PANEL",n=500},368552:(e,s,t)=>{t.d(s,{FE:()=>O,lG:()=>N,d9:()=>C});var a=t(667294),r=t(616550),i=t(552341),n=t(516018),u=t(340523),l=t(149722),c=t(953565);let o=()=>{let e=(0,l.Z)(),{checkExperiment:s}=(0,u.F)(),t=(0,i.Z)()&&s("web_m10n_business_reporting_business_entity_service").anyEnabled,[r,o]=(0,a.useState)({isReady:!1}),_=(0,a.useCallback)(async({entityId:e,actingBusinessId:s,favorites:a})=>{t&&(await (0,n.yo)({entityId:e,actingBusinessId:s,favorites:a}),o(e=>{let t={...e,actingBusinessId:s};return a&&(t.favoriteAdAccounts={favoriteAdAccountsMap:{...e.favoriteAdAccounts?.favoriteAdAccountsMap||{},[a.actingBusinessId]:{advertiserId:a.adAccounts}}}),t}))},[t]);return(0,a.useEffect)(()=>{t&&e.isAuth&&!r.isReady&&(async()=>{let s=!1;try{let s=await (0,n.SF)({entityId:e.id});o(e=>({...e,...s}))}catch{s=!0}finally{(0,c.nP)("globalAccountSwitcher.getFavoriteAdAccounts",{sampleRate:1,tags:{businessId:e.id,hasError:s}}),o(e=>({...e,isReady:!0}))}})()},[r.isReady,t,e]),{accountSwitcherConfig:r,setConfig:_}};var _=t(354500),d=t(214877),E=t(342513),A=t(96157),p=t(624797),g=t(938927),S=t(441354),m=t(785893);let{Provider:I,useHook:C}=(0,E.Z)("AccountSwitcherContext"),N=e=>e.search&&(0,p.mB)(e.search).advertiserId,O=({children:e})=>{let{checkExperiment:s}=(0,u.F)(),{anyEnabled:t}=s("business_access_assets_and_history_api_v4_migration"),c=(0,r.TH)(),{params:{userBizId:E,businessHierarchyId:p,advertiserId:C,username:O}}=(0,r.$B)(),y=N(c),T=(0,l.Z)(),[b,R]=(0,a.useState)(""),[f,h]=(0,a.useState)(null),[D,P]=(0,a.useState)(!1),[U,w]=(0,a.useState)(null),L=new URLSearchParams(c.search),[v,$]=(0,a.useState)(L.has("actingBusinessId")?null:{id:T.id||"",name:T.fullName||"",img:T.imageMediumUrl||""}),[M,B]=(0,a.useState)(!1),G=(0,i.Z)(),{logContextEvent:k}=(0,d.v)(),{accountSwitcherConfig:H,setConfig:F}=o();(0,a.useEffect)(()=>{p?R(p):R("")},[p]);let Z=(0,a.useCallback)(async({id:e,username:s})=>{let t=await (0,n.bG)({user_id:e,username:s});t&&w({type:e?_.Oz.BUSINESS_ACCOUNT:_.Oz.PROFILE,id:e||t.id,name:t.full_name,img:t.image_medium_url,username:s}),B(!1)},[]),V=(0,S.rc)(O);(0,a.useEffect)(()=>{(0,A.cD)(c)&&U&&V!==O&&O===T.username&&(Z({username:T.username}),$({id:T.id||"",name:T.fullName||"",img:T.imageMediumUrl||""}),h({type:_.nt,id:T.id}))},[c,V,Z,U,O,T.fullName,T.id,T.imageMediumUrl,T.username]),(0,a.useEffect)(()=>{let e=async({businessId:e,assetId:s})=>{if(!e){B(!1);return}try{let a={asset:{name:""},type:"AD_ACCOUNT"};if(t&&T.isAuth){let{data:{data:e={[s]:a}}={}}=await (0,g.pI)({businessId:T.id,assetIds:[s],resourceType:"AD_ACCOUNT"})||{},{asset:t,type:r}=e[s]||a;w({id:s,name:t.name,img:"",type:r})}else{let{data:{data:{asset:t,type:a}}}=await (0,g.G2)({businessId:e,assetId:s,resourceType:"AD_ACCOUNT",includeAssetSummary:!0});w({id:s,name:t.name,img:"",type:a})}}catch{w({id:T.id||"",name:T.fullName||"",img:T.imageMediumUrl||"",type:_.Oz.BUSINESS_ACCOUNT})}B(!1)},s=async({id:e})=>{let s=await (0,n.p)({hierarchyId:e});w({id:e,name:s?.data?s.data.name:"",img:s?.data?s.data.img_medium_url:"",type:_.Oz.BUSINESS_HIERARCHY}),B(!1)};if(T.isAuth&&G){let t=U&&U.username&&U.username!==O;if((!U||t)&&!M){let t=(0,A.TI)(c)||(0,A.h3)(c),a=C||!!y&&!t;B(!0),p?s({id:p}):E?Z({id:E}):(0,A.cD)(c)&&O?Z({username:O}):a?e({businessId:T.id,assetId:C||y||""}):U&&U.id===T.id||(w({type:_.Oz.BUSINESS_ACCOUNT,id:T.id||"",name:T.fullName||"",img:T.imageMediumUrl||""}),B(!1))}}},[U,T,p,E,O,C,y,v,G,c,Z,M,t]);let z=(0,a.useMemo)(()=>({activePanel:f,selectedHierarchyId:b,switcherOpen:D,openAccountSwitcher:()=>{if(k({event_type:101,view_type:608,component:14346}),!f){if((0,A.TI)(c))h({type:_.v8});else{let e=new URLSearchParams(c.search),s=e.get("actingBusinessId");h({type:_.nt,id:s??v?.id})}}P(!0)},closeAccountSwitcher:()=>P(!1),openAssetPanel:e=>{h({type:_.nt,id:e})},closeAssetPanel:()=>{h({type:_.v8})},actingBusiness:v,selectedAccount:U,setSelectedAccount:w,setActingBusiness:$,accountSwitcherConfig:H,setConfig:F}),[f,b,D,v,U,H,F,k,c]);return(0,m.jsx)(I,{value:z,children:e})}},593882:(e,s,t)=>{t.d(s,{C:()=>S,H:()=>m});var a=t(667294),r=t(552341),i=t(354500),n=t(516018),u=t(29156),l=t(250304),c=t(24691),o=t(342513),_=t(107366),d=t(244413),E=t(149722),A=t(186966),p=t(785893);let{Provider:g,useHook:S}=(0,o.Z)("BusinessHierarchyContext"),m=({children:e})=>{let[s,t]=(0,a.useState)([]),[o,S]=(0,a.useState)(!1),[m,I]=(0,a.useState)(!1),[C,N]=(0,a.useState)({}),[O,y]=(0,a.useState)(null),[T,b]=(0,a.useState)([]),[R,f]=(0,a.useState)({}),h=(0,A.Z)(),D=(0,a.useRef)(h),P=(0,E.Z)(),U=(0,r.Z)(),w=(0,a.useRef)({}),L=(0,a.useCallback)((e,s)=>{let t;s===i.Oz.BUSINESS_HIERARCHY?t=(0,c.Z)(l.Q6.DASHBOARD,"","",e):s===i.Oz.BUSINESS_ACCOUNT&&(t=(0,c.Z)(l.Q6.DASHBOARD,e));let a=(0,d.Z)({site:"www",path:t});(0,u.Z)(a)},[]),v=(0,a.useCallback)(async e=>{if(!U)return[];if(I(!0),w.current[e])return I(!1),w.current[e];{let s=await (0,_.Z)({url:"ads/v4/business_access/business_hierarchies/",data:{search_by:["FULL_NAME","BUSINESS_ID"],search_value:e}}),{data:t}=s.resource_response,a=t&&t.map(e=>(e.children&&(e.children=e.children.map(e=>(e.user.entity_type=i.Oz.USER_ACCOUNT,e))),e))||[],r=/^\d+$/.test(e),u=RegExp(e.toLowerCase(),"g"),l=[];O||y(l=await D.current());let c=O??l,o=c.filter(s=>{if(r)return s.id.includes(e);let t=s.user.full_name.toLowerCase();return t.match(u)}).map(n.IT),d=[...a.map(e=>e.id),...o.map(e=>e.id)],E=r?(P.id||"").includes(e):(P.fullName||"").toLowerCase().match(u);return P.isAuth&&E&&d.push(P.id),w.current[e]=d,I(!1),d}},[U,D,P.id,P.fullName,P.isAuth,O]),{id:$="",username:M="",email:B="",fullName:G="",imageSmallUrl:k="",imageMediumUrl:H="",isAuth:F}=P,Z=async e=>{if((!F||!U||O)&&!e)return;S(!0);let s=[];try{let e=await (0,_.Z)({url:"ads/v4/business_access/business_hierarchies/"}),{data:a}=e.resource_response;s=a&&a.map(e=>(e.children&&(e.children=e.children.map(e=>(e.user.entity_type=i.Oz.USER_ACCOUNT,e))),e))||[],t(s)}catch{t([])}try{let e=[];O||(e=await D.current(),y(e));let t=O??e;b(t.map(n.IT)),f(t.reduce((e,s)=>(e[s.id]=s.business_roles||[],e),{})),N((0,n.WP)({id:$,username:M,email:B,fullName:G,imageSmallUrl:k,imageMediumUrl:H})),w.current[""]=[...s.map(e=>e.id),...t.map(n.IT).map(e=>e.id),$],S(!1)}catch{S(!1)}},V=(0,a.useCallback)(Z,[$,M,B,G,k,H,F,U,O]),z=(0,a.useCallback)(e=>s.some(s=>s.id===e||s.children.some(s=>s.id===e||s.user.id===e)),[s]),x=(0,a.useCallback)(e=>s.map(e=>"BUSINESS_HIERARCHY"===e.entity_type?e:null).find(s=>!!s&&s.children.some(s=>s.user.id===e)),[s]),Y=(0,a.useMemo)(()=>({businessHierarchies:[...C.id&&!z(C.id)?[C]:[],...s,...T.filter(e=>!z(e.id))],switchAccount:L,searchAccounts:v,loadingAccounts:o,isSearchingAccounts:m,fetchData:V,getParentHierarchyForIdIfExists:x,viewerRolesOfEachEmployer:R}),[s,L,v,T,o,m,C,V,z,x,R]);return(0,p.jsx)(g,{value:Y,children:e})}},516018:(e,s,t)=>{t.d(s,{IT:()=>o,SF:()=>p,Vq:()=>c,WP:()=>_,Yu:()=>A,bG:()=>E,p:()=>d,yo:()=>g});var a=t(216167),r=t(354500),i=t(107366),n=t(288673),u=t(562967),l=t(785893);let c=e=>({id:e.id,entity_type:r.Oz.BUSINESS_ACCOUNT,user:{id:e.user.id,entity_type:r.Oz.USER_ACCOUNT,username:e.user.username,email:e.user.email,full_name:e.user.full_name,image_small_url:e.user.image_small_url,image_medium_url:e.user.image_medium_url}}),o=e=>({id:e.id,entity_type:r.Oz.BUSINESS_ACCOUNT,requires_mfa_for_roles:e.requires_mfa_for_roles,user:{id:e.user.id,entity_type:r.Oz.USER_ACCOUNT,username:e.user.username,email:e.user.email,full_name:e.user.full_name,image_small_url:e.user.image_small_url,image_medium_url:e.user.image_medium_url}}),_=e=>({id:e.id,entity_type:r.Oz.BUSINESS_ACCOUNT,user:{id:e.id,entity_type:r.Oz.USER_ACCOUNT,username:e.username,email:e.email,full_name:e.fullName,image_small_url:e.imageSmallUrl,image_medium_url:e.imageMediumUrl}}),d=async({hierarchyId:e})=>{let s=await (0,i.Z)({url:`ads/v4/business_access/business_hierarchy/${e}/`});return s.resource_response},E=async({user_id:e,username:s})=>{if(!s&&!e)return null;let t=await a.Z.create("UserResource",{user_id:e,username:s}).callGet(),{resource_response:{data:r}}=t;return r},A=(0,l.jsx)("hr",{style:{borderTop:"1px solid #e9e9e9"}}),p=async({entityId:e})=>{let s=await (0,n.FO)([{entity_type:"BIZ_USER",entity_id:e,property_keys:["GLOBAL_ACCOUNT_SWITCHER_CONFIG"]}]),t=s[0];if(!(t&&t.properties))return{};let a=t.properties.GLOBAL_ACCOUNT_SWITCHER_CONFIG;return a},g=async({entityId:e,actingBusinessId:s,favorites:t})=>{let a={};(0,u.k)(s)||(a.actingBusinessId=s),t&&(a.favoriteAdAccounts={favoriteAdAccountsMap:{[t.actingBusinessId]:{advertiserId:t.adAccounts}}}),Object.keys(a).length>0&&await (0,n.RM)([{entity_type:"BIZ_USER",entity_id:e,properties:{GLOBAL_ACCOUNT_SWITCHER_CONFIG:a}}])}},850895:(e,s,t)=>{t.d(s,{Z:()=>i});var a=t(702497),r=t(139655);function i(e,s){let t="";if(e&&(t=e,s)){let i=(0,r.Z)(e,!0),n="/advertiser/",{hostname:u}=i;(null===u||u===a.KUo)&&(e.startsWith(a.auO)&&(e=e.replace(a.auO,"")),t=e.startsWith(n)?e:n+s+e)}return t}},24691:(e,s,t)=>{t.d(s,{Z:()=>i});let a="/business/business-manager/",r="/business/business-hierarchy/",i=(e,s,t,i)=>{switch(e){case"DASHBOARD":return i?`${r}${String(i)}/dashboard/`:`${a}${String(s)}/dashboard/`;case"PEOPLE":return`${a}${String(s)}/employees/`;case"PARTNERS":return`${a}${String(s)}/partners/`;case"AD_ACCOUNTS":return`${a}${String(s)}/ad-accounts/`;case"HISTORY":return`${a}${String(s)}/history/`;case"PEOPLE_DETAIL":return`${a}${String(s)}/employees/${String(t)}/details/`;case"PARTNERS_DETAIL":return`${a}${String(s)}/partners/${String(t)}/details/`;case"SHARED_PARTNERS_DETAIL":return`${a}${String(s)}/shared/${String(t)}/details/`;case"AD_ACCOUNTS_DETAIL":return`${a}${String(s)}/ad-accounts/${String(t)}/details/`;case"PENDING_AD_ACCOUNTS_DETAIL":return`${a}${String(s)}/ad-accounts/pending/${String(t)}/details/`;case"PEOPLE_INVITES":return`${a}${String(s)}/employees/invites/`;case"PEOPLE_PENDING_TAB":return`${a}${String(s)}/employees/pending/`;case"PARTNERS_PENDING_TAB":return`${a}${String(s)}/partners/pending/`;case"AD_ACCOUNTS_PENDING_TAB":return`${a}${String(s)}/ad-accounts/pending`;case"AD_ACCOUNTS_CEE_MIGRATION":return`${a}${String(s)}/ad-accounts/cee-migration`;case"PARTNERS_INVITE_PAGE":return`${a}${String(s)}/partners/invites/`;case"PARTNERS_REQUEST_PAGE":return`${a}${String(s)}/partners/requests/`;case"PROFILES":return`${a}${String(s)}/profiles/`;case"PROFILES_DETAIL":return`${a}${String(s)}/profiles/${String(t)}/details/`;case"BUSINESS_SECURITY":return`${a}${String(s)}/security/`;case"SUPPORT_TOOL":return`${a}${String(s)}/support/`;case"ASSET_GROUPS":return t?`${a}${String(s)}/asset-groups/?asset_group_id=${String(t)}`:`${a}${String(s)}/asset-groups/`;case"INVOICE_MANAGEMENT":return`${a}${String(s)}/invoice-management/`;case"BUSINESS_HIERARCHY":return`${r}${String(i)}/hierarchy/`;case"BUSINESS_HIERARCHY_BUSINESS_SECURITY":return`${r}${String(i)}/business_security/`;case"MANAGERS":return`${r}${String(i)}/managers/`;case"AUDIENCES":return`${a}${String(s)}/audiences/`;case"SHARED_TAGS":return`${a}${String(s)}/shared-tags/`;case"CATALOGS":return`${a}${String(s)}/catalogs/`;case"BRAND_SAFETY":return`${a}${String(s)}/brand-safety/`;default:return a}}},317540:(e,s,t)=>{t.d(s,{Z:()=>a});let a={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,F5:116,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}},203966:(e,s,t)=>{t.d(s,{$4:()=>U,AQ:()=>Y,ASPECT_RATIO_FORMAT_MAP:()=>H,Bj:()=>m,DB:()=>j,FH:()=>el,FM:()=>Q,G9:()=>B,GX:()=>g,Hy:()=>e_,JO:()=>L,Ke:()=>w,LM:()=>r,Lc:()=>eE,Lr:()=>eo,MN:()=>C,Mn:()=>ee,N8:()=>S,NB:()=>et,P0:()=>ea,P9:()=>eu,Pn:()=>N,S:()=>v,TK:()=>y,TZ:()=>h,UU:()=>_,Uw:()=>X,W_:()=>ec,XB:()=>l,Xy:()=>D,YM:()=>T,aD:()=>eA,aj:()=>Z,bA:()=>M,bo:()=>c,cH:()=>em,dS:()=>R,eZ:()=>A,fk:()=>ei,g1:()=>ed,gU:()=>o,i2:()=>d,iR:()=>G,jh:()=>ep,km:()=>E,lx:()=>$,mr:()=>K,mt:()=>x,n_:()=>F,np:()=>z,of:()=>a,q:()=>eS,qY:()=>b,qm:()=>en,rc:()=>J,ro:()=>eg,sD:()=>n,sG:()=>p,u1:()=>q,uR:()=>u,v5:()=>i,v9:()=>W,vk:()=>es,wj:()=>O,x1:()=>k,yC:()=>I,yI:()=>P,yX:()=>f,yb:()=>V,zr:()=>er});let a=880,r=340,i=380,n=510,u=40,l=20,c=4,o=474,_=134,d=96,E=800,A=186,p=40,g=10,S=48,m=88,I=183,C=130,N=24,O=400,y=50,T=8,b=8,R=5,f=20,h=29,D=5,P=20,U=P**2,w=100,L=500,v=800,$=500,M=40,B=100,G=5,k=["attempted","publishing","succeeded","uploading"],H={carousel:[{w:2,h:3},{w:3,h:4},{w:1,h:1}],single:[{w:2,h:3},{w:3,h:4},{w:1,h:1}],story:[{w:9,h:16}],storyFARPortrait:[{w:1,h:2},{w:9,h:16},{w:2,h:3},{w:3,h:4},{w:4,h:5},{w:1,h:1}],storyFARLandscape:[{w:2,h:1},{w:16,h:9},{w:3,h:2},{w:4,h:3},{w:5,h:4},{w:1,h:1}]},F=["tl","tc","tr","bl","bc","br"],Z=["left","center"],V=["top","center","bottom"],z=["none","uppercase"],x=["sm","md","lg"],Y=[1,.75],j=198,K=132,W=1,q=56,X=240,J="cubic-bezier(0.66, 0.025, 0.33, 0.975)",Q=1e3,ee=1500,es=2,et=3,ea=20,er=20,ei=2,en=["processing","publishing","saving"],eu=60.5,el=120.5,ec=1,eo=209715200,e_=2500,ed=3,eE="pin-builder-default-education-id",eA="pin-builder-default-tour-id",ep="pin-builder-editing-tour-id",eg="save_from_url",eS=["processing","edited","creating","saving","saved"],em=2048},749886:(e,s,t)=>{t.d(s,{Cc:()=>E,DL:()=>c,Gf:()=>g,LX:()=>r,Lc:()=>S,Ls:()=>A,Rf:()=>l,YL:()=>u,ap:()=>i,h8:()=>_,pE:()=>o,s5:()=>p,tQ:()=>d,yR:()=>n});var a=t(883119);let r={w:9,h:16},i=r.w/r.h,n=8,u=10,l=5e3,c=2e3;function o(e,s=1){return{x:(e??24)/5,y:(e??24)*(s-1)}}let _={COMMENT_REPLY_STICKER:"story_pin_comment_reply_block",GENERIC_STICKER:"story_pin_generic_interactive_sticker_block",HEADING:"story_pin_heading_block",IMAGE:"story_pin_image_block",INGREDIENT:"story_pin_ingredient_block",LINK:"story_pin_link_block",MENTION_STICKER:"story_pin_mention_sticker_block",MUSIC:"story_pin_music_block",PARAGRAPH:"story_pin_paragraph_block",PRODUCT_STICKER:"story_pin_product_sticker_block",SUPPLY:"story_pin_supply_block",VIDEO:"story_pin_video_block",VTO_MAKEUP_STICKER:"story_pin_virtual_try_on_makeup_sticker_block"},d=[_.IMAGE,_.VIDEO],E={alignment:1,hex_color:"#111111",highlight_color:"#FFFFFF",vertical_alignment:1,font:{default_size:28,id:"1",key:"Graphik-Regular.otf",letter_spacing:-.4,line_height:1.25,name:"Teaspoon",url:"https://s.pinimg.com/story_pins/fonts/Graphik-Regular.otf"},font_size:28},A=new a.Ry(1),p=new a.H3([A]),g=new a.H3([p]),S=e=>{let s=Math.floor(e||0),t=Math.floor(s/60),a=s-60*t,r=t<10?`${t}`:t,i=a<10?`0${a}`:a;return`${r}:${i}`}},193163:(e,s,t)=>{t.d(s,{T7:()=>i,Y_:()=>c,bl:()=>u,d9:()=>_,nx:()=>o,xt:()=>l});var a=t(5859),r=t(149722);function i(e,s,t,a){let r=t.toLowerCase().replace(/[.,\/#!?$%\^&\*+;:{}=\-_`~()\’'"]/g,"").trim().replace(/\s+/g,"-");return`/today/${s?"shop":0===e||2===e?"trending":1===e?"best":"article"}/${encodeURIComponent(r)}/${a}/`}let n={en:["US","GB","CA","IN","AU","ID"],es:["MX","PE","AR","CL","CO","ES","VE","UY","PY","EC","BO","CR","DO","SV","GT","HN","NI","PR","PA"],pt:["BR"],de:["DE","AT","CH"],fr:["FR"],id:["ID"],ja:["JP"],it:["IT"],sv:["SE"]};function u(){let e=(0,a.B)(),s=(0,r.Z)(),t=s.isAuth?s.country:e.country;if(void 0===e||void 0===e.locale)return!1;let i=e.locale.substring(0,2);return n[i]?.includes(t)}let l=(e,s,t)=>e||s||t||"",c=e=>"todayarticle"===e.type,o=e=>Array.isArray(e)&&e.length>0&&e.every(e=>"story"===e.type),_=(e,s)=>(e??1)/(s??1)},202593:(e,s,t)=>{t.d(s,{Z:()=>i});var a=t(850895),r=t(702497);function i({advertiser:e,isAdsSite:s,isAnalyticsSite:t,isTrendsSite:i,baseUrl:n,adsUrl:u,isQuickPromote:l,isShoppingCatalogs:c}){if(s&&!e&&!l)return"/";let o=n;return(s||t||i)&&!c?(u||(u=n),e?(o=(0,a.Z)(u,e.id),s||(o=r.auO+o)):o=s?u:r.auO+o):c?o=r.auO+(0,a.Z)(n,e?e.id:""):u||(o=r.auO+n),o}},186966:(e,s,t)=>{t.d(s,{Z:()=>r});var a=t(107366);function r(){return async()=>{let e=await (0,a.Z)({url:"/ads/v4/business_access/businesses/me/employers/"}),s=e.resource_response?e.resource_response.data:{data:[]};return await Promise.all(s&&s.data||[])}}},665407:(e,s,t)=>{t.d(s,{By:()=>i,di:()=>u,s8:()=>n});var a=t(250304),r=t(107366);let i=async({limit:e,sortBy:s="FULL_NAME",sortDirection:t="ASCENDING",searchBy:i="FULL_NAME",searchTerm:n="",startIndex:u=0})=>{let l=e&&e<a.xX?e:a.xX,c=await (0,r.Z)({url:"ads/v4/business_access/businesses/me/get_pinterest_support_businesses",data:{sort_by:s,sort_ascending:"ASCENDING"===t,search_by:i,search_value:n,start_index:u,page_size:l}});return c.resource_response},n=async e=>{let s=await (0,r.Z)({url:`ads/v4/business_access/businesses/${e}/get_pinterest_support_access`});return s.resource_response},u=async()=>{let e=await (0,r.Z)({url:"ads/v4/pinterest_support_managed_advertisers",data:{add_fields:"advertiser.owner_user()"}});return e.resource_response}},22077:(e,s,t)=>{t.d(s,{A6:()=>i,A9:()=>C,AJ:()=>A,BO:()=>R,Eb:()=>k,Eq:()=>f,F$:()=>r,H:()=>q,Ht:()=>O,Hv:()=>o,Iu:()=>M,Iv:()=>X,Ix:()=>F,KW:()=>V,LN:()=>y,Mj:()=>l,Mr:()=>n,NM:()=>a,Pc:()=>H,RX:()=>E,TL:()=>m,VI:()=>Y,ZA:()=>x,ZH:()=>P,Zg:()=>v,_7:()=>g,bH:()=>h,bn:()=>D,c:()=>c,dt:()=>T,eE:()=>u,eZ:()=>U,g:()=>B,gN:()=>j,he:()=>N,iE:()=>S,iQ:()=>L,jP:()=>G,kG:()=>p,kR:()=>_,kS:()=>z,lT:()=>K,nM:()=>b,oq:()=>d,oz:()=>$,rl:()=>Z,sC:()=>I,uE:()=>w,y6:()=>W});let a="/product-catalogs/",r="/business/catalogs/",i="/business/catalogs/data-sources/",n="/business/catalogs/product-groups/",u="/business/catalogs/diagnostics/",l="/business/catalogs/diagnosticsv2",c="/business/catalogs/trends",o="/business/catalogs/listings/",_="/business/catalogs/products/",d="/business/catalogs/pins/",E="/business/catalogs/bulk/",A="/business/catalogs/:catalog_id/data-sources/feed-debugger/",p="/business/catalogs/:catalog_id/data-sources/:feed_profile_id/",g="/business/catalogs/:catalog_id/data-sources/:feed_profile_id/detail",S="/business/catalogs/:catalog_id/data-sources/supplemental/:supplemental_feed_profile_id/",m="/business/catalogs/:catalog_id/data-sources/supplemental/:supplemental_feed_profile_id/detail",I="/business/catalogs/:catalog_id/data-sources/:feed_profile_id/workflows/:workflow_id/",C="/business/catalogs/:catalog_id/data-sources/supplemental/:supplemental_feed_profile_id/workflows/:workflow_id/",N="/business/catalogs/:catalog_id/data-sources/:feed_profile_id/workflows/:workflow_id/alert/:event_type_id",O="/business/catalogs/:catalog_id/data-sources/supplemental/:supplemental_feed_profile_id/workflows/:workflow_id/alert/:event_type_id",y="/business/catalogs/:catalog_id/data-sources/",T="/business/catalogs/:catalog_id/data-sources/api/detail",b="/business/catalogs/:catalog_id/data-sources/regions/",R="/business/catalogs/:catalog_id/data-sources/:feed_profile_id/trends/",f="/business/catalogs/:catalog_id/product-groups/edit/:product_group_id/",h="/business/catalogs/:catalog_id/product-groups/create/",D="/business/catalogs/:catalog_id/product-groups/:product_group_id/",P="/business/catalogs/:catalog_id/product-groups/bulk/",U="/business/catalogs/:catalog_id/product-groups/",w="/business/hub/content-manager/",L="/business/catalogs/:catalog_id/listings/",v="/business/catalogs/:catalog_id/products/",$="/business/catalogs/:catalog_id/diagnostics/",M="/business/catalogs/:catalog_id/diagnosticsv2/",B="/business/catalogs/:catalog_id/trends/",G="/business/catalogs/:catalog_id/pins/",k="/business/catalogs/:catalog_id/bulk/",H=[i,y],F=[n,U],Z=[u,$],V=[l,M],z=[c,R],x=[c,B],Y=[o,L],j=[_,v],K=[d,G],W=[E,k],q="/business/catalogs/product-listings/",X=[q,"/business/catalogs/:catalog_id/product-listings/"]},939341:(e,s,t)=>{t.d(s,{I:()=>S,a:()=>p});var a=t(667294),r=t(616550),i=t(516018),n=t(700280),u=t(342513),l=t(340523),c=t(149722),o=t(665407),_=t(130371);let d=()=>{let{checkExperiment:e}=(0,l.F)(),s=(0,c.Z)(),t=!!(s.isAuth&&s.isPartner&&e("web_m10n_pin_support_tool").anyEnabled),{state:r,receiveAdAccounts:i}=(0,_.Z)(t),{managedBusinessesMap:n,error:u,fetching:d}=r,E=!!u||n.size>0,A=(0,a.useCallback)(async()=>{let e=await (0,o.di)();i(e?.data??[])},[i]);return(0,a.useEffect)(()=>{E||d||A()},[A,E,d]),n};var E=t(785893);let{Provider:A,useMaybeHook:p}=(0,u.Z)("PinSupportToolContext"),g=()=>{let{search:e}=(0,r.TH)();return(0,a.useMemo)(()=>new URLSearchParams(e),[e])},S=({children:e,viewerAdvertiser:s})=>{let{checkExperiment:t}=(0,l.F)(),r=(0,c.Z)(),u=r.isAuth&&r.isPartner&&t("web_m10n_pin_support_tool").anyEnabled,{state:o,actions:p}=(0,_.Z)(u),S=d(),m=[...S.values()].map(e=>(0,i.Vq)(e)),{sterling_on_steroids_ldap:I}=(0,n.u)(),{activeAdAccount:C,headerVisible:N}=o,O=r.isAuth&&!!I,{changeClient:y,changeAdAccount:T,toggleHeaderVisibility:b}=p;(0,a.useEffect)(()=>{u&&(O&&!N&&b(!0),!O&&N&&b(!1))},[b,O,u,N]);let R=g(),f=R.get("managedClientId"),h=R.get("advertiserId"),D=h||s?.id;(0,a.useEffect)(()=>{f&&D?T(D,f):f&&y(f)},[y,T,f,D]);let P=S.get(C?.clientId||""),U=P?.managedAdAccounts||new Map,w=U.get(C?.adAccountId||""),L=[...S.values()];return(0,E.jsx)(A,{value:{managedBusinesses:L,managedBusinessAccounts:m,headerVisible:o.headerVisible,activeClient:P,activeAdAccount:w,viewerAdvertiser:s,changeClient:y,changeAdAccount:T,toggleHeaderVisibility:b},children:e})}},130371:(e,s,t)=>{t.d(s,{Z:()=>c});var a=t(667294),r=t(573810);let i=e=>{let s=e.map(e=>({id:e.business.id,ownedAndManagedAdAccounts:e.business.ad_account_count,user:e.business.pinterest_support_business,managedAdAccounts:e.advertisers.reduce((e,s)=>e.set(s.id,s),new Map)})),t=[...s].sort(({user:{username:e}},{user:{username:s}})=>e.localeCompare(s)),a=t.map(e=>{let s=e.managedAdAccounts.values(),t=[...s].sort(({name:e},{name:s})=>e.localeCompare(s));return e.managedAdAccounts=t.reduce((e,s)=>e.set(s.id,s),new Map),e}),r=a.reduce((e,s)=>e.set(s.id,s),new Map);return r},n={managedBusinessesMap:new Map,headerVisible:!1,activeAdAccount:{clientId:void 0,adAccountId:void 0},fetching:!1,error:!1},u=(e,s)=>{switch(s.type){case"LOAD_AD_ACCOUNTS":return{...e,managedBusinessesMap:s.payload.managedBusinesses};case"SET_ACTIVE_CLIENT":case"SET_ACTIVE_AD_ACCOUNT":return{...e,activeAdAccount:s.payload};case"TOGGLE_HEADER_VISIBILITY":return{...e,headerVisible:s.payload};default:return e}},l=({dispatch:e,isEnabled:s,state:t})=>{let{headerVisible:r}=t,i=(0,a.useCallback)(t=>{s&&e({type:"SET_ACTIVE_CLIENT",payload:{clientId:t,adAccountId:null}})},[s,e]),n=(0,a.useCallback)((t,a)=>{s&&e({type:"SET_ACTIVE_AD_ACCOUNT",payload:{adAccountId:t,clientId:a}})},[s,e]),u=(0,a.useCallback)(t=>{s&&e({type:"TOGGLE_HEADER_VISIBILITY",payload:t??!r})},[s,e,r]);return{changeClient:i,changeAdAccount:n,toggleHeaderVisibility:u}},c=e=>{let[s,t]=(0,a.useReducer)(u,n),c=l({dispatch:t,isEnabled:e,state:s}),{activeAdAccount:o}=s;(0,a.useEffect)(()=>{let e=JSON.parse((0,r.qn)("psToolAdAccount",!1));e&&t({type:"SET_ACTIVE_AD_ACCOUNT",payload:e})},[]),(0,a.useEffect)(()=>{(0,r.Nh)("psToolAdAccount",JSON.stringify(o))},[o]);let _=(0,a.useCallback)(e=>{let s=i(e);t({type:"LOAD_AD_ACCOUNTS",payload:{managedBusinesses:s}})},[t]);return{state:s,actions:c,receiveAdAccounts:_}}},441354:(e,s,t)=>{t.d(s,{XI:()=>r,YZ:()=>n,rc:()=>i,sU:()=>c});var a=t(667294);function r(e){let[s,t]=(0,a.useState)(!1),r=()=>t(!0),i=()=>t(!1);return(0,a.useEffect)(()=>{let{current:s}=e;return s&&(s.addEventListener("mouseenter",r),s.addEventListener("mouseleave",i)),()=>{s&&(s.removeEventListener("mouseenter",r),s.removeEventListener("mouseleave",i))}}),s}let i=e=>{let s=(0,a.useRef)(e);return(0,a.useEffect)(()=>{s.current=e}),s.current};function n(){let e=(0,a.useRef)(!0);return(0,a.useEffect)(()=>{e.current=!1},[]),e.current}function u(e,s){return Object.is(e,s)}let l=Symbol("pre-initial value");function c(e,{equal:s=u,delta:t}={equal:u}){let r=(0,a.useRef)(l),i=r.current;return(0,a.useEffect)(()=>{r.current=e}),{previousValue:i,changed:i===l||!s(i,e),delta:t?.(i,e)}}},983983:(e,s,t)=>{t.d(s,{L1:()=>i,Rz:()=>l,WZ:()=>n,cI:()=>r,fe:()=>u,hu:()=>a});let a=64,r=80,i=22,n="HeaderContent",u=671,l={boxShadow:"0px 8px 8px -8px rgba(0, 0, 0, 0.1)",transition:"box-shadow 300ms ease-in-out"}},520719:(e,s,t)=>{t.d(s,{$o:()=>u,GW:()=>a,Jo:()=>i,Li:()=>C,MS:()=>y,Q8:()=>g,VX:()=>A,Zo:()=>c,aD:()=>o,b2:()=>d,e_:()=>I,g2:()=>E,it:()=>N,kY:()=>m,oM:()=>O,qN:()=>n,s4:()=>l,tK:()=>S,ym:()=>_,zQ:()=>p});let a="/business/hub/?show_vmp=true",r=["FR"],i=["US","GB","CA","AU","DE","FR"].concat(["ES","IT","AT","CH","NL","BR","MX"]).filter(e=>!r.includes(e)),n={PROCESSING:"PROCESSING",FAILED:"FAILED",COMPLETED:"COMPLETED",DISAPPROVED:"DISAPPROVED",UNDER_REVIEW:"UNDER_REVIEW"},u={APPROVED:"approved",PENDING:"pending",DISAPPROVED:"declined",APPEAL_PENDING:"appeal_pending"},l=Object.freeze({APPLIED:"APPLIED",ACCEPTED:"ACCEPTED",NON_COMPLIANT:"NON_COMPLIANT",SUSPENDED:"SUSPENDED",CANCELLED:"CANCELLED"}),c=Object.freeze({UNSTARTED:"workflow-status-unstarted",IN_PROGRESS:"workflow-status-in-progress",ACCEPTED:"check-circle",ATTENTION:"workflow-status-warning",REJECTED:"workflow-status-problem",RECOMMENDED:"info-circle"}),o=Object.freeze({UNSTARTED:"dark",IN_PROGRESS:"success",ACCEPTED:"success",ATTENTION:"warning",REJECTED:"error",RECOMMENDED:"subtle"}),_="Verified merchant program not yet available in this country",d=2e3,E={can_appeal:!0,is_appeal:!1,appeal_count:0,appeal_comment:"",shipping_policy_url:"",return_policy_url:"",review_status:2,review_reasons:[]},A=Object.freeze({ACCOUNT_AGE:"ACCOUNT_AGE",DOMAIN_AGE:"DOMAIN_AGE",PROFILE_IMAGE:"PROFILE_IMAGE",PROFILE_COVER_IMAGE:"PROFILE_COVER_IMAGE",BIO:"BIO",SHOP_TAB:"SHOP_TAB",PINNER_FEEDBACK:"PINNER_FEEDBACK"}),p=[A.ACCOUNT_AGE,A.DOMAIN_AGE,A.PROFILE_IMAGE,A.PROFILE_COVER_IMAGE,A.BIO,A.SHOP_TAB,A.PINNER_FEEDBACK],g=Object.freeze({PASS:"PASS",FAIL:"FAIL"}),S=30,m=6048e5,I="show_vmp",C="true",N=Object.freeze({ACTION_CARDS_BANNER:"ACTION_CARDS_BANNER",WELCOME_BANNER:"WELCOME_BANNER",CELEBRATION_BANNER:"CELEBRATION_BANNER"}),O=3,y=.5}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/2788-fa8c706c0bc0b2ae.mjs.map
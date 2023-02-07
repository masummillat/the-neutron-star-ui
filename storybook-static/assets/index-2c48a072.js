import{a as s,j as m}from"./jsx-runtime-670450c2.js";function o(e){var a,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(r=o(e[a]))&&(t&&(t+=" "),t+=r);else for(a in e)e[a]&&(t&&(t+=" "),t+=a);return t}function l(){for(var e,a,r=0,t="";r<arguments.length;)(e=arguments[r++])&&(a=o(e))&&(t&&(t+=" "),t+=a);return t}const n=({size:e="medium",buttonStyle:a,buttonType:r,label:t,icon:i,loading:u,...d})=>s("button",{type:"button",className:l("gap-1 font-medium flex justify-center items-center bg-primary-40 rounded-3xl py-2 px-5 shadow-lg hover:opacity-80 text-white",r==="outlined"&&"border bg-white border-gray-400 text-primary-40 shadow-none",r==="text"&&"bg-primary-100 hover:bg-primary-90 text-primary-40 shadow-none",r==="elevated"&&"bg-primary-90 text-primary-40 drop-shadow-md",r==="tonal"&&"bg-primary-90 hover:bg-primary-70 text-black shadow-none",e==="small"&&"py-1 px-3",e==="large"&&"py-3 px-6","disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none"),style:a,...d,children:[m("div",{className:l(u&&"animate-spin"),children:i}),t]});try{n.displayName="Button",n.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{buttonStyle:{defaultValue:null,description:"What background color to use",name:"buttonStyle",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},buttonType:{defaultValue:null,description:"Button style type",name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'},{value:'"text"'},{value:'"elevated"'},{value:'"tonal"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}export{n as B};
//# sourceMappingURL=index-2c48a072.js.map

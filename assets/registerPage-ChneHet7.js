import{d as f,e as l,o as g,c,a as s,w as u,v as d,f as v,b as x,g as w,F as y,u as k,r as R,h as V,s as C}from"./index-BSmM5mDz.js";const E={class:"mb-4"},N={class:"mb-4"},U={class:"mt-6 text-blue-500 text-center"},F=f({__name:"registerPage",setup(q){const i=k(),o=l(""),t=l(""),n=l(null);function m(){b()}const b=async()=>{const r=await C(o.value,t.value);if(r.error)n.value=r.error.message;else{n.value=null;const e=localStorage.getItem("lastPath")??"/dashboard";i.replace(e)}};return(r,e)=>{const p=R("RouterLink");return g(),c(y,null,[e[7]||(e[7]=s("h1",{class:"text-2xl font-semibold mb-4"},"Registrarse",-1)),s("form",{onSubmit:v(m,["prevent"])},[e[4]||(e[4]=s("div",{class:"mb-4"},[s("label",{for:"name",class:"block text-gray-600"},"Nombre"),s("input",{type:"text",id:"name",name:"name",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",required:""})],-1)),s("div",E,[e[2]||(e[2]=s("label",{for:"username",class:"block text-gray-600"},"Email",-1)),u(s("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),type:"email",id:"username",name:"username",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",required:""},null,512),[[d,o.value]])]),s("div",N,[e[3]||(e[3]=s("label",{for:"password",class:"block text-gray-600"},"Contraseña",-1)),u(s("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>t.value=a),type:"password",id:"password",name:"password",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",required:""},null,512),[[d,t.value]])]),e[5]||(e[5]=s("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"},"Registrarse",-1))],32),s("div",U,[x(p,{to:{name:"login"},class:"hover:underline"},{default:w(()=>e[6]||(e[6]=[V("Login")])),_:1})])],64)}}});export{F as default};

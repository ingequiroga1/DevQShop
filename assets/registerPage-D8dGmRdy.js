import{d as k,e as o,f as C,o as c,c as V,g as P,h as U,i as E,a as s,w as m,v as p,j as M,k as N,b as B,l as F,m as R,F as T,r as h,C as q,s as L}from"./index-y-WAGp9W.js";const S={class:"mb-4"},_={class:"mb-4"},D={class:"mb-4"},$=["type"],j={class:"mb-4 flex items-center"},A={class:"mt-6 text-blue-500 text-center"},O=k({__name:"registerPage",setup(G){const l=o(""),u=o(""),i=o(""),v=o(null),a=o(!1),d=o(!1),r=o(""),n=o("info");function b(){y()}const f=C(()=>d.value?"text":"password");function g(){d.value=!d.value}const y=async()=>{if(await q(l.value))n.value="warning",a.value=!0,r.value="Este correo electrónico ya está registrado. Si olvidaste tu contraseña, intenta restablecerla desde la opción ¿Olvidaste tu contraseña?";else{const e=await L(l.value,u.value,i.value);e.error?(n.value="error",a.value=!0,r.value=e.error.message):(v.value=null,n.value="success",a.value=!0,r.value="¡Gracias por registrarte! Para completar el proceso de registro y activar tu cuenta, solo necesitas confirmar tu correo electrónico.")}};return(w,e)=>{const x=h("RouterLink");return c(),V(T,null,[a.value?(c(),P(U,{key:0,type:n.value,message:r.value,dismissible:"",onClose:e[0]||(e[0]=t=>a.value=!1)},null,8,["type","message"])):E("",!0),e[10]||(e[10]=s("h1",{class:"text-2xl font-semibold mb-4"},"Registrarse",-1)),s("form",{onSubmit:N(b,["prevent"])},[s("div",S,[e[4]||(e[4]=s("label",{for:"name",class:"block text-gray-600"},"Nombre",-1)),m(s("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>i.value=t),type:"text",id:"name",name:"name",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",required:""},null,512),[[p,i.value]])]),s("div",_,[e[5]||(e[5]=s("label",{for:"username",class:"block text-gray-600"},"Email",-1)),m(s("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>l.value=t),type:"email",id:"username",name:"username",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",required:""},null,512),[[p,l.value]])]),s("div",D,[e[6]||(e[6]=s("label",{for:"password",class:"block text-gray-600"},"Contraseña",-1)),m(s("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>u.value=t),type:f.value,id:"password",name:"password",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",required:""},null,8,$),[[M,u.value]])]),s("div",j,[s("input",{type:"checkbox",id:"showPass",name:"showPass",class:"text-blue-500",onChange:g},null,32),e[7]||(e[7]=s("label",{for:"showPass",class:"text-gray-600 ml-2"},"Mostrar Contraseña",-1))]),e[8]||(e[8]=s("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"},"Registrarse",-1))],32),s("div",A,[B(x,{to:{name:"login"},class:"hover:underline"},{default:F(()=>e[9]||(e[9]=[R("Login")])),_:1})])],64)}}});export{O as default};

import{d as u,e as p,o as n,c as a,a as s,F as g,t as m,m as l,u as o,y as c}from"./index-DrE2bUKS.js";const y={class:"px-4 py-6"},x={key:0,class:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3"},v={key:1},b=u({__name:"pedidos",setup(f){const d=p([{id:1,client:"Juan Perez",address:"Calle Falsa 123, Ciudad",date:"2024-12-14",status:"Pendiente"},{id:2,client:"Ana Lopez",address:"Avenida siempre viva 742, Ciudad",date:"2024-12-13",status:"Completado"}]),r=i=>{const t={year:"numeric",month:"long",day:"numeric"};return new Date(i).toLocaleDateString("es-ES",t)};return(i,t)=>(n(),a("div",y,[t[5]||(t[5]=s("h1",{class:"text-2x1 font-bold text-center mb-4"}," Pedidos ",-1)),d.value.length>0?(n(),a("div",x,[(n(!0),a(g,null,m(d.value,e=>(n(),a("div",{key:e.id,class:"bg-gray-100 p-4 rounded-lg shadow"},[s("p",null,[t[0]||(t[0]=s("strong",null,"Cliente:",-1)),l(o(e.client),1)]),s("p",null,[t[1]||(t[1]=s("strong",null,"Direccion:",-1)),l(o(e.address),1)]),s("p",null,[t[2]||(t[2]=s("strong",null,"Fecha:",-1)),l(o(r(e.date)),1)]),s("p",{class:c(["font-bold",e.status.toLowerCase()])},[t[3]||(t[3]=s("strong",null,"Estatus:",-1)),l(o(e.status),1)],2)]))),128))])):(n(),a("div",v,t[4]||(t[4]=[s("p",{class:"text-center text-gray-500 text-lg"},"No hay pedidos disponibles.",-1)])))]))}});export{b as default};

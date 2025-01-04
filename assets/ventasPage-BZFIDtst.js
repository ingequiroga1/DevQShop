import{d as b,e as f,o as s,c as r,a as e,F as m,q as v,t as d,u as y,i as x,_ as w,w as g,v as _,b as h}from"./index-r3ngptuh.js";import{g as V}from"./ventasService-CnqDqHOU.js";const k=i=>new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN"}).format(i),D=["onClick"],S={colspan:"4"},C={class:"details-table"},F=b({__name:"tablaVentas",props:{ventas:{type:Array,required:!0}},setup(i){const a=f(null),c=n=>{a.value=a.value===n?null:n};return(n,l)=>(s(),r("div",null,[e("table",null,[l[1]||(l[1]=e("thead",null,[e("tr",null,[e("th",null,"#"),e("th",null,"Fecha"),e("th",null,"Total"),e("th",null,"Detalles")])],-1)),e("tbody",null,[(s(!0),r(m,null,v(i.ventas,t=>(s(),r(m,{key:t.venta_id},[e("tr",null,[e("td",null,d(t.venta_id),1),e("td",null,d(new Date(t.fecha_venta).toLocaleString()),1),e("td",null,d(y(k)(t.total)),1),e("td",null,[e("button",{class:"bg-secondary-color text-white px-2 py-1 rounded hover:bg-red-600",onClick:u=>c(t.venta_id)},d(a.value===t.venta_id?"Ocultar":"Ver"),9,D)])]),a.value===t.venta_id?(s(),r("tr",{key:"details-"+t.venta_id},[e("td",S,[e("table",C,[l[0]||(l[0]=e("thead",null,[e("tr",null,[e("th",null,"Producto"),e("th",null,"Cantidad"),e("th",null,"Subtotal")])],-1)),e("tbody",null,[(s(!0),r(m,null,v(t.detalle,u=>(s(),r("tr",{key:u.producto},[e("td",null,d(u.producto),1),e("td",null,d(u.cantidad),1),e("td",null,d(u.subtotal),1)]))),128))])])])])):x("",!0)],64))),128))])])]))}}),$=w(F,[["__scopeId","data-v-13852c6d"]]),B={class:"flex container gap-4 max-w-sm"},N={class:"max-w-md mx-auto"},I={class:"max-w-md mx-auto"},L=b({__name:"ventaBuscar",emits:["search"],setup(i,{emit:a}){const c=new Date().toISOString().split("T")[0],n=f(c),l=f(c);function t(){n.value&&l.value?u("search",{startDate:n.value,endDate:l.value}):alert("por favor, selecciona ambas fechas.")}const u=a;return(M,o)=>(s(),r(m,null,[e("div",B,[e("div",N,[o[2]||(o[2]=e("label",{for:"input-fecha",class:"block text-sm font-medium text-gray-700 mb-2"}," Fecha Inicio ",-1)),g(e("input",{"onUpdate:modelValue":o[0]||(o[0]=p=>n.value=p),id:"input-fecha",type:"date",class:"w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"},null,512),[[_,n.value]])]),e("div",I,[o[3]||(o[3]=e("label",{for:"input-fecha",class:"block text-sm font-medium text-gray-700 mb-2"}," Fecha fin ",-1)),g(e("input",{"onUpdate:modelValue":o[1]||(o[1]=p=>l.value=p),id:"input-fecha",type:"date",class:"w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"},null,512),[[_,l.value]])])]),e("button",{onClick:t,class:"py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"}," Buscar ")],64))}}),O=b({__name:"ventasPage",setup(i){const a=f([]),c=async({startDate:n,endDate:l})=>{const t=await V(n,l);t.success?(a.value=t.data,console.log(a.value)):console.log(t.error)};return(n,l)=>(s(),r("div",null,[l[0]||(l[0]=e("h1",null,"Ventas",-1)),h(L,{onSearch:c}),h($,{ventas:a.value},null,8,["ventas"])]))}});export{O as default};

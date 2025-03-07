import{e as d,y as U,o as g,c as f,a as e,w as m,v as x,F as S,t as L,u as v,z as R,k as T,A as V,i as $,_ as M,d as B,B as N,p as D,b as h,h as q}from"./index-Bu7cB4zs.js";import{g as F,c as O,d as z,e as j}from"./productoService-B40QnENw.js";const G={class:"container mx-auto p-4 bg-white rounded-lg shadow"},Q={class:"flex justify-between items-center mb-4"},H={class:"mb-4"},J={class:"overflow-x-auto"},K={class:"w-full border-collapse text-left"},W={class:"px-4 py-2"},X={class:"px-4 py-2"},Y={class:"px-4 py-2"},Z={class:"px-4 py-2"},ee={class:"px-4 py-2 flex gap-2"},oe=["onClick"],te=["onClick"],se={class:"flex items-center justify-center space-x-4 mt-4"},le=["disabled"],re={class:"text-lg font-semibold text-gray-700"},ae=["disabled"],ne={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"},ue={class:"bg-white rounded-lg p-6 w-full max-w-md"},ie={class:"text-lg font-semibold mb-4"},de=["value"],ce={class:"flex justify-end gap-2"},be={type:"submit",class:"bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"},pe={key:1,class:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"},ve={class:"bg-white rounded-lg p-6 w-full max-w-sm"},me={class:"flex justify-end gap-2"},ge=10,fe={__name:"inventario",props:{products:{type:Array,required:!0},totalProducts:{type:Number,required:!0}},emits:["update-product","add-product","delete-product","filtrar-product","cambiar-pagina"],setup(w,{emit:c}){const l=c,n=d(!1),a=d(null),p=d(!1),y=d(null),_=d(""),b=d(1),k=d([{id:1,nombre:"Refrescos"},{id:2,nombre:"Pan Dulce"},{id:3,nombre:"FARMACIA"},{id:4,nombre:"PANES"},{id:5,nombre:"GALLETAS"},{id:6,nombre:"BOTANAS"},{id:7,nombre:"PAPELERIA"},{id:8,nombre:"FERRETERIA"},{id:9,nombre:"ACCS. CELULARES"},{id:10,nombre:"ABARROTE"},{id:11,nombre:"DULCERIA"},{id:12,nombre:"AGUA"},{id:13,nombre:"ALIMENTO PARA MASCOTAS"},{id:14,nombre:"LACTEOS"},{id:15,nombre:"EMBUTIDOS"},{id:16,nombre:"BEBIDAS"},{id:17,nombre:"FORMULAS LACTEAS"},{id:18,nombre:"ALIMENTOS"},{id:19,nombre:"SIN CATEGORIA"}]),s=d({nombre:"",categorias:{},descripcion:"",codigo_barras:"",stock:0,precio_venta:0}),C=i=>{a.value=i,s.value={...i},n.value=!0},A=()=>{n.value=!1,a.value=null,s.value={nombre:"",categorias:{},descripcion:"",codigo_barras:"",stock:0,precio_venta:0}},P=()=>{a.value?l("update-product",{...a.value,...s.value}):l("add-product",{...s.value}),A()},E=i=>{y.value=i,p.value=!0},r=()=>{l("delete-product",y.value),p.value=!1,y.value=null},u=()=>{l("cambiar-pagina",b.value)};return U(_,i=>{b.value=1,l("filtrar-product",i)}),(i,o)=>(g(),f("div",G,[e("div",Q,[o[12]||(o[12]=e("h2",{class:"text-lg font-semibold"},"Gestión de Inventario",-1)),e("button",{onClick:o[0]||(o[0]=t=>n.value=!0),class:"bg-primary-color text-white px-4 py-2 rounded hover:bg-blue-700"}," Agregar Producto ")]),e("div",H,[m(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>_.value=t),placeholder:"Buscar por nombre...",class:"w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"},null,512),[[x,_.value]])]),e("div",J,[e("table",K,[o[13]||(o[13]=e("thead",null,[e("tr",{class:"bg-gray-100 text-sm font-medium"},[e("th",{class:"px-4 py-2"},"Nombre"),e("th",{class:"px-4 py-2"},"Categoría"),e("th",{class:"px-4 py-2"},"Stock"),e("th",{class:"px-4 py-2"},"Precio"),e("th",{class:"px-4 py-2"},"Código de barras"),e("th",{class:"px-4 py-2"},"Acciones")])],-1)),e("tbody",null,[(g(!0),f(S,null,L(w.products,t=>(g(),f("tr",{key:t.producto_id,class:"hover:bg-gray-50 text-sm"},[e("td",W,v(t.nombre),1),e("td",X,v(t.categorias[0].nombre),1),e("td",{class:R(["px-4 py-2 font-medium",{"text-red-600":t.stock<5}])},v(t.stock),3),e("td",Y,"$"+v(t.precio_venta.toFixed(2)),1),e("td",Z,v(t.codigo_barras),1),e("td",ee,[e("button",{onClick:I=>C(t),class:"bg-primary-color text-white px-2 py-1 rounded hover:bg-blue-600"}," Editar ",8,oe),e("button",{onClick:I=>E(t.producto_id),class:"bg-secondary-color text-white px-2 py-1 rounded hover:bg-red-600"}," Eliminar ",8,te)])]))),128))])]),e("div",se,[e("button",{onClick:o[2]||(o[2]=t=>{b.value--,u()}),disabled:b.value===1,class:"px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"}," Anterior ",8,le),e("span",re," Página "+v(b.value),1),e("button",{onClick:o[3]||(o[3]=t=>{b.value++,u()}),disabled:b.value*ge>=w.totalProducts,class:"px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"}," Siguiente ",8,ae)])]),n.value||a.value?(g(),f("div",ne,[e("div",ue,[e("h3",ie,v(a.value?"Editar":"Agregar")+" Producto ",1),e("form",{onSubmit:T(P,["prevent"]),class:"space-y-4"},[e("div",null,[o[14]||(o[14]=e("label",{class:"block text-sm font-medium mb-1"},"Nombre:",-1)),m(e("input",{"onUpdate:modelValue":o[4]||(o[4]=t=>s.value.nombre=t),type:"text",required:"",class:"w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"},null,512),[[x,s.value.nombre]])]),e("div",null,[o[16]||(o[16]=e("label",{class:"block text-sm font-medium mb-1"},"Categoría:",-1)),m(e("select",{"onUpdate:modelValue":o[5]||(o[5]=t=>s.value.categorias[0].categoria_id=t),required:"",class:"w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"},[o[15]||(o[15]=e("option",{value:"",disabled:""},"Seleccione una categoría",-1)),(g(!0),f(S,null,L(k.value,t=>(g(),f("option",{key:t.id,value:t.id},v(t.nombre),9,de))),128))],512),[[V,s.value.categorias[0].categoria_id]])]),e("div",null,[o[17]||(o[17]=e("label",{class:"block text-sm font-medium mb-1"},"Descripción:",-1)),m(e("textarea",{"onUpdate:modelValue":o[6]||(o[6]=t=>s.value.descripcion=t),required:"",class:"w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"},null,512),[[x,s.value.descripcion]])]),e("div",null,[o[18]||(o[18]=e("label",{class:"block text-sm font-medium mb-1"},"Código de barras:",-1)),m(e("input",{"onUpdate:modelValue":o[7]||(o[7]=t=>s.value.codigo_barras=t),required:"",class:"w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"},null,512),[[x,s.value.codigo_barras]])]),e("div",null,[o[19]||(o[19]=e("label",{class:"block text-sm font-medium mb-1"},"Stock:",-1)),m(e("input",{"onUpdate:modelValue":o[8]||(o[8]=t=>s.value.stock=t),type:"number",required:"",min:"0",class:"w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"},null,512),[[x,s.value.stock,void 0,{number:!0}]])]),e("div",null,[o[20]||(o[20]=e("label",{class:"block text-sm font-medium mb-1"},"Precio:",-1)),m(e("input",{"onUpdate:modelValue":o[9]||(o[9]=t=>s.value.precio_venta=t),type:"number",required:"",min:"0",step:"0.01",class:"w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"},null,512),[[x,s.value.precio_venta,void 0,{number:!0}]])]),e("div",null,[o[21]||(o[21]=e("label",{class:"block text-sm font-medium mb-1"},"URL de Imagen:",-1)),m(e("input",{"onUpdate:modelValue":o[10]||(o[10]=t=>s.value.image=t),type:"text",class:"w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"},null,512),[[x,s.value.image]])]),e("div",ce,[e("button",be,v(a.value?"Actualizar":"Agregar"),1),e("button",{type:"button",onClick:A,class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancelar ")])],32)])])):$("",!0),p.value?(g(),f("div",pe,[e("div",ve,[o[22]||(o[22]=e("h3",{class:"text-lg font-semibold mb-4"},"Confirmar Eliminación",-1)),o[23]||(o[23]=e("p",{class:"text-sm mb-4"}," ¿Estás seguro de que deseas eliminar este producto? ",-1)),e("div",me,[e("button",{onClick:r,class:"bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"}," Eliminar "),e("button",{onClick:o[11]||(o[11]=t=>p.value=!1),class:"bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"}," Cancelar ")])])])):$("",!0)]))}},xe={props:{isLoading:{type:Boolean,required:!0}}},ye={key:0,class:"spinner"};function _e(w,c,l,n,a,p){return l.isLoading?(g(),f("div",ye,c[0]||(c[0]=[e("div",{class:"double-bounce1"},null,-1),e("div",{class:"double-bounce2"},null,-1)]))):$("",!0)}const we=M(xe,[["render",_e],["__scopeId","data-v-bd987d5d"]]),Ae={class:"container mx-auto"},Pe=B({__name:"inventarioPage",setup(w){const c=d([]),l=d(!1),n=d(""),a=d("info"),p=d(!1),y=d(""),_=d(0);N(()=>{b("",1,50)});const b=async(r,u,i)=>{p.value=!0;const o=await F(r,u,i);p.value=!1,o.success?(c.value=o.data,_.value=o.count):(a.value="error",l.value=!0,n.value=`Error al cargar los productos: ${o.error}`)},k=async r=>{const u=await O(r);u.success?(a.value="success",l.value=!0,n.value="Se agrego el nuevo producto",c.value.push(u.data[0])):(a.value="error",l.value=!0,n.value=`Error al crear el producto: ${u.error}`)},s=async r=>{const u=await z(r);u.success||(a.value="error",l.value=!0,n.value=`Error al eliminar producto: ${u.error}`),a.value="success",l.value=!0,n.value="Se elimino el producto",c.value=c.value.filter(i=>i.producto_id!==r)},C=async r=>{const u=await j(r);u.success||(a.value="error",l.value=!0,n.value=`Error al actualizar: ${u.error}`);const i=c.value.findIndex(o=>o.producto_id===r.producto_id);i!==-1?c.value[i]={...c.value[i],...r}:(a.value="error",l.value=!0,n.value="Error no se encontro el producto"),a.value="success",l.value=!0,n.value=`Se actualizo el producto: ${r.nombre}`},A=()=>{l.value=!1},P=r=>{b(y.value,r,50)},E=r=>{y.value=r,b(r,1,50)};return(r,u)=>(g(),f(S,null,[e("div",Ae,[m(h(q,{type:a.value,message:n.value,isVisible:l.value,dismissible:"",onClose:A},null,8,["type","message","isVisible"]),[[D,l.value]])]),h(we,{isLoading:p.value},null,8,["isLoading"]),h(fe,{products:c.value,totalProducts:_.value,onFiltrarProduct:E,onUpdateProduct:C,onAddProduct:k,onDeleteProduct:s,onCambiarPagina:P},null,8,["products","totalProducts"])],64))}});export{Pe as default};

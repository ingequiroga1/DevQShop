import{G as b}from"./index-DrE2bUKS.js";var B=typeof global=="object"&&global&&global.Object===Object&&global,M=typeof self=="object"&&self&&self.Object===Object&&self,$=B||M||Function("return this")(),_=$.Symbol,W=Object.prototype,P=W.hasOwnProperty,R=W.toString,l=_?_.toStringTag:void 0;function F(r){var e=P.call(r,l),t=r[l];try{r[l]=void 0;var i=!0}catch{}var c=R.call(r);return i&&(e?r[l]=t:delete r[l]),c}var G=Object.prototype,U=G.toString;function D(r){return U.call(r)}var H="[object Null]",X="[object Undefined]",I=_?_.toStringTag:void 0;function z(r){return r==null?r===void 0?X:H:I&&I in Object(r)?F(r):D(r)}function J(r){return r!=null&&typeof r=="object"}var K="[object Symbol]";function Q(r){return typeof r=="symbol"||J(r)&&z(r)==K}var V=/\s/;function Y(r){for(var e=r.length;e--&&V.test(r.charAt(e)););return e}var Z=/^\s+/;function rr(r){return r&&r.slice(0,Y(r)+1).replace(Z,"")}function j(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}var w=NaN,er=/^[-+]0x[0-9a-f]+$/i,tr=/^0b[01]+$/i,or=/^0o[0-7]+$/i,nr=parseInt;function A(r){if(typeof r=="number")return r;if(Q(r))return w;if(j(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=j(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=rr(r);var t=tr.test(r);return t||or.test(r)?nr(r.slice(2),t?2:8):er.test(r)?w:+r}var k=function(){return $.Date.now()},ir="Expected a function",cr=Math.max,ar=Math.min;function sr(r,e,t){var i,c,d,u,n,s,f=0,O=!1,m=!1,v=!0;if(typeof r!="function")throw new TypeError(ir);e=A(e)||0,j(t)&&(O=!!t.leading,m="maxWait"in t,d=m?cr(A(t.maxWait)||0,e):d,v="trailing"in t?!!t.trailing:v);function y(o){var a=i,g=c;return i=c=void 0,f=o,u=r.apply(g,a),u}function q(o){return f=o,n=setTimeout(p,e),O?y(o):u}function C(o){var a=o-s,g=o-f,x=e-a;return m?ar(x,d-g):x}function h(o){var a=o-s,g=o-f;return s===void 0||a>=e||a<0||m&&g>=d}function p(){var o=k();if(h(o))return E(o);n=setTimeout(p,C(o))}function E(o){return n=void 0,v&&i?y(o):(i=c=void 0,u)}function L(){n!==void 0&&clearTimeout(n),f=0,i=s=c=n=void 0}function N(){return n===void 0?u:E(k())}function T(){var o=k(),a=h(o);if(i=arguments,c=this,s=o,a){if(n===void 0)return q(s);if(m)return clearTimeout(n),n=setTimeout(p,e),y(s)}return n===void 0&&(n=setTimeout(p,e)),u}return T.cancel=L,T.flush=N,T}const dr=async()=>{const{data:r,error:e}=await b.from("productos").select(`
            producto_id,
            nombre,
            codigo_barras,
            descripcion,
            categorias(categoria_id, nombre),
            precio_venta,
            stock,
            stock_minimo
            `).eq("estado","Activo");return e?(console.error("Error fetching products:",e),{success:!1,error:e.message}):{success:!0,data:S(r)}},fr=sr(async r=>{const{data:e,error:t}=await b.from("productos").select(`
            producto_id,
            nombre,
            codigo_barras,
            descripcion,
            categorias(categoria_id, nombre),
            precio_venta,
            stock,
            stock_minimo
            `).eq("codigo_barras",r).eq("estado","Activo");return t?(console.error("Error fetching products:",t),{success:!1,error:t.message}):{success:!0,data:S(e)[0]}},500),mr=async r=>{var c;const{data:e,error:t}=await b.from("productos").insert([{codigo_barras:r.codigo_barras,nombre:r.nombre,descripcion:r.descripcion,categoria_id:(c=r.categorias)==null?void 0:c.categoria_id,precio_compra:r.precio_venta,precio_venta:r.precio_venta,stock:r.stock,stock_minimo:5,estado:"Activo"}]).select(`
            producto_id,
            nombre,
            codigo_barras,
            descripcion,
            precio_venta,
            stock,
            stock_minimo,
            categorias(categoria_id, nombre)
            `);return t?(console.error("Error al crear el producto:",t),{success:!1,error:t.message}):{success:!0,data:S(e)}},gr=async r=>{const{error:e}=await b.from("productos").update({estado:"Inactivo"}).eq("producto_id",r);return e?(console.error("Error al eliminar el producto:",e),{success:!1,error:e.message}):{success:!0,data:null}},lr=async r=>{var t;const{error:e}=await b.from("productos").update({codigo_barras:r.codigo_barras,nombre:r.nombre,descripcion:r.descripcion,categoria_id:(t=r.categorias)==null?void 0:t.categoria_id,precio_compra:r.precio_venta,precio_venta:r.precio_venta,stock:r.stock}).eq("producto_id",r.producto_id).select();return e?(console.error("Error al editar el producto:",e),{success:!1,error:e.message}):{success:!0,data:null}};function S(r){return(r||[]).map(t=>({producto_id:t.producto_id,nombre:t.nombre,codigo_barras:t.codigo_barras,descripcion:t.descripcion,categorias:t.categorias?{categoria_id:t.categorias.categoria_id,nombre:t.categorias.nombre}:null,precio_venta:t.precio_venta,stock:t.stock,stock_minimo:t.stock_minimo}))}export{fr as a,mr as c,gr as d,lr as e,dr as g};

import{H as s}from"./index-DGViyXbH.js";const p=async(r,e,o)=>{let c=s.from("productos").select(`
             producto_id,
             nombre,
             codigo_barras,
             descripcion,
             categorias(categoria_id, nombre),
             precio_venta,
             stock,
             stock_minimo
             `,{count:"exact"}).eq("estado","Activo");if(r.trim())c.ilike("nombre",`%${r}%`);else{const n=(e-1)*o,u=n+o-1;c=c.range(n,u)}const{data:a,error:t,count:d}=await c;return t?(console.error("Error fetching products:",t),{success:!1,error:t.message}):{success:!0,data:i(a),count:d||0}},g=async r=>{try{const{data:e,error:o}=await s.from("productos").select(`
            producto_id,
            nombre,
            codigo_barras,
            descripcion,
            categorias(categoria_id, nombre),
            precio_venta,
            stock,
            stock_minimo
        `).eq("codigo_barras",r).eq("estado","Activo").single();return o?(console.error("Error fetching products:",o),{success:!1,error:o.message}):e?{success:!0,data:i([e])[0],count:1}:{success:!1,error:"Producto no encontrado"}}catch(e){return console.error("Unexpected error:",e),{success:!1,error:"Error inesperado"}}},l=async r=>{var a;const{data:e,error:o}=await s.from("productos").insert([{codigo_barras:r.codigo_barras,nombre:r.nombre,descripcion:r.descripcion,categoria_id:(a=r.categorias)==null?void 0:a.categoria_id,precio_compra:r.precio_venta,precio_venta:r.precio_venta,stock:r.stock,stock_minimo:5,estado:"Activo"}]).select(`
            producto_id,
            nombre,
            codigo_barras,
            descripcion,
            precio_venta,
            stock,
            stock_minimo,
            categorias(categoria_id, nombre)
            `);if(o)return console.error("Error al crear el producto:",o),{success:!1,error:o.message};const c=i(e);return{success:!0,data:c,count:c.length}},b=async r=>{const{error:e}=await s.from("productos").update({estado:"Inactivo"}).eq("producto_id",r);return e?(console.error("Error al eliminar el producto:",e),{success:!1,error:e.message}):{success:!0,data:null,count:0}},f=async r=>{var o;const{error:e}=await s.from("productos").update({codigo_barras:r.codigo_barras,nombre:r.nombre,descripcion:r.descripcion,categoria_id:(o=r.categorias)==null?void 0:o.categoria_id,precio_compra:r.precio_venta,precio_venta:r.precio_venta,stock:r.stock}).eq("producto_id",r.producto_id).select();return e?(console.error("Error al editar el producto:",e),{success:!1,error:e.message}):{success:!0,data:null,count:0}};function i(r){return(r||[]).map(o=>({producto_id:o.producto_id,nombre:o.nombre,codigo_barras:o.codigo_barras,descripcion:o.descripcion,categorias:{categoria_id:o.categorias.categoria_id,nombre:o.categorias.nombre},precio_venta:o.precio_venta,stock:o.stock,stock_minimo:o.stock_minimo}))}export{g as a,l as c,b as d,f as e,p as g};

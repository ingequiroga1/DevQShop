import{E as c}from"./index-BHT4AnmL.js";const n=async()=>{const{data:r,error:e}=await c.from("productos").select(`
            producto_id,
            nombre,
            codigo_barras,
            descripcion,
            categorias(categoria_id, nombre),
            precio_venta,
            stock,
            stock_minimo
            `).eq("estado","Activo");return e?(console.error("Error fetching products:",e),{success:!1,error:e.message}):{success:!0,data:s(r)}},d=async r=>{try{const{data:e,error:o}=await c.from("productos").select(`
            producto_id,
            nombre,
            codigo_barras,
            descripcion,
            categorias(categoria_id, nombre),
            precio_venta,
            stock,
            stock_minimo
        `).eq("codigo_barras",r).eq("estado","Activo").single();return o?(console.error("Error fetching products:",o),{success:!1,error:o.message}):e?{success:!0,data:s([e])[0]}:{success:!1,error:"Producto no encontrado"}}catch(e){return console.error("Unexpected error:",e),{success:!1,error:"Error inesperado"}}},u=async r=>{var a;const{data:e,error:o}=await c.from("productos").insert([{codigo_barras:r.codigo_barras,nombre:r.nombre,descripcion:r.descripcion,categoria_id:(a=r.categorias)==null?void 0:a.categoria_id,precio_compra:r.precio_venta,precio_venta:r.precio_venta,stock:r.stock,stock_minimo:5,estado:"Activo"}]).select(`
            producto_id,
            nombre,
            codigo_barras,
            descripcion,
            precio_venta,
            stock,
            stock_minimo,
            categorias(categoria_id, nombre)
            `);return o?(console.error("Error al crear el producto:",o),{success:!1,error:o.message}):{success:!0,data:s(e)}},p=async r=>{const{error:e}=await c.from("productos").update({estado:"Inactivo"}).eq("producto_id",r);return e?(console.error("Error al eliminar el producto:",e),{success:!1,error:e.message}):{success:!0,data:null}},_=async r=>{var o;const{error:e}=await c.from("productos").update({codigo_barras:r.codigo_barras,nombre:r.nombre,descripcion:r.descripcion,categoria_id:(o=r.categorias)==null?void 0:o.categoria_id,precio_compra:r.precio_venta,precio_venta:r.precio_venta,stock:r.stock}).eq("producto_id",r.producto_id).select();return e?(console.error("Error al editar el producto:",e),{success:!1,error:e.message}):{success:!0,data:null}};function s(r){return(r||[]).map(o=>({producto_id:o.producto_id,nombre:o.nombre,codigo_barras:o.codigo_barras,descripcion:o.descripcion,categorias:o.categorias?[{categoria_id:o.categorias.categoria_id,nombre:o.categorias.nombre}]:[],precio_venta:o.precio_venta,stock:o.stock,stock_minimo:o.stock_minimo}))}export{d as a,u as c,p as d,_ as e,n as g};

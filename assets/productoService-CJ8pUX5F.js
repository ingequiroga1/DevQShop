import{E as c}from"./index-C2C-ClC0.js";const n=async()=>{const{data:r,error:e}=await c.from("productos").select(`
            producto_id,
            nombre,
            codigo_barras,
            descripcion,
            categorias(categoria_id, nombre),
            precio_venta,
            stock,
            stock_minimo
            `).eq("estado","Activo");return e?(console.error("Error fetching products:",e),{success:!1,error:e.message}):{success:!0,data:a(r)}},d=async r=>{var s;const{data:e,error:o}=await c.from("productos").insert([{codigo_barras:r.codigo_barras,nombre:r.nombre,descripcion:r.descripcion,categoria_id:(s=r.categorias)==null?void 0:s.categoria_id,precio_compra:r.precio_venta,precio_venta:r.precio_venta,stock:r.stock,stock_minimo:5,estado:"Activo"}]).select(`
            producto_id,
            nombre,
            codigo_barras,
            descripcion,
            precio_venta,
            stock,
            stock_minimo,
            categorias(categoria_id, nombre)
            `);return o?(console.error("Error al crear el producto:",o),{success:!1,error:o.message}):{success:!0,data:a(e)}},_=async r=>{const{error:e}=await c.from("productos").update({estado:"Inactivo"}).eq("producto_id",r);return e?(console.error("Error al eliminar el producto:",e),{success:!1,error:e.message}):{success:!0,data:null}},u=async r=>{var o;const{error:e}=await c.from("productos").update({codigo_barras:r.codigo_barras,nombre:r.nombre,descripcion:r.descripcion,categoria_id:(o=r.categorias)==null?void 0:o.categoria_id,precio_compra:r.precio_venta,precio_venta:r.precio_venta,stock:r.stock}).eq("producto_id",r.producto_id).select();return e?(console.error("Error al editar el producto:",e),{success:!1,error:e.message}):{success:!0,data:null}};function a(r){return(r||[]).map(o=>({producto_id:o.producto_id,nombre:o.nombre,codigo_barras:o.codigo_barras,descripcion:o.descripcion,categorias:o.categorias?{categoria_id:o.categorias.categoria_id,nombre:o.categorias.nombre}:null,precio_venta:o.precio_venta,stock:o.stock,stock_minimo:o.stock_minimo}))}export{d as c,_ as d,u as e,n as g};

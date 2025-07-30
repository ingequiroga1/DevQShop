import{H as o}from"./index-Dtxegls7.js";const _=async()=>{const{data:a,error:s}=await o.from("ventas").select(`
    estado,
    fecha_venta,
    total,
    venta_id,
    usuarios (
      nombre,
      direccion
    ),
    ventas_detalle (
      precio_unitario,
      productos (
        nombre
      )
    )
  `).eq("estado","Pendiente");return s?{success:!1,error:(s==null?void 0:s.message)||"Error al obtener los datos"}:{success:!0,data:i(a),count:(a==null?void 0:a.length)||0}},v=async(a,s)=>{const{data:e,error:t,count:n}=await o.from("ventas").select(`
    venta_id,
    fecha_venta,
    total,
    ventas_detalle (
      venta_id,
      cantidad,
      subtotal,
      productos (
        producto_id,
        nombre
      )
    )
  `,{count:"exact"}).gte("fecha_venta",`${a}T00:00:00`).lte("fecha_venta",`${s}T23:59:59`).order("fecha_venta",{ascending:!1});return t?{success:!1,error:t.message}:{success:!0,data:u(e),count:n||0}},m=async(a,s,e,t,n)=>{const{data:c,error:r}=await o.rpc("registrar_venta",{p_total:a,p_metodo_pago:s,p_usuario_id:e,p_estado:t,p_productos:n});return r?(console.error("Error al guardar los detalles de la venta:",r),{success:!1,error:r.message}):{success:!0,data:`Venta generada ${c}`,count:1}};function u(a){return(a||[]).map(e=>({venta_id:e.venta_id,fecha_venta:new Date(e.fecha_venta),total:e.total,detalle:Array.isArray(e.ventas_detalle)?e.ventas_detalle.map(t=>{var n;return{producto:((n=t.productos)==null?void 0:n.nombre)||"Producto desconocido",cantidad:t.cantidad||0,subtotal:t.subtotal||0}}):null}))}function i(a){return(a||[]).map(e=>({venta_id:e.venta_id,estado:e.estado,fecha_venta:new Date(e.fecha_venta),total:e.total,cliente:e.usuarios==null?"Sin nombre":e.usuarios.nombre,direccion:e.usuarios==null?"Sin dirección":e.usuarios.direccion,productos:e.ventas_detalle.map(t=>({nombre:t.productos.nombre||"Sin descripción",precio_unitario:t.precio_unitario}))}))}export{m as a,_ as b,v as g};

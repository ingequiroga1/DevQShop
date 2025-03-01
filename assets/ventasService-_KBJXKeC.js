import{E as o}from"./index-BHT4AnmL.js";const i=async(t,r)=>{const{data:a,error:e}=await o.from("ventas").select(`
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
  `).gte("fecha_venta",`${t}T00:00:00`).lte("fecha_venta",`${r}T23:59:59`).order("fecha_venta",{ascending:!1});return e?{success:!1,error:e.message}:{success:!0,data:l(a)}},p=async(t,r,a,e,s)=>{let c=11;const{data:d,error:n}=await o.rpc("procesar_venta",{p_cajero_id:a,p_metodo_pago:r,p_productos:s,p_total:t,p_estado:e,p_cliente:c});return n?(console.error("Error al guardar los detalles de la venta:",n),{success:!1,error:n.message}):{success:!0,data:`Venta generada ${d}`}};function l(t){return(t||[]).map(a=>({venta_id:a.venta_id,fecha_venta:new Date(a.fecha_venta),total:a.total,detalle:Array.isArray(a.ventas_detalle)?a.ventas_detalle.map(e=>{var s;return{producto:((s=e.productos)==null?void 0:s.nombre)||"Producto desconocido",cantidad:e.cantidad||0,subtotal:e.subtotal||0}}):null}))}export{p as a,i as g};

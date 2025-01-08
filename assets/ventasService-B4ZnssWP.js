import{J as n}from"./index-y-WAGp9W.js";const _=async(t,r)=>{const{data:a,error:e}=await n.from("ventas").select(`
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
  `).gte("fecha_venta",`${t}T00:00:00`).lte("fecha_venta",`${r}T23:59:59`).order("fecha_venta",{ascending:!1});return e?{success:!1,error:e.message}:{success:!0,data:d(a)}},i=async(t,r,a,e,s)=>{const{data:c,error:o}=await n.rpc("registrar_venta",{p_cajero_id:a,p_metodo_pago:r,p_productos:s,p_total:t,p_estado:e});return o?(console.error("Error al guardar los detalles de la venta:",o),{success:!1,error:o.message}):{success:!0,data:`Venta generada ${c}`}};function d(t){return(t||[]).map(a=>({venta_id:a.venta_id,fecha_venta:new Date(a.fecha_venta),total:a.total,detalle:Array.isArray(a.ventas_detalle)?a.ventas_detalle.map(e=>{var s;return{producto:((s=e.productos)==null?void 0:s.nombre)||"Producto desconocido",cantidad:e.cantidad||0,subtotal:e.subtotal||0}}):null}))}export{i as a,_ as g};

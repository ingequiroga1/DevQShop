import{E as o}from"./index-Xwbk31ho.js";const l=async(t,s)=>{const{data:a,error:e}=await o.from("ventas").select(`
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
  `).gte("fecha_venta",t).lte("fecha_venta",s).order("fecha_venta",{ascending:!1});return e?{success:!1,error:e.message}:{success:!0,data:c(a)}},_=async(t,s,a,e)=>{const{data:r,error:n}=await o.rpc("registrar_venta",{p_cajero_id:a,p_metodo_pago:s,p_productos:e,p_total:t});return n?(console.error("Error al guardar los detalles de la venta:",n),{success:!1,error:n.message}):{success:!0,data:`Venta generada ${r}`}};function c(t){return(t||[]).map(a=>({venta_id:a.venta_id,fecha_venta:new Date(a.fecha_venta),total:a.total,detalle:Array.isArray(a.ventas_detalle)?a.ventas_detalle.map(e=>{var r;return{producto:((r=e.productos)==null?void 0:r.nombre)||"Producto desconocido",cantidad:e.cantidad||0,subtotal:e.subtotal||0}}):null}))}export{_ as a,l as g};

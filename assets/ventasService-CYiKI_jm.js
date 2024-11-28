import{E as n}from"./index-C59Uo872.js";const l=async()=>{const{data:e,error:t}=await n.from("ventas").select(`
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
  `).order("fecha_venta",{ascending:!1});return t?{success:!1,error:t.message}:{success:!0,data:c(e)}},i=async(e,t,a,r)=>{const{data:s,error:o}=await n.rpc("registrar_venta",{p_cajero_id:a,p_metodo_pago:t,p_productos:r,p_total:e});return o?(console.error("Error al guardar los detalles de la venta:",o),{success:!1,error:o.message}):{success:!0,data:`Venta generada ${s}`}};function c(e){return(e||[]).map(a=>({venta_id:a.venta_id,fecha_venta:new Date(a.fecha_venta),total:a.total,detalle:Array.isArray(a.ventas_detalle)?a.ventas_detalle.map(r=>{var s;return{producto:((s=r.productos)==null?void 0:s.nombre)||"Producto desconocido",cantidad:r.cantidad||0,subtotal:r.subtotal||0}}):null}))}export{i as a,l as g};

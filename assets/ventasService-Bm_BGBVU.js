import{G as c}from"./index-Bu7cB4zs.js";const i=async(s,r)=>{const{data:a,error:e,count:t}=await c.from("ventas").select(`
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
  `,{count:"exact"}).gte("fecha_venta",`${s}T00:00:00`).lte("fecha_venta",`${r}T23:59:59`).order("fecha_venta",{ascending:!1});return e?{success:!1,error:e.message}:{success:!0,data:u(a),count:t||0}},p=async(s,r,a,e,t)=>{let o=11;const{data:d,error:n}=await c.rpc("procesar_venta",{p_cajero_id:a,p_metodo_pago:r,p_productos:t,p_total:s,p_estado:e,p_cliente:o});return n?(console.error("Error al guardar los detalles de la venta:",n),{success:!1,error:n.message}):{success:!0,data:`Venta generada ${d}`,count:1}};function u(s){return(s||[]).map(a=>({venta_id:a.venta_id,fecha_venta:new Date(a.fecha_venta),total:a.total,detalle:Array.isArray(a.ventas_detalle)?a.ventas_detalle.map(e=>{var t;return{producto:((t=e.productos)==null?void 0:t.nombre)||"Producto desconocido",cantidad:e.cantidad||0,subtotal:e.subtotal||0}}):null}))}export{p as a,i as g};

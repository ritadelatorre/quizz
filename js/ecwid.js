const preguntas = [
   new Pregunta(
      1, 
      "radio", 
      "¿Qué es una tienda online?", 
      "-", 
      "Un catálogo de produtos que se muestra en una página web", 0, 
      "Una web con un listado de productos con sus precios y características donde se pueden realizar pedidos.", 0, 
      "Un sitio web que vende productos o servicios y que por lo general, tiene un carrito de compra asociado a ella.", 1, 
      "Un portal web para comunicarse con un comercio.", 0, 
      "c", 
      "", 
      ),
      
      new Pregunta(
      2, 
      "radio", 
      "¿Qué es una categoría en EcWid?", 
      "-", 
      "Es la clasificación que se hace sobre los productos para agruparlos en la pantalla de inicio de la tienda.", 1, 
      "Son palabras clave que se utilizan para describir la empresa y conectar con los clientes que buscan los servicios que ofreces.", 0, 
      "Es la clasificación que se hace de los productos en atención a su importancia.", 0, 
      "Son palabras clave que se usan para acceder más rápidamente a un producto.", 0, 
      "a", 
      "", 
      ),
      
      new Pregunta(
      3, 
      "radio", 
      "¿La versión free de Ecwid permite crear categorías y subcategorías?", 
      "-", 
      "Sí, permite crear dos categorías y dos subcategorías", 0, 
      "Sólo permite crear dos categorías principales", 0, 
      "Permite crear tantas categorías como se desee", 0, 
      "Permite crear dos categorías que se pueden repartir entre dos principales o una principal y una subcategoría", 1, 
      "d", 
      "", 
      ),
      
      new Pregunta(
      4, 
      "radio", 
      "¿A qué se refiere Ecwid con Tipo de Producto?", 
      "-", 
      "A un producto definido por características o atributos específicos que se pueden establecer para posteriormente llenarlas en el catálogo.", 1, 
      "Se trata simplemente de otra forma de categorizar los productos.", 0, 
      "Son palabras claves para localizar los productos más rápidamente en la tienda", 0, 
      "Representan las subcategorías de los productos de la tienda", 0, 
      "a", 
      "", 
      ),
      
      new Pregunta(
      5, 
      "radio", 
      "¿Qué se coloca en la opción Atributos al crear un producto en EcWid?", 
      "-", 
      "Se llena la descripción con las características del mismo", 0, 
      "Se le asigna un tipo de producto previamente definido para llenar sus atributos.", 1, 
      "Se suben las diferentes fotos que se tengan del mismo.", 0, 
      "Se colocan las palabras clave para poder posicionarlo.", 0, 
      "b", 
      "", 
      ),
      
      new Pregunta(
      6, 
      "radio", 
      "¿Es posible mostrar Productos Relacionados en EcWid?", 
      "-", 
      "Si es posible, existe una opción para ello", 1, 
      "Los productos relacionados son los que pertenecen a una misma categoría", 0, 
      "Los productos relacionados son los que pertenecen a un mismo Tipo de Producto", 0, 
      "No, no es posible.", 0, 
      "a", 
      "", 
      ),
      
      new Pregunta(
      7, 
      "radio", 
      "¿A qué se refiere EcWid con el Starter Site?", 
      "-", 
      "Al panel de control de la tienda", 0, 
      "Al Dashboard con todos los informes de actividad", 0, 
      "A la página web que el usuario mira cuando entra a la tienda", 1, 
      "A la página de configuración del catálogo de productos", 0, 
      "c", 
      "", 
      ),
      
      new Pregunta(
      8, 
      "radio", 
      "¿Con cuántas plataformas de Redes Sociales permite ser integrada Ecwid?", 
      "-", 
      "Ecwid sólo permite seleccionar una sola plataforma para redes sociales.", 0, 
      "No es posible integrar la tienda con ninguna plataforma.", 0, 
      "Ecwid se puede agregar tanto a un sitio web existente como a diversas plataformas como Facebook, Tumblr, etc.", 0, 
      "Para integrar Ecwid tanto a un sitio web existente como a diversas plataformas se debe utilizar una versión de pago", 1, 
      "d", 
      "", 
      ),
      
      new Pregunta(
      9, 
      "radio", 
      "Selecciona de aquellas características que ofrece la versión Freemium", 
      "-", 
      "SEO, tienda en Facebook, impuestos", 0, 
      "Cupones de descuento, SEO, diversidad de pagos", 0, 
      "Impuestos, Formas de Pago, Productos digitales", 0, 
      "Impuestos, Formas de Pago, Tipos de Producto", 1, 
      "d", 
      "", 
      ),
      
      new Pregunta(
      10, 
      "radio", 
      "¿Para qué sirve la opción <b>Opciones</b> en la ficha Producto?", 
      "-", 
      "Para agregar atributos al producto", 0, 
      "Para que el cliente pueda indicar al momento de la compra, ciertas características que podrían aumentar el precio del producto", 0, 
      "Para que el cliente pueda indicar al momento de la compra, ciertas características que podrían aumentar o disminuir el precio del producto", 1, 
      "Para cambiar la forma de visualizar el producto", 0, 
      "c", 
      "", 
      ),
      new Pregunta(
         11, 
         "radio", 
         "¿Para qué sirve la opción <b>Archivos</b> en la ficha Producto?", 
         "-", 
         "Para realizar la venta de bienes digitales", 1, 
         "Para subir las imágenes del producto", 0, 
         "Para descargar la Orden de Compra del producto", 0, 
         "La opción <i>Archivos</i> no se encuentra en la ficha Producto", 0, 
         "a", 
         "", 
         ),
         
         new Pregunta(
         12, 
         "radio", 
         "¿Para qué sirve la opción <b>Productos relacionados</b> de la ficha producto?", 
         "-", 
         "Para ofrecer al cliente productos o servicios similares al que está visualizando pero que ofrecen alguna ventaja.", 0, 
         "Para ofrecer al cliente productos complementarios a los productos que ya tiene intención de comprar.", 0, 
         "Para ofrecer al cliente productos adicionales al que está visualizando con la intención de que los compre además del que está viendo y no en lugar de éste.", 1, 
         "Para indicar opciones adicionales al producto como empaque, color, etc.", 0, 
         "c", 
         "", 
         ),
         
         new Pregunta(
         13, 
         "radio", 
         "¿Es posible agregar un producto a más de una categoría?", 
         "-", 
         "Sí, si es posible.", 0, 
         "No es posible. Un producto sólo puede pertenecer a una única categoría y subcategoría.", 1, 
         "Es posible que un producto pertenecezca a más de una subcategoría, pero a una sola categoría", 0, 
         "Es posible que un producto pertenecezca a más de una categoría, pero a una sola subcategoría", 0, 
         "b", 
         "", 
         ),
         
         new Pregunta(
         14, 
         "radio", 
         "¿Es posible cambiar la dirección del Starter Site en el plan Freemium?", 
         "-", 
         "Es posible al 100%, sólo se debe comprar un dominio", 0, 
         "Es posible sustituir el número de la tienda por un nombre pero el subdominio será ecwid.com", 1, 
         "Para hacerlo al 100% hay que comprar un dominio y utilizar una versión de pago", 0, 
         "No es posible: Ecwid asigna una URL.", 0, 
         "b", 
         "", 
         ),
         
         new Pregunta(
         15, 
         "radio", 
         "¿Cuales de las siguientes secciones permite el Starter Site?", 
         "-", 
         "Tienda, Historia, Testimonios, Acerca de...", 1, 
         "Tienda, Ubicación, Contacto, Impuestos", 0, 
         "Tienda, Historia, Tipos de pago, Acerca de...", 0, 
         "Documentos, Tienda, Testimonios, Contacto", 0, 
         "a", 
         "", 
         ),
         
         new Pregunta(
         16, 
         "radio", 
         "Ecwid permite mostrar el mapa de localización de la tienda...", 
         "-", 
         "Instalando el plugin de Google Maps", 0, 
         "No, no lo permite", 0, 
         "Desde la opción de configuración", 0, 
         "Escribiendo la dirección en la sección Ubicación del Starter site", 1, 
         "d", 
         "", 
         ),
         
         new Pregunta(
         17, 
         "checkbox", 
         "¿A qué importes se les puede crear impuestos manuales? (Selecciona las opciones que apliquen)", 
         "-", 
         "Se puede crear un impuesto para aplicarlo al subtotal de todos los productos", 0.33, 
         "Se puede crear un impuesto para aplicarlo al valor del subtotal + el envío de los productos", 0.33, 
         "No es posible crear impuestos manuales en la versión Freemium", 0, 
         "Se puede discriminar el impuesto según la zona de envío o facturación", 0.33, 
         "a,b,d", 
         "", 
         ),
         
         new Pregunta(
         18, 
         "checkbox", 
         "¿Cuáles opciones se pueden ocultar en la tienda, en la página de detalles del producto? Selecciona las que apliquen...", 
         "-", 
         "REF de producto", 0.25, 
         "Cantidad", 0.25, 
         "Artículos en existencia", 0.25, 
         "Etiquetas de disponibilidad", 0.25, 
         "a,b,c,d", 
         "", 
         ),
         
         new Pregunta(
         19, 
         "radio", 
         "¿Cuántos tipos de pago manual permite configurar Ecwid aparte de las pasarelas de pago?", 
         "-", 
         "Las que se deseen, además Ecwid permite editar las instrucciones de pago que se muestran al cliente al tramitar el pedido.", 1, 
         " Pago en efectivo contra reembolso, pedidos por teléfono", 0, 
         "Pago en efectivo contra reembolso, pedidos por teléfono y cheques", 0, 
         "Pago en efectivo contra reembolso", 0, 
         "a", 
         "", 
         ),
         
         new Pregunta(
         20, 
         "radio", 
         "¿Cuántos métodos de envío se pueden habilitar?", 
         "-", 
         "Todos los que se deseen", 1, 
         "Envío gratuito, utilizando un proveedor", 0, 
         "Depende del origen del envío", 0, 
         "Envío gratuito, utilizar un proveedor, tarifa plana", 0, 
         "a", 
         "", 
         ),
         
]

const NUM_PREGUNTAS = preguntas.length;
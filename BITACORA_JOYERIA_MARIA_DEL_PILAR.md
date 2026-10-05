# 💎 Bitácora Maestra & Especificación: Joyería María del Pilar
## E-Commerce de Alta Gama: Joyería Fina, Bisutería de Autor & Accesorios

**Fecha de Actualización:** 5 de Octubre de 2026  
**Proyecto:** Boutique Virtual Joyería María del Pilar  
**Ubicación:** `/home/patricio/Documentos/joyeria-maria-del-pilar`  
**Dirección de Arte & Liderazgo de Proyecto:** Patricio Padilla (PPV Soluciones)  
**Propósito:** *"Un proyecto desarrollado con el más alto nivel de amor, glamour y refinamiento, porque es para alguien muy especial. No es un código complejo, pero debe ser VISUALMENTE ESPECTACULAR, de estándar internacional."*  
**Estado:** 🚀 **En Desarrollo Activo**

---

## 1. Concepto Visual & "Look & Feel" Elegido (Opción 3: Atelier Mediterráneo / Sol & Verano)

El diseño fue seleccionado específicamente por Patricio Padilla para transmitir **frescura, sencillez, colores y alegría de vivir**, alejándose de estéticas oscuras o frías:

* **Paleta Solar & Marina:**
  - **Miel y Ámbar Solar (`#F59E0B` / `#D97706`):** Botones principales, llamados a la acción, insignias y brillo cálido.
  - **Turquesa Azure Mediterráneo (`#0891B2` / `#06B6D4`):** Bordes frescos, badges de frescura y acentos de mar.
  - **Melocotón Terracota (`#EA580C` / `#FB923C`):** Calidez artesanal, detalles de edición limitada y fondo de asesoría.
  - **Lienzo Blanco Arena & Miel Suave (`#FFFDF8` a `#FFFFFF` y `#FFFBEB`):** Fondos limpios, despejados y con mucha luz natural.
  - **Piedra Cálida para Textos (`#1F1B17` / `#554336`):** Lectura nítida de alto contraste sin recurrir al negro puro industrial.
* **Exclusividad de Materiales:** Exclusivamente **Plata 925 de Ley** y **Bisutería Fina / Accesorios de Autor**.
* **Formas:** Píldoras ergonómicas (`border-radius: 9999px`), esquinas redondeadas y suaves sombras solares.
* **Tipografías:**
  - **Títulos y Marca:** *Playfair Display* con toques solares.
  - **Lectura, Precios y Botones:** *Plus Jakarta Sans* (moderno, geométrico, ultra legible en móviles).

---

## 3. Arquitectura del Catálogo & Colecciones

La tienda agrupa la oferta en 4 grandes mundos para facilitar la búsqueda:

| Colección | Descripción & Líneas de Producto | Materiales & Atributos |
| :--- | :--- | :--- |
| **💎 Joyería Fina** | Anillos solitarios, argollas de compromiso, cadenas finas, gargantillas, colgantes con gemas y aros clásicos. | Oro 18K (Amarillo, Blanco, Rosa), Plata Esterlina 925, Circonias suizas de corte diamante. |
| **✨ Bisutería de Autor** | Diseños exclusivos de vanguardia, collares multicapa, pulseras de tendencia, maxi-aros de fiesta y dijes artesanales. | Baño de oro 18k, rodio, perlas cultivadas, cristales facetados y acero quirúrgico hipoalergénico. |
| **⌚ Accesorios & Relojería** | Relojes finos de pulsera, brazaletes de cuero con broches dorados, estuches joyero de terciopelo, pañuelos y complementos. | Cuero genuino, acero inoxidable, acabados en oro y plata. |
| **🎁 Regalos Especiales** | Sets combinados (collar + aros) listos para regalar, colecciones para aniversarios, San Valentín y Día de la Madre. | Incluye caja rígida de lujo con lazo de satén y tarjeta de dedicatoria caligrafiada. |

---

## 4. Funcionalidades de la Tienda de Alta Gama

### A. Portada Cinemática (Hero Section)
* Encabezado de bienvenida con fotografía macro o video de joyas con destellos dorados en movimiento.
* Mensaje cálido y exclusivo: *"Diseños que cuentan historias, creados para brillar en tus momentos más memorables"*.
* Accesos directos a las colecciones principales en tarjetas redondeadas con bordes de luz dorada.

### B. Navegación, Filtros & Búsqueda Instantánea
* Pestañas rápidas para alternar entre: **Todos**, **Joyería Fina**, **Bisutería**, **Accesorios** y **Ofertas Destacadas**.
* Barra de búsqueda reactiva en tiempo real: al escribir *"anillo"* o *"oro"*, filtra los productos al instante sin recargar la página.
* Filtros por rango de precios y disponibilidad.

### C. Ficha de Joya Detallada (Modal / Vista de Producto)
* Galería de imágenes en alta resolución con opción de zoom.
* Selector de talla / medida (talla de anillo o largo de cadena en cm).
* Selector de acabado (Oro Amarillo, Plata 925, Oro Rosa).
* Indicador de exclusividad: *"✨ Edición Limitada"* o *"Solo 2 unidades disponibles"*.
* Botón **"Añadir al Carrito"** con micro-animación de destello.
* Botón **"Consultar por WhatsApp"**: abre chat directo con el mensaje:  
  *«Hola María del Pilar, me encantó este diseño: [Nombre del Producto] (Ref: [Código]). ¿Tienen stock en mi talla?»*.

### D. Carrito Lateral Magnético (Cart Drawer)
* Se desliza suavemente desde el lateral sin interrumpir la navegación.
* Barra de progreso animada: *"Agrega $X más para obtener Envío Gratis a todo Chile"*.
* Opción interactiva: *"¿Es para regalo? 🎁 Marcar para incluir caja de terciopelo y dedicatoria personalizada"*.
* Resumen claro de totales y botón de finalización de compra directo por WhatsApp o pasarela web.

---

## 5. Panel de Administración Integrado & Fácil de Usar

Para que María del Pilar o el administrador puedan gestionar la tienda fácilmente desde el celular o computador:

* **Gestor de Productos:**
  - Agregar nuevo producto (Nombre, Categoría, Precio normal, Precio oferta, Descripción, Tallas/Variantes, Stock, URLs de fotos).
  - Editar precios y activar/desactivar productos con un solo interruptor.
  - Marcar productos como **"Destacado en Portada"** o **"Novedad"**.
* **Gestor de Pedidos:**
  - Lista de compras entrantes con datos del cliente (Nombre, Teléfono, Dirección, Productos comprados, Total).
  - Cambio de estado: `Pendiente` ➔ `Confirmado` ➔ `Preparando Envío` ➔ `Despachado`.
* **Métricas Clave:**
  - Total de productos activos, ventas estimadas del mes y productos más cotizados.

---

## 6. Stack Tecnológico & Despliegue Rápido

* **Arquitectura:** Single Page Application (SPA) con **Vite + Vanilla CSS / JavaScript modular moderno** (o React + Vite para gestión fluida de estado).
* **Rendimiento:** Carga en < 800ms, puntuación Lighthouse 95+, 100% libre de dependencias pesadas.
* **Imágenes & Multimedia:** Compresión WebP de alta definición, efecto shimmer mientras carga la imagen.
* **Persistencia:** LocalStorage sincronizado para carrito y pedidos iniciales + listo para conectar a API FastAPI / Supabase / PostgreSQL.
* **Dominio & Despliegue:** Preparado para correr localmente en `localhost:5174` y subirse a producción con SSL (HTTPS) con 1 clic.

---

## 7. Fases de Ejecución

1. [x] **Fase 1 (Completada):** Levantamiento de bitácora y especificación técnica exhaustiva.
2. [ ] **Fase 2:** Inicialización del proyecto web (Vite + diseño visual ultra-luxe).
3. [ ] **Fase 3:** Implementación del catálogo con datos reales (Joyería fina, bisutería y accesorios con imágenes espectaculares).
4. [ ] **Fase 4:** Implementación del Carrito Lateral (Cart Drawer) y flujo de pedidos por WhatsApp/Web.
5. [ ] **Fase 5:** Implementación del Panel de Administración para gestión de productos y pedidos.
6. [ ] **Fase 6:** Pruebas responsivas en smartphone y optimización estética de destellos.

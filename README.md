# La Despensa de Nerea

Landing local en HTML5, CSS3 y JavaScript puro. Abrir `index.html` con Live Server de VS Code. No requiere instalación, compilación ni dependencias de ejecución. No se ha realizado ningún despliegue.

## Contenido y criterio comercial

Nombre, dirección y teléfono facilitados por el cliente: La Despensa de Nerea, Avenida Diputación, 1A, 11670 El Bosque, Cádiz; 666 820 241.

Investigación consultada el 23 de octubre de 2026:

- [QDQ](https://www.qdq.com/la-despensa-de-nerea-1188225): clasifica el negocio como tienda de alimentación. Publica el número 15 de la avenida, distinto del facilitado. Se toma únicamente la categoría general.
- [Firmania](https://firmania.es/el-bosque-cadiz-andalucia/la-despensa-de-nerea-2025845): tienda general, dirección 1A y teléfono coincidentes con el encargo. Su ficha indica actualización el 18/06/2026; no es una confirmación directa de vigencia.
- [Cybo](https://galego.cybo.com/ES/el-bosque-c%C3%A1diz/mercado-e-supermercados/): clasificación de alimentación y dirección/teléfono coincidentes.
- [Tripadvisor](https://www.tripadvisor.es/Restaurant_Review-g608974-d27337146-Reviews-La_Despensa_De_Nerea-El_Bosque_Sierra_de_Grazalema_Natural_Park_Province_of_Cadi.html): ficha no reclamada, sin fotografías ni descripción; publica otra numeración. No se usa su clasificación como restaurante.
- [Panadería Santa Elena](https://panaderiasantaelena.es/la-despensa-de-nerea/) y [Ganadería de Cádiz](https://ganaderiadecadiz.com/otro-producto/la-despensa-de-nerea/): textos de directorio con afirmaciones comerciales que no han podido corroborarse con una fuente oficial. No se han trasladado categorías, servicios, correo, supuestas redes, valoraciones ni pedidos a la landing.

La coincidencia de directorios permite una presentación prudente como tienda de alimentación. No se encontró una fuente oficial inequívoca con categorías, surtido, fotos autorizadas o servicios. Los horarios publicados discrepan; se invita a consultarlos por teléfono. No se incluyen horarios en datos estructurados ni estados de apertura.

### Información pendiente del titular

Para ampliar la presentación comercial hacen falta: categorías reales, especialización, fotografías propias con permiso, identidad gráfica oficial, servicios confirmados, horarios vigentes y enlaces sociales oficiales. Conviene ratificar la numeración 1A frente a las discrepancias de directorios. La web usa la dirección expresamente facilitada. No se han inventado catálogo, productos disponibles, marcas, historia, ofertas ni testimonios.

## Diseño

Concepto de escaparate modular: gran panel tipográfico, franja fotográfica, módulos de ruta y teléfono; relato de compra, guía de visita, dirección y contacto. Paleta solicitada. Botones con esquinas redondeadas y signos de apertura; interacciones breves al pasar el cursor, sin animación automática ni contenido oculto.

Se revisaron los HTML y estilos de Chacinas Olmedo, Miel El Bosque, Panadería El Rescoldo, Ferretería Corrales, La Rosa de Papel, Tasquita el Callejón y Mesón Bar España. La combinación Anybody / DM Sans es distinta de las fuentes declaradas en esos proyectos; no se copiaron sus estilos ni imágenes.

## Fotografías locales y licencias

Son imágenes ilustrativas de alimentación, no del negocio. Se indica junto a cada fotografía y en el pie. No acreditan la venta de los alimentos representados. No se han empleado fotografías de locales ajenos ni se han reutilizado archivos de las landings anteriores.

| Archivo | Autor y fuente | Licencia | Dimensiones |
| --- | --- | --- | --- |
| `img/compra.webp` | [Polina Tankilevitch, Pexels 5719885](https://www.pexels.com/photo/close-up-shot-of-vegetables-in-a-reusable-bag-5719885/) | [Pexels](https://www.pexels.com/license/), uso comercial y modificación permitidos | 1400 × 933 |
| `img/despensa.webp` | [Mary Skrynnikova, Unsplash zcaLASRz44k](https://unsplash.com/photos/a-bag-filled-with-lettuce-and-tomatoes-zcaLASRz44k) | [Unsplash](https://unsplash.com/license), uso comercial y modificación permitidos | 1100 × 1467 |

Descargas de origen:

- https://images.pexels.com/photos/5719885/pexels-photo-5719885.jpeg?auto=compress&cs=tinysrgb&w=1400
- https://images.unsplash.com/photo-1638024912888-ac77d663c72f?auto=format&fit=crop&fm=jpg&q=85&w=1400

Se conservaron las descargas como `compra-original.jpg` (JPEG real, 1400 × 933) y `despensa-original.jpg` (JPEG real, 1400 × 1867). Se decodificaron con Sharp y convirtieron realmente a WebP, calidad 83; no se renombraron extensiones. El navegador verifica también su carga y decodificación. Todas las rutas de imágenes de la página son locales.

## Tipografías

Anybody y DM Sans, obtenidas del repositorio oficial [Google Fonts](https://github.com/google/fonts), carpetas `ofl/anybody` y `ofl/dmsans`. Fuentes variables locales con `font-display: swap`. Se adjuntan las licencias SIL Open Font License en `css/anybody-OFL.txt` y `css/dm-sans-OFL.txt`.

## Funcionalidad y accesibilidad

- Navegación por anclas reales; Contactar desplaza a la sección de contacto.
- Llamar usa `tel:+34666820241`. Google Maps busca nombre y dirección sin inventar coordenadas.
- Copiar teléfono utiliza Clipboard API; ante denegación muestra un campo seleccionado para copia manual. El botón solo se ofrece cuando JavaScript se ejecuta.
- HTML semántico, enlace de salto, foco visible, textos alternativos, estado de copia anunciado, contraste de texto y adaptación a movimiento reducido.
- Sin JavaScript, imágenes, navegación y enlaces de llamada siguen funcionando.
- SEO local con `GroceryStore`, dirección y teléfono. Sin reseñas, horarios ni categorías específicas inventadas.
- Open Graph incluye imagen relativa para el entorno local. Al disponer de dominio definitivo, convertir `og:image` a URL absoluta y añadir `og:url` y canonical. No se inventa un dominio en este proyecto.
- Sin formularios, cookies de seguimiento, mapas incrustados ni llamadas externas de la página al cargar.

## Comprobaciones ejecutadas

Chrome real en modo headless mediante Playwright, servidor local temporal cerrado al terminar:

- 375, 768, 1440 y 1920 px: sin desbordamiento horizontal; ambas imágenes cargadas, decodificadas y visibles; anclas válidas.
- Capturas de página completa de 375 y 1440 px inspeccionadas visualmente.
- Sin errores de JavaScript ni recursos con respuesta HTTP de error.
- Copia real al portapapeles: `666 820 241`; confirmación accesible correcta.
- Denegación simulada de Clipboard API: campo de copia manual visible.
- JavaScript desactivado: imágenes siguen visibles y cargadas.
- `node --check js/script.js`: correcto.

El script y capturas de comprobación están en `.qa/`, excluidos de Git. Las herramientas de QA se utilizaron en modo lectura desde una instalación existente en el espacio de trabajo; no son dependencias del sitio y no se modificaron otros proyectos. Se comprobaron los destinos `tel:` y las consultas de Maps en el código; no se efectuó ninguna llamada telefónica ni se certifica la ubicación geográfica que Google pueda resolver.

Solo se han creado archivos dentro de `la-despensa-de-nerea/`. No hay configuración de Netlify ni herramientas de compilación.

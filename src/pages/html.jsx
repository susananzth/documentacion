import Nav from '../Nav'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

export default function Route() {
    return (
        <div>
            <Nav />
            <div className="container">
                <Sidebar className="my-5" />
                <h1>¿Que es HTML?</h1>
                <p>Consultar los siguientes enlaces para documentación:
                    <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started" 
                        target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" rel="noopener noreferrer"></a>
                </p>

                <h3>Motor de renderizado</h3>
                <em>¿Cuáles son los motores del navegador?</em>
                <p>
                    Los navegadores tienen sus propios motores: 
                    Chrome - Blink, Edge - Edge HTML, Safari - Webkit y Firefox - Gecko. 
                    Todos realizan esta compilación de manera diferente, pero con el mismo resultado, 
                    es decir, convierten los archivos a píxeles.

                    <p>Proceso de renderizado del motor del navegador</p>
                    El motor del navegador realiza 5 pasos o procesos para compilar 
                    nuestro código hasta el renderizado por pantalla. Estos pasos son los siguientes:

                    Transforma los archivos a un árbol de objetos HTML o CSS, 
                    estos se denominan DOM (Document Object Model) y CSSDOM 
                    (Cascade Style Sheet Object Model), respectivamente. 
                    Cada nodo en el árbol es una representación de los elementos que contiene el archivo HTML o CSS.
                    Calcula el estilo correspondiente a cada nodo del DOM relacionado al CSSDOM.
                    Calcula las dimensiones de cada nodo y dónde va en la pantalla.
                    Pinta o renderiza los diferentes elementos como cajas o contenedores.
                    Agrupa todas las cajas en diferentes capas para convertirlas en una imagen que se renderiza en pantalla.
                </p>

                <h3>Anatomía de un documento HTML y sus elementos</h3>
                Antes de empezar a escribir código HTML, debemos conocer la anatomía de un documento y sus elementos.

                <b>¿Cuáles son los elementos HTML?</b>
                Los elementos son cada una de las partes que conforman un archivo HTML. Su estructura contiene:
                <ul>
                    <li>
                        <b>Etiquetas</b>: es la representación de un elemento HTML. 
                        Se dividen en etiquetas de apertura, representadas por &lt;etiqueta&gt; y etiquetas de cierre, representadas por &lt;/etiqueta&gt;.
                    </li>
                    <li>
                        <b>Contenido</b>: es el texto o elementos encerrados por la etiqueta, este valor es opcional en algunas de ellas.
                    </li>
                </ul>
                <b>Qué son atributos HTML</b>
                Los atributos HTML son propiedades en la etiqueta de apertura que manejan el comportamiento del elemento. 
                Su valor está envuelto en comillas.

                <b>Qué son los elementos vacíos</b>
                Los elementos vacíos son aquellos que únicamente se representan 
                en una etiqueta de apertura. Por ejemplo, la etiqueta de imagen: &lt;img...&gt;.

                Representación de elementos HTML vacíos
                Estas etiquetas pueden cerrarse en la misma etiqueta de apertura, 
                utilizando la barra inclinada “/” al final: &lt;img.../&gt;,

                Qué es el anidamiento de elementos
                El anidamiento de elementos HTML consiste en envolver varias 
                etiquetas en otras etiquetas.

                Interpreta a cada elemento HTML como una caja donde puedes 
                guardar diferentes elementos u otras cajas. Estas cajas tendrán diferentes 
                tamaños y estarán colocadas junto a otras.

                Anidamiento de elementos HTML
                Aquellas etiquetas que envuelven a otras se las denomina 
                “padres”. Es decir, &lt;section&gt; es padre de &lt;h1&gt;, &lt;p&gt;, &lt;ul&gt;, 
                y a su vez &lt;ul&gt; es padre de 3 etiquetas &lt;li&gt;.

                Las etiquetas que son el contenido de otras, se las denomina “hijos”. Es decir, 
                las etiquetas &lt;h1&gt;, &lt;p&gt;, &lt;ul&gt; son hijos de &lt;section&gt;, y a su vez las 
                etiquetas &lt;li&gt; son hijos de &lt;ul&gt;.

                Estructura básica de un documento HTML
                La estructura básica de un documento HTML está configurado por las siguientes 
                etiquetas principales:

                Estructura básica de un archivo HTML
                Etiqueta Doctype
                La etiqueta &lt;!DOCTYPE html&gt; especifica que el archivo se maneje con la 
                versión 5 de HTML.

                Etiqueta html
                La etiqueta &lt;html&gt; define el elemento raíz de un documento HTML. Todos los 
                demás elementos deben estar contenidos dentro de este elemento raíz. En esta 
                etiqueta se especifica el lenguaje de la página web mediante la propiedad lang.

                Etiqueta head
                La etiqueta &lt;head&gt; define la metainformación, es decir, toda información que 
                no es contenido como tal de la página web. Por ejemplo, los enlaces a archivos 
                CSS y JavaScript, el título y la imagen que aparecen en la pestaña del navegador. 
                Esto es importante para motores de búsqueda como Google.

                Etiqueta body
                La etiqueta &lt;body&gt; define el contenido de la página web. Debe ser hijo cercano 
                de &lt;html&gt; y padre de todas las etiquetas HTML, excepto por aquellas que definan 
                metainformación.

                Comentarios de HTML
                Los comentarios de HTML consiste en señalar algo que se ignorará. Para establecer 
                un comentario HTML se lo envuelve entre &lt;!-- y --&gt;, independiente de la cantidad de 
                líneas.
                
            </div>
            <Footer />
        </div>
    )
}
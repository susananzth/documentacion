import Nav from '../Nav'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

export default function Route() {
    return (
        <div>
            <Nav />
            <div className="container">
                <Sidebar className="my-5" />
                <h1>CSS</h1>
                <em>Documentación frontend - CSS</em>

                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#requisites" aria-expanded="false"  
                                aria-controls="requisites">Pre - Requisitos
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="requisites">
                            <ul className="list-unstyled accordion-body">
                                <li>
                                    <a href="https://www.notion.so/Inicial-Pre-Work-6eb2d09a63a84b5e8e06983cfa3983ce" target="_blank" rel="noopener noreferrer">
                                        Pre - Work
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#content" aria-expanded="false"  
                                aria-controls="content">Contenido
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="content">
                            <div className="accordion-body">
                                <ul className="list-unstyled accordion">
                                    <li className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#anatomy" aria-expanded="false"  
                                                aria-controls="anatomy">Anatomía de una declaración CSS
                                            </button>
                                        </h2>
                                        <div className="accordion-collapse collapse" id="anatomy">
                                            <h6>Selectores, propiedades y valores</h6>
                                            Antes de empezar a escribir código CSS, debemos conocer la anatomía de una declaración de estilos.
                                            <h6>Qué es una declaración de CSS</h6>
                                            Una declaración de CSS es un bloque que especifica el conjunto de estilos que 
                                            se añadirán a un elemento HTML. Su estructura contiene lo siguiente:
                                            <ul>
                                                <li><strong>Selector</strong>: define el elemento o conjunto de elementos a los cuales se añadirán los estilos.</li>
                                                <li><strong>Propiedad</strong>: es el nombre del estilo de CSS.</li>
                                                <li><strong>Valor</strong>: es el valor que tomará la propiedad.</li>
                                            </ul>
                                            <h6>Qué son comentarios de CSS</h6>
                                            Los comentarios de CSS consisten en señalar algo que se ignorará. 
                                            Para establecer un comentario CSS se lo envuelve entre /* y */, independiente de la cantidad de líneas.
                                            <h6>Propiedades iniciales de CSS</h6>
                                            Antes de empezar con CSS utilizaremos algunas propiedades de CSS.
                                            <ul>
                                                <li><strong>color</strong>: establece el color del texto de un elemento.</li>
                                                <li><strong>background-color</strong>: establece un color de fondo al elemento.</li>
                                                <li><strong>font-size</strong>: establece el tamaño de la fuente.</li>
                                                <li><strong>width</strong>: establece la anchura de un elemento.</li>
                                                <li><strong>height</strong>: establece la altura de un elemento.</li>
                                            </ul>
                                            <h6>Medidas iniciales</h6>
                                            Estas son las medidas iniciales que debes conocer para establecer tamaños de elementos o de tipografía:
                                            <ul>
                                                <li><strong>px</strong>: establece una longitud de píxeles.</li>
                                                <li><strong>%</strong>: establece un porcentaje con respecto a una medida base.</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#selectors" aria-expanded="false"  
                                                aria-controls="selectors">Selectores
                                            </button>
                                        </h2>
                                        <div className="accordion-collapse collapse" id="selectors">
                                            <h6>Cuáles son los selectores básicos</h6>
                                            <div className="border border-primary rounded pt-2 px-3">
                                                Un selector básico es la mínima expresión CSS para colocar estilos.
        <pre>
            <code className="language-css">
                selector {
                    /* Estilos */
                }
            </code>
        </pre>
                                            </div>
                                            <h6>Tipos de selectores básicos</h6>
                                            <div className="border border-primary rounded pt-2 px-3">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <strong>Selector de tipo</strong>: Selecciona todos los elementos que coincidan con el nombre de la etiqueta HTML.
        <pre>
            <code className="language-css">
                div {
                    /* Todos los div en el documento */
                }
            </code>
        </pre>
                                                    </li>
                                                    <li>
                                                        <strong>Selector de clase</strong>: Selecciona todos los elementos que coincidan con las etiquetas HTML que contengan el atributo class.
        <pre>
            <code className="language-html">
                &lt;!-- archivo HTML --&gt;
                &lt;div className=&quot;card&quot;&gt; Soy una carta &lt;/div&gt;
                &lt;button id=&quot;eliminar&quot;&gt; Eliminar  &lt;/button&gt;
            </code>
        </pre>
                                                        Para seleccionar estos elementos, se empieza por un punto . y seguido el valor exacto del atributo 
                                                        class de la etiqueta. Puede ser cualquier valor que desees colocar.
        <pre>
            <code className="language-css">
                /* archivo CSS */
                .card {
                    /* Todas las etiquetas con la clase "card" */
                }
                #eliminar {
                    /* La única etiqueta con el id "eliminar" */
                }
            </code>
        </pre>
                                                        Puede existir más de un valor dentro del atributo class separados por espacios.
        <pre>
            <code className="language-html">
                &lt;!-- archivo HTML --&gt;
                &lt;div className=&quot;card card1&quot;&gt; Soy una carta &lt;/div&gt;
                &lt;div className=&quot;card card2&quot;&gt; Soy una carta &lt;/div&gt;
            </code>
        </pre>
        <pre>
            <code className="language-css">
                /* archivo CSS */
                .card {
                    /* Todas las etiquetas con la clase "card" */
                }
                
                .card1 {
                    /* Todas las etiquetas con la clase "card1" */
                }
                
                .card2 {
                    /* Todas las etiquetas con la clase "card2" */
                }
            </code>
        </pre>
                                                    </li>
                                                    <li>
                                                        <strong>Selector de identificador único (id)</strong>:
                                                        Selecciona el único elemento que coincida con la etiqueta HTML que contenga el 
                                                        atributo id. Solo puede existir un valor id para todo el documento.
        <pre>
            <code className="language-html">
                &lt;!-- archivo HTML --&gt;
                &lt;button id=&quot;eliminar&quot;&gt; Eliminar  &lt;/button&gt;
            </code>
        </pre>
                                                        Para seleccionar el elemento, se empieza por el símbolo de hashtag # y 
                                                        seguido el valor exacto del atributo id de la etiqueta. Puede ser cualquier valor que desees colocar.
        <pre>
            <code className="language-css">
                /* archivo CSS */
                #eliminar {
                    /* La única etiqueta con el id "eliminar" */
                }
            </code>
        </pre>
                                                    </li>
                                                    <li>
                                                        <strong>Selector de atributo</strong>:
                                                        Selecciona los elementos que coincidan con la etiqueta HTML que contenga el atributo y valor especificado.
        <pre>
            <code className="language-html">
                &lt;!-- archivo HTML --&gt;
                &lt;a href=&quot;https://susananzth.com&quot;&gt; Ir a Susananzth &lt;/a&gt;
            </code>
        </pre>
                                                        Para seleccionar los elementos, se empieza por el nombre de la etiqueta, seguido de 
                                                        corchetes [] que contiene el atributo y valor especificado.
        <pre>
            <code className="language-css">
                /* archivo CSS */
                a[href=""https://susananzth.com"] {
                    /* Todas las etiquetas <a> con una propiedad href con valor "https://susananzth.com" */
                }
            </code>
        </pre>
                                                    </li>
                                                    <li>
                                                        <strong>Selector universal</strong>:
                                                        Selecciona todos los elementos del documento mediante un asterisco *.
        <pre>
            <code className="language-css">
                /* archivo CSS */
                * {
                    /* Todos los elementos */
                }
            </code>
        </pre>
                                                    </li>
                                                </ul>
                                            </div>
                                            <h6>Selectores combinadores</h6>
                                            <div className="border border-primary rounded pt-2 px-3">
                                                Un selector combinador es la unión de dos o más selectores básicos.
        <pre>
            <code className="language-css">
                selector1 selector2 selector3 {
                    /* Estilos */
                }
            </code>
        </pre>
                                            </div>
                                            <h6>Tipos de selectores combinadores</h6>
                                            <div className="border border-primary rounded pt-2 px-3">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <strong>Combinador de descendientes</strong>: 
                                                        Selecciona todos los elementos del selector de la derecha que son hijos 
                                                        del selector de la izquierda, independientemente de la profundidad. 
                                                        Estos selectores están separados por un espacio.
        <pre>
            <code className="language-css">
                padre hijos {
                    /* Todos los hijos del padre */
                }
                div p{
                    /* Todos los hijos &lt;p&gt; de &lt;div&gt;*/
                }
                .container img{
                    /* Todos los hijos &lt;img&gt; de la clase "container"*/
                }
            </code>
        </pre>
                                                    </li>
                                                    <li>
                                                        <strong>Combinador de elemento adyacente</strong>: 
                                                        Selecciona todos los elementos del selector de la derecha que están 
                                                        adyacente al selector de la izquierda. Estos selectores están separados por +.
                                                        Adyacente significa que comparten el mismo padre y está situado inmediatamente 
                                                        hacia abajo de otro elemento. Por ejemplo, en el siguiente código, &lt;div&gt; 
                                                        está adyacente a &lt;h1&gt; y &lt;p&gt; está adyacente a &lt;div&gt;. Sin embargo, &lt;h1&gt; 
                                                        no está adyacente a &lt;div&gt; y &lt;div&gt; no está adyacente a &lt;p&gt;.
        <pre>
            <code className="language-css">
                elemento + adyacente {
                    /* Elementos adyacentes */
                }
                div + p{
                    /* Todos los &lt;p&gt; adyacentes a &lt;div&gt;*/
                }
                .container + img{
                    /* Todos los &lt;img&gt; adyacentes a la clase "container"*/
                }
            </code>
        </pre>
                                                    </li>
                                                    <li>
                                                        <strong>Combinador general de hermanos</strong>:
                                                        Selecciona todos los elementos del selector de la derecha que son hermanos 
                                                        del selector de la izquierda. Estos selectores están separados por ~.
                                                        Hermanos significa que comparten el mismo padre y están situados hacia 
                                                        abajo de otro elemento. Por ejemplo, en el siguiente código, &lt;div&gt; y &lt;p&gt; 
                                                        son hermanos de &lt;h1&gt;, pero &lt;h1&gt; no es hermano de &lt;div&gt; y &lt;p&gt;.
        <pre>
            <code className="language-css">
                elemento ~ hermanos {
                    /* Elementos hermanos */
                }
                div ~ p{
                    /* Todos los &lt;p&gt; hermanos de &lt;div&gt;*/
                }
                .container ~ img{
                    /* Todos los &lt;img&gt; hermanos de la clase "container"*/
                }
            </code>
        </pre>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#projects" aria-expanded="false"  
                                aria-controls="projects">Proyectos - Ejercicios
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="projects">
                            <ul className="list-unstyled accordion-body">
                                <li>A</li>
                                <li>B</li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#certifications" aria-expanded="false"  
                                aria-controls="certifications">Certificaciones
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="certifications">
                            <ul className="list-unstyled accordion-body">
                                <li>
                                    <a href="https://platzi.com/cursos/html-practico/" 
                                        target="_blank" rel="noopener noreferrer">
                                        <span className="badge text-bg-info">10/2023</span> Curso Práctico de HTML y CSS | Platzi
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#sources" aria-expanded="false"  
                                aria-controls="sources">Fuentes
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="sources">
                            <ul className="list-unstyled accordion-body">
                                <li>
                                    <a href="https://platzi.com/cursos/html-practico/" 
                                        target="_blank" rel="noopener noreferrer">
                                        <span className="badge text-bg-info">10/2023</span> Curso Práctico de HTML y CSS | Platzi
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#links" aria-expanded="false"  
                                aria-controls="links">Enlaces relacionados
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="links">
                            <ul className="list-unstyled accordion-body">
                                <li>A</li>
                                <li>B</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
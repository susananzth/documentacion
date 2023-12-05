import Nav from '../Nav'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import TitleSubtitle from '../components/TitleSubtitle'
import AccordionItem from '../components/AccordionItem'
import Code from '../components/Code'

export default function Route() {
    return (
        <div>
            <Nav />
            <div className="container">
                <Sidebar className="my-5" />
                <TitleSubtitle 
                    title='CSS'
                    subTitle='Documentación frontend - CSS'
                />

                <div className="accordion">
                    <AccordionItem id="requisites" title="Pre - Requisitos">
                        <li>
                            <a href="https://www.notion.so/Inicial-Pre-Work-6eb2d09a63a84b5e8e06983cfa3983ce" target="_blank" rel="noopener noreferrer">
                                Pre - Work
                            </a>
                        </li>
                    </AccordionItem>
                    <AccordionItem id="content" title="Contenido">
                        <li className="accordion">
                            <AccordionItem id="anatomy" title="Anatomía de una declaración CSS">
                                <li>
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
                                </li>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="selectors" title="Selectores">
                                <li>
                                    <h6>Cuáles son los selectores básicos</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Un selector básico es la mínima expresión CSS para colocar estilos.
                                        <Code language="language-css">
                                            selector {
                                                /* Estilos */
                                            }
                                        </Code>
                                    </div>
                                    <h6>Tipos de selectores básicos</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        <ul className="list-unstyled">
                                            <li>
                                                <strong>Selector de tipo</strong>: Selecciona todos los 
                                                elementos que coincidan con el nombre de la etiqueta HTML.
                                                <Code language="language-css">
                                                    div {
                                                        /* Todos los div en el documento */
                                                    }
                                                </Code>
                                            </li>
                                            <li>
                                                <strong>Selector de clase</strong>: Selecciona todos los 
                                                elementos que coincidan con las etiquetas HTML que contengan 
                                                el atributo class.
                                                <Code language="language-html">
                                                    &lt;!-- archivo HTML --&gt;
                                                    &lt;div className=&quot;card&quot;&gt; Soy una carta &lt;/div&gt;
                                                    &lt;button id=&quot;eliminar&quot;&gt; Eliminar  &lt;/button&gt;
                                                </Code>
                                                Para seleccionar estos elementos, se empieza por un punto . y 
                                                seguido el valor exacto del atributo class de la etiqueta. 
                                                Puede ser cualquier valor que desees colocar.
                                                <Code language="language-css">
                                                    /* archivo CSS */
                                                    .card {
                                                        /* Todas las etiquetas con la clase "card" */
                                                    }
                                                    #eliminar {
                                                        /* La única etiqueta con el id "eliminar" */
                                                    }
                                                </Code>
                                                Puede existir más de un valor dentro del atributo class 
                                                separados por espacios.
                                                <Code language="language-html">
                                                    &lt;!-- archivo HTML --&gt;
                                                    &lt;div className=&quot;card card1&quot;&gt; Soy una carta &lt;/div&gt;
                                                    &lt;div className=&quot;card card2&quot;&gt; Soy una carta &lt;/div&gt;
                                                </Code>
                                                <Code language="language-css">
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
                                                </Code>
                                            </li>
                                            <li>
                                                <strong>Selector de identificador único (id)</strong>:
                                                Selecciona el único elemento que coincida con la etiqueta 
                                                HTML que contenga el atributo id. Solo puede existir un 
                                                valor id para todo el documento.
                                                <Code language="language-html">
                                                    &lt;!-- archivo HTML --&gt;
                                                    &lt;button id=&quot;eliminar&quot;&gt; Eliminar  &lt;/button&gt;
                                                </Code>
                                                Para seleccionar el elemento, se empieza por el símbolo de 
                                                hashtag # y seguido el valor exacto del atributo id de la 
                                                etiqueta. Puede ser cualquier valor que desees colocar.
                                                <Code language="language-css">
                                                    /* archivo CSS */
                                                    #eliminar {
                                                        /* La única etiqueta con el id "eliminar" */
                                                    }
                                                </Code>
                                            </li>
                                            <li>
                                                <strong>Selector de atributo</strong>:
                                                Selecciona los elementos que coincidan con la etiqueta HTML 
                                                que contenga el atributo y valor especificado.
                                                <Code language="language-html">
                                                    &lt;!-- archivo HTML --&gt;
                                                    &lt;a href=&quot;https://susananzth.com&quot;&gt; Ir a Susananzth &lt;/a&gt;
                                                </Code>
                                                Para seleccionar los elementos, se empieza por el nombre de 
                                                la etiqueta, seguido de corchetes [] que contiene el atributo 
                                                y valor especificado.
                                                <Code language="language-css">
                                                    /* archivo CSS */
                                                    a[href=""https://susananzth.com"] {
                                                        /* Todas las etiquetas <a> con una propiedad href con valor "https://susananzth.com" */
                                                    }
                                                </Code>
                                            </li>
                                            <li>
                                                <strong>Selector universal</strong>:
                                                Selecciona todos los elementos del documento mediante un 
                                                asterisco *.
                                                <Code language="language-css">
                                                    /* archivo CSS */
                                                    * {
                                                        /* Todos los elementos */
                                                    }
                                                </Code>
                                            </li>
                                        </ul>
                                    </div>
                                    <h6>Selectores combinadores</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Un selector combinador es la unión de dos o más selectores básicos.
                                        <Code language="language-css">
                                            selector1 selector2 selector3 {
                                                /* Estilos */
                                            }
                                        </Code>
                                    </div>
                                    <h6>Tipos de selectores combinadores</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        <ul className="list-unstyled">
                                            <li>
                                                <strong>Combinador de descendientes</strong>: 
                                                Selecciona todos los elementos del selector de la derecha que son hijos 
                                                del selector de la izquierda, independientemente de la profundidad. 
                                                Estos selectores están separados por un espacio.
                                                <Code language="language-css">
                                                    padre hijos {
                                                        /* Todos los hijos del padre */
                                                    }
                                                    div p{
                                                        /* Todos los hijos &lt;p&gt; de &lt;div&gt;*/
                                                    }
                                                    .container img{
                                                        /* Todos los hijos &lt;img&gt; de la clase "container"*/
                                                    }
                                                </Code>
                                            </li>
                                            <li>
                                                <strong>Combinador de elemento adyacente</strong>: 
                                                Selecciona todos los elementos del selector de la derecha que están 
                                                adyacente al selector de la izquierda. Estos selectores están separados por +.
                                                Adyacente significa que comparten el mismo padre y está situado inmediatamente 
                                                hacia abajo de otro elemento. Por ejemplo, en el siguiente código, &lt;div&gt; 
                                                está adyacente a &lt;h1&gt; y &lt;p&gt; está adyacente a &lt;div&gt;. Sin embargo, &lt;h1&gt; 
                                                no está adyacente a &lt;div&gt; y &lt;div&gt; no está adyacente a &lt;p&gt;.
                                                <Code language="language-css">
                                                    elemento + adyacente {
                                                        /* Elementos adyacentes */
                                                    }
                                                    div + p{
                                                        /* Todos los &lt;p&gt; adyacentes a &lt;div&gt;*/
                                                    }
                                                    .container + img{
                                                        /* Todos los &lt;img&gt; adyacentes a la clase "container"*/
                                                    }
                                                </Code>
                                            </li>
                                            <li>
                                                <strong>Combinador general de hermanos</strong>:
                                                Selecciona todos los elementos del selector de la derecha que son hermanos 
                                                del selector de la izquierda. Estos selectores están separados por ~.
                                                Hermanos significa que comparten el mismo padre y están situados hacia 
                                                abajo de otro elemento. Por ejemplo, en el siguiente código, &lt;div&gt; y &lt;p&gt; 
                                                son hermanos de &lt;h1&gt;, pero &lt;h1&gt; no es hermano de &lt;div&gt; y &lt;p&gt;.
                                                <Code language="language-css">
                                                    elemento ~ hermanos {
                                                        /* Elementos hermanos */
                                                    }
                                                    div ~ p{
                                                        /* Todos los &lt;p&gt; hermanos de &lt;div&gt;*/
                                                    }
                                                    .container ~ img{
                                                        /* Todos los &lt;img&gt; hermanos de la clase "container"*/
                                                    }
                                                </Code>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </AccordionItem>
                        </li>
                    </AccordionItem>                                    
                    <AccordionItem id="projects" title="Proyectos - Ejercicios">
                        <li>A</li>
                        <li>B</li>
                    </AccordionItem>
                    <AccordionItem id="certifications" title="Certificaciones">
                        <li>
                            <a href="https://platzi.com/cursos/html-practico/" 
                                target="_blank" rel="noopener noreferrer">
                                <span className="badge text-bg-info">10/2023</span> Curso Práctico de HTML y CSS | Platzi
                            </a>
                        </li>
                    </AccordionItem>
                    <AccordionItem id="sources" title="Fuentes">
                        <li>
                            <a href="https://platzi.com/cursos/html-practico/" 
                                target="_blank" rel="noopener noreferrer">
                                <span className="badge text-bg-info">10/2023</span> Curso Práctico de HTML y CSS | Platzi
                            </a>
                        </li>
                    </AccordionItem>
                    <AccordionItem id="links" title="Enlaces relacionados">
                        <li>A</li>
                        <li>B</li>
                    </AccordionItem>
                </div>
            </div>
            <Footer />
        </div>
    )
}
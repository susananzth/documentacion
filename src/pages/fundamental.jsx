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
                    title='Fundamentos de programación'
                    subTitle='Documentación, fundamentos, algoritmo y estructura de datos'
                />

                <div className="accordion">
                    <AccordionItem id="requisites" title="Pre - Requisitos">
                        <li>A</li>
                        <li>B</li>
                    </AccordionItem>
                    <AccordionItem id="content" title="Contenido">
                        <li className="accordion">
                            <AccordionItem id="variable" title="Datos y tipos de datos">
                                <h6>Datos</h6>
                                <p>
                                    Un dato es una porción de información muy concreta y específica 
                                    que nos permite tomar decisiones, a través de diferentes operaciones y estructuras.
                                </p>
                                <p>
                                    Los datos hacen parte de un algoritmo en una estructura más grande. 
                                    También son la base sobre la cual partimos y llegamos, y además componen 
                                    todas las estructuras para que puedan funcionar.
                                </p>
                                <h6>Tipos de datos</h6>
                                <ul>
                                    <li>
                                        Tipo texto <span className="badge text-bg-secondary">string</span>: 
                                        El tipo de dato texto consiste en un conjunto de caracteres. Los caracteres pueden 
                                        ser letras, números, símbolos, espacios e incluso emojis
                                    </li>
                                    <li>
                                        Tipo numérico <span className="badge text-bg-secondary">number</span>: 
                                        son la representación de los números en un dato. A través de estos podemos realizar 
                                        operaciones matemáticas básicas. Estos se dividen en dos tipos: enteros y flotantes.
                                    </li>
                                    <li>
                                        Tipo numérico entero <span className="badge text-bg-secondary">integers</span> y 
                                        <span className="badge text-bg-secondary">bigint</span>: Los tipos de datos enteros 
                                        consisten en la representación del número sin la parte decimal.
                                    </li>
                                    <li>
                                        Tipo numérico decimal o flotantes <span className="badge text-bg-secondary">decimal</span> y 
                                        <span className="badge text-bg-secondary">float</span>: Los tipos de datos flotantes consisten 
                                        en la representación del número con la parte decimal.
                                    </li>
                                    <li>
                                        Tipo numérico boleanos <span className="badge text-bg-secondary">boolean</span>: 
                                        Los tipos de datos booleanos consisten en representar la lógica binaria, únicamente dos valores 1 y 0. 
                                        Esta representación binaria puede ser verdadero (`1`) y falso (`0`), 
                                        o true y false.
                                    </li>
                                </ul>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="conditionals" title="Condicionales">
                                <p>
                                    Los condicionales son estructuras de control que te permiten evaluar diferentes 
                                    expresiones como verdadero o falso y realizar determinadas acciones.
                                </p>
                                <p>
                                    Existen tres tipos de condicionales:
                                </p>
                                <h6>IF ELSE</h6>
                                <p>
                                    Un condicional <span className="badge text-bg-secondary">if</span> 
                                    evalúa una expresión si es verdadera.La palabra reservada 
                                    <span className="badge text-bg-secondary">else</span> evalúa cuando la 
                                    expresión del <span className="badge text-bg-secondary">if</span> es 
                                    falsa, pero no es obligatorio colocarlo.
                                </p>
                                <Code>
                                    if (true) {
                                        // Se ejecuta la declaración
                                    }

                                    {/*
                                    funcion test (miCondicion) {
                                        if (miCondicion) {
                                            retunr "Es verdadero";
                                        }
                                        retunr "Es falso";
                                    }
                                    test(true);
                                    test(false);

                                    var edad = 35;
                                    if (edad &gt;= 18) {
                                        console.log("Puedes conducir");
                                    } else {
                                        console.log("No puedes conducir");
                                    }
                                    */}
                                </Code>
                                <h6>switch</h6>
                                <h6>try / catch</h6>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="properties" title="Propiedades o funciones nativas">
                                <h6>.length</h6>
                                <p>
                                    Se utiliza para contar los caracteres de una cadena de texto o cantidad 
                                    de elementos de un array.
                                </p>
                                <p>
                                    En el caso de los caracteres, tambien contará los espacios en blanco:
                                </p>
                                <Code>
                                    const miTexto = "Cantidad de caracteres.";
                                    console.log(miTexto.length); // Mostrará: 26.

                                    const miArray = [654, 97, 321];
                                    console.log(miArray.length); // Mostrará: 3.
                                </Code>
                                <h6>.push()</h6>
                                <p>
                                    Se utiliza para insertar uno o muchos elementos al final de un array.
                                </p>
                                <Code>
                                    const array1 = [1, 2, 3];
                                    array1.push(4, 5); // Queda: array1 = [1, 2, 3, 4, 5];

                                    const array2 = ["Stimpson", "J", "cat"];
                                    array2.push(["happy", "joy"]); // Queda: ["Stimpson", "J", "cat", "happy", "joy"];
                                </Code>
                                <h6>.unshift()</h6>
                                <p>
                                    Se utiliza para insertar uno o muchos elementos al principio de un array.
                                </p>
                                <Code>
                                    const array1 = [1, 2, 3];
                                    array1.unshift(4, 5); // Queda: array1 = [4, 5, 1, 2, 3];

                                    const array2 = ["Stimpson", "J", "cat"];
                                    array2.unshift(["happy", "joy"]); // Queda: ["happy", "joy", "Stimpson", "J", "cat"];
                                </Code>
                                <h6>.pop()</h6>
                                <p>
                                    Se utiliza para eliminar el último elemento de un array.
                                </p>
                                <Code>
                                    const miArray = [1, 4, 6];
                                    const elemento = miArray.pop();
                                    console.log(miArray); // Mostrará el array modificado: [1, 4].
                                    console.log(elemento); // Mostrará el elemento eliminado: 6.
                                </Code>
                                <h6>.shift()</h6>
                                <p>
                                    Se utiliza para eliminar el primer elemento de un array.
                                </p>
                                <Code>
                                    const miArray = [1, 4, 6];
                                    const elemento = miArray.shift();
                                    console.log(miArray); // Mostrará el array modificado: [4, 6].
                                    console.log(elemento); // Mostrará el elemento eliminado: 1.
                                </Code>
                            </AccordionItem>
                        </li>
                    </AccordionItem>
                    <AccordionItem id="projects" title="Proyectos - Ejercicios">
                        <li>A</li>
                        <li>B</li>
                    </AccordionItem>
                    <AccordionItem id="certifications" title="Certificaciones">
                        <li>
                            <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" 
                                target="_blank" rel="noopener noreferrer">
                                <span className="badge text-bg-info">09/2023</span> Javascript algorithms and data structures | Freecodecamp
                            </a>
                        </li>
                        <li>
                            <a href="https://platzi.com/cursos/ecmascript-6/" 
                                target="_blank" rel="noopener noreferrer">
                                <span className="badge text-bg-info">09/2023</span> Curso de ECMAScript: Historia y Versiones de JavaScript | Platzi
                            </a>
                        </li>
                        <li>
                            <a href="https://platzi.com/cursos/basico-javascript/" 
                                target="_blank" rel="noopener noreferrer">
                                <span className="badge text-bg-info">09/2023</span> Curso básico de Javascript | Platzi
                            </a>
                        </li>
                        <li>
                            <a href="https://platzi.com/cursos/pensamiento-logico-estructuras/" 
                                target="_blank" rel="noopener noreferrer">
                                <span className="badge text-bg-info">09/2023</span> Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones | Platzi
                            </a>
                        </li>
                    </AccordionItem>
                    <AccordionItem id="sources" title="Fuentes">
                        <li>
                            <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" 
                                target="_blank" rel="noopener noreferrer">
                                <span className="badge text-bg-info">09/2023</span> Javascript algorithms and data structures | Freecodecamp
                            </a>
                        </li>
                        <li>
                            <a href="https://platzi.com/cursos/ecmascript-6/" 
                                target="_blank" rel="noopener noreferrer">
                                <span className="badge text-bg-info">09/2023</span> Curso de ECMAScript: Historia y Versiones de JavaScript | Platzi
                            </a>
                        </li>
                        <li>
                            <a href="https://platzi.com/cursos/basico-javascript/" 
                                target="_blank" rel="noopener noreferrer">
                                <span className="badge text-bg-info">09/2023</span> Curso básico de Javascript | Platzi
                            </a>
                        </li>
                        <li>
                            <a href="https://platzi.com/cursos/pensamiento-logico-estructuras/" 
                                target="_blank" rel="noopener noreferrer">
                                <span className="badge text-bg-info">09/2023</span> Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones | Platzi
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
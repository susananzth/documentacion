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
                </div>
            </div>
            <Footer />
        </div>
    )
}
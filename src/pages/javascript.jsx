import Nav from '../Nav'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

export default function Route() {
    return (
        <div>
            <Nav />
            <div className="container">
                <Sidebar className="my-5" />
                <h1>JavaScript</h1>
                <em>Documentación Javascript, Algorithms & Data Sctructures</em>

                <div class="accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#requisites" aria-expanded="false"  
                                aria-controls="requisites">Pre - Requisitos
                            </button>
                        </h2>
                        <div class="accordion-collapse collapse" id="requisites">
                            <ul class="list-unstyled accordion-body">
                                <li>
                                    <a href="https://www.notion.so/Inicial-Pre-Work-6eb2d09a63a84b5e8e06983cfa3983ce" target="_blank" rel="noopener noreferrer">
                                        Pre - Work
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#content" aria-expanded="false"  
                                aria-controls="content">Contenido
                            </button>
                        </h2>
                        <div class="accordion-collapse collapse" id="content">
                            <div class="accordion-body">
                                <ul class="list-unstyled accordion">
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#commentandvariable" aria-expanded="false"  
                                                aria-controls="commentandvariable">Comentarios y Variables
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="commentandvariable">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <h6>Comentarios</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Para el comentatio de una línea se utiliza los símbolos <kbd>//</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                // This is an in-line comment.
            </code>
        </pre>
                                                        Para el comentatio de varias línea se utiliza los símbolos 
                                                        <kbd>/*</kbd> para iniciar bloque de comantatio y 
                                                        <kbd>*/</kbd> para cerrar el bloque de comentario:
        <pre class="m-0">
            <code class="rounded language-js">
                /* This is a 
                multi-line comment */
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Variables</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        <u>Palabra reservada (<em>keywork</em>)<kbd>var</kbd></u>: 
                                                        In computer science, data is anything that is meaningful to the computer. 
                                                        JavaScript provides eight different data types which are 
                                                        <kbd>undefined</kbd>, <kbd>null</kbd>, <kbd>boolean</kbd>, <kbd>string</kbd>, 
                                                        <kbd>symbol</kbd>, <kbd>bigint</kbd>, <kbd>number</kbd>, <kbd>decimal</kbd>, and 
                                                        <kbd>object</kbd>. We tell JavaScript to create or declare a variable by putting the 
                                                        palabra <kbd>var</kbd> in front of it, like so:
        <pre class="m-0">
            <code class="rounded language-js">
                var miNombre;
            </code>
        </pre>
                                                        Para nombrar variables hay que tener en cuenta que son <em>case sensitive</em>, por lo que
                                                        si nombramos una variable como <kbd>MYVAR</kbd> 
                                                        no será lo mismo que <kbd>MyVar</kbd> ni 
                                                        <kbd>myvar</kbd>. Es buena practica direfenciar los nombres de 
                                                        las variables y mantener el estandar de <em>camelCase.</em>
        <pre class="m-0">
            <code class="rounded language-js">
                var unaVariable;
                var otroNombreDeVariable;
                var esteNombreDeVariableEsMuyLargo;
            </code>
        </pre>
                                                        Para asignar un valor a una variable, se puede realizar de varias formas:
        <pre class="m-0">
            <code class="rounded language-js">
                var miNumero; // Primero se declara,
                miNumero = 5; // Luego se asigna con el operador '='.

                var miNombre = "Susana"; // se declara y se asigna el valor en la misma línea.
            </code>
        </pre>
                                                            Con la declaracion de variables utilizando la palabra 
                                                            <kbd>var</kbd>, podemor reescribir o reasignar
                                                            el valor de la variable:
        <pre class="m-0">
            <code class="rounded language-js">
                var miVar = 5; // Se declara y asigna el valor '5'
                var miNumero; // Se declara una nueva variable
                miNumero = miVar; // Se asigna el valor de la vieja variable a la nueva.
                console.log([miVar, miNumero]); // Se imprimirá en consola: [5, 5] -&gt; Tipo array

                var nombre = "James"; // Se declara y asigna el valor 'James'
                var nombre = "David"; // Se re-declara y asigna el valor 'David'
                console.log(nombre); // // Se imprimirá en consola: 'David' -&gt; tipo String
                // Se imprime el segundo valor asignado ya que se está redeclarando la variable (Borrón y cuenta nueva).
            </code>
        </pre>
                                                    </div>
                                                    <div class="border border-primary rounded my-2 pt-2 px-3">
                                                        <u>Palabra reservada (<em>keywork</em>)<kbd>let</kbd></u>: 
                                                        Para prevenir el error de re-declarar la misma variable, se puede utilizar la 
                                                        palabra <kbd>let</kbd>. De esta forma, saldrá un error en la consola:
        <pre class="m-0">
            <code class="rounded language-js">
                let nombre = "James";
                let nombre = "David";
            </code>
        </pre>
                                                    </div>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        <u>Palabra reservada (<em>keywork</em>)<kbd>conts</kbd></u>: 
                                                        En ES6, se puede declarar variables de solo lectura con la palabra <kbd>const</kbd>. 
                                                        Esta tiene todas las cualidades que <kbd>let</kbd> con el plus que no se puede cambiar 
                                                        el valor porque es solo lectura:
        <pre class="m-0">
            <code class="rounded language-js">
                const FAV_PET = "Cats";
                FAV_PET = "Dogs"; // Dará un error en consola.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#quote" aria-expanded="false"  
                                                aria-controls="quote">Comillas y escape de caracteres especiales
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="quote">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <h6 class="pt-2">Cadenas de texto y uso de comillas</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Las cadenas de texto (<em>String</em>) se escriben con comillas simples 
                                                        <kbd>' '</kbd> o con comillas dobles <kbd>" "</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                const doubleQuoteStr = "Esto es un texto"; 
                const singleQuoteStr = 'Esto es un texto';
                const conversation = 'Finn exclaims to Jake, "Algebraic!"';
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Escape de comillas</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        En algunos casos será necesario utilizar el mismo tipo de comillas con el que se 
                                                        declara la cadena de texto dentro del mismo texto, para que esto no de error, se utiliza 
                                                        la siguiente sintaxis para que la comilla sea considerada parte de la cadena de texto 
                                                        y no sea interpretado como que la cadena llegue a ese punto:
                                                        <pre class="m-0">
                                                            <code class="rounded language-js">
                                                                const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
                                                                console.log(sampleStr); // Mostrará: Alan said, "Peter is learning JavaScript".
                                                            </code>
                                                        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Escape de otros caracteres</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        <table>
                                                            <thead>
                                                                <th>
                                                                    <td>Code</td>
                                                                    <td>Output</td>
                                                                </th>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td><kbd>\'</kbd></td>
                                                                    <td>single quote</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><kbd>\"</kbd></td>
                                                                    <td>double quote</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>\\<kbd></kbd></td>
                                                                    <td>backslash</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>\n<kbd></kbd></td>
                                                                    <td>newline</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>\t<kbd></kbd></td>
                                                                    <td>tab</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>\r<kbd></kbd></td>
                                                                    <td>carriage return</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>\b<kbd></kbd></td>
                                                                    <td>backspace</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>\f<kbd></kbd></td>
                                                                    <td>form feed</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#operation" aria-expanded="false"  
                                                aria-controls="operation">Operaciones, incremento, decremento y concatenar
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="operation">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <h6 class="pt-2">Suma</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza el operador <kbd>+</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                const operacion = 5 + 10;
                console.log(operacion); // El resultado será 15.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Asignación compuesta con suma</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza el operador <kbd>+=</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                let operacion = 1;
                operacion += 5;
                console.log(operacion); // El resultado será 6.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Resta</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza el operador <kbd>-</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                const operacion = 12 - 6;
                console.log(operacion); // El resultado será 6.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Asignacion compuesta con resta</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza el operador <kbd>-=</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                let operacion = 5;
                operacion -= 5;
                console.log(operacion); // El resultado será 0.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Multiplicación</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza el operador <kbd>*</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                const operacion = 2 * 3;
                console.log(operacion); // El resultado será 6.

                const producto = 2.1 * 5.2; // Multiplicación de decimales
                console.log(producto); // El resultado será 10.920000000000002.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Asignacion compuesta con multiplicación</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza el operador <kbd>*=</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                let operacion = 5;
                operacion *= 2;
                console.log(operacion); // El resultado será 10.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">División</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza el operador <kbd>/</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                const operacion = 4 / 2;
                console.log(operacion); // El resultado será 2.

                const cociente = 9.2 / 2.1; // División de decimales
                console.log(cociente); // El resultado será 4.3809523809523805.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Asignacion compuesta con división</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza el operador <kbd>/=</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                let operacion = 10;
                operacion /= 2;
                console.log(operacion); // El resultado será 5.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Resto de división</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza el operador <kbd>%</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                const operacion = 17 % 2;
                console.log(operacion); // El resultado será 1.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Incremento</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Para incrementar el valor de una variable se puede hacer de dor formas:
                                                        Para imcrementar de 1 en 1, se utiliza el operador <kbd>++</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                let miVar = 5;
                miVar++;
                console.log(miVar); // El resultado será 6.
            </code>
        </pre>
                                                    Para imcrementar de n en n, se utiliza el operador <kbd>+n</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                let miVar = 5;
                miVar+3;
                console.log(miVar); // El resultado será 8.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Decremento</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Para restar el valor de una variable se puede hacer de dor formas:
                                                        Para restar de 1 en 1, se utiliza el operador <kbd>--</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                let miVar = 5;
                miVar--;
                console.log(miVar); // El resultado será 4.
            </code>
        </pre>
                                                        Para restar de n en n, se utiliza el operador <kbd>-n</kbd>:
        <pre class="m-0">
            <code class="rounded language-js">
                let miVar = 5;
                miVar-2;
                console.log(miVar); // El resultado será 3.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Suma de Strings o Concatenación</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        En el caso que se desee concatenar o unir mas de una cadena de texto o variable 
                                                        se utiliza el operador de la suma <kbd>+</kbd> o <kbd>+=</kbd>, sólo que en el caso de que 
                                                        las variables no sean de tipo numérico <kbd>Number</kbd>, 
                                                        se unirán más no se sumarán:
        <pre class="m-0">
            <code class="rounded language-js">
                const miSuma = '5' + 10; // Nótese que el 5 es un String.
                console.log(miSuma); // El resultado será 510.

                const cadenaTexto = "I come first. " + "I come second.";
                console.log(cadenaTexto); // El resultado: 'I come first. I come second.'.

                let cadenaDos = "I come first. ";
                cadenaDos += "I come second.";
                console.log(cadenaDos); // El resultado: 'I come first. I come second.'.

                let primerTexto  = "I come first. ";
                let seguntoTexto = "I come second.";
                console.log(primerTexto += seguntoTexto); // El resultado: 'I come first. I come second.'.

                const nombre = "freeCodeCamp";
                const texto = "Hello, our name is " + nombre + ", how are you?";
                console.log(texto); // El resultado: 'Hello, our name is freeCodeCamp, how are you?'.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#operators" aria-expanded="false"  
                                                aria-controls="operators">Operadores
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="operators">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <h6>Operadores de igualdad</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        El operador de igualdad <kbd>==</kbd> compara 
                                                        dos valores y devuelve true (si) son equivalentes o false (no).
        <pre class="m-0">
            <code class="rounded language-js">
                1   ==  1  // true
                1   ==  2  // false
                1   == '1' // true
                "3" ==  3  // true
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Operadores de igualdad estricta</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        A diferencia del operador de igualdad, el de igualdad estricta <kbd>===</kbd> compara 
                                                        dos valores y devuelve true (si) sólo si son del mismo tipo de datos y son equivalentes o false (no)
        <pre class="m-0">
            <code class="rounded language-js">
                3 ===  3  // devuelve true porque JavaScript realiza la conversión de tipos de cadena a número. 
                3 === '3' // devuelve false porque los tipos son diferentes y no se realiza la conversión de tipos.
            </code>
        </pre>
                                                        
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Operadores de desigualdad y desigualdad estricta</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Lo contrario a igualdad e igualdad estricta y se utilizan los operadores 
                                                        <kbd>!=</kbd> y <kbd>!==</kbd> respectivamente.
        <pre class="m-0">
            <code class="rounded language-js">
                1 !=  2    // true
                1 != "1"   // false
                1 != '1'   // false
                1 != true  // false
                0 != false // false

                3 !==  3  // false
                3 !== '3' // true
                4 !==  3  // true
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Operadores de mayor que</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        El operador mayor que <kbd>&gt;</kbd> compara los valores de dos números. 
                                                        Si el número de la izquierda es mayor que el número de la derecha, devuelve true. De lo contrario, regresa false.
        <pre class="m-0">
            <code class="rounded language-js">
                5   &gt;  3  // true
                7   &gt; '3' // true
                2   &gt;  3  // false
                '1' &gt;  9  // false
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Operadores de mayor o igual que</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        
                                                        El operador mayor o igual que <kbd>&gt;=</kbd> compara los valores de dos números. 
                                                        Si el número de la izquierda es mayor que el número de la derecha, devuelve true. De lo contrario, regresa false.
        <pre class="m-0">
            <code class="rounded language-js">
                5   &gt;  3  // true
                7   &gt; '3' // true
                2   &gt;  3  // false
                '1' &gt;  9  // false
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Operador de exponencia</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        El operador para calcular la potencia de un número es <kbd>**</kbd>.
        <pre class="m-0">
            <code class="rounded language-js">
                const resultado = 3 ** 4;
                console.log(resultado); // Mostrará: 81.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Operador ternario</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. 
                                                        Este operador se usa con frecuencia como atajo para la instrucción if.
        <pre class="m-0">
            <code class="rounded language-js">
                // condición ? expr1 : expr2;

                const condicion = true;
                condicion ? 'Es verdad' : ' Es falso';
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Operador nullish</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        El operador nullish coalescing <kbd>??</kbd> (de coalescencia nula) 
                                                        es un operador lógico que retorna el operando de lado derecho cuando el operando de lado izquierdo es 
                                                        null o undefined, y en caso contrario retorna el operando de lado izquierdo.
        <pre class="m-0">
            <code class="rounded language-js">
                const condicion = null;
                condicion ?? 'Mostrar este texto en su lugar'; // Mostrará: 'Mostrar este texto en su lugar'.

                const condicion = 'Hay texto';
                condicion ?? 'Mostrar este texto en su lugar'; // Mostrará: 'Hay texto'.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Optional chaining</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        El operador para validar si existe la propiedad de un array u objeto es <kbd>?</kbd>
                                                        y se coloca después del nombre de la variable a consultar:
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                const usuarios = {
                    Susana: { pais: 'VE', edad: 31},
                    Maria: { pais: 'VE', edad: 45},
                    Pedro: { pais: 'VE', edad: 20},
                }*/}
                console.log(usuarios.Susana.ciudad); // Mostrará: undefined.
                console.log(usuarios.Pablo.pais); // Dará error y detendrá la ejecusión del sistema.
                console.log(usuarios?.Pablo?.pais); // Mostrará: undefined y no dará error.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#notation" aria-expanded="false"  
                                                aria-controls="notation">Notación de corchetes en Strings
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="notation">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <h6>Notación de corchetes en Strings</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Javascript es un lenguaje "Zero-based indexing" lo que significa que empieza a contar la posición 
                                                        de los elementos desde el cero '0' y no desde el uno '1'.
                                                        Para acceder a la posición de una letra de una cadena de texto, se puede utilizar los corchetes 
                                                        para mostrar el caracter en esa posición específica:
        <pre class="m-0">
            <code class="rounded language-js">
                const miTexto = "Cantidad de caracteres.";
                console.log(miTexto[0]); // Mostrará: C.
                console.log(miTexto[2]); // Mostrará: n.
                console.log(miTexto[miTexto.length -2]); // Mostrará: s.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Entender inmutabilidad de los Strings</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        En JavaScript, los Strings son inmutables, lo que significa que 
                                                        no se puede modificar una vez se haya creado, se tendría que reemplazar 
                                                        todo el contenido de la variable. Por ejemplo:
        <pre class="m-0">
            <code class="rounded language-js">
                let miTexto = "Susana";
                miTexto[0] = "Z"; // Mostrará un error.
                miTexto = "Zusana"; // Forma correcta.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#boolean" aria-expanded="false"  
                                                aria-controls="boolean">Boleanos
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="boolean">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        En Javascript las variables boleanas se escriben como <kbd>true</kbd> o <kbd>false</kbd> (Verdadero o falso) sin comillas, 
                                                        son mutualmente excluyente. Si se sscribe con comillas <kbd>"true"</kbd> y <kbd>"false"</kbd> serán considerados valores 
                                                        tipo string por Javascript.
        <pre class="m-0">
            <code class="rounded language-js">
                const esVerdadero = false;
                const esDeDia = true;
            </code>
        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#number" aria-expanded="false"  
                                                aria-controls="number">Number
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="number">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <h6>Separar numeros</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Separador de números con guión bajo <kbd>_</kbd> para que se lea más facil en el código, 
                                                        pero no afecta su representación en el calculo de valores:
        <pre class="m-0">
            <code class="rounded language-js">
                const unNumeroSeparado = 100_000_000_000_000;
                // Mostrará: 100000000000000 sin los guines bajos.
                console.log(unNumeroSeparado);
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6>BigInt</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        En Javascript lse puede representar numeros grandes con BigInt.
        <pre class="m-0">
            <code class="rounded language-js">
                const unNumeroGrande = 402938420492409240238420n; // Se puede representarcon una 'n' al final del número.
                const otroNumeroGrande = BigInt(23948240982409273520372); // Se puede utilizar esta otra forma.
                console.log(unNumeroGrande);
                console.log(otroNumeroGrande);
            </code>
        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#arrays" aria-expanded="false"  
                                                aria-controls="arrays">Arrays
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="arrays">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Los arrays son un tipo de variable que permite guardar varias variables de diferentes tipos.
        <pre class="m-0">
            <code class="rounded language-js">
                const miArray = ["Palabra", "Una frase larga", 1, 2.35];
                const unArrayDentro = [["Primer Array"], ["Segundo array"]];
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Notación de corchetes en Arrays</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Al igual que en los Strings, en los arrays tambien se puede acceder a su contenido 
                                                        indicando la posición con corchetes.
        <pre class="m-0">
            <code class="rounded language-js">
                const array = [50, 60, 70];
                console.log(array[0]); // Mostrará: 50.
                const data = array[1];
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Modificar un array mediante el índice</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        A diferencia que los Strings, en los arrays se puede modificar el contenido 
                                                        indicando la posición con corchetes.
        <pre class="m-0">
            <code class="rounded language-js">
                const miArray = [50, 40, 30];
                miArray[0] = 15; // Modifica el elemento que está en la posición '0'.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Acceder a un array multidimensional mediante el índice</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Un array multidimensional es un array de arrays.
        <pre class="m-0">
            <code class="rounded language-js">
                const arrayMulti = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                    [[10, 11, 12], 13, 14]
                ];

                const primerNivel = arrayMulti[2]; // Almacena: [7, 8, 9].
                const segundoNivel = arrayMulti[1][0]; // Almacena: 4
                const tercerNivel = arrayMulti[3][0][1]; // Almacena: 11
            </code>
        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#objects" aria-expanded="false"  
                                                aria-controls="objects">Objects
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="objects">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Los <kbd>objetos</kbd> son similares a los <kbd>arrays</kbd>, excepto que en lugar de usar 
                                                        índices para acceder y modificar sus datos, accedes a los datos en <kbd>objetos</kbd> a través de 
                                                        propiedades (<kbd>properties</kbd>).
        <pre class="m-0">
            <code class="rounded language-js">
                {/* const cat = {
                    "name": "Whiskers",
                    "legs": 4,
                    "tails": 1,
                    "enemies": ["Water", "Dogs"]
                }; */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Hay dos maneras de acceder a las propiedades de un objeto: notación de puntos (.) y 
                                                        notación de corchetes ([]), similar a un arreglo.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                const myObj = {
                    prop1: "val1",
                    prop2: "val2"
                };
                */}

                const prop1val = myObj.prop1;
                const prop2val = myObj.prop2;
            </code>
        </pre>
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                const myObj = {
                    "Space Name": "Kirk",
                    "More Space": "Spock",
                    "NoSpace": "USS Enterprise"
                };
                */}

                myObj["Space Name"];
                myObj['More Space'];
                myObj["NoSpace"];
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2"> Verifica las propiedades de un objeto</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                    Para verificar si una propiedad de un objeto dado existe o no, puedes utilizar el método 
                                                    <kbd>.hasOwnProperty().someObject.hasOwnProperty(someProperty)</kbd>
                                                    devuelve <kbd>true</kbd> o <kbd>false</kbd>, dependiendo si la propiedad es encontrada en el objeto o no.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                function checkForProperty(object, property) {
                    return object.hasOwnProperty(property);
                }
                
                checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
                checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#conditionals" aria-expanded="false"  
                                                aria-controls="conditionals">Condicionales
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="conditionals">
                                            <div class="accordion-body">
                                                Los condicionales son estructuras de control que te permiten evaluar diferentes 
                                                expresiones como verdadero o falso y realizar determinadas acciones.
                                                Existen tres tipos de condicionales:
                                                <ul class="list-unstyled">
                                                    <li>
                                                        <h6 class="pt-2">IF ELSE</h6>
                                                        <div class="border border-primary rounded pt-2 px-3">
                                                            Un condicional <kbd>if</kbd> evalúa una expresión si es verdadera. 
                                                            La palabra reservada <kbd>else</kbd> evalúa cuando la expresión del 
                                                            <kbd>if</kbd> es falsa, pero no es obligatorio colocarlo.
        <pre class="m-0">
            <code class="rounded language-js">
                if (true) {
                    // Se ejecuta la declaración
                }
            </code>
        </pre>
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                function test (miCondicion) {
                    if (miCondicion) {
                        return "Es verdadero";
                    }
                    return "Es falso";
                }

                test(true);
                test(false);
                */}
            </code>
        </pre>
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                var edad = 35;
                if (edad >= 18) {
                    console.log("Puedes conducir");
                } else {
                    console.log("No puedes conducir");
                }
                */}
            </code>
        </pre>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <h6 class="pt-2">Anidar condicionales</h6>
                                                        <div class="border border-primary rounded pt-2 px-3">
                                                            En el caso que haya más condiciones a evaluar, se pueden emplear las palabras reservadas 
                                                            <kbd>else if</kbd> junto a la condición a ejecutar. Evalua la primera condición, luego la 
                                                            segunda, etc, hasta que consiga la condición con valor sea verdadero.
        <pre class="m-0">
            <code class="rounded language-js">
                if (condicion1) {
                    // Bloque 1
                } elseif (condicion2){
                    // Bloque 2
                } elseif (condicion3){
                    // Bloque 3
                } else {
                    // Bloque else
                }
            </code>
        </pre>
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                function pruebaNumero(numero) {
                    if (numero < 5) {
                    return "Es menor que 5";
                    } else if (numero < 10) {
                    return "Es menor que 10";
                    } else if (numero < 15) {
                    return "Es menor que 15";
                    } else if (numero < 20) {
                    return "Es menor que 20";
                    } else {
                    return "Es mayor o igual a 20";
                    }
                }
                
                pruebaNumero(7);
                */}
            </code>
        </pre>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <h6 class="pt-2">switch</h6>
                                                        <div class="border border-primary rounded pt-2 px-3">
                                                            Una sentencia <kbd>switch</kbd> compara el valor para las sentencias case las cuales 
                                                            definen varios posibles valores. Cualquier sentencia válida JavaScript puede ser 
                                                            ejecutada dentro de un bloque <kbd>case</kbd> y se ejecutará desde el primer valor de coincidencia 
                                                            case hasta que un <kbd>break</kbd> sea encontrado. La declaración <kbd>default</kbd> 
                                                            debe ser el último caso, cuando no se encuentre declaraciones <kbd>case</kbd> como el <kbd>else</kbd>.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                switch (fruta) {
                case "Parchita":
                    console.log("La fruta es una parchita");
                    break;
                case "nispero":
                    console.log("La fruta es un níspero");
                    break;
                }
                default:
                    console.log("Otra fruta");
                break;
                */}
            </code>
        </pre>
                                                            Los valores en las sentencias <kbd>case</kbd> se prueban con igualdad estricta (===). 
                                                            El <kbd>break</kbd> le dice a JavaScript que deje de ejecutar declaraciones. Si se omite 
                                                            <kbd>break</kbd>, se ejecutara la siguiente sentencia.
                                                            <p>
                                                                Si la sentencia <kbd>break</kbd> es omitida en un caso <kbd>case</kbd> de una sentencia <kbd>switch</kbd>, 
                                                                las siguientes sentencias <kbd>case</kbd> serán ejecutadas hasta encontrar un <kbd>break</kbd>. 
                                                                Si tienes múltiples entradas con la misma salida, puedes representarlas en una sentencia <kbd>switch</kbd> como esta
                                                            </p>
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                let resultado = "";
                switch (valor) {
                    case 1:
                    case 2:
                    case 3:
                        resultado = "1, 2, ó 3";
                            break;
                    case 4:
                        resultado = "Solo 4";
                }
                */}
            </code>
        </pre>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <h6 class="pt-2">try / catch</h6>
                                                        <div class="border border-primary rounded pt-2 px-3">
                                                            Manejo de errores
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                // Se declara la función:
                try {
                    hello();
                } catch {
                    console.log(error)
                }
                */}
            </code>
        </pre>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#properties" aria-expanded="false"  
                                                aria-controls="properties">Propiedades o funciones nativas
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="properties">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <h6 class="pt-2">.length</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza para contar los caracteres de una cadena de texto o cantidad de elementos de un array.
                                                        En el caso de los caracteres, tambien contará los espacios en blanco:
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                const miTexto = "Cantidad de caracteres.";
                console.log(miTexto.length); // Mostrará: 26.

                const miArray = [654, 97, 321];
                console.log(miArray.length); // Mostrará: 3.
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">.push()</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza para insertar uno o muchos elementos al final de un array.
        <pre class="m-0">
            <code class="rounded language-js">
                const array1 = [1, 2, 3];
                array1.push(4, 5); // Queda: array1 = [1, 2, 3, 4, 5];

                const array2 = ["Stimpson", "J", "cat"];
                array2.push(["happy", "joy"]); // Queda: ["Stimpson", "J", "cat", "happy", "joy"];
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">.unshift()</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza para insertar uno o muchos elementos al principio de un array.
        <pre class="m-0">
            <code class="rounded language-js">
                const array1 = [1, 2, 3];
                array1.unshift(4, 5); // Queda: array1 = [4, 5, 1, 2, 3];

                const array2 = ["Stimpson", "J", "cat"];
                array2.unshift(["happy", "joy"]); // Queda: ["happy", "joy", "Stimpson", "J", "cat"];
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">.pop()</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza para eliminar el último elemento de un array.
        <pre class="m-0">
            <code class="rounded language-js">
                const miArray = [1, 4, 6];
                const elemento = miArray.pop();
                console.log(miArray); // Mostrará el array modificado: [1, 4].
                console.log(elemento); // Mostrará el elemento eliminado: 6.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">.shift()</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza para eliminar el primer elemento de un array.
        <pre class="m-0">
            <code class="rounded language-js">
                const miArray = [1, 4, 6];
                const elemento = miArray.shift();
                console.log(miArray); // Mostrará el array modificado: [4, 6].
                console.log(elemento); // Mostrará el elemento eliminado: 1.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">.include()</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza .include() para consultar si dentro de un array está el valor buscado.
                                                        Es case sensitive, es decir, los valores tipo string debe ser exactamente igual para que dé el resultado deseado.
        <pre class="m-0">
            <code class="rounded language-js">
                let numeros = [1, 2, 3, 4, 5];
                console.log(numeros.include(1)); // Mostrará: true.
                console.log(numeros.include(9)); // Mostrará: false.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">.flat(), .flatMap(), trimStart() y trimEnd()</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza .flat() para aplanar una matris o arreglo de varios niveles.
        <pre class="m-0">
            <code class="rounded language-js">
                const array = [1,1,2,3,4, [1,3,5,6,[1,2,4]]];
                console.log(array.flat(3));
            </code>
        </pre>
                                                        Se utiliza .flatMap() para aplanar una matris o arreglo de varios niveles y realizar ecuaciones en el proceso.
        <pre class="m-0">
            <code class="rounded language-js">
                const array2 = [1,2,3,4,5];
                console.log(array2.flatMap(value =&lt; [value, value * 2]));
            </code>
        </pre>
                                                        Se utiliza .trimStart() y trimEnd() para quitar espacios en blanco antes o después de un string respectivamente.
        <pre class="m-0">
            <code class="rounded language-js">
                const textoConEspacios = '      Hola      ';
                console.log(textoConEspacios.trimStart); // Mostrará: 'Hola      '.
                console.log(textoConEspacios.trimEnd); // Mostrará: '      Hola'.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Set() y .add()</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza .add() para agregar elementos a un objeto de tipo Set().
        <pre class="m-0">
            <code class="rounded language-js">
                const lista = new Set();
                lista.add(1);
                lista.add(2).add(3);
                console.log(lista); // Mostrará: [1, 2, 3].
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Object.entries()</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza Object.entries() para transformar un objeto en un array.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                const paises = {VE: 'Venezuela', PE: 'Perú', CO: 'Colombia'};
                console.log(Object.entries(paises)); 
                /* Mostrará: 
                    [
                        [VE, 'Venezuela'],
                        [PE, 'Perú'],
                        [CO, 'Colombia']
                    ]
                */ /*
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">fromEntries()</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza para pasar de un array de arrays a un objeto.
        <pre class="m-0">
            <code class="rounded language-js">
                const entradas = new Map(['name', 'Susana']), ['edad', 31];
                console.log(Object.fromEntries(entradas));
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Object.values()</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza Object.values() para obtener solo los valores de un objeto en formato array.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                const paises = {VE: 'Venezuela', PE: 'Perú', CO: 'Colombia'};

                console.log(Object.values(paises)); // Mostrará: ['Venezuela', 'Perú', 'Colombia'].
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">window, global, selft y globalThis</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Para acceder al objeto global del navegador.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                const paises = {VE: 'Venezuela', PE: 'Perú', CO: 'Colombia'};

                console.log(window); // Accede a los elementos del navegador.
                console.log(global); // Accede a los elementos de node.
                console.log(selft); // Accede a los elementos de webworker.
                console.log(globalThis); // Accede a todos los elementos englobando window, global y seflt.
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">String.padding()</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se utiliza String.padStart() y String.padEnd() para rellenar una cadena de caracteres, se le indican dos parámetros, 
                                                        el primero será la cantidad de caracteres que debe tener la cadena al final, y el otro parámetro será el relleno.
        <pre class="m-0">
            <code class="rounded language-js">
                const cadena = 'Holis';

                console.log(cadena.padStart(10. '!!')); // Mostrará: '!!!!!Holis'.
                console.log(cadena.padEnd(10. '!!')); // Mostrará: 'Holis!!!!!'.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Trailing commas</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Trailing commas muestra los espacios vacíos de los elementos array.
        <pre class="m-0">
            <code class="rounded language-js">
                const edades = [17, 76, 45, 32, , , 23];

                console.log(edades); // Mostrará: [17, 76, 45, 32, empty x2 , 23].
                console.log(edades.length); // Mostrará: 4'.
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Regex</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
        <pre class="m-0">
            <code class="rounded language-js">
                const regex = /(\d{4})-(\d{2})-(\d{2})/;
                const matchers = regex.exec("2022-01-01");
                console.table(matchers);
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">matchAll()</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Uso de matchAll()
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                const regex = /\b(Blanco)+\b/g;
                const colores = ['Verde', 'Rosado', 'Amarillo', 'blanco', 'Negro', 'Blanco'];

                for (const match of colores.matchAll(regex)) {
                    console.log(match);
                }
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Spread</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Para separar valores de un objeto.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                const user = { usuario: 'Susana', edad:31, pais: 'VE'};
                const { usuario, ...valores } = user;

                console.log(usuario); // Mostrará: 'Susana'.
                console.log(valores); // Mostrará: {edad:31, pais: 'VE'}
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#functions" aria-expanded="false"  
                                                aria-controls="functions">Funciones, reutilización de código
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="functions">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <h6>Declarar y llamar una función</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Javascript permite crear funciones personalizadas para poder reutilizar 
                                                        codigo.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                // Se declara la función:
                function nombreDeFuncion() {
                    console.log("Holis");
                }

                // Se llama la función:
                nombreDeFuncion();
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Funciones con parámetros</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se puede enviar variables que se utilizaran dentro de la función, 
                                                        a estas variables se le llama parámetros.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                // Se declara la función:
                function miFuncion(param1, param2) {
                    console.log(param1, param2);
                }

                // Se llama la función:
                miFuncion("Hola", 2); // Mostrará: "Hola", 2.
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Funciones con retorno</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Se puede enviar variables que se utilizaran dentro de la función, 
                                                        a estas variables se le llama parámetros.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                // Se declara la función:
                function sumarTres(num) {
                    return num + 3;
                }
                    
                const retorno = sumarTres(5);

                // Se llama la función:
                console.log(retorno); // Mostrará: 8.
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Funciones asíncronas</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Uso de promesas, async y await.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                // Se declara la función que será la promesa:
                const miAsincrona = () => {
                    return new Promise((resolve, reject) => {
                        (true) // La pregunta
                        ? setTimeout(() => resolve('Es asíncrona!'), 2000) // True
                        : reject(new Error('Error!')); // False
                    })
                }

                // Se declara la función asíncrona
                const otraFuncion = async () => {
                    const mensaje = await miAsincrona();
                    console.log(mensaje);
                }

                otraFuncion();
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">.allsettled()</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Uso de promise allsettled .
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                // Se declaran las funciones de promesa:
                const promesaUno = new Promise((resolve, reject) => reject('Reject'));
                const promesaDos = new Promise((resolve, reject) => resolve('Resolve'));
                const promesatres = new Promise((resolve, reject) => resolve('Resolve 2'));

                // Se pasan en un array todas las promesas
                Promise.allSettled([promesaUno, promesaDos, promesatres])
                    then(response => console.log(response));
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">.finally()</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Uso de Finally.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                // Se declara la función que será la promesa:
                const miAsincrona = () => {
                    return new Promise((resolve, reject) => {
                        if (true) { // La pregunta
                            setTimeout(() => resolve('Es asíncrona!'), 2000); // True
                        } else {
                            reject(new Error('Error!')); // False
                        }
                    })
                }

                // Se llama la promesa y se utiliza el then(), catch() y finally()
                miAsincrona()
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
                    .finally(() => console.log('Ha terminado!'));
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#scope" aria-expanded="false"  
                                                aria-controls="scope">Scope
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="scope">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <h6 class="pt-2">Scope global y Funciones</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Scope se refiere a la capacidad de visibilidad de la variable. Cuando una variable 
                                                        es global, puede ser consultada en todo el código. Las variables creadas con 
                                                        <kbd>let</kbd> y <kbd>const</kbd> son autimáticamente globales mientras el codigo se esté ejecutando.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                const global = "Hola";

                // Se declara la función:
                function nombreDeFuncion() {
                    console.log(global);
                }

                // Se llama la función:
                nombreDeFuncion();
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Scope local y Funciones</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Scope se refiere a la capacidad de visibilidad de la variable que 
                                                        puede ser consultada en su zona local del código.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                // Se declara la función:
                function nombreDeFuncion() {
                    const loc = "foo";
                    console.log(loc);
                }
                    
                // Se llama la función:
                nombreDeFuncion();
                console.log(loc);
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Scope local vs Scope global</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Scope se refiere a la capacidad de visibilidad de la variable que 
                                                        puede ser consultada en su zona local del código.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                const miVar = "Sombrero";
                // Se declara la función:
                function nombreDeFuncion() {
                    const miVar = "Cabeza";
                    return miVar;
                }

                // Se llama la función:
                nombreDeFuncion();
                console.log(miVar); // Mostrará: Sombrero.
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#modules" aria-expanded="false"  
                                                aria-controls="modules">Módulos
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="modules">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Palabras reservadas para importar y exportar fragmentos de codigo como módulos. 
                                                        En archivos de javascript vanilla, se debe crear el archivo package.json y agregar 
                                                        la linea <kbd>"type": "module"</kbd> para que acepte los módulos.
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                // Declarar un modulo a exportar
                // Nombre del archivo '/modulo_nuevo.js'
                const hola = () => {
                    console.log('Hola, soy un módulo');
                }

                // Sintaxis para exportar el fragmento de código
                export default hola;
                */}
            </code>
        </pre>
        <pre class="m-0">
            <code class="rounded language-js">
                // Sintaxis para importar un modulo desde el archivo
                import hola from './modulo_nuevo.js'

                // Instancia del objeto
                hola();
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Dinamic import</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Para importar los elementos de forma dinamica mientas se carga el sitio web
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                // ejemplo nombre del archivo 'modulo.js'.
                export function hola() {
                    console.log('Hola mundo');
                }

                export default hola;
                */}
            </code>
        </pre>
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                // ejemplo nombre del archivo 'miApp.js'.
                const boton = document.getElementById('miBoton');
                boton.addEventListener('click', asycn function () {
                    const module = await import('./module.js');
                    console.log(module);
                    module.hola();
                })
                */}
            </code>
        </pre>
                                                        Otra forma de importar un modulo directamente en el archivo HTML
        <pre class="m-0">
            <code class="rounded language-html">
                &lt;!DOCTYPE html&gt;
                &lt;html lang="en"&gt;
                &lt;head&gt;
                    &lt;meta charset="UTF-8"&gt;
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                    &lt;title&gt;Dinamic import&lt;/title&gt;
                &lt;/head&gt;
                &lt;body&gt;
                    &lt;button id="miBoton"&gt;Click&lt;/button&gt;
                    &lt;script type="module" src="miApp.js"&gt;&lt;/script&gt;
                &lt;/body&gt;
                &lt;/html&gt;
            </code>
        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#generators" aria-expanded="false"  
                                                aria-controls="generators">Generadores
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="generators">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Tipo de función que retorna valores recordando el estado por lo que no será 
                                                        necesario colocar el incide el caso que se quiera iterar en un arreglo
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                // Declara la funcion 
                function iterar(array) {
                    for (let value of array) {
                        yield value;
                    }
                }

                const miArreglo = iterar([1, 2, 3, 4]);

                console.log(miArreglo.next().value); // Mostrará: 1.
                console.log(miArreglo.next().value); // Mostrará: 2.
                console.log(miArreglo.next().value); // Mostrará: 3.
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Generator con async</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Tipo de función que retorna valores recordando el estado por lo que no será 
                                                        necesario colocar el incide el caso que se quiera iterar en un arreglo
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                // Declara la funcion 
                async function* otroGenerador() {
                    yield await Promise.resolve(1);
                    yield await Promise.resolve(2);
                    yield await Promise.resolve(3);
                }

                const otro = otroGenerador();

                otro.next().then(response => console.log(response.value));
                otro.next().then(response => console.log(response.value));
                otro.next().then(response => console.log(response.value));
                */}
            </code>
        </pre>
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                // Declara la funcion 
                async function* arrayDeNombres(array) {
                    for await (let value of array) {
                        console.log(value);
                    }
                }
                const nombres = arrayDeNombres(['Susana', 'María', 'Pedro']);
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#class" aria-expanded="false"  
                                                aria-controls="class">Clases
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="class">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Concepto
        <pre class="m-0">
            <code class="rounded language-js">
                //Declara la clase
                class Usuario {};

                // Instancia del objeto
                const nuevoUsuario = new Usuario();
            </code>
        </pre>
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                //Declara la clase
                class Usuario {
                    saludos() {
                        return "Hola";
                    }
                };

                // Instancia del objeto
                const objeto = new Usuario();

                console.log(objeto.saludos()); // Mostrará: Hola.
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h6 class="pt-2">Herencias</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        Concepto
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                //Declara la clase
                class Usuario {
                    // Constructor
                    constructor() {
                        console.log("Me ejecuto solo cuando llaman a la clase")
                    }

                    saludos() {
                        return "Hola";
                    }
                };

                // Instancia del objeto
                const objeto = new Usuario();
                */}
                // Mostrará: Me ejecuto solo cuando llaman a la clase.
            </code>
        </pre>
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                //Declara la clase
                class Usuario {
                    // Constructor
                    constructor(nombre) {
                        this.nombre = nombre;
                    }

                    fragmento() {
                        return "Hola";
                    }
                    saludos() {
                        return `${this.fragmento} ${this.nombre}`;
                    }
                };

                // Instancia del objeto
                const objeto = new Usuario('Susana');
                // Mostrará: Hola Susana.
                */}
            </code>
        </pre>
        <pre class="m-0">
            <code class="rounded language-js">
                {/*
                //Declara la clase
                class Usuario {
                    // Constructor
                    constructor(nombre, edad) {
                        this.nombre = nombre;
                        this.edad = edad;
                    }

                    fragmento() {
                        return "Hola";
                    }

                    saludos() {
                        return `${this.fragmento} ${this.name}`;
                    }

                    get uEdad() {
                        return this.edad;
                    }

                    set uEdad(n) {
                        this.edad = n;
                    }
                };

                // Instancia del objeto
                const objeto = new Usuario('Susana', 31);
                console.log(object.uEdad); // Mostrará: 31.
                console.log(object.uEdad = 30); // Mostrará: 30.
                */}
            </code>
        </pre>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button" 
                                                data-bs-toggle="collapse" data-bs-target="#commentandvariable" aria-expanded="false"  
                                                aria-controls="commentandvariable">Comentarios y Variables
                                            </button>
                                        </h2>
                                        <div class="accordion-collapse collapse" id="commentandvariable">
                                            <ul class="list-unstyled accordion-body">
                                                <li>
                                                    <h6 class="pt-2">Variables</h6>
                                                    <div class="border border-primary rounded pt-2 px-3">
                                                        <kbd></kbd>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#projects" aria-expanded="false"  
                                aria-controls="projects">Proyectos - Ejercicios
                            </button>
                        </h2>
                        <div class="accordion-collapse collapse" id="projects">
                            <ul class="list-unstyled accordion-body">
                                <li>A</li>
                                <li>B</li>
                            </ul>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#certifications" aria-expanded="false"  
                                aria-controls="certifications">Certificaciones
                            </button>
                        </h2>
                        <div class="accordion-collapse collapse" id="certifications">
                            <ul class="list-unstyled accordion-body">
                                <li>
                                    <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" 
                                        target="_blank" rel="noopener noreferrer">
                                        <span class="badge text-bg-info">09/2023</span> Javascript algorithms and data structures | Freecodecamp
                                    </a>
                                </li>
                                <li>
                                    <a href="https://platzi.com/cursos/ecmascript-6/" 
                                        target="_blank" rel="noopener noreferrer">
                                        <span class="badge text-bg-info">09/2023</span> Curso de ECMAScript: Historia y Versiones de JavaScript | Platzi
                                    </a>
                                </li>
                                <li>
                                    <a href="https://platzi.com/cursos/basico-javascript/" 
                                        target="_blank" rel="noopener noreferrer">
                                        <span class="badge text-bg-info">09/2023</span> Curso básico de Javascript | Platzi
                                    </a>
                                </li>
                                <li>
                                    <a href="https://platzi.com/cursos/pensamiento-logico-estructuras/" 
                                        target="_blank" rel="noopener noreferrer">
                                        <span class="badge text-bg-info">09/2023</span> Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones | Platzi
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#sources" aria-expanded="false"  
                                aria-controls="sources">Fuentes
                            </button>
                        </h2>
                        <div class="accordion-collapse collapse" id="sources">
                            <ul class="list-unstyled accordion-body">
                                <li>
                                    <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" 
                                        target="_blank" rel="noopener noreferrer">
                                        <span class="badge text-bg-info">09/2023</span> Javascript algorithms and data structures | Freecodecamp
                                    </a>
                                </li>
                                <li>
                                    <a href="https://platzi.com/cursos/ecmascript-6/" 
                                        target="_blank" rel="noopener noreferrer">
                                        <span class="badge text-bg-info">09/2023</span> Curso de ECMAScript: Historia y Versiones de JavaScript | Platzi
                                    </a>
                                </li>
                                <li>
                                    <a href="https://platzi.com/cursos/basico-javascript/" 
                                        target="_blank" rel="noopener noreferrer">
                                        <span class="badge text-bg-info">09/2023</span> Curso básico de Javascript | Platzi
                                    </a>
                                </li>
                                <li>
                                    <a href="https://platzi.com/cursos/pensamiento-logico-estructuras/" 
                                        target="_blank" rel="noopener noreferrer">
                                        <span class="badge text-bg-info">09/2023</span> Curso de Pensamiento Lógico: Manejo de Datos, Estructuras y Funciones | Platzi
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#links" aria-expanded="false"  
                                aria-controls="links">Enlaces relacionados
                            </button>
                        </h2>
                        <div class="accordion-collapse collapse" id="links">
                            <ul class="list-unstyled accordion-body">
                                <a href="https://es.javascript.info/types" class="d-block" target="_blank" rel="noopener noreferrer">Tipos de datos (javascript.info)</a>
                                <a href="https://platzi.com/tutoriales/1339-fundamentos-javascript-2018/6440-tipos-de-datos-y-valores-en-javascript/" class="d-block" target="_blank" rel="noopener noreferrer">Tipos de datos (Platzi)</a>
                                <a href="https://platzi.com/clases/1814-basico-javascript/26293-variables/" class="d-block" target="_blank" rel="noopener noreferrer">Qué es una variable (Platzi)</a>
                                <a href="https://platzi.com/clases/1814-basico-javascript/26292-elementos-de-un-lenguaje-de-programacion-variables/" class="d-block" target="_blank" rel="noopener noreferrer">Variables, Funciones y sintaxis (Platzi)</a>
                                <a href="https://es.javascript.info/operators" class="d-block" target="_blank" rel="noopener noreferrer">Operadores aritméticos (javascript.info)</a>
                                <a href="https://es.javascript.info/comparison" class="d-block" target="_blank" rel="noopener noreferrer">Operadores de comparación (javascript.info)</a>
                                <a href="https://platzi.com/clases/1814-basico-javascript/26300-operadores-asignacion-comparacion-y-aritmeticos/" class="d-block" target="_blank" rel="noopener noreferrer">Operadores de asignación, aritméticos y de comparación (Platzi)</a>
                                <a href="https://developer.mozilla.org/es/docs/Glossary/Scope" class="d-block" target="_blank" rel="noopener noreferrer">Scope (Mozilla)</a>
                                <a href="https://platzi.com/clases/1814-basico-javascript/26296-scope/" class="d-block" target="_blank" rel="noopener noreferrer">Scope (Platzi)</a>
                                <a href="https://platzi.com/blog/como-funciona-el-scope-en-javascript/" class="d-block" target="_blank" rel="noopener noreferrer">Qué es y cómo funciona el scope en JavaScript (Platzi)</a>
                                <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" class="d-block" target="_blank" rel="noopener noreferrer">Destructuración (Mozilla)</a>
                                <a href="https://platzi.com/clases/3504-ecmascript-6/51756-asignacion-de-destructuracion/" class="d-block" target="_blank" rel="noopener noreferrer">Destructuración (Platzi)</a>
                                <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax" class="d-block" target="_blank" rel="noopener noreferrer">Sintaxis Operador Spread (Mozilla)</a>
                                <a href="https://platzi.com/clases/3504-ecmascript-6/51757-spread-operator/" class="d-block" target="_blank" rel="noopener noreferrer">Parámetros Rest y operador Spread (Platzi)</a>
                                <a href="https://es.javascript.info/rest-parameters-spread" class="d-block" target="_blank" rel="noopener noreferrer">Parámetros Rest y operador Spread (javascript.info)</a>
                                <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator" class="d-block" target="_blank" rel="noopener noreferrer">Generadores (Mozilla)</a>
                                <a href="https://platzi.com/clases/3504-ecmascript-6/51765-generator/" class="d-block" target="_blank" rel="noopener noreferrer">Generadores (Platzi)</a>
                                <a href="https://es.javascript.info/generators" class="d-block" target="_blank" rel="noopener noreferrer">Generadores (javascript.info)</a>
                                <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set/add" class="d-block" target="_blank" rel="noopener noreferrer">Set Add (Mozilla)</a>
                                <a href="https://platzi.com/clases/3504-ecmascript-6/51766-set-add/" class="d-block" target="_blank" rel="noopener noreferrer">Set Add (Platzi)</a>
                                <a href="https://es.javascript.info/map-set#set" class="d-block" target="_blank" rel="noopener noreferrer">Set Add (javascript.info)</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
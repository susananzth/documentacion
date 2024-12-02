
import hljs from 'highlight.js'
import { useEffect } from 'react'
import Nav from '../Nav'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import TitleSubtitle from '../components/TitleSubtitle'
import AccordionItem from '../components/AccordionItem'
import Code from '../components/Code'
import Link from '../components/Link'

export default function Route() {
    useEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <div>
            <Nav />
            <div className="container">
                <Sidebar className="my-5" />
                <TitleSubtitle 
                    title='JavaScript'
                    subTitle='Documentación Javascript, Algorithms & Data Sctructures'
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
                            <AccordionItem id="operation" title="">
                                <li>
                                    <h6 className="pt-2">Operador Spread</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2); // Mostrará: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'].
`}
</Code>
                                        En Junio del 2018, en los ECMAScript 9 (ES9), se agregó una mejora de en 
                                        <kbd>spread</kbd> para copiar y separar los valores de un array y un objeto.
<Code>
{`// Con array:
let frutas = ['parchita', 'cambur', 'lechoza'];
let [a, b] = frutas;
console.log(a, b); // Mostrará: 'parchita', 'cambur'

// Con un objeto
const user = { usuario: 'Susana', edad:31, pais: 'VE'};
const { usuario, ...valores } = user;

console.log(usuario); // Mostrará: 'Susana'.
console.log(valores); // Mostrará: {edad: 31, pais: 'VE'}`}
</Code>
                                    </div>
                                </li>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="operators" title="Operadores">
                                <li>
                                    <h6>Operadores de igualdad</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        El operador de igualdad <kbd>==</kbd> compara 
                                        dos valores y devuelve true (si) son equivalentes o false (no).
<Code>
{`1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Operadores de igualdad estricta</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        A diferencia del operador de igualdad, el de igualdad estricta <kbd>===</kbd> compara 
                                        dos valores y devuelve true (si) sólo si son del mismo tipo de datos y son equivalentes o false (no)
<Code>
{`3 ===  3  // devuelve true porque JavaScript realiza la conversión de tipos de cadena a número. 
3 === '3' // devuelve false porque los tipos son diferentes y no se realiza la conversión de tipos.`}
</Code>
                                        
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Operadores de desigualdad y desigualdad estricta</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Lo contrario a igualdad e igualdad estricta y se utilizan los operadores 
                                        <kbd>!=</kbd> y <kbd>!==</kbd> respectivamente.
<Code>
{`1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Operadores de mayor que</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        El operador mayor que <kbd>&gt;</kbd> compara los valores de dos números. 
                                        Si el número de la izquierda es mayor que el número de la derecha, devuelve true. De lo contrario, regresa false.
<Code>
{`5   &gt;  3  // true
7   &gt; '3' // true
2   &gt;  3  // false
'1' &gt;  9  // false`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Operadores de mayor o igual que</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        
                                        El operador mayor o igual que <kbd>&gt;=</kbd> compara los valores de dos números. 
                                        Si el número de la izquierda es mayor que el número de la derecha, devuelve true. De lo contrario, regresa false.
<Code>
{`5   &gt;  3  // true
7   &gt; '3' // true
2   &gt;  3  // false
'1' &gt;  9  // false`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Operador de exponencia</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2016, en los ECMAScript 7 (ES7) se agregó 
                                        el operador para calcular la potencia de un número es <kbd>**</kbd>.
                                        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`const resultado = 3 ** 4;
console.log(resultado); // Mostrará: 81.`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Operador ternario</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. 
                                        Este operador se usa con frecuencia como atajo para la instrucción if. La sintaxis 
                                        es <kbd>a ? b : c</kbd> donde <kbd>a</kbd> es la condición, <kbd>b</kbd> es el código a 
                                        ejecutar cuando la condición devuelve <kbd>true</kbd>, y <kbd>c</kbd> es el código a 
                                        ejecutar cuando la condición devuelve <kbd>false</kbd>.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>{`const condicion = true;
condicion ? 'Es verdad' : ' Es falso';

// Ejemplo con if 
function findGreater(a, b) {
    if (a > b) {
        return "a is greater";
    }
    else {
        return "b is greater or equal";
    }
}
// Cambiando a operador ternario:
function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
}
// tambien se puede encadenar como una condicion if elseif else:
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
}`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Operador nullish</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        El operador nullish coalescing <kbd>??</kbd> (de coalescencia nula) 
                                        es un operador lógico que retorna el operando de lado derecho cuando el operando de lado izquierdo es 
                                        null o undefined, y en caso contrario retorna el operando de lado izquierdo.
                                        <Code>{``}
                                            const condicion = null;
                                            condicion ?? 'Mostrar este texto en su lugar'; // Mostrará: 'Mostrar este texto en su lugar'.

                                            const condicion = 'Hay texto';
                                            condicion ?? 'Mostrar este texto en su lugar'; // Mostrará: 'Hay texto'.
                                        </Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Optional chaining</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2020, en los ECMAScript 11 (ES11) se agregó el operador 
                                        para validar si existe la propiedad de un array u objeto es <kbd>?</kbd>
                                        y se coloca después del nombre de la variable a consultar.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`
const usuarios = {
    Susana: { pais: 'VE', edad: 31},
    Maria: { pais: 'VE', edad: 45},
    Pedro: { pais: 'VE', edad: 20},
console.log(usuarios.Susana.ciudad); // Mostrará: undefined.
console.log(usuarios.Pablo.pais); // Dará error y detendrá la ejecusión del sistema.
console.log(usuarios?.Pablo?.pais); // Mostrará: undefined y no dará error.
// Otros usos:
obj?.prop // Saber si la propiedad de ese objeto existe.
obj?.[expr]  // Saber si la expresión de ese objeto existe.
arr?.[index]  // Saber si el index de ese array existe.
func?.(args) //  // Saber si el argumento de esa función existe.
`}
</Code>
                                    </div>
                                </li>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="notation" title="Notación de corchetes en Strings">
                                <li>
                                    <h6>Notación de corchetes en Strings</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Javascript es un lenguaje "Zero-based indexing" lo que significa que empieza a contar la posición 
                                        de los elementos desde el cero '0' y no desde el uno '1'.
                                        Para acceder a la posición de una letra de una cadena de texto, se puede utilizar los corchetes 
                                        para mostrar el caracter en esa posición específica:
                                        <Code>{``}
                                            const miTexto = "Cantidad de caracteres.";
                                            console.log(miTexto[0]); // Mostrará: C.
                                            console.log(miTexto[2]); // Mostrará: n.
                                            console.log(miTexto[miTexto.length -2]); // Mostrará: s.
                                        </Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Entender inmutabilidad de los Strings</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En JavaScript, los Strings son inmutables, lo que significa que 
                                        no se puede modificar una vez se haya creado, se tendría que reemplazar 
                                        todo el contenido de la variable. Por ejemplo:
                                        <Code>{``}
                                            let miTexto = "Susana";
                                            miTexto[0] = "Z"; // Mostrará un error.
                                            miTexto = "Zusana"; // Forma correcta.
                                        </Code>
                                    </div>
                                </li>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="arrays" title="Arrays">
                                <li>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Los arrays son un tipo de variable que permite guardar varias variables de diferentes tipos.
                                        <Code>{``}
                                            const miArray = ["Palabra", "Una frase larga", 1, 2.35];
                                            const unArrayDentro = [["Primer Array"], ["Segundo array"]];
                                        </Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Notación de corchetes en Arrays</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Al igual que en los Strings, en los arrays tambien se puede acceder a su contenido 
                                        indicando la posición con corchetes.
                                        <Code>{``}
                                            const array = [50, 60, 70];
                                            console.log(array[0]); // Mostrará: 50.
                                            const data = array[1];
                                        </Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Modificar un array mediante el índice</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        A diferencia que los Strings, en los arrays se puede modificar el contenido 
                                        indicando la posición con corchetes.
                                        <Code>{``}
                                            const miArray = [50, 40, 30];
                                            miArray[0] = 15; // Modifica el elemento que está en la posición '0'.
                                        </Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Acceder a un array multidimensional mediante el índice</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Un array multidimensional es un array de arrays.
                                        <Code>{``}
                                            const arrayMulti = [
                                                [1, 2, 3],
                                                [4, 5, 6],
                                                [7, 8, 9],
                                                [[10, 11, 12], 13, 14]
                                            ];

                                            const primerNivel = arrayMulti[2]; // Almacena: [7, 8, 9].
                                            const segundoNivel = arrayMulti[1][0]; // Almacena: 4
                                            const tercerNivel = arrayMulti[3][0][1]; // Almacena: 11
                                        </Code>
                                    </div>
                                </li>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="objects" title="Objects">
                                <li>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Los <kbd>objetos</kbd> son similares a los <kbd>arrays</kbd>, excepto que en lugar de usar 
                                        índices para acceder y modificar sus datos, accedes a los datos en <kbd>objetos</kbd> a través de 
                                        propiedades (<kbd>properties</kbd>).
<Code>
{`const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};`}
</Code>
                                        A veces, es posible que desees almacenar datos en una estructura de datos flexible. Un objeto de 
                                        JavaScript es una forma de manejar datos flexibles. Permiten combinaciones arbitrarias de cadenas, 
                                        números, booleanos, arreglos, funciones, y objetos.
<Code>
{`const miMusica = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <div className="border border-primary rounded pt-2 px-3">
                                    Los objetos pueden contener tanto objetos anidados como así también arreglos anidados. 
                                    De manera similar a como se accede a los objetos anidados, la notación de corchetes 
                                    de arreglos puede ser encadenada para acceder a arreglos anidados.
<Code>
{`const ourPets = [
    {
        animalType: "cat",
        names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
        "Spot",
        "Bowser",
        "Frankie"
        ]
    }
];

ourPets[0].names[1];
ourPets[1].names[0];`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <div className="border border-primary rounded pt-2 px-3">
                                    En Junio del 2015, en los ECMAScript 6 (ES6) se añade Objects Literals:
<Code>
{`function nuevoUsuario(name, edad, pais, uid) {
    return {
        name,
        edad,
        pais,
        id: uid
    };
}
console.log(nuevoUsuario('Susana', 31, 'VE', 2));
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Hay dos maneras de acceder a las propiedades de un objeto: notación de puntos (.) y 
                                        notación de corchetes ([]), similar a un arreglo. En uso de corchetes se puede utilizar 
                                        cuando la llave o clave de la propiedad tiene espacios en su nombre, Ejemplo: myObj["Space Name"];
<Code>
{`const myObj = {
    prop1: "val1",
    prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

const myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

// Otro ejemplo:
const ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;`}
</Code>
Completa la función utilizando las reglas siguientes para modificar el objeto pasado a la función.

Tu función debe devolver siempre el objeto records completo.
Si value es una cadena vacía, elimina la propiedad prop dada del álbum.
Si prop no es tracks y value no es una cadena vacía, asigna el value a la prop de ese álbum.
Si prop es tracks y value no es una cadena vacía, agrega value al final del array de tracks existentes del álbum. Primero, si el álbum no tiene una propiedad tracks, asigne un array vacío. Luego añade el valor como el último elemento en el array de pistas del álbum.
<Code>
{`// Configuración
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {
    if (value == '') {
        delete records[id][prop];
    } 
    if (prop != 'tracks' && value != '') {
        records[id][prop] = value;
    }
    if (prop == 'tracks' && value != '') {
        if (!records[id].hasOwnProperty(prop)) {
            records[id][prop] = [];
        }
        records[id][prop].push(value);
    }
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2"> Verifica las propiedades de un objeto</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                    Para verificar si una propiedad de un objeto dado existe o no, puedes utilizar el método 
                                    <kbd>.hasOwnProperty().someObject.hasOwnProperty(someProperty)</kbd>
                                    devuelve <kbd>true</kbd> o <kbd>false</kbd>, dependiendo si la propiedad es encontrada en el objeto o no.
<Code>
{`function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false`}
</Code>
                                    </div>
                                </li>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="conditionals" title="Condicionales">
                                Los condicionales son estructuras de control que te permiten evaluar diferentes 
                                expresiones como verdadero o falso y realizar determinadas acciones.
                                Existen tres tipos de condicionales:
                                <ul className="list-unstyled">
                                    <li>
                                        <h6 className="pt-2">IF ELSE</h6>
                                        <div className="border border-primary rounded pt-2 px-3">
                                            Un condicional <kbd>if</kbd> evalúa una expresión si es verdadera. 
                                            La palabra reservada <kbd>else</kbd> evalúa cuando la expresión del 
                                            <kbd>if</kbd> es falsa, pero no es obligatorio colocarlo.
                                            <Code>{``}
                                                {/*
                                                if (true) {
                                                    // Se ejecuta la declaración
                                                }

                                                function test (miCondicion) {
                                                    if (miCondicion) {
                                                        return "Es verdadero";
                                                    }
                                                    return "Es falso";
                                                }

                                                test(true);
                                                test(false);

                                                var edad = 35;
                                                if (edad >= 18) {
                                                    console.log("Puedes conducir");
                                                } else {
                                                    console.log("No puedes conducir");
                                                }
                                                */}
                                            </Code>
                                        </div>
                                    </li>
                                    <li>
                                        <h6 className="pt-2">Anidar condicionales</h6>
                                        <div className="border border-primary rounded pt-2 px-3">
                                            En el caso que haya más condiciones a evaluar, se pueden emplear las palabras reservadas 
                                            <kbd>else if</kbd> junto a la condición a ejecutar. Evalua la primera condición, luego la 
                                            segunda, etc, hasta que consiga la condición con valor sea verdadero.
                                            <Code>{``}
                                                if (condicion1) {
                                                    // Bloque 1
                                                } elseif (condicion2){
                                                    // Bloque 2
                                                } elseif (condicion3){
                                                    // Bloque 3
                                                } else {
                                                    // Bloque else
                                                }

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
                                            </Code>
                                        </div>
                                    </li>
                                    <li>
                                        <h6 className="pt-2">switch</h6>
                                        <div className="border border-primary rounded pt-2 px-3">
                                            Una sentencia <kbd>switch</kbd> compara el valor para las sentencias case las cuales 
                                            definen varios posibles valores. Cualquier sentencia válida JavaScript puede ser 
                                            ejecutada dentro de un bloque <kbd>case</kbd> y se ejecutará desde el primer valor de coincidencia 
                                            case hasta que un <kbd>break</kbd> sea encontrado. La declaración <kbd>default</kbd> 
                                            debe ser el último caso, cuando no se encuentre declaraciones <kbd>case</kbd> como el <kbd>else</kbd>.
                                            <Code>{``}
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
                                            </Code>
                                            Los valores en las sentencias <kbd>case</kbd> se prueban con igualdad estricta (===). 
                                            El <kbd>break</kbd> le dice a JavaScript que deje de ejecutar declaraciones. Si se omite 
                                            <kbd>break</kbd>, se ejecutara la siguiente sentencia.
                                            <p>
                                                Si la sentencia <kbd>break</kbd> es omitida en un caso <kbd>case</kbd> de una sentencia <kbd>switch</kbd>, 
                                                las siguientes sentencias <kbd>case</kbd> serán ejecutadas hasta encontrar un <kbd>break</kbd>. 
                                                Si tienes múltiples entradas con la misma salida, puedes representarlas en una sentencia <kbd>switch</kbd> como esta
                                            </p>
                                            <Code>{``}
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
                                            </Code>
                                        </div>
                                    </li>
                                    <li>
                                        <h6 className="pt-2">try ... catch</h6>
                                        <div className="border border-primary rounded pt-2 px-3">
                                            En Enero del 2019, en los ECMAScript 10 (ES10) se agregó <kbd>try...catch</kbd> 
                                            para manejo de errores. Donde <kbd>try</kbd> significa 'Intenta' y <kbd>catch</kbd> 
                                            captura el error si el intento ha fallado.
                                            <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch">
                                                Ver más en documentación de MDN
                                            </Link>
<Code>
{`try {
    hola();
} catch (error) { // (error) es opcional
    console.log(error);
    // Mostrará: ReferenceError: hola is not defined
}

try {
    hola();
} catch {
    console.log("Hay un error");
}
`}
</Code>
                                        </div>
                                    </li>
                                </ul>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="loops" title="Bucles">
                                Se utilizan los bucles para ejecutar un mismo bloque de código multiples veces.
                                <li className="mt-3">
                                    <h6>Bucle while (Mientras)</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Este bucle permite ejecutar el bloque de código mientras la condicion sea verdadera.
<Code>
{`const miArray = [];
let i = 0;

// Mientras i sea menor que 5, ejecuta el bloque de código.
while (i < 5) {
    miArray.push(i);
    i++;
}`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6>Bucle for (Por)</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Este bucle permite ejecutar el bloque de código por una cantidad de veces.
                                        Este se declaran con tres expresiones opcionales separadas por punto y 
                                        coma: <kbd>for (a; b; c)</kbd>, donde <kbd>a</kbd> es la sentencia de 
                                        inicialización, <kbd>b</kbd> es la sentencia condicional, y <kbd>c</kbd> es la expresión final.
<Code>
{`const miArray = [];

for (let i = 0; i < 5; i++) {
  miArray.push(i);
}

// Un ejemplo iterando en numeros impares
const miArray = [];

for (let i = 0; i < 10; i += 2) {
    miArray.push(i);
}

// Iterar en un arreglo
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
const arr = [
    [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
    }
}`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6>Bucle do..while (Haz... mientras)</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Este bucle permite ejecutar el bloque de código primero y luego revisa si 
                                        la condicion es verdadera para volver a ejecutar el ciclo.
<Code>
{`const miArray = [];
let i = 0;

do {
    miArray.push(i);
    i++;
} while (i < 5);`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6>Reemplazo de bucle por recursión</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Se puede crear una función que se llame a sí misma y a este concepto 
                                        se le llama recursión
<Code>
{`function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}
// Se puede reemplazar el bucle for por recursión
function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}`}
</Code>
<Code>
{` // Ejercicio de recursiva con número aleatorio:
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
          const numbers = rangeOfNumbers(startNum, endNum - 1);
          numbers.push(endNum);
          return numbers;
    }
}
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};
  
console.log(factorial(3));`}
</Code>
<Code>
{`// Ejercicio
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop, index = 0) {
    // Cambia solo el código debajo de esta línea
    if (index >= contacts.length) {
        return "No such contact";
    }

    if (contacts[index].firstName === name) {
        if (contacts[index].hasOwnProperty(prop)) {
            return contacts[index][prop];
        } else {
            return "No such property";
        }
    }

    return lookUpProfile(name, prop, index + 1);
    // Cambia solo el código encima de esta línea
}

lookUpProfile("Akira", "likes");`}
</Code>
                                    </div>
                                </li>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="properties" title="Propiedades o funciones nativas">
                                <li>
                                    <h6 className="pt-2">.length</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Se utiliza para contar los caracteres de una cadena de texto o cantidad de elementos de un array.
                                        En el caso de los caracteres, tambien contará los espacios en blanco:
                                        <Code>{``}
                                            {/*
                                            const miTexto = "Cantidad de caracteres.";
                                            console.log(miTexto.length); // Mostrará: 26.

                                            const miArray = [654, 97, 321];
                                            console.log(miArray.length); // Mostrará: 3.
                                            */}
                                        </Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.push()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Se utiliza para insertar uno o muchos elementos al final de un array.
                                        <Code>{``}
                                            const array1 = [1, 2, 3];
                                            array1.push(4, 5); // Queda: array1 = [1, 2, 3, 4, 5];

                                            const array2 = ["Stimpson", "J", "cat"];
                                            array2.push(["happy", "joy"]); // Queda: ["Stimpson", "J", "cat", "happy", "joy"];
                                        </Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.unshift()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Se utiliza para insertar uno o muchos elementos al principio de un array.
                                        <Code>{``}
                                            const array1 = [1, 2, 3];
                                            array1.unshift(4, 5); // Queda: array1 = [4, 5, 1, 2, 3];

                                            const array2 = ["Stimpson", "J", "cat"];
                                            array2.unshift(["happy", "joy"]); // Queda: ["happy", "joy", "Stimpson", "J", "cat"];
                                        </Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.pop()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Se utiliza para eliminar el último elemento de un array.
                                        <Code>{``}
                                            const miArray = [1, 4, 6];
                                            const elemento = miArray.pop();
                                            console.log(miArray); // Mostrará el array modificado: [1, 4].
                                            console.log(elemento); // Mostrará el elemento eliminado: 6.
                                        </Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.shift()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Se utiliza para eliminar el primer elemento de un array.
                                        <Code>{``}
                                            const miArray = [1, 4, 6];
                                            const elemento = miArray.shift();
                                            console.log(miArray); // Mostrará el array modificado: [4, 6].
                                            console.log(elemento); // Mostrará el elemento eliminado: 1.
                                        </Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.includes() | Array.prototype.includes() | String.prototype.includes()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2016, en los ECMAScript 7 (ES7) 
                                        Se utiliza .includess() para consultar si dentro de un array 
                                        está el valor buscado (filtrar y buscar). Es case sensitive, es decir, 
                                        los valores tipo string debe ser exactamente igual para que dé el resultado deseado.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes">
                                            Ver más en documentación de MDN para Arrays
                                        </Link>
                                        // Agregar documentacion y ejemplo aparte.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes">
                                            Ver más en documentación de MDN para Strings
                                        </Link>
<Code>
{`let numeros = [1, 2, 3, 4, 5];
console.log(numeros.includes(1)); // Mostrará: true.
console.log(numeros.includes(9)); // Mostrará: false.

// Con string
let nombres = ['Susana', 'María', 'Pedro'];
console.log(nombres.includes('Susana')); // Mostrará: true.
console.log(nombres.includes('susana')); // Mostrará: false.`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.flat() | Array.prototype.flat()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Se utiliza <kbd>.flat()</kbd> para aplanar una matriz o arreglo de varios niveles. 
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flat">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`const array = [1,1,2,3,4, [1,3,5,6,[1,2,4]]];
console.log(array.flat(3));
// Mostrará: [1, 1, 2, 3, 4, 1, 3, 5, 6, 1, 2, 4].`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.flatMap() | Array.prototype.flatMap()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Enero del 2019, en los ECMAScript 10 (ES10) se agregó <kbd>.flatMap()</kbd> 
                                        y se utiliza para aplanar una matriz o arreglo de varios niveles y realizar ecuaciones en el proceso. 
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`const array1 = [1,2,3,4,5];
console.log(array1.flatMap(value => [value, value * 2]));
// Mostrará: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10].

const array2 = [1, 2, 1];
const result = array2.flatMap((value) => (value === 2 ? [2, 2] : 1));
console.log(result);
// Mostrará: [1, 2, 2, 1].`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.trimStart() | String.prototype.trimStart()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Enero del 2019, en los ECMAScript 10 (ES10) se agregó <kbd>.trimStart()</kbd> 
                                        y se utiliza para quitar espacios en blanco al inicio de una cadena de texto o <kbd>string</kbd>.
                                        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`const textoConEspacios = '      Hola      ';
console.log(textoConEspacios.trimStart); // Mostrará: 'Hola      '.`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.trimEnd() | String.prototype.trimEnd()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Enero del 2019, en los ECMAScript 10 (ES10) se agregó <kbd>.trimEnd()</kbd> 
                                        y Se utiliza para quitar espacios en blanco al final de una cadena de texto o <kbd>string</kbd>.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`const textoConEspacios = '      Hola      ';
console.log(textoConEspacios.trimEnd); // Mostrará: '      Hola'.`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Set() y .add() | Set.prototype.add()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2015, en los ECMAScript 6 (ES6) se agregó <kbd>.add()</kbd> 
                                        Se utiliza .add() para agregar elementos a un objeto de tipo Set().
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set/add">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`
const lista = new Set();
lista.add(1);
lista.add(2).add(3); // Se puede encadenar
console.log(lista); // Mostrará: [1, 2, 3].
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.entries() | Object.entries()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2017, en los ECMAScript 8 (ES8) se agregó <kbd>.entries()</kbd> y 
                                        se utiliza Object.entries() para transformar un objeto en un array.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`const paises = {VE: 'Venezuela', PE: 'Perú', CO: 'Colombia'};
console.log(Object.entries(paises)); 
/* Mostrará: 
    [
        [VE, 'Venezuela'],
        [PE, 'Perú'],
        [CO, 'Colombia']
    ]
*/`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.fromEntries() | Object.fromEntries()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Enero del 2019, en los ECMAScript 10 (ES10) se agregó <kbd>.fromEntries()</kbd> 
                                        y se utiliza para pasar de un array de arrays a un objeto.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`const entradas = new Map(['name', 'Susana']), ['edad', 31];
console.log(Object.fromEntries(entradas));`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.values() | Object.values()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2017, en los ECMAScript 8 (ES8) se agregó <kbd>.values()</kbd> y
                                        se utiliza Object.values() para obtener solo los valores de un objeto en formato array.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`const paises = {VE: 'Venezuela', PE: 'Perú', CO: 'Colombia'};
console.log(Object.values(paises)); // Mostrará: ['Venezuela', 'Perú', 'Colombia'].`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">window, global, selft y globalThis</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2020, en los ECMAScript 11 (ES11) se agregó el
                                        uso de <kbd>globalThis</kbd> para acceder al objeto global del navegador.
                                        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`const paises = {VE: 'Venezuela', PE: 'Perú', CO: 'Colombia'};

console.log(window); // Accede a los elementos del navegador.
console.log(global); // Accede a los elementos de node.
console.log(selft); // Accede a los elementos de webworker.
console.log(globalThis); // Accede a todos los elementos englobando window, global y seflt.
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.replaceAll() | String.prototype.replaceAll()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2021, en los ECMAScript 12 (ES12) se agregó el  
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`
const string = "Esta es, es una cadena de texto";
const stringSeparado = string.replaceAll("es", "is");
console.log.(stringSeparado);
// Mostrará: Esta is, is una cadena de texto
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">String.padding()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2017, en los ECMAScript 8 (ES8) se agregó <kbd>.padStart()</kbd> y <kbd>.padEnd()</kbd> y 
                                        se utiliza String.padStart() y String.padEnd() para rellenar una cadena de caracteres, se le indican dos parámetros, 
                                        el primero será la cantidad de caracteres que debe tener la cadena al final, y el otro parámetro será el relleno.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/padStart">
                                            Ver más en documentación de MDN para padStart
                                        </Link>
                                        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd">
                                            Ver más en documentación de MDN para padEnd
                                        </Link>
<Code>
{`const cadena = 'Holis';
console.log(cadena.padStart(10. '!!')); // Mostrará: '!!!!!Holis'.
console.log(cadena.padEnd(10. '!!')); // Mostrará: 'Holis!!!!!'.`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Trailing commas</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2017, en los ECMAScript 8 (ES8) se agrega las 
                                        <kbd>Trailing commas</kbd> muestra los espacios vacíos de los elementos array.
                                        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`const edades = [17, 76, 45, 32, , , 23];
console.log(edades); // Mostrará: [17, 76, 45, 32, empty x2 , 23].
console.log(edades.length); // Mostrará: 4'.`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Math.random()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Función global de Javascript para generar un número decimal aleatorio 
                                        entre 0 y 1, pero nunca 1 sino cerca de 1.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`console.log(Math.random());
// Mostrará un número entre 0 y <1 como 0.42124407248267604.

// Para devolver un número entero, se multiplica x 10 y se redondea:
Math.floor(Math.random() * 10);

// Para obtener un número aleatorio pero con un valor máximo y mñinimo:
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">parseInt()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Función global de Javascript convertir un string a un entero.
                                        Un argumento que se puede añadir es <kbd>Radix</kbd> y este puede ser un entero 
                                        entre 2 y 36
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`
parseInt(string, radix);
const a = parseInt("007");
const a = parseInt("11", 2);
parseInt("FXX123", 16);
parseInt("Hello", 8); // Mostrará NaN. No es un número en absoluto.

// Una calculadora de binario a entero:
function convertToInteger(str) {
    return parseInt(str, 2);
}
  
convertToInteger("10011");
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.at() | Array.prototype.at()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2022, en los ECMAScript 13 (ES13) se agregó <kbd>.at()</kbd> 
                                        y se utiliza para obtener un elemento de un arreglo indicando su posición. 
                                        Una versión más simple que usar la notación con corchetes.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/at">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`const array = ["one", "two", "three", "four", "five", "six"];

console.log(array[array.length - 1]);
console.log(array.at(-1));
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.freeze() | Object.freeze()()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Se utiliza para prevenir la mutación del contenido de un objeto; 
                                        impide que se puedan eliminar las propiedades ya existentes o agregar nuevas.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
// Mostrará error
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();`}
</Code>
                                    </div>
                                </li>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="RegExp" title="Expresiones Regulares (Regex)">
                                <li>
                                    <h6 className="pt-2"></h6>
                                    <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec">
                                        Ver más en documentación de MDN
                                    </Link>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Concepto
<Code>{`//
// Se utiliza g para buscar todos los repetidos.
// Se utiliza i para que no sea case sensitive.
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);

// Se utiliza + para buscar uno o más caracteres.
// Se utiliza * para buscar CEro o más caracteres.
// Se puede específicar qué cantidad de caracteres con llaves: {}.
let A4 = "haaaah";
let A3 = "haaah";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // true
multipleHA.test(A3); // false

// Si se quiere espeificar el mínimo y el máximo:
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // true
multipleA.test(A2); // false
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let result = ohRegex.test(ohStr); // false

// Si solo se especifica el mínimo sería así:
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // true
multipleA.test(A2); // false
multipleA.test(A100); // true

// Se utiliza el punto(.) para que coincida con cualquier caracter de ahí en adelante.
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Mostrará: true
huRegex.test(hugStr); // Mostrará: true

// Para una expresion literal y flexible se utilizan corchetes [ y ]
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

// El caso contrario sería con el caracter de intercalación ^
let bgRegex = /[^aeiou]/gi; // Este NO estaría buscando las vocales.

// Para crear un conjunto se utiliza el guión -.
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

// Ahora, si se utiliza ^ fuera de un conjunto, buscará la coincidencia al principio de la cadera:
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); // false

// Para buscar una expresión al final de una cadena se utiliza $:
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); // false

// Un atajo para el siguiente conjunto: [A-Za-z0-9_] sería: \w.
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // true
shortHand.test(numbers); // true
longHand.test(varNames); // true
shortHand.test(varNames); // true

// Lo contrario sería \W, un atajo para [^A-Za-z0-9_].
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // %
sentence.match(shortHand) // !

// Un atajo para el conjunto [0-9] sería: \d
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length; // 4

// Lo opuesto sería \D, un atajo para [^0-9]:
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length; // 17

// Para los espacios en blanco, tablador, salto de línea está \s, equivale a: [\r\t\f\n\v]
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);

// Lo opuesto sería \S equivale a: [^\r\t\f\n\v]
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // 32

// Una validacion de username sería:
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
/* Donde: 
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input
*/

// Otro ejemplo:
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
/* Donde: 
^ - start of input
[a-z] - first character is a letter
[0-9]{2,} - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input
*/
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Grupos de expresiones</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                    En Junio del 2018, en los ECMAScript 9 (ES9), se agregó una mejora para capturar
                                    valores en grupo que estén dentro de una expresión regular. <br />
                                    En el siguiente ejemplo, se validará una fecha de acuerdo a la cantidad de 
                                    caracteres que tiene el grupo entre los guiones. Es decir, si en el primer grupo '(\d{4})' 
                                    tiene 4 caracteres, pasará la validación 'match'.
<Code>{` // Regex de manejo de fechas
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2024-01-01");
console.table(matchers);`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.matchAll() | String.prototype.matchAll()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2020, en los ECMAScript 11 (ES11) se agregó el <kbd>matchAll()</kbd> 
                                        para generar diferentes reglas para filtrar o buscar según sea el caso. 
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`
const regex = /\b(Blanco)+\b/g;
const colores = 'Verde, Rosado, Amarillo, blanco, Negro, Blanco';

for (const match of colores.matchAll(regex)) {
    console.log(match);
}
`}
</Code>
                                    </div>
                                </li>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="functions" title="Funciones, reutilización de código">
                                <li>
                                    <h6 className="pt-2">Funciones con parámetros</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Se puede enviar variables que se utilizaran dentro de la función, 
                                        a estas variables se le llama parámetros.
                                        <Code>{``}
                                            {/*
                                            // Se declara la función:
                                            function miFuncion(param1, param2) {
                                                console.log(param1, param2);
                                            }

                                            // Se llama la función:
                                            miFuncion("Hola", 2); // Mostrará: "Hola", 2.
                                            */}
                                        </Code>
                                        parámetro default, se utiliza para definir los parametros en caso 
                                        que al llamar la variable, no se envien los parámetros.
                                        Se agregó en Junio del 2015, en los ECMAScript 6 (ES6).
                                        <Code>
                                            {`function nuevoUsuario(nombre = 'Susana', edad = 31) {
                                                console.log(nombre, edad);
                                            }
                                            nuevoUsuario(); // Llamo la funcion sin enviar valores.
                                            // Mostrará: Susana, 31
                                            nuevoUsuario('Pedro', 10); // Mostrará: Pedro, 10
                                            `}
                                        </Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Parámetros Rest</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2015, en los ECMAScript 6 (ES6) 
                                        Con el parámetro rest, puedes crear funciones que tomen un número 
                                        variable de argumentos. Estos argumentos se almacenan en un arreglo 
                                        al que se puede acceder más tarde desde dentro de la función.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`// Con una función
const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

sum(1, 4, 1, 3, 9); // Toma todo los parámetros.
// Mostrará: 18.
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Funciones con retorno</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Se puede enviar variables que se utilizaran dentro de la función, 
                                        a estas variables se le llama parámetros.
                                        <Code>{``}
                                            {/*
                                            // Se declara la función:
                                            function sumarTres(num) {
                                                return num + 3;
                                            }
                                                
                                            const retorno = sumarTres(5);

                                            // Se llama la función:
                                            console.log(retorno); // Mostrará: 8.
                                            */}
                                        </Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Funciones anónimas, funciones flecha</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2015, en los ECMAScript 6 (ES6) se añade funciones de flecha 
                                        (arrow functions) Las funciones también se pueden crear mediante una 
                                        expresión function. Una función puede ser anónima; 
                                        no tiene por qué tener un nombre.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions#expresiones_function">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`const myFunc = function() {
    const myVar = "value";
    return myVar;
}
const myFunc = () => {
    const myVar = "value";
    return myVar;
}
const myFunc = () => "value";

const square = function (number) {
    return number * number;
};
var x = square(4); // x obtiene el valor 16

const doubler = (item) => item * 2;
doubler(4);

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

const myConcat = (arr1, arr2) => arr1.concat(arr2);

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Funciones asíncronas</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2015, en los ECMAScript 6 (ES6) se añade el uso de 
                                        promesas, async, await, then y .catch.
<Code>
{`// Se declara la función asíncrona
const otraFuncion = async () => {
    const mensaje = await miAsincrona();
    console.log(mensaje);
}

otraFuncion();
`}
</Code>
                                        Uso de promesas con .then() y .catch():
<Code>
{`
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer es establecido a false para representar una respuesta no satisfactoria del servidor
    let responseFromServer = false;
    
    if(responseFromServer) {
        resolve("We got the data");
    } else {  
        reject("Data not received");
    }
});
    
makeServerRequest.then(result => {
    console.log(result);
});
    
makeServerRequest.catch(error => {
    console.log(error);
});`}
</Code>
                                    </div>
                                    <div className="border border-primary rounded pt-2 px-3">
                                    En Junio del 2017, en los ECMAScript 8 (ES8) se añade una mejora 
                                    a las funciones asincrona anidadas.
<Code>
{`// Se declara la función que será la promesa:
const miAsincrona = () => {
    return new Promise((resolve, reject) => {
        (true) // La pregunta
        ? setTimeout(() => resolve('Es asíncrona!'), 2000) // True
        : reject(new Error('Error!')); // False
    })
}

// Ejemplo de ES8
const otraAsincrona = async () => {
    const algo = await miAsincrona();
    console.log(algo);
    console.log('Hola);
}
console.log('Antes');
otraAsincrona();
console.log('Después');

// Mostrará: 
/*
Antes
Después
Es asíncrona!
Hola
*/

`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.allSettled() | Promise.allSettled()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2020, en los ECMAScript 11 (ES11) se agregó el
                                        uso de promise con <kbd>.allSettled()</kbd> (Si todo ha sido resuelto).
                                        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`// Se declaran las funciones de promesa:
const promesaUno = new Promise((resolve, reject) => reject('Reject'));
const promesaDos = new Promise((resolve, reject) => resolve('Resolve'));
const promesatres = new Promise((resolve, reject) => resolve('Resolve 2'));

// Se pasan en un array todas las promesas
Promise.allSettled([promesaUno, promesaDos, promesatres])
    .then(response => console.log(response));
/*
* Muestra: 
* [
*   {status: 'rejected', reason: 'Reject'},
*   {status: 'fulfilled', value: 'Resolve'},
*   {status: 'fulfilled', value: 'Resolve 2'}
* ]
*/
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.finally()</h6>
                                        En Junio del 2018, en los ECMAScript 9 (ES9), se agregó una mejora
                                        a las promesas. Finally permitirá mostrar una funciona anónima para 
                                        que ejecute algo cuando termine la promesa.
                                    <div className="border border-primary rounded pt-2 px-3">
<Code>{`
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
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">.any() | Promise.any()</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2021, en los ECMAScript 12 (ES12) se agregó el
                                        uso de promise con <kbd>.any()</kbd> (Cualquiera), donde se le ingresa 
                                        un array de promesas y retornará la primera que haya sido satisfactoria.
                                        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`// Se declaran las funciones de promesa:
const promesaUno = new Promise((resolve, reject) => reject('Reject'));
const promesaDos = new Promise((resolve, reject) => resolve('Resolve'));
const promesatres = new Promise((resolve, reject) => resolve('Resolve 2'));

// Se pasan en un array todas las promesas
Promise.any([promesaUno, promesaDos, promesatres])
    .then(response => console.log(response));
// Muestra: Resolve.
`}
</Code>
                                    </div>
                                </li>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="scope" title="Scope">
                                <li>
                                    <h6 className="pt-2">Scope global y Funciones</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Scope se refiere a la capacidad de visibilidad de la variable. Cuando una variable 
                                        es global, puede ser consultada en todo el código. Las variables creadas con 
                                        <kbd>let</kbd> y <kbd>const</kbd> son autimáticamente globales mientras el codigo se esté ejecutando.
                                        <Code>{``}
                                            {/*
                                            const global = "Hola";

                                            // Se declara la función:
                                            function nombreDeFuncion() {
                                                console.log(global);
                                            }

                                            // Se llama la función:
                                            nombreDeFuncion();
                                            */}
                                        </Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Scope local y Funciones</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Scope se refiere a la capacidad de visibilidad de la variable que 
                                        puede ser consultada en su zona local del código.
                                        <Code>{``}
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
                                        </Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Scope local vs Scope global</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Scope se refiere a la capacidad de visibilidad de la variable que 
                                        puede ser consultada en su zona local del código.
                                        <Code>{``}
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
                                        </Code>
                                    </div>
                                </li>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="modules" title="Módulos">
                                <li>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        Palabras reservadas para importar y exportar fragmentos de codigo como módulos. 
                                        En archivos de javascript vanilla, se debe crear el archivo package.json y agregar 
                                        la linea <kbd>"type": "module"</kbd> para que acepte los módulos.
<Code>
{`
// Declarar un modulo a exportar
// Nombre del archivo '/modulo_nuevo.js'
const hola = () => {
    console.log('Hola, soy un módulo');
}

// Sintaxis para exportar el fragmento de código
export default hola;

// Sintaxis para importar un modulo desde el archivo
import hola from './modulo_nuevo.js'

// Instancia del objeto
hola();
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Dynamic import</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2020, en los ECMAScript 11 (ES11) se agregó el 
                                        importe dinámico de elementos de mientas se carga el sitio web.
                                        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import#import_a_module_for_its_side_effects_only">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`
(async () => {
    if (somethingIsTrue) {
        // import module for side effects
        await import("/modules/my-module.js");
    }
})();
`}
</Code>
<Code>
{`// ejemplo nombre del archivo 'modulo.js'.
export function hola() {
    console.log('Hola mundo');
}

export default hola;

// ejemplo nombre del archivo 'miApp.js'.
const boton = document.getElementById('miBoton');
boton.addEventListener('click', asycn function () {
    const module = await import('./module.js');
    console.log(module);
    module.hola();
})
`}
</Code>
                                        Otra forma de importar un modulo directamente en el archivo HTML
<Code>
{`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic import</title>
</head>
<body>
    <button id="miBoton">Click</button>
    <script type="module" src="miApp.js"></script>
</body>
</html>
`}
</Code>
                                    </div>
                                </li>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="generators" title="Generadores">
                                <li>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2015, en los ECMAScript 6 (ES6) se añade los <kbd>Generadores</kbd> para tener un
                                        iterador personalizado para la funcion que retorna valores recordando el estado 
                                        por lo que no será necesario colocar el incide el caso que se quiera iterar en un arreglo.
                                        Para destacar un generator de una funcion normal se le agrega un <kbd>*</kbd>.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function*">
                                            Ver más en documentación de MDN sobre funciones generadoras
                                        </Link>
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator">
                                            Ver más en documentación de MDN sobre Generators
                                        </Link>
<Code>
{`// Declara la funcion 
function* iterar(array) {
    for (let value of array) {
        yield value;
    }
}

const miArreglo = iterar([1, 2, 3, 4]);

console.log(miArreglo.next().value); // Mostrará: 1.
console.log(miArreglo.next().value); // Mostrará: 2.
console.log(miArreglo.next().value); // Mostrará: 3.
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Generator con async</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2018, en los ECMAScript 9 (ES9), se agregó una mejora a 
                                        los <kbd>Generadores</kbd> para que sea asíncrona 'Async Generators'.
<Code>{`// Declara la funcion 
async function* otroGenerador() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const otro = otroGenerador();

otro.next().then(response => console.log(response.value));
otro.next().then(response => console.log(response.value));
otro.next().then(response => console.log(response.value));`}
</Code>
                                        Utilizando un bucle <kbd>for</kbd>:
<Code>{`// Declara la funcion 
async function* arrayDeNombres(array) {
    for await (let value of array) {
        console.log(value);
    }
}
const nombres = arrayDeNombres(['Susana', 'María', 'Pedro']);`}
</Code>
                                    </div>
                                </li>
                            </AccordionItem>
                        </li>
                        <li className="accordion">
                            <AccordionItem id="class" title="Clases">
                                <li>
                                    <div className="border border-primary rounded pt-2 px-3">
                                    son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. 
                                    La sintaxis de las clases no introduce un nuevo modelo de herencia orientada a 
                                    objetos en JavaScript. Las clases de JavaScript proveen una sintaxis mucho más clara 
                                    y simple para crear objetos y lidiar con la herencia.
                                    <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes">
                                        Ver más en documentación de MDN
                                    </Link>
<Code>
{`//Declara la clase
className Usuario {};

// Instancia del objeto
const nuevoUsuario = new Usuario();

//Declara la clase
class Usuario {
    saludos() {
        return "Hola";
    }
};

// Instancia del objeto
const objeto = new Usuario();

console.log(objeto.saludos()); // Mostrará: Hola.
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Herencias</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
<Code>
{`// Declara la clase
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
// Mostrará: Me ejecuto solo cuando llaman a la clase.

// Declara la clase
class Usuario {
    // Constructor
    constructor(nombre) {
        this.nombre = nombre;
    }

    fragmento() {
        return "Hola";
    }
    saludos() {
        return \`${this.fragmento} ${this.nombre}\`;
    }
};

// Instancia del objeto
const objeto = new Usuario('Susana');
// Mostrará: Hola Susana.

// Declara la clase
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
        return \`${this.fragmento} ${this.nombre}\`;
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
console.log(objeto.uEdad); // Mostrará: 31.
console.log(objeto.uEdad = 30); // Mostrará: 30.
`}
</Code>
                                    </div>
                                </li>
                                <li>
                                    <h6 className="pt-2">Métodos privados | Private class fields</h6>
                                    <div className="border border-primary rounded pt-2 px-3">
                                        En Junio del 2021, en los ECMAScript 12 (ES12) se agregó el
                                        uso de <kbd>#</kbd> para definir cuando un método de una clase es 
                                        privada.
                                        <Link href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_properties">
                                            Ver más en documentación de MDN
                                        </Link>
<Code>
{`//Declara la clase
class Usuario {
    // Constructor
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    fragmento() {
        return "Hola";
    }

    // Métodos privados
    #saludos() {
        return \`${this.fragmento} ${this.name}\`;
    }

    get #uEdad() {
        return this.edad;
    }

    set #uEdad(n) {
        this.edad = n;
    }
};

// Instancia del objeto
const objeto = new Usuario('Susana', 31);
console.log(objeto.uEdad); // Mostrará: undefined.
console.log(objeto.uEdad = 30); // Mostrará: undefined.
`}
</Code>
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
                            <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" 
                                target="_blank" rel="noopener noreferrer">
                                <span className="badge text-bg-info">12/2023</span> Javascript | MDN Web Docs
                            </a>
                        </li>
                        <li>
                            <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" 
                                target="_blank" rel="noopener noreferrer">
                                <span className="badge text-bg-info">12/2023</span> Javascript algorithms and data structures | Freecodecamp
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
                        <a href="https://es.javascript.info/types" className="d-block" target="_blank" rel="noopener noreferrer">Tipos de datos (javascript.info)</a>
                        <a href="https://platzi.com/tutoriales/1339-fundamentos-javascript-2018/6440-tipos-de-datos-y-valores-en-javascript/" className="d-block" target="_blank" rel="noopener noreferrer">Tipos de datos (Platzi)</a>
                        <a href="https://platzi.com/clases/1814-basico-javascript/26293-variables/" className="d-block" target="_blank" rel="noopener noreferrer">Qué es una variable (Platzi)</a>
                        <a href="https://platzi.com/clases/1814-basico-javascript/26292-elementos-de-un-lenguaje-de-programacion-variables/" className="d-block" target="_blank" rel="noopener noreferrer">Variables, Funciones y sintaxis (Platzi)</a>
                        <a href="https://es.javascript.info/operators" className="d-block" target="_blank" rel="noopener noreferrer">Operadores aritméticos (javascript.info)</a>
                        <a href="https://es.javascript.info/comparison" className="d-block" target="_blank" rel="noopener noreferrer">Operadores de comparación (javascript.info)</a>
                        <a href="https://platzi.com/clases/1814-basico-javascript/26300-operadores-asignacion-comparacion-y-aritmeticos/" className="d-block" target="_blank" rel="noopener noreferrer">Operadores de asignación, aritméticos y de comparación (Platzi)</a>
                        <a href="https://developer.mozilla.org/es/docs/Glossary/Scope" className="d-block" target="_blank" rel="noopener noreferrer">Scope (Mozilla)</a>
                        <a href="https://platzi.com/clases/1814-basico-javascript/26296-scope/" className="d-block" target="_blank" rel="noopener noreferrer">Scope (Platzi)</a>
                        <a href="https://platzi.com/blog/como-funciona-el-scope-en-javascript/" className="d-block" target="_blank" rel="noopener noreferrer">Qué es y cómo funciona el scope en JavaScript (Platzi)</a>
                        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" className="d-block" target="_blank" rel="noopener noreferrer">Destructuración (Mozilla)</a>
                        <a href="https://platzi.com/clases/3504-ecmascript-6/51756-asignacion-de-destructuracion/" className="d-block" target="_blank" rel="noopener noreferrer">Destructuración (Platzi)</a>
                        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax" className="d-block" target="_blank" rel="noopener noreferrer">Sintaxis Operador Spread (Mozilla)</a>
                        <a href="https://platzi.com/clases/3504-ecmascript-6/51757-spread-operator/" className="d-block" target="_blank" rel="noopener noreferrer">Parámetros Rest y operador Spread (Platzi)</a>
                        <a href="https://es.javascript.info/rest-parameters-spread" className="d-block" target="_blank" rel="noopener noreferrer">Parámetros Rest y operador Spread (javascript.info)</a>
                        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator" className="d-block" target="_blank" rel="noopener noreferrer">Generadores (Mozilla)</a>
                        <a href="https://platzi.com/clases/3504-ecmascript-6/51765-generator/" className="d-block" target="_blank" rel="noopener noreferrer">Generadores (Platzi)</a>
                        <a href="https://es.javascript.info/generators" className="d-block" target="_blank" rel="noopener noreferrer">Generadores (javascript.info)</a>
                        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set/add" className="d-block" target="_blank" rel="noopener noreferrer">Set Add (Mozilla)</a>
                        <a href="https://platzi.com/clases/3504-ecmascript-6/51766-set-add/" className="d-block" target="_blank" rel="noopener noreferrer">Set Add (Platzi)</a>
                        <a href="https://es.javascript.info/map-set#set" className="d-block" target="_blank" rel="noopener noreferrer">Set Add (javascript.info)</a>
                    </AccordionItem>
                </div>
            </div>
            <Footer />
        </div>
    )
}
import Nav from '../Nav'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

export default function Route() {
    return (
        <div>
            <Nav />
            <div className="container">
                <Sidebar className="my-5" />
                <h1>Data Science</h1>
                <em>Documentación Data Science</em>

                <div class="row">
                    <div class="col-12 col-lg-8">
                        <ul class="border-1">
                            <li>
                                <button class="accordion-button collapsed" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#requisites" aria-expanded="false" 
                                    aria-controls="requisites">Pre - Requisitos
                                    <i class="ps-2"></i>
                                    <i class="arrow"></i>
                                </button>
                                <ul class="border-2 collapse multi-collapse" id="requisites">
                                    <li>A</li>
                                    <li>B</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-8">
                        <ul class="border-1">
                            <li>
                                <button class="accordion-button collapsed" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#content" aria-expanded="false" 
                                    aria-controls="content">Contenido
                                    <i class="ps-2"></i>
                                    <i class="arrow"></i>
                                </button>
                                <ul class="border-2 collapse multi-collapse" id="content">
                                    <li>
                                        <button class="accordion-button collapsed" type="button" 
                                            data-bs-toggle="collapse" data-bs-target="#data" aria-expanded="false" 
                                            aria-controls="data">¿Qué es Data Science?
                                            <i class="ps-2"></i>
                                            <i class="arrow"></i>
                                        </button>
                                        <div class="collapse" id="data">
                                            <p>
                                                Data Science es un proceso en el cual se utilizan los datos para obtener información valiosa.
                                            </p>
                                            <h6>Objetivos de Data Science</h6>
                                            <p>
                                                Los principales objetivos que la Data Science debe cumplir, son los siguientes:
                                            </p>
                                            <ol class="border-3">
                                                <li>Tomar decisiones.</li>
                                                <li>Crear estrategias de negocio.</li>
                                                <li>Producir software basados en Inteligencia Artificial.</li>
                                            </ol>
                                            <p>Tres piñones juntos, trabajando para obtener un objetivo.</p>
                                            <h6>Proceso de Data Science</h6>
                                            <p>
                                                Las distintas actividades que se llevan a cabo en el proceso de Data Science se 
                                                pueden resumir de la siguiente manera:
                                            </p>
                                            <ol class="border-3">
                                                <li>Obtener datos (mediciones directas, encuestas y fuentes de internet).</li>
                                                <li>Transformar o limpiar datos (dar formato correcto, eliminar o marcar errores y espacios en blanco).</li>
                                                <li>Explorar, analizar y visualizar datos (buscar, organizar y graficar información)</li>
                                                <li>Usar modelos de Machine Learning (predecir información).</li>
                                                <li>Escalar modelos de Machine Learning (poner los modelos a disposición de los usuarios).</li>
                                            </ol>
                                            <p>
                                                El proceso de Data Science dependerá en gran medida del proyecto o empresa en la que se trabaje, 
                                                pero algo general es que se basa en el método científico o metodología para descubrir por qué 
                                                las cosas pasan como pasan. Por lo que se debe tener muy claro cuál es la pregunta y objetivo 
                                                del caso de negocio. Ya que es un ciclo, es decir que se repetirá constantemente.
                                            </p>
                                            <h6>Áreas de conocimientos en Data Science</h6>
                                            <p>
                                                Es una intersección de varios conocimientos en los que se encuentran:
                                            </p>
                                            <ol class="border-3">
                                                <li>Matemáticas y estadística.</li>
                                                <li>Ciencias computacionales.</li>
                                                <li>Conocimiento del dominio o sector del negocio.</li>
                                            </ol>
                                            <p>
                                                El nivel de profundidad de cada una de estas áreas se va a determinar de acuerdo al rol 
                                                que quieras aprender. Sin embargo, algunas habilidades básicas para todos los roles serían: 
                                                programación, estadística descriptiva, probabilidad y mantenerse actualizado sobre lo 
                                                que pasa alrededor de la industria en que se encuentra.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <button class="accordion-button collapsed" type="button" 
                                            data-bs-toggle="collapse" data-bs-target="#science" aria-expanded="false" 
                                            aria-controls="science">Diferencia entre inteligencia artificial y Data Science
                                            <i class="ps-2"></i>
                                            <i class="arrow"></i>
                                        </button>
                                        <div class="collapse" id="science">
                                            <p>
                                                Son diferentes, la inteligencia artificial va mucho más allá del análisis 
                                                y manipulación de datos, pero tienen una relación y trabajan en conjunto.
                                            </p>
                                            <h6>Inteligencia artificial</h6>
                                            <p>
                                                Inteligencia artificial (A.I. por sus siglas en inglés) se trata de enseñarles a las máquinas a emular 
                                                o imitar la inteligencia natural de los seres humanos.
                                            </p>
                                            <p>
                                                Esto lo hacen por medio de algoritmos que modelan cómo aprendemos, tomamos decisiones e 
                                                identificamos patrones en grandes cantidades de datos. 
                                                Algunos ejemplos son: identificar gatitos de perritos o jugar videojuegos.
                                            </p>
                                            <p>
                                                Una de las grandes hazañas que ha podido lograr la inteligencia artificial fue ganarle a 
                                                campeones mundiales en Go, Ajedrez y League of Legends por nombrar algunos. 
                                                Por supuesto, no fue la misma máquina.
                                            </p>
                                            <p>
                                                Además, una aclaración importante es que la inteligencia artificial está limitada 
                                                de cierto modo, porque no puede tener consciencia de sí misma y por ende no puede 
                                                tomar sus propias decisiones.
                                            </p>
                                            <h6>Machine Learning</h6>
                                            <p>
                                                Es una rama de la inteligencia artificial, que tiene como objetivo hacer que las 
                                                computadoras aprendan determinada habilidad de forma automática.
                                            </p>
                                            <p>
                                                Esto se hace por medio de pasarle muchos datos a un algoritmo, que posteriormente 
                                                nos va a arrojar un modelo, el cual podrá resolver problemas por medio de predicciones 
                                                que este haga o también implementarlo a un software para solucionar determinadas situaciones.
                                            </p>
                                            <ol class="border-3">
                                                <li>
                                                    <strong>Datos de entrenamiento</strong>:
                                                    <p>
                                                        Son los datos utilizados para entrenar un algoritmo y obtener un modelo que pueda 
                                                        hacer predicciones para resolver problemas e implementarse en un software para 
                                                        un mejor rendimiento en el negocio.
                                                    </p>

                                                </li>
                                                <li>
                                                    <strong>Datos de entrada</strong>:
                                                    <p>
                                                        Son los datos que se le dan al modelo obtenido luego de ser entrenado, que son del mismo 
                                                        contexto que los de entrenamiento, pero con diferentes detalles. Para los cuales va a generar predicciones que serán evaluadas para garantizar la eficacia del modelo.
                                                    </p>
                                                </li>
                                                <li>Producir software basados en Inteligencia Artificial.</li>
                                            </ol>
                                            <h6>Utilidad del Machine Learning</h6>
                                            <p>
                                                Por ejemplo, si queremos saber cuándo tendremos una perdida masiva de clientes, 
                                                podríamos hacer un modelo que haga dicha predicción. Además, saber cuándo y qué 
                                                producto ofrecerles para no perder un cliente.
                                            </p>
                                            <p>
                                                Por otra parte, si queremos saber si un paciente es propenso a una enfermedad 
                                                específica en el futuro,  podemos hacer un modelo que realice una predicción 
                                                para detectar dicha enfermedad en las primeras etapas o prevenirla.
                                            </p>
                                            <p>
                                                Conoce acerca del día a día de una Machine Learning Engeneer.
                                            </p>
                                            <h6>Proceso de integración de Machine Learning al producto</h6>
                                            <p>
                                                Hay equipos encargados de implementar modelos de Machine Learning al producto, 
                                                como por ejemplo: el algoritmo de recomendaciones de Netflix o YouTube, quienes 
                                                por medio de los datos que el usuario crea al interactuar con la plataforma, 
                                                predice cuáles son los videos que más podrían interesarle.
                                            </p>
                                            <p>
                                                Los pasos para la integración del Machine Learning al producto son:
                                            </p>
                                            <ol class="border-3">
                                                <li>Ingesta de datos.</li>
                                                <li>Validación de los datos.</li>
                                                <li>Preparación de datos.</li>
                                                <li>Entrenamiento de modelo.</li>
                                                <li>Evaluación de modelo.</li>
                                                <li>Validación de modelo.</li>
                                                <li>Despliegue de modelo.</li>
                                                <li>Interfaz de usuario.</li>
                                            </ol>
                                            <h6>Diferencias entre Data Science e inteligencia artificial</h6>
                                            <p>
                                                Data Science es el proceso para analizar datos y generar predicciones valiosas para la 
                                                toma de decisiones y creación de productos.
                                            </p>
                                            <p>
                                                La inteligencia artificial se refiere a los algoritmos que sirven para predecir eventos 
                                                en el futuro, imitando la inteligencia humana.
                                            </p>
                                            <h6>Relación entre Data Science e inteligencia artificial</h6>
                                            <p>
                                                En Data Science se utiliza como herramienta la inteligencia artificial para 
                                                predecir el futuro, por medio de modelos evaluados que hacen pronósticos, 
                                                emulando cierta habilidad del ser humano, al analizar grandes cantidades de datos.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <button class="accordion-button collapsed" type="button" 
                                            data-bs-toggle="collapse" data-bs-target="#big" aria-expanded="false" 
                                            aria-controls="big">Big Data
                                            <i class="ps-2"></i>
                                            <i class="arrow"></i>
                                        </button>
                                        <div class="collapse" id="big">
                                            <p>
                                                Big Data es una grandísima cantidad de datos que tiene una empresa u 
                                                organización para trabajar, estos datos generalmente no se pueden manejar 
                                                de manera tradicional, debido a su enorme tamaño.
                                            </p>
                                            <p>
                                                La palabra big data escrita en el medio, rodeada de muchas palabras 
                                                relacionada con la tecnología y la información.
                                            </p>
                                            <h6>5 V's del Big Data</h6>
                                            <p>
                                                Para que los datos sean considerados Big Data deben cumplir con las 
                                                5 V's del Big Data. Que son las siguientes:
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>Volumen</strong>:
                                                    Son toda la cantidad de datos que tiene la empresa, desde su funcionamiento 
                                                    hasta las interacciones de los usuarios.
                                                </li>
                                                <li>
                                                    <strong>Velocidad</strong>:
                                                    Se refiere a que los datos de Big Data deben tener una velocidad en 
                                                    vivo, para poder procesar de manera adecuada, considerando su tamaño.
                                                </li>
                                                <li>
                                                    <strong>Variedad</strong>:
                                                    Los datos que almacene o transaccione la empresa tienen distintos tipos de formatos.
                                                </li>
                                                <li>
                                                    <strong>Veracidad</strong>:
                                                    Los datos que se tengan en Big Data deben ser confiables o verdaderos, 
                                                    porque en ellos se basarán importantes decisiones del negocio.
                                                </li>
                                                <li>
                                                    <strong>Valor</strong>:
                                                    Estos datos que se almacenan deben brindar algún tipo de ventaja a la empresa 
                                                    para tomar decisiones o hacer productos para sus consumidores.
                                                </li>
                                            </ul>
                                            <h6>Procesamiento de Big Data</h6>
                                            <p>
                                                El almacenamiento, transformación, análisis e implementación de estos datos 
                                                del negocio deben hacerse en distintas computadoras, debido a 
                                                la gran cantidad y también a las diferentes estrategias que deben 
                                                utilizarse para que funcione el Big Data.
                                            </p>
                                            <p>
                                                Algunos servicios que se encargan de dividir este gran problema en partes más 
                                                pequeñas son: Spark, Hadoop y servicios de cómputo en la nube.
                                            </p>
                                            <h6>Relación entre Data Science, inteligencia artificial y Big Data</h6>
                                            <p>
                                                En el procedimiento de búsqueda de información valiosa que es encargado 
                                                a la Data Science, se usa Big Data para aumentar las posibilidades de 
                                                tener información más profunda y detallada del negocio.
                                            </p>
                                            <p>
                                                Además, se pueden emplear modelos entrenados de la rama de Machine Learning 
                                                de inteligencia artificial para agilizar y encontrar patrones inesperados.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <button class="accordion-button collapsed" type="button" 
                                            data-bs-toggle="collapse" data-bs-target="#noData" aria-expanded="false" 
                                            aria-controls="noData">¿Qué no es Data Science?
                                            <i class="ps-2"></i>
                                            <i class="arrow"></i>
                                        </button>
                                        <div class="collapse" id="noData">
                                            <p>
                                                Para conocer el panorama completo sobre lo que es Data Science, 
                                                debemos saber que definitivamente no es inteligencia artificial, 
                                                meras matemáticas, archivos de Excel o puras métricas, como a 
                                                veces se piensa.
                                            </p>
                                            <h6>Inteligencia artificial</h6>
                                            <p>
                                                Esta es solamente una herramienta utilizada por la Data Science, 
                                                pero no es equivalente o igual.
                                            </p>
                                            <h6>Solo matemáticas</h6>
                                            <p>
                                                Las matemáticas son empleadas para crear fórmulas e interpretar los 
                                                datos de la organización, pero no es la única herramienta usada para 
                                                encontrar información de valor.
                                            </p>
                                            <h6>Solo archivos de Excel</h6>
                                            <p>
                                                Este es solo uno de los diferentes tipos de archivo que se deben conocer 
                                                y emplear en Data Science.
                                            </p>
                                            <h6>Solo métricas</h6>
                                            <p>
                                                Las métricas son una de las herramientas para generar un panorama o contexto 
                                                de la empresa, pero estas tienen trabajo e interpretación que deben ser brindadas 
                                                por la Data science, por medio de otras herramientas.
                                            </p>
                                            <h6>Por qué no aprender Data Science</h6>
                                            <p>
                                                Dentro de la Data Science existen muchas actividades que no son 
                                                del todo agradables o pomposas, pero que son necesarias para lograr un buen resultado.
                                            </p>
                                            <h6>No te gusta aprender constantemente</h6>
                                            <p>
                                                En este ambiente de Data-Driven en que viven las empresas, constantemente se 
                                                producen nuevas tecnologías para hacer más fáciles o sencillos los procesos 
                                                en Data, por lo que se debe estar dispuesto y listo para aprender nuevas 
                                                tecnologías que nos ayuden a encontrar información valiosa para el negocio.
                                            </p>
                                            <h6>No te gusta el trabajo sucio</h6>
                                            <p>
                                                Dentro del mundo de Data Science, una gran parte del trabajo consiste en 
                                                borrar, editar, corregir distintos tipos de errores dentro de los datos, 
                                                para que estos sean los más precisos y veraces posibles.
                                            </p>
                                            <h6>No te gusta ayudar a las demás áreas del negocio</h6>
                                            <p>
                                                El rol de la Data Science debe ayudar a las demás áreas del negocio, proporcionándoles 
                                                información relevante para mejorar o verificar distintos procesos dentro de sus 
                                                funciones para la mejora, eficiencia y eficacia de la empresa.
                                            </p>
                                            <h6>No te gusta hacer que las cosas pasen</h6>
                                            <p>
                                                La Data Science debe comunicar e influenciar los comportamientos de las demás 
                                                áreas del negocio para obtener mejores resultados que afecten positivamente a la compañía.
                                            </p>
                                            <h6>Por qué aprender Data Science</h6>
                                            <p>
                                                Pon especial atención a esta parte para aprender acerca de las actividades 
                                                que más destacan en este mundo y que son tan vitales, como interesantes de aprender con maestría.
                                            </p>
                                            <h6>Te gusta tomar decisiones basadas en datos</h6>
                                            <p>
                                                Data-Driven, es la cultura que caracteriza a las empresas que basan sus decisiones en los datos.
                                            </p>
                                            <p>
                                                En estas empresas podrás encontrar grandes oportunidades para buscar y encontrar 
                                                información super interesante acerca del sector de negocio, y deberás 
                                                proporcionar posibles acciones a tomar para aprovechar dicha información.
                                            </p>
                                            <h6>Te gusta aplicar matemática y algoritmos</h6>
                                            <p>
                                                Los algoritmos y las matemáticas son una de las herramientas principales 
                                                para analizar los datos y exprimirles toda la información valiosa que 
                                                tengan, de tal modo que deberás aplicarlos.
                                            </p>
                                            <h6>Te gustaría trabajar en una empresa Data-Driven</h6>
                                            <p>
                                                A este tipo de empresas les encanta tener personas curiosas e interesadas en 
                                                sacarle todo el valor posible a los datos para crear productos y tomar decisiones.
                                            </p>
                                            <h6>Te gustaría crear productos fuertemente basados en inteligencia artificial</h6>
                                            <p>
                                                Una de las grandes funciones de la Data Science para buscar información de 
                                                valor para el negocio, es a través de la A.I.
                                            </p>
                                            <p>
                                                Esto se logra mediante el entrenamiento de modelos para que las A.I. encuentren 
                                                patrones inesperados dentro de los datos, que ayuden a mejorar los productos 
                                                existentes, o crear nuevos que satisfagan las necesidades de los clientes.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <button class="accordion-button collapsed" type="button" 
                                            data-bs-toggle="collapse" data-bs-target="#areas" aria-expanded="false" 
                                            aria-controls="areas">Áreas de aplicación de Data Science e inteligencia artificial
                                            <i class="ps-2"></i>
                                            <i class="arrow"></i>
                                        </button>
                                        <div class="collapse" id="areas">
                                            <p>
                                                Dentro de la inteligencia artificial y Data Science nos encontramos con muchas 
                                                áreas y ramas en las cuales se puede profundizar, como el Machine Learning, 
                                                el Deep Learning o la robótica, entre otros.
                                            </p>
                                            <h6>Ramas de la inteligencia artificial</h6>
                                            <p>
                                                Los distintos campos en que se divide la inteligencia artificial se pueden 
                                                apreciar de la siguiente manera, cada una con su propio encanto:
                                            </p>
                                            <ol>
                                                <li>
                                                    <strong>Machine Learning</strong>.
                                                </li>
                                                <li>
                                                    <strong>Deep Learning</strong>:
                                                    Sub rama del Machine Learning que a través de algoritmos basados en Redes
                                                    Neuronales permitirán imitar el comportamiento humano.
                                                    Dentro de ella se puede encontrar el aprendizaje supervizado, semi supervizado y no supervisado.
                                                </li>
                                                <li>
                                                    <strong>RPA (Robotic Process Automation)</strong>:
                                                    Software de automatización de procedos como software para obtención de leeds o para 
                                                    optimizar procesos productivos.
                                                </li>
                                                <li>
                                                    <strong>Visión artificial</strong>:
                                                    Analizar y procesar imágenes incluso en tiempo real a través de diversas camaras 
                                                    web por ejemplo.
                                                </li>
                                                <li>
                                                    <strong>Procesamiento del lenguaje natural</strong>
                                                    Com oasistentes virtuales en muchos idiomas.
                                                </li>
                                                <li>
                                                    <strong>Robótica</strong>:
                                                    Permite convinar el software con el hardware.
                                                </li>
                                            </ol>
                                            <h6>Áreas de Data Science</h6>
                                            <p>
                                                En este punto es muy importante resaltar que los siguientes ejemplos sobre la 
                                                aplicación de Data Science son solamente algunos de los muchos que existen.
                                            </p>
                                            <ol>
                                                <li>
                                                    <strong>Salud</strong>:
                                                    Podemos encontrar modelos que ayudan en la detectión temprana de enfermedades.
                                                    Optimizar el análisis de base de datos clínico.
                                                </li>
                                                <li>
                                                    <strong>Procesos de producción</strong>: Optimizacion de procesos productivos.
                                                </li>
                                                <li>
                                                    <strong>Procesos comerciales</strong>.
                                                </li>
                                                <li>
                                                    <strong>Redes sociales</strong>:
                                                    Determinar segmentos a los que dirigir el 
                                                    marketing o determinar el precio que tambien es llamado praicy.
                                                </li>
                                            </ol>
                                        </div>
                                    </li>
                                    <li>
                                        <button class="accordion-button collapsed" type="button" 
                                            data-bs-toggle="collapse" data-bs-target="#roles" aria-expanded="false" 
                                            aria-controls="roles">Roles en la industria: cómo funcionan los equipos de datos e inteligencia artificial
                                            <i class="ps-2"></i>
                                            <i class="arrow"></i>
                                        </button>
                                        <div class="collapse" id="roles">
                                            <p>
                                                Dentro de la industria de Data Science existen varios roles diferenciados, 
                                                pero esto no siempre fue de esta forma. En el pasado las empresas usaban el 
                                                término <i>Data Scientist</i> para la persona que se encargaba de todas las 
                                                tareas de datos en general.
                                            </p>
                                            <p>
                                                Con el tiempo se fueron creando nuevos términos para referirse a las personas 
                                                que se encargaban de ciertos procesos dentro del flujo o proceso de la Data.
                                            </p>
                                            <p>
                                                Además, dentro de una compañía no se puede iniciar a implementar modelos 
                                                de Machine Learning en conjunto con el producto sin antes tener una cultura 
                                                Data-Driven para poderlo hacer.
                                            </p>
                                            <p>
                                                De esta forma se origina la pirámide de las necesidades de Data Science por 
                                                Monica Rogati en Hackernoon basada en la pirámide de Maslow de las necesidades humanas.
                                            </p>
                                            <h6>
                                                Pirámide de necesidades de Data Science
                                            </h6>
                                            <p>
                                                La pirámide de necesidades de Data Science nos explica cuál es el orden de 
                                                las etapas que las empresas deben seguir para su desarrollo en la cultura Data-Driven.
                                            </p>
                                            <p>
                                                Esta nos define que dichas etapas tienen el siguiente orden:
                                            </p>
                                            <ol>
                                                <li>
                                                    Recolección de datos externos
                                                    <ul>
                                                        <li>Instrumentación.</li>
                                                        <li>Logging (creación de cuentas de los usuarios).</li>
                                                        <li>Sensores.</li>
                                                        <li>Datos externos.</li>
                                                        <li>Contenido generado por el usuario.</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    Movimiento y Almacenamiento
                                                    <ul>
                                                        <li>Datos confiables.</li>
                                                        <li>Flujo.</li>
                                                        <li>Infraestructura.</li>
                                                        <li>Pipelines.</li>
                                                        <li>ETL (Extract, Transform, Load).</li>
                                                        <li>Datos estructurados (es decir, que ya están organizados o clasificados por alguna estructura estándar).</li>
                                                        <li>Datos no estructurados (quiere decir que los datos están sueltos por ahí).</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    Exploración y transformación
                                                    <ul>
                                                        <li>Limpieza.</li>
                                                        <li>Detección de anomalías.</li>
                                                        <li>Preparación para su análisis.</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    Agregaciones y etiquetado
                                                    <ul>
                                                        <li>Estadísticas.</li>
                                                        <li>Métricas (son como las medidas de una actividad en concreto).</li>
                                                        <li>Segmentación.</li>
                                                        <li>Agregaciones.</li>
                                                        <li>Características.</li>
                                                        <li>Entrenamiento de datos.</li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    Aprendizaje y optimización
                                                    <ul>
                                                        <li>Pruebas A/B.</li>
                                                        <li>Experimentación.</li>
                                                        <li>Algoritmos simples ML.</li>
                                                        <li>Inteligencia artificial.</li>
                                                        <li>Deep Learning.</li>
                                                    </ul>
                                                </li>
                                            </ol>
                                            <h6>Roles en la industria Data Science</h6>
                                            <p>
                                                A las etapas anteriores se les añaden los roles que se van a encargar de hacer las 
                                                tareas y actividades correspondientes para que los datos sigan su curso. Algunos de 
                                                estos roles suelen tener un enfoque, ya sea con el negocio o con la ingeniería.
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>Data Engineer</strong>: Es la persona encargada de construir y mantener 
                                                    todo el ambiente sobre el que habitarán los datos. Por lo que se encuentra en la 
                                                    base de la pirámide y está más enfocada en la ingeniería.
                                                </li>
                                                <li>
                                                    <strong>Data Scientist</strong>: Este rol se encarga de ejecutar los métodos 
                                                    necesarios e indicados para analizar la etapa actual, como también hacer predicciones 
                                                    del futuro por medio de modelos de Machine Learning, con el fin de encontrar 
                                                    información valiosa para crear estrategias y productos que beneficien al consumidor.
                                                </li>
                                                <li>
                                                    <strong>Data Analyst</strong>: Se encarga de estar en una constante búsqueda de 
                                                    necesidades de información que tengan las distintas áreas del negocio, para poder 
                                                    investigarlas y dar respuesta que sea útil para la resolución de problemas y mejoramiento de procesos.
                                                    A diferencia del rol de Data Scientist, este solamente analiza el presente.
                                                </li>
                                                <li>
                                                    <strong>Research Scientist</strong>: Es un rol reciente en la industria, que trata 
                                                    sobre servir de traductor de los diferentes hallazgos que se encuentren en el equipo 
                                                    de data, como también a la hora de traducir las necesidades del negocio para el equipo de data.
                                                </li>
                                                <li>
                                                    <strong>Machine Learning Engineer</strong>: Se ocupa de evaluar y dar seguimiento a los 
                                                    modelos de Machine Learning planteados, el rol de Data Scientist, como también de 
                                                    comunicarse con el equipo de developers, para la correcta y eficiente implementación 
                                                    de los modelos y el producto.
                                                </li>
                                                <li>
                                                    <strong>Developer</strong>: El rol se encuentra dentro de un equipo de ingeniería 
                                                    dedicado a desarrollar el producto de la empresa.
                                                    Ya sea en el backend o en el frontend, debe hacer parte de la implementación de 
                                                    los modelos de Machine Learning con el producto.
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <button class="accordion-button collapsed" type="button" 
                                            data-bs-toggle="collapse" data-bs-target="#noData" aria-expanded="false" 
                                            aria-controls="noData">¿Qué hace una Data Analyst?
                                            <i class="ps-2"></i>
                                            <i class="arrow"></i>
                                        </button>
                                        <div class="collapse" id="noData">
                                            <p>
                                                El objetivo de la Data Analyst es analizar información de valor para ayudar a resolver 
                                                las necesidades de cada una de las áreas de una organización. La diferencia con la Data 
                                                Scientist es que nada más se ocupa de analizar el presente.
                                            </p>
                                            <p>
                                                Es uno de los roles ubicados en la mitad de la pirámide de necesidades de Data Science.
                                            </p>
                                            <p>
                                                <strong>¿Cómo lo hace?</strong>
                                                Este rol encuentra información de valor por medio de la extracción de datos de diversas 
                                                fuentes y su respectivo análisis, para poder presentarlos de forma sencilla a las demás 
                                                áreas de la empresa con tableros y gráficos.
                                            </p>
                                            <p>
                                                En el día a día de una Data Analyst veremos todas aquellas actividades que se deberán 
                                                hacer en el día a día de una persona que se dedique profesionalmente a Data Analyst.
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>Identificar necesidades de información</strong>
                                                    La Data Analyst debe estar en la búsqueda de necesidades de información de las demás 
                                                    áreas de negocio para poder hacer una correcta formulación que se pueda responder con datos.

                                                    Este es el rol que tiene mayor comunicación con el resto de las áreas de la empresa y es 
                                                    importante estar atento a que necesidades de información surgen en el día a día, además 
                                                    estas necesidades de información se deven presentar como preguntas o casos de negocio 
                                                    respondidas con datos
                                                </li>
                                                <li>
                                                    <strong>Extraer datos de fuentes</strong>
                                                    Para trabajar con los datos primero es necesario saber dónde están y obtenerlos. 
                                                    Estos por lo general se encontrarán en bases de datos, internet, redes sociales, etc.
                                                </li>
                                                <li>
                                                    <strong>Limpiar y organizar los datos</strong>
                                                    Los datos no van a venir organizados y listos para analizar. Antes se deben corregir, 
                                                    eliminar o editar los errores, espacios en blanco, columnas repetidas, cambiar de 
                                                    formato y demás características que ponga en peligro el buen análisis de los datos.
                                                </li>
                                                <li>
                                                    <strong>Analizar los datos</strong>
                                                    Por medio de la estadística descriptiva, herramientas matemáticas y tecnológicas 
                                                    para filtrar, organizar, recopilar los datos de tal forma que permita identificar 
                                                    patrones o estacionalidades que resulten valiosas para la toma de decisiones frente 
                                                    al problema o pregunta formulada al principio.
                                                </li>
                                                <li>
                                                    <strong>Comunicar los hallazgos</strong>
                                                    Una vez encontrados los hallazgos, gracias a las exploraciones y análisis de datos, 
                                                    es indispensable comunicarlos de forma sencilla y con la menor carga cognitiva posible, 
                                                    para la inmediata toma de decisiones y creación de productos si es posible.
                                                </li>
                                            </ul>
                                            <h6>Ciclo de trabajo de una Data Anlayst</h6>
                                            <p>
                                                Muy de la mano con las actividades del día a día de una Data Analyst, existe una 
                                                estructura que se debe mantener e iterar, es decir, repetir varias veces hasta obtener 
                                                el resultado esperado. Las cuales son:
                                            </p>
                                            <ul>
                                                <li>Pregunta o problema.</li>
                                                <li>Exploración y contraste de hipótesis.</li>
                                                <li>Recopilar información de valor.</li>
                                                <li>Crear visualizaciones de la información.</li>
                                                <li>Comunicar los hallazgos.</li>
                                            </ul>
                                            <h6>
                                                Roles relacionados
                                            </h6>
                                            <p>
                                                Además de los roles más conocidos dentro de la industria de la Data, existen algunos 
                                                que se especializan aún más, siendo indispensables en estructuras mucho más grandes y 
                                                desarrolladas de compañías Data-Driven.
                                            </p>
                                            <h6>Business Analyst</h6>
                                            <p>
                                                Es una persona que tiene un conocimiento más profundo del negocio y está para ayudar 
                                                a la Data Analyst a identificar las preguntas o casos de negocio.
                                            </p>
                                            <h6>Data Visualization Specialist</h6>
                                            <p>
                                                Es la persona experta en como diseñar y construir tableros para presentar hallazgos 
                                                a las demás personas, de manera fácil y sencilla.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <button class="accordion-button collapsed" type="button" 
                                            data-bs-toggle="collapse" data-bs-target="#noData" aria-expanded="false" 
                                            aria-controls="noData">titulo de boton
                                            <i class="ps-2"></i>
                                            <i class="arrow"></i>
                                        </button>
                                        <div class="collapse" id="noData">
                                            Contenido
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-8">
                        <ul class="border-1">
                            <li>
                                <button class="accordion-button collapsed" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#projects" aria-expanded="false" 
                                    aria-controls="projects">Proyectos - Ejercicios
                                    <i class="ps-2"></i>
                                    <i class="arrow"></i>
                                </button>
                                <ul class="border-2 collapse multi-collapse" id="projects">
                                    <li>A</li>
                                    <li>B</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-8">
                        <ul class="border-1">
                            <li>
                                <button class="accordion-button collapsed" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#certifications" aria-expanded="false" 
                                    aria-controls="certifications">Certificaciones
                                    <i class="ps-2"></i>
                                    <i class="arrow"></i>
                                </button>
                                <ul class="border-2 collapse multi-collapse" id="certifications">
                                    <li>A</li>
                                    <li>B</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-8">
                        <ul class="border-1">
                            <li>
                                <button class="accordion-button collapsed" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#related" aria-expanded="false" 
                                    aria-controls="related">Enlaces relacionados
                                    <i class="ps-2"></i>
                                    <i class="arrow"></i>
                                </button>
                                <ul class="border-2 collapse multi-collapse" id="related">
                                    <li>A</li>
                                    <li>B</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-8">
                        <ul class="border-1">
                            <li>
                                <button class="accordion-button collapsed" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#sources" aria-expanded="false" 
                                    aria-controls="sources">Fuentes
                                    <i class="ps-2"></i>
                                    <i class="arrow"></i>
                                </button>
                                <ul class="border-2 collapse multi-collapse" id="sources">
                                    <li>
                                        <a href="https://platzi.com/cursos/frontend-developer/" 
                                            target="_blank" rel="noopener noreferrer">
                                            Curso de Frontend Developer | Platzi
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
import { useState } from "react";

const GLOSSARY = [
  {
    id: 1, code: "G", name: "Matriz de Claridad Fractal", color: "#00FFB2",
    axes: {
      y: {
        label: "EJE Y — Niveles Fractales",
        description: "La escala de organización desde la unidad mínima hasta la estructura madre.",
        terms: [
          { term: "Nivel 0: Átomo", def: "La unidad más pequeña e indivisible de tu sistema. Es el dato crudo, el archivo base, el prompt específico, la semilla antes de ser plantada. Sin él nada existe, pero solo él no produce nada. Es el punto de partida de toda reconstrucción." },
          { term: "Nivel 1: Molécula", def: "La combinación de átomos que produce una tarea repetible con sentido propio. Es el proceso individual que puede documentarse en un SOP (Procedimiento Operativo Estándar). Si puedes enseñarle a alguien más a hacerlo sin que estés presente, es una molécula." },
          { term: "Nivel 2: Organismo", def: "El conjunto de moléculas que interactúan entre sí de forma autónoma. Es el workflow o flujo de trabajo donde múltiples procesos se comunican —vía API o vía humano— sin necesitar intervención constante del fundador. Aquí vive la interoperabilidad." },
          { term: "Nivel 3: Sistema", def: "Una unidad de negocio completa con identidad propia: puede generar ingresos, tiene su propia métrica de rentabilidad y puede crecer sin comprometer a las demás verticales. Es el equivalente a un departamento autónomo o una vertical funcional." },
          { term: "Nivel 4: Galaxia", def: "La estructura madre que contiene y da propósito a todos los sistemas. Es el Holding, la marca paraguas, la visión de legado. No opera directamente — gobierna. Define los valores, el criterio y la arquitectura que trasciende a cualquier individuo." },
        ]
      },
      x: {
        label: "EJE X — Columnas de Gobernanza",
        description: "Las dimensiones que se analizan en cada nivel fractal.",
        terms: [
          { term: "Componente de Recurso", def: "¿De qué está hecho este nivel? El recurso concreto —humano, técnico, financiero o intelectual— que existe en este nivel fractal. Identificarlo permite saber qué tienes antes de decidir qué construir." },
          { term: "Indicador de Gobernanza", def: "La métrica que te dice si este nivel está funcionando correctamente. No es un resultado final —es una señal de salud. Si el indicador está bien, el nivel está gobernado. Si falla, aquí está la ruptura." },
          { term: "Output Esperado (Salida)", def: "El entregable concreto que debe producir este nivel cuando opera bien. Es la prueba de que el nivel existe y funciona. Si no puedes nombrar el output, el nivel no está construido —solo está imaginado." },
        ]
      }
    }
  },
  {
    id: 2, code: "R", name: "Meta-Matriz Renasci", color: "#FF6B35",
    axes: {
      y: {
        label: "EJE Y — Fricción del Mercado",
        description: "La resistencia que el entorno ejerce sobre tu capacidad de avanzar.",
        terms: [
          { term: "Alta Fricción", def: "El mercado resiste fuertemente tu entrada. La gente no te conoce, no te cree o ya tiene un proveedor establecido. El costo de adquisición es alto, las objeciones son intensas y el ciclo de venta es largo. No es una señal de que tu producto es malo —es una señal de que el camino correcto es diferente al que siguen los demás." },
          { term: "Media Fricción", def: "El mercado tiene conciencia del problema pero aún no tiene claridad sobre la solución ideal. Hay competencia, pero no hay un líder indiscutible. Es el territorio de la autoridad: quien más enseñe, más lidera. La especialización y el contenido de alto valor son las palancas naturales aquí." },
          { term: "Baja Fricción", def: "La demanda ya existe y está activa. La gente está buscando una solución ahora mismo. El obstáculo no es convencer —es ser encontrado. En este territorio, la velocidad y la visibilidad son más valiosas que la diferenciación profunda." },
        ]
      },
      x: {
        label: "EJE X — Capacidad de Ejecución",
        description: "Los recursos reales disponibles para ejecutar hoy, no los ideales.",
        terms: [
          { term: "Baja Capacidad (Recursos Limitados)", def: "Poco capital, equipo pequeño o en construcción, tiempo restringido. No es una debilidad permanente —es un estado actual que define el tipo de camino disponible. Con baja capacidad, la inteligencia estratégica vale más que el dinero. La hiperspecialización y el movimiento quirúrgico son las ventajas reales." },
          { term: "Alta Capacidad (Capital / Equipo)", def: "Acceso a capital, equipo consolidado, infraestructura operativa disponible. La alta capacidad no garantiza el éxito —solo amplifica la dirección que ya tomas. Mal dirigida, destruye más rápido. Bien dirigida, permite escalar con velocidad y dominar mercados que la baja capacidad no puede tocar de frente." },
          { term: "Caminos (Paths)", def: "Las rutas de implementación que resultan del cruce entre fricción y capacidad. No son opciones teóricas —son decisiones que emergen de la realidad presente. Guerrilla, Especialista, Agilidad, Dominancia, Expansión e Institución son los seis arquetipos que cubren cualquier escenario de negocio." },
        ]
      }
    }
  },
  {
    id: 3, code: "MDS", name: "Matriz de Desacoplamiento Sintético", color: "#FFD700",
    axes: {
      y: {
        label: "EJE Y — Capas de Activo",
        description: "Los niveles de separación del capital según su función temporal.",
        terms: [
          { term: "Capa 1: Operativa", def: "El dinero que trabaja hoy. Cubre nómina, costos fijos y compromisos inmediatos. Debe ser líquido, accesible y en la moneda donde operan tus obligaciones. Su función no es crecer —es garantizar que todo lo demás pueda funcionar mañana." },
          { term: "Capa 2: Reserva", def: "El capital que protege el valor acumulado de la erosión cambiaria y la inflación. Vive en dólares, stablecoins o cuentas offshore. No se toca para operación. Su función es preservar —mantener el poder adquisitivo de lo que ya ganaste mientras el tiempo trabaja." },
          { term: "Capa 3: Arbitraje", def: "La capa que captura diferenciales activamente: diferencias de tasas, spreads cambiarios, movimientos predecibles de mercado. Usa instrumentos como NDFs (Non-Delivery Forwards) u opciones. Requiere criterio técnico. Su función es generar rendimiento sobre el capital ya protegido." },
          { term: "Capa 4: Equity", def: "El capital que construye patrimonio permanente e independiente del trabajo activo. Acciones, bienes raíces, propiedad intelectual revalorizada. Su función no es liquidez —es legado. Es el activo que existirá cuando ya no estés operando personalmente." },
        ]
      },
      x: {
        label: "EJE X — Dimensiones de Gobernanza",
        description: "Las variables que definen cómo se gestiona cada capa.",
        terms: [
          { term: "Instrumento de Control", def: "La herramienta o vehículo específico que se usa para gestionar el activo en esa capa. COP para operación local, USD/stablecoins para reserva, derivados para arbitraje, equity para patrimonio. El instrumento correcto en la capa equivocada destruye valor." },
          { term: "Objetivo de Gobernanza", def: "El propósito único de esa capa de capital. Cada capa tiene solo un objetivo —mezclarlos es el error más costoso en tesorería. La capa operativa no tiene que crecer; la capa de reserva no tiene que ser líquida de inmediato; la capa de equity no tiene que estar disponible mañana." },
          { term: "Riesgo Mitigado", def: "El riesgo específico que esa capa neutraliza. La operativa neutraliza el riesgo de liquidez. La reserva neutraliza inflación y riesgo país. El arbitraje neutraliza la volatilidad cambiaria. El equity neutraliza la obsolescencia del modelo de negocio." },
        ]
      }
    }
  },
  {
    id: 4, code: "CM", name: "Matriz de Cargas vs. Modelos", color: "#A78BFA",
    axes: {
      y: {
        label: "EJE Y — Modelos de Entrega",
        description: "Las arquitecturas fundamentales mediante las cuales se genera y entrega valor.",
        terms: [
          { term: "TaaS (Talent as a Service)", def: "Modelo donde el valor se entrega mediante talento especializado bajo demanda. El costo principal es humano y el punto de equilibrio depende de la utilización del equipo. La palanca crítica es el Burn Rate: si el talento no está generando ingresos el 65% del tiempo, el modelo sangra." },
          { term: "Consultoría High-Ticket", def: "Modelo donde el valor es intelectual, la entrega es personalizada y el precio es alto por diseño. El costo es bajo porque el principal recurso es la mente y la autoridad del consultor. El punto de equilibrio requiere pocos cierres pero de alto valor. La palanca es la percepción de unicidad —si te comparan por precio, saliste del modelo." },
          { term: "SaaS (Productizado)", def: "Modelo donde el valor está codificado en un producto que se vende repetidamente sin incrementar proporcionalmente el costo. Alto costo inicial de desarrollo, costo marginal casi cero. El punto de equilibrio es volumen. La palanca es la automatización total: si requiere intervención humana por cliente, el modelo no es SaaS real." },
        ]
      },
      x: {
        label: "EJE X — Variables del Modelo",
        description: "Las dimensiones financieras y estratégicas que definen la viabilidad de cada modelo.",
        terms: [
          { term: "Estructura de Costos", def: "La composición del gasto que hace viable o inviable el modelo. Saber qué tipo de costo domina (humano, técnico, fijo, variable) determina dónde aplicar presión para mejorar el margen. El error más común es aplicar la estrategia de costos de un modelo a otro." },
          { term: "Punto de Quiebre (Break-even)", def: "El nivel mínimo de operación donde los ingresos igualan los costos. Por debajo de este punto el modelo consume capital. Por encima, genera margen. Conocerlo con precisión elimina la ansiedad operativa y convierte la gestión en una decisión de variables, no de intuición." },
          { term: "Estrategia de Gobernanza", def: "La palanca principal que se activa para que el modelo escale sin perder margen. No es una lista de tácticas —es la acción maestra que, si se ejecuta bien, mejora todas las demás métricas simultáneamente." },
        ]
      }
    }
  },
  {
    id: 5, code: "VA", name: "Matriz de Veto y Aprendizaje (Fractalis)", color: "#F43F5E",
    axes: {
      y: {
        label: "EJE Y — Dimensiones de Riesgo",
        description: "Las cuatro áreas donde una decisión incorrecta puede destruir el sistema.",
        terms: [
          { term: "Humano / Energía", def: "El riesgo de agotar a las personas que hacen posible el ecosistema. Cuando una decisión requiere que alguien dé más de lo que un sistema puede sostener, el riesgo no es financiero —es existencial. Los sistemas que dependen de héroes colapsan cuando el héroe se cae." },
          { term: "Capital / Runway", def: "El riesgo de quemar dinero sin generar retorno medible. El Runway es el tiempo de vida del proyecto contado en capital disponible. Una decisión que incrementa el Burn Rate sin una métrica de ROI clara en 90 días no es inversión —es consumo disfrazado." },
          { term: "Estratégico / IP", def: "El riesgo de perder la singularidad que hace al negocio irreemplazable. Cuando una decisión te convierte en un commodity —cuando la única forma en que alguien te elige es porque eres más barato— la Propiedad Intelectual que construiste dejó de protegerte." },
          { term: "Ético / Legado", def: "El riesgo de comprometer los principios que dan sentido a todo lo construido. Una decisión puede ser rentable a corto plazo y devastadora a largo plazo si traiciona el criterio fundacional. El legado no es lo que dejas —es lo que resiste cuando ya no estás para defenderlo." },
        ]
      },
      x: {
        label: "EJE X — Mecanismos del Sistema",
        description: "Los dos procesos que activa el sistema ante una situación de riesgo.",
        terms: [
          { term: "Criterio de Veto (NO Go)", def: "La condición específica y concreta que activa automáticamente el rechazo de una decisión. No es una opinión —es un protocolo. Su valor está en que elimina la negociación interna cuando la urgencia presiona. Si la condición se cumple, la respuesta ya estaba tomada antes de que surgiera la presión." },
          { term: "Protocolo de Aprendizaje", def: "La acción que el sistema ejecuta después de un veto para asegurarse de que esa situación no vuelva a ocurrir. El veto solo detiene. El protocolo de aprendizaje construye. Sin él, el sistema veta la misma decisión indefinidamente sin mejorar la arquitectura que la generó." },
        ]
      }
    }
  },
  {
    id: 6, code: "DS", name: "Distribución Radical de Capital (Splendor)", color: "#34D399",
    axes: {
      y: {
        label: "EJE Y — Destinos del Capital",
        description: "Las funciones específicas a las que se asigna cada porcentaje del ingreso.",
        terms: [
          { term: "Pago Neto al Talento (28%)", def: "La mayor inversión del modelo porque es donde vive la Propiedad Intelectual real. Cuando el talento recibe lo que merece, retiene su mejor versión. Cuando recibe lo mínimo, optimiza su energía para otro lugar. El 28% no es generosidad —es retención estratégica del activo más crítico." },
          { term: "Parafiscales / Legal (12%)", def: "El costo de operar sin riesgo. Incluye contribuciones legales, seguros, cumplimiento regulatorio y estructura legal internacional. Ignorarlo ahorra dinero hoy y destruye el negocio en el momento más inconveniente. Es el escudo invisible que nadie nota hasta que lo necesita." },
          { term: "Closer de Élite (7%)", def: "El incentivo directo a quien convierte el pipeline en ingresos reales. No es un salario fijo —es un porcentaje que alinea el interés del cerrador con el resultado del negocio. Sin este incentivo variable, el cierre de contratos de alto valor se convierte en una tarea más, no en una prioridad." },
          { term: "Campaign Manager (7%)", def: "El recurso que garantiza que la ejecución táctica ocurra con consistencia, sin depender del fundador. Gestiona el flujo de trabajo, las comunicaciones y los entregables operativos. Es el puente entre la estrategia y la ejecución diaria." },
          { term: "Scalable Manager (4%)", def: "La función que vigila que la arquitectura de escalabilidad se aplique y no se abandone bajo presión operativa. Su rol no es resolver problemas del día —es asegurarse de que el sistema crezca sin perder su estructura. Es el guardián del Renasci." },
          { term: "Vertical Manager (4%)", def: "El responsable de que cada unidad de negocio dentro del Holding opere con autonomía sin desalinearse del propósito central. Gobierna su vertical como si fuera su empresa, reportando a la estructura madre sin necesitar supervisión constante." },
          { term: "Reserva / Estructura (38%)", def: "El porcentaje más grande porque es el que garantiza la supervivencia y el crecimiento del sistema completo. Incluye I+D, reservas en USD (Capa 2 del MDS) y el margen que permite que la empresa madre siga existiendo aunque una vertical tenga un mes difícil. Es el fondo de soberanía del ecosistema." },
        ]
      },
      x: {
        label: "EJE X — Función de Gobernanza",
        description: "El propósito estratégico que justifica cada asignación.",
        terms: [
          { term: "Función de Gobernanza", def: "El resultado específico que la asignación de ese porcentaje produce en el sistema. No es solo 'a dónde va el dinero' —es 'qué garantiza que el sistema siga siendo viable, singular y justo'. Cada función de gobernanza protege una dimensión diferente del ecosistema." },
        ]
      }
    }
  },
  {
    id: 7, code: "PS", name: "Matriz de Pinza Sistémica", color: "#60A5FA",
    axes: {
      y: {
        label: "EJE Y — Fases de Intervención",
        description: "Las etapas secuenciales de una intervención sistémica en tiempo real.",
        terms: [
          { term: "1. Escaneo", def: "La fase de diagnóstico sin acción. El objetivo es ver con claridad qué está pasando —tanto en la operación como en las personas que la sostienen— antes de intervenir. Actuar sin escanear convierte la solución en otro problema." },
          { term: "2. La Pinza", def: "La intervención simultánea en la operación (hardware) y en el liderazgo (software). Como una pinza quirúrgica, presiona en dos puntos al mismo tiempo para estabilizar el sistema sin romperlo. No resuelve todo —detiene la hemorragia." },
          { term: "3. Estabilización", def: "La fase donde lo aprendido en la crisis se convierte en sistema permanente. La documentación y la delegación formal garantizan que la próxima presión no genere la misma crisis. Si la estabilización no ocurre, la pinza fue solo primeros auxilios." },
        ]
      },
      x: {
        label: "EJE X — Dimensiones de la Intervención",
        description: "Los dos planos simultáneos sobre los que actúa la pinza.",
        terms: [
          { term: "Hardware (Operación)", def: "El plano técnico, estructural y de proceso del sistema. Incluye flujos de trabajo, decisiones pendientes, cuellos de botella operativos. Es lo que se puede medir, rediseñar y documentar. La Decision Latency —el tiempo que tarda una decisión en ejecutarse— es el síntoma más revelador de un hardware roto." },
          { term: "Software (Humano / Criterio)", def: "El plano humano, emocional y cultural del sistema. Incluye el nivel de energía del liderazgo, la cultura de toma de decisiones y el grado de dependencia jerárquica. El Burnout del liderazgo es el síntoma más peligroso de un software dañado —no aparece en los estados financieros hasta que es demasiado tarde." },
          { term: "Scalability Sprints", def: "Intervenciones cortas e intensas diseñadas para avanzar rápidamente en la reconstrucción operativa sin detener la entrega de valor a clientes. Son sprints de rediseño, no de producción." },
          { term: "Micro-Buffers", def: "Espacios deliberadamente protegidos de tiempo y energía para el liderazgo que está en Burnout. No son vacaciones —son dosis mínimas de recuperación que permiten seguir tomando decisiones con criterio mientras el sistema se repara." },
        ]
      }
    }
  },
  {
    id: 8, code: "MC", name: "Matriz de Integración de Hallazgos (Meta-Core)", color: "#F59E0B",
    axes: {
      y: {
        label: "EJE Y — Origen del Hallazgo",
        description: "Las fuentes de información que el sistema monitorea para aprender continuamente.",
        terms: [
          { term: "Análisis de Mercado", def: "Señales externas que el mercado emite sobre cambios en la demanda, comportamiento del consumidor, movimientos de competencia o nuevas oportunidades. El mercado siempre habla —el sistema que escucha sin ego es el que sobrevive a los ciclos." },
          { term: "Fricción en Ventas", def: "Los puntos donde el proceso de conversión se traba, ralentiza o pierde. No indica que el producto es malo —indica que la comunicación, el canal o el criterio de cierre necesitan ajuste. La fricción en ventas es el feedback más honesto del mercado." },
          { term: "Falla de Proceso", def: "Un error, retraso o inconsistencia en la operación interna que no debería haber ocurrido con un sistema bien diseñado. Su valor no está en el daño que causó —está en lo que revela sobre el nivel fractal donde el sistema está roto." },
          { term: "Crecimiento Excesivo", def: "La condición donde la demanda supera la capacidad de entrega del sistema actual. Paradójicamente es el riesgo más subestimado: crecer más rápido de lo que el sistema puede absorber destruye la calidad, el equipo y la reputación simultáneamente." },
        ]
      },
      x: {
        label: "EJE X — Respuesta del Sistema",
        description: "Las acciones que el sistema ejecuta para integrar cada tipo de hallazgo.",
        terms: [
          { term: "Matriz Relacionada", def: "La herramienta específica del ecosistema que es más adecuada para procesar ese tipo de hallazgo. No todos los hallazgos se resuelven igual —cada uno activa una parte diferente del sistema de gobernanza." },
          { term: "Acción de Integración", def: "El movimiento concreto que convierte el hallazgo en un cambio real en el sistema. No es análisis —es ajuste. Su propósito es que el ecosistema salga de cada ciclo de aprendizaje siendo ligeramente mejor que antes." },
        ]
      }
    }
  },
  {
    id: 9, code: "SG", name: "Matriz de Comunicación Estratégica (Singularity)", color: "#E879F9",
    axes: {
      y: {
        label: "EJE Y — Niveles de Negociación",
        description: "Las tres fases secuenciales de una negociación de alto valor.",
        terms: [
          { term: "Táctico", def: "El nivel donde el objetivo es comprender. No se propone, no se vende, no se cierra. Se escucha con técnica para extraer la frecuencia real —lo que la contraparte quiere en el fondo, más allá de lo que declara. El error más caro de los negociadores es pasar al nivel estratégico sin haber completado el táctico." },
          { term: "Estratégico", def: "El nivel donde el objetivo es co-diseñar. La contraparte ya fue escuchada —ahora se le guía a construir la solución junto a ti mediante preguntas calibradas. Cuando la solución la diseña la contraparte, deja de verse como tu propuesta y se convierte en su decisión. El cierre ya ocurrió aquí, aunque nadie lo nombre así." },
          { term: "De Cierre", def: "El nivel donde el objetivo es colapsar la distancia entre el precio que cobras y el valor que la contraparte percibe. No se trata de convencer —se trata de hacer que la brecha entre el costo de no actuar y el costo de tu solución sea tan evidente que el cierre sea la única opción lógica." },
        ]
      },
      x: {
        label: "EJE X — Herramientas y Objetivos",
        description: "Los instrumentos de comunicación y los propósitos específicos de cada nivel.",
        terms: [
          { term: "Espejo (Mirroring)", def: "La técnica de repetir las últimas 2-3 palabras o términos clave de lo que dijo la contraparte, creando un espacio de resonancia que invita a profundizar sin hacer preguntas directas. El espejo desactiva la guardia y activa la apertura." },
          { term: "Etiquetado (Labeling)", def: "Nombrar en voz alta la emoción o el estado que percibes en la contraparte con frases como 'Parece que...' o 'Siento que...'. El etiquetado correcto genera la experiencia de ser profundamente comprendido —el estado emocional más favorable para tomar decisiones." },
          { term: "Preguntas Calibradas", def: "Preguntas abiertas que comienzan con 'Cómo' o 'Qué', diseñadas para que la contraparte piense activamente y co-construya la solución. Nunca comienzan con 'Por qué' —esa palabra activa defensividad. Son las preguntas que no tienen respuesta de sí o no." },
          { term: "Matriz de ROI Percibido", def: "La herramienta que cuantifica —en el lenguaje y los términos de la contraparte— el costo de no actuar versus el costo de tu solución. No es una hoja de cálculo — es una arquitectura de conversación que hace que el valor sea más vívido que el precio." },
          { term: "Frecuencia (Intención Real)", def: "Lo que la contraparte realmente quiere más allá de lo que pide. Pueden pedir velocidad pero necesitar confianza. Pueden pedir precio bajo pero necesitar certeza de resultado. La frecuencia real raramente se declara en la primera conversación — se extrae mediante el nivel táctico." },
        ]
      }
    }
  },
  {
    id: 10, code: "§", name: "Matriz de Resolución Sistémica (§ Formula)", color: "#FB7185",
    axes: {
      y: {
        label: "EJE Y — Variables de la Fórmula",
        description: "Los cuatro factores que determinan la resolución de cualquier problema complejo.",
        terms: [
          { term: "(t) Tiempo", def: "La variable más subestimada y más impactante. No es cuánto tiempo tienes —es cuánto tiempo tarde una decisión en ejecutarse desde que se toma. La Decision Latency es la forma en que el tiempo se convierte en fricción. Cada hora de retraso en una decisión tiene un costo de oportunidad que rara vez se contabiliza." },
          { term: "(E) Energía", def: "La capacidad instalada real — humana, técnica y financiera— disponible para resolver el problema ahora. No es la energía ideal sino la energía presente. El cuello de botella de energía es el punto donde más esfuerzo entra y menos resultado sale. Identificarlo es el primer acto de inteligencia sistémica." },
          { term: "(K) Conocimiento", def: "La Propiedad Intelectual disponible y aplicable al problema. La brecha de ejecución ocurre cuando existe el conocimiento pero no está accesible, documentado o asignado al momento correcto. El conocimiento que no está en el sistema no existe para el sistema." },
          { term: "(R) Resultado", def: "El impacto medible que la solución produce en el negocio (EBITDA) y en el propósito (Legado). No es el output de la tarea —es la consecuencia de haberla ejecutado bien. El ROI Estratégico se calcula aquí: ¿valió la energía y el tiempo invertidos?" },
        ]
      },
      x: {
        label: "EJE X — Dimensiones de Análisis",
        description: "Las tres perspectivas desde las que se examina cada variable.",
        terms: [
          { term: "Factor de Influencia", def: "El elemento específico de esa variable que está afectando el resultado del sistema. Es el diagnóstico: ¿qué exactamente dentro del tiempo, la energía, el conocimiento o el resultado está generando la fricción?" },
          { term: "Punto de Apalancamiento", def: "El lugar preciso donde una intervención pequeña produce el mayor impacto posible. Es la palanca de Arquímedes del sistema —no el punto donde más se trabaja, sino donde menos esfuerzo genera más cambio." },
          { term: "Acción de Gobernanza", def: "La decisión concreta y ejecutable que se toma para mover el punto de apalancamiento. No es un plan —es una instrucción. Específica, responsable y con un tiempo claro de ejecución." },
        ]
      }
    }
  },
  {
    id: 11, code: "DiDs", name: "Matriz de Densidad y Disponibilidad (Di/Ds)", color: "#2DD4BF",
    axes: {
      y: {
        label: "EJE Y — Zonas de Mercado",
        description: "Los cuatro estados de comportamiento de cualquier mercado o contexto de recursos.",
        terms: [
          { term: "Zona de Acumulación", def: "El mercado está lleno de actividad y órdenes pero se mueve lentamente. Es el territorio donde el capital inteligente entra con paciencia —fraccionado, sin alterar el equilibrio. Es la zona donde se construyen posiciones grandes sin que el mercado lo note." },
          { term: "Zona de Expansión", def: "El mercado se mueve con claridad y velocidad en una dirección. El momentum es visible y confirmado. Es la zona donde la acción directa y decidida captura el mayor valor. La duda aquí es el mayor costo." },
          { term: "Zona de Distribución", def: "El mercado está en su punto más alto de actividad pero las señales indican que el movimiento está cediendo. Es la zona donde se toman ganancias de forma progresiva — no todo de golpe — para no perder si hay más recorrido y no quedarse atrapado si revierte." },
          { term: "Zona de Vacío", def: "El mercado tiene poca actividad pero los movimientos son extremos e impredecibles. Gaps de precio, iliquidez, errática. Es la zona donde la preservación de capital es la única estrategia inteligente. No operar es una posición activa, no una omisión." },
        ]
      },
      x: {
        label: "EJE X — Variables de Análisis",
        description: "Las tres dimensiones que determinan en qué zona se encuentra el mercado.",
        terms: [
          { term: "Densidad (Di)", def: "La cantidad de actividad, contratos, órdenes u oportunidades presentes en el mercado en un momento dado. Alta densidad significa mucha gente participando activamente. Baja densidad significa que el mercado está vacío o esperando. La densidad sola no dice en qué zona estás —necesitas cruzarla con la disponibilidad." },
          { term: "Disponibilidad (Ds)", def: "La velocidad y facilidad con que el mercado permite entrar, salir o moverse. Alta disponibilidad significa que puedes ejecutar rápido sin distorsionar el precio. Baja disponibilidad significa que cualquier movimiento tuyo mueve el mercado entero —y eso puede ser una ventaja o una trampa." },
          { term: "Estrategia de Salida", def: "El protocolo específico que se activa en cada zona para proteger o capturar valor. No es una preferencia —es un criterio definido antes de entrar. Quien define su estrategia de salida antes de ejecutar tiene gobernanza. Quien la improvisa cuando ya está adentro, tiene un problema." },
        ]
      }
    }
  },
  {
    id: 12, code: "CD", name: "Matriz de Criterio de Delegación (Consigliere)", color: "#818CF8",
    axes: {
      y: {
        label: "EJE Y — Niveles de Autonomía",
        description: "Las cuatro escalas de independencia con las que opera un recurso humano o de IA dentro del sistema.",
        terms: [
          { term: "Nivel 1: Ejecutor", def: "Opera con instrucciones explícitas y sin variación autorizada. Su valor está en la ejecución consistente, no en la creatividad. El error permitido es cero porque sus tareas son mecánicas y su impacto es inmediato y visible. Requiere supervisión diaria." },
          { term: "Nivel 2: Gestor", def: "Maneja flujos de trabajo y pequeños equipos con cierto margen de micro-decisión. Puede resolver problemas operativos dentro de parámetros definidos. Sus errores son recuperables en menos de 24 horas. Requiere métricas semanales, no supervisión constante." },
          { term: "Nivel 3: Arquitecto", def: "Diseña soluciones, toma decisiones presupuestarias y gestiona la complejidad sistémica. Entiende cómo su trabajo afecta a otras partes del sistema. Su horizonte temporal es mensual. Sus errores tienen impacto presupuestario pero no son estructurales." },
          { term: "Nivel 4: Socio / Líder", def: "Toma decisiones de expansión, transformación y dirección estratégica. Habla en nombre del ecosistema. Está alineado con el legado —no solo con los números del trimestre. Su rendición de cuentas es ante la junta de gobernanza, no ante un manager." },
        ]
      },
      x: {
        label: "EJE X — Dimensiones de Gobernanza del Talento",
        description: "Los criterios que definen qué puede y qué no puede hacer cada nivel.",
        terms: [
          { term: "Requisito de IP", def: "El nivel de comprensión de la Propiedad Intelectual del ecosistema que debe tener este rol para operar con autonomía responsable. No se trata de acceso a información —se trata de criterio para usarla bien. A mayor autonomía, mayor requisito de IP." },
          { term: "Sistema de Control", def: "La frecuencia y el mecanismo mediante el cual el sistema verifica que este nivel está operando correctamente. No es desconfianza —es diseño. Un sistema de control bien calibrado libera al fundador de supervisar y garantiza que la autonomía no se convierta en riesgo." },
          { term: "Riesgo Permitido", def: "El tipo y magnitud de error que el sistema acepta como parte del funcionamiento normal de este nivel. A mayor autonomía, mayor riesgo aceptado. Definirlo a priori evita que cada error se convierta en una crisis y que cada crisis se convierta en una restricción de autonomía." },
        ]
      }
    }
  },
  {
    id: 13, code: "EL", name: "Protocolo de Latencia de Comunicación", color: "#FCD34D",
    axes: {
      y: {
        label: "EJE Y — Tipos de Información",
        description: "Las cuatro categorías de mensajes según su urgencia e impacto.",
        terms: [
          { term: "Crítico / Bloqueante", def: "Información que, si no se procesa en minutos, detiene la operación, pierde un cliente o genera un daño irreversible. No puede esperar. Requiere canal sincrónico —voz o presencia. Su latencia máxima aceptable es inmediata." },
          { term: "Operativo / Proceso", def: "Información necesaria para que el flujo de trabajo continúe sin interrupciones. No es urgente en segundos pero sí en horas. Si supera las 4 horas sin respuesta, bloquea a otras personas. Vive en herramientas de gestión como ClickUp o Asana." },
          { term: "Informativo", def: "Contexto, actualizaciones y aprendizajes que el equipo necesita conocer para estar alineado pero que no requieren acción inmediata. Su ausencia genera desorientación progresiva —nadie sabe hacia dónde va el barco. Puede esperar hasta 24 horas sin daño." },
          { term: "Estratégico / Idea", def: "Pensamientos de alto nivel, oportunidades de largo plazo, ideas de nuevas verticales o cambios de dirección. No necesitan respuesta rápida —necesitan espacio de reflexión profunda. Forzarlos en canales rápidos los mata antes de ser evaluados." },
        ]
      },
      x: {
        label: "EJE X — Variables del Protocolo",
        description: "Los tres parámetros que gobiernan cada tipo de comunicación.",
        terms: [
          { term: "Canal de Gobernanza", def: "La plataforma o medio específico asignado a ese tipo de información. El canal incorrecto genera ruido: ideas estratégicas en Slack se pierden entre operativos; urgencias en email llegan tarde. El canal correcto no es preferencia —es diseño." },
          { term: "Tiempo de Respuesta", def: "El tiempo máximo aceptable antes de que la ausencia de respuesta genere daño. Definirlo elimina la ansiedad de expectativas implícitas —la fuente más frecuente de conflictos en equipos de alto rendimiento." },
          { term: "Objetivo del Canal", def: "El resultado específico que ese canal produce en el sistema cuando se usa correctamente. No es 'para qué sirve el canal' —es qué garantiza cuando se usa con disciplina." },
        ]
      }
    }
  },
  {
    id: 14, code: "MT", name: "Matriz de Matching de Talento (Splendor)", color: "#4ADE80",
    axes: {
      y: {
        label: "EJE Y — Dimensiones de Ajuste",
        description: "Las cuatro áreas donde se evalúa la compatibilidad real del talento.",
        terms: [
          { term: "Alineación de IP", def: "El grado en que la persona domina —y puede mejorar— las herramientas, métodos y sistemas propios del ecosistema. No es suficiente saber usar las herramientas: el talento de alto nivel propone mejoras al sistema mismo. La alineación de IP es lo que convierte a un contratado en un colaborador generativo." },
          { term: "Resonancia de Valores", def: "La compatibilidad entre los principios que mueven a la persona y los del ecosistema. No se contrata —se detecta. No se puede enseñar con un onboarding. Un talento que no resuena con los valores entregará el mínimo aceptable. Uno que resuena entregará más de lo que se le pide." },
          { term: "Latencia de Respuesta", def: "La velocidad y consistencia con que la persona reacciona ante compromisos, urgencias y situaciones imprevistas. No mide cuán rápido responde un mensaje —mide qué tan anticipatorio es su criterio. El talento de nivel arquitecto avisa el problema antes de que ocurra." },
          { term: "Costo vs. Valor", def: "La relación entre lo que se paga y lo que el sistema recibe a cambio, medido no solo en tiempo sino en impacto real. Un talento caro que genera ROI claro es barato. Un talento barato que genera ruido o retraso es el costo más alto del sistema." },
        ]
      },
      x: {
        label: "EJE X — Niveles y Protocolo",
        description: "Las dos escalas de operación y el mecanismo de validación.",
        terms: [
          { term: "Nivel: Ejecutor Técnico", def: "El perfil que entrega resultados dentro de parámetros definidos con excelencia técnica. No necesita entender el sistema completo —necesita dominar su parte con precisión. Es el talento que hace que el sistema funcione hoy." },
          { term: "Nivel: Arquitecto de Solución", def: "El perfil que entiende el sistema lo suficientemente bien para mejorarlo. No solo ejecuta —propone, previene y expande. Es el talento que hace que el sistema funcione mejor mañana que hoy." },
          { term: "Protocolo de Validación", def: "El método específico para comprobar que la persona realmente opera en el nivel que dice operar, bajo condiciones que se parecen al trabajo real. Una entrevista no valida talento —una simulación sí. El protocolo convierte el juicio subjetivo en criterio reproducible." },
        ]
      }
    }
  },
  {
    id: 15, code: "GO", name: "Matriz de Gobernanza Offshore (JJ Company)", color: "#38BDF8",
    axes: {
      y: {
        label: "EJE Y — Jurisdicciones",
        description: "Las cuatro capas geográficas y legales del ecosistema financiero.",
        terms: [
          { term: "Local (COP)", def: "El territorio de las obligaciones inmediatas y el cumplimiento doméstico. Aquí viven la nómina, los proveedores locales y los gastos operativos del día a día. No es el lugar del patrimonio —es el lugar de la operación. Su orden garantiza que el ecosistema no tenga riesgo legal en su base de operación." },
          { term: "Offshore (USD / Delaware)", def: "El territorio de la propiedad intelectual, la facturación global y la protección de activos. Delaware (EE.UU.) es uno de los marcos legales más robustos del mundo para holding de IP. Esta entidad no opera directamente —recibe, protege y distribuye de acuerdo con la estrategia de capital del ecosistema." },
          { term: "Bancaria (Stripe / Wise / Mercury)", def: "La infraestructura de flujo de dinero rápido entre geografías. Stripe para cobros de clientes, Wise para transferencias internacionales, Mercury para banca de startups en USD. No son bancos tradicionales —son herramientas de agilidad financiera que eliminan la fricción de los movimientos de capital." },
          { term: "Cripto / Estable", def: "La capa de reserva soberana —independiente de gobiernos y bancos centrales. Las stablecoins (USDC, USDT) permiten preservar valor en USD sin tener cuenta bancaria en EE.UU. Útil como reserva de emergencia, para arbitraje de cambio o para operar en contextos donde la banca tradicional es lenta o inaccesible." },
        ]
      },
      x: {
        label: "EJE X — Funciones de la Estructura",
        description: "Las dimensiones que definen el rol de cada jurisdicción.",
        terms: [
          { term: "Tipo de Recurso", def: "El activo o flujo que reside o transita por esa jurisdicción: nómina, IP, pagos de clientes o reservas. Saber qué tipo de recurso vive donde es el primer paso del diseño — mover el recurso incorrecto a la jurisdicción incorrecta tiene costo fiscal, legal y operativo." },
          { term: "Función de la Entidad", def: "El rol específico que esa entidad juega en el ecosistema completo. No todas las entidades hacen lo mismo —cada una fue diseñada para una función que ninguna otra puede cumplir mejor en esa jurisdicción." },
          { term: "Beneficio de Gobernanza", def: "La ventaja concreta —fiscal, legal, operativa o de velocidad— que esa jurisdicción provee y que justifica su existencia en el ecosistema. Si no hay un beneficio claro, la entidad es complejidad sin propósito." },
        ]
      }
    }
  },
  {
    id: 16, code: "CB", name: "Cisnes Negros — Black Swan Protocol", color: "#C084FC",
    axes: {
      y: {
        label: "EJE Y — Fases de la Crisis",
        description: "Los tres momentos secuenciales de cualquier evento imprevisto de alto impacto.",
        terms: [
          { term: "Impacto Inicial", def: "El primer momento de choque —cuando nadie sabe exactamente qué pasó pero todos sienten que algo se rompió. Las emociones son intensas y la información es incompleta. Es el momento donde la respuesta instintiva genera el mayor daño. El protocolo aquí es escuchar antes de proponer cualquier solución." },
          { term: "Escalamiento", def: "La fase donde la crisis se intensifica si no ha sido contenida. Las emociones suben, las posiciones se endurecen y la lógica pierde terreno frente al miedo. El silencio táctico —no hablar cuando la contraparte necesita ser escuchada— es la herramienta más contraintuitiva y más poderosa de esta fase." },
          { term: "Resolución", def: "La fase donde las emociones han bajado lo suficiente para construir un camino de salida. No es el momento de ganar —es el momento de diseñar juntos una solución que ambas partes puedan sostener. La resolución que humilla a la contraparte garantiza la próxima crisis." },
        ]
      },
      x: {
        label: "EJE X — Herramientas de la Negociación de Crisis",
        description: "Los tres instrumentos secuenciales del protocolo Singularity para eventos extremos.",
        terms: [
          { term: "Acción de Mirroring (Espejo)", def: "La técnica específica de espejo adaptada a cada fase. En impacto inicial: repetir los términos del problema. En escalamiento: silencio táctico. En resolución: resumir la posición completa de la contraparte. El espejo en crisis no refleja palabras —refleja estados emocionales." },
          { term: "Etiquetado del Riesgo (Labeling)", def: "Nombrar con precisión lo que la contraparte está sintiendo, sin juzgarlo. 'Parece que hay un miedo a perder el control' convierte una emoción difusa en algo concreto que puede ser abordado. El etiquetado correcto baja la temperatura de la conversación más que cualquier argumento." },
          { term: "Pregunta Calibrada de Salida", def: "La pregunta estratégica que abre el camino hacia la resolución sin imponer una dirección. Comienza con Cómo o Qué, obliga a pensar hacia adelante y convierte a la contraparte en arquitecta de la salida. Es la última herramienta —solo funciona cuando las dos anteriores ya hicieron su trabajo." },
        ]
      }
    }
  },
  {
    id: 17, code: "AX", name: "El Espejo de Claridad (Axis)", color: "#F97316",
    axes: {
      y: {
        label: "EJE Y — Pilares de la Empresa",
        description: "Las cuatro dimensiones fundamentales que sostienen cualquier organización.",
        terms: [
          { term: "Estructura", def: "El armazón operativo de la empresa: procesos, flujos de trabajo, sistemas de documentación y jerarquía de decisiones. Una estructura sana funciona sin que el fundador esté presente. Una estructura rota solo funciona cuando hay un héroe aguantando el peso —y ese heroísmo es una fragilidad sistémica." },
          { term: "Estrategia", def: "La dirección clara y sostenida hacia donde se mueve la empresa. Una estrategia real es aquella que sobrevive al menos 90 días sin ser reemplazada por una urgencia nueva. Cuando la estrategia cambia cada 15 días, no hay estrategia —hay entropía con buenas intenciones." },
          { term: "Talento", def: "El capital humano que ejecuta la estrategia y mantiene la estructura. El problema del talento rara vez es técnico —suele ser cultural. Cuando nadie toma decisiones sin pedir permiso, el problema no es el equipo: es la arquitectura de poder que los inmoviliza." },
          { term: "Crecimiento", def: "La capacidad de la empresa de generar más valor, ingresos o impacto de forma sostenible. El error más frecuente es confundir el problema de crecimiento con el problema de ventas. Vender más de lo que el sistema puede entregar no es crecimiento —es aceleración del colapso." },
        ]
      },
      x: {
        label: "EJE X — Niveles de Realidad",
        description: "Los tres planos de verdad que la sesión Axis revela y confronta.",
        terms: [
          { term: "Realidad Percibida (Lo que dicen)", def: "La narrativa oficial que la empresa construye sobre sí misma —lo que el CEO declara en una reunión, en un pitch o al presentar el negocio. No es necesariamente mentira —es la historia que la empresa necesita creer para seguir operando. Axis la toma como punto de partida, nunca como verdad." },
          { term: "Realidad Sistémica (Lo que es)", def: "Lo que el sistema revela cuando se observan los datos, los comportamientos y las consecuencias reales. No es opinión del consultor —es evidencia. La brecha entre lo percibido y lo sistémico es exactamente el tamaño del problema que la empresa tiene que resolver." },
          { term: "La 'Verdad Axis' (El Hallazgo)", def: "El nombre que se le da a la brecha. No es una crítica —es un diagnóstico. Fragilidad, Entropía, Bloqueo, Ilusión son los nombres que convierten una conversación difícil en una palanca de transformación. Nombrar la verdad con precisión es el primer acto de cambio real." },
        ]
      }
    }
  },
  {
    id: 18, code: "TP", name: "Triangulación de Pain Points — UX Transversal", color: "#06B6D4",
    axes: {
      y: {
        label: "EJE Y — Dimensiones del Dolor",
        description: "Las cuatro categorías de fricción que el mercado impone a sus usuarios.",
        terms: [
          { term: "Psicológica", def: "La ansiedad, incertidumbre o pérdida de control que siente el cliente en su relación con las soluciones actuales del mercado. Es el dolor que no siempre se menciona primero pero es el más determinante en la decisión de compra. Un cliente que confía plenamente paga más y abandona menos." },
          { term: "Operativa", def: "La fricción que genera el proceso mismo de usar o implementar la solución: lentitud, burocracia, pasos innecesarios, dependencia de personas específicas. El dolor operativo se mide en horas perdidas y energía gastada en tareas que no generan valor." },
          { term: "Financiera", def: "La opacidad de costos, la falta de ROI visible o el modelo de cobro que beneficia al proveedor y no al resultado del cliente. El dolor financiero no siempre es el precio en sí —es la incertidumbre sobre si lo que pago se justifica con lo que recibo." },
          { term: "Sistémica", def: "La frustración acumulada de haber probado múltiples soluciones parciales que funcionan por separado pero no escalan ni se integran. El dolor sistémico es el más profundo —el cliente ya no cree que exista una solución que lo resuelva todo. El mercado que atiende este dolor tiene el menor nivel de competencia real." },
        ]
      },
      x: {
        label: "EJE X — Capas de Análisis del Mercado",
        description: "Las tres perspectivas que permiten identificar el Océano Azul.",
        terms: [
          { term: "UX Tradicional (Fricción)", def: "Lo que el mercado actual le hace soportar al cliente. No es lo que el proveedor cree que ofrece —es la experiencia real del usuario con las soluciones disponibles. Mapearlo sin filtro revela exactamente qué está dispuesto el mercado a pagar para no seguir soportando." },
          { term: "UX Transversal (La Brecha)", def: "La necesidad real, no declarada, que las soluciones actuales no están cubriendo —y que el cliente tampoco está pidiendo explícitamente porque no sabe que es posible satisfacerla. La brecha transversal es el espacio donde vive el Océano Azul. No se descubre preguntándole al cliente qué quiere —se descubre observando qué soporta." },
          { term: "Océano Azul (La Solución Axis)", def: "La oferta que resuelve la brecha transversal de una manera que ningún competidor puede replicar fácilmente porque requiere una reestructuración profunda de la IP, los procesos y los valores. No es un feature nuevo —es una arquitectura diferente de entrega de valor. El Océano Azul no tiene precio de referencia porque no tiene comparación directa." },
        ]
      }
    }
  },
  {
    id: 19, code: "FT", name: "Framework de Transcendencia — § Resolución", color: "#A3E635",
    axes: {
      y: {
        label: "EJE Y — Las 10 Etapas del Ciclo",
        description: "El algoritmo universal de mejora que puede aplicar cualquier sistema humano.",
        terms: [
          { term: "1. Circunstancia Actual", def: "El punto de partida real, no el deseado. Es la verdad desnuda del estado presente sin adornos, sin justificaciones y sin el filtro del ego. Sin este primer paso honesto, todo lo que viene después construye sobre una base falsa. La honestidad radical con el entorno es el único punto de partida que produce cambio real." },
          { term: "2. Definición del Desafío", def: "Nombrar al monstruo con precisión. Un problema sin nombre es un problema sin solución —es solo una sensación de malestar que parece inmovible. El acto de nombrar —con un sustantivo concreto: hambre, deuda, caos, miedo, dependencia— convierte lo difuso en algo que puede ser abordado." },
          { term: "3. Selección de Matriz", def: "La elección de la herramienta correcta para el desafío correcto. No todas las matrices resuelven todos los problemas —cada una fue diseñada para una categoría específica de fricción. La sabiduría del sistema está en saber cuál activar antes de actuar." },
          { term: "4. Resultado Esperado", def: "El Bienestar Mínimo Viable — no el resultado ideal sino el resultado más pequeño que ya constituiría un avance real. Definirlo en términos concretos convierte la esperanza en hipótesis, y la hipótesis es lo que permite aprender cuando los resultados difieren de lo esperado." },
          { term: "5. Prueba (Ejecución)", def: "El salto al vacío. La acción sin certeza de resultado. Sembrar la semilla, firmar el contrato, lanzar el producto, hacer la llamada. La prueba es el único momento donde el sistema aprende algo que no puede aprender de ninguna otra forma. Sin ejecución, todo lo anterior es filosofía." },
          { term: "6. Documentar", def: "El acto de escribir qué pasó exactamente — lo que funcionó y lo que no, con la mayor fidelidad posible al proceso real. Lo que no se documenta no existe para el sistema —desaparece con la memoria de quien lo vivió y obliga a repetir el ciclo de aprendizaje desde cero." },
          { term: "7. Revisar", def: "Comparar el resultado obtenido con el resultado esperado usando las 4 variables de la § Formula. No es juzgar —es discernir. La revisión con criterio convierte la experiencia en información estructurada que el sistema puede usar." },
          { term: "8. Aprender", def: "Extraer la pepita de oro — el insight específico que este ciclo produjo y que no se sabía antes. Puede ser un error que revela una suposición falsa o un éxito que revela un mecanismo que funciona. El aprendizaje sin extracción explícita se disuelve en la experiencia general sin dejar rastro útil." },
          { term: "9. Mejorar", def: "El ajuste de 1% que hace el próximo ciclo ligeramente más eficiente, más humano o más justo que el anterior. La mejora no busca la perfección —busca el progreso sistemático. Un sistema que mejora 1% consistentemente supera exponencialmente a uno que busca grandes saltos." },
          { term: "10. Iterar", def: "Volver a empezar desde una plataforma más alta. No desde el mismo punto de partida —desde un nivel de comprensión, capacidad y recursos que el ciclo anterior construyó. La iteración es el mecanismo por el cual el sistema produce legado: cada ciclo deja algo permanente que el siguiente usa." },
        ]
      },
      x: {
        label: "EJE X — Dimensiones de Cada Etapa",
        description: "Los dos planos desde los que se activa cada paso del ciclo.",
        terms: [
          { term: "Acción Humana y Técnica", def: "Lo que se hace concretamente en esa etapa —el verbo ejecutable que convierte la etapa en realidad. No es una actitud ni un estado mental —es una acción específica con un resultado verificable. La dimensión técnica garantiza que el ciclo produzca algo tangible en cada paso." },
          { term: "Propósito de Vida", def: "El por qué más profundo que da sentido a esa etapa más allá de los resultados operativos. Es la conexión entre el acto técnico y el impacto en la persona, la comunidad o el legado. Sin propósito, la técnica se agota. Sin técnica, el propósito no escala." },
          { term: "Capitalismo Consciente", def: "El principio que atraviesa todo el framework: la rentabilidad y el bienestar no son opuestos —son consecuencias del mismo sistema bien diseñado. Un sistema que genera prosperidad sin bienestar consume el recurso que lo alimenta. Un sistema que genera bienestar sin rentabilidad no sobrevive para seguir generando bienestar. La síntesis es la arquitectura del propósito." },
        ]
      }
    }
  },
];

export default function Glosario() {
  const [activeMatrix, setActiveMatrix] = useState(0);
  const [activeAxis, setActiveAxis] = useState("y");
  const [search, setSearch] = useState("");
  const [expandedTerm, setExpandedTerm] = useState(null);

  const matrix = GLOSSARY[activeMatrix];
  const axisData = matrix.axes[activeAxis];

  const filtered = search.trim().length > 1
    ? GLOSSARY.flatMap(m => ["y","x"].flatMap(ax =>
        (m.axes[ax]?.terms || []).map(t => ({ ...t, matrixName: m.name, matrixColor: m.color, code: m.code, axis: ax === "y" ? m.axes.y.label : m.axes.x.label }))
      )).filter(t => t.term.toLowerCase().includes(search.toLowerCase()) || t.def.toLowerCase().includes(search.toLowerCase()))
    : null;

  const totalTerms = GLOSSARY.reduce((acc, m) => acc + (m.axes.y?.terms?.length || 0) + (m.axes.x?.terms?.length || 0), 0);

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#09090F", minHeight: "100vh", color: "#E0E0D8", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ background: "#07070D", borderBottom: "1px solid #1A1A28", padding: "16px 20px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#444", fontFamily: "monospace", marginBottom: "4px" }}>
          ECOSISTEMA DE MATRICES · GLOSARIO COMPLETO
        </div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <h1 style={{ margin: 0, fontSize: "20px", color: "#F0F0E8", letterSpacing: "0.3px" }}>
            Glosario de Ejes X & Y — 19 Matrices
          </h1>
          <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#555" }}>
            {totalTerms} términos definidos
          </div>
        </div>

        {/* Search */}
        <div style={{ marginTop: "12px", position: "relative" }}>
          <input
            value={search}
            onChange={e => { setSearch(e.target.value); setExpandedTerm(null); }}
            placeholder="Busca cualquier término en todas las matrices..."
            style={{
              width: "100%", boxSizing: "border-box",
              background: "#0D0D1A", border: "1px solid #222",
              borderRadius: "6px", color: "#E0E0D8", padding: "10px 14px",
              fontSize: "13px", fontFamily: "inherit", outline: "none",
            }}
          />
          {search && (
            <button onClick={() => setSearch("")} style={{
              position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)",
              background: "transparent", border: "none", color: "#555", cursor: "pointer", fontSize: "16px",
            }}>×</button>
          )}
        </div>
      </div>

      {/* Search Results */}
      {filtered && (
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#555", marginBottom: "12px", letterSpacing: "1px" }}>
            {filtered.length} resultado{filtered.length !== 1 ? "s" : ""} para "{search}"
          </div>
          {filtered.length === 0 && (
            <div style={{ color: "#444", fontSize: "14px", textAlign: "center", marginTop: "40px" }}>
              No se encontraron términos con esa búsqueda.
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {filtered.map((t, i) => (
              <div key={i} style={{
                background: "#0D0D18", border: `1px solid ${t.matrixColor}25`,
                borderRadius: "6px", padding: "14px 16px",
              }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "6px" }}>
                  <span style={{ fontFamily: "monospace", fontSize: "9px", color: t.matrixColor, background: `${t.matrixColor}15`, padding: "2px 7px", borderRadius: "3px", letterSpacing: "1px" }}>
                    {t.code}
                  </span>
                  <span style={{ fontSize: "10px", color: "#444", fontFamily: "monospace" }}>{t.axis.split("—")[0].trim()}</span>
                </div>
                <div style={{ fontSize: "14px", fontWeight: "bold", color: t.matrixColor, marginBottom: "6px" }}>{t.term}</div>
                <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.6 }}>{t.def}</div>
                <div style={{ fontSize: "10px", color: "#333", marginTop: "8px", fontFamily: "monospace" }}>{t.matrixName}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Layout (when not searching) */}
      {!filtered && (
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          {/* Matrix sidebar */}
          <div style={{ width: "200px", flexShrink: 0, borderRight: "1px solid #1A1A28", overflowY: "auto", background: "#08080E" }}>
            {GLOSSARY.map((m, i) => (
              <button key={m.id} onClick={() => { setActiveMatrix(i); setActiveAxis("y"); setExpandedTerm(null); }} style={{
                display: "flex", alignItems: "center", gap: "8px",
                width: "100%", padding: "10px 14px", textAlign: "left",
                background: i === activeMatrix ? `${m.color}10` : "transparent",
                border: "none", borderBottom: "1px solid #111",
                borderLeft: i === activeMatrix ? `2px solid ${m.color}` : "2px solid transparent",
                cursor: "pointer", transition: "all 0.2s",
              }}>
                <span style={{
                  fontFamily: "monospace", fontSize: "9px", letterSpacing: "0.5px",
                  color: i === activeMatrix ? m.color : "#444", flexShrink: 0,
                  minWidth: "32px",
                }}>{m.code}</span>
                <span style={{
                  fontSize: "11px", color: i === activeMatrix ? "#CCC" : "#555",
                  lineHeight: 1.3,
                  overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                }}>{m.name}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px" }}>
            {/* Matrix header */}
            <div style={{ marginBottom: "20px" }}>
              <span style={{
                fontFamily: "monospace", fontSize: "9px", color: matrix.color,
                letterSpacing: "2px", background: `${matrix.color}12`,
                border: `1px solid ${matrix.color}30`, padding: "3px 8px", borderRadius: "3px",
              }}>MATRIZ {matrix.code}</span>
              <h2 style={{ margin: "8px 0 4px", fontSize: "18px", color: "#F0F0E8" }}>{matrix.name}</h2>
              <div style={{ width: "40px", height: "2px", background: matrix.color, borderRadius: "1px" }} />
            </div>

            {/* Axis toggle */}
            <div style={{ display: "flex", gap: "6px", marginBottom: "20px" }}>
              {["y", "x"].map(ax => (
                <button key={ax} onClick={() => { setActiveAxis(ax); setExpandedTerm(null); }} style={{
                  padding: "7px 16px",
                  background: activeAxis === ax ? `${matrix.color}18` : "transparent",
                  border: activeAxis === ax ? `1px solid ${matrix.color}60` : "1px solid #1E1E2E",
                  borderRadius: "5px", cursor: "pointer",
                  color: activeAxis === ax ? matrix.color : "#555",
                  fontFamily: "monospace", fontSize: "11px", letterSpacing: "1px",
                  transition: "all 0.2s",
                }}>
                  EJE {ax.toUpperCase()} · {ax === "y" ? axisData.label.split("—")[1]?.trim().split(" ").slice(0, 3).join(" ") : matrix.axes.x?.label.split("—")[1]?.trim().split(" ").slice(0, 3).join(" ")}
                </button>
              ))}
            </div>

            {/* Axis block */}
            {axisData && (
              <div>
                <div style={{ marginBottom: "16px" }}>
                  <div style={{ fontSize: "12px", fontFamily: "monospace", color: matrix.color, letterSpacing: "1px", marginBottom: "4px" }}>
                    {axisData.label}
                  </div>
                  <div style={{ fontSize: "12px", color: "#555", fontStyle: "italic" }}>{axisData.description}</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {axisData.terms.map((t, i) => {
                    const key = `${matrix.code}-${activeAxis}-${i}`;
                    const isExp = expandedTerm === key;
                    return (
                      <div key={i} onClick={() => setExpandedTerm(isExp ? null : key)} style={{
                        background: isExp ? `${matrix.color}0A` : "#0D0D18",
                        border: isExp ? `1px solid ${matrix.color}40` : "1px solid #141420",
                        borderRadius: "6px", padding: "14px 16px",
                        cursor: "pointer", transition: "all 0.2s",
                      }}
                        onMouseEnter={e => { if (!isExp) e.currentTarget.style.background = "#10101C"; }}
                        onMouseLeave={e => { if (!isExp) e.currentTarget.style.background = "#0D0D18"; }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: "14px", fontWeight: "bold", color: isExp ? matrix.color : "#CCC", marginBottom: isExp ? "10px" : "0", transition: "all 0.2s" }}>
                              <span style={{ color: matrix.color, fontSize: "10px", marginRight: "8px", fontFamily: "monospace" }}>
                                {activeAxis.toUpperCase()}{i + 1}
                              </span>
                              {t.term}
                            </div>
                            {isExp && (
                              <div style={{ fontSize: "13px", color: "#999", lineHeight: 1.7, paddingLeft: "22px" }}>
                                {t.def}
                              </div>
                            )}
                            {!isExp && (
                              <div style={{ fontSize: "11px", color: "#444", marginTop: "4px", paddingLeft: "22px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                {t.def.substring(0, 80)}...
                              </div>
                            )}
                          </div>
                          <span style={{ color: "#333", fontSize: "14px", flexShrink: 0, marginTop: "2px" }}>
                            {isExp ? "▲" : "▼"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

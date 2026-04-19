import { useState, useEffect, useRef } from "react";

// q = question per cell [col0, col1, col2, col3...]
// Universal: McKinsey CXO = reads it as strategy. Child in Africa = reads it as survival. Both find their answer.

const MATRICES = [
  {
    id:1, code:"G", name:"Matriz de Claridad Fractal", subtitle:"Matriz G",
    tagline:"No hay caos. Solo fracturas en el nivel equivocado.",
    impact:"Convierte el desorden en una dirección quirúrgica de intervención.",
    color:"#00FFB2",
    columns:["Nivel Fractal","Componente de Recurso","Indicador de Gobernanza","Output Esperado"],
    rows:[
      {
        cells:["Nivel 0: Átomo","Datos crudos, archivos, prompts específicos.","Integridad y Accesibilidad","Repositorio centralizado"],
        q:["¿Cómo llamas al elemento más pequeño e indivisible de lo que construyes? (Una semilla, un dato, una palabra, un ladrillo)","¿Cuál es el ingrediente o recurso más básico sin el cual nada empieza? Nómbralo de forma concreta.","¿Cómo sabes que ese elemento básico está completo y donde debe estar cuando lo necesitas?","¿Dónde debería vivir ese elemento para que cualquiera lo encuentre cuando lo necesite, incluso si tú no estás?"]
      },
      {
        cells:["Nivel 1: Molécula","Procesos individuales, tareas de una sola vía.","Repetibilidad y Estándar","SOP (Procedimiento Estándar)"],
        q:["¿Cómo llamas a la primera combinación de elementos básicos que produce algo útil?","¿Cuál es la tarea más simple que repites con esos elementos? ¿La que haces aunque no tengas ganas?","¿Cómo sabes que otra persona puede hacer esa tarea exactamente igual sin que tú estés presente?","¿Qué instrucción o guía necesitas para que esa tarea sobreviva sin depender de tu memoria?"]
      },
      {
        cells:["Nivel 2: Organismo","Flujos de trabajo interconectados (Workflows).","Interoperabilidad (API/Human)","Ecosistema Operativo"],
        q:["¿Cómo describes el conjunto de tareas que se encadenan para producir algo completo de inicio a fin?","¿Cuáles son los pasos conectados que llevan algo desde que empieza hasta que llega a quien lo necesita?","¿Cómo sabes que las partes se comunican bien entre sí? ¿Qué se pierde o se atasca cuando algo falla?","¿Qué nombre le das al entorno donde todos esos pasos coexisten y se apoyan sin depender de una sola persona?"]
      },
      {
        cells:["Nivel 3: Sistema","Unidades de Negocio completas.","Rentabilidad y Escalabilidad","Modelo de Ingresos"],
        q:["¿Cómo llamas al conjunto completo de personas, procesos y recursos que juntos producen valor real?","¿Qué parte de tu operación podría funcionar de forma casi autónoma si le das las reglas correctas?","¿Cómo mides si esa unidad genera más de lo que consume, y si puede crecer sin romperse?","¿De qué forma esa unidad convierte su trabajo en algo que sustenta su propia existencia (dinero, cosecha, impacto)?"]
      },
      {
        cells:["Nivel 4: Galaxia","Holding / JJ Company.","Visión y Legado","Arquitectura de Marca Madre"],
        q:["¿Cómo llamas a la entidad más grande que contiene y da sentido a todo lo demás que construyes?","¿Qué agrupa y protege todas tus unidades bajo un mismo propósito que va más allá de ti?","¿Cómo sabes que lo que construyes hoy seguirá existiendo y teniendo sentido en 20 años, sin ti?","¿Qué nombre, símbolo o estructura representa el legado completo de todo lo que estás construyendo?"]
      },
    ],
    useCase:"Cuando sientes caos a pesar de tener procesos. Localiza en qué nivel fractal está la ruptura.",
  },
  {
    id:2, code:"R", name:"Meta-Matriz Renasci", subtitle:"Generación de Caminos",
    tagline:"Tu camino no depende de lo que tienes, sino de dónde está la fricción.",
    impact:"Elimina la parálisis por análisis generando rutas basadas en realidad, no en aspiraciones.",
    color:"#FF6B35",
    columns:["Fricción / Capacidad","Baja Capacidad (Recursos Limitados)","Alta Capacidad (Capital/Equipo)"],
    rows:[
      {
        cells:["Alta Fricción","Camino de Guerrilla: Nicho extremo, mensajes hiperpersonalizados.","Camino de Dominancia: Inversión masiva, adquisición de competencia."],
        q:["¿Qué nivel de resistencia o dificultad encuentras en tu entorno? ¿Mucha, media o poca?","Si tienes poco y el entorno resiste fuerte, ¿cuál es el movimiento más pequeño y preciso que puedes hacer hoy para avanzar sin ser aplastado?","Si tienes mucho y el entorno resiste fuerte, ¿qué recurso usarías para cambiar las reglas del juego de forma decisiva?"]
      },
      {
        cells:["Media Fricción","Camino de Especialista: Autoridad basada en Thought Leadership.","Camino de Expansión: Nuevos mercados mediante alianzas."],
        q:["¿En qué punto del camino sientes que hay obstáculos pero también oportunidades visibles?","Si tienes poco y el entorno tiene fricción media, ¿en qué puedes volverse tan bueno que te busquen sin que tengas que perseguirlos?","Si tienes recursos y la fricción es media, ¿con quién podrías unirte para abrir puertas que solos no pueden abrir?"]
      },
      {
        cells:["Baja Fricción","Camino de Agilidad: MVP rápido, iteración semanal, captura de demanda.","Camino de Institución: Estándares de industria, gobernanza a largo plazo."],
        q:["¿Cuándo sientes que el entorno está abierto, que la gente ya quiere lo que ofreces?","Si tienes poco y el entorno está abierto, ¿cuál es la versión más simple de tu solución que puedes poner a prueba esta semana?","Si tienes mucho y el entorno está abierto, ¿cómo te conviertes en el estándar que todos van a seguir?"]
      },
    ],
    useCase:"Diagnóstico inicial: ¿Qué Path debemos tomar hoy con los recursos que tenemos?",
  },
  {
    id:3, code:"MDS", name:"Matriz de Desacoplamiento Sintético", subtitle:"Activo-Divisa",
    tagline:"El capital no tiene fronteras. Pero sí tiene capas.",
    impact:"Protege el patrimonio ante devaluaciones y transforma la tesorería en activo estratégico.",
    color:"#FFD700",
    columns:["Capa de Activo","Instrumento de Control","Objetivo de Gobernanza","Riesgo Mitigado"],
    rows:[
      {
        cells:["Capa 1: Operativa","Pesos (COP) / Cashflow local","Cubrir costos fijos y nómina","Liquidez diaria"],
        q:["¿Qué nombre le das a los recursos que usas para las necesidades diarias e inmediatas?","¿Con qué herramienta, moneda o método cubres tus gastos del día a día?","¿Cuál es el gasto que no puedes dejar de pagar sin que todo se detenga?","¿Qué pasa si mañana no tienes acceso a ese recurso diario? ¿Qué se detiene primero?"]
      },
      {
        cells:["Capa 2: Reserva","USD / Stablecoins / Cuentas Offshore","Preservación de valor frente a devaluación","Inflación y Riesgo País"],
        q:["¿Dónde guardas lo que produces una vez cubres lo del día a día?","¿En qué activo o lugar conviertes tus excedentes para que no pierdan valor con el tiempo?","¿Qué quieres que esa reserva haga exactamente: crecer, protegerse o simplemente no desaparecer?","¿Qué riesgo externo (inflación, devaluación, crisis) podría destruir esa reserva si no la proteges?"]
      },
      {
        cells:["Capa 3: Arbitraje","NDFs / Opciones","Capturar diferenciales de tasas de interés","Volatilidad del tipo de cambio"],
        q:["¿Cómo llamas a la estrategia de aprovechar diferencias de precio o condición entre dos mercados o momentos?","¿Qué instrumento o método usas para sacar ventaja de esas diferencias sin apostar todo?","¿Qué diferencia específica quieres capturar: de precio, de tiempo, de tasa, de oportunidad?","¿Qué movimiento del mercado podría convertir tu oportunidad en pérdida si no tienes protección?"]
      },
      {
        cells:["Capa 4: Equity","Acciones / Bienes Raíces / IP Revalorizada","Crecimiento de patrimonio a largo plazo","Obsolescencia del modelo de negocio"],
        q:["¿Cómo llamas a lo que posees y que crece de valor con el tiempo aunque no lo uses activamente?","¿En qué tipo de activo puts tu capital cuando quieres que trabaje solo durante años?","¿Qué resultado quieres ver en ese activo en 10 o 20 años?","¿Qué podría hacer que ese activo pierda su valor por completo aunque hoy valga mucho?"]
      },
    ],
    useCase:"Cuando generas excedentes en moneda débil y necesitas mover capital a estructura global sin perder valor.",
  },
  {
    id:4, code:"CM", name:"Matriz de Cargas vs. Modelos", subtitle:"Gobernanza de Margen",
    tagline:"El modelo equivocado destruye el margen antes de cerrar tu primer contrato.",
    impact:"Alinea la estructura de costos con el modelo de entrega para que cada vertical sea rentable por diseño.",
    color:"#A78BFA",
    columns:["Modelo","Estructura de Costos","Punto de Quiebre (Break-even)","Estrategia de Gobernanza"],
    rows:[
      {
        cells:["TaaS (Talent as a Service)","Alto en capital humano (Splendor).","65% de utilización del equipo.","Optimización de Burn Rate y reclutamiento preventivo."],
        q:["¿Cómo describes este modelo de entrega en una oración? ¿Qué vendes exactamente?","¿En qué o en quién gastas más dinero para poder operar este modelo?","¿Cuándo exactamente este modelo empieza a generar más de lo que consume?","¿Cuál es el movimiento principal para que este modelo no se destruya a sí mismo mientras crece?"]
      },
      {
        cells:["Consultoría High-Ticket","Bajo costo, alto margen intelectual.","1-2 cierres mensuales.","Enfoque en Closing y autoridad de marca."],
        q:["¿Cómo describes este modelo en una oración? ¿Qué hace que sea diferente al anterior?","¿Cuál es tu costo más grande aquí? ¿Dinero, tiempo, energía mental?","¿Cuántos clientes o ventas necesitas al mes para que este modelo sea sostenible?","¿Qué debes hacer muy bien para que este modelo funcione y no se convierta en freelancing agotador?"]
      },
      {
        cells:["SaaS (Productizado)","Alto desarrollo inicial, bajo costo marginal.","Volumen de suscripciones (Escala).","Automatización total y soporte asincrónico."],
        q:["¿Cómo describes este modelo? ¿Qué se vende una vez y sirve para muchos?","¿Dónde va la mayor inversión al inicio, y qué pasa con los costos una vez que crece?","¿Cuántos usuarios o suscriptores necesitas para que este modelo pague sus propios costos?","¿Qué proceso debes automatizar primero para que este modelo no requiera tu presencia constante?"]
      },
    ],
    useCase:"Decidir si un nuevo proyecto se lanza bajo Splendor o como unidad independiente en JJ Company.",
  },
  {
    id:5, code:"VA", name:"Matriz de Veto y Aprendizaje", subtitle:"Fractalis",
    tagline:"El NO estratégico vale más que mil síes reactivos.",
    impact:"Blindaje contra decisiones urgentes que destruyen el legado. El sistema aprende de cada veto.",
    color:"#F43F5E",
    columns:["Dimensión de Riesgo","Criterio de Veto (NO Go)","Protocolo de Aprendizaje"],
    rows:[
      {
        cells:["Humano / Energía","Si la decisión implica Heroísmo (dependencia total de una persona).","Identificar la falta de sistema y documentar el proceso."],
        q:["¿Qué área de riesgo tiene que ver con las personas y su energía disponible?","¿Cuándo dices NO porque una decisión pone todo el peso sobre una sola persona? ¿Cómo reconoces esa señal?","¿Qué haces inmediatamente después de vetar esa decisión para que el error no se repita?"]
      },
      {
        cells:["Capital / Runway","Si el Burn Rate aumenta sin métrica de ROI claro en 90 días.","Ajuste inmediato de la Matriz de Cargas Fiscales."],
        q:["¿Qué área de riesgo tiene que ver con el dinero y el tiempo que te queda para operar?","¿Cuándo dices NO porque el gasto crece sin que puedas ver cuándo va a retornar? ¿Cuál es tu límite?","¿Qué ajustas inmediatamente después de vetar ese gasto para no caer en crisis?"]
      },
      {
        cells:["Estratégico / IP","Si la acción convierte a la entidad en un Commodity (reemplazable por precio).","Auditoría de la Matriz de Claridad Fractal."],
        q:["¿Qué área de riesgo tiene que ver con tu diferenciación y lo que te hace único en el mercado?","¿Cuándo dices NO porque una acción te vuelve igual a todos y te hace competir solo por precio?","¿Qué revisas en tu propiedad intelectual después de ese veto para volver a ser irremplazable?"]
      },
      {
        cells:["Ético / Legado","Si la acción contradice los principios de Capitalismo Consciente.","Sesión de alineación con el Criterio Fundacional."],
        q:["¿Qué área de riesgo tiene que ver con tus valores y el tipo de mundo que quieres dejar?","¿Cuándo dices NO porque una oportunidad te pide traicionar lo que eres o lo que prometiste?","¿A quién o a qué vuelves después de ese veto para recordar por qué construyes lo que construyes?"]
      },
    ],
    useCase:"Reuniones de junta donde la urgencia operativa amenaza con desviar la visión a largo plazo.",
  },
  {
    id:6, code:"DS", name:"Matriz de Distribución Radical de Capital", subtitle:"Splendor Model",
    tagline:"La justicia financiera no es ética. Es matemática.",
    impact:"Elimina capas de gestión innecesaria y pone el capital donde genera valor real.",
    color:"#34D399",
    columns:["Porcentaje","Destino del Recurso","Función de Gobernanza"],
    rows:[
      { cells:["28%","Pago Neto al Talento","Retención de IP y calidad."], q:["¿Qué porcentaje de lo que recibes va directamente a quien hace el trabajo real?","¿A quién o a qué va el recurso más grande porque sin eso todo se detiene?","¿Por qué ese destino merece la parte más grande? ¿Qué se pierde si lo reduces?"] },
      { cells:["12%","Parafiscales / Legal","Cumplimiento y Compliance internacional."], q:["¿Qué porcentaje destinas al cumplimiento legal y a mantenerte operando dentro de las reglas?","¿Qué gastos obligatorios tienes para que nadie pueda detenerte por razones legales o administrativas?","¿Qué ocurre con tu operación si ignoras estos costos durante 6 meses?"] },
      { cells:["7%","Closer de Élite","Incentivo por adquisición de nuevos contratos."], q:["¿Qué porcentaje asignas a quien trae nuevos contratos o clientes de alto valor?","¿Quién en tu sistema tiene el rol de abrir nuevas puertas y cómo lo incentivas?","¿Por qué ese incentivo es clave para que esa persona dé lo mejor de sí?"] },
      { cells:["7%","Campaign Manager","Ejecución táctica de la célula."], q:["¿Qué porcentaje va a quien orquesta la ejecución táctica del día a día?","¿Quién asegura que el plan se ejecute en tiempo real y qué necesita para hacerlo bien?","¿Qué se cae si ese rol no tiene los recursos necesarios para operar?"] },
      { cells:["4%","Scalable Manager","Supervisión de arquitectura de escalabilidad."], q:["¿Qué porcentaje va a quien diseña cómo crecer sin romperse?","¿Quién en tu sistema mira el crecimiento desde arriba y previene los cuellos de botella antes de que ocurran?","¿Qué decisiones de largo plazo dependen de este rol?"] },
      { cells:["4%","Vertical Manager","Gobernanza de la unidad dentro del Holding."], q:["¿Qué porcentaje va a quien gobierna una unidad específica del ecosistema?","¿Quién reporta los resultados de esa unidad y toma decisiones dentro de sus límites?","¿Cómo se asegura que el crecimiento de esa unidad no afecte a las demás?"] },
      { cells:["38%","Reserva / Estructura","I+D, reservas en USD y margen de empresa madre."], q:["¿Qué porcentaje guardas para el crecimiento futuro, la innovación y la protección del sistema?","¿En qué usas ese fondo: investigación, reservas en moneda fuerte, infraestructura?","¿Por qué ese porcentaje no toca ni aunque el mes sea difícil?"] },
    ],
    useCase:"Estructuración de nuevas células operativas al escalar un contrato de outsourcing especializado.",
  },
  {
    id:7, code:"PS", name:"Matriz de Pinza Sistémica", subtitle:"Arquitectura Adaptativa",
    tagline:"Operar en caos no es valentía. Es falta de arquitectura.",
    impact:"La empresa se repara mientras sigue en movimiento. Intervención sin parar la operación.",
    color:"#60A5FA",
    columns:["Fase","Enfoque: Hardware (Operación)","Enfoque: Software (Humano/Criterio)"],
    rows:[
      {
        cells:["1. Escaneo","Identificar Decision Latency (retraso en decisiones).","Identificar niveles de Burnout en el liderazgo."],
        q:["¿Qué nombre le das a la fase donde primero observas todo antes de tocar nada?","¿Dónde están los cuellos de botella en tus procesos? ¿Dónde se atascan las decisiones?","¿Quién en el equipo está al límite de su energía? ¿Cómo lo reconoces antes de que colapse?"]
      },
      {
        cells:["2. La Pinza","Si la operación está rota: Aplicar Scalability Sprints.","Si el liderazgo está quemado: Aplicar Micro-Buffers."],
        q:["¿Cómo describes el momento en que aplicas presión simultánea en lo operativo y en lo humano para estabilizar?","Si tus procesos están rotos, ¿cuál es el sprint de 2 semanas más urgente para reparar lo más crítico?","Si las personas están al límite, ¿qué pequeño alivio (buffer) puedes crear esta semana para recuperar su energía?"]
      },
      {
        cells:["3. Estabilización","Documentación de la ejecución sistemática.","Delegación mediante Arquitectura de Decisiones."],
        q:["¿Cómo sabes que el sistema ya no depende de la intervención de emergencia y puede sostenerse solo?","¿Qué procesos debes documentar ahora para que el sistema no olvide lo que aprendió durante la crisis?","¿Qué decisiones puedes delegar formalmente ahora para que el liderazgo no vuelva a estar solo cargando todo?"]
      },
    ],
    useCase:"Intervenciones en empresas Post-Serie A que mueren por entropía operativa a pesar de tener fondeo.",
  },
  {
    id:8, code:"MC", name:"Matriz de Integración de Hallazgos", subtitle:"Meta-Core",
    tagline:"El mercado siempre te dice la verdad. Tú decides si escuchas.",
    impact:"Convierte los experimentos del mes en sistemas replicables o los descarta antes de que denen recursos.",
    color:"#F59E0B",
    columns:["Origen del Hallazgo","Matriz Relacionada","Acción de Integración"],
    rows:[
      {
        cells:["Análisis de Mercado","Meta-Framework Vita Boma","Ajuste de liquidez y activos de protección."],
        q:["¿Qué señal del mercado o del entorno cambió algo en tu entendimiento este mes?","¿Qué herramienta o matriz activas cuando el mercado te da una señal sobre tus recursos financieros?","¿Qué ajuste concreto haces en tu estructura financiera cuando el mercado te dice que algo cambió?"]
      },
      {
        cells:["Fricción en Ventas","Protocolo Singularity","Calibración de preguntas y labels de negociación."],
        q:["¿Dónde sientes que las ventas se traban o se enfrían sin razón aparente?","¿Qué protocolo o herramienta activas cuando reconoces fricción en el proceso de cierre?","¿Qué ajustas en tu comunicación o en tus preguntas después de perder una venta o negociación?"]
      },
      {
        cells:["Falla de Proceso","Matriz G (Fractal)","Descenso al Nivel 0 (Átomo) para corregir el SOP."],
        q:["¿Cómo reconoces cuando un proceso falla repetidamente en el mismo punto?","¿Qué herramienta usas para diagnosticar en qué nivel fractal está la falla?","¿Cuál es tu primer movimiento para corregir esa falla desde su causa raíz, no desde el síntoma?"]
      },
      {
        cells:["Crecimiento Excesivo","Algoritmo Renasci","Creación de nueva Vertical independiente en JJ Company."],
        q:["¿Cómo reconoces cuando una unidad crece tan rápido que empieza a romper el sistema que la contiene?","¿Qué herramienta usas para decidir si ese crecimiento merece convertirse en una unidad autónoma?","¿Cuál es el primer paso para separar ese crecimiento en una entidad propia sin romper la madre?"]
      },
    ],
    useCase:"Sesiones de cierre de mes para decidir si un experimento se convierte en sistema replicable o se descarta.",
  },
  {
    id:9, code:"SG", name:"Matriz de Comunicación Estratégica", subtitle:"Singularity",
    tagline:"El que controla las preguntas, controla el resultado.",
    impact:"Transforma el cierre de contratos de alto valor en consecuencia natural de la arquitectura de conversación.",
    color:"#E879F9",
    columns:["Nivel de Negociación","Herramienta","Objetivo"],
    rows:[
      {
        cells:["Táctico","Espejo y Etiquetado","Extraer la intención real de la contraparte."],
        q:["¿Qué nivel de negociación es este? ¿Estás explorando o ya hay tensión?","¿Qué técnica usas para que la otra persona sienta que la entiendes antes de proponer cualquier solución?","¿Qué quieres descubrir en esta fase? ¿Qué pregunta sin respuesta todavía te impide avanzar?"]
      },
      {
        cells:["Estratégico","Preguntas Calibradas","Obligar a la contraparte a co-arquitectar la solución."],
        q:["¿En qué momento de la negociación pasas de explorar a construir la solución juntos?","¿Qué tipo de preguntas usas para que la otra parte construya la solución contigo en lugar de resistirla?","¿Qué quieres que la contraparte diga o decida por sí misma en esta fase?"]
      },
      {
        cells:["De Cierre","Matriz de ROI Percibido","Colapsar la distancia entre precio y valor generado."],
        q:["¿Cómo reconoces el momento en que la negociación está lista para el cierre?","¿Qué herramienta o argumento usas para hacer que el precio se vea pequeño frente al valor que obtendrán?","¿Qué quieres que la contraparte sienta en el momento de decir sí: alivio, certeza, entusiasmo?"]
      },
    ],
    useCase:"Cierre de contratos de alto ticket ($25k–$100k) para servicios de consultoría de escalabilidad.",
  },
  {
    id:10, code:"§", name:"Matriz de Resolución Sistémica", subtitle:"§ Formula",
    tagline:"Todo problema tiene cuatro variables. El que siempre falla es el tiempo.",
    impact:"Detecta el cuello de botella real y genera la palanca de mínimo esfuerzo, máximo impacto.",
    color:"#FB7185",
    columns:["Variable","Factor de Influencia","Punto de Apalancamiento","Acción de Gobernanza"],
    rows:[
      {
        cells:["(t) Tiempo","Latencia de decisión","Ventana de oportunidad","Reducción de burocracia mediante automatización"],
        q:["¿Cuánto tiempo tarda una decisión en tu sistema desde que se necesita hasta que se toma?","¿Dónde exactamente se pierde más tiempo en tu operación? ¿Aprobaciones, comunicación, ejecución?","¿Cuánto tiempo tienes para actuar antes de que esa ventana de oportunidad se cierre?","¿Qué proceso o paso puedes eliminar o automatizar esta semana para que las decisiones fluyan más rápido?"]
      },
      {
        cells:["(E) Energía","Capacidad instalada (Humana/Técnica)","Cuello de botella","Reasignación de recursos de Splendor"],
        q:["¿Cuánta energía real tiene tu sistema ahora mismo: personas, herramientas, recursos técnicos?","¿Dónde se consume más energía de lo que genera valor?","¿Dónde está el cuello de botella que limita todo lo demás aunque el resto funcione bien?","¿Qué recurso reasignarías primero para desbloquear ese cuello de botella?"]
      },
      {
        cells:["(K) Conocimiento","Propiedad Intelectual disponible","Brecha de ejecución","Aplicación de Matriz G (Nivel 1)"],
        q:["¿Qué tan documentado y accesible está el conocimiento que necesitas para operar?","¿Qué saben ciertas personas de tu sistema que no está escrito y podría perderse mañana?","¿Dónde hay una brecha entre lo que el sistema sabe y lo que realmente ejecuta?","¿Qué proceso documentarías primero para cerrar esa brecha?"]
      },
      {
        cells:["(R) Resultado","Impacto en EBITDA / Legado","ROI Estratégico","Validación contra la Visión Madre de JJ Co."],
        q:["¿Cuál es el resultado concreto que quieres medir? ¿Dinero, impacto, tiempo liberado?","¿Cuánto afecta ese resultado al funcionamiento general del sistema?","¿Cuál es el retorno estratégico de resolver este problema? ¿Qué se desbloquea si lo resuelves?","¿Cómo sabes que ese resultado está alineado con el propósito más grande de lo que construyes?"]
      },
    ],
    useCase:"Situaciones de crisis o pivots donde el costo de oportunidad es más alto que el costo operativo.",
  },
  {
    id:11, code:"DiDs", name:"Matriz de Densidad y Disponibilidad", subtitle:"Di/Ds",
    tagline:"La riqueza no está en operar más. Está en saber cuándo no operar.",
    impact:"Protege el capital en mercados volátiles convirtiendo la inacción en decisión estratégica de alto valor.",
    color:"#2DD4BF",
    columns:["Zona de Mercado","Densidad (Di)","Disponibilidad (Ds)","Estrategia de Salida"],
    rows:[
      {
        cells:["Zona de Acumulación","Alta (Muchos contratos/órdenes)","Baja (Poca volatilidad)","Entrada fraccionada (DCA) para no mover el precio"],
        q:["¿Cómo describes esta fase de mercado donde hay mucha actividad pero el precio se mueve poco?","¿Cuántas oportunidades o contratos están disponibles en este momento en tu mercado?","¿Qué tan volátil o inestable está el valor de lo que ofreces o inviertes ahora mismo?","¿Cómo entras en pequeñas dosis para aprovechar sin generar una reacción que te perjudique?"]
      },
      {
        cells:["Zona de Expansión","Media","Alta (Movimiento rápido)","Ejecución de órdenes de mercado"],
        q:["¿Cómo describes esta fase donde el mercado se mueve rápido y las oportunidades pasan veloz?","¿Cuánta actividad hay ahora mismo en tu sector o mercado?","¿Qué tan rápido cambia el precio o el valor de lo que manejas?","¿Cuándo actúas rápido y sin dudar porque esperar significa perder la oportunidad?"]
      },
      {
        cells:["Zona de Distribución","Alta","Media-Alta","Toma de ganancias progresiva (Trailing Stop)"],
        q:["¿Cómo reconoces la fase donde es momento de recoger lo que sembraste, no de seguir sembrando?","¿Cuándo el mercado o el cliente tiene mucho interés pero tú ya tienes suficiente ganancia acumulada?","¿En qué punto de velocidad empiezas a asegurar lo que ya ganaste en lugar de buscar más?","¿Cómo retiras ganancias poco a poco para no perderlo todo si el mercado da vuelta?"]
      },
      {
        cells:["Zona de Vacío","Baja","Extrema (Gaps de precio)","No operar (Preservación de capital)"],
        q:["¿Cómo reconoces la zona de peligro donde no hay claridad y cualquier movimiento es una apuesta?","¿Cuándo hay muy poca actividad pero los cambios de precio son brutales e impredecibles?","¿Cuándo el mercado salta sin razón aparente y moverse en cualquier dirección es un riesgo extremo?","¿Cómo te mantienes quieto y preservas lo que tienes cuando el ruido es tan alto que no se puede analizar?"]
      },
    ],
    useCase:"Gestión de tesorería de JJ Company en operaciones de arbitraje o cobertura en mercados de divisas.",
  },
  {
    id:12, code:"CD", name:"Matriz de Criterio de Delegación", subtitle:"Consigliere",
    tagline:"La autonomía sin criterio es riesgo. Con criterio, es escalabilidad.",
    impact:"Transforma la microgestión en arquitectura de decisiones, liberando al fundador para operar en Nivel 4.",
    color:"#818CF8",
    columns:["Nivel de Autonomía","Requisito de IP","Sistema de Control","Riesgo Permitido"],
    rows:[
      {
        cells:["Nivel 1: Ejecutor","Acceso a SOP (Nivel 1 Matriz G)","Reporte Diario","Cero (Tareas mecánicas)"],
        q:["¿Cómo llamas al nivel de alguien que ejecuta lo que se le indica sin necesitar crear nada nuevo?","¿Qué instrucciones o guías necesita esa persona para hacer su trabajo correctamente sin preguntarte?","¿Con qué frecuencia necesitas saber que esa persona está haciendo lo correcto?","¿Qué tipo de errores son aceptables en este nivel y cuáles son absolutamente inaceptables?"]
      },
      {
        cells:["Nivel 2: Gestor","Manejo de Flujos (Nivel 2 Matriz G)","KPI Semanal","Bajo (Errores corregibles en <24h)"],
        q:["¿Cómo describes a alguien que no solo ejecuta sino que coordina a otros y mantiene flujos funcionando?","¿Qué conocimiento sobre los procesos interconectados necesita esa persona para coordinar bien?","¿Qué métricas revisas semanalmente para saber si esa persona está gestionando bien?","¿Qué tipo de errores puede cometer y corregir solo en menos de 24 horas sin que todo se dañe?"]
      },
      {
        cells:["Nivel 3: Arquitecto","Visión de Sistema (Nivel 3 Matriz G)","OKR Mensual","Medio (Decisiones presupuestarias)"],
        q:["¿Cómo describes a alguien que puede ver el sistema completo y proponer cómo mejorarlo?","¿Qué visión del sistema completo necesita para tomar buenas decisiones de diseño?","¿Qué resultados clave revisas mensualmente para saber si está construyendo bien?","¿Qué nivel de riesgo financiero o de recursos puede asumir sin necesitar tu aprobación?"]
      },
      {
        cells:["Nivel 4: Socio/Líder","Alineación con el Legado","Junta de Gobernanza","Alto (Decisiones de expansión)"],
        q:["¿Cómo describes a alguien que comparte la visión de legado y puede tomar decisiones de expansión?","¿Qué tan profunda debe ser su alineación con los valores y el propósito de largo plazo del ecosistema?","¿Con qué instancia o proceso toma las decisiones más grandes para que no sean arbitrarias?","¿Qué decisiones de crecimiento o expansión puede tomar solo porque confías en su criterio?"]
      },
    ],
    useCase:"Crecimiento del equipo de High-Ticket Closers o al contratar nuevos perfiles para Real Estate.",
  },
  {
    id:13, code:"EL", name:"Matriz de Eficiencia de Comunicación", subtitle:"Protocolo de Latencia",
    tagline:"El canal equivocado destruye más proyectos que cualquier competidor.",
    impact:"Recupera horas de productividad perdidas en ruido comunicacional y devuelve la atención al valor.",
    color:"#FCD34D",
    columns:["Tipo de Info","Canal de Gobernanza","Tiempo de Respuesta","Objetivo"],
    rows:[
      {
        cells:["Crítico/Bloqueante","Llamada / Sincrónico","Inmediato","Resolución de la § Formula"],
        q:["¿Cómo reconoces cuando una información es tan urgente que si no se actúa ahora todo se detiene?","¿Qué canal usas cuando la situación requiere que dos personas hablen en tiempo real?","¿Cuánto tiempo máximo puede pasar entre que surge el bloqueo y que alguien está resolviéndolo?","¿Qué quieres que pase al final de esa comunicación de emergencia?"]
      },
      {
        cells:["Operativo/Proceso","ClickUp / Asincrónico","< 4 horas","Mantener el flujo de la Matriz G"],
        q:["¿Cómo distingues la información que es importante pero no detiene todo mientras no se responde?","¿Qué herramienta usas para gestionar tareas y procesos sin necesitar que todos estén conectados al mismo tiempo?","¿Cuánto tiempo puede esperar una respuesta operativa sin que el flujo se dañe?","¿Qué quieres que pase con esa información: que se ejecute, que se documente, que se apruebe?"]
      },
      {
        cells:["Informativo","Slack / E-mail","< 24 horas","Alineación de contexto"],
        q:["¿Cómo describes la información que no requiere acción inmediata pero que todos deben saber?","¿Qué canal usas para compartir contexto sin interrumpir el trabajo de los demás?","¿Cuánto tiempo puede pasar antes de que esa información deje de ser relevante si no se responde?","¿Qué quieres que las personas hagan con esa información: que la conozcan, que la comenten, que la guarden?"]
      },
      {
        cells:["Estratégico/Idea","Documento de Estrategia","Sesión Semanal","Evaluar para nueva Vertical en JJ Co."],
        q:["¿Cómo reconoces una idea o propuesta que merece tiempo de análisis profundo, no una respuesta rápida?","¿Dónde viven las ideas estratégicas para que no se pierdan y sean evaluadas con calma?","¿Con qué frecuencia te sientas a revisar esas ideas con criterio y sin urgencia?","¿Qué quieres que pase con las mejores ideas de esas sesiones: que se conviertan en proyectos, en verticales, en experimentos?"]
      },
    ],
    useCase:"Rediseño de la cultura operativa en clientes para restaurar horas de productividad perdidas en ruido.",
  },
  {
    id:14, code:"MT", name:"Matriz de Matching de Talento", subtitle:"Splendor",
    tagline:"El talento incorrecto no es malo. Solo está en el nivel equivocado.",
    impact:"Elimina el error de contratación más costoso: talento técnico con cultura equivocada.",
    color:"#4ADE80",
    columns:["Dimensión de Ajuste","Nivel: Ejecutor Técnico","Nivel: Arquitecto de Solución","Protocolo de Validación"],
    rows:[
      {
        cells:["Alineación de IP","Domina la herramienta (ClickUp/AWS).","Propone mejoras al sistema existente.","Prueba técnica de estrés (72h)"],
        q:["¿Cómo evalúas si una persona entiende y puede usar el conocimiento del sistema que ya existe?","¿Qué demuestra una persona para confirmarte que domina las herramientas que necesita para ejecutar?","¿Qué demuestra una persona para confirmarte que puede no solo usar el sistema sino mejorarlo?","¿Qué prueba concreta le pondrías a alguien para ver cómo responde bajo presión real antes de contratarlo?"]
      },
      {
        cells:["Resonancia de Valores","Cumple con los KPIs básicos.","Actúa con mentalidad de Legacy.","Entrevista de Criterio Consciente"],
        q:["¿Cómo evalúas si una persona comparte los valores que hacen funcionar tu cultura?","¿Qué señales te muestran que alguien cumple con lo que se espera sin necesitar supervisión constante?","¿Qué señales te muestran que alguien piensa en el impacto a largo plazo, no solo en el resultado inmediato?","¿Qué pregunta le harías a alguien para revelar cómo toma decisiones difíciles cuando nadie lo ve?"]
      },
      {
        cells:["Latencia de Respuesta","Responde en el tiempo acordado.","Anticipa cuellos de botella.","Simulación de crisis operativa"],
        q:["¿Cómo mides qué tan rápido y confiablemente responde una persona a lo que se le pide?","¿Qué comportamiento concreto te confirma que alguien es puntual y confiable en sus compromisos?","¿Qué comportamiento concreto te confirma que alguien ve los problemas antes de que ocurran?","¿Cómo simulas una situación de crisis para ver cómo reacciona antes de ponerlo en una situación real?"]
      },
      {
        cells:["Costo vs. Valor","Tarifa de mercado (Junior/Mid).","ROI directo por eficiencia (Senior).","Auditoría de Margen (Matriz Splendor)"],
        q:["¿Cómo defines si el costo de una persona está alineado con el valor que genera?","¿Qué tasa de mercado es justa para alguien que ejecuta bien pero no diseña ni toma decisiones?","¿Cómo calculas el retorno real que genera una persona de alto nivel en términos de eficiencia y ahorro?","¿Qué revisas en tus márgenes antes de confirmar que puedes costear y justificar esa contratación?"]
      },
    ],
    useCase:"Reclutamiento de élite para clientes internacionales donde el error de contratación cuesta meses.",
  },
  {
    id:15, code:"GO", name:"Matriz de Gobernanza Offshore", subtitle:"JJ Company",
    tagline:"No es evasión. Es ingeniería del capital al servicio del propósito.",
    impact:"Estructura el holding para que cada dólar generado en LATAM se multiplique bajo protección global.",
    color:"#38BDF8",
    columns:["Jurisdicción","Tipo de Recurso","Función de la Entidad","Beneficio de Gobernanza"],
    rows:[
      {
        cells:["Local (COP)","Nómina y Gasto Operativo","Operación del día a día (Front-end)","Cumplimiento legal doméstico"],
        q:["¿Qué jurisdicción o territorio es donde ocurre la operación visible del día a día?","¿Qué tipo de recursos o pagos son estrictamente locales y no pueden moverse a otra estructura?","¿Cuál es la función de esta entidad local? ¿Qué hace que la entidad offshore no puede hacer directamente?","¿Qué protección legal o cumplimiento te da operar localmente que no puedes ignorar?"]
      },
      {
        cells:["Offshore (USD/Delaware)","Propiedad Intelectual (IP)","Holding de Facturación Global","Protección de activos y baja carga"],
        q:["¿En qué jurisdicción estratégica ubicas los activos que quieres proteger y hacer crecer?","¿Qué activos (IP, contratos, marcas) viven en la entidad offshore y por qué?","¿Qué función cumple esta entidad que no puede cumplir la local? ¿Cómo factura y qué protege?","¿Qué ventaja concreta (fiscal, legal, de credibilidad) obtienes al tener esta estructura?"]
      },
      {
        cells:["Bancaria (Stripe/Wise/Mercury)","Pasarelas de Pago","Recaudación y dispersión rápida","Agilidad de flujo de caja internacional"],
        q:["¿Qué infraestructura bancaria internacional usas para mover dinero entre jurisdicciones?","¿Qué herramientas de pago te permiten recibir y enviar en diferentes monedas sin fricción?","¿Cuál es la función de esa infraestructura bancaria en tu flujo de caja?","¿Qué ganas al tener acceso a esa infraestructura versus quedarte solo con banca tradicional local?"]
      },
      {
        cells:["Cripto/Estable","Reserva de Emergencia","Protección contra devaluación súbita","Inmediatez y arbitraje de divisa"],
        q:["¿Qué porción de tu reserva mantienes en activos digitales o estables para casos extremos?","¿Qué tipo de activo usas como última línea de defensa cuando las monedas locales colapsan?","¿Para qué exactamente usas esa reserva: protección, arbitraje, liquidez de emergencia?","¿Qué ventaja te da tener una reserva en este formato que no te da la banca tradicional?"]
      },
    ],
    useCase:"Estructuración de cobros para servicios de consultoría Axis en EE.UU. desde base operativa en LATAM.",
  },
  {
    id:16, code:"CB", name:"Matriz Singularity: Cisnes Negros", subtitle:"Black Swan Protocol",
    tagline:"La crisis no es el problema. La falta de protocolo sí lo es.",
    impact:"Convierte los eventos impredecibles en oportunidades de reconfiguración, no en colapsos.",
    color:"#C084FC",
    columns:["Fase de la Crisis","Acción de Mirroring (Espejo)","Etiquetado del Riesgo (Labeling)","Pregunta Calibrada de Salida"],
    rows:[
      {
        cells:["Impacto Inicial","Repetir los últimos 3 términos del problema.","Parece que estamos ante una ruptura de confianza/sistema.","¿Cómo podemos resolver esto sin comprometer el legado?"],
        q:["¿Cómo reconoces el momento exacto en que algo imprevisto golpea el sistema?","¿Cómo demuestras a la contraparte que entendiste exactamente lo que dijo, sin interpretar ni juzgar?","¿Cómo nombras lo que está pasando emocionalmente para que la contraparte sienta que fue vista?","¿Qué pregunta abres para que la solución emerja sin perder lo más importante?"]
      },
      {
        cells:["Escalamiento","Silencio táctico tras la respuesta.","Parece que hay un miedo a perder el control operativo.","¿Qué sucede si no tomamos una decisión hoy?"],
        q:["¿Cómo reconoces que la crisis está creciendo en lugar de resolverse?","¿Cuándo el silencio es la respuesta más poderosa que puedes dar? ¿Qué comunica ese silencio?","¿Cómo nombras el miedo específico que está escalando la situación?","¿Qué pregunta pone el costo de NO actuar sobre la mesa de forma que todos lo entiendan?"]
      },
      {
        cells:["Resolución","Resumir la posición de la contraparte.","Siento que valoras más la seguridad que la velocidad ahora.","¿Cómo sabemos que este camino es sostenible?"],
        q:["¿Cómo reconoces que la crisis está bajando de temperatura y hay espacio para resolver?","¿Cómo demuestras que comprendiste la posición completa de la contraparte antes de ofrecer tu solución?","¿Cómo identificas el valor central de la contraparte para diseñar una solución que lo respete?","¿Qué pregunta valida que la solución acordada puede sostenerse en el tiempo y no solo en el momento?"]
      },
    ],
    useCase:"Negociaciones de rescate de proyectos o conflictos con socios donde las emociones bloquean la lógica.",
  },
  {
    id:17, code:"AX", name:"Matriz Axis: El Espejo de Claridad", subtitle:"Diagnóstico de Verdad",
    tagline:"La verdad que no quieres ver es exactamente donde está la solución.",
    impact:"Colapsa la distancia entre la narrativa del CEO y la realidad del sistema, activando el cambio real.",
    color:"#F97316",
    columns:["Pilar de la Empresa","Realidad Percibida (Lo que dicen)","Realidad Sistémica (Lo que es)","La Verdad Axis (El Hallazgo)"],
    rows:[
      {
        cells:["Estructura","Tenemos procesos claros.","Los procesos dependen de 1 persona.","Fragilidad: No hay sistema, hay heroísmo."],
        q:["¿Qué pilar fundamental de tu organización vas a radiografiar ahora?","¿Qué dice la gente o el liderazgo que tiene o que funciona bien en este pilar?","¿Qué revela la realidad cuando observas sin filtros ni narrativas? ¿Qué ves que nadie dice en voz alta?","¿Cuál es el hallazgo que explica la brecha entre lo que dicen y lo que realmente pasa?"]
      },
      {
        cells:["Estrategia","Sabemos hacia dónde vamos.","Cambian de objetivo cada 15 días.","Entropía: Falta de Matriz de Veto."],
        q:["¿Qué pilar estratégico vas a revisar ahora con ojos de diagnóstico?","¿Qué dice el equipo que sabe y tiene claro sobre la dirección estratégica?","¿Qué revela el comportamiento real del equipo sobre si esa estrategia existe o es solo un discurso?","¿Qué nombre le pones al problema real que hace que la estrategia no se sostenga?"]
      },
      {
        cells:["Talento","Tenemos al mejor equipo.","Nadie toma decisiones sin permiso.","Bloqueo: Cultura de miedo/micromanagement."],
        q:["¿Qué pilar humano vas a observar con honestidad ahora?","¿Qué dice el liderazgo sobre la capacidad y autonomía de su equipo?","¿Qué revela el comportamiento cotidiano del equipo sobre si realmente tiene esa autonomía?","¿Cuál es el patrón cultural específico que está paralizando al equipo y cómo se llama?"]
      },
      {
        cells:["Crecimiento","Necesitamos más ventas.","No pueden operar lo que ya vendieron.","Ilusión: El problema es de entrega, no de ventas."],
        q:["¿Qué pilar de crecimiento vas a diagnosticar ahora?","¿Cuál es la solución que el liderazgo cree que resolverá el estancamiento?","¿Qué revela la capacidad operativa real sobre si esa solución es la correcta?","¿Cuál es la verdad que nadie quiere decir sobre por qué el negocio no crece realmente?"]
      },
    ],
    useCase:"Sesión inicial con CEO de empresa Serie A/B para identificar la causa real del estancamiento.",
  },
  {
    id:18, code:"TP", name:"Matriz de Triangulación de Pain Points", subtitle:"UX Transversal & Océanos Azules",
    tagline:"El Océano Azul no se descubre. Se triangula.",
    impact:"Genera diferenciación que no puede copiarse porque requiere reestructuración profunda de IP.",
    color:"#06B6D4",
    columns:["Dimensión del Dolor","UX Tradicional (Fricción)","UX Transversal (La Brecha)","Océano Azul (La Solución Axis)"],
    rows:[
      {
        cells:["Psicológica","Ansiedad por falta de control o visibilidad.","El usuario siente que el consultor es una caja negra.","Gobernanza Radical: Tableros en tiempo real e IP compartida."],
        q:["¿Qué dimensión del dolor emocional o psicológico sufre tu cliente o comunidad?","¿Qué experiencia frustrante vive hoy con las soluciones que ya existen en el mercado?","¿Qué necesidad profunda no está siendo atendida por nadie, aunque la persona ni sepa nombrarla?","¿Cuál es tu solución que atiende esa necesidad profunda de una forma que nadie más ofrece hoy?"]
      },
      {
        cells:["Operativa","Procesos manuales, lentos y burocráticos.","El sistema castiga la agilidad para mantener el status quo.","Automatización de Élite: Reducción de latencia a <1 hora."],
        q:["¿Qué dimensión operativa o práctica hace más lenta y pesada la vida de tu cliente?","¿Qué proceso o tarea les quita más tiempo y energía sin agregar valor real?","¿Qué está protegiendo el mercado actual que en realidad solo beneficia al proveedor y no al cliente?","¿Cuál es tu solución que elimina esa fricción operativa de una forma que el mercado actual no puede ofrecer?"]
      },
      {
        cells:["Financiera","Costos ocultos y falta de ROI claro.","El modelo de cobro beneficia al proveedor, no al resultado.","Splendor Model: Alineación de incentivos por hitos de éxito."],
        q:["¿Qué dimensión financiera hace que el cliente sienta que paga de más o que no sabe lo que paga?","¿Qué costos ocultos o poco claros generan desconfianza o resentimiento en el cliente?","¿Quién se beneficia realmente del modelo de cobro actual: el proveedor o el resultado del cliente?","¿Cuál es tu modelo que alinea lo que cobras con el resultado que generas, no con las horas que inviertes?"]
      },
      {
        cells:["Sistémica","Soluciones parche que no escalan.","El mercado vende herramientas, no arquitecturas de vida.","Ecosistema Modular: Una estructura que crece con el fundador."],
        q:["¿Qué dimensión sistémica hace que las soluciones actuales sean parches que no duran?","¿Qué solución actual funciona al principio pero se rompe cuando el cliente crece o cambia?","¿Qué vende el mercado que en realidad no está construido para acompañar el crecimiento real del cliente?","¿Cuál es tu solución que no solo resuelve hoy sino que crece y evoluciona junto con quien la usa?"]
      },
    ],
    useCase:"Lanzar una nueva vertical o cuando un cliente está estancado en Océano Rojo y necesita diferencial no copiable.",
  },
  {
    id:19, code:"FT", name:"Framework de Transcendencia", subtitle:"El Círculo de la § Resolución",
    tagline:"Cualquier sistema humano puede reconstruirse en 10 pasos desde el nivel cero.",
    impact:"La llave universal: desde un niño sembrando hasta un gobierno desburocratizando el SPX 500, el algoritmo es el mismo.",
    color:"#A3E635",
    columns:["Etapa","Acción Humana y Técnica","Propósito de Vida"],
    rows:[
      { cells:["1. Circunstancia Actual","Aceptar la Verdad Desnuda sin juicio.","Honestidad radical con el entorno."], q:["¿Cuál es tu primera etapa siempre?","¿Dónde estás realmente ahora mismo? No donde crees que deberías estar, sino donde estás. Di una oración honesta.","¿Por qué empezar desde la verdad desnuda, aunque duela, es más poderoso que empezar desde donde quisieras estar?"] },
      { cells:["2. Definición del Desafío","Nombrar al monstruo. ¿Es falta de comida, de orden o de visión?","Claridad de intención."], q:["¿Qué haces después de aceptar la realidad?","¿Cuál es el problema real que debes resolver ahora? Dale un nombre concreto, no un síntoma.","¿Por qué nombrar el desafío con precisión cambia la forma en que puedes resolverlo?"] },
      { cells:["3. Selección de Matriz","Elegir la herramienta según el desafío.","Aplicación del Criterio."], q:["¿Cómo decides qué herramienta o método usar?","Mirando tu desafío y las matrices disponibles, ¿cuál es la que más directamente apunta a tu problema?","¿Por qué el criterio para elegir la herramienta correcta es tan importante como la herramienta misma?"] },
      { cells:["4. Resultado Esperado","Definir el Bienestar Mínimo Viable que quieres alcanzar.","Esperanza basada en datos."], q:["¿Qué defines antes de actuar?","¿Cuál es el resultado más pequeño y concreto que ya te diría que estás en el camino correcto?","¿Por qué definir el resultado mínimo aceptable antes de actuar protege tu energía y tu dirección?"] },
      { cells:["5. Prueba (Ejecución)","El salto al vacío. Sembrar la semilla o firmar el contrato.","Valentía operativa."], q:["¿Cuál es el paso que separa el plan de la realidad?","¿Cuál es la acción más pequeña que puedes tomar hoy para poner a prueba tu hipótesis en el mundo real?","¿Por qué la ejecución imperfecta hoy vale más que el plan perfecto que no existe?"] },
      { cells:["6. Documentar","Escribir qué pasó. Lo que no se mide se olvida.","Construcción de Memoria e IP."], q:["¿Qué haces inmediatamente después de ejecutar?","¿Qué pasó exactamente? Escríbelo en una oración sin interpretarlo todavía.","¿Por qué documentar lo que ocurre es la base de todo aprendizaje que puede sobrevivir sin ti?"] },
      { cells:["7. Revisar","Comparar el resultado con la § Formula (t, E, K, R).","Discernimiento."], q:["¿Cómo evalúas lo que documentaste?","¿Qué diferencia hay entre lo que esperabas y lo que ocurrió en términos de tiempo, energía, conocimiento y resultado?","¿Por qué revisar desde las variables del sistema te da más claridad que revisar desde tus emociones?"] },
      { cells:["8. Aprender","Extraer la Pepita de Oro del error o del éxito.","Sabiduría Sistémica."], q:["¿Qué extraes después de revisar?","¿Cuál es la única lección más valiosa que te deja este ciclo, ya sea un éxito o un fracaso?","¿Por qué extraer una sola lección concreta vale más que hacer una lista interminable de conclusiones?"] },
      { cells:["9. Mejorar","Ajustar el tornillo. 1% más humano, 1% más eficiente.","Evolución."], q:["¿Qué cambias antes de volver a empezar?","¿Cuál es el ajuste más pequeño y concreto que harías en la próxima iteración basándote en lo aprendido?","¿Por qué mejorar 1% cada ciclo es más sostenible y poderoso que intentar transformar todo de golpe?"] },
      { cells:["10. Iterar","Volver a empezar desde una plataforma más alta.","Legado Infinito."], q:["¿Qué ocurre cuando llegas al final de un ciclo completo?","¿Desde dónde empiezas el siguiente ciclo? ¿Qué tienes ahora que no tenías al principio?","¿Por qué iterar no es repetir sino espiralar hacia arriba desde una base más sólida cada vez?"] },
    ],
    useCase:"Aplicable a cualquier escala: individual, empresarial, gubernamental o civilizacional.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function MatricesEcosistema() {
  const [active, setActive] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);
  const [selected, setSelected] = useState(null); // {row, col}
  const [answers, setAnswers] = useState({}); // key: "matId-row-col"
  const [draftAnswer, setDraftAnswer] = useState("");
  const [showExample, setShowExample] = useState(false);
  const [viewMode, setViewMode] = useState("example"); // "example" | "mine"
  const [transitioning, setTransitioning] = useState(false);
  const [visible, setVisible] = useState(true);
  const textRef = useRef(null);
  const navRef = useRef(null);

  const matrix = MATRICES[active];

  const go = (idx) => {
    if (idx === active || transitioning) return;
    setTransitioning(true);
    setVisible(false);
    setPanelOpen(false);
    setTimeout(() => {
      setActive(idx);
      setVisible(true);
      setTransitioning(false);
    }, 250);
  };

  useEffect(() => {
    const h = (e) => {
      if (panelOpen) return;
      if (e.key === "ArrowRight") go(active === MATRICES.length - 1 ? 0 : active + 1);
      if (e.key === "ArrowLeft") go(active === 0 ? MATRICES.length - 1 : active - 1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [active, panelOpen, transitioning]);

  const openCell = (rowIdx, colIdx) => {
    const key = `${matrix.id}-${rowIdx}-${colIdx}`;
    setSelected({ rowIdx, colIdx, key });
    setDraftAnswer(answers[key] || "");
    setShowExample(false);
    setPanelOpen(true);
    setTimeout(() => textRef.current?.focus(), 100);
  };

  const saveAnswer = () => {
    if (!selected) return;
    setAnswers(prev => ({ ...prev, [selected.key]: draftAnswer }));
    setPanelOpen(false);
  };

  const getCellValue = (rowIdx, colIdx) => {
    const key = `${matrix.id}-${rowIdx}-${colIdx}`;
    if (viewMode === "mine" && answers[key]) return answers[key];
    return matrix.rows[rowIdx].cells[colIdx];
  };

  const hasAnswer = (rowIdx, colIdx) => !!answers[`${matrix.id}-${rowIdx}-${colIdx}`];

  // Progress for current matrix
  const totalCells = matrix.rows.reduce((s, r) => s + r.cells.length, 0);
  const filledCells = matrix.rows.reduce((s, r, ri) =>
    s + r.cells.filter((_, ci) => !!answers[`${matrix.id}-${ri}-${ci}`]).length, 0);
  const pct = Math.round((filledCells / totalCells) * 100);

  // Global answered count
  const totalAnswered = Object.keys(answers).length;

  const selectedQ = selected ? matrix.rows[selected.rowIdx]?.q?.[selected.colIdx] : null;
  const selectedExample = selected ? matrix.rows[selected.rowIdx]?.cells[selected.colIdx] : null;

  const C = matrix.color;

  return (
    <div style={{
      fontFamily: "'Georgia', serif",
      background: "#08080E",
      minHeight: "100vh",
      color: "#E0E0D8",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      position: "relative",
    }}>

      {/* TOP BAR */}
      <div style={{ background: "#050509", borderBottom: "1px solid #151520", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div>
          <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#444", letterSpacing: "3px", textTransform: "uppercase" }}>Axis · Renasci · Splendor · JJ Company</div>
          <div style={{ fontSize: "15px", fontWeight: "bold", color: "#E8E8E0", letterSpacing: "0.5px" }}>Ecosistema de Matrices — Plug & Play</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {totalAnswered > 0 && (
            <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#555" }}>
              <span style={{ color: C }}>{totalAnswered}</span> resp. globales
            </div>
          )}
          {/* View toggle */}
          <div style={{ display: "flex", border: "1px solid #222", borderRadius: "5px", overflow: "hidden" }}>
            {["example","mine"].map(m => (
              <button key={m} onClick={() => setViewMode(m)} style={{
                padding: "5px 12px", fontFamily: "monospace", fontSize: "10px",
                background: viewMode === m ? `${C}20` : "transparent",
                color: viewMode === m ? C : "#555",
                border: "none", cursor: "pointer",
                borderRight: m === "example" ? "1px solid #222" : "none",
                letterSpacing: "0.5px",
              }}>
                {m === "example" ? "EJEMPLO" : "MI VERSIÓN"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* NAV PILLS */}
      <div ref={navRef} style={{ display: "flex", gap: "4px", padding: "10px 20px", overflowX: "auto", borderBottom: "1px solid #111", scrollbarWidth: "none", flexShrink: 0 }}>
        {MATRICES.map((m, i) => {
          const filled = m.rows.reduce((s,r,ri) => s + r.cells.filter((_,ci) => !!answers[`${m.id}-${ri}-${ci}`]).length, 0);
          const tot = m.rows.reduce((s,r) => s + r.cells.length, 0);
          const p = Math.round((filled/tot)*100);
          return (
            <button key={m.id} onClick={() => go(i)} style={{
              flexShrink: 0, padding: "4px 10px", borderRadius: "4px",
              border: i === active ? `1px solid ${m.color}` : "1px solid #1E1E2E",
              background: i === active ? `${m.color}15` : "transparent",
              color: i === active ? m.color : (filled > 0 ? "#666" : "#3A3A4A"),
              fontFamily: "monospace", fontSize: "11px", cursor: "pointer",
              transition: "all 0.2s", position: "relative",
            }}>
              {m.code}
              {p > 0 && <span style={{ marginLeft: "4px", fontSize: "9px", opacity: 0.7 }}>{p}%</span>}
            </button>
          );
        })}
      </div>

      {/* MAIN */}
      <div style={{
        flex: 1, display: "flex", overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(6px)",
        transition: "opacity 0.25s, transform 0.25s",
      }}>

        {/* MATRIX AREA */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* Title */}
          <div>
            <div style={{ display: "inline-block", fontFamily: "monospace", fontSize: "10px", color: C, letterSpacing: "2px", background: `${C}12`, border: `1px solid ${C}30`, padding: "3px 8px", borderRadius: "3px", marginBottom: "8px" }}>
              {matrix.subtitle}
            </div>
            <h1 style={{ fontSize: "22px", fontWeight: "bold", margin: "0 0 4px", color: "#F0F0E8", lineHeight: 1.2 }}>{matrix.name}</h1>
            <div style={{ borderLeft: `3px solid ${C}`, paddingLeft: "12px", margin: "10px 0 6px" }}>
              <div style={{ fontSize: "15px", fontStyle: "italic", color: C, lineHeight: 1.4 }}>"{matrix.tagline}"</div>
            </div>
            <div style={{ fontSize: "12px", color: "#777", lineHeight: 1.5, maxWidth: "650px" }}>
              <span style={{ color: "#999" }}>Impacto: </span>{matrix.impact}
            </div>

            {/* Progress bar */}
            {filledCells > 0 && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
                <div style={{ flex: 1, maxWidth: "200px", height: "3px", background: "#1A1A28", borderRadius: "2px" }}>
                  <div style={{ width: `${pct}%`, height: "100%", background: C, borderRadius: "2px", transition: "width 0.4s" }} />
                </div>
                <span style={{ fontFamily: "monospace", fontSize: "10px", color: C }}>{pct}% completado</span>
              </div>
            )}
          </div>

          {/* Instruction */}
          <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#444", letterSpacing: "1px" }}>
            ↓ HAZ CLIC EN CUALQUIER CELDA PARA VER SU PREGUNTA TRANSVERSAL Y RESPONDER
          </div>

          {/* Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12.5px", minWidth: "500px" }}>
              <thead>
                <tr>
                  {matrix.columns.map((col, ci) => (
                    <th key={ci} style={{
                      textAlign: "left", padding: "9px 12px",
                      background: `${C}10`, borderBottom: `2px solid ${C}40`,
                      color: C, fontFamily: "monospace", fontSize: "10px",
                      letterSpacing: "1px", textTransform: "uppercase", fontWeight: "bold",
                      whiteSpace: "nowrap",
                    }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.cells.map((cell, ci) => {
                      const answered = hasAnswer(ri, ci);
                      const isSelected = selected && selected.rowIdx === ri && selected.colIdx === ci && panelOpen;
                      const displayVal = getCellValue(ri, ci);
                      return (
                        <td key={ci}
                          onClick={() => openCell(ri, ci)}
                          style={{
                            padding: "10px 12px",
                            borderBottom: "1px solid #13131E",
                            background: isSelected ? `${C}12` : (ri % 2 === 0 ? "#0C0C14" : "#0A0A10"),
                            cursor: "pointer",
                            verticalAlign: "top",
                            lineHeight: 1.45,
                            position: "relative",
                            transition: "background 0.15s",
                            borderLeft: ci === 0 ? `2px solid ${answered ? C : "transparent"}` : "none",
                          }}
                          onMouseEnter={e => { e.currentTarget.style.background = `${C}09`; }}
                          onMouseLeave={e => { e.currentTarget.style.background = isSelected ? `${C}12` : (ri % 2 === 0 ? "#0C0C14" : "#0A0A10"); }}
                        >
                          {ci === 0 && <span style={{ color: C, fontSize: "9px", fontFamily: "monospace", marginRight: "5px", opacity: 0.6 }}>▸</span>}
                          <span style={{
                            color: ci === 0 ? "#D8D8D0" : (answered && viewMode === "mine" ? C : "#888"),
                            fontWeight: ci === 0 ? "bold" : "normal",
                          }}>
                            {displayVal || <span style={{ color: "#333", fontStyle: "italic" }}>Sin responder</span>}
                          </span>
                          {answered && (
                            <span style={{ position: "absolute", top: "6px", right: "6px", width: "5px", height: "5px", borderRadius: "50%", background: C, opacity: 0.8 }} />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Use case */}
          <div style={{ background: "#0C0C16", border: `1px solid ${C}20`, borderRadius: "5px", padding: "12px 16px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span style={{ color: C, fontFamily: "monospace", fontSize: "9px", whiteSpace: "nowrap", marginTop: "1px", letterSpacing: "1px" }}>CASO DE USO</span>
            <span style={{ fontSize: "12px", color: "#888", lineHeight: 1.5 }}>{matrix.useCase}</span>
          </div>
        </div>

        {/* SIDE PANEL */}
        <div style={{
          width: panelOpen ? "340px" : "0px",
          minWidth: panelOpen ? "340px" : "0px",
          transition: "width 0.3s ease, min-width 0.3s ease",
          overflow: "hidden",
          borderLeft: "1px solid #151520",
          background: "#050509",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
        }}>
          {panelOpen && selected && (
            <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px", height: "100%", overflowY: "auto" }}>
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "monospace", fontSize: "10px", color: C, letterSpacing: "2px" }}>PREGUNTA TRANSVERSAL</div>
                <button onClick={() => setPanelOpen(false)} style={{ background: "none", border: "none", color: "#444", cursor: "pointer", fontSize: "16px", lineHeight: 1, padding: "0" }}>✕</button>
              </div>

              {/* Coordinates */}
              <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#333" }}>
                {matrix.code} · Fila {selected.rowIdx + 1} · Col {selected.colIdx + 1}
              </div>

              {/* The question */}
              <div style={{
                background: `${C}0A`,
                border: `1px solid ${C}30`,
                borderRadius: "6px",
                padding: "14px",
              }}>
                <div style={{ fontFamily: "monospace", fontSize: "9px", color: C, letterSpacing: "1.5px", marginBottom: "8px" }}>PREGUNTA</div>
                <div style={{ fontSize: "14px", lineHeight: 1.6, color: "#D8D8D0", fontStyle: "italic" }}>
                  {selectedQ}
                </div>
              </div>

              {/* Context note */}
              <div style={{ fontSize: "11px", color: "#444", lineHeight: 1.5, fontStyle: "italic" }}>
                Un niño en África, un CEO del S&P 500 y tú tienen la misma pregunta. La respuesta cambia. El algoritmo es el mismo.
              </div>

              {/* Answer input */}
              <div>
                <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#555", marginBottom: "6px", letterSpacing: "1px" }}>TU RESPUESTA</div>
                <textarea
                  ref={textRef}
                  value={draftAnswer}
                  onChange={e => setDraftAnswer(e.target.value)}
                  placeholder="Escribe tu respuesta aquí..."
                  style={{
                    width: "100%", minHeight: "100px",
                    background: "#0C0C18", border: `1px solid ${C}30`,
                    borderRadius: "5px", padding: "10px",
                    color: "#D8D8D0", fontSize: "13px", lineHeight: 1.5,
                    resize: "vertical", fontFamily: "Georgia, serif",
                    outline: "none", boxSizing: "border-box",
                  }}
                  onFocus={e => { e.target.style.borderColor = C; }}
                  onBlur={e => { e.target.style.borderColor = `${C}30`; }}
                />
              </div>

              {/* Example toggle */}
              <div>
                <button
                  onClick={() => setShowExample(!showExample)}
                  style={{
                    background: "none", border: `1px solid #222`, borderRadius: "4px",
                    color: "#555", cursor: "pointer", padding: "6px 10px",
                    fontFamily: "monospace", fontSize: "10px", letterSpacing: "1px",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.target.style.borderColor = "#444"; e.target.style.color = "#888"; }}
                  onMouseLeave={e => { e.target.style.borderColor = "#222"; e.target.style.color = "#555"; }}
                >
                  {showExample ? "OCULTAR" : "VER"} RESPUESTA DEL ECOSISTEMA
                </button>
                {showExample && (
                  <div style={{ marginTop: "10px", background: "#0A0A14", border: "1px solid #1E1E2E", borderRadius: "5px", padding: "10px" }}>
                    <div style={{ fontFamily: "monospace", fontSize: "9px", color: "#444", marginBottom: "6px", letterSpacing: "1px" }}>EJEMPLO (Axis / JJ Company)</div>
                    <div style={{ fontSize: "12px", color: "#777", lineHeight: 1.5 }}>{selectedExample}</div>
                  </div>
                )}
              </div>

              {/* Save button */}
              <button
                onClick={saveAnswer}
                style={{
                  background: `${C}18`, border: `1px solid ${C}60`,
                  borderRadius: "5px", color: C, padding: "10px",
                  cursor: "pointer", fontFamily: "monospace", fontSize: "11px",
                  letterSpacing: "1.5px", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.target.style.background = `${C}28`; }}
                onMouseLeave={e => { e.target.style.background = `${C}18`; }}
              >
                GUARDAR RESPUESTA →
              </button>

              {answers[selected.key] && (
                <button
                  onClick={() => { setAnswers(prev => { const n = {...prev}; delete n[selected.key]; return n; }); setDraftAnswer(""); }}
                  style={{ background: "none", border: "1px solid #1A1A28", borderRadius: "4px", color: "#444", padding: "6px", cursor: "pointer", fontFamily: "monospace", fontSize: "9px", letterSpacing: "1px" }}
                >
                  BORRAR RESPUESTA
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div style={{ borderTop: "1px solid #111", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#050509", flexShrink: 0 }}>
        <button
          onClick={() => go(active === 0 ? MATRICES.length - 1 : active - 1)}
          style={{ background: "transparent", border: "1px solid #1E1E2E", color: "#555", padding: "7px 16px", borderRadius: "4px", cursor: "pointer", fontFamily: "monospace", fontSize: "11px", letterSpacing: "1px", transition: "all 0.2s" }}
          onMouseEnter={e => { e.target.style.borderColor = C; e.target.style.color = C; }}
          onMouseLeave={e => { e.target.style.borderColor = "#1E1E2E"; e.target.style.color = "#555"; }}
        >← ANTERIOR</button>

        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", justifyContent: "center", maxWidth: "280px" }}>
          {MATRICES.map((m, i) => (
            <div key={i} onClick={() => go(i)} style={{
              width: i === active ? "18px" : "5px", height: "5px",
              borderRadius: "3px", background: i === active ? C : "#222",
              cursor: "pointer", transition: "all 0.3s",
            }} />
          ))}
        </div>

        <button
          onClick={() => go(active === MATRICES.length - 1 ? 0 : active + 1)}
          style={{ background: "transparent", border: "1px solid #1E1E2E", color: "#555", padding: "7px 16px", borderRadius: "4px", cursor: "pointer", fontFamily: "monospace", fontSize: "11px", letterSpacing: "1px", transition: "all 0.2s" }}
          onMouseEnter={e => { e.target.style.borderColor = C; e.target.style.color = C; }}
          onMouseLeave={e => { e.target.style.borderColor = "#1E1E2E"; e.target.style.color = "#555"; }}
        >SIGUIENTE →</button>
      </div>
    </div>
  );
}

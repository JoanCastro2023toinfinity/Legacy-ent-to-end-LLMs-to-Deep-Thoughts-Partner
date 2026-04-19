import { useState, useEffect } from "react";

const MATRICES = [
  {
    id: 1,
    code: "G",
    name: "Matriz de Claridad Fractal",
    subtitle: "Matriz G",
    tagline: "No hay caos. Solo fracturas en el nivel equivocado.",
    impact: "Convierte el 'desorden' empresarial en una dirección quirúrgica de intervención.",
    color: "#00FFB2",
    columns: ["Nivel Fractal", "Componente de Recurso", "Indicador de Gobernanza", "Output Esperado"],
    rows: [
      ["Nivel 0: Átomo", "Datos crudos, archivos, prompts.", "Integridad y Accesibilidad", "Repositorio centralizado"],
      ["Nivel 1: Molécula", "Procesos individuales, tareas.", "Repetibilidad y Estándar", "SOP (Procedimiento Estándar)"],
      ["Nivel 2: Organismo", "Flujos de trabajo interconectados.", "Interoperabilidad (API/Human)", "Ecosistema Operativo"],
      ["Nivel 3: Sistema", "Unidades de Negocio completas.", "Rentabilidad y Escalabilidad", "Modelo de Ingresos"],
      ["Nivel 4: Galaxia", "Holding / JJ Company.", "Visión y Legado", "Arquitectura de Marca Madre"],
    ],
    useCase: "Cuando una empresa siente 'caos' a pesar de tener procesos. Identifica en qué nivel fractal está la ruptura.",
  },
  {
    id: 2,
    code: "R",
    name: "Meta-Matriz Renasci",
    subtitle: "Generación de Caminos",
    tagline: "Tu camino no depende de lo que tienes, sino de dónde está la fricción.",
    impact: "Elimina la parálisis por análisis y genera rutas de acción basadas en realidad, no en aspiraciones.",
    color: "#FF6B35",
    columns: ["Fricción / Capacidad", "Baja Capacidad (Recursos Limitados)", "Alta Capacidad (Capital/Equipo)"],
    rows: [
      ["Alta Fricción", "Camino de Guerrilla: Nicho extremo, mensajes hiperpersonalizados.", "Camino de Dominancia: Inversión masiva, adquisición de competencia."],
      ["Media Fricción", "Camino de Especialista: Autoridad basada en Thought Leadership.", "Camino de Expansión: Nuevos mercados mediante alianzas estratégicas."],
      ["Baja Fricción", "Camino de Agilidad: MVP rápido, iteración semanal, captura de demanda.", "Camino de Institución: Estándares de industria, gobernanza a largo plazo."],
    ],
    useCase: "Diagnóstico inicial de una Startup. ¿Qué Path debemos tomar hoy con los recursos que tenemos?",
  },
  {
    id: 3,
    code: "MDS",
    name: "Matriz de Desacoplamiento Sintético",
    subtitle: "Activo-Divisa",
    tagline: "El capital no tiene fronteras. Pero sí tiene capas.",
    impact: "Protege el patrimonio ante devaluaciones y transforma la tesorería en un activo estratégico.",
    color: "#FFD700",
    columns: ["Capa de Activo", "Instrumento de Control", "Objetivo de Gobernanza", "Riesgo Mitigado"],
    rows: [
      ["Capa 1: Operativa", "Pesos (COP) / Cashflow local", "Cubrir costos fijos y nómina", "Liquidez diaria"],
      ["Capa 2: Reserva", "USD / Stablecoins / Offshore", "Preservación de valor frente a devaluación", "Inflación y Riesgo País"],
      ["Capa 3: Arbitraje", "NDFs / Opciones", "Capturar diferenciales de tasas", "Volatilidad del tipo de cambio"],
      ["Capa 4: Equity", "Acciones / Real Estate / IP", "Crecimiento de patrimonio a largo plazo", "Obsolescencia del modelo"],
    ],
    useCase: "Cuando el negocio genera excedentes en moneda débil y se requiere mover capital a estructura global sin perder valor.",
  },
  {
    id: 4,
    code: "CM",
    name: "Matriz de Cargas vs. Modelos",
    subtitle: "Gobernanza de Margen",
    tagline: "El modelo equivocado destruye el margen antes de que cierres tu primer contrato.",
    impact: "Alinea la estructura de costos con el modelo de entrega para que cada vertical sea rentable por diseño.",
    color: "#A78BFA",
    columns: ["Modelo", "Estructura de Costos", "Break-even", "Estrategia de Gobernanza"],
    rows: [
      ["TaaS (Talent as a Service)", "Alto en capital humano (Splendor)", "65% de utilización del equipo", "Optimización de Burn Rate y reclutamiento preventivo"],
      ["Consultoría High-Ticket", "Bajo costo, alto margen intelectual", "1-2 cierres mensuales", "Enfoque en Closing y autoridad de marca"],
      ["SaaS (Productizado)", "Alto desarrollo inicial, bajo marginal", "Volumen de suscripciones (Escala)", "Automatización total y soporte asincrónico"],
    ],
    useCase: "Decidir si un nuevo proyecto se lanza bajo Splendor o como unidad independiente en JJ Company.",
  },
  {
    id: 5,
    code: "VA",
    name: "Matriz de Veto y Aprendizaje",
    subtitle: "Fractalis",
    tagline: "El NO estratégico vale más que mil síes reactivos.",
    impact: "Blindaje contra decisiones urgentes que destruyen el legado. El sistema aprende de cada veto.",
    color: "#F43F5E",
    columns: ["Dimensión de Riesgo", "Criterio de Veto (NO Go)", "Protocolo de Aprendizaje"],
    rows: [
      ["Humano / Energía", "Si la decisión implica 'Heroísmo' (dependencia total de una persona)", "Identificar la falta de sistema y documentar el proceso"],
      ["Capital / Runway", "Si el Burn Rate aumenta sin métrica de ROI claro en 90 días", "Ajuste inmediato de la Matriz de Cargas Fiscales"],
      ["Estratégico / IP", "Si la acción convierte a la entidad en un Commodity (reemplazable por precio)", "Auditoría de la Matriz de Claridad Fractal"],
      ["Ético / Legado", "Si la acción contradice los principios de Capitalismo Consciente", "Sesión de alineación con el Criterio Fundacional"],
    ],
    useCase: "Reuniones de junta directiva donde la urgencia operativa amenaza con desviar la visión a largo plazo.",
  },
  {
    id: 6,
    code: "DS",
    name: "Matriz de Distribución Radical de Capital",
    subtitle: "Splendor Model",
    tagline: "La justicia financiera no es ética. Es matemática.",
    impact: "Elimina capas de gestión innecesaria y pone el capital donde genera valor: el talento y la arquitectura.",
    color: "#34D399",
    columns: ["Porcentaje", "Destino del Recurso", "Función de Gobernanza"],
    rows: [
      ["28%", "Pago Neto al Talento", "Retención de la Propiedad Intelectual y calidad"],
      ["12%", "Parafiscales / Legal", "Cumplimiento y Compliance internacional"],
      ["7%", "Closer de Élite", "Incentivo por adquisición de contratos de alto valor"],
      ["7%", "Campaign Manager", "Ejecución táctica de la célula"],
      ["4%", "Scalable Manager", "Supervisión de la arquitectura de escalabilidad (Renasci)"],
      ["4%", "Vertical Manager", "Gobernanza de la unidad dentro del Holding"],
      ["38%", "Reserva / Estructura", "I+D, reservas en USD (MDS) y margen de la empresa madre"],
    ],
    useCase: "Estructuración de nuevas células operativas cuando se escala un contrato de outsourcing especializado.",
  },
  {
    id: 7,
    code: "PS",
    name: "Matriz de Pinza Sistémica",
    subtitle: "Arquitectura Adaptativa",
    tagline: "Operar en caos no es valentía. Es falta de arquitectura.",
    impact: "Intervención en tiempo real sin detener la operación. La empresa se repara mientras sigue en movimiento.",
    color: "#60A5FA",
    columns: ["Fase", "Hardware (Operación)", "Software (Humano/Criterio)"],
    rows: [
      ["1. Escaneo", "Identificar 'Decision Latency' (retraso en decisiones)", "Identificar niveles de Burnout en el liderazgo"],
      ["2. La Pinza", "Si la operación está rota: Aplicar 'Scalability Sprints'", "Si el liderazgo está quemado: Aplicar 'Micro-Buffers'"],
      ["3. Estabilización", "Documentación de la ejecución sistemática", "Delegación mediante 'Arquitectura de Decisiones'"],
    ],
    useCase: "Intervenciones en empresas Post-Serie A que mueren por entropía operativa a pesar de tener fondeo.",
  },
  {
    id: 8,
    code: "MC",
    name: "Matriz de Integración de Hallazgos",
    subtitle: "Meta-Core",
    tagline: "El mercado siempre te dice la verdad. Tú decides si escuchas.",
    impact: "Convierte los experimentos del mes en sistemas replicables o los descarta antes de que drenan recursos.",
    color: "#F59E0B",
    columns: ["Origen del Hallazgo", "Matriz Relacionada", "Acción de Integración"],
    rows: [
      ["Análisis de Mercado", "Meta-Framework Vita Boma", "Ajuste de liquidez y activos de protección"],
      ["Fricción en Ventas", "Protocolo Singularity", "Calibración de preguntas y labels de negociación"],
      ["Falla de Proceso", "Matriz G (Fractal)", "Descenso al Nivel 0 (Átomo) para corregir el SOP"],
      ["Crecimiento Excesivo", "Algoritmo Renasci", "Creación de nueva Vertical independiente en JJ Company"],
    ],
    useCase: "Sesiones de cierre de mes para decidir si un experimento se convierte en sistema replicable o se descarta.",
  },
  {
    id: 9,
    code: "SG",
    name: "Matriz de Comunicación Estratégica",
    subtitle: "Singularity",
    tagline: "El que controla las preguntas, controla el resultado.",
    impact: "Transforma el cierre de contratos de $25k–$100k en una consecuencia natural de la arquitectura de conversación.",
    color: "#E879F9",
    columns: ["Nivel de Negociación", "Herramienta", "Objetivo"],
    rows: [
      ["Táctico", "Espejo y Etiquetado", "Extraer la 'Frecuencia' (intención real) de la contraparte"],
      ["Estratégico", "Preguntas Calibradas", "Obligar a la contraparte a co-arquitectar la solución"],
      ["De Cierre", "Matriz de ROI Percibido", "Colapsar la distancia entre el precio y el valor generado"],
    ],
    useCase: "Cierre de contratos de alto ticket ($25k–$100k) para servicios de consultoría de escalabilidad.",
  },
  {
    id: 10,
    code: "§",
    name: "Matriz de Resolución Sistémica",
    subtitle: "§ Formula",
    tagline: "Todo problema tiene cuatro variables. El que siempre falla es el tiempo.",
    impact: "Detecta el cuello de botella real en cualquier crisis y genera la palanca de acción de mínimo esfuerzo, máximo impacto.",
    color: "#FB7185",
    columns: ["Variable", "Factor de Influencia", "Punto de Apalancamiento", "Acción de Gobernanza"],
    rows: [
      ["(t) Tiempo", "Latencia de decisión", "Ventana de oportunidad", "Reducción de burocracia mediante automatización"],
      ["(E) Energía", "Capacidad instalada (Humana/Técnica)", "Cuello de botella", "Reasignación de recursos de Splendor"],
      ["(K) Conocimiento", "Propiedad Intelectual disponible", "Brecha de ejecución", "Aplicación de Matriz G (Nivel 1)"],
      ["(R) Resultado", "Impacto en EBITDA / Legado", "ROI Estratégico", "Validación contra la Visión Madre de JJ Co."],
    ],
    useCase: "Situaciones de crisis o pivots donde el costo de oportunidad es más alto que el costo operativo.",
  },
  {
    id: 11,
    code: "DiDs",
    name: "Matriz de Densidad y Disponibilidad",
    subtitle: "Di/Ds",
    tagline: "La riqueza no está en operar más. Está en saber exactamente cuándo no operar.",
    impact: "Protege el capital en mercados volátiles convirtiendo la inacción en una decisión estratégica de alto valor.",
    color: "#2DD4BF",
    columns: ["Zona de Mercado", "Densidad (Di)", "Disponibilidad (Ds)", "Estrategia de Salida"],
    rows: [
      ["Zona de Acumulación", "Alta (Muchos contratos/órdenes)", "Baja (Poca volatilidad)", "Entrada fraccionada (DCA) para no mover el precio"],
      ["Zona de Expansión", "Media", "Alta (Movimiento rápido)", "Ejecución de órdenes de mercado"],
      ["Zona de Distribución", "Alta", "Media-Alta", "Toma de ganancias progresiva (Trailing Stop)"],
      ["Zona de Vacío", "Baja", "Extrema (Gaps de precio)", "No operar (Preservación de capital)"],
    ],
    useCase: "Gestión de tesorería de JJ Company en operaciones de arbitraje o cobertura en mercados de divisas.",
  },
  {
    id: 12,
    code: "CD",
    name: "Matriz de Criterio de Delegación",
    subtitle: "Consigliere",
    tagline: "La autonomía sin criterio es un riesgo. Con criterio, es escalabilidad.",
    impact: "Transforma la microgestión en arquitectura de decisiones, liberando al fundador para operar en Nivel 4.",
    color: "#818CF8",
    columns: ["Nivel de Autonomía", "Requisito de IP", "Sistema de Control", "Riesgo Permitido"],
    rows: [
      ["Nivel 1: Ejecutor", "Acceso a SOP (Nivel 1 Matriz G)", "Reporte Diario", "Cero (Tareas mecánicas)"],
      ["Nivel 2: Gestor", "Manejo de Flujos (Nivel 2 Matriz G)", "KPI Semanal", "Bajo (Errores corregibles en <24h)"],
      ["Nivel 3: Arquitecto", "Visión de Sistema (Nivel 3 Matriz G)", "OKR Mensual", "Medio (Decisiones presupuestarias)"],
      ["Nivel 4: Socio/Líder", "Alineación con el Legado", "Junta de Gobernanza", "Alto (Decisiones de expansión)"],
    ],
    useCase: "Crecimiento del equipo de High-Ticket Closers o al contratar nuevos perfiles para la vertical de Real Estate.",
  },
  {
    id: 13,
    code: "EL",
    name: "Matriz de Eficiencia de Comunicación",
    subtitle: "Protocolo de Latencia",
    tagline: "El canal equivocado destruye más proyectos que cualquier competidor.",
    impact: "Recupera horas de productividad perdidas en ruido comunicacional y devuelve la atención a la creación de valor.",
    color: "#FCD34D",
    columns: ["Tipo de Info", "Canal de Gobernanza", "Tiempo de Respuesta", "Objetivo"],
    rows: [
      ["Crítico/Bloqueante", "Llamada / Sincrónico", "Inmediato", "Resolución de la § Formula"],
      ["Operativo/Proceso", "ClickUp / Asincrónico", "< 4 horas", "Mantener el flujo de la Matriz G"],
      ["Informativo", "Slack / E-mail", "< 24 horas", "Alineación de contexto"],
      ["Estratégico/Idea", "Documento de Estrategia", "Sesión Semanal", "Evaluar para nueva Vertical en JJ Co."],
    ],
    useCase: "Rediseño de la cultura operativa en clientes para restaurar horas de productividad perdidas en ruido.",
  },
  {
    id: 14,
    code: "MT",
    name: "Matriz de Matching de Talento",
    subtitle: "Splendor",
    tagline: "El talento incorrecto no es malo. Solo está en el nivel equivocado.",
    impact: "Elimina el error de contratación más costoso del mercado: el talento técnico con cultura equivocada.",
    color: "#4ADE80",
    columns: ["Dimensión de Ajuste", "Nivel: Ejecutor Técnico", "Nivel: Arquitecto de Solución", "Protocolo de Validación"],
    rows: [
      ["Alineación de IP", "Domina la herramienta (ClickUp/AWS)", "Propone mejoras al sistema existente", "Prueba técnica de estrés (72h)"],
      ["Resonancia de Valores", "Cumple con los KPIs básicos", "Actúa con mentalidad de 'Legacy'", "Entrevista de 'Criterio Consciente'"],
      ["Latencia de Respuesta", "Responde en el tiempo acordado", "Anticipa cuellos de botella", "Simulación de crisis operativa"],
      ["Costo vs. Valor", "Tarifa de mercado (Junior/Mid)", "ROI directo por eficiencia (Senior)", "Auditoría de Margen (Matriz Splendor)"],
    ],
    useCase: "Reclutamiento de élite para clientes internacionales donde el error de contratación cuesta meses de retraso.",
  },
  {
    id: 15,
    code: "GO",
    name: "Matriz de Gobernanza Offshore",
    subtitle: "JJ Company",
    tagline: "No es evasión. Es ingeniería del capital al servicio del propósito.",
    impact: "Estructura el holding para que cada dólar generado en LATAM se multiplique bajo protección global.",
    color: "#38BDF8",
    columns: ["Jurisdicción", "Tipo de Recurso", "Función de la Entidad", "Beneficio de Gobernanza"],
    rows: [
      ["Local (COP)", "Nómina y Gasto Operativo", "Operación del día a día (Front-end)", "Cumplimiento legal doméstico"],
      ["Offshore (USD/Delaware)", "Propiedad Intelectual (IP)", "Holding de Facturación Global", "Protección de activos y baja carga"],
      ["Bancaria (Stripe/Wise/Mercury)", "Pasarelas de Pago", "Recaudación y dispersión rápida", "Agilidad de flujo de caja internacional"],
      ["Cripto/Estable", "Reserva de Emergencia", "Protección contra devaluación súbita", "Inmediatez y arbitraje de divisa"],
    ],
    useCase: "Estructuración de cobros para servicios de consultoría Axis en EE.UU. desde base operativa en LATAM.",
  },
  {
    id: 16,
    code: "CB",
    name: "Matriz de Singularity: Cisnes Negros",
    subtitle: "Black Swan Protocol",
    tagline: "La crisis no es el problema. La falta de protocolo sí lo es.",
    impact: "Convierte los eventos impredecibles en oportunidades de reconfiguración del sistema, no en colapsos.",
    color: "#C084FC",
    columns: ["Fase de la Crisis", "Acción de Mirroring (Espejo)", "Etiquetado del Riesgo (Labeling)", "Pregunta Calibrada de Salida"],
    rows: [
      ["Impacto Inicial", "Repetir los últimos 3 términos del problema", "'Parece que estamos ante una ruptura de confianza/sistema'", "'¿Cómo podemos resolver esto sin comprometer el legado?'"],
      ["Escalamiento", "Silencio táctico tras la respuesta", "'Parece que hay un miedo a perder el control operativo'", "'¿Qué sucede si no tomamos una decisión hoy?'"],
      ["Resolución", "Resumir la posición de la contraparte", "'Siento que valoras más la seguridad que la velocidad'", "'¿Cómo sabemos que este camino es sostenible?'"],
    ],
    useCase: "Negociaciones de rescate de proyectos o conflictos con socios donde las emociones bloquean la lógica.",
  },
  {
    id: 17,
    code: "AX",
    name: "Matriz Axis: El Espejo de Claridad",
    subtitle: "Diagnóstico de Verdad",
    tagline: "La verdad que no quieres ver es exactamente donde está la solución.",
    impact: "Colapsa la distancia entre la narrativa del CEO y la realidad del sistema, activando el cambio real.",
    color: "#F97316",
    columns: ["Pilar de la Empresa", "Realidad Percibida (Lo que dicen)", "Realidad Sistémica (Lo que es)", "La 'Verdad Axis' (El Hallazgo)"],
    rows: [
      ["Estructura", "'Tenemos procesos claros'", "Los procesos dependen de 1 persona", "Fragilidad: No hay sistema, hay heroísmo"],
      ["Estrategia", "'Sabemos hacia dónde vamos'", "Cambian de objetivo cada 15 días", "Entropía: Falta de Matriz de Veto"],
      ["Talento", "'Tenemos al mejor equipo'", "Nadie toma decisiones sin permiso", "Bloqueo: Cultura de miedo/micromanagement"],
      ["Crecimiento", "'Necesitamos más ventas'", "No pueden operar lo que ya vendieron", "Ilusión: El problema es de entrega, no de ventas"],
    ],
    useCase: "Sesión inicial con CEO de empresa Serie A/B para identificar la causa real del estancamiento antes de aplicar Renasci.",
  },
  {
    id: 18,
    code: "TP",
    name: "Matriz de Triangulación de Pain Points",
    subtitle: "UX Transversal & Océanos Azules",
    tagline: "El Océano Azul no se descubre. Se triangula.",
    impact: "Genera diferenciación que no puede ser copiada porque requiere reestructuración profunda de IP.",
    color: "#06B6D4",
    columns: ["Dimensión del Dolor", "UX Tradicional (Fricción)", "UX Transversal (La Brecha)", "Océano Azul (La Solución Axis)"],
    rows: [
      ["Psicológica", "Ansiedad por falta de control o visibilidad", "El usuario siente que el consultor es una 'caja negra'", "Gobernanza Radical: Tableros en tiempo real e IP compartida"],
      ["Operativa", "Procesos manuales, lentos y burocráticos", "El sistema castiga la agilidad para mantener el status quo", "Automatización de Élite: Reducción de latencia a <1 hora"],
      ["Financiera", "Costos ocultos y falta de ROI claro", "El modelo de cobro beneficia al proveedor, no al resultado", "Splendor Model: Alineación de incentivos por hitos de éxito"],
      ["Sistémica", "Soluciones 'parche' que no escalan", "El mercado vende herramientas, no arquitecturas de vida", "Ecosistema Modular: Una estructura que crece con el fundador"],
    ],
    useCase: "Lanzar una nueva vertical o cuando un cliente está estancado en Océano Rojo y necesita un diferencial no copiable.",
  },
  {
    id: 19,
    code: "FT",
    name: "Framework de Transcendencia",
    subtitle: "El Círculo de la § Resolución",
    tagline: "Cualquier sistema humano puede reconstruirse en 10 pasos desde el nivel cero.",
    impact: "La llave universal: desde un niño sembrando en África hasta un gobierno desburocratizando el SPX 500, el algoritmo es el mismo.",
    color: "#A3E635",
    columns: ["Etapa", "Acción Humana y Técnica", "Propósito de Vida"],
    rows: [
      ["1. Circunstancia Actual", "Aceptar la 'Verdad Desnuda' sin juicio (¿Dónde estoy realmente?)", "Honestidad radical con el entorno"],
      ["2. Definición del Desafío", "Nombrar al 'monstruo': ¿Es falta de comida, de orden o de visión?", "Claridad de intención"],
      ["3. Selección de Matriz", "Elegir la herramienta (Ej: Matriz G para hambre, Matriz de Veto para gobierno)", "Aplicación del Criterio"],
      ["4. Resultado Esperado", "Definir el 'Bienestar Mínimo Viable' que queremos alcanzar", "Esperanza basada en datos"],
      ["5. Prueba (Ejecución)", "El salto al vacío. Sembrar la semilla o firmar el contrato.", "Valentía operativa"],
      ["6. Documentar", "Escribir qué pasó. Lo que no se mide se olvida y se repite.", "Construcción de Memoria e IP"],
      ["7. Revisar", "Comparar el resultado con la § Formula (t, E, K, R)", "Discernimiento"],
      ["8. Aprender", "Extraer la 'Pepita de Oro' del error o del éxito", "Sabiduría Sistémica"],
      ["9. Mejorar", "Ajustar el tornillo. Hacerlo 1% más humano, 1% más eficiente.", "Evolución"],
      ["10. Iterar", "Volver a empezar desde una plataforma más alta.", "Legado Infinito"],
    ],
    useCase: "Aplicable a cualquier escala de la experiencia humana: individual, empresarial, gubernamental o civilizacional.",
  },
];

export default function MatricesEcosistema() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(true);

  const matrix = MATRICES[active];

  const go = (idx) => {
    if (idx === active || animating) return;
    setAnimating(true);
    setVisible(false);
    setTimeout(() => {
      setActive(idx);
      setVisible(true);
      setAnimating(false);
    }, 280);
  };

  const prev = () => go(active === 0 ? MATRICES.length - 1 : active - 1);
  const next = () => go(active === MATRICES.length - 1 ? 0 : active + 1);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, animating]);

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#0A0A0F",
      minHeight: "100vh",
      color: "#E8E8E0",
      display: "flex",
      flexDirection: "column",
      padding: "0",
      userSelect: "none",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #1E1E2E",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#07070D",
      }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#555", textTransform: "uppercase", fontFamily: "monospace" }}>
            Axis · Renasci · Splendor · JJ Company
          </div>
          <div style={{ fontSize: "16px", fontWeight: "bold", color: "#E8E8E0", marginTop: "2px", letterSpacing: "1px" }}>
            Ecosistema de Matrices de Gobernanza
          </div>
        </div>
        <div style={{ fontFamily: "monospace", fontSize: "12px", color: "#444" }}>
          {active + 1} / {MATRICES.length}
        </div>
      </div>

      {/* Nav bar */}
      <div style={{
        display: "flex",
        gap: "4px",
        padding: "12px 24px",
        overflowX: "auto",
        borderBottom: "1px solid #1E1E2E",
        scrollbarWidth: "none",
      }}>
        {MATRICES.map((m, i) => (
          <button
            key={m.id}
            onClick={() => go(i)}
            style={{
              flexShrink: 0,
              padding: "5px 10px",
              borderRadius: "4px",
              border: i === active ? `1px solid ${m.color}` : "1px solid #222",
              background: i === active ? `${m.color}18` : "transparent",
              color: i === active ? m.color : "#555",
              fontFamily: "monospace",
              fontSize: "11px",
              cursor: "pointer",
              transition: "all 0.2s",
              letterSpacing: "0.5px",
            }}
          >
            {m.code}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div style={{
        flex: 1,
        padding: "28px 24px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 0.28s ease, transform 0.28s ease",
      }}>
        {/* Title block */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px", flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "monospace",
              fontSize: "11px",
              color: matrix.color,
              letterSpacing: "2px",
              background: `${matrix.color}15`,
              border: `1px solid ${matrix.color}40`,
              padding: "3px 8px",
              borderRadius: "3px",
            }}>
              {matrix.subtitle}
            </span>
          </div>
          <h1 style={{
            fontSize: "26px",
            fontWeight: "bold",
            margin: "8px 0 4px",
            color: "#F0F0E8",
            letterSpacing: "0.3px",
            lineHeight: 1.2,
          }}>
            {matrix.name}
          </h1>
          {/* Tagline */}
          <div style={{
            borderLeft: `3px solid ${matrix.color}`,
            paddingLeft: "14px",
            margin: "14px 0 8px",
          }}>
            <div style={{
              fontSize: "17px",
              fontStyle: "italic",
              color: matrix.color,
              lineHeight: 1.4,
            }}>
              "{matrix.tagline}"
            </div>
          </div>
          <div style={{
            fontSize: "13px",
            color: "#888",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}>
            <span style={{ color: "#AAA", fontWeight: "bold" }}>Valor único: </span>{matrix.impact}
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto", marginBottom: "20px" }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "13px",
            minWidth: "600px",
          }}>
            <thead>
              <tr>
                {matrix.columns.map((col, i) => (
                  <th key={i} style={{
                    textAlign: "left",
                    padding: "10px 14px",
                    background: `${matrix.color}12`,
                    borderBottom: `2px solid ${matrix.color}50`,
                    color: matrix.color,
                    fontFamily: "monospace",
                    fontSize: "11px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                  }}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrix.rows.map((row, ri) => (
                <tr key={ri} style={{
                  background: ri % 2 === 0 ? "#0D0D16" : "#0A0A12",
                  transition: "background 0.15s",
                }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{
                      padding: "11px 14px",
                      borderBottom: "1px solid #1A1A28",
                      color: ci === 0 ? "#E0E0D8" : "#999",
                      fontWeight: ci === 0 ? "bold" : "normal",
                      lineHeight: 1.45,
                      verticalAlign: "top",
                    }}>
                      {ci === 0 ? (
                        <span style={{
                          color: matrix.color,
                          fontSize: "10px",
                          fontFamily: "monospace",
                          marginRight: "6px",
                          opacity: 0.7,
                        }}>▸</span>
                      ) : null}
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Use case */}
        <div style={{
          background: "#0D0D18",
          border: `1px solid ${matrix.color}25`,
          borderRadius: "6px",
          padding: "14px 18px",
          display: "flex",
          gap: "12px",
          alignItems: "flex-start",
          maxWidth: "800px",
        }}>
          <span style={{ color: matrix.color, fontFamily: "monospace", fontSize: "11px", whiteSpace: "nowrap", marginTop: "1px" }}>
            CASO DE USO
          </span>
          <span style={{ fontSize: "13px", color: "#AAA", lineHeight: 1.5 }}>
            {matrix.useCase}
          </span>
        </div>
      </div>

      {/* Footer nav */}
      <div style={{
        borderTop: "1px solid #1E1E2E",
        padding: "14px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#07070D",
      }}>
        <button onClick={prev} style={{
          background: "transparent",
          border: "1px solid #333",
          color: "#777",
          padding: "8px 20px",
          borderRadius: "4px",
          cursor: "pointer",
          fontFamily: "monospace",
          fontSize: "12px",
          letterSpacing: "1px",
          transition: "all 0.2s",
        }}
          onMouseEnter={e => { e.target.style.borderColor = matrix.color; e.target.style.color = matrix.color; }}
          onMouseLeave={e => { e.target.style.borderColor = "#333"; e.target.style.color = "#777"; }}
        >
          ← ANTERIOR
        </button>

        {/* Progress dots */}
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", justifyContent: "center", maxWidth: "300px" }}>
          {MATRICES.map((m, i) => (
            <div
              key={i}
              onClick={() => go(i)}
              style={{
                width: i === active ? "20px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === active ? matrix.color : "#333",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>

        <button onClick={next} style={{
          background: "transparent",
          border: "1px solid #333",
          color: "#777",
          padding: "8px 20px",
          borderRadius: "4px",
          cursor: "pointer",
          fontFamily: "monospace",
          fontSize: "12px",
          letterSpacing: "1px",
          transition: "all 0.2s",
        }}
          onMouseEnter={e => { e.target.style.borderColor = matrix.color; e.target.style.color = matrix.color; }}
          onMouseLeave={e => { e.target.style.borderColor = "#333"; e.target.style.color = "#777"; }}
        >
          SIGUIENTE →
        </button>
      </div>
    </div>
  );
}

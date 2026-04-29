export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  status: 'En producción' | 'Completado' | 'En desarrollo';
  year: string;
  role: string;
  features: { icon: string; title: string; description: string }[];
  highlights: string[];
}

export const projectsData: Project[] = [
  {
    id: 'tramitar',
    title: 'TramitAR',
    subtitle: 'Plataforma Inteligente de Gestión Ciudadana',
    description:
      'Plataforma conversacional 24/7 para trámites municipales. Chat con historial persistente, sistema de turnos online, seguimiento de solicitudes en tiempo real y panel administrativo para agentes.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Socket.io', 'JWT'],
    github: '',
    demo: '#',
    status: 'Completado',
    year: '2024',
    role: 'Fullstack Developer',
    features: [
      { icon: '💬', title: 'Chat 24/7 con historial', description: 'WebSockets en tiempo real con historial persistente por usuario y adjunto de documentos.' },
      { icon: '📅', title: 'Turnos Online', description: 'Calendario interactivo con confirmación automática por email y recordatorios 24 hs antes.' },
      { icon: '📋', title: 'Seguimiento de Trámites', description: 'Timeline de estados: Ingresado → En revisión → Aprobado con código único de consulta.' },
      { icon: '👥', title: 'Panel Administrativo', description: 'Cola de solicitudes, asignación a agentes, filtros avanzados y exportación a Excel/PDF.' },
      { icon: '🔐', title: 'Autenticación y Roles', description: 'JWT + Refresh Tokens. Roles: ciudadano, agente y administrador con permisos diferenciados.' },
      { icon: '📊', title: 'Reportes y Estadísticas', description: 'Tiempo promedio de resolución, carga por agente y tasa de satisfacción ciudadana.' },
    ],
    highlights: [
      'Reducción del 60% en llamadas al centro de atención ciudadana',
      'Más de 1.200 trámites digitalizados en los primeros 3 meses',
      'Tiempo de resolución reducido de 5 días a 48 horas',
    ],
  },
  {
    id: 'osde',
    title: 'MediGest',
    subtitle: 'Sistema de Gestión Médica · OSDE',
    description:
      'Software integral para administración de pacientes, historia clínica digital, agenda de turnos médicos con validación de superposición, emisión de órdenes en PDF y reportes de gestión sanitaria.',
    tags: ['React', 'JavaScript', 'PHP', 'MySQL', 'FPDF', 'Bootstrap'],
    github: '#',
    status: 'Completado',
    year: '2023',
    role: 'Fullstack Developer · Prácticas Profesionalizantes',
    features: [
      { icon: '🏥', title: 'Historia Clínica Digital', description: 'Consultas, diagnósticos CIE-10, medicamentos y estudios adjuntos. Acceso controlado por especialidad.' },
      { icon: '📆', title: 'Agenda de Turnos', description: 'Validación de superposición, vista semanal por médico y reprogramación desde el panel del paciente.' },
      { icon: '💊', title: 'Órdenes Médicas PDF', description: 'Generación automática con código QR de validación, datos del afiliado y cobertura aplicada.' },
      { icon: '🛡️', title: 'Control de Cobertura', description: 'Consulta en tiempo real del plan, co-pago y prestaciones cubiertas antes de confirmar el turno.' },
      { icon: '👨‍⚕️', title: 'Gestión de Médicos', description: 'ABM de médicos, especialidades, centros y horarios. Validación de matrícula profesional.' },
      { icon: '📈', title: 'Reportes de Gestión', description: 'Ocupación por especialidad, ausentismo y tendencia mensual exportables a Excel.' },
    ],
    highlights: [
      'Eliminación del 100% del registro en papel en el centro piloto',
      'Reducción del 35% en errores de cobertura en el momento de la consulta',
      'Implementado en 2 centros de atención durante las prácticas',
    ],
  },
  {
    id: 'stock',
    title: 'Boltz',
    subtitle: 'Gestión de stock en Tiempo Real',
    description:
      'Aplicación web para administrar productos con SKU, controlar entradas y salidas, gestionar proveedores y órdenes de compra, roles de usuario y alertas automáticas de bajo stock.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Recharts'],
    github: 'https://github.com/Nazaaa7/Boltz-Stock.git',
    demo: '#',
    status: 'En producción',
    year: '2024',
    role: 'Fullstack Developer',
    features: [
      { icon: '📦', title: 'ABM de Productos', description: 'SKU, categoría, unidad de medida, stock mínimo, costo y precio de venta. Carga masiva por CSV.' },
      { icon: '🔄', title: 'Movimientos de Inventario', description: 'Entradas (compra, ajuste) y salidas (venta, merma) con responsable y comprobante asociado.' },
      { icon: '🚨', title: 'Alertas de Bajo Stock', description: 'Notificaciones en tiempo real (toast + email) al alcanzar el stock mínimo configurado.' },
      { icon: '🏢', title: 'Gestión de Proveedores', description: 'Órdenes de compra que actualizan el stock automáticamente al ser recibidas y aprobadas.' },
      { icon: '👥', title: 'Roles y Auditoría', description: 'Administrador, Operador y Auditor. Log completo de cada acción con timestamp y usuario.' },
      { icon: '📊', title: 'Reportes de Inventario', description: 'Valor total del stock, rotación por categoría, artículos sin movimiento y exportación a PDF.' },
    ],
    highlights: [
      'Inventario valorizado en tiempo real sin cierres manuales',
      'Reducción del 80% del tiempo de conteo mensual con reportes automáticos',
      'Cero pérdidas por desabastecimiento desde la implementación',
    ],
  },
  {
    id: 'ventas',
    title: 'SalesLens',
    subtitle: 'Dashboard Analítico de Ventas',
    description:
      'Panel de control interactivo con gráficos dinámicos, filtros multidimensionales por fecha/vendedor/categoría, comparativa de períodos, rankings y exportación de reportes a PDF y Excel.',
    tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'Pandas', 'Recharts'],
    github: '#',
    demo: '#',
    status: 'Completado',
    year: '2024',
    role: 'Fullstack Developer',
    features: [
      { icon: '📈', title: 'Gráficos Interactivos', description: 'Líneas de tendencia, barras comparativas, tortas de participación con zoom en rangos de fecha.' },
      { icon: '🔍', title: 'Filtros Multidimensionales', description: 'Filtrado simultáneo por fecha, vendedor, categoría, canal de venta y región geográfica.' },
      { icon: '📅', title: 'Comparativa de Períodos', description: 'Dos períodos lado a lado con indicadores de variación porcentual y flechas de tendencia.' },
      { icon: '🏆', title: 'Rankings Top N', description: 'Top productos, vendedores y clientes por facturación, unidades o margen. Configurable dinámicamente.' },
      { icon: '⚙️', title: 'Pipeline ETL Python', description: 'FastAPI + Pandas procesa CSV, APIs externas o PostgreSQL. Limpieza y normalización automática.' },
      { icon: '📤', title: 'Exportación de Reportes', description: 'Cualquier vista exportable a PDF (diseño fiel) o Excel con formatos condicionales preservados.' },
    ],
    highlights: [
      'Procesamiento de 500K+ registros en menos de 2 segundos con Pandas',
      'Reducción del 90% del tiempo de elaboración de reportes semanales',
      'Identificación de producto estrella con 3x más margen que el promedio',
    ],
  },
  {
    id: 'logistica',
    title: 'TrackRoute',
    subtitle: 'Logística E-commerce · Seguimiento de Envíos',
    description:
      'Sistema para rastrear entregas en tiempo real, gestionar rutas de repartidores con mapa interactivo, visualizar incidentes geolocalizados y notificar al cliente en cada etapa del envío.',
    tags: ['React', 'TypeScript', 'Mapbox GL', 'Node.js', 'Socket.io', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    status: 'En producción',
    year: '2024',
    role: 'Frontend Lead · Integración de mapas',
    features: [
      { icon: '🗺️', title: 'Mapa Interactivo en Vivo', description: 'Mapbox GL con posición de repartidores actualizada cada 10 s vía WebSockets. Clustering de pines.' },
      { icon: '📍', title: 'Seguimiento del Cliente', description: 'Link único por pedido con mapa embebido, ETA dinámico y timeline de estados sin login.' },
      { icon: '🚚', title: 'Gestión de Rutas', description: 'Asignación de pedidos a repartidores con optimización de ruta, capacidad máxima y orden de entrega.' },
      { icon: '⚠️', title: 'Gestión de Incidentes', description: 'Registro de novedades (dirección incorrecta, ausente, averiado) con foto adjunta y reasignación.' },
      { icon: '🔔', title: 'Notificaciones Push', description: 'WhatsApp + email al cliente en cada cambio de estado: En camino, Llegando, Entregado, Fallido.' },
      { icon: '📊', title: 'Métricas de Entrega', description: 'Tasa de éxito por zona, tiempo promedio de entrega, incidentes por repartidor y mapa de calor.' },
    ],
    highlights: [
      'Tasa de entrega exitosa del 94% gracias a notificaciones proactivas al cliente',
      'Reducción del 25% en km recorridos con optimización de rutas',
      'Gestión simultánea de 80+ repartidores en tiempo real sin degradación',
    ],
  },
  {
    id: 'finanzas',
    title: 'MisFi',
    subtitle: 'Gestión de Finanzas Personales',
    description:
      'Aplicación de finanzas personales con registro de ingresos y gastos por categoría, presupuestos mensuales con alertas, gráficos de evolución patrimonial y metas de ahorro con progreso visual.',
    tags: ['React', 'TypeScript', 'Supabase', 'Recharts', 'Tailwind CSS', 'PWA'],
    github: 'https://github.com/Nazaaa7/MisFi.git',
    demo: '#',
    status: 'Completado',
    year: '2025',
    role: 'Fullstack Developer · Diseño UX',
    features: [
      { icon: '💰', title: 'Registro de Movimientos', description: 'Ingreso rápido de gastos e ingresos con categoría, etiquetas, recurrencia y foto de comprobante.' },
      { icon: '🎯', title: 'Presupuestos por Categoría', description: 'Límite mensual por categoría con barra de progreso y alerta al alcanzar el 80% del presupuesto.' },
      { icon: '📊', title: 'Dashboard Patrimonial', description: 'Evolución del saldo neto, balance mensual y distribución del gasto en gráfico de torta interactivo.' },
      { icon: '🏦', title: 'Cuentas y Tarjetas', description: 'Múltiples cuentas (efectivo, banco, tarjeta) con saldo actualizado y transferencias entre cuentas.' },
      { icon: '🎪', title: 'Metas de Ahorro', description: 'Objetivo con nombre, monto y fecha límite. Aportes manuales o automáticos con progreso visual.' },
      { icon: '📱', title: 'PWA Offline-first', description: 'Instalable en cualquier dispositivo. Los movimientos se sincronizan automáticamente al recuperar conexión.' },
    ],
    highlights: [
      'Sincronización offline-first con Supabase Realtime y caché local',
      'Usuarios reportan ahorro promedio del 15% al primer mes de uso',
      'Lighthouse score 98/100 en Performance y 100 en Accessibility',
    ],
  },
];
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  features: { icon: string; title: string }[];
  github: string;
  deploy?: string;
  status: 'En producción' | 'Completado' | 'En desarrollo';
  year: string;
  role: string;
}

export const projectsData: Project[] = [
  {
    id: 'tramitar',
    title: 'TramitAR',
    subtitle: 'Sistema de Gestión Municipal',
    description:
      'Plataforma integral para la gestión de trámites ciudadanos. Chat asistido, turnos online y panel administrativo para municipios.',
    highlights: [
      'Chat ciudadano con seguimiento de trámites en tiempo real',
      'Panel admin con cola de trámites y estados',
      'Sistema de turnos integrado',
    ],
    tags: ['React', 'TypeScript', 'Node.js'],
    features: [
      { icon: 'MessageSquare', title: 'Chat ciudadano' },
      { icon: 'ClipboardList',  title: 'Gestión de trámites' },
      { icon: 'CalendarCheck',  title: 'Turnos online' },
      { icon: 'Settings2',      title: 'Panel admin' },
    ],
    github: 'https://github.com/orgs/PoliTechForm/repositories',
    status: 'En producción',
    year: '2024',
    role: 'Full Stack Developer',
  },
  {
    id: 'logitrack',
    title: 'LogiTrack',
    subtitle: 'Sistema Logístico en Tiempo Real',
    description:
      'Sistema de tracking logístico con mapa en tiempo real, gestión de envíos y seguimiento de repartidores.',
    highlights: [
      'Mapa en tiempo real con ubicación de repartidores',
      'Gestión de estados de envíos (en camino, entregado, incidente)',
      'Panel de métricas y rendimiento de flota',
    ],
    tags: ['React', 'TypeScript', 'Maps API'],
    features: [
      { icon: 'Map',      title: 'Mapa en vivo' },
      { icon: 'Truck',    title: 'Tracking de envíos' },
      { icon: 'BarChart2', title: 'Métricas de flota' },
    ],
    github: 'https://github.com/Nazaaa7/LogiTrack',
    status: 'Completado',
    year: '2024',
    role: 'Frontend Developer',
  },
  {
    id: 'boltz',
    title: 'Boltz',
    subtitle: 'Gestión de Stock en Tiempo Real',
    description:
      'Aplicación web de inventario construida con React 18 + TypeScript + Vite. Sin backend: todos los datos persisten en localStorage via Zustand.',
    highlights: [
      'CRUD completo de productos con alertas de stock mínimo',
      'Registro de movimientos (entradas, salidas, ajustes)',
      'Persistencia offline con Zustand + localStorage',
    ],
    tags: ['React 18', 'TypeScript', 'Vite', 'Zustand'],
    features: [
      { icon: 'Package',       title: 'Inventario' },
      { icon: 'RefreshCw',     title: 'Movimientos' },
      { icon: 'AlertTriangle', title: 'Alertas de stock' },
      { icon: 'HardDrive',     title: 'Offline-first' },
    ],
    github: 'https://github.com/Nazaaa7/Boltz-Stock',
    status: 'Completado',
    year: '2024',
    role: 'Frontend Developer',
  },
  {
    id: 'misfi',
    title: 'MisFi',
    subtitle: 'Gestión de Finanzas Personales',
    description:
      'Aplicación web de finanzas personales construida con React 18 + TypeScript + Vite. Datos persistidos en localStorage, sin necesidad de backend.',
    highlights: [
      'Registro de ingresos y gastos por categoría',
      'Presupuestos mensuales con indicadores visuales',
      'Metas de ahorro con seguimiento de progreso',
    ],
    tags: ['React 18', 'TypeScript', 'Vite', 'Zustand'],
    features: [
      { icon: 'DollarSign', title: 'Balance total' },
      { icon: 'Target',     title: 'Presupuestos' },
      { icon: 'Star',       title: 'Metas de ahorro' },
      { icon: 'TrendingUp', title: 'Historial' },
    ],
    github: 'https://github.com/Nazaaa7/MisFi',
    status: 'Completado',
    year: '2024',
    role: 'Frontend Developer',
  },
  {
    id: 'charm',
    title: 'Charm Accesorios',
    subtitle: 'Catálogo Digital para Emprendimiento',
    description:
      'Catálogo web para un emprendimiento de maquillaje y accesorios. Diseño orientado a la conversión con navegación por categorías.',
    highlights: [
      'Catálogo de productos con filtros por categoría',
      'Diseño visual pensado para impulsar ventas',
      'Optimizado para dispositivos móviles',
    ],
    tags: ['React', 'TypeScript', 'Vite'],
    features: [
      { icon: 'Sparkles',   title: 'Catálogo' },
      { icon: 'Search',     title: 'Filtros' },
      { icon: 'Smartphone', title: 'Mobile-first' },
    ],
    github: 'https://github.com/Nazaaa7/Charm-accesorios',
    status: 'Completado',
    year: '2024',
    role: 'Frontend Developer',
  },
  {
    id: 'habitflow',
    title: 'HabitFlow',
    subtitle: 'Tracker de Hábitos Diarios',
    description:
      'Aplicación para construir y mantener hábitos con rachas, estadísticas semanales y recordatorios. Sin backend — datos persistidos con Zustand + localStorage.',
    highlights: [
      'Seguimiento diario con rachas y porcentaje de cumplimiento',
      'Estadísticas semanales y mensuales por hábito',
      'Persistencia offline con Zustand + localStorage',
    ],
    tags: ['React 18', 'TypeScript', 'Vite', 'Zustand'],
    features: [
      { icon: 'CheckSquare', title: 'Check diario' },
      { icon: 'Flame',       title: 'Rachas' },
      { icon: 'LineChart',   title: 'Estadísticas' },
      { icon: 'HardDrive',   title: 'Offline-first' },
    ],
    github: 'https://github.com/Nazaaa7/HabitFlow',
    status: 'En desarrollo',
    year: '2025',
    role: 'Frontend Developer',
  },
];
import { useState } from 'react';
import {
  Send, Search, Bell, CheckCircle, Clock, FileText, Users, BarChart2,
  Package, AlertTriangle, Truck, MapPin, TrendingUp, TrendingDown,
  DollarSign, ShoppingCart, ArrowUp, ArrowDown, X, Plus, Filter,
  Home, Wallet, Target, PieChart, ChevronRight, Activity, Star,
  Navigation, Map, Layers, Zap, Shield, Database,
} from 'lucide-react';

/* ─── Shared micro-components ─── */
const Badge = ({ children, color = 'sky' }: { children: React.ReactNode; color?: string }) => {
  const map: Record<string, string> = {
    sky: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
    green: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    amber: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    red: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
    slate: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
    violet: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${map[color] ?? map.sky}`}>
      {children}
    </span>
  );
};

const KpiCard = ({ icon: Icon, label, value, delta, color = 'sky' }: {
  icon: React.ElementType; label: string; value: string; delta?: string; color?: string;
}) => {
  const iconColors: Record<string, string> = {
    sky: 'text-sky-500', green: 'text-emerald-500', amber: 'text-amber-500',
    violet: 'text-violet-500', red: 'text-red-500',
  };
  return (
    <div className="bg-white dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
      <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-700 ${iconColors[color] ?? iconColors.sky}`}>
        <Icon size={18} />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{label}</p>
        <p className="text-xl font-bold text-slate-800 dark:text-white leading-tight">{value}</p>
        {delta && (
          <p className={`text-xs font-medium mt-0.5 ${delta.startsWith('+') ? 'text-emerald-500' : 'text-red-400'}`}>
            {delta} vs mes anterior
          </p>
        )}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   1. TramitAR – Chat ciudadano
══════════════════════════════════════════════ */
const tramitarMessages = [
  { from: 'bot', text: '¡Hola! Soy el asistente virtual del Municipio. ¿En qué puedo ayudarte hoy?' },
  { from: 'user', text: 'Necesito sacar un turno para renovar el DNI' },
  { from: 'bot', text: 'Perfecto. Tengo disponibilidad esta semana:\n• Martes 22/07 – 09:30\n• Miércoles 23/07 – 11:00\n• Jueves 24/07 – 16:30\n¿Cuál te viene mejor?' },
  { from: 'user', text: 'Miércoles 11:00 por favor' },
  { from: 'bot', text: '✅ Turno confirmado para el miércoles 23/07 a las 11:00 hs.\nTe envié el comprobante por email. ¿Necesitás algo más?' },
];

const tramitarStats = [
  { label: 'Trámites activos', value: '1.243', icon: FileText, color: 'sky' },
  { label: 'Turnos hoy', value: '89', icon: Clock, color: 'amber' },
  { label: 'Resueltos', value: '97%', icon: CheckCircle, color: 'green' },
  { label: 'Agentes online', value: '12', icon: Users, color: 'violet' },
];

export function TramitARView() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(tramitarMessages);
  const [tab, setTab] = useState<'chat' | 'admin'>('chat');

  const tramites = [
    { id: 'TRM-2024-001', tipo: 'Habilitación Comercial', estado: 'En revisión', fecha: '18/07', color: 'amber' },
    { id: 'TRM-2024-002', tipo: 'Libre deuda municipal', estado: 'Aprobado', fecha: '15/07', color: 'green' },
    { id: 'TRM-2024-003', tipo: 'Permiso de obra', estado: 'Ingresado', fecha: '20/07', color: 'sky' },
    { id: 'TRM-2024-004', tipo: 'Certificado catastral', estado: 'Aprobado', fecha: '10/07', color: 'green' },
  ];

  const send = () => {
    if (!input.trim()) return;
    setMessages(m => [...m, { from: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
      setMessages(m => [...m, { from: 'bot', text: 'Entendido. Un agente revisará tu consulta en breve. Código de seguimiento: #TRM-2024-099.' }]);
    }, 900);
  };

  return (
    <div className="flex flex-col h-full gap-4">
      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 shrink-0">
        {tramitarStats.map(s => (
          <KpiCard key={s.label} icon={s.icon} label={s.label} value={s.value} color={s.color} />
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 shrink-0">
        {(['chat', 'admin'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${tab === t ? 'bg-sky-500 text-white' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'}`}
          >
            {t === 'chat' ? '💬 Chat Ciudadano' : '🛠 Panel Admin'}
          </button>
        ))}
      </div>

      {tab === 'chat' ? (
        <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden min-h-0">
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.from === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center text-white text-xs font-bold mr-2 mt-1 shrink-0">M</div>
                )}
                <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
                  m.from === 'user'
                    ? 'bg-sky-500 text-white rounded-tr-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-sm'
                }`}>{m.text}</div>
              </div>
            ))}
          </div>
          {/* Input */}
          <div className="border-t border-slate-200 dark:border-slate-700 p-3 flex gap-2">
            <input
              className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 text-sm outline-none text-slate-800 dark:text-white placeholder:text-slate-400"
              placeholder="Escribí tu consulta..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
            />
            <button onClick={send} className="bg-sky-500 hover:bg-sky-600 text-white p-2.5 rounded-full transition-colors">
              <Send size={16} />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden min-h-0 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0">
            <p className="font-bold text-slate-700 dark:text-white text-sm">Cola de Trámites</p>
            <div className="flex gap-2">
              <Badge color="amber">4 pendientes</Badge>
              <button className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500"><Filter size={14} /></button>
            </div>
          </div>
          <div className="overflow-y-auto flex-1">
            {tramites.map(t => (
              <div key={t.id} className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">{t.tipo}</p>
                  <p className="text-xs text-slate-400">{t.id} · {t.fecha}/2024</p>
                </div>
                <Badge color={t.color as 'amber' | 'green' | 'sky'}>{t.estado}</Badge>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════
   2. MediGest – Sistema médico OSDE
══════════════════════════════════════════════ */
const pacientes = [
  { nombre: 'García, María Elena', plan: 'OSDE 310', proximoTurno: 'Martes 22/07 · Cardiología', estado: 'Activo' },
  { nombre: 'López, Roberto A.', plan: 'OSDE 210', proximoTurno: 'Jueves 24/07 · Clínica', estado: 'Activo' },
  { nombre: 'Fernández, Ana P.', plan: 'OSDE 410', proximoTurno: 'Sin turno asignado', estado: 'Inactivo' },
  { nombre: 'Martínez, Jorge L.', plan: 'OSDE 310', proximoTurno: 'Viernes 25/07 · Pediatría', estado: 'Activo' },
];

const turnos = [
  { hora: '09:00', paciente: 'García, M.', medico: 'Dr. Pérez', especialidad: 'Cardiología', estado: 'Confirmado', color: 'green' },
  { hora: '09:30', paciente: 'Ruiz, C.', medico: 'Dra. Gómez', especialidad: 'Pediatría', estado: 'Confirmado', color: 'green' },
  { hora: '10:00', paciente: 'Torres, F.', medico: 'Dr. Silva', especialidad: 'Clínica Médica', estado: 'En curso', color: 'sky' },
  { hora: '10:30', paciente: 'Díaz, M.', medico: 'Dr. Pérez', especialidad: 'Cardiología', estado: 'Pendiente', color: 'amber' },
  { hora: '11:00', paciente: 'Vega, R.', medico: 'Dra. Luna', especialidad: 'Dermatología', estado: 'Pendiente', color: 'amber' },
];

export function OSDEView() {
  const [tab, setTab] = useState<'agenda' | 'pacientes' | 'hc'>('agenda');

  return (
    <div className="flex flex-col h-full gap-4">
      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 shrink-0">
        <KpiCard icon={Users} label="Pacientes activos" value="3.847" color="sky" />
        <KpiCard icon={Clock} label="Turnos hoy" value="142" color="amber" />
        <KpiCard icon={CheckCircle} label="Atendidos" value="89" color="green" />
        <KpiCard icon={AlertTriangle} label="Ausentes" value="7" color="red" />
      </div>

      <div className="flex gap-2 shrink-0">
        {(['agenda', 'pacientes', 'hc'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${tab === t ? 'bg-emerald-500 text-white' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'}`}>
            {t === 'agenda' ? '📅 Agenda' : t === 'pacientes' ? '👥 Pacientes' : '📋 Historia Clínica'}
          </button>
        ))}
      </div>

      <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden min-h-0 flex flex-col">
        {tab === 'agenda' && (
          <>
            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between shrink-0">
              <p className="font-bold text-sm text-slate-700 dark:text-white">Agenda · Martes 22 de Julio</p>
              <Badge color="sky">5 turnos</Badge>
            </div>
            <div className="overflow-y-auto flex-1">
              {turnos.map((t, i) => (
                <div key={i} className="flex items-center gap-4 px-4 py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <span className="text-sm font-mono font-bold text-slate-500 dark:text-slate-400 w-12 shrink-0">{t.hora}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">{t.paciente}</p>
                    <p className="text-xs text-slate-400 truncate">{t.medico} · {t.especialidad}</p>
                  </div>
                  <Badge color={t.color as 'green' | 'sky' | 'amber'}>{t.estado}</Badge>
                </div>
              ))}
            </div>
          </>
        )}
        {tab === 'pacientes' && (
          <>
            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2 shrink-0">
              <Search size={15} className="text-slate-400" />
              <input className="flex-1 text-sm outline-none bg-transparent text-slate-700 dark:text-white placeholder:text-slate-400" placeholder="Buscar paciente..." />
            </div>
            <div className="overflow-y-auto flex-1">
              {pacientes.map((p, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 text-xs font-bold">
                      {p.nombre[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-white">{p.nombre}</p>
                      <p className="text-xs text-slate-400">{p.plan} · {p.proximoTurno}</p>
                    </div>
                  </div>
                  <Badge color={p.estado === 'Activo' ? 'green' : 'slate'}>{p.estado}</Badge>
                </div>
              ))}
            </div>
          </>
        )}
        {tab === 'hc' && (
          <div className="p-4 overflow-y-auto flex-1">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 font-bold">G</div>
              <div>
                <p className="font-bold text-slate-800 dark:text-white">García, María Elena</p>
                <p className="text-xs text-slate-400">OSDE 310 · Afiliada activa · 54 años</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { fecha: '18/07/2024', medico: 'Dr. Pérez', especialidad: 'Cardiología', diagnostico: 'HTA controlada (I10)', indicaciones: 'Enalapril 10mg. Control en 30 días.' },
                { fecha: '03/06/2024', medico: 'Dra. Gómez', especialidad: 'Clínica Médica', diagnostico: 'Control anual (Z00.0)', indicaciones: 'Laboratorio completo. Sin novedades.' },
              ].map((c, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{c.especialidad}</p>
                    <p className="text-xs text-slate-400">{c.fecha}</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-white">{c.diagnostico}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{c.indicaciones}</p>
                  <p className="text-xs text-slate-400 mt-1">{c.medico}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   3. StockFlow – Inventario
══════════════════════════════════════════════ */
const productos = [
  { sku: 'PRD-001', nombre: 'Notebook Dell Inspiron 15', categoria: 'Electrónica', stock: 3, minimo: 5, precio: '$850.000', estado: 'critical' },
  { sku: 'PRD-002', nombre: 'Monitor LG 24" FHD', categoria: 'Electrónica', stock: 12, minimo: 4, precio: '$320.000', estado: 'ok' },
  { sku: 'PRD-003', nombre: 'Teclado Mecánico Redragon', categoria: 'Periféricos', stock: 4, minimo: 6, precio: '$85.000', estado: 'warning' },
  { sku: 'PRD-004', nombre: 'Mouse Logitech MX Master', categoria: 'Periféricos', stock: 18, minimo: 5, precio: '$72.000', estado: 'ok' },
  { sku: 'PRD-005', nombre: 'Headset HyperX Cloud II', categoria: 'Audio', stock: 2, minimo: 4, precio: '$110.000', estado: 'critical' },
];

const movimientos = [
  { tipo: 'Entrada', producto: 'Monitor LG 24"', cantidad: 10, usuario: 'admin', fecha: '22/07 09:15' },
  { tipo: 'Salida', producto: 'Teclado Mecánico', cantidad: 2, usuario: 'operador1', fecha: '22/07 10:30' },
  { tipo: 'Entrada', producto: 'Mouse Logitech', cantidad: 5, usuario: 'admin', fecha: '21/07 16:00' },
  { tipo: 'Ajuste', producto: 'Headset HyperX', cantidad: -1, usuario: 'auditor', fecha: '21/07 11:00' },
];

export function StockView() {
  const [tab, setTab] = useState<'productos' | 'movimientos' | 'alertas'>('productos');

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 shrink-0">
        <KpiCard icon={Package} label="Productos activos" value="248" color="sky" />
        <KpiCard icon={AlertTriangle} label="Alertas activas" value="7" color="red" />
        <KpiCard icon={TrendingUp} label="Entradas hoy" value="34" color="green" />
        <KpiCard icon={DollarSign} label="Valor total stock" value="$4.2M" color="violet" />
      </div>

      <div className="flex gap-2 shrink-0">
        {(['productos', 'movimientos', 'alertas'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${tab === t ? 'bg-orange-500 text-white' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'}`}>
            {t === 'productos' ? '📦 Productos' : t === 'movimientos' ? '🔄 Movimientos' : '🚨 Alertas'}
          </button>
        ))}
      </div>

      <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden min-h-0 flex flex-col">
        {tab === 'productos' && (
          <>
            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex gap-2 shrink-0">
              <div className="flex-1 flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5">
                <Search size={14} className="text-slate-400" />
                <input className="flex-1 text-sm outline-none bg-transparent text-slate-700 dark:text-white placeholder:text-slate-400" placeholder="Buscar producto o SKU..." />
              </div>
              <button className="px-3 py-1.5 bg-orange-500 text-white text-xs font-bold rounded-lg flex items-center gap-1"><Plus size={14} />Nuevo</button>
            </div>
            <div className="overflow-y-auto flex-1">
              {productos.map((p, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className={`w-2 h-8 rounded-full shrink-0 ${p.estado === 'critical' ? 'bg-red-500' : p.estado === 'warning' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">{p.nombre}</p>
                    <p className="text-xs text-slate-400">{p.sku} · {p.categoria}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className={`text-sm font-bold ${p.estado === 'critical' ? 'text-red-500' : p.estado === 'warning' ? 'text-amber-500' : 'text-emerald-600 dark:text-emerald-400'}`}>
                      {p.stock} uds
                    </p>
                    <p className="text-xs text-slate-400">mín. {p.minimo}</p>
                  </div>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300 w-20 text-right shrink-0">{p.precio}</p>
                </div>
              ))}
            </div>
          </>
        )}
        {tab === 'movimientos' && (
          <>
            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0">
              <p className="font-bold text-sm text-slate-700 dark:text-white">Últimos movimientos de inventario</p>
            </div>
            <div className="overflow-y-auto flex-1">
              {movimientos.map((m, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                  <div className={`p-1.5 rounded-lg ${m.tipo === 'Entrada' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600' : m.tipo === 'Salida' ? 'bg-red-100 dark:bg-red-900/30 text-red-500' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-600'}`}>
                    {m.tipo === 'Entrada' ? <ArrowUp size={14} /> : m.tipo === 'Salida' ? <ArrowDown size={14} /> : <Activity size={14} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">{m.producto}</p>
                    <p className="text-xs text-slate-400">{m.usuario} · {m.fecha}</p>
                  </div>
                  <Badge color={m.tipo === 'Entrada' ? 'green' : m.tipo === 'Salida' ? 'red' : 'amber'}>
                    {m.tipo === 'Entrada' ? '+' : ''}{m.cantidad} uds
                  </Badge>
                </div>
              ))}
            </div>
          </>
        )}
        {tab === 'alertas' && (
          <div className="p-4 overflow-y-auto flex-1 space-y-3">
            {productos.filter(p => p.estado !== 'ok').map((p, i) => (
              <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${p.estado === 'critical' ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' : 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'}`}>
                <AlertTriangle size={18} className={p.estado === 'critical' ? 'text-red-500 shrink-0' : 'text-amber-500 shrink-0'} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">{p.nombre}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Stock actual: {p.stock} · Mínimo: {p.minimo}</p>
                </div>
                <button className="text-xs font-bold px-3 py-1.5 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
                  Ordenar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   4. SalesLens – Dashboard de ventas
══════════════════════════════════════════════ */
const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'];
const ventasData = [420, 580, 510, 720, 690, 840, 920];
const metaData = [500, 550, 600, 650, 700, 750, 800];
const maxVal = Math.max(...ventasData, ...metaData);

const topProductos = [
  { nombre: 'Notebook Dell', ventas: 234, pct: 82, delta: '+12%' },
  { nombre: 'Monitor LG 24"', ventas: 189, pct: 66, delta: '+8%' },
  { nombre: 'Teclado Redragon', ventas: 156, pct: 55, delta: '-3%' },
  { nombre: 'Mouse Logitech', ventas: 134, pct: 47, delta: '+21%' },
];

const topVendedores = [
  { nombre: 'Rodríguez, C.', monto: '$1.24M', pct: 95 },
  { nombre: 'Pérez, A.', monto: '$980K', pct: 75 },
  { nombre: 'Gómez, F.', monto: '$760K', pct: 58 },
];

export function DashboardView() {
  const [periodo, setPeriodo] = useState<'mensual' | 'trimestral'>('mensual');

  return (
    <div className="flex flex-col h-full gap-4 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex gap-2">
          {(['mensual', 'trimestral'] as const).map(p => (
            <button key={p} onClick={() => setPeriodo(p)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${periodo === p ? 'bg-violet-500 text-white' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'}`}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
        <Badge color="violet">Julio 2024</Badge>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 shrink-0">
        <KpiCard icon={DollarSign} label="Facturación" value="$3.2M" delta="+18%" color="green" />
        <KpiCard icon={ShoppingCart} label="Órdenes" value="1.847" delta="+12%" color="sky" />
        <KpiCard icon={TrendingUp} label="Ticket promedio" value="$1.730" delta="+5%" color="violet" />
        <KpiCard icon={Star} label="Meta mensual" value="92%" delta="+7%" color="amber" />
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-4 shrink-0">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-bold text-slate-700 dark:text-white">Ventas vs Meta</p>
          <div className="flex gap-3 text-xs">
            <span className="flex items-center gap-1.5"><span className="w-3 h-1.5 rounded bg-violet-500 inline-block" />Ventas</span>
            <span className="flex items-center gap-1.5 text-slate-400"><span className="w-3 h-1.5 rounded bg-slate-300 dark:bg-slate-600 inline-block" />Meta</span>
          </div>
        </div>
        <div className="flex items-end gap-1 h-28">
          {meses.map((m, i) => (
            <div key={m} className="flex-1 flex flex-col items-center gap-0.5">
              <div className="w-full flex items-end gap-0.5 justify-center" style={{ height: '96px' }}>
                <div
                  className="flex-1 rounded-t-sm bg-violet-500/20 border-t-2 border-violet-300 dark:border-violet-700 transition-all"
                  style={{ height: `${(metaData[i] / maxVal) * 96}px` }}
                />
                <div
                  className="flex-1 rounded-t-sm bg-violet-500 transition-all"
                  style={{ height: `${(ventasData[i] / maxVal) * 96}px` }}
                />
              </div>
              <span className="text-xs text-slate-400">{m}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Top productos */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
          <p className="text-sm font-bold text-slate-700 dark:text-white mb-3">🏆 Top Productos</p>
          <div className="space-y-3">
            {topProductos.map((p, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate">{p.nombre}</p>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-slate-400">{p.ventas} uds</span>
                    <span className={`text-xs font-bold ${p.delta.startsWith('+') ? 'text-emerald-500' : 'text-red-400'}`}>{p.delta}</span>
                  </div>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                  <div className="h-full rounded-full bg-violet-500 transition-all" style={{ width: `${p.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top vendedores */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
          <p className="text-sm font-bold text-slate-700 dark:text-white mb-3">👥 Top Vendedores</p>
          <div className="space-y-3">
            {topVendedores.map((v, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300 flex items-center justify-center text-xs font-bold shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate">{v.nombre}</p>
                    <p className="text-xs font-bold text-slate-700 dark:text-white shrink-0">{v.monto}</p>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                    <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${v.pct}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   5. TrackRoute – Logística / Envíos
══════════════════════════════════════════════ */
const envios = [
  { id: 'ENV-4821', cliente: 'Martínez, Lucía', destino: 'Palermo, CABA', repartidor: 'Carlos R.', estado: 'En camino', eta: '14:30', color: 'sky' },
  { id: 'ENV-4822', cliente: 'García, Tomás', destino: 'Belgrano, CABA', repartidor: 'Ana G.', estado: 'Entregado', eta: '—', color: 'green' },
  { id: 'ENV-4823', cliente: 'López, Sofía', destino: 'Villa Urquiza', repartidor: 'Pedro M.', estado: 'Llegando', eta: '13:15', color: 'amber' },
  { id: 'ENV-4824', cliente: 'Rodríguez, M.', destino: 'Caballito, CABA', repartidor: 'Carlos R.', estado: 'Incidente', eta: 'Reprog.', color: 'red' },
  { id: 'ENV-4825', cliente: 'Fernández, P.', destino: 'San Telmo', repartidor: 'Laura T.', estado: 'Pendiente', eta: '16:00', color: 'slate' },
];

const repartidores = [
  { nombre: 'Carlos R.', entregas: '8/11', pct: 73, lat: '-34.603', lng: '-58.381', online: true },
  { nombre: 'Ana G.', entregas: '10/10', pct: 100, lat: '-34.588', lng: '-58.435', online: true },
  { nombre: 'Pedro M.', entregas: '6/9', pct: 67, lat: '-34.572', lng: '-58.452', online: true },
  { nombre: 'Laura T.', entregas: '3/8', pct: 38, lat: '-34.619', lng: '-58.370', online: false },
];

export function LogisticaView() {
  const [tab, setTab] = useState<'mapa' | 'envios' | 'repartidores'>('mapa');
  const [selected, setSelected] = useState<string | null>(null);

  // Fake map grid (decorative but convincing)
  const gridCells = Array.from({ length: 120 });

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 shrink-0">
        <KpiCard icon={Truck} label="En tránsito" value="34" color="sky" />
        <KpiCard icon={CheckCircle} label="Entregados hoy" value="127" color="green" />
        <KpiCard icon={AlertTriangle} label="Incidentes" value="4" color="red" />
        <KpiCard icon={Navigation} label="Repartidores" value="12" color="violet" />
      </div>

      <div className="flex gap-2 shrink-0">
        {(['mapa', 'envios', 'repartidores'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${tab === t ? 'bg-teal-500 text-white' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'}`}>
            {t === 'mapa' ? '🗺️ Mapa en vivo' : t === 'envios' ? '📦 Envíos' : '🚚 Repartidores'}
          </button>
        ))}
      </div>

      <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden min-h-0 flex flex-col">
        {tab === 'mapa' && (
          <div className="flex-1 relative overflow-hidden">
            {/* Fake map grid */}
            <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800">
              <div className="grid w-full h-full" style={{ gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'repeat(10, 1fr)' }}>
                {gridCells.map((_, i) => (
                  <div key={i} className="border border-slate-200/50 dark:border-slate-700/30" />
                ))}
              </div>
              {/* Road lines (decorative) */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute h-0.5 bg-slate-300/60 dark:bg-slate-600/60 left-0 right-0" style={{ top: '35%' }} />
                <div className="absolute h-0.5 bg-slate-300/60 dark:bg-slate-600/60 left-0 right-0" style={{ top: '65%' }} />
                <div className="absolute w-0.5 bg-slate-300/60 dark:bg-slate-600/60 top-0 bottom-0" style={{ left: '30%' }} />
                <div className="absolute w-0.5 bg-slate-300/60 dark:bg-slate-600/60 top-0 bottom-0" style={{ left: '70%' }} />
                <div className="absolute h-1 bg-amber-300/40 dark:bg-amber-600/30 left-0 right-0" style={{ top: '50%' }} />
                <div className="absolute w-1 bg-amber-300/40 dark:bg-amber-600/30 top-0 bottom-0" style={{ left: '50%' }} />
              </div>
            </div>
            {/* Repartidor pins */}
            {[
              { x: '42%', y: '38%', color: 'bg-teal-500', label: 'CR', status: 'En camino' },
              { x: '68%', y: '55%', color: 'bg-emerald-500', label: 'AG', status: 'Entregado' },
              { x: '25%', y: '62%', color: 'bg-amber-500', label: 'PM', status: 'Llegando' },
              { x: '55%', y: '28%', color: 'bg-red-500 animate-pulse', label: 'LT', status: 'Incidente' },
            ].map((pin, i) => (
              <div key={i} className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" style={{ left: pin.x, top: pin.y }}>
                <div className={`w-8 h-8 rounded-full ${pin.color} flex items-center justify-center text-white text-xs font-bold shadow-lg border-2 border-white dark:border-slate-900`}>
                  {pin.label}
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-inherit" style={{ background: 'inherit' }} />
                <div className="absolute top-9 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none z-10">
                  {pin.label} · {pin.status}
                </div>
              </div>
            ))}
            {/* Destination pins */}
            {[
              { x: '38%', y: '45%', color: 'text-teal-600' },
              { x: '72%', y: '32%', color: 'text-slate-400' },
              { x: '58%', y: '70%', color: 'text-teal-600' },
            ].map((p, i) => (
              <div key={i} className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ left: p.x, top: p.y }}>
                <MapPin size={20} className={p.color} fill="currentColor" />
              </div>
            ))}
            {/* Legend */}
            <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl p-3 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
              {[
                { color: 'bg-teal-500', label: 'En camino' },
                { color: 'bg-emerald-500', label: 'Entregado' },
                { color: 'bg-amber-500', label: 'Llegando' },
                { color: 'bg-red-500', label: 'Incidente' },
              ].map(l => (
                <div key={l.label} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${l.color}`} />
                  <span className="text-slate-600 dark:text-slate-300">{l.label}</span>
                </div>
              ))}
            </div>
            {/* Live indicator */}
            <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full px-3 py-1.5 border border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              EN VIVO
            </div>
          </div>
        )}

        {tab === 'envios' && (
          <>
            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2 shrink-0">
              <Search size={14} className="text-slate-400" />
              <input className="flex-1 text-sm outline-none bg-transparent text-slate-700 dark:text-white placeholder:text-slate-400" placeholder="Buscar por ID o cliente..." />
            </div>
            <div className="overflow-y-auto flex-1">
              {envios.map((e, i) => (
                <div key={i} onClick={() => setSelected(selected === e.id ? null : e.id)}
                  className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      <Truck size={16} className="text-slate-400 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">{e.cliente}</p>
                        <p className="text-xs text-slate-400 truncate">{e.id} · {e.destino}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-slate-400">ETA {e.eta}</span>
                      <Badge color={e.color as 'sky' | 'green' | 'amber' | 'red' | 'slate'}>{e.estado}</Badge>
                    </div>
                  </div>
                  {selected === e.id && (
                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700 flex gap-2">
                      <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-lg p-2 text-center">
                        <p className="text-xs text-slate-400">Repartidor</p>
                        <p className="text-xs font-bold text-slate-700 dark:text-white">{e.repartidor}</p>
                      </div>
                      <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-lg p-2 text-center">
                        <p className="text-xs text-slate-400">Destino</p>
                        <p className="text-xs font-bold text-slate-700 dark:text-white">{e.destino}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'repartidores' && (
          <div className="overflow-y-auto flex-1 p-4 space-y-3">
            {repartidores.map((r, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-teal-600 dark:text-teal-300 text-xs font-bold">
                      {r.nombre[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-white">{r.nombre}</p>
                      <p className="text-xs text-slate-400">{r.entregas} entregas completadas</p>
                    </div>
                  </div>
                  <Badge color={r.online ? 'green' : 'slate'}>{r.online ? '● Online' : '○ Offline'}</Badge>
                </div>
                <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div className="h-full rounded-full bg-teal-500 transition-all" style={{ width: `${r.pct}%` }} />
                </div>
                <p className="text-xs text-slate-400 mt-1 text-right">{r.pct}% completado</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   6. FinTrack – Finanzas Personales
══════════════════════════════════════════════ */
const transacciones = [
  { tipo: 'gasto', categoria: '🛒 Supermercado', monto: -8500, fecha: 'Hoy 09:30', cuenta: 'Banco' },
  { tipo: 'ingreso', categoria: '💼 Sueldo', monto: 320000, fecha: 'Ayer', cuenta: 'Banco' },
  { tipo: 'gasto', categoria: '🚌 Transporte', monto: -1200, fecha: 'Ayer', cuenta: 'Efectivo' },
  { tipo: 'gasto', categoria: '🎬 Entretenimiento', monto: -4500, fecha: '20/07', cuenta: 'Tarjeta' },
  { tipo: 'gasto', categoria: '🍽️ Restaurantes', monto: -6800, fecha: '19/07', cuenta: 'Tarjeta' },
];

const presupuestos = [
  { categoria: '🛒 Supermercado', gastado: 45000, limite: 60000, pct: 75, color: 'amber' },
  { categoria: '🍽️ Restaurantes', gastado: 18000, limite: 20000, pct: 90, color: 'red' },
  { categoria: '🎬 Entretenimiento', gastado: 8000, limite: 15000, pct: 53, color: 'green' },
  { categoria: '🚌 Transporte', gastado: 9500, limite: 12000, pct: 79, color: 'amber' },
];

const metas = [
  { nombre: '🏖️ Vacaciones', meta: 200000, actual: 75000, pct: 38 },
  { nombre: '💻 Notebook nueva', meta: 500000, actual: 320000, pct: 64 },
  { nombre: '🏠 Fondo emergencia', meta: 1000000, actual: 620000, pct: 62 },
];

export function FinTrackView() {
  const [tab, setTab] = useState<'inicio' | 'presupuestos' | 'metas'>('inicio');

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Balance card */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-4 text-white shrink-0">
        <p className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">Saldo Total</p>
        <p className="text-3xl font-bold">$487.320</p>
        <div className="flex gap-4 mt-3 text-xs">
          <span className="flex items-center gap-1 opacity-90"><ArrowUp size={12} />Ingresos $320.000</span>
          <span className="flex items-center gap-1 opacity-90"><ArrowDown size={12} />Gastos $67.800</span>
        </div>
      </div>

      <div className="flex gap-2 shrink-0">
        {(['inicio', 'presupuestos', 'metas'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${tab === t ? 'bg-emerald-500 text-white' : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'}`}>
            {t === 'inicio' ? '🏠 Inicio' : t === 'presupuestos' ? '🎯 Presupuestos' : '⭐ Metas'}
          </button>
        ))}
      </div>

      <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden min-h-0 flex flex-col">
        {tab === 'inicio' && (
          <>
            <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between shrink-0">
              <p className="font-bold text-sm text-slate-700 dark:text-white">Últimas transacciones</p>
              <button className="p-1.5 rounded-lg bg-emerald-500 text-white"><Plus size={14} /></button>
            </div>
            <div className="overflow-y-auto flex-1">
              {transacciones.map((t, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="text-xl w-8 text-center shrink-0">{t.categoria.split(' ')[0]}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">{t.categoria.slice(2)}</p>
                    <p className="text-xs text-slate-400">{t.fecha} · {t.cuenta}</p>
                  </div>
                  <p className={`text-sm font-bold ${t.tipo === 'ingreso' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
                    {t.tipo === 'ingreso' ? '+' : ''}{t.monto.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 })}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'presupuestos' && (
          <div className="overflow-y-auto flex-1 p-4 space-y-4">
            {presupuestos.map((p, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-sm font-semibold text-slate-700 dark:text-white">{p.categoria}</p>
                  <div className="text-right">
                    <span className={`text-sm font-bold ${p.pct >= 90 ? 'text-red-500' : p.pct >= 75 ? 'text-amber-500' : 'text-emerald-500'}`}>
                      ${p.gastado.toLocaleString('es-AR')}
                    </span>
                    <span className="text-xs text-slate-400"> / ${p.limite.toLocaleString('es-AR')}</span>
                  </div>
                </div>
                <div className="h-3 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                  <div
                    className={`h-full rounded-full transition-all ${p.pct >= 90 ? 'bg-red-500' : p.pct >= 75 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                    style={{ width: `${p.pct}%` }}
                  />
                </div>
                <p className={`text-xs mt-1 text-right font-medium ${p.pct >= 90 ? 'text-red-500' : p.pct >= 75 ? 'text-amber-500' : 'text-emerald-500'}`}>
                  {p.pct}% utilizado
                  {p.pct >= 90 && ' ⚠️ ¡Casi al límite!'}
                </p>
              </div>
            ))}
          </div>
        )}

        {tab === 'metas' && (
          <div className="overflow-y-auto flex-1 p-4 space-y-4">
            {metas.map((m, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-slate-800 dark:text-white">{m.nombre}</p>
                  <Badge color="sky">{m.pct}%</Badge>
                </div>
                <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden mb-2">
                  <div className="h-full rounded-full bg-sky-500 transition-all" style={{ width: `${m.pct}%` }} />
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>${m.actual.toLocaleString('es-AR')} ahorrados</span>
                  <span>Meta: ${m.meta.toLocaleString('es-AR')}</span>
                </div>
                <div className="mt-2 flex gap-2">
                  <button className="flex-1 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold py-1.5 rounded-lg transition-colors">
                    + Agregar aporte
                  </button>
                  <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-600 text-xs font-bold rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Editar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
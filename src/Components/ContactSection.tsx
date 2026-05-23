import { useState } from 'react';
import { Send, Github, Mail, CheckCircle } from 'lucide-react';

const EMAILJS_SERVICE_ID  = 'service_13uo9u7';
const EMAILJS_TEMPLATE_ID = 'template_v5qi4yr';
const EMAILJS_PUBLIC_KEY  = 'EomQ2Ng5VcVKFzZSD';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id:  EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id:     EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name:    form.name,
            from_email:   form.email,
            message:      form.message,
          },
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Contacto</h2>
        <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full" />
        <p className="mt-6 text-slate-600 dark:text-slate-400">
          ¿Tenés una propuesta o querés ponerte en contacto? Escribime y te respondo a la brevedad.
        </p>
      </div>

      {status === 'sent' ? (
        <div className="flex flex-col items-center gap-4 py-16 text-center">
          <CheckCircle className="text-emerald-500" size={56} />
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">¡Mensaje enviado!</h3>
          <p className="text-slate-500 dark:text-slate-400">Gracias por escribirme. Te respondo pronto.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-medium transition-colors"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Nombre</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-sky-500 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-sky-500 transition-colors text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Mensaje</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Contame en qué puedo ayudarte..."
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:border-sky-500 transition-colors text-sm resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-500 dark:text-red-400">
              Hubo un error al enviar. Intentá de nuevo o escribime directamente a nazagarcia132@gmail.com
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={status === 'sending'}
            className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 disabled:opacity-60 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-sky-500/30"
          >
            <Send size={18} />
            {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          <div className="flex justify-center gap-6 pt-2">
            <a href="mailto:nazagarcia132@gmail.com" className="flex items-center gap-2 text-sm text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors">
              <Mail size={16} /> nazagarcia132@gmail.com
            </a>
            <a href="https://github.com/Nazaaa7" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors">
              <Github size={16} /> github.com/Nazaaa7
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
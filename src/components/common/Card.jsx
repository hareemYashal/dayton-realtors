export default function Card({ children, className = '', hover = true, variant = 'default' }) {
  const variants = {
    default: 'bg-white border border-slate-100/70 shadow-xl shadow-blueprint-blue/10',
    subtle: 'bg-white/80 backdrop-blur border border-white/40 shadow-lg shadow-blueprint-blue/5',
    accent: 'bg-gradient-to-br from-blueprint-blue/95 to-blue-900 text-white shadow-2xl shadow-blue-900/40'
  };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl ${variants[variant]} ${
        hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-blueprint-blue/30' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}


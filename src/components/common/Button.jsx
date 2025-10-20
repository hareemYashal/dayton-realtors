const baseStyles =
  'inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

const variants = {
  primary:
    'bg-gradient-to-r from-blueprint-blue to-blue-700 text-white shadow-lg shadow-blueprint-blue/40 hover:shadow-blueprint-blue/60 hover:-translate-y-0.5 focus-visible:ring-blue-200',
  secondary:
    'bg-white text-blueprint-blue border border-blue-200 hover:bg-blue-50 hover:border-blue-300 focus-visible:ring-blue-200 shadow-sm',
  ghost:
    'bg-transparent text-blueprint-blue hover:bg-blue-50 focus-visible:ring-blue-200',
  dark:
    'bg-slate-900 text-white shadow-xl shadow-slate-900/40 hover:-translate-y-0.5 focus-visible:ring-slate-200'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg'
};

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {LeadingIcon && <LeadingIcon className="w-5 h-5 mr-2" />}
      {children}
      {TrailingIcon && <TrailingIcon className="w-5 h-5 ml-2" />}
    </button>
  );
}


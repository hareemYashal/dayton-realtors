export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num);
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const getColorForValue = (value, min, max) => {
  const normalized = (value - min) / (max - min);
  if (normalized < 0.33) return '#ef4444';
  if (normalized < 0.67) return '#f59e0b';
  return '#10b981';
};

export const getColorScale = (value, min, max) => {
  const colors = ['#fee', '#fcc', '#faa', '#f88', '#f66', '#f44', '#f22', '#f00'];
  const normalized = (value - min) / (max - min);
  const index = Math.min(Math.floor(normalized * colors.length), colors.length - 1);
  return colors[index];
};


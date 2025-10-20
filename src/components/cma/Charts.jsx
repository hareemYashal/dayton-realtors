import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const chartWrapperClass =
  'rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm';

const chartTitleClass = 'text-lg font-heading font-semibold text-slate-900';

export function PriceHistoryChart({ data }) {
  return (
    <div className={chartWrapperClass}>
      <h3 className={chartTitleClass}>Price vs Time</h3>
      <p className="text-sm text-slate-500">Historical appreciation trendline based on MLS sales.</p>
      <div className="mt-4 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="rgba(148,163,184,0.3)" strokeDasharray="4 8" />
            <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 12 }} tickLine={false} axisLine={{ stroke: 'rgba(148,163,184,0.6)' }} />
            <YAxis tick={{ fill: '#64748b', fontSize: 12 }} tickLine={false} axisLine={{ stroke: 'rgba(148,163,184,0.6)' }} />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} contentStyle={{ borderRadius: 16, borderColor: '#0D47A1', backgroundColor: '#ffffff', boxShadow: '0 12px 30px rgba(13, 71, 161, 0.12)' }} />
            <Legend wrapperStyle={{ paddingTop: 12 }} iconType="circle" iconSize={10} />
            <Line type="monotone" dataKey="price" stroke="#0D47A1" strokeWidth={3} dot={{ stroke: '#0D47A1', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function PricePerSqFtChart({ data }) {
  return (
    <div className={chartWrapperClass}>
      <h3 className={chartTitleClass}>Price per Sq Ft</h3>
      <p className="text-sm text-slate-500">Benchmarks aligned with subject property characteristics.</p>
      <div className="mt-4 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="rgba(148,163,184,0.3)" strokeDasharray="4 8" />
            <XAxis dataKey="address" tick={{ fill: '#64748b', fontSize: 11 }} tickLine={false} axisLine={{ stroke: 'rgba(148,163,184,0.6)' }} angle={-30} textAnchor="end" height={80} />
            <YAxis tick={{ fill: '#64748b', fontSize: 12 }} tickLine={false} axisLine={{ stroke: 'rgba(148,163,184,0.6)' }} />
            <Tooltip formatter={(value) => `$${value}/sqft`} contentStyle={{ borderRadius: 16, borderColor: '#0D47A1', backgroundColor: '#ffffff', boxShadow: '0 12px 30px rgba(13, 71, 161, 0.12)' }} />
            <Legend wrapperStyle={{ paddingTop: 12 }} iconType="circle" iconSize={10} />
            <Bar dataKey="pricePerSqFt" radius={[10, 10, 0, 0]} fill="#0D47A1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


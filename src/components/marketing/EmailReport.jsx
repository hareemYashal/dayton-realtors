import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SendHorizonal } from 'lucide-react';
import Button from '../common/Button';
import Card from '../common/Card';
import toast from 'react-hot-toast';

const mockData = [
  { month: 'Jan', price: 370000 },
  { month: 'Feb', price: 375000 },
  { month: 'Mar', price: 378000 },
  { month: 'Apr', price: 382000 },
  { month: 'May', price: 388000 },
  { month: 'Jun', price: 387500 }
];

export default function EmailReport() {
  const handleSend = () => {
    toast.success('Email sent to past clients!');
  };

  return (
    <Card className="space-y-5 border border-slate-200 bg-white p-6 text-slate-900 shadow-sm" hover={false}>
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blueprint-blue/70">Campaign Studio</p>
        <h3 className="text-2xl font-heading font-semibold text-slate-900">Smart Email Report</h3>
        <p className="text-sm text-slate-500">MLS-branded email with dynamic market analytics ready for clients.</p>
      </div>

      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.25em] text-blueprint-blue">Subject</label>
        <input
          type="text"
          value="Kettering Market Update – Prices Up 4.8%"
          readOnly
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
        />
      </div>

      <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
        <p className="text-slate-800">Hi [Client Name],</p>
        <p>
          Here’s the latest look at Kettering’s market: prices are up 4.8% year-over-year and demand remains strong.
          Below is a snapshot generated from this week’s MLS data.
        </p>

        <div className="rounded-2xl border border-blueprint-blue/20 bg-white p-4">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={mockData}>
              <CartesianGrid stroke="rgba(148,163,184,0.3)" strokeDasharray="4 8" />
              <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} contentStyle={{ borderRadius: 16, borderColor: '#0D47A1', backgroundColor: '#ffffff', boxShadow: '0 12px 30px rgba(13, 71, 161, 0.12)' }} />
              <Line type="monotone" dataKey="price" stroke="#0D47A1" strokeWidth={3} dot={{ stroke: '#0D47A1', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <p>
          Curious about your home’s current value or looking to time a move? Let’s explore your options. I can send a
          personalized equity analysis anytime.
        </p>

        <p className="whitespace-pre-line text-slate-800">
          Best regards,
          {'\n'}Sarah Miller
          {'\n'}Dayton Realtors
        </p>
      </div>

      <Button onClick={handleSend} size="lg" leadingIcon={SendHorizonal} className="w-full">
        Send to Past Clients
      </Button>
    </Card>
  );
}


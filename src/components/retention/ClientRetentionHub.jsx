import { useState } from 'react';
import { Bell, TrendingUp, Mail, Users, ShieldCheck } from 'lucide-react';
import Header from '../common/Header';
import Card from '../common/Card';
import Button from '../common/Button';
import Modal from '../common/Modal';
import toast from 'react-hot-toast';
import { formatCurrency } from '../../utils/helpers';

const clientUpdates = [
  {
    name: 'John & Mary Thompson',
    address: '1234 Oak Street, Kettering',
    oldValue: 365000,
    newValue: 382000,
    change: 4.7
  },
  {
    name: 'Robert Chen',
    address: '5678 Maple Avenue, Centerville',
    oldValue: 425000,
    newValue: 445000,
    change: 4.7
  },
  {
    name: 'Jennifer Williams',
    address: '9012 Pine Lane, Beavercreek',
    oldValue: 485000,
    newValue: 508000,
    change: 4.7
  }
];

export default function ClientRetentionHub() {
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [selectedClients, setSelectedClients] = useState([]);

  const handleSendUpdates = () => {
    toast.success('Value updates sent to clients!');
    setEmailModalOpen(false);
  };

  const toggleClient = (index) => {
    setSelectedClients((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const selectAll = () => {
    setSelectedClients((prev) => (prev.length === clientUpdates.length ? [] : clientUpdates.map((_, index) => index)));
  };

  return (
    <div className="min-h-screen bg-light-gray text-slate-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-blueprint-blue/20 bg-blueprint-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blueprint-blue">
              <Users className="h-4 w-4" /> Client Retention Hub
            </div>
            <h2 className="text-3xl font-heading font-semibold text-slate-900">Client Retention Hub</h2>
            <p className="text-slate-600">Track equity movement and deliver personalized homeowner updates with one click.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="rounded-3xl border border-blueprint-blue/20 bg-white px-6 py-4 text-sm text-blueprint-blue shadow-sm">
              <p className="font-semibold text-blueprint-blue">Home Value Alerts</p>
              <p className="text-blueprint-blue/80">Machine learning detects market shifts instantly</p>
            </div>
            <div className="rounded-3xl border border-blueprint-blue/20 bg-white px-6 py-4 text-sm text-blueprint-blue shadow-sm">
              <p className="font-semibold text-blueprint-blue">Compliance Ready</p>
              <p className="text-blueprint-blue/80 flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> MLS approved messaging</p>
            </div>
          </div>
        </div>

        <Card className="mb-8 border border-slate-200 bg-white p-6 shadow-sm" hover={false}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-blueprint-blue/10 p-3 text-blueprint-blue">
                <Bell className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blueprint-blue">Alerts</p>
                <h3 className="mt-1 text-xl font-heading font-semibold text-slate-900">New Value Changes This Month</h3>
                <p className="mt-2 text-sm text-slate-600">
                  3 past clients experienced value shifts. Trigger personalized updates to drive repeat engagement.
                </p>
              </div>
            </div>
            <Button onClick={() => setEmailModalOpen(true)} size="lg" leadingIcon={Mail}>
              Send Updates
            </Button>
          </div>
        </Card>

        <div className="grid gap-6">
          {clientUpdates.map((client, index) => (
            <Card key={client.name} className="border border-slate-200 bg-white p-6 text-slate-900 shadow-sm" hover={false}>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blueprint-blue">Client Profile</p>
                  <h4 className="mt-1 text-xl font-heading text-slate-900">{client.name}</h4>
                  <p className="text-sm text-slate-600">{client.address}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Previous Value</p>
                      <p className="text-base font-semibold text-slate-800">{formatCurrency(client.oldValue)}</p>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600">
                      <TrendingUp className="h-5 w-5" />
                      <span className="text-sm font-semibold">+{client.change}%</span>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Current Value</p>
                      <p className="text-base font-semibold text-slate-800">{formatCurrency(client.newValue)}</p>
                    </div>
                  </div>
                </div>
                <Button
                  variant={selectedClients.includes(index) ? 'primary' : 'secondary'}
                  onClick={() => toggleClient(index)}
                  size="md"
                  className="self-start md:self-center"
                >
                  {selectedClients.includes(index) ? 'Selected' : 'Queue Update'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Modal isOpen={emailModalOpen} onClose={() => setEmailModalOpen(false)} title="Send Value Updates">
        <div className="space-y-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-600">Select clients to notify:</p>
            <Button variant="secondary" onClick={selectAll} size="sm" className="rounded-full px-4">
              {selectedClients.length === clientUpdates.length ? 'Deselect All' : 'Select All'}
            </Button>
          </div>

          <div className="space-y-3">
            {clientUpdates.map((client, index) => (
              <div key={client.name} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={selectedClients.includes(index)}
                  onChange={() => toggleClient(index)}
                  className="h-4 w-4 rounded border-slate-300 text-blueprint-blue focus:ring-blueprint-blue"
                />
                <div className="flex-1">
                  <p className="font-semibold text-slate-800">{client.name}</p>
                  <p className="text-xs text-slate-500">{client.address}</p>
                </div>
                <span className="text-sm font-semibold text-emerald-600">+{client.change}%</span>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Email Preview</p>
            <p className="mt-2">
              Hi [Client Name],
              <br />
              <br />
              Excellent news—the estimate for your home has increased to [New Value], up [Change]% since our last review.
              Dayton’s market is rewarding homeowners with strong equity gains. If you’d like an updated equity strategy or
              to explore your options, I’m here to help.
              <br />
              <br />
              Best regards,
              <br />
              Sarah Miller
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2 md:flex-row">
            <Button variant="secondary" onClick={() => setEmailModalOpen(false)} size="lg" className="flex-1">
              Cancel
            </Button>
            <Button
              onClick={handleSendUpdates}
              size="lg"
              leadingIcon={Mail}
              className="flex-1"
              disabled={selectedClients.length === 0}
            >
              Send to {selectedClients.length || '0'} Client{selectedClients.length !== 1 ? 's' : ''}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}


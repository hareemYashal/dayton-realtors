import { useState } from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import toast from 'react-hot-toast';
import { CalendarDays, Clock3, Navigation } from 'lucide-react';

export default function TourScheduler({ isOpen, onClose, listing }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSchedule = () => {
    if (!selectedDate || !selectedTime) {
      toast.error('Please select a date and time');
      return;
    }
    toast.success('Tour request sent to Agent Sarah');
    onClose();
  };

  if (!listing) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Schedule Property Tour" maxWidth="max-w-2xl">
      <div className="space-y-6">
        <div className="rounded-3xl border border-blueprint-blue/15 bg-blueprint-blue/10 p-6 text-sm text-blueprint-blue">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blueprint-blue/70">Property</p>
          <p className="mt-2 text-lg font-heading text-blueprint-blue">{listing.address}</p>
          <p className="mt-1 text-sm text-blueprint-blue/70">Preferred MLS member showing slot</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              <CalendarDays className="h-4 w-4" /> Select Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 focus:border-blueprint-blue focus:outline-none"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              <Clock3 className="h-4 w-4" /> Select Time
            </label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 focus:border-blueprint-blue focus:outline-none"
            >
              <option value="">Choose a time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
            </select>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Concierge Note</p>
          <p className="mt-1 text-slate-500">
            We’ll notify the listing agent and confirm availability. Expect a confirmation within 15 minutes.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row">
          <Button variant="secondary" onClick={onClose} size="lg" className="flex-1">
            Cancel
          </Button>
          <Button onClick={handleSchedule} size="lg" leadingIcon={Navigation} className="flex-1">
            Schedule Tour
          </Button>
        </div>
      </div>
    </Modal>
  );
}


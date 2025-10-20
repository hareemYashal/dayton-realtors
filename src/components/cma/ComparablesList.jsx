import { MapPin, Calendar, Maximize } from 'lucide-react';
import { formatCurrency, formatDate } from '../../utils/helpers';

export default function ComparablesList({ comparables }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
      <h3 className="text-lg font-heading font-semibold text-slate-900">Comparable Sales</h3>
      <p className="mt-1 text-sm text-slate-500">AI-selected comps ranked by similarity scoring.</p>
      <div className="mt-5 space-y-4">
        {comparables.map((comp, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:border-blueprint-blue/40 hover:bg-white"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blueprint-blue/70">Comparable {index + 1}</p>
                <p className="mt-1 text-base font-medium text-slate-800">{comp.address}</p>
              </div>
              <p className="text-2xl font-heading font-semibold text-blueprint-blue">{formatCurrency(comp.price)}</p>
            </div>
            <div className="mt-4 grid gap-4 text-sm text-slate-600 md:grid-cols-3">
              <div className="flex items-center gap-2">
                <Maximize className="h-4 w-4 text-blueprint-blue" />
                <span>{comp.sqft.toLocaleString()} sqft</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blueprint-blue" />
                <span>Sold {formatDate(comp.soldDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blueprint-blue" />
                <span>{comp.distance} mi away</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


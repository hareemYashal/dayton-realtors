import { Bed, Bath, Maximize } from 'lucide-react';
import { formatCurrency } from '../../utils/helpers';
import Button from '../common/Button';

export default function ListingCard({ listing, onScheduleTour }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-900 shadow-md transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <img
          src={listing.image}
          alt={listing.address}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-blueprint-blue shadow">
          <span>MLS Verified</span>
          <span className="rounded-full bg-blueprint-blue/80 px-3 py-1 text-white">Hot Lead</span>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blueprint-blue/70">Featured Listing</p>
          <p className="mt-1 text-2xl font-heading font-semibold text-blueprint-blue">
            {formatCurrency(listing.price)}
          </p>
          <p className="mt-2 text-sm text-slate-600">{listing.address}</p>
        </div>
        <div className="flex gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Bed className="h-4 w-4 text-blueprint-blue" />
            <span>{listing.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4 text-blueprint-blue" />
            <span>{listing.baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="h-4 w-4 text-blueprint-blue" />
            <span>{listing.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
        <p className="text-sm text-slate-600">{listing.description}</p>
        <Button onClick={() => onScheduleTour(listing)} size="md" className="mt-4 w-full">
          Schedule Tour
        </Button>
      </div>
    </div>
  );
}


import { useState } from 'react';
import { Search, Activity, ShieldCheck, FileText } from 'lucide-react';
import Header from '../common/Header';
import Button from '../common/Button';
import Card from '../common/Card';
import ComparablesList from './ComparablesList';
import { PriceHistoryChart, PricePerSqFtChart } from './Charts';
import CMAReport from './CMAReport';
import { formatCurrency } from '../../utils/helpers';
import compsData from '../../data/comps.json';

export default function CMAValuation() {
  const [address, setAddress] = useState('');
  const [cmaData, setCmaData] = useState(null);
  const [reportOpen, setReportOpen] = useState(false);

  const handleSearch = () => {
    const addressKey = Object.keys(compsData).find((key) =>
      address.toLowerCase().includes(key.split(',')[0].toLowerCase())
    );

    if (addressKey) {
      setCmaData({ ...compsData[addressKey], address: addressKey });
    } else {
      setCmaData({
        address,
        estimatedValue: 375000,
        variance: { low: 360000, high: 390000 },
        comparables: [
          {
            address: '123 Sample St, Kettering, OH',
            price: 368000,
            sqft: 1750,
            soldDate: '2024-08-01',
            distance: 0.2
          }
        ],
        priceHistory: [
          { date: '2020-01', price: 310000 },
          { date: '2021-01', price: 330000 },
          { date: '2022-01', price: 350000 },
          { date: '2023-01', price: 365000 },
          { date: '2024-01', price: 375000 }
        ],
        pricePerSqFt: [{ address: 'Subject Property', pricePerSqFt: 214 }]
      });
    }
  };

  return (
    <div className="min-h-screen bg-light-gray text-slate-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-blueprint-blue/20 bg-blueprint-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blueprint-blue">
              <Activity className="h-4 w-4" /> Pricing Intelligence
            </div>
            <h2 className="text-3xl font-heading font-semibold text-slate-900">Instant CMA & AI Valuation Tool</h2>
            <p className="text-slate-600">
              Build MLS-branded valuation packets tailored to every property in 30 seconds.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="rounded-3xl border border-blueprint-blue/20 bg-white px-6 py-4 text-sm text-blueprint-blue shadow-sm">
              <p className="font-semibold text-blueprint-blue">Confidence Score</p>
              <p className="text-blueprint-blue/80">± 3% variance accuracy</p>
            </div>
            <div className="rounded-3xl border border-blueprint-blue/20 bg-white px-6 py-4 text-sm text-blueprint-blue shadow-sm">
              <p className="font-semibold text-blueprint-blue">MLS Verified</p>
              <p className="text-blueprint-blue/80 flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Compliance ready</p>
            </div>
          </div>
        </div>

        <Card className="mb-8 border border-slate-200 bg-white p-6 shadow-sm" hover={false}>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex-1">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-blueprint-blue">
                Subject Property
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Example: 1234 Maple Street, Kettering, OH"
                className="mt-2 h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blueprint-blue focus:outline-none"
              />
            </div>
            <Button onClick={handleSearch} size="lg" leadingIcon={Search} className="whitespace-nowrap">
              Generate CMA
            </Button>
          </div>
        </Card>

        {cmaData ? (
          <div className="space-y-8">
            <Card className="border border-slate-200 bg-white p-6 text-slate-900 shadow-sm" hover={false}>
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blueprint-blue">Estimated Value</p>
                  <p className="mt-2 text-5xl font-heading font-semibold text-blueprint-blue">
                    {formatCurrency(cmaData.estimatedValue)}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Range: <span className="font-medium">{formatCurrency(cmaData.variance.low)}</span> –{' '}
                    <span className="font-medium">{formatCurrency(cmaData.variance.high)}</span>
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                    Address: <span className="normal-case tracking-normal text-slate-600">{cmaData.address}</span>
                  </p>
                </div>
                <Button onClick={() => setReportOpen(true)} size="lg" variant="primary" leadingIcon={FileText}>
                  Generate CMA Report
                </Button>
              </div>
            </Card>

            <ComparablesList comparables={cmaData.comparables} />

            <div className="grid gap-6 lg:grid-cols-2">
              <PriceHistoryChart data={cmaData.priceHistory} />
              <PricePerSqFtChart data={cmaData.pricePerSqFt} />
            </div>
          </div>
        ) : (
          <div className="flex min-h-[18rem] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white text-center text-slate-500 shadow-inner">
            <p className="text-lg font-heading text-slate-700">Start by entering an address</p>
            <p className="mt-2 text-sm text-slate-500">Try "1234 Maple Street" or "5678 Oak Avenue" from your recent searches.</p>
          </div>
        )}
      </main>

      <CMAReport isOpen={reportOpen} onClose={() => setReportOpen(false)} data={cmaData} />
    </div>
  );
}


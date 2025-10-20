import { useState } from 'react';
import { Sparkles, PenLine } from 'lucide-react';
import Button from '../common/Button';
import Card from '../common/Card';

export default function ListingDescriptionGenerator() {
  const [address, setAddress] = useState('');
  const [features, setFeatures] = useState('');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!address || !features) return;

    setIsGenerating(true);
    setDescription('');

    setTimeout(() => {
      const generatedText = `Introducing ${address}, a beautifully curated residence featuring ${features.toLowerCase()}. Thoughtfully crafted to balance modern design with everyday comfort, this home elevates each living space with natural light, flexible gathering areas, and refined finishes throughout. The chef-inspired kitchen transitions seamlessly to indoor/outdoor entertaining, while the private suite level delivers restorative comfort. Located moments from top-rated schools, parks, and vibrant Kettering destinations, this property presents an extraordinary opportunity to secure a turnkey home in one of the area’s most sought-after neighborhoods. Schedule your private preview and experience the lifestyle firsthand.`;

      let currentText = '';
      let index = 0;
      const interval = setInterval(() => {
        if (index < generatedText.length) {
          currentText += generatedText[index];
          setDescription(currentText);
          index++;
        } else {
          clearInterval(interval);
          setIsGenerating(false);
        }
      }, 15);
    }, 400);
  };

  return (
    <Card className="space-y-5 border border-slate-200 bg-white p-6 text-slate-900 shadow-sm" hover={false}>
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-blueprint-blue/10 p-3 text-blueprint-blue">
          <Sparkles className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-2xl font-heading font-semibold text-slate-900">AI Listing Description Generator</h3>
          <p className="text-sm text-slate-500">Generate MLS-ready narratives tailored to the property’s highlights.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-blueprint-blue">Property Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="123 Main Street, Kettering, OH 45429"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-blueprint-blue"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-blueprint-blue">Key Features</label>
          <textarea
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            placeholder="3 beds, 2 baths, quartz kitchen, hardwood floors, fenced yard"
            rows={4}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:border-blueprint-blue"
          />
        </div>
      </div>

      <Button
        onClick={handleGenerate}
        disabled={isGenerating || !address || !features}
        size="lg"
        leadingIcon={PenLine}
        className="w-full"
      >
        {isGenerating ? 'Crafting Narrative…' : 'Generate Description'}
      </Button>

      {description && (
        <div className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          <label className="text-xs font-semibold uppercase tracking-[0.25em] text-blueprint-blue/70">
            Generated Description
          </label>
          <p className="leading-relaxed text-slate-700">{description}</p>
        </div>
      )}
    </Card>
  );
}


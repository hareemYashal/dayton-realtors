import { useEffect, useRef, useState } from 'react';
import { Send, MessageCircle, Sparkles } from 'lucide-react';
import Header from '../common/Header';
import ListingCard from './ListingCard';
import TourScheduler from './TourScheduler';
import Button from '../common/Button';
import listingsData from '../../data/listings.json';

export default function ChatAssistant() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi Sarah! I’m ReadyLead, your MLS-trained assistant. Tell me about the buyer or search you’re working on.'
    }
  ]);
  const [input, setInput] = useState('');
  const [listings, setListings] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [schedulerOpen, setSchedulerOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const chatContainerRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`;
    }
  }, [input]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const filtered = listingsData
        .filter((listing) => {
          const query = input.toLowerCase();
          if (query.includes('kettering') && listing.address.toLowerCase().includes('kettering')) {
            if (query.includes('3') && listing.beds === 3) {
              const priceMatch = query.match(/(\d+)k/);
              if (priceMatch) {
                const maxPrice = parseInt(priceMatch[1], 10) * 1000;
                return listing.price <= maxPrice;
              }
              return true;
            }
          }
          return (
            listing.address.toLowerCase().includes(query) || listing.description.toLowerCase().includes(query)
          );
        })
        .slice(0, 5);

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: filtered.length
            ? 'Here are the best matches based on buyer intent, price fit, and MLS data.'
            : 'No direct matches yet. Let’s refine the criteria.'
        }
      ]);
      setListings(filtered);
    }, 1200);
  };

  const handleScheduleTour = (listing) => {
    setSelectedListing(listing);
    setSchedulerOpen(true);
  };

  const handleTextAreaKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-light-gray text-slate-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-blueprint-blue/20 bg-blueprint-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blueprint-blue">
              <MessageCircle className="h-4 w-4" /> Lead Conversion Studio
            </div>
            <h2 className="text-3xl font-heading font-semibold text-slate-900">AI Chat Assistant</h2>
            <p className="flex items-center gap-2 text-slate-600">
              Craft natural conversations and qualify buyers instantly.
              <Sparkles className="h-4 w-4 text-amber-400" />
            </p>
          </div>
          <div className="rounded-3xl border border-blueprint-blue/20 bg-white px-6 py-4 text-sm text-blueprint-blue shadow-sm">
            <p className="font-semibold text-blueprint-blue">Lead Capture Performance</p>
            <p className="text-blueprint-blue/80">98% responsiveness · MLS-trained data</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,_380px)_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-800">
              <MessageCircle className="h-5 w-5 text-blueprint-blue" /> Conversation Canvas
            </h3>
            <div ref={chatContainerRef} className="h-96 space-y-4 overflow-y-auto pr-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] rounded-3xl px-5 py-4 text-sm leading-relaxed shadow-sm ${
                    message.role === 'user'
                      ? 'ml-auto bg-blueprint-blue text-white'
                      : 'bg-blueprint-blue/10 text-slate-700 border border-blueprint-blue/20'
                  }`}
                >
                  {message.content}
                </div>
              ))}
              {isTyping && (
                <div className="inline-flex gap-2 rounded-3xl border border-blueprint-blue/20 bg-blueprint-blue/10 px-4 py-3 text-blueprint-blue">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-blueprint-blue" style={{ animationDelay: '0ms' }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-blueprint-blue" style={{ animationDelay: '150ms' }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-blueprint-blue" style={{ animationDelay: '300ms' }} />
                </div>
              )}
            </div>
            <div className="mt-5 flex items-end gap-3">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleTextAreaKeyDown}
                placeholder="Example: 3-bed home in Kettering under 400k"
                className="max-h-40 flex-1 resize-none rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blueprint-blue focus:outline-none"
              />
              <Button onClick={handleSend} leadingIcon={Send} size="md" className="self-center">
                Send
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-md">
              <p className="font-semibold text-slate-800">Recommended Listings</p>
              <p className="mt-1 text-slate-500">
                AI ranks properties using buyer intent signals, MLS history, and price-fit scoring.
              </p>
            </div>
            {listings.length ? (
              <div className="grid gap-6 md:grid-cols-2">
                {listings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} onScheduleTour={handleScheduleTour} />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[16rem] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white text-center text-slate-500 shadow-inner">
                <p className="text-lg font-heading text-slate-700">Results will appear here</p>
                <p className="mt-2 text-sm text-slate-500">
                  Share a buyer brief to see MLS listings staged by the AI assistant.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <TourScheduler isOpen={schedulerOpen} onClose={() => setSchedulerOpen(false)} listing={selectedListing} />
    </div>
  );
}


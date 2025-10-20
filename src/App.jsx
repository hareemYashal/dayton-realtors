import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Dashboard from './components/dashboard/Dashboard';
import ChatAssistant from './components/chat/ChatAssistant';
import CMAValuation from './components/cma/CMAValuation';
import MarketInsights from './components/market/MarketInsights';
import MarketingCenter from './components/marketing/MarketingCenter';
import ClientRetentionHub from './components/retention/ClientRetentionHub';
import ROISummary from './components/roi/ROISummary';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light-gray">
        <Toaster
          position="top-right"
          toastOptions={{
            className: 'rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-800 shadow-lg shadow-slate-200',
            success: { iconTheme: { primary: '#0D47A1', secondary: '#ffffff' } }
          }}
        />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<ChatAssistant />} />
          <Route path="/cma" element={<CMAValuation />} />
          <Route path="/market" element={<MarketInsights />} />
          <Route path="/marketing" element={<MarketingCenter />} />
          <Route path="/retention" element={<ClientRetentionHub />} />
          <Route path="/roi" element={<ROISummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

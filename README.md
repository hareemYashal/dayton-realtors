# Dayton Realtors AI Dashboard

An AI-powered real estate dashboard prototype built for Dayton Realtors MLS, powered by Haines AI Realty.

## Features

### 1. Dashboard (Home Screen)
- Welcome message for Agent Sarah Miller
- Quick stats: New Leads, Avg Response Time, Saved Hours
- Navigation cards for all modules
- MLS and Haines AI branding

### 2. AI Chat Assistant
- Interactive chat interface with typing animation
- Smart property search (e.g., "3-bed in Kettering under 400k")
- Listing cards with property details
- Tour scheduling modal with date/time picker
- Toast notifications on tour request

### 3. Instant CMA & AI Valuation Tool
- Property address input
- Estimated value with variance range
- Comparable sales with details
- Price vs Time line chart
- Price per Sq Ft bar chart
- CMA Report preview (PDF-style HTML modal)

### 4. Market Insights Dashboard
- Interactive Leaflet heatmap of Dayton area
- ZIP code choropleth with dynamic coloring
- Metric toggles: Demand Index, Median Price, Days on Market, Investor ROI
- Hover tooltips with ZIP stats
- Top 5 Rising ZIPs sidebar

### 5. Marketing Center
- Smart Email Report with pre-filled content and chart
- AI Listing Description Generator with animated text output
- "Send to Past Clients" with toast confirmation

### 6. Client Retention Hub
- Notification cards for client value changes
- Email preview modal with client selection
- "Send Updates" button with confirmation

### 7. ROI & Pilot Summary
- Presentation-style slide with key metrics
- Member retention, revenue projections, pilot offer
- Benefits list and call-to-action

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **React Router** - Navigation
- **TailwindCSS** - Styling
- **Recharts** - Charts and data visualization
- **Leaflet** - Interactive maps
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

## Design

- Blueprint Blue (#0D47A1) - Primary color
- Light Gray (#F7F7F7) - Background
- Inter - Body font
- Poppins - Heading font
- Rounded cards with shadows
- Hover animations and transitions
- Responsive design (desktop-first)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── assets/            # Images and logos
├── components/
│   ├── common/        # Reusable components
│   ├── dashboard/     # Home screen
│   ├── chat/          # AI Chat Assistant
│   ├── cma/           # CMA Valuation Tool
│   ├── market/        # Market Insights
│   ├── marketing/     # Marketing Center
│   ├── retention/     # Client Retention Hub
│   └── roi/           # ROI Summary
├── data/              # Mock JSON data
├── utils/             # Helper functions
└── styles/            # CSS files
```

## Mock Data

All data is stored in JSON files for demonstration purposes:
- `listings.json` - 20 property listings
- `comps.json` - Comparable sales data
- `market-data.json` - ZIP code market metrics
- `geo-dayton.json` - GeoJSON boundaries for Dayton area

## Notes

- This is a functional prototype with no backend
- All interactions use mock data
- No actual API calls are made
- All CTAs trigger modals or toast notifications
- Ready for presentation and demonstration

## License

Proprietary - Dayton Realtors MLS & Haines AI Realty

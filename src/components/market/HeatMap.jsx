import { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import geoDaytonData from '../../data/geo-dayton.json';
import marketData from '../../data/market-data.json';

function MapUpdater({ metric }) {
  const map = useMap();

  useEffect(() => {
    map.invalidateSize();
  }, [map, metric]);

  return null;
}

export default function HeatMap({ metric, theme = 'dark' }) {
  const getColor = (zip) => {
    const data = marketData.find((d) => d.zip === zip);
    if (!data) return theme === 'dark' ? '#64748b' : '#cbd5f5';

    let value;
    let min;
    let max;
    switch (metric) {
      case 'demand':
        value = data.demandIndex;
        min = 60;
        max = 95;
        break;
      case 'price':
        value = data.medianPrice;
        min = 250000;
        max = 600000;
        break;
      case 'dom':
        value = data.daysOnMarket;
        min = 5;
        max = 30;
        break;
      case 'roi':
        value = data.investorROI;
        min = 5;
        max = 10;
        break;
      default:
        return '#0D47A1';
    }

    const normalized = (value - min) / (max - min);
    const clampedNormalized = Math.max(0, Math.min(1, normalized));

    if (metric === 'dom') {
      const red = Math.floor(255 * clampedNormalized);
      const green = Math.floor(255 * (1 - clampedNormalized));
      return `rgba(${red}, ${green}, ${theme === 'dark' ? 120 : 160}, 0.8)`;
    }

    const hue = 210 - clampedNormalized * 140;
    const saturation = theme === 'dark' ? 75 : 65;
    const lightness = theme === 'dark' ? 45 + clampedNormalized * 10 : 60 - clampedNormalized * 15;
    return `hsla(${hue}, ${saturation}%, ${lightness}%, 0.85)`;
  };

  const style = (feature) => ({
    fillColor: getColor(feature.properties.zip),
    weight: 1,
    opacity: 1,
    color: theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(15,23,42,0.2)',
    dashArray: '3 6',
    fillOpacity: 0.75
  });

  const onEachFeature = (feature, layer) => {
    const data = marketData.find((d) => d.zip === feature.properties.zip);
    if (data) {
      let metricValue;
      switch (metric) {
        case 'demand':
          metricValue = `Demand Index: ${data.demandIndex}`;
          break;
        case 'price':
          metricValue = `Median Price: $${data.medianPrice.toLocaleString()}`;
          break;
        case 'dom':
          metricValue = `Days on Market: ${data.daysOnMarket}`;
          break;
        case 'roi':
          metricValue = `Investor ROI: ${data.investorROI}%`;
          break;
        default:
          metricValue = '';
      }

      layer.bindTooltip(
        `<div class="rounded-2xl border ${theme === 'dark' ? 'border-white/10 bg-slate-900/85 text-blue-100' : 'border-blueprint-blue/20 bg-white text-slate-700'} px-4 py-3 text-sm shadow-lg backdrop-blur">
          <div class="text-xs uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-blue-200' : 'text-blueprint-blue/70'}">${feature.properties.name}</div>
          <div class="mt-1 text-sm">ZIP ${feature.properties.zip}</div>
          <div class="mt-2 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-blueprint-blue'}">${metricValue}</div>
          <div class="mt-1 text-xs ${theme === 'dark' ? 'text-blue-200' : 'text-slate-500'}">YoY Change: +${data.yoyChange}%</div>
        </div>`
      );
    }
  };

  const tileLayer =
    theme === 'dark'
      ? {
          url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      : {
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        };

  return (
    <div className="h-[520px] overflow-hidden rounded-3xl">
      <MapContainer center={[39.708, -84.138]} zoom={11} style={{ height: '100%', width: '100%' }}>
        <TileLayer url={tileLayer.url} attribution={tileLayer.attribution} />
        <GeoJSON data={geoDaytonData} style={style} onEachFeature={onEachFeature} key={metric + theme} />
        <MapUpdater metric={metric} />
      </MapContainer>
    </div>
  );
}


export default function LocationStrip() {
  return (
    <div className="location-strip">
      <div className="location-pin-row">
        <div className="pin-dot" />
        <div>
          <div className="mono-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Currently Serving</div>
          <div className="location-name">Connecticut &amp; Surrounding Areas</div>
        </div>
      </div>
      <div className="location-areas">
        <div className="area-tag">Bridgeport</div>
        <div className="area-tag">New Haven</div>
        <div className="area-tag">Stamford</div>
        <div className="area-tag">Hartford</div>
        <div className="area-tag">Waterbury</div>
      </div>
      <div className="mono-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
        Available for travel • Inquiry for rates
      </div>
    </div>
  );
}

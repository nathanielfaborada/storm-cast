const zoomEarthUrl = 'https://zoom.earth/maps/satellite'

export function TyphoonTracker() {
  return (
    <section className="panel typhoon-panel" aria-label="Satellite weather map">
      <div className="typhoon-header">
        <div>
          <h2>Satellite Weather Map</h2>
          <p>Zoom Earth live satellite view</p>
        </div>
        <a
          className="map-open-link"
          href={zoomEarthUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open Map
        </a>
      </div>

      <div className="satellite-frame">
        <div className="satellite-preview" aria-hidden="true">
          <span className="cloud-band band-one" />
          <span className="cloud-band band-two" />
          <span className="storm-eye" />
          <span className="island island-one" />
          <span className="island island-two" />
          <span className="island island-three" />
        </div>

        <div className="satellite-fallback">
          <strong>Live Satellite View</strong>
          <p>Open Zoom Earth to view live satellite imagery, clouds, rain, and tropical systems.</p>
          <div className="satellite-tags">
            <span>Satellite</span>
            <span>Rain radar</span>
            <span>Storms</span>
          </div>
          <a href={zoomEarthUrl} target="_blank" rel="noreferrer">
            Open Zoom Earth
          </a>
        </div>
      </div>
    </section>
  )
}

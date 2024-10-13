import React from 'react';

function Infographic() {
  return (
    <div
        style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        paddingTop: '200.0000%',
        paddingBottom: '0',
        boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
        marginTop: '1.6em', 
        marginBottom: '0.9em',
        overflow: 'hidden',
        borderRadius: '8px',
        willChange: 'transform',
        }}
        >
        <iframe
        loading="lazy"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: 'none',
          padding: 0,
          margin: 0,
        }}
        src="https://www.canva.com/design/DAGTcojgFDU/C6P1Bv28q4o8livA0IF6Hg/view?embed" 
        allowFullScreen
        title="Canva Infographic"
       > </iframe>
    </div>
  );
}

export default Infographic;


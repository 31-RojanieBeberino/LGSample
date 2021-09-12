import React, { useRef, useEffect } from 'react';

export default function Video(url) {
  const videoRef = useRef();
  const previousUrl = useRef(url);
  useEffect(() => {
    if (previousUrl.current === url) {
      return;
    }

    if (videoRef.current) {
      videoRef.current.load();
    }

    previousUrl.current = url;
  }, [url]);
  console.log(url.url);

  return (
    <>
      <div className="overlayBgVideo"></div>
      <video
        ref={videoRef}
        className='VlangdingVidbg'
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '-10%',
          left: 0,
          zIndex: '-1',
          objectFit: 'fill',
          transition: 'scale(1) all .4s ease-in-out',
        }}
      >
        <source src={url.url} type='video/mp4' />
      </video>
    </>
  );
}

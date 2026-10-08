'use client';

import React, { useEffect, useState } from 'react';

export default function NeonRunnerIndirPage() {
  const playStoreURL = "https://play.google.com/store/apps/details?id=com.zkproduction.neonrunner";

  const [deviceType, setDeviceType] = useState<'android' | 'other'>('other');
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';

    if (/android/i.test(userAgent)) {
      setDeviceType('android');
      setRedirecting(true);
      window.location.replace(playStoreURL);
    } else {
      setDeviceType('other');
    }
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #1a052e, #3b0764, #180229)',
      color: 'white',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '430px',
        textAlign: 'center',
        padding: '40px 25px',
        borderRadius: '25px',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
      }}>
        {/* Neon Runner Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img 
            src="/neon-runner.png" 
            alt="Neon Runner: Cyber Dash" 
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '22px',
              boxShadow: '0 8px 25px rgba(217, 70, 239, 0.4)'
            }}
          />
        </div>

        <h1 style={{
          fontSize: '26px',
          fontWeight: 'bold',
          marginBottom: '10px'
        }}>
          Neon Runner: Cyber Dash
        </h1>

        <p style={{
          opacity: 0.8,
          marginBottom: '25px',
          lineHeight: '1.5',
          fontSize: '14px'
        }}>
          {redirecting ? 'Google Play Store\'a yönlendiriliyorsunuz...' : 'Siberpunk neon dünyasında 60 FPS sonsuz koşu oyunu.'}
        </p>

        <a
          href={playStoreURL}
          style={{
            display: 'block',
            width: '100%',
            padding: '16px',
            margin: '12px 0',
            borderRadius: '14px',
            textDecoration: 'none',
            color: 'white',
            fontSize: '17px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #c026d3, #06b6d4)',
            boxShadow: '0 4px 20px rgba(192, 38, 211, 0.4)',
            transition: '0.2s'
          }}
        >
          🎮 Google Play&apos;den İndir
        </a>

        <p style={{
          marginTop: '25px',
          fontSize: '13px',
          opacity: 0.55
        }}>
          {redirecting ? 'Yönlendirme başlamadıysa butona tıklayabilirsiniz.' : 'Android için yayında.'}
        </p>
      </div>
    </div>
  );
}

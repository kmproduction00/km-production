'use client';

import React, { useEffect, useState } from 'react';

export default function EzanVaktiIndirPage() {
  const appleURL = "https://apps.apple.com/tr/app/ezan-vakti-hikaye-dua/id6804218531?l=tr";
  const androidURL = "https://play.google.com/store/apps/details?id=com.ezanvakti.hikayedua.pro";

  const [deviceType, setDeviceType] = useState<'ios' | 'android' | 'desktop'>('desktop');
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';

    // iPhone / iPad / iPod
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as unknown as { MSStream?: boolean }).MSStream) {
      setDeviceType('ios');
      setRedirecting(true);
      window.location.replace(appleURL);
    }
    // Android
    else if (/android/i.test(userAgent)) {
      setDeviceType('android');
      setRedirecting(true);
      window.location.replace(androidURL);
    }
    // Bilgisayar / Diğer
    else {
      setDeviceType('desktop');
    }
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #051429, #0c2b4d, #061933)',
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
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)'
      }}>
        {/* Ezan Vakti Uygulama Logosu */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img 
            src="/ezan-vakti.png" 
            alt="Ezan Vakitleri" 
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '22px',
              boxShadow: '0 8px 25px rgba(6, 182, 212, 0.3)'
            }}
          />
        </div>

        <h1 style={{
          fontSize: '26px',
          fontWeight: 'bold',
          marginBottom: '10px',
          letterSpacing: '-0.5px'
        }}>
          Ezan Vakitleri (Hikaye - Dua)
        </h1>

        <p style={{
          opacity: 0.8,
          marginBottom: '25px',
          lineHeight: '1.5',
          fontSize: '14px'
        }}>
          {redirecting ? 'Resmi mağazaya yönlendiriliyorsunuz...' : 'Diyanet uyumlu ezan saatleri, kıble pusulası, dualar ve manevi hikayeler.'}
        </p>

        {/* Yönlendirme Durumu & Butonlar */}
        {deviceType === 'ios' && (
          <div>
            <a
              href={appleURL}
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
                background: '#111',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
              }}
            >
              🍎 App Store&apos;a Git
            </a>
          </div>
        )}

        {deviceType === 'android' && (
          <div>
            <a
              href={androidURL}
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
                background: '#0284c7',
                boxShadow: '0 4px 15px rgba(2,132,199,0.4)'
              }}
            >
              🤖 Google Play&apos;e Git
            </a>
          </div>
        )}

        {deviceType === 'desktop' && (
          <div>
            <a
              href={appleURL}
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
                background: '#111',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                transition: '0.2s'
              }}
            >
              🍎 App Store
            </a>

            <a
              href={androidURL}
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
                background: '#0284c7',
                boxShadow: '0 4px 15px rgba(2,132,199,0.4)',
                transition: '0.2s'
              }}
            >
              🤖 Google Play
            </a>
          </div>
        )}

        <p style={{
          marginTop: '25px',
          fontSize: '13px',
          opacity: 0.55
        }}>
          {redirecting ? 'Yönlendirme başlamadıysa yukarıdaki butona tıklayabilirsiniz.' : 'Cihazınız otomatik olarak algılanır.'}
        </p>
      </div>
    </div>
  );
}

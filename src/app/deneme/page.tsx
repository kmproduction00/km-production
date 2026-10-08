'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function DenemePage() {
  const appleURL = "https://apps.apple.com/tr/app/diyarbak%C4%B1r-life-21/id6804522256?l=tr";
  const androidURL = "https://play.google.com/store/apps/details?id=com.diyarbakir.life";

  const [deviceType, setDeviceType] = useState<'ios' | 'android' | 'desktop'>('desktop');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';

    // iPhone / iPad / iPod
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as unknown as { MSStream?: boolean }).MSStream) {
      setDeviceType('ios');
    }
    // Android
    else if (/android/i.test(userAgent)) {
      setDeviceType('android');
    }
    // Bilgisayar veya diğer cihazlar
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
      background: 'linear-gradient(135deg, #061f1b, #0b4d43, #062c27)',
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
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.35)'
      }}>
        {/* Uygulama Logosu */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img 
            src="/diyarbakir-life.png" 
            alt="Diyarbakır Life 21" 
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '22px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.4)'
            }}
          />
        </div>

        <h1 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '10px'
        }}>
          Diyarbakır Life 21
        </h1>

        <p style={{
          opacity: 0.75,
          marginBottom: '30px',
          lineHeight: '1.5',
          fontSize: '15px'
        }}>
          Diyarbakır&apos;ın dijital yaşam uygulaması.<br />
          Uygulamayı cihazınıza indirin.
        </p>

        {/* Akıllı İndirme Butonları */}
        {mounted && deviceType === 'ios' && (
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
            🍎 App Store&apos;dan İndir
          </a>
        )}

        {mounted && deviceType === 'android' && (
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
              background: '#16853b',
              boxShadow: '0 4px 15px rgba(22,133,59,0.4)',
              transition: '0.2s'
            }}
          >
            🤖 Google Play&apos;den İndir
          </a>
        )}

        {(!mounted || deviceType === 'desktop') && (
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
                background: '#16853b',
                boxShadow: '0 4px 15px rgba(22,133,59,0.4)',
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
          Cihazınız otomatik olarak algılanacaktır.
        </p>
      </div>
    </div>
  );
}

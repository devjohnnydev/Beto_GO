import React from 'react';
import { Menu, X, Recycle, Phone } from 'lucide-react';
import logoImg from '../assets/logo.png';
import whatsappLogoImg from '../assets/whatsapp-logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, height: '70px', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={logoImg} alt="Beto Sucata" style={{ height: '40px', width: 'auto' }} />
          <span className="chrome-text" style={{ fontSize: '1.25rem', fontWeight: 800 }}>BETO SUCATA</span>
        </div>

        <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
          <a href="#hero" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600 }}>Home</a>
          <a href="#servicos" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600 }}>Serviços</a>
          <a href="#sobre" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600 }}>Sobre</a>
          <a href="#contato" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600 }}>Contato</a>
        </div>

        <a href="https://wa.me/5562994651152" className="btn btn-whatsapp" style={{ padding: '0.5rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={whatsappLogoImg} alt="WhatsApp" style={{ width: '20px', height: '20px' }} />
          <span>Falar com Beto</span>
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}

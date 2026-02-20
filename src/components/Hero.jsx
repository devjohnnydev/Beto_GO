import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldCheck, Zap } from 'lucide-react';
import logoImg from '../assets/logo.png';
import bgEcoImg from '../assets/bg-eco.jpg';

export default function Hero() {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '100px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Subtle Image */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '50%',
                height: '100%',
                backgroundImage: `url(${bgEcoImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1), transparent)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.4), transparent)',
                opacity: 0.15,
                zIndex: -2
            }}></div>

            <div className="container grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--eco-green)', fontWeight: 600, marginBottom: '1rem' }}>
                        <Leaf size={18} />
                        <span>PENSANDO NO FUTURO</span>
                    </div>
                    <h1 style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        Reciclagem de <span className="chrome-text">Excelência</span> para as <br />
                        <span className="eco-text">Próximas Gerações</span>.
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '500px' }}>
                        Compramos sua sucata eletrônica e metais com foco na preservação ambiental. Transformamos resíduos em responsabilidade social e renovação do nosso planeta.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://wa.me/5562994651152" className="btn btn-whatsapp" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Solicitar Orçamento <ArrowRight size={20} />
                        </a>
                        <a href="#sustentabilidade" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                            Conheça Nossa Missão
                        </a>
                    </div>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <ShieldCheck style={{ color: 'var(--primary)' }} />
                            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Empresa Registrada</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Zap style={{ color: 'var(--primary)' }} />
                            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Pagamento na Hora</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
                >
                    <div style={{
                        position: 'absolute',
                        width: '400px',
                        height: '400px',
                        background: 'var(--eco-green)',
                        filter: 'blur(100px)',
                        opacity: 0.1,
                        zIndex: -1
                    }}></div>
                    <img
                        src={logoImg}
                        alt="Beto Sucata Logo"
                        style={{
                            width: '100%',
                            maxWidth: '500px',
                            filter: 'drop-shadow(0 0 30px rgba(0, 119, 182, 0.3))'
                        }}
                    />
                </motion.div>
            </div>

            <style jsx>{`
        @media (max-width: 968px) {
          #hero .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #hero h1 { font-size: 2.5rem !important; }
          #hero p { margin-left: auto; margin-right: auto; }
          #hero .container { display: flex; flex-direction: column-reverse; gap: 3rem; }
          #hero div { align-items: center; justify-content: center; }
        }
      `}</style>
        </section>
    );
}

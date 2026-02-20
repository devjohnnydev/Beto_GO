import React from 'react';
import { Monitor, Cpu, Trash2, Layers, Battery, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const materials = [
    {
        icon: <Monitor size={40} />,
        title: "Sucata Eletrônica",
        desc: "Placas-mãe, computadores, servidores e componentes de informática."
    },
    {
        icon: <Cpu size={40} />,
        title: "Metais Nobres",
        desc: "Cobre, fios, barramentos e componentes com ligas especiais."
    },
    {
        icon: <Layers size={40} />,
        title: "Outros Metais",
        desc: "Alumínio, inox e sucatas metálicas industriais e residenciais."
    },
    {
        icon: <Trash2 size={40} />,
        title: "Plásticos",
        desc: "Plásticos industriais, polímeros e descartes recicláveis em geral."
    },
    {
        icon: <Battery size={40} />,
        title: "Baterias",
        desc: "Coleta e destinação de baterias e acumuladores de diversos tipos."
    },
    {
        icon: <Leaf size={40} />,
        title: "Descarte Sustentável",
        desc: "Apoio a empresas e indivíduos na destinação correta de resíduos."
    }
];

export default function Services() {
    return (
        <section id="servicos" className="glass" style={{ margin: '4rem 0', borderRadius: '2rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Nossos <span className="chrome-text">Serviços</span></h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Compromisso com a eficiência e a sustentabilidade em cada material processado.
                    </p>
                </div>

                <div className="grid grid-3">
                    {materials.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ translateY: -10 }}
                            style={{
                                padding: '2.5rem',
                                background: 'var(--surface)',
                                borderRadius: '1.5rem',
                                border: '1px solid rgba(255,255,255,0.05)',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                {index >= 4 ? <div style={{ color: 'var(--eco-green)' }}>{item.icon}</div> : item.icon}
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

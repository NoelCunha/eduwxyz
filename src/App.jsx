import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { 
      Terminal, Cpu, ArrowRight, Youtube, ExternalLink, 
      Bot, Layers, Code2, Zap, Square, Plus, Disc
    } from 'lucide-react';

    // --- Variantes de Animação (Configurações Mecânicas) ---
    
    const containerVars = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        }
      }
    };

    const itemVars = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "circOut" } // Movimento seco/rápido
      }
    };

    const revealVars = {
      hidden: { scaleX: 0, originX: 0 },
      visible: { 
        scaleX: 1, 
        transition: { duration: 0.5, ease: "circInOut" } 
      }
    };

    // --- Componentes Auxiliares ---

    const Crosshair = ({ className }) => (
      <div className={`absolute w-4 h-4 flex items-center justify-center pointer-events-none text-[#333] ${className}`}>
        <Plus size={16} strokeWidth={1} />
      </div>
    );

    const BrutalCard = ({ icon: Icon, title, description, number }) => (
      <motion.div
        variants={itemVars}
        whileHover={{ scale: 0.98, backgroundColor: "#ffffff", color: "#000000" }}
        transition={{ duration: 0.1 }}
        className="group relative border-b border-[#222] sm:border-r p-6 sm:p-8 h-full flex flex-col justify-between cursor-crosshair bg-[#050505] min-h-[200px]"
      >
        <Crosshair className="top-[-8px] left-[-8px] hidden sm:flex" />

        <div>
          <div className="flex justify-between items-start mb-6 sm:mb-8">
            <Icon size={28} strokeWidth={1.5} className="text-[#444] group-hover:text-black transition-colors duration-100 sm:w-8 sm:h-8" />
            <span className="font-mono text-xs font-bold opacity-50">0{number}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-200">
            {title}
          </h3>
        </div>

        <p className="text-[#666] text-sm leading-relaxed group-hover:text-black/70 font-medium transition-colors duration-100">
          {description}
        </p>
      </motion.div>
    );

    function App() {
      const [email, setEmail] = useState('');
      const [submitted, setSubmitted] = useState(false);

      const handleSubmit = (e) => {
        e.preventDefault();
        if (email) setSubmitted(true);
      };

      return (
        <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-mono flex flex-col relative selection:bg-neon selection:text-black overflow-x-hidden">
          
          {/* Overlay CRT */}
          <div className="scanlines fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>

          {/* --- Marquee Top Bar --- */}
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="border-b border-[#222] bg-black text-white overflow-hidden py-2 sm:py-3 whitespace-nowrap relative z-40"
          >
            <div className="animate-marquee inline-block text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em]">
              <span className="mx-4 sm:mx-8">SYSTEM_STATUS: ONLINE</span>
              <span className="mx-4 sm:mx-8 text-neon">/// VIBE CODING</span>
              <span className="mx-4 sm:mx-8">AI ENGINEERING LABS</span>
              <span className="mx-4 sm:mx-8 hidden sm:inline">NO_CODE_REQUIRED</span>
              <span className="mx-4 sm:mx-8">SYSTEM_STATUS: ONLINE</span>
              <span className="mx-4 sm:mx-8 text-neon">/// VIBE CODING</span>
            </div>
          </motion.div>

          {/* --- Navigation --- */}
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border-b border-[#222] px-4 py-4 sm:p-6 flex justify-between items-center sticky top-0 bg-[#050505]/90 backdrop-blur-sm z-30"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-neon animate-pulse"></div>
              <span className="font-bold tracking-tighter text-sm sm:text-lg">AI_ENG_LABS</span>
            </div>
            <div className="hidden md:flex gap-6 text-xs font-bold text-[#666]">
              {['[MANIFESTO]', '[STACK]', '[ACCESS]'].map((item, i) => (
                <motion.span
                  key={item}
                  whileHover={{ color: "#fff", x: -2 }}
                  className="cursor-pointer"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            {/* Mobile menu indicator */}
            <div className="flex md:hidden gap-1">
              <div className="w-1 h-1 bg-[#666]"></div>
              <div className="w-1 h-1 bg-[#666]"></div>
              <div className="w-1 h-1 bg-[#666]"></div>
            </div>
          </motion.header>
          
          {/* --- Hero Section --- */}
          <section className="border-b border-[#222] grid lg:grid-cols-12 min-h-[60vh] sm:min-h-[85vh]">

            {/* Left Content */}
            <div className="lg:col-span-7 p-5 sm:p-8 md:p-16 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#222] relative">
              <Crosshair className="bottom-[-8px] right-[-8px] z-10 hidden sm:flex" />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 sm:mb-12"
              >
                <span className="bg-[#222] text-[#888] px-2 py-1 text-[9px] sm:text-[10px] uppercase tracking-widest">
                  v2.0.4 // Stable Build
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.85] tracking-tighter mb-6 sm:mb-10 overflow-hidden">
                <motion.span
                  initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "circOut" }}
                  className="block hover:text-neon transition-colors duration-300"
                >
                  Não escreva
                </motion.span>
                <motion.span
                  initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.1, ease: "circOut" }}
                  className="block text-stroke hover:text-stroke-hover transition-all duration-300"
                >
                  código.
                </motion.span>
                <motion.span
                  initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.2, ease: "circOut" }}
                  className="block text-neon animate-glitch"
                >
                  Orquestre.
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-[#666] text-base sm:text-lg max-w-md mb-8 sm:mb-16 leading-relaxed border-l-2 border-[#222] pl-4 sm:pl-6"
              >
                A sintaxe é irrelevante. O contexto é tudo. Bem-vindo à era da Engenharia Agêntica.
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: "circOut" }}
                className="w-full max-w-md relative group origin-left"
              >
                <div className="absolute -inset-1 bg-neon opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row border border-[#333] bg-black">
                    <div className="hidden sm:flex items-center justify-center px-4 border-r border-[#333] text-[#444]">
                      <Terminal size={16} />
                    </div>
                    <input
                      type="email"
                      placeholder="INPUT_EMAIL..."
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent p-3 sm:p-4 text-white placeholder-[#333] focus:outline-none font-bold uppercase text-xs sm:text-sm"
                    />
                    <motion.button
                      whileHover={{ backgroundColor: "#00FF00", color: "#000" }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="bg-white text-black px-6 sm:px-8 py-3 sm:py-0 font-bold uppercase transition-colors flex items-center justify-center gap-2 border-t sm:border-t-0 border-[#333]"
                    >
                      <span className="sm:hidden text-xs">ENVIAR</span>
                      <ArrowRight size={18} />
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="border border-neon bg-neon/10 p-3 sm:p-4 text-neon flex items-center gap-3 sm:gap-4"
                  >
                    <Square size={16} fill="currentColor" />
                    <span className="font-bold uppercase tracking-widest text-xs sm:text-sm">Access_Granted</span>
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 bg-[#080808] relative overflow-hidden flex flex-col border-b lg:border-b-0 border-[#222] min-h-[300px] sm:min-h-[400px]">
              <div className="absolute inset-0 opacity-10"
                   style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
              </div>

              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between relative z-10">
                <div className="flex justify-between items-start">
                  <div className="text-[9px] sm:text-[10px] text-[#444]">
                    CPU_USAGE: <span className="text-white">12%</span><br/>
                    MEM_ALLOC: <span className="text-white">4.2GB</span>
                  </div>
                  <Disc className="text-[#222] animate-spin w-4 h-4 sm:w-6 sm:h-6" style={{ animationDuration: '3s' }} />
                </div>

                <motion.div
                  variants={containerVars}
                  initial="hidden"
                  animate="visible"
                  className="font-mono text-[10px] sm:text-xs md:text-sm space-y-1 sm:space-y-2 my-auto py-4"
                >
                  <motion.div variants={itemVars} className="text-[#444] border-b border-[#222] pb-2 mb-3 sm:mb-4">
                    // AGENT_LOGS.TXT
                  </motion.div>
                  <motion.p variants={itemVars} className="text-neon truncate">> Initializing ArchitectAgent...</motion.p>
                  <motion.p variants={itemVars} className="text-[#666] truncate">Loading context window (128k)... OK</motion.p>
                  <motion.p variants={itemVars} className="text-[#666] truncate">Connecting to VectorDB... OK</motion.p>
                  <motion.p variants={itemVars} className="text-white truncate">> User Goal: "Build SaaS MVP"</motion.p>
                  <motion.p variants={itemVars} className="text-[#666] hidden sm:block">Analyzing requirements...</motion.p>
                  <motion.p variants={itemVars} className="text-[#666] hidden sm:block">Generating schema...</motion.p>
                  <motion.p variants={itemVars} className="text-neon animate-blink">_</motion.p>
                </motion.div>

                <div className="grid grid-cols-3 gap-px bg-[#222] border border-[#222]">
                  {['REACT', 'PYTHON', 'SQL'].map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ backgroundColor: "#111", color: "#fff" }}
                      className="bg-[#080808] p-2 text-center text-[9px] sm:text-[10px] text-[#666] cursor-pointer transition-colors"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* --- Features Grid --- */}
          <section className="border-b border-[#222]">
            <motion.div
              variants={containerVars}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              <motion.div variants={itemVars} className="p-6 sm:p-10 border-b border-[#222] sm:border-r col-span-1 sm:col-span-2 lg:col-span-3 bg-[#0a0a0a] flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-2">
                    Tech Stack <span className="text-neon">2025</span>
                  </h2>
                  <p className="text-[#666] max-w-md text-sm sm:text-base">
                    Ferramentas para quem parou de digitar e começou a arquitetar.
                  </p>
                </div>
                <div className="flex gap-2">
                  <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 bg-white"></motion.div>
                  <div className="w-2 h-2 bg-[#333]"></div>
                  <div className="w-2 h-2 bg-[#333]"></div>
                </div>
              </motion.div>

              <BrutalCard number="1" icon={Bot} title="Agentes Autônomos" description="Sistemas que planejam e executam. Saia do loop imperativo." />
              <BrutalCard number="2" icon={Layers} title="RAG Avançado" description="Memória de longo prazo e contexto infinito para seus modelos." />
              <BrutalCard number="3" icon={Code2} title="Prompt Engineering" description="A nova linguagem de programação é o Inglês (ou Português)." />
              <BrutalCard number="4" icon={Cpu} title="LLM Ops" description="Infraestrutura robusta para modelos estocásticos." />
              <BrutalCard number="5" icon={Zap} title="Automação" description="Workflows inteligentes que se auto-corrigem." />
              <BrutalCard number="6" icon={Terminal} title="Dev Tools" description="Cursor, Replit, V0. O fim do localhost como conhecemos." />
            </motion.div>
          </section>

          {/* --- YouTube Section --- */}
          <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#222]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="bg-[#e5e5e5] text-black p-6 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden group"
            >
              <Crosshair className="top-4 right-4 text-black hidden sm:flex" />

              <div className="absolute bottom-0 right-0 text-[100px] sm:text-[150px] md:text-[200px] font-bold text-black opacity-5 leading-none select-none pointer-events-none">
                YT
              </div>

              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-red-600 text-white px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold uppercase">Live</div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">@eduwxyz</div>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-6 sm:mb-8 leading-[0.9]">
                Conteúdo<br/>Denso
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-md font-medium leading-relaxed border-l-4 border-black pl-4 sm:pl-6">
                Sem cortes rápidos. Sem hype vazio. Apenas engenharia real, live coding e análise de papers.
              </p>

              <motion.a
                href="https://www.youtube.com/@eduwxyz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: "8px 8px 0px 0px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-between w-full max-w-sm bg-black text-white px-6 sm:px-8 py-4 sm:py-6 font-bold uppercase hover:bg-red-600 transition-colors text-sm sm:text-base"
              >
                <span>Acessar Canal</span>
                <ExternalLink size={18} className="sm:w-5 sm:h-5" />
              </motion.a>
            </motion.div>

            <div className="bg-[#0a0a0a] p-6 sm:p-12 flex items-center justify-center lg:border-l border-[#222] relative min-h-[250px] sm:min-h-[350px]">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-full aspect-video border border-[#333] bg-black flex items-center justify-center relative group cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/10 transition-colors z-10"></div>

                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 flex justify-between text-[8px] sm:text-[10px] text-[#666] z-20">
                  <span className="animate-pulse text-red-500">REC ●</span>
                  <span>00:12:45:02</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-2 border-white rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm"
                  >
                    <div className="w-0 h-0 border-t-[8px] sm:border-t-[10px] md:border-t-[12px] border-t-transparent border-l-[16px] sm:border-l-[20px] md:border-l-[24px] border-l-white border-b-[8px] sm:border-b-[10px] md:border-b-[12px] border-b-transparent ml-1 sm:ml-2"></div>
                  </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#333]">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "33%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-red-600"
                  ></motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* --- Footer --- */}
          <footer className="p-6 sm:p-8 md:p-12 bg-[#050505] text-[#444] flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-3 sm:mb-4 text-white"
              >
                AI_ENG_LABS
              </motion.div>
              <div className="text-xs sm:text-sm max-w-xs font-mono leading-relaxed">
                Explorando a fronteira entre código humano e inteligência sintética.
                <br/><br/>
                São Paulo, BR // Est. 2024
              </div>
            </div>

            <div className="flex flex-row flex-wrap md:flex-col gap-3 sm:gap-2 md:items-end text-xs sm:text-sm font-bold uppercase tracking-widest">
              {['Twitter_X', 'GitHub', 'LinkedIn', 'Email'].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ x: -5, color: "#fff" }}
                  className="transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </footer>

        </div>
      );
    }

    export default App;

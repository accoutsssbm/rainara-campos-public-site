import { ArrowUpRight, Instagram, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;
const whatsappBase = "https://wa.me/5531987704685";
const instagramUrl = "https://www.instagram.com/rainara_campos/";

const results = [
  {
    image: asset("pos-operatorio.jpg"),
    eyebrow: "Pós-operatório",
    title: "Evolução acompanhada, etapa por etapa",
    text: "Registro publicado no Instagram sobre acompanhamento pós-cirúrgico e evolução do tecido.",
    href: "https://www.instagram.com/p/DbE9O9rkeSF/",
    featured: true,
  },
  {
    image: asset("minilipo.jpg"),
    eyebrow: "Pós de mini lipo",
    title: "Recuperação assistida e individualizada",
    text: "Registro real de recuperação compartilhado no perfil profissional.",
    href: "https://www.instagram.com/p/DbHaZZwx23B/",
  },
  {
    image: asset("harmonia.jpg"),
    eyebrow: "Harmonia",
    title: "Equilíbrio sem perder identidade",
    text: "Resultado publicado com proposta de naturalidade e proporção.",
    href: "https://www.instagram.com/p/DbHcJVnx9is/",
  },
  {
    image: asset("labios.jpg"),
    eyebrow: "Lábios",
    title: "Contorno, hidratação e movimento natural",
    text: "Resultado apresentado no Instagram da profissional.",
    href: "https://www.instagram.com/p/DbHbRmYxU5B/",
    featured: true,
  },
  {
    image: asset("cuidado.jpg"),
    eyebrow: "Cuidado próximo",
    title: "Acolhimento também faz parte do processo",
    text: "Um registro do atendimento e da relação de cuidado com cada paciente.",
    href: "https://www.instagram.com/p/DbEtX31Eb_b/",
  },
];

const procedures = [
  {
    n: "01",
    title: "Pós-operatório",
    text: "Acompanhamento individual após cirurgias, respeitando a liberação médica, a fase de recuperação e a resposta de cada corpo.",
  },
  {
    n: "02",
    title: "Plasma no pós-operatório",
    text: "Recurso que pode integrar alguns protocolos de recuperação quando houver indicação profissional e alinhamento com a equipe responsável pelo pós-cirúrgico.",
  },
  {
    n: "03",
    title: "Criolipólise",
    text: "Avaliação da região, objetivos e contraindicações antes de qualquer indicação. O resultado é gradual e varia de pessoa para pessoa.",
  },
  {
    n: "04",
    title: "Harmonização de glúteos",
    text: "Planejamento corporal individualizado com foco em proporção, contorno e naturalidade, sempre após avaliação presencial.",
  },
  {
    n: "05",
    title: "Botox",
    text: "Planejamento personalizado para suavização de linhas de expressão, preservando movimento, identidade e naturalidade.",
  },
];

const articles = [
  {
    tag: "Pós-operatório",
    title: "O pós não começa quando o procedimento termina",
    text: "A recuperação é uma sequência de fases. Edema, sensibilidade e mobilidade mudam ao longo dos dias, por isso a conduta precisa acompanhar a evolução — e nunca substituir as orientações do cirurgião.",
  },
  {
    tag: "Plasma",
    title: "Plasma em pós-operatório: onde ele entra no cuidado",
    text: "Recursos baseados em plasma podem ser considerados em situações específicas, mas não são um protocolo automático para todo pós-operatório. A indicação depende da fase de cicatrização, integridade da pele, objetivo terapêutico e liberação da equipe responsável.",
  },
  {
    tag: "Criolipólise",
    title: "Criolipólise: indicação é mais importante do que tendência",
    text: "Antes da sessão é necessário avaliar tecido, região, histórico e expectativa. O tratamento não substitui emagrecimento e não produz o mesmo resultado em todos os corpos. Uma boa indicação começa por uma conversa honesta.",
  },
  {
    tag: "Harmonização de glúteos",
    title: "Contorno corporal deve respeitar anatomia e proporção",
    text: "Harmonização não significa padronização. O planejamento deve considerar estrutura corporal, assimetrias, objetivo estético e limites técnicos para construir uma proposta compatível com o biotipo da paciente.",
  },
  {
    tag: "Botox",
    title: "Botox natural começa com movimento, não com exagero",
    text: "A avaliação considera dinâmica muscular, linhas de expressão e áreas de maior contração. A proposta deve ser individualizada, com explicação clara sobre início de efeito, duração esperada e necessidade de reavaliação.",
  },
];

function whatsapp(message: string) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

const styles = `
  :root{--ink:#2e2a27;--muted:#6f665f;--paper:#f4f1ed;--sand:#e7dfd7;--stone:#d7ccc2;--line:#c9bdb2;--cream:#fbf9f6;--deep:#403a35}
  html{scroll-behavior:smooth}
  body{background:var(--paper);color:var(--ink)}
  .rc-shell{min-height:100vh;background:var(--paper);font-family:"DM Sans",sans-serif}
  .rc-container{width:min(1180px,calc(100% - 40px));margin:0 auto}
  .rc-header{position:sticky;top:0;z-index:40;background:rgba(244,241,237,.9);backdrop-filter:blur(16px);border-bottom:1px solid rgba(64,58,53,.09)}
  .rc-nav{height:76px;display:flex;align-items:center;justify-content:space-between;gap:28px}
  .rc-brand{display:flex;align-items:center;gap:12px;color:var(--ink);text-decoration:none}
  .rc-brand img{width:42px;height:42px;border-radius:50%;object-fit:cover;filter:saturate(.78)}
  .rc-brand strong{display:block;font-family:"DM Serif Display",serif;font-size:22px;font-weight:400;line-height:1}
  .rc-brand small{display:block;color:var(--muted);font-size:10px;text-transform:uppercase;letter-spacing:.16em;margin-top:5px}
  .rc-links{display:flex;align-items:center;gap:28px}.rc-links a{font-size:13px;color:var(--muted);text-decoration:none}.rc-links a:hover{color:var(--ink)}
  .rc-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;border-radius:999px;padding:13px 19px;text-decoration:none;font-size:13px;font-weight:600;transition:.2s ease}
  .rc-btn-primary{background:var(--deep);color:#fff}.rc-btn-primary:hover{transform:translateY(-1px);background:#26221f}
  .rc-btn-ghost{border:1px solid var(--line);color:var(--ink);background:rgba(255,255,255,.25)}
  .rc-hero{padding:72px 0 84px}.rc-hero-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:72px;align-items:center}
  .rc-kicker{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#7a6e65;font-weight:700;margin-bottom:18px}
  .rc-hero h1,.rc-section-title{font-family:"DM Serif Display",serif;font-weight:400;letter-spacing:-.03em}
  .rc-hero h1{font-size:clamp(50px,6.2vw,86px);line-height:.95;margin:0;max-width:720px}.rc-hero h1 em{font-weight:400;color:#8e7d70}
  .rc-lede{font-size:17px;line-height:1.75;color:var(--muted);max-width:590px;margin:28px 0 30px}
  .rc-actions{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:34px}
  .rc-proof{display:flex;flex-wrap:wrap;gap:22px;color:var(--muted);font-size:12px}.rc-proof span{display:flex;align-items:center;gap:7px}
  .rc-visual{position:relative;min-height:600px}.rc-visual-main{position:absolute;right:0;top:0;width:76%;height:78%;border-radius:4px;overflow:hidden}.rc-visual-main img{width:100%;height:100%;object-fit:cover;filter:saturate(.72) contrast(.96)}
  .rc-visual-small{position:absolute;left:0;bottom:0;width:46%;height:47%;border:10px solid var(--paper);overflow:hidden}.rc-visual-small img{width:100%;height:100%;object-fit:cover;filter:saturate(.72)}
  .rc-caption{position:absolute;right:18px;bottom:66px;background:rgba(251,249,246,.94);padding:15px 17px;width:210px;font-size:11px;line-height:1.5;color:var(--muted);border:1px solid rgba(64,58,53,.09)}
  .rc-band{background:var(--deep);color:#f5f1ed;padding:18px 0}.rc-band-inner{display:flex;justify-content:center;gap:34px;flex-wrap:wrap;font-size:11px;letter-spacing:.12em;text-transform:uppercase}.rc-band i{font-style:normal;opacity:.35}
  .rc-section{padding:96px 0}.rc-section-soft{background:#ebe5df}.rc-heading{display:grid;grid-template-columns:1fr .72fr;gap:60px;align-items:end;margin-bottom:42px}
  .rc-section-title{font-size:clamp(42px,5vw,68px);line-height:.98;margin:0}.rc-heading p{margin:0;color:var(--muted);line-height:1.75;font-size:14px}
  .rc-results{display:grid;grid-template-columns:repeat(12,1fr);gap:16px}.rc-result{grid-column:span 4;text-decoration:none;color:inherit;background:var(--cream);border:1px solid rgba(64,58,53,.08);overflow:hidden}.rc-result.featured{grid-column:span 6}
  .rc-result img{width:100%;aspect-ratio:4/5;object-fit:cover;display:block;filter:saturate(.8);transition:.35s}.rc-result:hover img{transform:scale(1.015);filter:saturate(.95)}
  .rc-result-copy{padding:20px}.rc-result-copy span,.rc-card-num,.rc-article-tag{font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:#8a786a;font-weight:700}.rc-result-copy h3{font-family:"DM Serif Display",serif;font-weight:400;font-size:27px;line-height:1.05;margin:9px 0 10px}.rc-result-copy p{font-size:12px;line-height:1.65;color:var(--muted);margin:0}.rc-result-link{display:inline-flex;align-items:center;gap:6px;margin-top:15px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em}
  .rc-note{margin-top:18px;color:#7b7068;font-size:11px;line-height:1.6}
  .rc-procedures{display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}.rc-procedure{min-height:285px;padding:24px 22px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;flex-direction:column}.rc-card-num{margin-bottom:auto}.rc-procedure h3{font-family:"DM Serif Display",serif;font-size:28px;font-weight:400;line-height:1.03;margin:28px 0 13px}.rc-procedure p{font-size:12px;line-height:1.72;color:var(--muted);margin:0}
  .rc-articles{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.rc-article{background:var(--cream);padding:30px;border:1px solid rgba(64,58,53,.08)}.rc-article:last-child{grid-column:1/-1;display:grid;grid-template-columns:.42fr 1fr;gap:48px;align-items:center}.rc-article h3{font-family:"DM Serif Display",serif;font-weight:400;font-size:31px;line-height:1.06;margin:10px 0 14px}.rc-article p{font-size:13px;line-height:1.75;color:var(--muted);margin:0}.rc-article a{display:inline-flex;align-items:center;gap:7px;margin-top:20px;color:var(--ink);text-decoration:none;font-size:12px;font-weight:700}
  .rc-about{display:grid;grid-template-columns:.8fr 1.2fr;gap:68px;align-items:center}.rc-about-photo{aspect-ratio:4/5;background:var(--sand);overflow:hidden}.rc-about-photo img{width:100%;height:100%;object-fit:cover;filter:grayscale(.16) saturate(.72)}.rc-about-copy h2{font-family:"DM Serif Display",serif;font-size:clamp(40px,5vw,64px);font-weight:400;line-height:1;margin:0 0 24px}.rc-about-copy p{color:var(--muted);font-size:15px;line-height:1.8;margin:0 0 16px}
  .rc-cta{padding:84px 0;background:#dcd2c9}.rc-cta-inner{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center}.rc-cta h2{font-family:"DM Serif Display",serif;font-size:clamp(42px,5vw,68px);font-weight:400;line-height:.98;margin:0}.rc-cta p{max-width:650px;color:var(--muted);font-size:14px;line-height:1.7;margin:18px 0 0}
  .rc-footer{padding:36px 0 45px;background:var(--deep);color:#e8e1da}.rc-footer-inner{display:flex;justify-content:space-between;gap:24px;align-items:flex-end}.rc-footer p{font-size:11px;color:#bfb5ac;line-height:1.7;margin:8px 0 0}.rc-footer a{color:#e8e1da;text-decoration:none}.rc-social{display:flex;gap:12px}.rc-social a{width:42px;height:42px;border:1px solid rgba(255,255,255,.18);border-radius:50%;display:flex;align-items:center;justify-content:center}
  @media(max-width:980px){.rc-links{display:none}.rc-hero-grid,.rc-heading,.rc-about{grid-template-columns:1fr}.rc-hero{padding-top:48px}.rc-visual{min-height:520px}.rc-heading{gap:20px}.rc-results{grid-template-columns:1fr 1fr}.rc-result,.rc-result.featured{grid-column:auto}.rc-procedures{grid-template-columns:repeat(2,1fr)}.rc-article:last-child{display:block}.rc-cta-inner{grid-template-columns:1fr}}
  @media(max-width:640px){.rc-container{width:min(100% - 28px,1180px)}.rc-nav{height:68px}.rc-nav>.rc-btn{padding:11px 14px}.rc-nav>.rc-btn span{display:none}.rc-hero{padding:42px 0 62px}.rc-hero-grid{gap:36px}.rc-visual{min-height:430px}.rc-visual-main{width:84%;height:78%}.rc-visual-small{width:48%;height:44%;border-width:6px}.rc-caption{right:8px;bottom:34px;width:180px}.rc-section{padding:72px 0}.rc-results,.rc-articles{grid-template-columns:1fr}.rc-result,.rc-result.featured{grid-column:auto}.rc-procedures{grid-template-columns:1fr}.rc-procedure{min-height:220px}.rc-about{gap:36px}.rc-cta{padding:64px 0}.rc-footer-inner{align-items:flex-start;flex-direction:column}.rc-band-inner{justify-content:flex-start;gap:12px 18px}}
`;

export default function Home() {
  return (
    <div className="rc-shell">
      <style>{styles}</style>

      <header className="rc-header">
        <div className="rc-container rc-nav">
          <a className="rc-brand" href="#inicio" aria-label="Rainara Campos - início">
            <img src={asset("profile.jpg")} alt="Rainara Campos" />
            <span><strong>Rainara Campos</strong><small>Estética · cuidado · resultado</small></span>
          </a>
          <nav className="rc-links" aria-label="Navegação principal">
            <a href="#resultados">Resultados</a>
            <a href="#procedimentos">Procedimentos</a>
            <a href="#conteudos">Conteúdos</a>
            <a href="#sobre">Sobre</a>
          </nav>
          <a className="rc-btn rc-btn-primary" href={whatsapp("Olá, Rainara! Gostaria de agendar uma avaliação.")} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /><span>Agendar avaliação</span>
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="rc-hero">
          <div className="rc-container rc-hero-grid">
            <div>
              <div className="rc-kicker">Estética avançada · Parauapebas, PA</div>
              <h1>Resultado que se vê.<br /><em>Cuidado que se sente.</em></h1>
              <p className="rc-lede">Um espaço digital para conhecer trabalhos reais, entender os procedimentos e chegar à avaliação com mais informação. Pós-operatório, criolipólise, harmonização corporal e facial com um olhar individual para cada paciente.</p>
              <div className="rc-actions">
                <a className="rc-btn rc-btn-primary" href={whatsapp("Olá, Rainara! Vi seus resultados e quero saber qual procedimento é indicado para mim.")} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Quero conversar</a>
                <a className="rc-btn rc-btn-ghost" href="#resultados">Ver resultados <ArrowUpRight size={16} /></a>
              </div>
              <div className="rc-proof">
                <span><ShieldCheck size={16} /> Avaliação individualizada</span>
                <span><MapPin size={16} /> Cidade Jardim · Parauapebas</span>
              </div>
            </div>
            <div className="rc-visual" aria-label="Registros de resultados publicados no Instagram">
              <div className="rc-visual-main"><img src={asset("pos-operatorio.jpg")} alt="Resultado de acompanhamento pós-operatório publicado no Instagram" /></div>
              <div className="rc-visual-small"><img src={asset("labios.jpg")} alt="Resultado estético publicado no Instagram" /></div>
              <div className="rc-caption">Registros reais publicados no perfil profissional. Resultados individuais podem variar.</div>
            </div>
          </div>
        </section>

        <div className="rc-band">
          <div className="rc-container rc-band-inner"><span>Pós-operatório</span><i>•</i><span>Plasma</span><i>•</i><span>Criolipólise</span><i>•</i><span>Harmonização de glúteos</span><i>•</i><span>Botox</span></div>
        </div>

        <section className="rc-section" id="resultados">
          <div className="rc-container">
            <div className="rc-heading">
              <div><div className="rc-kicker">Antes, depois e evolução</div><h2 className="rc-section-title">Resultados que<br />contam uma história.</h2></div>
              <p>Seleção de registros já publicados no Instagram de <strong>@rainara_campos</strong>. Clique em cada trabalho para abrir a publicação original e ver o contexto do atendimento.</p>
            </div>
            <div className="rc-results">
              {results.map((item) => (
                <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className={`rc-result ${item.featured ? "featured" : ""}`}>
                  <img src={item.image} alt={`${item.eyebrow}: ${item.title}`} />
                  <div className="rc-result-copy">
                    <span>{item.eyebrow}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="rc-result-link">Ver no Instagram <ArrowUpRight size={14} /></div>
                  </div>
                </a>
              ))}
            </div>
            <p className="rc-note">Imagens de resultados devem ser interpretadas como registros individuais. Não representam promessa de resultado e a indicação depende de avaliação profissional.</p>
          </div>
        </section>

        <section className="rc-section rc-section-soft" id="procedimentos">
          <div className="rc-container">
            <div className="rc-heading">
              <div><div className="rc-kicker">Procedimentos</div><h2 className="rc-section-title">Menos promessa.<br />Mais avaliação.</h2></div>
              <p>O objetivo é indicar o que realmente faz sentido para cada pessoa, respeitando histórico, anatomia, fase de recuperação e expectativas possíveis.</p>
            </div>
            <div className="rc-procedures">
              {procedures.map((p) => <article className="rc-procedure" key={p.title}><div className="rc-card-num">{p.n}</div><h3>{p.title}</h3><p>{p.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="rc-section" id="conteudos">
          <div className="rc-container">
            <div className="rc-heading">
              <div><div className="rc-kicker">Conteúdo para pacientes</div><h2 className="rc-section-title">Entenda antes<br />de decidir.</h2></div>
              <p>Textos curtos para ajudar você a chegar à consulta sabendo o que perguntar. Informação não substitui avaliação, mas melhora a conversa e alinha expectativas.</p>
            </div>
            <div className="rc-articles">
              {articles.map((a) => (
                <article className="rc-article" key={a.title}>
                  <div>
                    <div className="rc-article-tag">{a.tag}</div>
                    <h3>{a.title}</h3>
                  </div>
                  <div>
                    <p>{a.text}</p>
                    <a href={whatsapp(`Olá, Rainara! Li o conteúdo sobre ${a.tag} e gostaria de tirar algumas dúvidas.`)} target="_blank" rel="noreferrer">Conversar sobre este tema <ArrowUpRight size={14} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rc-section rc-section-soft" id="sobre">
          <div className="rc-container rc-about">
            <div className="rc-about-photo"><img src={asset("cuidado.jpg")} alt="Atendimento de Rainara Campos" /></div>
            <div className="rc-about-copy">
              <div className="rc-kicker">Rainara Campos</div>
              <h2>Estética com presença, técnica e acompanhamento.</h2>
              <p>O perfil profissional mostra um trabalho muito ligado a pós-operatório, recuperação e resultados estéticos naturais. A proposta deste site é ampliar isso: dar contexto aos resultados e transformar o Instagram em uma porta de entrada para um atendimento mais organizado.</p>
              <p>A avaliação é o momento de entender objetivos, histórico, possíveis contraindicações e qual caminho faz sentido para cada paciente — sem fórmulas prontas.</p>
              <div className="rc-actions" style={{ marginTop: 26, marginBottom: 0 }}>
                <a className="rc-btn rc-btn-primary" href={whatsapp("Olá, Rainara! Quero agendar uma avaliação.")} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Agendar</a>
                <a className="rc-btn rc-btn-ghost" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a>
              </div>
            </div>
          </div>
        </section>

        <section className="rc-cta" id="contato">
          <div className="rc-container rc-cta-inner">
            <div><div className="rc-kicker">Seu próximo passo</div><h2>Comece pela avaliação.</h2><p>Conte o que você deseja melhorar, em que fase está e quais procedimentos já realizou. A partir daí, Rainara pode orientar o melhor caminho para conversar sobre seu caso.</p></div>
            <a className="rc-btn rc-btn-primary" href={whatsapp("Olá, Rainara! Vim pelo site e gostaria de marcar uma avaliação.")} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Falar no WhatsApp</a>
          </div>
        </section>
      </main>

      <footer className="rc-footer">
        <div className="rc-container rc-footer-inner">
          <div><div style={{ fontFamily: '"DM Serif Display",serif', fontSize: 25 }}>Rainara Campos</div><p>Estética avançada · Cidade Jardim · Parauapebas, PA<br />Conteúdo informativo. A indicação de procedimentos depende de avaliação individual.</p></div>
          <div className="rc-social">
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href={whatsapp("Olá, Rainara! Vim pelo site.")} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

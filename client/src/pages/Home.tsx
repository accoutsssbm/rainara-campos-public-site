import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronUp,
  Clock3,
  Instagram,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

type Article = {
  id: string;
  category: string;
  readTime: string;
  title: string;
  intro: string;
  cover: string;
  points: string[];
  cta: string;
};

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;

const whatsappBase = "https://wa.me/5531987704685";
const instagramUrl = "https://www.instagram.com/rainara_campos/";

const portfolio = [
  {
    image: asset("pos-operatorio.jpg"),
    label: "Pós-operatório",
    title: "Acompanhamento em cada fase da recuperação",
    caption: "Evolução do pós-cirúrgico publicada no Instagram.",
    href: "https://www.instagram.com/p/DbE9O9rkeSF/",
    tall: true,
  },
  {
    image: asset("cuidado.jpg"),
    label: "Cuidado próximo",
    title: "Acolhimento que faz parte do resultado",
    caption: "Registro de um atendimento com presença e escuta.",
    href: "https://www.instagram.com/p/DbEtX31Eb_b/",
    tall: false,
  },
  {
    image: asset("minilipo.jpg"),
    label: "Mini lipo",
    title: "Recuperação assistida com atenção aos detalhes",
    caption: "Um dos trabalhos de recuperação compartilhados no perfil.",
    href: "https://www.instagram.com/p/DbHaZZwx23B/",
    tall: false,
  },
  {
    image: asset("harmonia.jpg"),
    label: "Harmonia facial",
    title: "Naturalidade na construção de um perfil harmônico",
    caption: "Trabalho publicado no Instagram sobre harmonia facial.",
    href: "https://www.instagram.com/p/DbHcJVnx9is/",
    tall: false,
  },
  {
    image: asset("labios.jpg"),
    label: "Lábios",
    title: "Delicadeza, hidratação e movimento natural",
    caption: "Resultado apresentado no perfil @rainara_campos.",
    href: "https://www.instagram.com/p/DbHbRmYxU5B/",
    tall: true,
  },
];

const articles: Article[] = [
  {
    id: "pos-operatorio",
    category: "Pós-operatório",
    readTime: "6 min de leitura",
    title: "Pós-operatório: por que o acompanhamento faz diferença",
    intro: "O pós-operatório é uma fase de cuidado contínuo. Entenda como uma rotina acompanhada pode ajudar você a atravessar a recuperação com mais informação, segurança e tranquilidade.",
    cover: asset("pos-operatorio.jpg"),
    points: [
      "Cada cirurgia tem uma recuperação própria: o plano deve respeitar a orientação do cirurgião e a resposta do seu corpo.",
      "A avaliação profissional observa edema, sensibilidade, mobilidade e sinais que merecem encaminhamento.",
      "Manobras e recursos só devem ser utilizados quando indicados e no momento adequado para cada etapa.",
      "O cuidado também inclui orientações de rotina, comunicação clara e acompanhamento da evolução.",
    ],
    cta: "Quero conversar sobre meu pós-operatório",
  },
  {
    id: "primeiras-72-horas",
    category: "Pós-operatório",
    readTime: "5 min de leitura",
    title: "Primeiras 72 horas: como se organizar para o início do pós",
    intro: "Planejamento e informação reduzem a ansiedade nos primeiros dias. Veja o que costuma entrar na conversa com a equipe e quais dúvidas levar para sua avaliação.",
    cover: asset("cuidado.jpg"),
    points: [
      "Organize transporte, repouso e apoio para as tarefas que exigem esforço físico.",
      "Siga medicações, curativos, uso de cinta e restrições exatamente como prescritos.",
      "Tenha os contatos da equipe médica e informe qualquer alteração fora do esperado.",
      "Não antecipe técnicas ou produtos sem liberação: o timing é parte do cuidado.",
    ],
    cta: "Agendar uma conversa inicial",
  },
  {
    id: "edema-e-conforto",
    category: "Pós-operatório",
    readTime: "5 min de leitura",
    title: "Edema, desconforto e rotina: o que observar na recuperação",
    intro: "Inchaço e sensibilidade podem aparecer em diferentes momentos. O mais importante é entender o seu plano, observar a evolução e comunicar qualquer dúvida.",
    cover: asset("minilipo.jpg"),
    points: [
      "A intensidade e a duração do edema variam conforme o procedimento e as características individuais.",
      "Hidratação, repouso relativo e mobilidade autorizada devem seguir orientação da equipe responsável.",
      "A avaliação presencial ajuda a diferenciar uma evolução esperada de algo que exige contato médico.",
      "O objetivo do acompanhamento é cuidar do processo, sem prometer atalhos ou resultados iguais para todos.",
    ],
    cta: "Tirar dúvidas sobre a recuperação",
  },
  {
    id: "pos-mini-lipo",
    category: "Pós-operatório",
    readTime: "6 min de leitura",
    title: "Pós de mini lipo: cuidado individualizado, sem fórmulas prontas",
    intro: "A recuperação de uma mini lipo merece atenção ao corpo todo. Conheça os pontos que orientam uma avaliação e como o acompanhamento pode se adaptar à sua fase.",
    cover: asset("minilipo.jpg"),
    points: [
      "O histórico cirúrgico e a liberação médica definem quando e como iniciar qualquer cuidado complementar.",
      "A observação de assimetrias, tensão, sensibilidade e edema orienta a conduta de cada encontro.",
      "Frequência e recursos não são iguais para todas as pessoas: o plano é reavaliado conforme a evolução.",
      "Cuidar do pós também é respeitar limites, comunicar sintomas e manter o retorno com o cirurgião.",
    ],
    cta: "Falar sobre pós de mini lipo",
  },
  {
    id: "pos-cirurgia-plastica",
    category: "Pós-operatório",
    readTime: "6 min de leitura",
    title: "Pós-cirurgia plástica: o cuidado que acompanha cada etapa",
    intro: "Do primeiro contato às reavaliações, o acompanhamento pós-cirúrgico deve ser acolhedor, atento e alinhado com a equipe médica.",
    cover: asset("cuidado.jpg"),
    points: [
      "Uma conversa inicial alinha expectativas, histórico, procedimento realizado e orientações recebidas.",
      "O acompanhamento observa mudanças ao longo do tempo, não apenas uma fotografia isolada.",
      "A comunicação entre paciente, profissional e cirurgião é essencial para uma jornada mais segura.",
      "Procure atendimento médico diante de sinais intensos, inesperados ou que causem preocupação.",
    ],
    cta: "Conhecer o acompanhamento",
  },
  {
    id: "criolipolise",
    category: "Criolipólise",
    readTime: "5 min de leitura",
    title: "Criolipólise: quando a avaliação vem antes do procedimento",
    intro: "A criolipólise não é uma solução universal. Uma avaliação cuidadosa ajuda a entender indicação, objetivos, limitações e o que faz sentido para cada corpo.",
    cover: asset("harmonia.jpg"),
    points: [
      "A conversa considera região, histórico, expectativas e condições que podem contraindicar o procedimento.",
      "O resultado não é imediato e pode variar; a avaliação deve ser honesta e sem promessas garantidas.",
      "A escolha de parâmetros e a orientação após a sessão fazem parte do atendimento responsável.",
      "Uma consulta é o melhor caminho para saber se a técnica é adequada ao seu caso.",
    ],
    cta: "Quero avaliar criolipólise",
  },
  {
    id: "harmonia-facial",
    category: "Procedimentos",
    readTime: "4 min de leitura",
    title: "Harmonia facial: naturalidade começa na escuta",
    intro: "O trabalho publicado no Instagram mostra uma busca por equilíbrio, suavidade e respeito à individualidade — sem transformar o rosto em uma fórmula.",
    cover: asset("harmonia.jpg"),
    points: [
      "A avaliação considera proporções, movimento, queixas e o que a pessoa deseja preservar.",
      "O planejamento deve ser individual, com explicação clara sobre possibilidades e limites.",
      "Naturalidade é uma construção conjunta entre técnica, indicação e expectativa realista.",
      "O primeiro passo é conversar, não decidir por uma foto de referência.",
    ],
    cta: "Agendar avaliação individual",
  },
  {
    id: "cuidado-com-os-labios",
    category: "Procedimentos",
    readTime: "4 min de leitura",
    title: "Lábios delicados: cuidado com hidratação, contorno e movimento",
    intro: "Um resultado suave depende de planejamento. A proposta é entender o que você busca e respeitar a anatomia, o toque e a expressão.",
    cover: asset("labios.jpg"),
    points: [
      "A consulta define objetivo, quantidade, proporção e o que é possível para cada caso.",
      "O cuidado após o procedimento e os sinais que exigem contato devem ser explicados antes da sessão.",
      "Fotos de referência ajudam na conversa, mas não garantem que o mesmo resultado seja indicado para você.",
      "A escolha responsável começa com informação, consentimento e expectativa alinhada.",
    ],
    cta: "Conversar sobre lábios naturais",
  },
];

function buildWhatsAppLink(message: string) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [showAllArticles, setShowAllArticles] = useState(false);
  const visibleArticles = useMemo(
    () => (showAllArticles ? articles : articles.slice(0, 5)),
    [showAllArticles],
  );

  return (
    <div className="min-h-screen bg-[#fbf8f5] text-[#3c2b29]">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#inicio" aria-label="Dra. Rainara Campos - início">
            <img src={asset("profile.jpg")} alt="Dra. Rainara Campos" />
            <span><strong>Rainara</strong><small>cuidado que acompanha</small></span>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#trabalho">Meu trabalho</a>
            <a href="#especialidades">Especialidades</a>
            <a href="#artigos">Conteúdos</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="button button-small button-primary" href={buildWhatsAppLink("Olá, Rainara! Gostaria de agendar uma avaliação.")} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> Falar comigo
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Parauapebas · PA</div>
              <h1>Seu cuidado merece <em>presença</em> em cada etapa.</h1>
              <p className="hero-lede">Pós-operatório, criolipólise e procedimentos pensados para acolher sua história — com avaliação individual, informação clara e acompanhamento próximo.</p>
              <div className="hero-actions">
                <a className="button button-primary" href={buildWhatsAppLink("Olá, Rainara! Quero entender qual cuidado é mais indicado para mim.")} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Quero conversar</a>
                <a className="text-link" href="#trabalho">Ver trabalhos <ArrowUpRight size={17} /></a>
              </div>
              <div className="trust-row">
                <div className="trust-item"><ShieldCheck size={18} /><span>Atendimento individualizado</span></div>
                <div className="trust-item"><MapPin size={18} /><span>Cidade Jardim · Parauapebas</span></div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-photo-main"><img src={asset("pos-operatorio.jpg")} alt="Registro de trabalho em pós-operatório" /></div>
              <div className="hero-photo-small"><img src={asset("cuidado.jpg")} alt="Atendimento acolhedor" /></div>
              <div className="hero-note"><Sparkles size={16} /><span>cuidar é<br /><strong>escutar também</strong></span></div>
              <div className="hero-stamp">feito com<br /><strong>presença</strong></div>
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <div className="container intro-grid">
            <p className="section-kicker">O que você encontra aqui</p>
            <p className="intro-text">Um olhar atento para o seu momento. Do planejamento à recuperação, cada atendimento começa com escuta e termina com orientação para você seguir mais segura.</p>
            <a className="circle-arrow" href="#contato" aria-label="Ir para contato"><ArrowUpRight size={21} /></a>
          </div>
        </section>

        <section id="trabalho" className="portfolio-section section-padding">
          <div className="container">
            <div className="section-heading split-heading"><div><p className="section-kicker">Do Instagram para perto de você</p><h2>Trabalhos que contam<br /><em>histórias reais.</em></h2></div><p>Uma seleção de registros publicados no <a href={instagramUrl} target="_blank" rel="noreferrer">@rainara_campos</a>. Veja o cuidado, conheça o processo e converse sobre o seu caso.</p></div>
            <div className="portfolio-grid">
              {portfolio.map((item) => <a className={`portfolio-card ${item.tall ? "portfolio-tall" : ""}`} key={item.title} href={item.href} target="_blank" rel="noreferrer"><img src={item.image} alt={item.title} /><div className="portfolio-overlay"><span>{item.label}</span><h3>{item.title}</h3><p>{item.caption}</p><ArrowUpRight size={19} /></div></a>)}
            </div>
            <div className="center-link"><a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={17} /> Ver mais no Instagram <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section id="especialidades" className="specialties-section section-padding">
          <div className="container">
            <div className="section-heading"><p className="section-kicker">Como posso cuidar de você</p><h2>Especialidades com<br /><em>olhar individual.</em></h2></div>
            <div className="specialties-grid">
              <article className="specialty-card specialty-featured"><div className="specialty-index">01</div><div className="specialty-icon"><Stethoscope size={22} /></div><h3>Pós-operatório</h3><p>Acompanhamento atento para diferentes momentos da recuperação, sempre respeitando a orientação do seu cirurgião e o tempo do seu corpo.</p><a className="text-link" href="#artigos">Conhecer os cuidados <ArrowUpRight size={16} /></a></article>
              <article className="specialty-card"><div className="specialty-index">02</div><div className="specialty-icon"><Sparkles size={22} /></div><h3>Criolipólise</h3><p>Avaliação individual para entender indicação, objetivos e limites do procedimento — sem promessas prontas.</p><a className="text-link" href="#artigos">Ler sobre o procedimento <ArrowUpRight size={16} /></a></article>
              <article className="specialty-card"><div className="specialty-index">03</div><div className="specialty-icon"><Check size={22} /></div><h3>Procedimentos com naturalidade</h3><p>Harmonia facial e cuidados delicados que começam pela escuta e pelo respeito à sua individualidade.</p><a className="text-link" href="#artigos">Ver conteúdos <ArrowUpRight size={16} /></a></article>
            </div>
          </div>
        </section>

        <section id="artigos" className="articles-section section-padding">
          <div className="container">
            <div className="section-heading split-heading"><div><p className="section-kicker">Conteúdo para decidir com calma</p><h2>Informação que<br /><em>acolhe.</em></h2></div><p>Artigos feitos para responder dúvidas reais sobre procedimentos e pós-operatório — e ajudar você a dar o próximo passo com mais segurança.</p></div>
            <div className="articles-grid">
              {visibleArticles.map((article) => <button className="article-card" key={article.id} onClick={() => setActiveArticle(article)}><img src={article.cover} alt="" /><div className="article-body"><div className="article-meta"><span>{article.category}</span><span><Clock3 size={14} /> {article.readTime}</span></div><h3>{article.title}</h3><p>{article.intro}</p><span className="read-more">Ler artigo <ArrowUpRight size={16} /></span></div></button>)}
            </div>
            <div className="center-link"><button className="text-link" onClick={() => setShowAllArticles(!showAllArticles)}>{showAllArticles ? "Mostrar menos" : "Ver todos os artigos"} {showAllArticles ? <ChevronUp size={17} /> : <ChevronDown size={17} />}</button></div>
          </div>
        </section>

        <section className="process-section section-padding">
          <div className="container process-grid"><div><p className="section-kicker">Como funciona</p><h2>Um caminho mais<br /><em>tranquilo.</em></h2><p className="process-lede">Você não precisa chegar com todas as respostas. A primeira conversa serve para entender sua fase, suas dúvidas e o cuidado que faz sentido para você.</p><a className="button button-primary" href={buildWhatsAppLink("Olá, Rainara! Quero começar meu cuidado e agendar uma avaliação.")} target="_blank" rel="noreferrer"><CalendarDays size={18} /> Agendar avaliação</a></div><div className="steps-list"><div className="step"><span>01</span><div><h3>Conversa inicial</h3><p>Você conta seu momento, procedimento e objetivos.</p></div></div><div className="step"><span>02</span><div><h3>Avaliação individual</h3><p>Observamos o que é indicado e alinhamos expectativas.</p></div></div><div className="step"><span>03</span><div><h3>Acompanhamento</h3><p>Você recebe cuidado próximo e orientações para cada etapa.</p></div></div></div></div>
        </section>

        <section id="contato" className="contact-section"><div className="container contact-card"><div><p className="section-kicker">Vamos conversar?</p><h2>Seu próximo passo pode começar<br /><em>com uma mensagem.</em></h2><p>Conte um pouco sobre o que você procura. Será um prazer entender seu momento e orientar o melhor caminho.</p></div><div className="contact-actions"><a className="button button-light" href={buildWhatsAppLink("Olá, Rainara! Vim pelo site e gostaria de agendar uma avaliação.")} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Chamar no WhatsApp</a><a className="contact-instagram" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={18} /> @rainara_campos</a></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div><div className="footer-brand">Rainara <span>cuidado que acompanha</span></div><p>Atendimento com presença em Cidade Jardim, Parauapebas — PA.</p></div><div className="footer-links"><a href="#trabalho">Trabalhos</a><a href="#especialidades">Especialidades</a><a href="#artigos">Artigos</a><a href={buildWhatsAppLink("Olá, Rainara!")} target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Dra. Rainara Campos</span><span>Conteúdo educativo. Cada caso deve ser avaliado individualmente.</span></div></footer>

      <a className="floating-whatsapp" href={buildWhatsAppLink("Olá, Rainara! Vim pelo site e gostaria de conversar.")} target="_blank" rel="noreferrer" aria-label="Falar com Rainara pelo WhatsApp"><MessageCircle size={21} /></a>

      {activeArticle && <div className="modal-backdrop" role="presentation" onClick={() => setActiveArticle(null)}><article className="article-modal" role="dialog" aria-modal="true" aria-labelledby="article-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveArticle(null)} aria-label="Fechar artigo">×</button><img src={activeArticle.cover} alt="" /><div className="modal-content"><div className="article-meta"><span>{activeArticle.category}</span><span><Clock3 size={14} /> {activeArticle.readTime}</span></div><h2 id="article-title">{activeArticle.title}</h2><p className="modal-intro">{activeArticle.intro}</p><div className="article-points">{activeArticle.points.map((point) => <div key={point}><Check size={17} /><p>{point}</p></div>)}</div><div className="medical-note"><ShieldCheck size={18} /><p>Este conteúdo é educativo e não substitui avaliação médica, prescrição ou as orientações da equipe responsável pelo seu procedimento.</p></div><a className="button button-primary" href={buildWhatsAppLink(activeArticle.cta)} target="_blank" rel="noreferrer"><MessageCircle size={18} /> {activeArticle.cta}</a></div></article></div>}
    </div>
  );
}

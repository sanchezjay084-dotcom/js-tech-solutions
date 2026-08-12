import { useState } from 'react'
import {
  Menu, X, ArrowRight, Monitor, Wifi, Building2, HardDrive,
  MemoryStick, ShieldCheck, Wrench, Printer,
  Headphones, CheckCircle2, ChevronDown, MessageCircle, Mail,
  MapPin, Sparkles, Server, Network, Gauge
} from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Computadoras',
    description: 'Instalación, optimización y mantenimiento para que tu equipo vuelva a rendir.',
    items: ['Windows', 'Office', 'Drivers', 'SSD', 'RAM', 'Limpieza']
  },
  {
    icon: Wifi,
    title: 'Redes y WiFi',
    description: 'Mejor cobertura, conexiones más estables y configuración profesional.',
    items: ['WiFi', 'Routers', 'Mesh', 'Extensores', 'Impresoras']
  },
  {
    icon: Headphones,
    title: 'Soporte técnico',
    description: 'Atención remota o presencial para resolver incidencias y configuraciones.',
    items: ['Remoto', 'Domicilio', 'Diagnóstico', 'Software']
  },
]

const companyServices = [
  ['Instalación de equipos', 'Preparación, configuración y puesta en marcha.'],
  ['Inventario TI', 'Control de equipos, series, modelos, usuarios y ubicación.'],
  ['Mantenimiento preventivo', 'Revisión periódica, limpieza y optimización.'],
  ['Microsoft 365', 'Instalación, configuración y soporte para usuarios.'],
  ['Soporte remoto', 'Resolución de incidencias sin esperar una visita.'],
]

const prices = [
  ['Diagnóstico', 'Gratis', 'al realizar servicio'],
  ['Formateo Windows', '$700', 'MXN'],
  ['Windows + Office + Drivers', '$900', 'MXN'],
  ['Limpieza interna', '$600', 'MXN'],
  ['SSD + instalación', '$700', '+ SSD'],
  ['RAM + instalación', '$400', 'MXN'],
  ['Configurar impresora', '$350', 'MXN'],
  ['Configurar WiFi', '$700', 'MXN'],
  ['Soporte a domicilio', '$600', 'desde'],
]

const faqs = [
  ['¿El diagnóstico tiene costo?', 'Es gratis cuando realizas el servicio con JS Tech Solutions.'],
  ['¿Dan servicio a domicilio?', 'Sí. El soporte a domicilio es desde $600 MXN y puede variar según la ubicación y el trabajo.'],
  ['¿Atienden empresas?', 'Sí. Ofrecemos instalación de equipos, inventario, mantenimiento, Microsoft 365, soporte remoto y respaldos.'],
  ['¿Pueden mejorar mi señal WiFi?', 'Sí. Revisamos la cobertura y proponemos router, Mesh o extensores según el espacio.'],
  ['¿Instalan SSD o RAM?', 'Sí. También podemos orientarte sobre compatibilidad antes de comprar la pieza.'],
]

function Logo() {
  return (
    <a href="#inicio" className="logo">
      <span className="logoBox">JS</span>
      <span className="logoText"><b>JS Tech</b><small>Solutions</small></span>
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [quote, setQuote] = useState({
    name: '',
    phone: '',
    service: 'Instalación de Windows',
    description: ''
  })

  const whatsappNumber = '5215515077382'
  const whatsapp = `https://wa.me/${whatsappNumber}?text=Hola%20JS%20Tech%20Solutions,%20quiero%20cotizar%20un%20servicio.`

  const handleQuoteSubmit = (e) => {
    e.preventDefault()
    const message = [
      'Hola JS Tech Solutions, quiero solicitar una cotización.',
      '',
      `Nombre: ${quote.name}`,
      `Teléfono: ${quote.phone}`,
      `Servicio: ${quote.service}`,
      `Descripción: ${quote.description || 'Sin descripción adicional'}`
    ].join('\n')
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <div className="topbar">
        <div className="container topbarInner">
          <span>Soporte técnico para hogar, profesionistas y empresas</span>
          <span className="topbarLocation"><MapPin size={13}/> CDMX y zona metropolitana</span>
        </div>
      </div>

      <header className="header">
        <div className="container nav">
          <Logo />
          <nav className={menuOpen ? 'navLinks open' : 'navLinks'}>
            {['Servicios','Empresas','Proceso','Precios','FAQ'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{item}</a>
            ))}
            <a href="#contacto" className="navButton" onClick={()=>setMenuOpen(false)}>Cotizar servicio</a>
          </nav>
          <button className="menuBtn" onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="heroGridBg"></div>
          <div className="orb orb1"></div>
          <div className="orb orb2"></div>
          <div className="container heroLayout">
            <div className="heroCopy">
              <div className="availability"><span></span> Atención disponible</div>
              <h1>Tu tecnología, <em>bien resuelta.</em></h1>
              <p>Soporte técnico, mantenimiento, redes WiFi, Microsoft 365 y soluciones para empresas.</p>
              <div className="heroButtons">
                <a className="primaryBtn" href={whatsapp} target="_blank">Solicitar cotización <ArrowRight size={17}/></a>
                <a className="secondaryBtn" href="#servicios">Ver servicios</a>
              </div>
              <div className="heroChecks">
                <span><CheckCircle2 size={15}/> Precios claros</span>
                <span><CheckCircle2 size={15}/> Soporte remoto y presencial</span>
                <span><CheckCircle2 size={15}/> Hogar y empresas</span>
              </div>
            </div>

            <div className="heroConsole">
              <div className="consoleHeader">
                <div><small>JS TECH / SERVICE CENTER</small><strong>Sistema operativo</strong></div>
                <span>ONLINE</span>
              </div>
              <div className="consoleBody">
                <div className="systemRow">
                  <span>Estado del servicio</span><b>Disponible</b>
                </div>
                <div className="progress"><span></span></div>
                <div className="consoleStats">
                  <div><Monitor size={18}/><b>Equipos</b><small>Windows · SSD · RAM</small></div>
                  <div><Network size={18}/><b>Redes</b><small>WiFi · Mesh · Routers</small></div>
                  <div><Server size={18}/><b>Empresas</b><small>Soporte · M365</small></div>
                </div>
                <div className="consoleCallout">
                  <div className="calloutIcon"><Sparkles size={18}/></div>
                  <div><small>SOLUCIÓN INTEGRAL</small><b>Tu tecnología bajo control.</b></div>
                  <ArrowRight size={18}/>
                </div>
              </div>
            </div>
          </div>

          <div className="container trustBar">
            <div><small>DIAGNÓSTICO</small><b>Gratis al contratar</b></div>
            <div><small>ATENCIÓN</small><b>Remota y presencial</b></div>
            <div><small>CLIENTES</small><b>Personas y empresas</b></div>
            <div><small>ESPECIALIDAD</small><b>Soporte TI y redes</b></div>
          </div>
        </section>

        <section className="section" id="servicios">
          <div className="container">
            <div className="sectionIntro">
              <div><span className="eyebrow">NUESTROS SERVICIOS</span><h2>Soluciones para problemas reales.</h2></div>
              <p>Desde una computadora lenta hasta una red inestable o el despliegue de equipos en una empresa.</p>
            </div>
            <div className="servicesGrid">
              {services.map(({icon:Icon,title,description,items}) => (
                <article className="serviceCard" key={title}>
                  <div className="serviceIcon"><Icon /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="chips">{items.map(i=><span key={i}>{i}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="companySection" id="empresas">
          <div className="container">
            <div className="companyIntro">
              <div><span className="eyebrow light">SOLUCIONES PARA EMPRESAS</span><h2>Soporte TI para que tu negocio siga operando.</h2></div>
              <p>Ideal para pequeñas y medianas empresas que necesitan continuidad, orden y soporte sin montar un departamento completo de TI.</p>
            </div>

            <div className="companyGrid">
              <div className="companyFeature">
                <div className="featureTop"><Building2 size={30}/><span>B2B / 01</span></div>
                <h3>Tu área de soporte, cuando la necesitas.</h3>
                <p>Atención técnica, instalación de equipos, mantenimiento y apoyo a usuarios con un enfoque profesional.</p>
                <a className="lightBtn" href={whatsapp} target="_blank">Solicitar propuesta <ArrowRight size={16}/></a>
                <div className="featureTags"><span>Soporte</span><span>Productividad</span><span>Continuidad</span></div>
              </div>

              <div className="companyList">
                {companyServices.map(([title,desc], index) => (
                  <div className="companyItem" key={title}>
                    <span className="companyNum">{String(index+1).padStart(2,'0')}</span>
                    <div><h4>{title}</h4><p>{desc}</p></div>
                    <ArrowRight size={17}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section processSection" id="proceso">
          <div className="container">
            <div className="centerTitle">
              <span className="eyebrow">CÓMO TRABAJAMOS</span>
              <h2>Simple, claro y sin vueltas.</h2>
              <p>Un proceso para resolver rápido y mantenerte informado.</p>
            </div>
            <div className="processGrid">
              {[
                ['01','Cuéntanos el problema','Escríbenos y dinos qué equipo o servicio necesitas.'],
                ['02','Evaluamos','Revisamos el caso y te explicamos la mejor opción.'],
                ['03','Realizamos el servicio','Trabajamos según lo acordado contigo.'],
                ['04','Validamos contigo','Comprobamos que todo funcione correctamente.']
              ].map(([n,t,d],i)=>(
                <div className="processItem" key={n}>
                  <div className="processNumber">{n}</div>
                  {i<3 && <span className="processLine"></span>}
                  <h3>{t}</h3><p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pricesSection section" id="precios">
          <div className="container">
            <div className="sectionIntro">
              <div><span className="eyebrow">PRECIOS</span><h2>Precios claros desde el inicio.</h2></div>
              <p>La cotización final puede cambiar si se requieren refacciones, licencias o un trabajo de mayor complejidad.</p>
            </div>
            <div className="priceGrid">
              {prices.map(([name,price,note]) => (
                <div className={`priceCard ${name.includes('Office') ? 'highlight' : ''}`} key={name}>
                  <div><small>SERVICIO</small><h3>{name}</h3></div>
                  <div className="price"><b>{price}</b><span>{note}</span></div>
                </div>
              ))}
            </div>
            <p className="disclaimer">* Precios en MXN. Refacciones, licencias y traslados especiales no incluidos salvo que se indique lo contrario.</p>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container faqGrid">
            <div className="faqTitle">
              <span className="eyebrow">PREGUNTAS FRECUENTES</span>
              <h2>Antes de solicitar tu servicio.</h2>
              <p>Resolvemos algunas dudas comunes.</p>
            </div>
            <div className="faqList">
              {faqs.map(([q,a], index)=>(
                <button className={`faqItem ${openFaq===index?'active':''}`} onClick={()=>setOpenFaq(openFaq===index?-1:index)} key={q}>
                  <div className="faqQuestion"><span>{q}</span><ChevronDown size={18}/></div>
                  <div className="faqAnswer"><p>{a}</p></div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="contactSection" id="contacto">
          <div className="container contactGrid">
            <div className="contactCopy">
              <span className="eyebrow light">HABLEMOS</span>
              <h2>¿Qué problema necesitas resolver?</h2>
              <p>Envíanos el modelo de tu equipo, el problema que presenta o el servicio que necesitas.</p>
              <div className="contactInfo">
                <span><MapPin size={16}/> CDMX y zona metropolitana</span>
                <span><Headphones size={16}/> Atención remota y presencial</span>
              </div>
            </div>
            <div className="contactCard quoteCard">
              <small>SOLICITA TU COTIZACIÓN</small>
              <h3>Cuéntanos qué necesitas</h3>
              <p>Completa los datos y te llevamos directo a WhatsApp con el mensaje listo.</p>

              <form className="quoteForm" onSubmit={handleQuoteSubmit}>
                <label>
                  <span>Nombre</span>
                  <input type="text" required placeholder="Tu nombre" value={quote.name} onChange={(e)=>setQuote({...quote, name:e.target.value})} />
                </label>
                <label>
                  <span>Teléfono</span>
                  <input type="tel" required placeholder="55 1234 5678" value={quote.phone} onChange={(e)=>setQuote({...quote, phone:e.target.value})} />
                </label>
                <label>
                  <span>Servicio</span>
                  <select value={quote.service} onChange={(e)=>setQuote({...quote, service:e.target.value})}>
                    <option>Instalación de Windows</option>
                    <option>Windows + Office + Drivers</option>
                    <option>Limpieza interna</option>
                    <option>Instalación de SSD</option>
                    <option>Instalación de RAM</option>
                    <option>Configuración de impresora</option>
                    <option>Configuración de WiFi</option>
                    <option>Soporte a domicilio</option>
                    <option>Soporte remoto</option>
                    <option>Servicio para empresa</option>
                    <option>Otro servicio</option>
                  </select>
                </label>
                <label>
                  <span>Describe el problema</span>
                  <textarea rows="4" placeholder="Ej. Mi laptop está muy lenta y quiero instalar un SSD..." value={quote.description} onChange={(e)=>setQuote({...quote, description:e.target.value})} />
                </label>
                <button type="submit" className="whatsappBtn quoteSubmit"><MessageCircle size={19}/> Enviar cotización por WhatsApp</button>
              </form>

              <div className="directContact">
                <a href="tel:+525515077382">55 1507 7382</a>
                <span>·</span>
                <a href="mailto:js6017200@gmail.com">js6017200@gmail.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a href={whatsapp} target="_blank" className="floatingWhatsapp" aria-label="WhatsApp"><MessageCircle /></a>

      <footer>
        <div className="container footerTop">
          <div><Logo/><p>Soporte técnico, redes y soluciones TI para personas y empresas.</p></div>
          <div className="footerLinks">
            <div><small>SERVICIOS</small><a href="#servicios">Computadoras</a><a href="#servicios">Redes</a><a href="#servicios">Soporte técnico</a></div>
            <div><small>EMPRESAS</small><a href="#empresas">Soporte TI</a><a href="#empresas">Inventario</a><a href="#empresas">Microsoft 365</a></div>
            <div><small>CONTACTO</small><a href="#contacto">Cotización</a><a href="#precios">Precios</a><a href="#faq">FAQ</a></div>
          </div>
        </div>
        <div className="container footerBottom"><span>© 2026 JS Tech Solutions</span><span>Soporte · Redes · Empresas</span></div>
      </footer>
    </>
  )
}

export default App

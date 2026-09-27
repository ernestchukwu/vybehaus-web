import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, CreditCard, Heart, Mail, MapPin, Menu, Minus, Plus, Search, Share2, Sparkles, Ticket, Users, X, Zap } from 'lucide-react'
import { categories, events, EventItem } from './data'
import './styles.css'

const money=(n:number)=>n===0?'TBA':`£${n}`

function App(){
  const [saved,setSaved]=useState<string[]>(['albania-takeover-2027'])
  const [ticketEvent,setTicketEvent]=useState<EventItem|null>(null)
  const [menu,setMenu]=useState(false)
  const toggleSave=(id:string)=>setSaved(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id])
  return <div className="app-shell">
    <Header menu={menu} setMenu={setMenu}/>
    <Routes>
      <Route path="/" element={<Home saved={saved} toggleSave={toggleSave} setTicketEvent={setTicketEvent}/>}/>
      <Route path="/events" element={<Events saved={saved} toggleSave={toggleSave}/>}/>
      <Route path="/event/:id" element={<EventPage saved={saved} toggleSave={toggleSave} setTicketEvent={setTicketEvent}/>}/>
      <Route path="/my-tickets" element={<MyTickets saved={saved} toggleSave={toggleSave}/>}/>
      <Route path="*" element={<Home saved={saved} toggleSave={toggleSave} setTicketEvent={setTicketEvent}/>}/>
    </Routes>
    <MobileNav/>
    {ticketEvent&&<TicketFlow event={ticketEvent} close={()=>setTicketEvent(null)}/>} 
  </div>
}

function Header({menu,setMenu}:{menu:boolean,setMenu:(v:boolean)=>void}){
 return <header className="nav"><Link to="/" className="brand"><img src="/vybe-haus-logo.jpg"/><span>VYBEHAUS</span></Link>
   <nav className="navlinks"><NavLink to="/">Home</NavLink><NavLink to="/events">Events</NavLink><Link to="/event/albania-takeover-2027">Albania ’27</Link><a href="#about">About</a></nav>
   <div className="nav-actions"><Link to="/events" className="icon-btn" aria-label="Search events"><Search size={19}/></Link><Link to="/my-tickets" className="host-link">My tickets</Link><Link to="/event/albania-takeover-2027" className="nav-cta">Albania 2027</Link><button className="menu-btn" onClick={()=>setMenu(!menu)}><Menu/></button></div>
   {menu&&<div className="mobile-menu"><Link onClick={()=>setMenu(false)} to="/">Home</Link><Link onClick={()=>setMenu(false)} to="/events">Events</Link><Link onClick={()=>setMenu(false)} to="/event/albania-takeover-2027">Albania ’27</Link><Link onClick={()=>setMenu(false)} to="/my-tickets">My tickets</Link></div>}
 </header>
}

function MobileNav(){return <div className="mobile-nav"><NavLink to="/"><Sparkles/><span>Home</span></NavLink><NavLink to="/events"><Search/><span>Events</span></NavLink><NavLink to="/event/albania-takeover-2027"><MapPin/><span>Albania</span></NavLink><NavLink to="/my-tickets"><Ticket/><span>Tickets</span></NavLink></div>}

function Home({saved,toggleSave,setTicketEvent}:{saved:string[],toggleSave:(id:string)=>void,setTicketEvent:(e:EventItem)=>void}){
 const hero=events[0]
 return <main>
   <section className="hero albania-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.92) 0%,rgba(0,0,0,.48) 50%,rgba(0,0,0,.22)),url('${hero.image}')`}}>
     <div className="hero-glow glow-pink"/><div className="hero-glow glow-violet"/><div className="hero-noise"/>
     <div className="hero-content"><div className="eyebrow"><span className="pulse"/> VYBEHAUS PRESENTS · ALBANIA 2027</div>
       <h1>3 NIGHTS.<br/><em>ONE COAST.</em><br/>ALL VYBE.</h1>
       <p>A destination nightlife experience bringing Afrobeats, Amapiano, global DJs, beach energy and culture to the Albanian Riviera.</p>
       <div className="albania-date"><CalendarDays/><div><small>17–19 SEPTEMBER 2027</small><strong>ALBANIAN RIVIERA · ALBANIA</strong></div></div>
       <div className="hero-buttons"><button className="primary" onClick={()=>setTicketEvent(hero)}>Join priority list <ArrowRight size={18}/></button><Link className="ghost" to={`/event/${hero.id}`}>Explore the takeover</Link></div>
     </div>
     <div className="takeover-stamp"><span>VYBEHAUS</span><strong>ALBANIA</strong><b>TAKEOVER ’27</b><small>BEACH · MUSIC · CULTURE · NIGHTLIFE</small></div>
   </section>

   <section className="takeover-intro section" id="about"><div><span className="kicker">THE 2027 DESTINATION</span><h2>Not just an event.<br/><em>A full destination experience.</em></h2></div><p>Sunset arrivals. Beach-club energy. Curated parties. International talent. Content-worthy moments. One VYBEHAUS crowd travelling for a weekend that feels bigger than a night out.</p></section>

   <section className="experience-band"><Experience n="01" tag="SUNSET" title="Beachside Energy" text="Golden-hour sets, seaside venues, cocktails and an atmosphere built around the Albanian coast."/><Experience n="02" tag="NIGHTLIFE" title="Three Signature Nights" text="17, 18 and 19 September — each night with its own mood, sound and identity."/><Experience n="03" tag="COMMUNITY" title="The VYBEHAUS Crowd" text="A curated mix of travellers, creatives, culture lovers and party people from the UK, Europe and beyond."/></section>

   <section className="section lineup-feature"><div className="section-head"><div><span className="kicker">ALBANIA TAKEOVER ’27</span><h2>The sound of<br/>the takeover.</h2></div><p className="section-copy">Headline announcements, guest DJs and hosts will roll out in phases. Join the priority list to hear first.</p></div><div className="lineup-grid"><div className="headliner"><small>HEADLINER / TBA</small><strong>SPECIAL<br/>GUEST</strong><span>International DJ · Live Set · VYBEHAUS Exclusive</span></div><div className="lineup-side"><div><small>INTERNATIONAL DJ</small><strong>DJ CROWD KONTROLLA</strong><span>Global sound</span></div><div><small>+ MORE TO COME</small><strong>AFROBEATS · AMAPIANO · HOUSE</strong><span>Full line-up revealed in phases</span></div></div></div></section>

   <section className="section"><SectionTitle kicker="MORE FROM VYBEHAUS" title="Upcoming experiences" action="View all events"/><div className="event-grid">{events.slice(1,5).map(e=><EventCard key={e.id} event={e} saved={saved.includes(e.id)} toggleSave={toggleSave}/>)}</div></section>

   <section className="albania-cta"><span className="kicker">17–19 SEPTEMBER 2027 · ALBANIA</span><h2>Be first<br/><em>in the Haus.</em></h2><p>Priority access to ticket releases, travel-package announcements, venue reveals and line-up drops.</p><button className="primary inline" onClick={()=>setTicketEvent(hero)}>Join priority list <ArrowRight/></button></section>

   <section className="manifesto"><img src="/vybe-haus-logo.jpg"/><span>VYBEHAUS COLLECTIVE</span><h2>We don’t list events.<br/><em>We create the VYBE.</em></h2><p>VYBEHAUS is an independent events collective. Every experience on this site is produced or curated by the Haus.</p><Link to="/events" className="primary inline">See our events <ArrowRight/></Link></section>
   <Footer/>
 </main>
}

function Experience({n,tag,title,text}:{n:string,tag:string,title:string,text:string}){return <article><span>{n} / {tag}</span><h3>{title}</h3><p>{text}</p></article>}
function SectionTitle({kicker,title,action}:{kicker:string,title:string,action?:string}){return <div className="section-head"><div><span className="kicker">{kicker}</span><h2>{title}</h2></div>{action&&<Link to="/events">{action}<ArrowRight size={16}/></Link>}</div>}

function EventCard({event,saved,toggleSave}:{event:EventItem,saved:boolean,toggleSave:(id:string)=>void}){return <article className="event-card"><Link to={`/event/${event.id}`} className="event-image"><img src={event.image}/>{event.tag&&<span className="event-tag">{event.tag}</span>}<button className={`save ${saved?'on':''}`} onClick={(x)=>{x.preventDefault();toggleSave(event.id)}}><Heart fill={saved?'currentColor':'none'}/></button></Link><div className="event-meta"><div className="date-box">{event.shortDate.split(' ').map((x,i)=><span key={i}>{x}</span>)}</div><div><Link to={`/event/${event.id}`}><h3>{event.title}</h3></Link><p>{event.date}</p><p>{event.venue} · {event.country}</p><strong>{event.ticketMode==='interest'?'Priority list open':`From ${money(event.price)}`}</strong></div></div></article>}

function Events({saved,toggleSave}:{saved:string[],toggleSave:(id:string)=>void}){
 const [cat,setCat]=useState('All'); const [q,setQ]=useState('')
 const filtered=useMemo(()=>events.filter(e=>(cat==='All'||e.category===cat)&&(`${e.title} ${e.category} ${e.venue} ${e.city} ${e.country}`.toLowerCase().includes(q.toLowerCase()))),[cat,q])
 return <main className="page"><div className="explore-top"><span className="kicker">VYBEHAUS EXPERIENCES</span><h1>Our events.<br/><em>Our crowd.</em></h1><p className="events-lede">No public listings. No third-party promoters uploading events. This is the home of experiences produced and curated by VYBEHAUS.</p><div className="big-search"><Search/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search VYBEHAUS events, cities, moods..."/></div><div className="filter-line"><div>{categories.map(c=><button className={cat===c?'active':''} onClick={()=>setCat(c)} key={c}>{c}</button>)}</div></div></div>
 <div className="results"><div className="results-head"><h2>{filtered.length} experiences</h2></div><div className="event-grid explore-grid">{filtered.map(e=><EventCard key={e.id} event={e} saved={saved.includes(e.id)} toggleSave={toggleSave}/>)}</div>{!filtered.length&&<div className="empty"><Search/><h3>Nothing matched that VYBE.</h3><p>Try another category or a broader search.</p><button className="primary" onClick={()=>{setQ('');setCat('All')}}>Reset search</button></div>}</div></main>
}

function EventPage({saved,toggleSave,setTicketEvent}:{saved:string[],toggleSave:(id:string)=>void,setTicketEvent:(e:EventItem)=>void}){
 const {id}=useParams(); const e=events.find(x=>x.id===id)||events[0]; const isAlbania=e.id==='albania-takeover-2027'
 return <main className={`event-page ${isAlbania?'albania-event':''}`}><section className="event-hero"><div className="event-hero-bg" style={{backgroundImage:`url('${e.image}')`}}/><Link to="/events" className="back"><ArrowLeft/> All VYBEHAUS events</Link><div className="event-title"><span className="kicker">{isAlbania?'3 NIGHTS · ONE COAST · ALL VYBE':`${e.category.toUpperCase()} · ${e.city.toUpperCase()}`}</span><h1>{e.title}</h1><div><span><CalendarDays/>{e.date}</span><span><Clock3/>{e.time}</span><span><MapPin/>{e.venue}, {e.country}</span></div></div></section>
 <div className="event-layout"><div className="event-body"><div className="event-actions"><div className="avatars"><i/><i/><i/><span>+{e.attendees-3}</span></div><p><strong>{e.attendees} people</strong> following this experience</p><button onClick={()=>toggleSave(e.id)} className={saved.includes(e.id)?'active':''}><Heart fill={saved.includes(e.id)?'currentColor':'none'}/> Save</button><button><Share2/> Share</button></div>
 <article><span className="kicker">ABOUT THE EXPERIENCE</span><h2>{isAlbania?'The coast becomes the Haus.':'Not just another night out.'}</h2><p>{e.description}</p>{isAlbania?<p>Expect sunset arrivals, beach-club energy, curated parties, international talent and a crowd travelling from the UK, Europe and beyond. Full venues, programme, travel guidance and line-up will be revealed in phases.</p>:<p>Every VYBEHAUS experience is built around atmosphere, sound, crowd and the moments people actually remember.</p>}</article>
 <div className="detail-grid"><div><CalendarDays/><small>DATE</small><strong>{e.date}</strong><span>{isAlbania?'Friday to Sunday':e.time}</span></div><div><MapPin/><small>LOCATION</small><strong>{e.venue}</strong><span>{e.country}</span></div></div>
 {isAlbania&&<article><span className="kicker">THREE DAYS · THREE IDENTITIES</span><h2>The takeover rhythm.</h2><div className="timeline"><div><b>17</b><span>Arrival night · Welcome to the Haus</span><time>FRIDAY</time></div><div><b>18</b><span>Beach energy · Signature night</span><time>SATURDAY</time></div><div><b>19</b><span>Finale · One last VYBE</span><time>SUNDAY</time></div></div></article>}
 <article><span className="kicker">THE ORGANISER</span><div className="organiser"><img src="/vybe-haus-logo.jpg"/><div><h3>VYBEHAUS Collective</h3><p>Independent events. One unmistakable crowd.</p></div></div></article>
 <article><SectionTitle kicker="MORE FROM THE HAUS" title="Other experiences"/><div className="event-grid two">{events.filter(x=>x.id!==e.id).slice(0,2).map(x=><EventCard key={x.id} event={x} saved={saved.includes(x.id)} toggleSave={toggleSave}/>)}</div></article></div>
 <aside className="ticket-aside"><div className="ticket-card"><span className="kicker">{e.ticketMode==='interest'?'EARLY ACCESS':'TICKETS'}</span><div className="price"><small>{e.ticketMode==='interest'?'ALBANIA 2027':'FROM'}</small><strong>{e.ticketMode==='interest'?'17–19 SEP':money(e.price)}</strong></div>{e.tag&&<div className="scarcity"><Zap/> {e.tag}</div>}<button className="primary full" onClick={()=>setTicketEvent(e)}>{e.ticketMode==='interest'?'Join priority list':'Get tickets'} <ArrowRight/></button><p><Check/> Direct from VYBEHAUS</p><p><Check/> Secure booking</p><p><Check/> Mobile confirmation</p></div></aside></div><Footer/></main>
}

function TicketFlow({event,close}:{event:EventItem,close:()=>void}){
 const [step,setStep]=useState(0); const [ga,setGa]=useState(1); const [vip,setVip]=useState(0); const total=ga*event.price+vip*(event.price+24)
 if(event.ticketMode==='interest') return <div className="modal-wrap"><div className="modal-backdrop" onClick={close}/><div className="ticket-drawer interest-drawer"><button className="drawer-close" onClick={close}><X/></button>{step===0?<><span className="kicker">ALBANIA TAKEOVER ’27</span><h2>Be first in the Haus.</h2><p className="drawer-sub">17–19 September 2027 · Albanian Riviera</p><p className="interest-copy">Join the priority list for first access to tickets, travel packages, venue reveals and line-up announcements.</p><div className="form"><label>Full name<input placeholder="Your name"/></label><label>Email address<div className="input-icon"><Mail/><input placeholder="you@example.com"/></div></label><label>Mobile number<input placeholder="+44 7..."/></label></div><button className="primary full" onClick={()=>setStep(1)}>Join priority list <ArrowRight/></button><small className="secure">Demo form — no details are submitted.</small></>:<div className="success"><div className="success-icon"><Check/></div><span className="kicker">YOU’RE ON THE LIST</span><h2>Albania is calling.</h2><p>17–19 September 2027<br/>Albanian Riviera</p><button className="primary full" onClick={close}>Done</button></div>}</div></div>
 return <div className="modal-wrap"><div className="modal-backdrop" onClick={close}/><div className="ticket-drawer"><button className="drawer-close" onClick={close}><X/></button>{step===0&&<><span className="kicker">SELECT TICKETS</span><h2>{event.title}</h2><p className="drawer-sub">{event.shortDate} · {event.venue}</p><TicketOption name="General Admission" desc="Entry to the full experience" price={event.price} qty={ga} setQty={setGa}/><TicketOption name="VYBE+ Entry" desc="Priority entry + welcome drink" price={event.price+24} qty={vip} setQty={setVip}/><div className="sold"><div><strong>Early Bird</strong><small>First release</small></div><b>SOLD OUT</b></div><div className="drawer-total"><span>Subtotal</span><strong>£{total}</strong></div><button className="primary full" disabled={ga+vip===0} onClick={()=>setStep(1)}>Continue <ArrowRight/></button></>}
 {step===1&&<><button className="text-back" onClick={()=>setStep(0)}><ArrowLeft/> Tickets</button><span className="kicker">CHECKOUT · 2 OF 3</span><h2>Your details</h2><div className="form"><label>Full name<input placeholder="Your name"/></label><label>Email address<input placeholder="you@example.com"/></label><label>Phone number<input placeholder="+44 7..."/></label></div><div className="order-mini"><span>{ga+vip} ticket{ga+vip>1?'s':''}</span><strong>£{total}</strong></div><button className="primary full" onClick={()=>setStep(2)}>Continue to payment <ArrowRight/></button></>}
 {step===2&&<><button className="text-back" onClick={()=>setStep(1)}><ArrowLeft/> Details</button><span className="kicker">CHECKOUT · 3 OF 3</span><h2>Payment</h2><button className="wallet"> Pay</button><div className="or"><span/>OR PAY BY CARD<span/></div><div className="form"><label>Card number<div className="input-icon"><CreditCard/><input defaultValue="4242 4242 4242 4242"/></div></label><div className="split"><label>Expiry<input defaultValue="12/29"/></label><label>CVC<input defaultValue="123"/></label></div></div><div className="order-mini"><span>Total</span><strong>£{total}</strong></div><button className="primary full" onClick={()=>setStep(3)}>Pay £{total} <ArrowRight/></button><small className="secure">Demo checkout — no real payment will be taken.</small></>}
 {step===3&&<div className="success"><div className="success-icon"><Check/></div><span className="kicker">BOOKING CONFIRMED</span><h2>You’re going.</h2><p>{event.title}<br/>{event.date} · {event.venue}</p><div className="digital-ticket"><div><img src="/vybe-haus-logo.jpg"/><span>VYBEHAUS PASS</span></div><h3>{event.title}</h3><div><span>{event.shortDate}</span><span>{event.time.split(' – ')[0]}</span><span>{event.venue}</span></div><div className="qr">▦</div><small>VH-{event.id.slice(0,4).toUpperCase()}-2609</small></div><button className="primary full" onClick={close}>Done</button></div>}</div></div>
}
function TicketOption({name,desc,price,qty,setQty}:{name:string,desc:string,price:number,qty:number,setQty:(n:number)=>void}){return <div className="ticket-option"><div><strong>{name}</strong><small>{desc}</small><b>{money(price)}</b></div><div className="stepper"><button onClick={()=>setQty(Math.max(0,qty-1))}><Minus/></button><span>{qty}</span><button onClick={()=>setQty(Math.min(8,qty+1))}><Plus/></button></div></div>}

function MyTickets({saved,toggleSave}:{saved:string[],toggleSave:(id:string)=>void}){const savedEvents=events.filter(e=>saved.includes(e.id)); return <main className="page account"><span className="kicker">YOUR VYBEHAUS</span><h1>Tickets & saved.</h1><div className="account-tabs"><button className="active">Upcoming</button><button>Saved <span>{saved.length}</span></button><button>Past</button></div><section className="next-event" style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.92),rgba(0,0,0,.3)),url('${events[0].image}')`}}><span className="kicker">PRIORITY LIST · ALBANIA 2027</span><h2>{events[0].title}</h2><p>{events[0].date} · {events[0].venue}</p><div><Link className="primary inline" to={`/event/${events[0].id}`}>View experience <ArrowRight/></Link></div></section><SectionTitle kicker="SAVED" title="Your shortlist"/><div className="event-grid">{savedEvents.length?savedEvents.map(e=><EventCard key={e.id} event={e} saved toggleSave={toggleSave}/>):<div className="empty"><Heart/><h3>Nothing saved yet.</h3><p>Your next VYBE could be one scroll away.</p><Link className="primary inline" to="/events">See events</Link></div>}</div></main>}

function Footer(){return <footer><div className="footer-brand"><img src="/vybe-haus-logo.jpg"/><div><strong>VYBEHAUS</strong><span>COLLECTIVE</span></div></div><div><h4>EXPERIENCES</h4><Link to="/event/albania-takeover-2027">Albania 2027</Link><Link to="/events">All events</Link><Link to="/my-tickets">My tickets</Link></div><div><h4>VYBEHAUS</h4><a href="#about">About</a><a>Contact</a><a>Instagram</a><a>TikTok</a></div><div className="footer-note"><span>INDEPENDENT BY DESIGN</span><p>One collective. One audience. Experiences produced and curated by VYBEHAUS.</p></div><small className="copyright">© 2026 VYBEHAUS COLLECTIVE · DEMO EXPERIENCE</small></footer>}

createRoot(document.getElementById('root')!).render(<BrowserRouter><App/></BrowserRouter>)

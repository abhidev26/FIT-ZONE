import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowUpRight, Bell, CalendarDays, CheckCircle2, ChevronRight, Dumbbell, LayoutDashboard, Menu, Users, Wallet, Zap } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const data = [{day:'Mon',visits:42},{day:'Tue',visits:58},{day:'Wed',visits:49},{day:'Thu',visits:76},{day:'Fri',visits:63},{day:'Sat',visits:91},{day:'Sun',visits:35}];
const nav = ['Overview','Members','Memberships','Trainers','Workouts','Attendance','Payments','Appointments','Analytics'];
const metrics = [
  {label:'Active members',value:'1,284',change:'+12.8%',icon:Users},
  {label:'Monthly revenue',value:'₹8.42L',change:'+8.4%',icon:Wallet},
  {label:'Today attendance',value:'186',change:'+6.2%',icon:Activity},
  {label:'Active trainers',value:'18',change:'On schedule',icon:Dumbbell}
];
export default function App(){
  const [page,setPage]=useState('Overview'); const [menu,setMenu]=useState(false);
  return <div className="app-shell">
    <header className="topbar"><a className="brand" href="#"><span className="brand-mark">F</span><span>FITZONE<span className="lime"> PRO</span><small>TRAIN SMART. LIVE STRONG.</small></span></a>
      <nav className="top-links"><a href="#programs">Programs</a><a href="#membership">Membership</a><a href="#trainers">Trainers</a></nav>
      <div className="top-actions"><button className="icon-btn" aria-label="Notifications"><Bell size={18}/></button><button className="profile">AG</button><button className="menu-btn" onClick={()=>setMenu(!menu)}><Menu/></button></div>
    </header>
    <main>
      <section className="hero">
        <div className="hero-image"></div><div className="hero-shade"></div>
        <div className="hero-content">
          <motion.p className="eyebrow" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}}>THE NEXT LEVEL OF FITNESS</motion.p>
          <motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{delay:.15,duration:.8}}>TRAIN BEYOND<br/><span>YOUR LIMITS.</span></motion.h1>
          <motion.p className="hero-copy" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.55}}>Your goals. Your discipline. Your transformation. A smarter way to train, track progress, and become stronger every day.</motion.p>
          <motion.div className="hero-buttons" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.7}}><a className="btn-primary" href="#dashboard">EXPLORE DASHBOARD <ArrowUpRight size={17}/></a><a className="btn-ghost" href="#programs">DISCOVER PROGRAMS <ChevronRight size={17}/></a></motion.div>
        </div>
        <div className="hero-stamp"><span>01 / 04</span><i></i><span>BUILT FOR PROGRESS</span></div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"></span><span>EST. FOR YOUR NEXT PERSONAL BEST</span></div>
      </section>
      <section className="ticker"><span>STRENGTH</span><b>✳</b><span>DISCIPLINE</span><b>✳</b><span>PERFORMANCE</span><b>✳</b><span>CONSISTENCY</span><b>✳</b><span>STRENGTH</span></section>
      <section className="dashboard-section" id="dashboard">
        <div className="section-heading"><div><p className="eyebrow">YOUR GYM. ONE COMMAND CENTER.</p><h2>BUILT TO <span className="lime">PERFORM.</span></h2></div><span className="demo-label"><i/> LIVE DEMO DATA</span></div>
        <div className="workspace">
          <aside className={`sidebar ${menu?'show':''}`}><div className="side-label">WORKSPACE</div>{nav.map((n,i)=><button key={n} className={`side-link ${page===n?'active':''}`} onClick={()=>{setPage(n);setMenu(false)}}>{i===0?<LayoutDashboard size={17}/>:i===1?<Users size={17}/>:i===2?<Wallet size={17}/>:i===3?<Dumbbell size={17}/>:i===4?<Activity size={17}/>:i===5?<CheckCircle2 size={17}/>:i===6?<Wallet size={17}/>:<CalendarDays size={17}/>}<span>{n}</span>{page===n&&<span className="active-dot"/>}</button>)}<div className="side-foot"><div className="avatar">AG</div><div><b>Abhishek Gowda</b><small>Gym Administrator</small></div></div></aside>
          <div className="dash-main"><div className="dash-top"><div><p className="muted">WEDNESDAY, NOVEMBER 12</p><h3>{page==='Overview'?'Good morning, Abhishek.':page}</h3><p className="muted">Here’s what’s happening at your gym today.</p></div><button className="date-btn"><CalendarDays size={16}/> This week</button></div>
            <div className="metric-grid">{metrics.map((m,i)=><motion.article className="metric-card" key={m.label} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><div className="metric-top"><span>{m.label}</span><m.icon size={18}/></div><strong>{m.value}</strong><small className="metric-change">{m.change} <span>vs last month</span></small></motion.article>)}</div>
            <div className="dash-grid"><article className="panel attendance-panel"><div className="panel-head"><div><p className="muted">WEEKLY ACTIVITY</p><h4>Attendance overview</h4></div><span className="pill">THIS WEEK</span></div><div className="chart"><ResponsiveContainer width="100%" height="100%"><BarChart data={data}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#293036"/><XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill:'#89939b',fontSize:11}}/><Tooltip contentStyle={{background:'#171d21',border:'1px solid #333d43',borderRadius:10}}/><Bar dataKey="visits" fill="#c7ff3d" radius={[5,5,0,0]}/></BarChart></ResponsiveContainer></div></article>
              <article className="panel renewals"><div className="panel-head"><div><p className="muted">ACTION REQUIRED</p><h4>Upcoming renewals</h4></div><button className="text-btn">View all <ArrowUpRight size={14}/></button></div>{[['Rohan Shetty','Premium annual','Today'],['Aisha Khan','Strength monthly','Tomorrow'],['Nikhil Rao','Quarterly plan','Nov 15']].map(x=><div className="renewal-row" key={x[0]}><div className="mini-avatar">{x[0].split(' ').map(s=>s[0]).join('')}</div><div className="renewal-name"><b>{x[0]}</b><small>{x[1]}</small></div><span>{x[2]}</span></div>)}</article></div>
            <div className="quick-actions"><div><p className="muted">QUICK ACTIONS</p><h4>Keep things moving.</h4></div><button onClick={()=>setPage('Members')}><Users size={17}/> Add member <ArrowUpRight size={14}/></button><button onClick={()=>setPage('Attendance')}><CheckCircle2 size={17}/> Check in <ArrowUpRight size={14}/></button><button onClick={()=>setPage('Memberships')}><Zap size={17}/> New membership <ArrowUpRight size={14}/></button></div>
          </div>
        </div>
      </section>
      <section className="programs" id="programs"><p className="eyebrow">TRAIN WITH PURPOSE</p><h2>FIND YOUR <span className="lime">EDGE.</span></h2><div className="program-grid"><div className="program-card p1"><span>01 / STRENGTH</span><h3>BUILD<br/>POWER.</h3></div><div className="program-card p2"><span>02 / CONDITIONING</span><h3>OWN YOUR<br/>PACE.</h3></div><div className="program-card p3"><span>03 / PERFORMANCE</span><h3>MOVE<br/>BETTER.</h3></div></div></section>
      <section className="join" id="membership"><div><p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p><h2>SHOW UP.<br/><span className="lime">LEVEL UP.</span></h2></div><a className="btn-primary" href="mailto:hello@fitzonepro.example">START YOUR JOURNEY <ArrowUpRight/></a></section>
    </main>
    <footer><a className="brand" href="#"><span className="brand-mark">F</span><span>FITZONE<span className="lime"> PRO</span><small>TRAIN SMART. LIVE STRONG.</small></span></a><span>© 2026 FITZONE PRO · STARTER DEMO</span><span>BUILT FOR PROGRESS <Zap size={14}/></span></footer>
  </div>
}

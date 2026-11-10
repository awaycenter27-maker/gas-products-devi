'use client'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {useState} from 'react'
const links = [['/','Home'],['/about','About'],['/products','Products'],['/factories','Factories'],['/companies','Group companies']]
export default function Nav(){
  const path = usePathname()
  const [open,setOpen] = useState(false)
  return <header className="header"><div className="wrap nav-inner">
    <Link className="identity" href="/" onClick={()=>setOpen(false)}>Industrial gases <small>KOLKATA · WEST BENGAL</small></Link>
    <button className="menu" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button>
    <nav id="navigation" className={open?'navigation open':'navigation'} aria-label="Main">
      {links.map(([href,label])=><Link key={href} href={href} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}
      <Link className="button" href="/quote" aria-current={path==='/quote'?'page':undefined} onClick={()=>setOpen(false)}>Request a quote <span className="diagonal" aria-hidden="true"/></Link>
    </nav>
  </div></header>
}

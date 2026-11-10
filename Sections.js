import Image from 'next/image'
import Link from 'next/link'
import {photos, products, factories, companies} from '../lib/content'
export function Photo({id, className='', eager=false, sizes='(max-width: 760px) 100vw, 45vw'}){
  const portrait = id === 'anirudh-jalan'
  return <Image className={'photo '+className} src={'/images/'+id+'.webp'} alt={photos[id]} width={portrait?640:1200} height={portrait?801:1600} sizes={sizes} preload={eager}/>
}
export function QuoteLink({gas, children='Request a quote'}){
  return <Link className="button" href={gas?'/quote?gas='+gas:'/quote'}>{children} <span className="diagonal" aria-hidden="true"/></Link>
}
export function QuoteBanner(){
  return <section className="band"><div className="wrap band-inner"><div><p className="eyebrow">Sales enquiries</p><h2>What does your business need?</h2></div><QuoteLink/></div></section>
}
export function Leadership(){
  return <section className="section wrap leadership"><Photo id="anirudh-jalan" sizes="(max-width: 760px) 165px, 210px"/><div><p className="eyebrow">Leadership</p><h2>Under the leadership of Mr. Anirudh Jalan.</h2></div></section>
}
export function ProductRows({full=false}){
  return <div className="rows">{products.map((p,i)=><article className="product-row" key={p.id}><span className="index">0{i+1}</span><div><p className="eyebrow">{p.label}</p><h3>{p.name}</h3>{full && <p>{p.copy}</p>}</div>{full?<QuoteLink gas={p.id}>Enquire</QuoteLink>:<Link className="arrow" aria-label={'Explore '+p.name} href="/products"><span className="diagonal" aria-hidden="true"/></Link>}</article>)}</div>
}
export function FactoryRows(){
  return <div className="factory-grid">{factories.map((f,i)=><article key={f.name}><span className="index">0{i+1}</span><h3>{f.name}</h3><p>{f.location}</p>{f.address && <p>{f.address}</p>}{f.operator && <p>{f.operator}</p>}{f.photo && <Photo id={f.photo}/ >}{f.map && <a href={f.map}>View map <span className="diagonal" aria-hidden="true"/></a>}</article>)}</div>
}
export function CompanyRows({summary=false}){
  return <div className="rows">{companies.slice(summary?1:0).map((company,i)=><article className="company-row" key={company.name}><span className="index">0{i+(summary?2:1)}</span><div><h3>{company.name}</h3>{company.copy && <p>{company.copy}</p>}{(company.cin || company.incorporated) && <dl>{company.cin && <><dt>CIN</dt><dd>{company.cin}</dd></>}{company.incorporated && <><dt>Incorporated</dt><dd>{company.incorporated}</dd></>}</dl>}</div></article>)}</div>
}

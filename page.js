import Link from 'next/link'
import {intro, name} from '../lib/content'
import {Photo, QuoteLink, QuoteBanner, Leadership, ProductRows, FactoryRows, CompanyRows} from '../components/Sections'
export default function Home(){
  return <>
    <section className="hero"><div className="wrap hero-grid">
      <div className="hero-copy"><p className="eyebrow">Industrial gas manufacturing & supply</p><h1>Industrial Oxygen.<br/><em>Four Decades of Experience.</em></h1><p className="lede">{intro}</p><div className="actions"><QuoteLink/><Link className="text-link" href="/products">Explore our products <span className="diagonal" aria-hidden="true"/></Link></div></div>
      <figure className="hero-photo"><Photo id="exterior" eager/><figcaption><span>Facility photograph</span><span>From our operations</span></figcaption></figure>
    </div></section>
    <section className="section wrap split"><div><p className="eyebrow">01 / Products</p><h2>Manufacturing & supply</h2></div><ProductRows/></section>
    <section className="muted"><div className="section wrap"><div className="section-head"><div><p className="eyebrow">02 / Operations</p><h2>Three factory locations</h2></div><Link className="text-link" href="/factories">Our factories <span className="diagonal" aria-hidden="true"/></Link></div><FactoryRows/></div></section>
    <section className="section wrap feature"><Photo id="plant"/><div><p className="eyebrow">03 / Group companies</p><h2>{name}</h2><p>Incorporated in West Bengal in 2004, Devi Gas Products Private Limited is part of our industrial gases business.</p><Link className="text-link" href="/companies">Explore our group companies <span className="diagonal" aria-hidden="true"/></Link></div></section>
    <div className="wrap compact"><CompanyRows summary/></div>
    <Leadership/><QuoteBanner/>
  </>
}

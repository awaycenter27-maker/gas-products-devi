import Link from 'next/link'
import Nav from '../components/Nav'
import {siteUrl, intro} from '../lib/content'
import './style.css'
const base = siteUrl()
export const metadata = {
  ...(base && {metadataBase:new URL(base)}),
  title:{default:'Industrial Oxygen & Gas Supply | Kolkata, West Bengal', template:'%s | Industrial Gases, Kolkata'},
  description:intro,
  openGraph:{title:'Industrial Oxygen & Gas Supply', description:intro, ...(base && {images:['/images/exterior.webp']})}
}
export default function Layout({children}){
  return <html lang="en-IN"><body><a className="skip" href="#content">Skip to content</a><Nav/>
    <main id="content">{children}</main>
    <footer><div className="wrap footer-inner"><div><strong>Industrial gases</strong><p>Kolkata, West Bengal, India</p></div><div className="footer-links"><Link href="/products">Products</Link><Link href="/factories">Factories</Link><Link href="/companies">Group companies</Link><Link href="/quote">Contact</Link></div></div></footer>
    <Link className="mobile-quote button" href="/quote">Request a quote <span className="diagonal" aria-hidden="true"/></Link>
  </body></html>
}

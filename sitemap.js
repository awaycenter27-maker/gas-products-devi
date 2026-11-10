import {pages,siteUrl} from '../lib/content'
export default function sitemap(){
  const base=siteUrl()
  return base?['',...Object.keys(pages)].map(path=>({url:base+'/'+path})):[]
}

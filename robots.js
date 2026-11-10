import {siteUrl} from '../lib/content'
export default function robots(){
  const base=siteUrl()
  return {rules:{userAgent:'*',allow:'/',disallow:'/api/'},...(base && {sitemap:base+'/sitemap.xml'})}
}

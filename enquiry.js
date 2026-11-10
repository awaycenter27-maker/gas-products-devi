import {products} from './content.js'
export const fields = [
  ['name','Name',100], ['company','Company',120], ['phone','Phone',32],
  ['email','Email',254], ['gas','Gas required',20], ['quantity','Quantity or requirement',240],
  ['location','Delivery location',180], ['message','Message',1600]
]
export function validate(input){
  if(!input || typeof input!=='object') return {error:'Check the enquiry details and try again.'}
  const data={}
  for(const [key,label,max] of fields){
    if(typeof input[key]!=='string' || input[key].length>max) return {error:'Check the '+label.toLowerCase()+' field.'}
    data[key]=input[key].trim()
  }
  if(!data.name || !data.company || !data.quantity || !data.location) return {error:'Enter your name, company, requirement and delivery location.'}
  if(!products.some(product=>product.id===data.gas)) return {error:'Select the gas you require.'}
  if(!data.phone && !data.email) return {error:'Enter a phone number or email address.'}
  if(data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return {error:'Enter a valid email address.'}
  if(data.phone && (!/^\+?[\d ().-]+$/.test(data.phone) || !/^\d{7,15}$/.test(data.phone.replace(/\D/g,'')))) return {error:'Enter a valid phone number.'}
  return {data}
}

export const name = 'Devi Gas Products Private Limited'
export const pages = {
  'about': ['About us', 'Four decades in industrial gases, based in Kolkata.'],
  'products': ['Our products', 'Industrial oxygen manufacturing and industrial gas supply.'],
  'factories': ['Our factories', 'Three factory locations across West Bengal.'],
  'companies': ['Our group companies', 'The companies associated with our business.'],
  'quote': ['Request a quote', 'Tell us what your business needs.']
}
export const photos = {
  exterior: 'Outdoor industrial facility with vertical storage vessels',
  plant: 'Interior of the industrial plant with blue steel framing',
  filling: 'Team members at the industrial oxygen cylinder filling area',
  'anirudh-jalan': 'Portrait of Mr. Anirudh Jalan'
}
export const products = [
  {id:'oxygen', name:'Industrial Oxygen', label:'Manufactured by us', copy:'Industrial oxygen for business requirements. Share your expected quantity and delivery location so our team can discuss your enquiry.', photo:'filling'},
  {id:'nitrogen', name:'Nitrogen', label:'Supplied by us', copy:'We supply nitrogen to industrial buyers. Tell us about your application and anticipated requirements.'},
  {id:'other', name:'Other Industrial Gases', label:'Available for enquiry', copy:'For other industrial gases, share the gas you need, the quantity and your delivery location.'}
]
export const factories = [
  {name:'Gosridi', location:'Howrah', address:'', operator:'', photo:'', map:''},
  {name:'Junglepur', location:'Howrah', address:'', operator:'', photo:'', map:''},
  {name:'Durgapur', location:'West Bengal', address:'', operator:'', photo:'', map:''}
]
export const companies = [
  {name, cin:'U23201WB2004PTC098697', incorporated:'31 May 2004', copy:'Incorporated in West Bengal in 2004, Devi Gas Products Private Limited is part of our industrial gases business.'},
  {name:'Prestige Properties Pvt Ltd'},
  {name:'Rajasthan Fertilisers & Chemicals Corporation Ltd'}
]
export const intro = 'Based in Kolkata, we manufacture industrial oxygen and supply nitrogen and other industrial gases, with an established operational presence across West Bengal.'
export function siteUrl() {
  const value = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL
  return value ? new URL(value.startsWith('http') ? value : 'https://' + value).origin : undefined
}

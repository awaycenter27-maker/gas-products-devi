'use client'
import {useRef,useState} from 'react'
import {products} from '../lib/content'
import {fields,validate} from '../lib/enquiry'
const required = new Set(['name','company','gas','quantity','location'])
const autocomplete = {name:'name',company:'organization',phone:'tel',email:'email'}
export default function QuoteForm({gas}){
  const [state,setState]=useState({kind:'',text:''})
  const sending=useRef(false)
  const last=useRef(null)
  async function submit(event){
    event.preventDefault()
    if(sending.current) return
    const form=event.currentTarget
    const input=Object.fromEntries(new FormData(form))
    const {data,error}=validate(input)
    if(error){setState({kind:'error',text:error});return}
    const fingerprint=JSON.stringify(data)
    if(last.current?.fingerprint!==fingerprint) last.current={fingerprint,id:crypto.randomUUID()}
    sending.current=true
    setState({kind:'busy',text:'Sending your enquiry…'})
    try{
      const response=await fetch('/api/quote',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...data,website:input.website,id:last.current.id}),signal:AbortSignal.timeout(16000)})
      const result=await response.json()
      if(!response.ok || !result.accepted){
        setState({kind:'error',text:result.error || 'We couldn’t submit your enquiry. Please try again.'})
        return
      }
      form.reset()
      last.current=null
      setState({kind:'success',text:'Your enquiry was submitted successfully.'})
    }catch{
      setState({kind:'error',text:'We couldn’t confirm your submission. Please try again.'})
    }finally{sending.current=false}
  }
  return <form onSubmit={submit} aria-busy={state.kind==='busy'}>
    <fieldset disabled={state.kind==='busy'}><legend className="sr-only">Quotation enquiry</legend>
      <div className="form-grid">{fields.map(([key,label,max])=><label key={key} className={['quantity','location','message'].includes(key)?'wide':''}>{label}{required.has(key) && <span className="required" aria-hidden="true"> *</span>}
        {key==='gas'?<select name={key} defaultValue={gas} required><option value="">Select a gas</option>{products.map(p=><option key={p.id} value={p.id}>{p.id==='other'?'Other':p.name}</option>)}</select>:key==='message'?<textarea name={key} rows="4" maxLength={max}/>:<input name={key} maxLength={max} required={required.has(key)} autoComplete={autocomplete[key]} type={key==='phone'?'tel':key==='email'?'email':'text'}/>}
      </label>)}</div>
      <div className="trap" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
      <p className="form-note">Provide a phone number or email. We use these details to respond to your enquiry.</p>
      <button className="button" type="submit">{state.kind==='busy'?'Sending…':state.kind==='error'?'Try again':'Send enquiry'} <span className="diagonal" aria-hidden="true"/></button>
    </fieldset>
    <p className={'status '+state.kind} role="status">{state.text}</p>
  </form>
}

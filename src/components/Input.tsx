import  { type ComponentPropsWithoutRef } from 'react'

type Input = ComponentPropsWithoutRef <"input"> 

export default function Input({type , placeholder , className , id}:Input) {
  return (
    <input className={className} type={type} placeholder={placeholder} id={id}/>
  )
}

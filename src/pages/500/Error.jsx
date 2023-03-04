import React from 'react'
import Response from '../../components/response/Response'
const Error = () => {
  return (
    <Response response={{status:500,message:"Oops, something bad happened"}}></Response>
  )
}

export default Error

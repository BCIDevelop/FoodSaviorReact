import React from 'react'
import Response from '../../components/response/Response'
const NotFound = () => {
  return (
    <Response response={{status:400,message:"Not what you're looking for"}}></Response>
  )
}

export default NotFound

import React from 'react'
import Cards from './Cards/Cards'

const Service = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center px-4'>
        <div className='w-full flex sm:flex-row flex-col text-center items-center sm:justify-around justify-center h-1/2'>
            <span className='text-terciario text-4xl font-bold'>Que podemos<br/> hacer por vos</span>
            <span className='text-terciario text-2xl font-normal'>Estos son algunos de los servicios que ofrecemos</span>
        </div>
        <Cards></Cards>
    </div>
  )
}

export default Service
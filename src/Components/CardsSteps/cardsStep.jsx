import React from 'react'

const CardsStep = ({
  txtNumber,
  txtTitle,
  txtDescription
}) => {
  return (
    <article className='pl-4'>
      <div className='flex items-center justify-center'>
        <span className='bg-BrightRed text-VeryPaleRed p-2 rounded-full py-2 px-6 font-bold'>{txtNumber}</span>
        <h3 className='bg-VeryPaleRed font-bold h-10 flex items-center w-full pl-4 rounded-tl-lg rounded-bl-lg text-base md:bg-transparent'>{txtTitle}</h3>
      </div>
      <p className='text-GrayishBlue text-sm mt-4'>{txtDescription}</p>
    </article>
  )
}

export { CardsStep }
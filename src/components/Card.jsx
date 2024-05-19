import React from 'react'

const Card = ({card}) => {
  return (
    <div className='bg-[#D9D9D9] px-2 py-4 rounded-[12px] md:w-[390px] h-auto'>
        <h1 className='text-[#292355] text-xl font-semibold text-center'>{card.title}</h1>
        <ul className='list-disc pl-6 text-[#292355] flex flex-col gap-2'>
            {
                card.desc.map((list,i)=>{
                    return (
                    <li key={i}>{list}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Card
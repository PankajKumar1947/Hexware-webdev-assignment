import React from 'react'
import Navbar from '../components/Navbar'
import HeroLeft from '../components/HeroLeft'
import Form from '../components/Form'
import Card from '../components/Card'


const Home = () => {
  const cardData=[
    {
      title:"Transportation",
      desc:[
        "Transportation by road should be in fully closed hard walled secured trucks, equipped with a mobile phone and an internal strapping system. A supply of clean PU Foam, bubble wrap and acid free tissue should be carried.",
        "The cargo area of the truck should be clean and free of any loose objects/particles.",
        "Works should be crated for transportation, as per Museum specifications.",
        "Crates should be strapped or wedged so that they cannot move about when in transit.",
        "There should be a minimum of two UAPL staff  with the works in transit, at all times, other than when the shipments are on board vessel or on the aircraft or accompanied by a courier designated by the lender/Museum/Art Gallery/Organiser",
        "Loading/Unloading of works into the trucks in strong wind or rain is to be ",
      ]
    },
    {
      title:"Airport Supervision",
      desc:[
        "To handle successful fine art consignment is to have maximum control on the consignment starting from packing, handling, transportation and handover to airlines.",
        "The key is to go one step more and oversee the handling at airport, witnessing the palletizing / de-palletizing of the consignment.",
        "Permissions for overseeing the handling at airport can be obtained at the time of filing the documents at Customs (depending on the security situation at each city).",
        "Professional Art handlers for examination & x-ray handling of crates.",
      ]
    }
  ]
  return (
    <div className=' pt-2 relative'>
        <div className='fixed top-0 w-[100vw] bg-white z-20'>
          <Navbar/>
        </div>
        
        <div className='flex flex-col md:flex-row justify-between mt-14'>
          <div className='w-[100%] md:w-[60%] '>
            <HeroLeft/>
            <div className='flex justify-center flex-wrap gap-2 items-start m-1 md:m-5'>
              {
                cardData.map((card,i)=>{
                  return (
                    <Card card={card} key={i}/>
                  ) 
                })
              }
            </div>
          </div>
          <div className='w-[100%] md:w-[35%]'>
            <Form/>
          </div>
          
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import CheckboxField from './CheckboxField'

const LeftColumn = () => {
  return (
    <div className=' w-[256px]  pr-[30px]  bg-[#F8F8F8]'>
      
<input type="text" value="Ilgili kategoriler" className='checkbox-header mb-[8px]  bg-[#F8F8F8] font-[600]'/>


<input type="text" value="Kazak" className=' bg-[#F8F8F8] mb-[8px]'/>
<input type="text" value="Jean" className=' bg-[#F8F8F8] mb-[8px]'/>
<input type="text" value="Pantalon" className=' bg-[#F8F8F8] mb-[8px]'/>
<input type="text" value="Kaban" className=' bg-[#F8F8F8] mb-[8px]'/>
<input type="text" value="T-Shirt" className=' bg-[#F8F8F8] mb-[8px]'/>
<input type="text" value="Elbise" className=' bg-[#F8F8F8] mb-[8px]'/>

<hr className='mt-[23px] border-[#EDEDED]'/>

        <CheckboxField heading="Cinsiyyet" label="Kadın" number={3} />
        <CheckboxField  label="Erkek" number={41}/>
        <CheckboxField  label="Çocuk" number={32}/>

        <hr className='mt-[23px] border-[#EDEDED]'/>

        <CheckboxField heading="Beden" label="XS" />

        <CheckboxField  label="S" number={41}/>
        <CheckboxField  label="M" number={32}/>
        <CheckboxField  label="L" number={17}/>
        <CheckboxField  label="XL" number={19}/>
        <CheckboxField  label="XXL" number={1}/>
        
        
        <hr className='mt-[23px] border-[#EDEDED]'/>


        <CheckboxField heading="Yaş oranı" label="3-6 AY" number={3}/>
        <CheckboxField  label="6-9 AY" number={41}/>
        <CheckboxField  label="9-12 AY" number={32}/>
        <CheckboxField  label="18-24 AY"  number={17}/>
        <CheckboxField  label="2-3 AY" number={19}/>
        <CheckboxField  label="c" number={1}/>

        <hr className='mt-[23px] border-[#EDEDED]'/>

        <CheckboxField heading="Renk" label="Beyaz" />
        <CheckboxField  label="Bej" className="bg-[]"/>
        <CheckboxField  label="Mor" />
        <CheckboxField  label="Mavi"/>
        <CheckboxField  label="Yeşil"/>
        <CheckboxField  label="Kırmızı"/>
        <CheckboxField  label="Sarı"/>

        <hr className='mt-[23px] border-[#EDEDED]'/>

        <CheckboxField heading="Fiyat aralığı" label="0 TL - 20 TL" />
        <CheckboxField  label="0 TL - 20 TL" />
        <CheckboxField  label="20 TL - 30 TL"/>
        <CheckboxField  label="30 TL - 50 TL"/>
        <CheckboxField  label="50 TL - 70 TL"/>
        <CheckboxField  label="70 TL - 125 TL"/>
        <CheckboxField  label="124 TL - 400 TL"/>








   

    </div>
  )
}

export default LeftColumn

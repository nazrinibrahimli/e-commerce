import React from 'react'
import LeftColumn from './LeftColumn';
import ProductListing from './ProductListing';
import shop from'../images/shop.svg' ;
import NavLinks from './NavLinks';
import Footer from './Footer';

const MainScreen = () => {
  return (
    <div className='inline-block ml-[207px] bg-[#F8F8F8] h-max'>



        <div className='row py-[10px] flex mt-[54px] items-center  '>

        <img src={shop} className="pl-[20px] pr-[11px]"/>

            <p className='mr-[144px]'>
                
        Ürün sayı: <span className='text-[#FF0000] font-[600]'>23244</span>
            </p>
            <bottom className="button border-[#FF0000]" > <a className='text-[#FF0000]'>Tümü</a>
                </bottom>
            <bottom className="button"> <a className='text-[#666666]'>
            Yeni gelenler
            </a>
                
                </bottom>
            <bottom className="button">
                <a className='text-[#666666]'>
                İndirimler
                </a>
                </bottom>
            <bottom className="button">
                <a className='text-[#666666]'>
                Çok satanlar
                </a>
                </bottom>

    <div className='relative left-[460px] button'>
    <select id="currency" name="currency" className='text-[#666666]'>
                  
                  <option value="Siralama"> 
         
                  Sıralama seçin
                       </option>
                  </select>

    </div>
             

        </div>

         <div className='main-div flex '>
        <LeftColumn/>
        <ProductListing/>

        </div>


    </div>
  )
}

export default MainScreen

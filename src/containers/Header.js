import React from 'react'
import search from '../images/Vector.svg' 
import order from'../images/orders.svg' 
import fav from'../images/favorilerim-icon.svg' 
import busket from'../images/sepetim-icon.svg' 
import flag from'../images/turkey-flag.svg' 




const Header = () => {
  return (
    <div className='header items-center '>
      <h1 className='text-[#FF0000] text-lg w-[173px] ml-[34px] mr-[93px]'>LOGO</h1>
      <nav >
          <ul className='flex align-center'>
              <li className='mr-[41px] truncate underline'>
                  Mağazanı yarat
              </li>
              <li className='mr-[41px]'>
                  Yardım 
              </li>

            <li>
            <form className='flex'>
            <img src={flag}/>

              <select id="currency" name="currency">
                  
         <option value="Istanbul"> 

             Istanbul| TR | TRY 
              </option>
         </select>
              </form>
             </li>   
        

          </ul>
          
      </nav>
      <i class="icon"> <img src={search} className="relative left-[116px]"></img> </i>

      
      <input
    type="search"
    value="Aradığınız herşey burada" className='input-field pl-[47.77px] ml-[80px] ' 
    /> 
     <button type="submit" value="Submit" className=' search-button  ' >Arama yap</button>






  <nav>


  <ul className='flex align-center'>
              <li className=' mr-[50px] '>
              <img src={order} className="ml-[28px] mb-[8px]"></img> 
                  Siparişlerim
              </li>
              <li className='mr-[50px] '>
              <img src={fav} className="ml-[24px] mb-[8px]"></img> 

                  Favorilerim 
              </li>
              <li  className=' mr-[144px]' >
              <img src={busket} className="ml-[19px] mb-[8px]"></img> 

                  Sepetim 
              </li >
          </ul>
    </nav>

    </div>

  );
}

export default Header;

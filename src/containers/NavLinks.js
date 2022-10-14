import React from 'react'
import Links from './Links'
import menu from'../images/menu.svg' 

const NavLinks = () => {
  return (
    <div className='flex items-center h-[56px] link-item bg-white '>
      <button className="ml-[33px] mr-[30px]">
      <img src={menu} className=""/>

      </button>

    <Links link="Kadın" />
    <Links link="Erkek"/>
    <Links link="Çocuk"/>
    <Links link="Ayakkabı & Çanta"/>
    <Links link="Saat & Aksesuar"/>
    <Links link="Kozmetik Ev & Yaşam"/>
    <Links link="Spor & Outdoor"/>
    <Links link="Kitap & Hobi"/>
    <Links link="Oto & Bahçe"/>
    <Links link="Elektronik"/>
    <Links link="Süpermarket"/>
    <Links link="Süper Fırsatlar"/>
    <Links link="Kampanyalar"/>
    <Links link="İndirimler"/>
    <Links link="Blog"/>
    <Links link="Markalar"/>







    </div>
  )
}

export default NavLinks

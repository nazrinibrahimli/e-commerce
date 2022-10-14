import React from 'react'

const CheckboxField = (props) => {
  return (
    <div className=' '>
            <h1 className="checkbox-header mb-[18px] pt-[20px] font-[600]">{props.heading}</h1>
      <form className='flex justify-between items-center'>
          <div>
          <input type="checkbox"  name="" value="" className="checkbox mr-[13px]"/>
      <label for="" className='text-center'  > {props.label}</label>
          </div>

      <label for="" className=''> {props.number}</label>
 


      

      </form>

    </div>
  )
}

export default CheckboxField

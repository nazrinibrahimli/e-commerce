import React from 'react'

const Links = (props) => {
  return (
    <div className='flex mr-[29px]'>
      <nav className='flex align-center'>
          <ul>
              <li>
                  <a className='truncate '>                   {props.link}
</a>
              </li>
          </ul>
      </nav>
    </div>
  )
}

export default Links

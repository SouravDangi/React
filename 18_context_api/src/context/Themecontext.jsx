import React, { createContext } from 'react'


export const context=createContext()
const Themecontext = (props) => {

  return (
    <div>
      <context.Provider value='Saurabh'>
        {props.children}
      </context.Provider>
    </div>
  )
}
export default Themecontext
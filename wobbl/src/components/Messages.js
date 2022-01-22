import React from 'react';
import Msg from './Msg';

export default function Messages({chat}) {
  return(
        chat.map(msg => {
        return <Msg msg={msg}/>
    }) 
  )
}

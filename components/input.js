import React, { useState } from "react";


export default function input() {

  const [text, setText] = useState('');

  const handleTextChange = (e)=>{
    setText(e.target.value)
}

  return (
    <div className="mt-5 border-hero md:w-[50rem] w-[20rem]">
        <div className="content flex justify-between">
            <input
                value={text}
                onChange={handleTextChange}
                placeholder="Yes, let’s begin."
                className="p-2 w-[8rem] md:w-[35rem] focus:ring-blue-600 "
            />
            <img src={'/images/astro-enter.png'}/>
        </div>
    </div>
  )
}

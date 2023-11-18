import React, { useState } from "react";


export default function input({getUserInput}) {

  const [text, setText] = useState('');

  const handleTextChange = (e)=>{
    setText(e.target.value)
  }

  const returntUserInput = ()=>{
    getUserInput(text)
    setText('')
  }


  return (
    <div className="mt-5 bg-astro border-hero sm:w-[40rem] lg:w-[50rem] w-[20rem]">
        <div className="content flex justify-between">
            <textarea
               value={text}
                onChange={handleTextChange}
                placeholder="Yes, let’s begin."
                className="p-2 w-[8rem] md:w-[35rem] focus:ring-blue-600 astro-scrollbar"
                type='text'
            />
              <button
                onClick={returntUserInput}
                class='p-3 bg-blue-800 hover:bg-purple-800'
                data-te-toggle="tooltip"
                title="Click to chat!"
              >
                <img class='' src={'/images/astro-enter.png'}/>
              </button>
        </div>
    </div>
  )
}

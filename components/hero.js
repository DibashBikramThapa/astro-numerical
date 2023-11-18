import React, { useState, useEffect } from "react";

export default function hero({user_input}) {

    const [text, setText] = useState([]);

    const handleUserInpputChange = ()=>{
        if(user_input){
            setText( oldArray => [...oldArray,[user_input]]);
        }
    }

    const getChatBorder = (index)=>{
        const key=index%5
        switch(key){
            case 1:
                return 'rounded-tl-lg'
            case 2:
                return 'rounded-tr-lg'
            case 3:
                return 'rounded-bl-lg'
            case 4:
                return 'rounded-br-lg'
            default:
                return 'rounded-lg'
        }

    }

    const UpdatedUserInput = ()=>{
        return (
            <>
                <ul>
                {text.map((each,index)=>
                    <li key={index} className={getChatBorder(index) + ' mt-2 p-1 border-indigo-300 border-[.1rem] break-words'}>
                        {each}
                    </li>
                )}
                </ul>
            </>
        )
    }

    useEffect(() => {
        handleUserInpputChange()
      }, [user_input]);


    return (
        <div className="border-hero bg-astro sm:w-[40rem] lg:w-[50rem] w-[20rem]">
            <div className="content pl-[2rem] h-[38rem] sm:h-[35rem] md:h-[20rem] italic astro-scrollbar overflow-y-auto">
                {text.length ?
                    <UpdatedUserInput/>
                    :
                    <p>Welcome to AstroNumeral, where cosmic insights meet personal discovery. Let's embark on a journey to unlock the mysteries of your life path and
                        explore the unique connections between numerology and astrology. Shall we begin?
                    </p>
                }
            </div>
        </div>
    )
}

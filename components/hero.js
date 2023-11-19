import React, { useState, useEffect } from "react";
import sendMsg from "../api/openai";

export default function hero({user_input, user_date}) {

    const [chatLog, setchatLog] = useState([]);

    const handleUserInputChange = async()=>{
        if(user_input && user_date){
            const user_data={
                'content': user_input,
                'role':'user'
            }
            setchatLog( oldArray => [...oldArray,user_data]);
            const data = await sendMsg(user_date, user_data, chatLog)
            if(data?.choices.length){
                const resp_data = {
                    'content': data.choices[0]['message']['content'],
                    'role': 'system',
                }
                setchatLog( oldArray => [...oldArray,resp_data]);
            }
        }
    }

    const getChatBorder = (index)=>{
        const key=index%5
        switch(key){
            case 1:
                return 'rounded-tl-lg '
            case 2:
                return 'rounded-tr-lg '
            case 3:
                return 'rounded-bl-lg '
            case 4:
                return 'rounded-br-lg '
            default:
                return 'rounded-lg '
        }

    }
    const getChatOutline = (role, forOutline=true)=>{
        if(forOutline){
            var chatOutline = 'flex flex-col justify-center '
            role == 'user' ?
                    chatOutline += 'items-start':
                    chatOutline += 'items-end'
        }
        else{
            var chatOutline= 'mt-2 pl-4 pr-4  border-[.1rem] break-words '
            role == 'user'?
            chatOutline +='bg-indigo-300 w-[20rem]':
            chatOutline +='bg-blue-300 w-[30rem] flex-grow'
        }
        return chatOutline
    }

    const UpdatedUserInput = ()=>{
        return (
            <>
                {chatLog.length && chatLog.map((each,index)=>
                    <div  key={index} className={getChatOutline(each.role)}>
                        <div className={getChatBorder(index) + getChatOutline(each.role,false)}>
                            {each.content}
                        </div>
                    </div>
                )}
            </>
        )
    }

    useEffect(() => {
        handleUserInputChange()
      }, [user_input]);


    return (
        <div className="border-hero bg-astro sm:w-[40rem] lg:w-[50rem] w-[20rem]">
            <div className="content pl-[2rem] h-[38rem] sm:h-[35rem] md:h-[20rem] italic astro-scrollbar overflow-y-auto">
                {chatLog.length ?
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

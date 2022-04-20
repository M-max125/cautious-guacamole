import React from 'react';

export const MyInput: React.FC<{
    name: string,
    type: string,
    placeholder: string,
    value?: string,
    className: string,
    onKeyEnter? : (event:React.KeyboardEvent) => void
    onChange?: (event:React.ChangeEvent<any>)=>void
}> = (props) => {
    return <>
        <input
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            className={props.className}
            onChange={props.onChange}
            onKeyPress={props.onKeyEnter}
            
        />
    </>
}

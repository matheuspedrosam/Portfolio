import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../select'

export default function SelectUI(props) {
    const {placeholder, className, options} = props;
    return (
        <Select>
            <SelectTrigger className={`${className ? className : 'w-[100%]'}`}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option, i) => <SelectItem value={option.value}>{option.description}</SelectItem>)}
            </SelectContent>
        </Select>
    )
}

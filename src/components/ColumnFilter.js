import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
export const ColumnFilter = ({ filter, setGlobalFilter }) => {

    const [values, setValue] = useState(filter)

    const OnChange = useAsyncDebounce((values) => {
        setGlobalFilter(values || undefined)

    }, 1000)
    return (
        <div>
            Search :  {""}
            <input value={values || ''}
                onChange={(e) => {
                    setValue(e.target.value)
                    OnChange(e.target.value)
                }}></input>
        </div>
    )
}



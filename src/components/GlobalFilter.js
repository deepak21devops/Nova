import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useFilters } from 'react-table'
import { ColumnFilter } from './ColumnFilter'
import { COLUMNS, GROUP_COLUMNS } from './data'
import MOCK_DATA from './MOCK_DATA.json'
import './style.css'
import ColumnSort from './ColumnSort'

const GlobalFilter = () => {

    const columns = useMemo(() => COLUMNS, [])

    const data = useMemo(() => MOCK_DATA, [])

    const defaultColumn = useMemo(() => { return { Filter: ColumnSort } }, [])


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({ columns, data, defaultColumn }, useFilters, useGlobalFilter)

    const { globalFilter } = state



    return (
        <div>
            <ColumnFilter filter={globalFilter} setGlobalFilter={setGlobalFilter} />
            <table {...getTableProps}>
                <thead>
                    {headerGroups.map(headerGroup =>
                        <tr {...headerGroup.getHeaderGroupProps()}>

                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}

                        </tr>
                    )}

                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>

                <tfoot>
                    {footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map(column => (
                                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </div>
    )
}

export default GlobalFilter

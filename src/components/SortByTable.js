import React, { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import { COLUMNS, GROUP_COLUMNS } from './data'
import MOCK_DATA from './MOCK_DATA.json'
import './style.css'

const SortByTable = () => {

    const columns = useMemo(() => COLUMNS, [])

    const data = useMemo(() => MOCK_DATA, [])


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow } = useTable({ columns, data }, useSortBy)
    return (
        <div>
            <table {...getTableProps}>
                <thead>
                    {headerGroups.map(headGroup =>
                        <tr {...headGroup.getHeaderGroupProps()}>

                            {headGroup.headers.map(header => (
                                <th {...header.getHeaderProps(header.getSortByToggleProps())}>
                                    {header.render('Header')}
                                    <span>{header.isSorted ? (header.isSortedDesc ? ' 🔽' : ' 🔼') : ""}</span>
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
                    {footerGroups.map(footer => (
                        <tr {...footer.getFooterGroupProps()}>
                            {footer.headers.map(foot => (
                                <td {...foot.getFooterProps()}>
                                    {foot.render('Footer')}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </div>
    )
}

export default SortByTable

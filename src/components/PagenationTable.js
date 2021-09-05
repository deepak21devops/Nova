import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import { COLUMNS, GROUP_COLUMNS } from './data'
import MOCK_DATA from './MOCK_DATA.json'
import './style.css'

const PagenationTable = () => {

    const columns = useMemo(() => COLUMNS, [])

    const data = useMemo(() => MOCK_DATA, [])


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        state,
        gotoPage,
        pageCount,
        pageOptions,
        canPreviousPage,
        canNextPage,
        prepareRow } = useTable({ columns, data }, usePagination)

    const { pageIndex } = state
    return (
        <div>
            <table {...getTableProps}>
                <thead>
                    {headerGroups.map(headGroup =>
                        <tr {...headGroup.getHeaderGroupProps()}>

                            {headGroup.headers.map(header => (
                                <th {...header.getHeaderProps()}>
                                    {header.render('Header')}
                                </th>
                            ))}

                        </tr>
                    )}

                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
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

            </table>

            <div>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage} >PreviousPage</button>
                <input type="number" defaultValue={pageIndex + 1} onChange=
                    {e => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }}></input>
                <button onClick={() => nextPage()} disabled={!canNextPage} >NextPage</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{">>"}</button><br></br>
                <span>Page: {" "} {pageIndex + 1} of {pageOptions.length}</span>
            </div>
        </div>
    )
}

export default PagenationTable

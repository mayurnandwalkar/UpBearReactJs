import React, { useState, useEffect, useMemo } from 'react'
import { useTable, usePagination, useRowSelect } from 'react-table'
import Checkbox from './Checkbox'

const Table = (props) => {
    // console.log(props.data)
    const columns = useMemo(() => props.column, [])
    const data = useMemo(() => props.data, [])    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state,
        gotoPage,
        pageCount,
        prepareRow,
        // selectedFlatRows
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 }},
        usePagination,        
        // useRowSelect,
        // hooks => {
        //     hooks.visibleColumns.push(columns => [
        //         {
        //         id: 'selection',
        //         Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} checked={row.isSelected}/>
        //         },
        //         ...columns
        //     ])
        // }
    )
    // console.log({selectedFlatRows: selectedFlatRows.map(row => row.original.id)})
    
    
    const { pageIndex, pageSize } = state
    const firstPageRows = rows.slice(0, 10)
    return (
        <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
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
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>
          <span>Page <strong>{pageIndex + 1} of {pageOptions.length}</strong></span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
          {/* <span>
            | Go to page:{' '}
            <input
              type='number'
              defaultValue={pageIndex + 1}
              onChange={e => {
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
              }}
              style={{ width: '50px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={e => setPageSize(Number(e.target.value))}>
            {[10, 25, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select> */}
        </div>
        </>
    )
}

export default Table
import { format } from 'date-fns'
import ColumnSort from './ColumnSort'
export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'id',
        accessor: 'id',
        // Filter: ColumnSort
    },

    {
        Header: 'Name',
        Footer: 'name',
        accessor: 'name',
        // Filter: ColumnSort
    },

    {
        Header: 'Email ID',
        Footer: 'email',
        accessor: 'email',
        // Filter: ColumnSort
    },

    {
        Header: 'Gender',
        Footer: 'gender',
        accessor: 'gender',
        // Filter: ColumnSort,
    },
    {
        Header: 'Color',
        Footer: 'status',
        accessor: 'status',
        // Filter: ColumnSort
    }
]


export const GROUP_COLUMNS = [
    {
        Header: 'Id',
        Footer: 'id',
        accessor: 'id'
    },

    {
        Header: 'Personal',
        Footer: 'Personal',
        columns: [
            {
                Header: 'Name',
                Footer: 'name',
                accessor: 'name'
            },

            {
                Header: 'Email ID',
                Footer: 'email',
                accessor: 'email'
            }
        ]
    },

    {
        Header: 'Private',
        Footer: 'Private',
        columns: [
            {
                Header: 'Gender',
                Footer: 'gender',
                accessor: 'gender'
            },
            {
                Header: 'Color',
                Footer: 'status',
                accessor: 'status'
            }
        ]

    }
]
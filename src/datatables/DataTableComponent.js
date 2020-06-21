import React from 'react';
import { useTable,useFilters, useGlobalFilter } from 'react-table' 
import Table from 'react-bootstrap/Table'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.min.css';


function DataTableComponent({  data }) {
    // Use the state and functions returned from useTable to build your UI
    const columns =  [{  
        Header: 'Date',  
        accessor: 'date',
        style: {
          textAlign: 'center'
        }, 
        Cell: props => <div> {moment(props.value).format('MMM-DD')} </div> 
       },{  
       Header: 'Impressions',  
       accessor: 'impressions',
       filter: 'text',
       style: {
        textAlign: 'center'
        }
       },
       {  
          Header: 'Clicks',  
          accessor: 'clicks',
          filter: 'text',
          style: {
            textAlign: 'center'
          }
        },
        {
          Header: 'Revenue',
          accessor: 'revenue',
          filter: 'text',
          style: {
            textAlign: 'center'
          }, 
          Cell: props => <div> {Math.trunc(props.value)} </div> 
        }]
    
    const DefaultColumnFilter = ({
          column: { filterValue, preFilteredRows, setFilter }
        }) => {
          const count = preFilteredRows.length;
        
          return (
            <input
              value={filterValue || ""}
              onChange={e => {
                setFilter(e.target.value || undefined);
              }}
              placeholder={`Search ${count} records...`}
            />
          );
        };
        
    const GlobalFilter = ({
          preGlobalFilteredRows,
          globalFilter,
          setGlobalFilter
        }) => {
          const count = preGlobalFilteredRows && preGlobalFilteredRows.length;
        
          return (
            <span>
              Search:{" "}
              <input
                value={globalFilter || ""}
                onChange={e => {
                  setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
                }}
                placeholder={`${count} records...`}
                style={{
                  border: "0"
                }}
              />
            </span>
          );
      };
    const defaultColumn = ({
          Filter: DefaultColumnFilter
        })
     
    const filterTypes = ({
            text: (rows, id, filterValue) => {
              return rows.filter(row => {
                const rowValue = row.values[id];
                return rowValue !== undefined
                  ? String(rowValue)
                      .toLowerCase()
                      .startsWith(String(filterValue).toLowerCase())
                  : true;
              });
            }
          })
        
      
    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter
    } = useTable({
        columns,
        data,
        defaultColumn,
        filterTypes
      },
        useFilters,
        useGlobalFilter)
  
    // Render the UI for your table
    return (
      <Table striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}
                    
                </th>
              ))}
            </tr>
          ))}
          <tr>
          <th
            colSpan={visibleColumns.length}
            style={{
              textAlign: "left"
            }}
          >
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </th>
        </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
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
      </Table>
    )
  }
export default DataTableComponent; 

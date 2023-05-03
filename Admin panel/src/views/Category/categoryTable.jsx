// ** React Imports
import { useState, Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import Collapse from '@mui/material/Collapse'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TableContainer from '@mui/material/TableContainer'

// ** Icons Imports
import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'

const createData = (srno, Name, description, carbs, protein, price) => {
  return {
    srno,
    Name,
    description,
    carbs,
    protein,
    price,
    subcat: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1
      }
    ]
  }
}


const Row = props => {
  // ** Props
  const { row } = props

  // ** State
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
            {open ? <ChevronUp /> : <ChevronDown />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.srno}
        </TableCell>
        <TableCell align='right'>{row.Name}</TableCell>
        <TableCell align='right'>{row.description}</TableCell>
        <TableCell align='right'>{row.carbs}</TableCell>
        <TableCell align='right'>{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={6} sx={{ py: '0 !important' }}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ m: 2 }}>
              <Typography variant='h6' gutterBottom component='div'>
                Sub-Category
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align='right'>Amount</TableCell>
                    <TableCell align='right'>Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.subcat.map(historyRow => (
                    <TableRow key={historyRow.date}>
                      <TableCell component='th' scope='row'>
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align='right'>{historyRow.amount}</TableCell>
                      <TableCell align='right'>{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

const rows = [
  createData(1, 'Electronics','All electronics like phones,tablets,geyser and more', 24, 4.0, 3.99),
  createData(2, 237, 9.0, 37, 4.3, 4.99),
  createData(3, 262, 16.0, 24, 6.0, 3.79),
  createData(4, 305, 3.7, 67, 4.3, 2.5),
  createData(5, 356, 16.0, 49, 3.9, 1.5)
]


const CategoryTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'  stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Srno</TableCell>
            <TableCell align='right'>Category</TableCell>
            <TableCell align='right'>description</TableCell>
            <TableCell align='right'>Carbs (g)</TableCell>
            <TableCell align='right'>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CategoryTable;

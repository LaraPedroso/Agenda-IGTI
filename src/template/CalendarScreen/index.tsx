import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  // TableCell,
  TableBody,
  Paper
} from '@mui/material'

export function CalendarScreen() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow></TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

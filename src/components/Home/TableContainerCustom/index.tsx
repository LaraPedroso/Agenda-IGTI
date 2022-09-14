import { TableContainer, Table } from '@mui/material'
import { ReactNode } from 'react'
import useStyles from 'components/Home/TableContainerCustom/style'

type ContainerFormTypes = {
  children: ReactNode
}

export function TableContainerCustom({ children }: ContainerFormTypes) {
  return (
    <TableContainer component={'div'}>
      <Table sx={useStyles.table} aria-label="customized table">
        {children}
      </Table>
    </TableContainer>
  )
}

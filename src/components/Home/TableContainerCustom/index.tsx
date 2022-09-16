import { TableContainer, Table } from '@mui/material'
import { ReactNode } from 'react'
import useStyles from 'components/Home/TableContainerCustom/style'
import { ArrowButton } from 'components/Home/ButtonArrow'

type ContainerFormTypes = {
  children: ReactNode
}

export function TableContainerCustom({ children }: ContainerFormTypes) {
  return (
    <TableContainer component={'div'}>
      <ArrowButton />
      <Table sx={useStyles.table} aria-label="customized table">
        {children}
      </Table>
    </TableContainer>
  )
}

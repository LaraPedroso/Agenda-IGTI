import { Box } from '@mui/material'

export function BoxCustom( desc?: string ) {
  return (
    <Box
      sx={{
        borderRight: '1px solid rgb(224, 224, 244)',
        width: '16em',
        p: '8px 16px'
      }}
    >
      <h2>{desc}</h2>
    </Box>
  )
}

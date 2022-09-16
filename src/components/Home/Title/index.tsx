import { Box } from '@mui/material'
import { ButtonHome } from 'components/Home/Button'
import { CheckboxDiary } from 'components/Home/Checkbox'

interface PropsTitle {
  title?: string
}

export function TitleCustom({ title }: PropsTitle) {
  return (
    <Box
      sx={{
        borderRight: '1px solid rgb(224, 224, 244)',
        width: '16em',
        p: '8px 16px'
      }}
    >
      <h2>{title}</h2>
      <ButtonHome />
      <CheckboxDiary />
    </Box>
  )
}

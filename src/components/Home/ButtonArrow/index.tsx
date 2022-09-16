import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos' //>
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew' //<
import { Box, Icon, IconButton } from '@mui/material'
import { AvatarPerson } from 'components/Home/Avatar'

export function ArrowButton() {
  return (
    <Box sx={{ p: '16px 16px', display: 'flex', alignItems: 'center' }}>
      <Box flex={'1'}>
        <IconButton aria-label="Mês anterior">
          <Icon>
            <ArrowBackIosNewIcon />
          </Icon>
        </IconButton>
        <IconButton aria-label="Próximo Mês">
          <Icon>
            <ArrowForwardIosIcon />
          </Icon>
        </IconButton>
        <Box component={'strong'} sx={{ ml: 2, fontSize: 'x-large' }}>
          Junho de 2021
        </Box>
      </Box>
      <IconButton aria-label="User L">
        <AvatarPerson />
      </IconButton>
    </Box>
  )
}

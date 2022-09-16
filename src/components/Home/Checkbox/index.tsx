import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material'

export function CheckboxDiary() {
  return (
    <Box sx={{ mt: 7 }}>
      <h3>Agendas</h3>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Pessoal"
        />
        <FormControlLabel control={<Checkbox />} label="Trabalho" />
      </FormGroup>
    </Box>
  )
}

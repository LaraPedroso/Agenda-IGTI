// import { getEventsEndpoint } from './components/backend'
import { PageHome } from './page/Home'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from 'global/styles/theme'

function App() {
  // getEventsEndpoint().then((events) => {
  //   for (const event of events) {
  //     console.log(event)
  //   }
  // })

  return (
    <ThemeProvider theme={theme}>
      <PageHome />
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App

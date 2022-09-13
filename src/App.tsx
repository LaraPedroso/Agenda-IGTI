// import { getEventsEndpoint } from './components/backend'
import { PageHome } from './page/Home'

function App() {
  // getEventsEndpoint().then((events) => {
  //   for (const event of events) {
  //     console.log(event)
  //   }
  // })

  return (
    <div className="App">
      <PageHome />
    </div>
  )
}

export default App

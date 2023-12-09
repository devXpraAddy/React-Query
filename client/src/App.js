import { useQuery } from '@tanstack/react-query' // with this hook we can fetch our API calls
import './App.css'
import Form from './components/form'

function App() {
  const { data, status, isFetching } = useQuery({  // invalidateQueries will refetch the data and put that in data and the data gets updated and the component gets re-rendered and new todos come on the screen
    queryKey: ['todo'],   //key   (it is the name of the cache)
    queryFn: async () =>
      await (await fetch(`http://localhost:8000/todo`)).json(),   // fetching cache and storing it in todo
  })

  console.log('Data', data)
  if(isFetching){
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <Form/>
      <p>Status: {status}</p>
      {
        data && data.data && data.data.map((todo) => <li>{todo.title}</li>)
      }
    </div>
  )
}

export default App

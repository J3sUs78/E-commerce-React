import './App.css'
import Card from './components/Card'


function App() { //componente react

  return (
    <div className='App'>
      <h1> Hola React</h1>
      <div className='container'>
        <Card title="titulo" description="hola"/>
        <Card title="titulo" description='hola'/>
        <Card title="titulo" description='hola'/>
        <Card />
      </div>
      
    </div>
  )
}

export default App

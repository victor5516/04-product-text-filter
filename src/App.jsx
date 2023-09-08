import { useState } from 'react'
import Input from './components/Input.jsx'
import Card from './components/Card.jsx'
import data from "./assets/TemplateData.json" // array de productos
import './App.css'

function App() {


  const [filteredData, setFilteredData] = useState(data) // data es el estado inicial

  const textHandler = (e) => {
    e.preventDefault()
    const text = e.target.value // obtenemos el valor del input que sera el texto a buscar
    filterData(text)

  }

  const filterData = (text) => { //recibe como parametro el texto a buscar
    const newData = data.filter((product) => { // filtramos el array de productos y retornamos los que coincidan con el texto a buscar
      return product.title.toLowerCase().includes(text.toLowerCase()) // convertimos a miniúsculas para que todo sea igual
      // inlcudes() retorna true si el texto a buscar esta incluido en el titulo del producto
      // el texto se transforma a minúsculas para que todo este en el mismo formato
    })
    setFilteredData(newData) // actualizamos el estado con los productos filtrados
  }



  return (
    <div>
      <h1>Buscador de productos</h1>
      <Input onChange={textHandler} /> {/* pasamos la funcion textHandler como prop al componente Input */}
      {
        filteredData.map((product) => ( // recorremos el array de productos filtrados y retornamos un componente Card por cada producto
          <Card image={product.image} title={product.title} price={product.price}/>
        ))
      }
    </div>
    )
}

export default App

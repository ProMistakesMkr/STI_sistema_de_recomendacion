import { useEffect, useState } from "react";
import { useResponse } from "../hooks/useResponse";


export function Resaultados (){
    const url = 'http://127.0.0.1:5173/post_emotions';

   const {userData} = UseResponse()

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    };

    useEffect(()=>{
      fetch(url,options)
.then(response => {
    if(!response.ok) {
        throw new Error('Error en la solicitud');
    }
    return response.json();
})
.the(data =>{
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
})
    },[])



}
    

/*const url = 'http://127.0.0.1:5001/post_emotions';
const [todos, setTodos] = useState()
const fetchApi = async () => {
    const response = await fetch(url)
    console.log(response.statusText)
    const responseJSON = await response.json()
    setTodos(responseJSON)
}

useEffect(() => {
    fetchApi()
}, [])

const opciones = {
    metodo: 'POST',
    escucha: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(usarDatos)
};

fetch(url, opciones)
.then(response => {
    if(!response.ok) {
        throw new Error('Error en la solicitud');
    }
    return response.json();
})
.then(usarDatos => {
    console.log(usarDatos);
})
.catch(error => {
    console.error('Error;', error);
});*/

/*export function Result () {

    const {datosUsuario} = useData()
    const [cargando, setCargando] = useState(false)
    const [variasRespuestas, setVariasRespuestas] = useState([])

    const enviaElementos = async () => {*/

/*import { useState } from "react";

export function MyComponent() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5001/post_emotions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: [2, 3, 5, 4] }) // Enviar los datos que tu API Flask espera
      });
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Consumiendo API</h1>
      <button
        onClick={fetchData}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Obtener Datos
      </button>
      {data && (
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Datos Recibidos:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}*/
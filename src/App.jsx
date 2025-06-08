import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  useEffect(() => {
    const valorSalvo = localStorage.getItem("contador");
    if (valorSalvo !== null) {
      setContador(Number(valorSalvo));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("contador", contador);
  }, [contador]);
  

  return (
    
    <div className='min-h-screen flex items-center justify-center bg-gray-100 '>
      <div className='bg-white shadow-lg rounded-xl p-8 text-center'>

        <h1 className='text-2xl font-bold mb-4'>Contador: {contador}</h1>

        <div className='flex gap-4'>

            <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ' onClick={() => setContador(contador + 1)}>Aumentar</button>
            <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ' onClick={() => setContador(contador - 1)}>Diminuir</button>
            <button className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600' onClick={() => setContador(0)}>Resetar</button>
        </div>
      </div>
    </div>
   
  )
}

export default App

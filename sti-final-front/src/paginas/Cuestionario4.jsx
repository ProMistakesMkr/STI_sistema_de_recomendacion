import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResponse } from "../hooks/useResponse";
import { useEffect } from "react";

export function Cuestionario4() {
  
  const [sliderValue, setSliderValue] = useState(1);
  const navigate = useNavigate();
  const {userData, setUserData} = useResponse()

  const handleSliderChange = (e) => {
    
    setSliderValue(parseInt(e.target.value));
  };

  useEffect(()=>{
    console.log(userData)
  }, [userData])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newResponse = {...userData}
    newResponse.data[3] = sliderValue
    setUserData(newResponse)
    navigate('/Resultados');
};
  
  return (
    <form onSubmit={handleSubmit}
     className="max-w-md mx-auto p-8 bg-white rounded shadow-lg">
      <h1 className="font-bold text-4xl mb-4">Para terminar...</h1>
      <p className="mb-4">¿Qué tan extrovertido o introvertido te sientes hoy?</p>
      <input
        type="range"
        min="1"
        max="5"
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-full bg-gray-200 appearance-none rounded h-4"
      />
      <div className="flex justify-between mt-4">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
      <p className="text-center mt-6">
        Entre mayor sea el número, más extrovertido te sientes hoy: {sliderValue}
      </p>
      <button
        type="submit"
        className="w-full bg-purple-800 hover:bg-purple-900 text-white font-semibold py-2 rounded mt-10"
      >
        Continuar
      </button>
    </form>
  );
}
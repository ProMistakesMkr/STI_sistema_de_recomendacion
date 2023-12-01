export function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">¡Bienvenida!</h1>
        <div className="flex items-center space-x-4">
          <img
            className="w-16 h-16 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <div>
            <h2 className="text-xl font-semibold">Hola, Sofía</h2>
            <p className="text-gray-600">Te recomendamos estas actividades</p>
          </div>
        </div>
        <p className="mt-4">Aquí puedes agregar más contenido sobre el perfil del usuario.</p>
      </div>
    </div>
  );
}
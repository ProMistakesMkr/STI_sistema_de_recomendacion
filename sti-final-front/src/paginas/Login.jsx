import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
   
    navigate('/cuestionario1');
  };

  return (
    <section className="p-16 max-w-md mx-auto">
      <img className="w-64" src="/fondo.jpg" alt="" />
      <h1 className="font-bold text-4xl mb-6 text-center">Bienvenido</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-semibold" htmlFor="usuario">
            Usuario
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
            id="usuario"
            placeholder="A00369441"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-semibold" htmlFor="contraseña">
            Contraseña
          </label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
            id="contraseña"
            placeholder="********"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-purple-800 hover:bg-purple-900 text-white font-semibold py-2 rounded"
        >
          Ingresar
        </button>
        <button className="w-full text-blue-700 hover:text-blue-900">
          Olvidé mi contraseña
        </button>
      </form>
    </section>
  );
}
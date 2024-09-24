import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/reducers";
import axios from "axios";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Contoh request ke server API (misalnya, menggunakan fetch atau axios)
        try {
            const response = await axios.post(import.meta.env.VITE_API_AUTH, {
              username,
              password,
            });
          
            // Jika login berhasil
            if (response.status === 200) {
              // Simpan token dan informasi lain di localStorage (atau sessionStorage)
              localStorage.setItem("role", response.data.roles)
              localStorage.setItem("user", response.data.username)
              localStorage.setItem("idUser", response.data.userId)

          
              // Dispatch ke Redux store (hanya data yang dibutuhkan)
              dispatch(
                login({
                  username: response.data.username,
                  role: response.data.roles,
                })
              );
          
              // Redirect ke halaman yang sesuai berdasarkan peran
              if (response.data.roles === "Manager") {
                navigate("/manager");
              } else if (response.data.roles === "staff") {
                navigate("/staff");
              }
              window.location.reload();
            }
          } catch (e) {
            if (e.response && (e.response.status === 400 || e.response.status === 404)) {
              // Jika username atau password salah, tampilkan alert
              window.alert("Username atau password salah.");
            } else {
              // Tangani error lain
              console.log("Terjadi kesalahan", e);
            }
          }
          
    }

    return (
        <>
        <form className="flex items-center justify-center min-h-screen">
            <div className="flex justify-center">
                <div className="space-y-4 w-screen p-10 ">
                    <div className="border-b border-gray-900/10 pb-6">
                        <div className="flex justify-center">
                            <img className="w-40 m-4" src="https://static.vecteezy.com/system/resources/previews/007/695/678/original/clipboard-with-checklist-icon-in-yellow-circle-free-vector.jpg" alt="logo" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">Masuk dengan akun anda.</h2>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        onChange={(e)=> setUsername(e.target.value)}
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="janesmith"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                    </div>
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        onChange={(e)=> setPassword(e.target.value)}
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="*********"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <button onClick={handleLogin} type="button" className="w-full bg-gray-800 text-white p-2 rounded-md hover:bg-gray-600 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Masuk</button>
                    </div>
                    <div className="mt-4 text-sm text-gray-600 text-center">
                    <p>Hubungi admin jika ada penambahan akun.</p>
                </div>
                </div>
            </div>
        </form>
        </>
  )
}
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import InfoUser from "../../components/info-user";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export default function TodoList(){

    const navigate = useNavigate();

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);


    return(
        <>
        <InfoUser/>
        <div className="my-6">
            <h1>{currentTime.toLocaleDateString()}<span> {currentTime.toLocaleTimeString()}</span></h1>
            <h1 className="text-4xl font-semibold">Mau suruh staff ngapain hari ini?</h1>
        </div>

        {/* input to do list */}
        <form>
        <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Nama Kegiatan
                </label>
                <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        id="kegiatan"
                        name="kegiatan"
                        type="text"
                        placeholder="Pasang Jendela"
                        autoComplete="kegiatan"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                </div>

                <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    Deskripsi
                </label>
                <div className="mt-2">
                    <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Tambahkan detail kegiatan biar apa kali.</p>
                </div>

                <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                    Tambahkan gambar sebagai detail.
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                    <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Tingkat Prioritas</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Pilih tingkat prioritas task yang dibuat.</p>

                <div className="mt-2">
                    <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                    <option>Yang penting siap</option>
                    <option>Kalau bisa cepat siapkan</option>
                    <option>Ini dulu kerjain</option>
                    </select>
                </div>
            </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button onClick={()=>navigate(-1)} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
                </button>
                <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Save
                </button>
            </div>
        </form>

        </>
    )
}
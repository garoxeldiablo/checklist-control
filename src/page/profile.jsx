import { PhotoIcon } from "@heroicons/react/24/solid"
import { useNavigate } from "react-router-dom"
import { useR, rolE,acT } from "../store/getItem";

export default function Myprofile(){

    const navigate = useNavigate();

    return(
        <>
            <div className="py-10 flex items-center justify-center">
                <div className="">
                    <div className="p-3 m-3 rounded-full border">
                        <img className="h-20 w-20" src="/icon/profile2.png" alt="" />
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold">{useR}</h1>
                        <p className="text-sm">{rolE}</p>
                        <p className="text-gray-500 italic text-xs">Id : {acT}</p>
                    </div>
                </div>
            </div>
            <div className="col-span-4 space-y-4">
                <h1 className="text-2xl font-semibold">Ubah Profil</h1>

                <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username lama
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

                <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username baru
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
                <div>
                <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                    Ubah foto profil.
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
                <div>
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
                </div>
            </div>
        </>
    )
}
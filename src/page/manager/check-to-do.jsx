import { useNavigate } from "react-router-dom";
import CardCheck from "../../components/cardcheck";
import InfoUser from "../../components/info-user";

export default function Checklist(){
    const navigate = useNavigate();
    return(
        <>
            <div className="">
                <InfoUser/>

                {/* search */}
                <div className="my-4">
                    
                    <form class="max-w-md mx-auto">   
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Bersihkan sawang" required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Cari</button>
                        </div>
                    </form>
        
                </div>

                <CardCheck/>

                <div className="text-center">
                    <div>
                        <button onClick={()=>navigate(-1)} className="bg-gray-900 text-white py-2 px-4 m-4 rounded shadow-md font-semibold">
                        Kembali
                        </button>
                        <button className="bg-indigo-700 text-white py-2 px-4 m-4 rounded shadow-md font-semibold">
                        Validasi
                    </button>
                    </div>
                </div>
            </div>
        </>
    )
}
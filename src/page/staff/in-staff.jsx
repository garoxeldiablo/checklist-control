import InfoUser from "../../components/info-user"
import Attention from "../../components/attention"
import { useNavigate } from "react-router-dom"

export default function Instaff(){

    const navigate = useNavigate();

    return (
        <>
            {/* header */}
            <InfoUser/>

            <Attention/>

            {/* choose */}
            <div className="flex items-center justify-center my-10">
                    <div className="flex space-x-3">
                        <div className="rounded-md shadow text-center w-36 p-3">
                            <button onClick={()=>navigate('/staffcheck')}>
                                <div className="flex justify-center">
                                    <img className="w-28 m-2" src="https://cdn-icons-png.flaticon.com/256/3804/3804348.png" alt="add do" />
                                </div>
                                <p>Cek to-do-list dari manager</p>
                            </button>
                        </div>
                    </div>
            </div>

            <div className="text-center">
                <h1>Powered by <span className="font-semibold">jocjovi.s</span></h1>
            </div>
        </>
    )
}
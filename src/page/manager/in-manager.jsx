import InfoUser from "../../components/info-user"
import Attention from "../../components/attention"
import { useNavigate } from "react-router-dom"

export default function Manager(){

    const navigate = useNavigate();

    return (
        <>
            {/* header */}
            <InfoUser/>

            <Attention/>

            {/* choose */}
            <div className="flex items-center justify-center my-10">
                    <div className="flex space-x-3">
                        <div className="rounded-md shadow text-center w-24 p-3">
                            <button onClick={()=>navigate('/create')}>
                                <div className="flex justify-center">
                                    <img className="w-16 m-2" src="https://cdn-icons-png.flaticon.com/256/3804/3804348.png" alt="add do" />
                                </div>
                                <p className="text-sm font-semibold">Buat To-do-list</p>
                            </button>
                        </div>
                        <div className="rounded-md shadow text-center w-24 p-3">
                            <button onClick={()=>navigate('/checklist')}>
                                <div className="flex justify-center">
                                    <img className="w-16 m-2" src="https://cdn-icons-png.flaticon.com/512/2822/2822678.png" alt="check" />
                                </div>
                                <p className="text-sm font-semibold">Cek do-list staff</p>
                            </button>
                        </div>
                        <div className="rounded-md shadow text-center w-24 p-3">
                            <button onClick={()=>navigate('/report')}>
                                <div className="flex justify-center">
                                    <img className="w-16 m-2" src="https://w7.pngwing.com/pngs/829/476/png-transparent-computer-icons-business-report-text-logo-sign-thumbnail.png" alt="check" />
                                </div>
                                <p className="text-sm font-semibold">Riwayat do-list</p>
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
import { useNavigate } from "react-router-dom"

export default function InfoUser(){

    const navigate = useNavigate()

    return(
        <>
            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Hai, Username</h1>
                    <p className="italic">Manager</p>
                </div>
                <div>
                    <button onClick={()=>navigate('/profile')}>
                        <img src="/icon/profile2.png" alt="prf" />
                    </button>
                </div>
            </div>
        </>
    )
}
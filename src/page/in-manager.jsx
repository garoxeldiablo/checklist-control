import InfoUser from "../components/info-user"

export default function Manager(){
    return (
        <>
            {/* header */}
            <InfoUser/>

            {/* choose */}
            <div className="h-screen flex items-center justify-center">
                    <div className="space-y-28">
                        <div className="rounded-md shadow text-center">
                            <img className="w-32" src="https://e7.pngegg.com/pngimages/455/646/png-clipart-free-content-check-list-s-text-rectangle-thumbnail.png" alt="check" />
                            <p>Buat To-do-list untuk staff</p>
                        </div>
                        <div>
                            <img className="w-32" src="https://e7.pngegg.com/pngimages/455/646/png-clipart-free-content-check-list-s-text-rectangle-thumbnail.png" alt="check" />
                            <p>Check To-do-list staff</p>
                        </div>
                    </div>
            </div>
        </>
    )
}
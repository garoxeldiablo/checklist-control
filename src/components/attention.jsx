import { useState, useEffect } from "react";
import ChartProgress from "./chart/chart";

export default function Attention(){
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return(
        <>
            {/* cards */}
            <div className="my-10">
                <div className="p-4 items-center shadow-md text-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md grid grid-cols-2">
                    <div className="space-y-4">
                        <div>
                            <h1>{currentTime.toLocaleDateString()}</h1>
                            <h1>{currentTime.toLocaleTimeString()}</h1>
                        </div>
                        <h1 className="text-xs italic">Buat to-do-list sekarang atau cek apa yang sudah diselesaikan para staff. "</h1>
                    </div>
                    <div>
                        <ChartProgress/>
                    </div>
                </div>
            </div>
        </>
    )
}
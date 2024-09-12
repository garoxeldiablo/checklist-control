import { Checkbox } from "@mui/material"
import { green } from "@mui/material/colors"


const items = [
    {
        id: 1,
        kegiatan: "Pasang jendela",
        deskripsi: "pasang jedela atas lantai 2 dengan hati hati",
        gambar: "",
        prioritas: "",
        check: false // Tambahkan properti checked
    },
    {
        id: 2,
        kegiatan: "Pasang pintu",
        deskripsi: "pasang pintu depan lantai 1",
        gambar: "",
        prioritas: "",
        check: false // Tambahkan properti checked
    }
]

// menghitung nilai check
export const checkCount = items.reduce((count, item) => {
    if (item.check) {
        count.true += 1;
    } else {
        count.false += 1;
    }
    return count;
}, { true: 0, false: 0 });

export default function CardCheckList() {
    return (
        <>
            <div className="space-y-5">
                {items
                    .filter((item) => !item.check) // filter item yang tidak dicentang
                    .map((item) => (
                        <div key={item.id} className="rounded-md shadow-md p-5">
                            <div className="flex">
                                <div className="flex items-center">
                                    <Checkbox
                                        sx={{
                                            color: green[800],
                                            '&.Mui-checked': {
                                            color: green[600],
                                            },
                                        }}
                                    />
                                </div>
                                <div className="ml-4">
                                    <h1 className="text-2xl font-semibold">{item.kegiatan}</h1>
                                    <p>{item.deskripsi}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

        </>
    )
}

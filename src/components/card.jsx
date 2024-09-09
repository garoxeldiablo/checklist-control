const items = [
    {
        id: 1,
        kegiatan: "Pasang jendela",
        deskripsi: "pasang jedela atas lantai 2 dengan hati hati",
        gambar: "",
        prioritas: "",
        checked: true // Tambahkan properti checked
    },
    {
        id: 2,
        kegiatan: "Pasang pintu",
        deskripsi: "pasang pintu depan lantai 1",
        gambar: "",
        prioritas: "",
        checked: false // Tambahkan properti checked
    }
]

export default function CardCheck() {
    return (
        <>
            <div className="space-y-5">
                {items.map((item) => (
                    <div key={item.id} className="rounded-md shadow-md p-5">
                        <div className="flex">
                            <div className="flex items-center">
                                {/* Tampilkan gambar berdasarkan status checked */}
                                <img
                                    src={item.checked ? "https://cdn-icons-png.flaticon.com/512/5709/5709755.png" : "https://icons.veryicon.com/png/o/miscellaneous/questionnaire-icon/unchecked-10.png"}
                                    alt={item.checked ? "Checked" : "Unchecked"}
                                    className="w-8 h-8"
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

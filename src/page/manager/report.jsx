import InfoUser from "../../components/info-user";

export default function Report(){

    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchItemsData = async () => {
        try {
          const response = await axios.get(import.meta.env.VITE_API_GETSUBMISSION);
          // Check if tasks is an array before setting it to items
          setItems(response.data.tasks);
        } catch (e) {
          console.error("Server error", e);
        }
      };
      fetchItemsData();
    }, []);

    return(
        <>
            <InfoUser/>

            <div className="space-y-2 mt-4">
                <h1 className="text-2xl font-semibold">Riwayat do-list</h1>

                <div className="space-y-5">
                {items.map((item) => (
                    <div key={item.id} className="rounded-md shadow-md p-5">
                    <div className="flex">
                        <div className="flex items-center">
                        {/* Display checkbox based on status 'checked' */}
                        <Checkbox
                            disabled
                            checked={item.is_mandatory}
                            sx={{
                            color: green[800],
                            "&.Mui-checked": {
                                color: green[600],
                            },
                            }}
                        />
                        </div>
                        <div className="ml-4">
                        <h1 className="text-2xl font-semibold">{item.name}</h1>
                        <p>{item.description}</p>
                        <div className="mt-2 italic text-gray-500">
                            {(item.create_at == item.update_at ? <p>dibuat {new Date(item.create_at).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            })}{' '}
                            {new Date(item.create_at).toLocaleTimeString('en-GB', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                            })}</p> : <p>diperbarui {new Date(item.update_at).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            })}{' '}
                            {new Date(item.update_at).toLocaleTimeString('en-GB', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                            })}</p>)}
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    )
}
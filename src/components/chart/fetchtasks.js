import axios from "axios";

export let items = ''; // Declare items outside the function to export it

export const fetchItems = async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_GETCHECKLIST);
    items = response.data; // Set the fetched data to items
    console.log(items)
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

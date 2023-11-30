const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const fetchData = async (pageNum: number) => {
  const response = await fetch(`${apiUrl}?page=${pageNum}`);
  const { items } = await response.json();
  return items;
};

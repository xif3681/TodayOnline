// get rows

export const fetchModDatas = async (url: string) => {


  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
  if (!response.ok) {
    const error = await response.text()
    return  {data:[],  error }
  }
  const { data = []} = await response.json()
  return {data }
}


export async function generateStaticParams() {


  const data = ['login', 'logout', 'callback', 'me']

  return data.map((id: string) => ({
    auth0: id
   }))


} 

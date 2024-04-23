import { handleAuth, handleLogin, LoginOptions } from "@auth0/nextjs-auth0";

// import { redirect } from 'next/navigation';

// import { useHistory } from "react-router-dom";

// const history = useHistory();

// const onRedirectCallback = (appState?: AppState) => {
//   history.push(appState?.returnTo || window.location.pathname);
// };



export const GET = handleAuth({
  login: handleLogin({
    returnTo: typeof window !== 'undefined' ? window.location.pathname :  "/" // "/profile",
  }),
  signup: handleLogin({
    authorizationParams: {
      screen_hint: "signup",
    },
    returnTo: "/profile",
  }),
});

// export async function generateStaticParams() {


//   const data = ['login', 'logout', 'callback', 'me']

//   return data.map((id: string) => ({
//     auth0: id
//    }))


// } 

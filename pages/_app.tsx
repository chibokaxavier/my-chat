import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider, useSelector } from "react-redux";
import { ServiceContext, ServiceProvider } from "../context/service.provider";
import { Logger } from "../services/logger.service";
import { LogUser } from "../services/logUser.service";
import { selectCount } from "./../store/slices/counter";
import { AuthService } from "./../services/auth.service";
import Layout from "./components/layout";
 import Login from "./login"
//  import { useAuthState } from 'react-firebase-hooks/auth';
//  import { auth } from "../firebase";
import { SessionProvider } from "next-auth/react"


// console.log(store)
function Wrapper({ children }: any) {
  const count = useSelector(selectCount);
  let logger = new Logger();
  let logUser = new LogUser(count);
  let authService = new AuthService()
  let services = new ServiceProvider(logger, logUser, authService);

  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
}




function MyApp({ Component, pageProps:{ session, ...pageProps }, }: AppProps) {

  return (
    <SessionProvider session={session}>
    <Provider store={store}>
      <Wrapper>
        {/* <Layout> */}
          <Component {...pageProps} />
        {/* </Layout> */}
      </Wrapper>
    </Provider>
    </SessionProvider>
  );
}

export default MyApp;

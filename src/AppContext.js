import { createContext, useState } from "react";


export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const {children} = props;
    const [isLogin, setisLogin] = useState(false);
    const [infoUser, setInfoUser] = useState({});
    const [isLoadingData, setisLoadingData] = useState(false);

    return(
        <AppContext.Provider value={{isLogin, setisLogin,infoUser, setInfoUser, isLoadingData, setisLoadingData}}>
            {children}
        </AppContext.Provider>
    )
}

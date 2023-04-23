import React, {
    createContext,
    useContext,
    useState,
} from "react";


export const PRODUCT_CONTEXT = createContext();

const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    // console.log(isDarkMode);


    const value = {
        cart, setCart
    };

    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useCart = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
};

export default ContextProvider;
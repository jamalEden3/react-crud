import React,{ createContext, useContext, useState, useEffect } from "react";


const StateContext = createContext();

const intialState = {
    chat: false,
    cart: false,
    userprofile:false,
    notification: false 
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [btnIsClicked, setbtnIsClicked] = useState(intialState);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    

    const handleClicked = (clikced) => {
        setbtnIsClicked({...intialState, [clikced]: true});
    }

    const resetNavButton = (clicked) => {
        setbtnIsClicked({ ...intialState, [clicked]: false })
    }

    /* useEffect(() => {
        const handleClosedBox = () => setbtnIsClicked(intialState);
        window.addEventListener('click', handleClosedBox);
        handleClosedBox();

      return () => {
        window.removeEventListener('click', handleClosedBox);
      }
    }, [])
     */



    return (
        <StateContext.Provider value={{ 
            activeMenu, 
            setActiveMenu,
            handleClicked,
            btnIsClicked,
            screenSize,
            setScreenSize,
            resetNavButton,
            btnIsClicked }}>
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
import { useContext, useEffect } from "react";
import { UiContext } from '../context/UiContext';


export const useUi = (hide) => {

    const { showMenu, hideMenu } = useContext( UiContext );


    useEffect( () => {
        if (hide) {
            hideMenu();
            return
        }
        showMenu();

    }, [ hide, hideMenu, showMenu ]);

};
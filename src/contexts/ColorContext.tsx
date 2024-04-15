import React, { ReactNode, createContext, useContext, useReducer } from "react";

import { getContrastTextColor } from '@/hooks/useColors'

import { Colors } from '@/hooks/useColors'
import { ColorType, ColorGroupType } from '@/types'
import backgroundImage from '@/assets/img/bg.texture.png';
import topImage from '@/assets/img/bg.top.png';


interface ColorProviderProps {
    children: ReactNode
}

interface ContextProps {
    currColor: ColorType,
    currColorGroup: ColorGroupType,
    updateCurrColor: (id: string) => void,
    updateColorGroup: (idx: string) => void,
    textColor: string,
}

const ColorContext = createContext<ContextProps>({} as ContextProps)

const initialValue = {
    currColorGroup: Colors[7],
    currColor: Colors[7].colors[0],
    textColor: "white"
}
document.body.style.transition = 'background-color 1.77s ease-in';
// document.body.style.backgroundImage = 'url("../../assets/img/bg.texture.png"), url("../../assets/img/bg.top.png")';
document.body.style.backgroundImage = `url(${backgroundImage}), url(${topImage})`;
document.body.style.backgroundRepeat = 'repeat, repeat-x';
document.body.style.backgroundSize = 'auto, auto 2rem';
document.body.style.backgroundColor = initialValue.currColor.hex;

const reducer = (state: any, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case "update_curr_color":
            let c = state.currColorGroup.colors.find((c: any) => c.id === payload.id)
            document.body.style.backgroundColor = c.hex;
            // document.body.style.backgroundColor = obj.hex;
            return { ...state, currColor: c, textColor: getContrastTextColor(c.RGB) };

        case "update_color_group":
            // return { ...state, currColor: Colors[payload.idx].colors[0] , currColorGroup: Colors[payload.idx]};
            return { ...state, currColorGroup: Colors[payload.idx] };

        default:
            return state;
    }
}

const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialValue)

    const updateCurrColor = (id: string) => {
        dispatch({ type: 'update_curr_color', payload: { id } })
    }

    const updateColorGroup = (idx: string) => {
        dispatch({ type: 'update_color_group', payload: { idx } })
    }

    return <ColorContext.Provider value={{
        ...state,
        updateCurrColor,
        updateColorGroup,
    }}>
        {children}
    </ColorContext.Provider>
}

const useColor = () => {
    const context = useContext(ColorContext)
    if (context === undefined) {
        throw new Error("ColorContext used outside ColorProvider")
    }
    return context
}

export { ColorProvider, useColor }

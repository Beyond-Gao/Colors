import React, { ReactNode, createContext, useContext, useReducer } from "react";

import { getContrastTextColor } from '@/hooks/useColors'

import { Colors } from '@/hooks/useColors'
import { ColorType, ColorGroupType } from '@/types'


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

const reducer = (state: any, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case "update_curr_color":
            let c = state.currColorGroup.colors.find((c: any) => c.id === payload.id)
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

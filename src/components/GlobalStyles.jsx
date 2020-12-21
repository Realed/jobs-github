import { createGlobalStyle } from "styled-components"
import fonts from "../styles/fonts"
import colors from "../styles/colors"

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        div#root{
            margin: 0;
            padding: 0;
            background-color: ${colors.lightTheme.backColor};
        }
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        &:focus,
        &:hover{
            outline: none;
        }
    }

    h1,h2,h3,h4{
        font-family: ${fonts.titleFont};
        color: ${colors.lightTheme.boldColor};
    }

    p,span,a, label {
        font-family: ${fonts.mainFont};
    }
`

export default GlobalStyles

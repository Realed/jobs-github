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
            background-color: ${({ darkTheme }) =>
              darkTheme
                ? colors.darkTheme.backColor
                : colors.lightTheme.backColor}
            /* background-color: ${colors.lightTheme.backColor}; */
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
        color: ${({ darkTheme }) =>
          darkTheme ? colors.darkTheme.boldColor : colors.lightTheme.boldColor};
    }

    p,span,a, label {
        color: ${({ darkTheme }) =>
          darkTheme ? colors.darkTheme.boldColor : colors.lightTheme.boldColor};
        font-family: ${fonts.mainFont};
    }
`

export default GlobalStyles

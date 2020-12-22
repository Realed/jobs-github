import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import fonts from "../styles/fonts"

const ApplyWrapper = styled.div`
  width: 100%;

  header {
    padding: 10px 0;
    h1 {
      color: ${colors.lightTheme.grayColor};
      font-weight: bold;
      font-family: ${fonts.titleAccentFont};
      text-transform: uppercase;
      font-size: 0.8em;
    }
  }

  main {
    p {
      color: ${colors.lightTheme.mainColor};
      font-family: ${fonts.mainFont};
      font-size: 1em;
    }
  }
`

// const HowToApply = () =>{
//     return(
//         <>
//             <ApplyWrapper>
//                 <header>
//                     <h1>HOW TO APPLY</h1>
//                 </header>
//                 <main>
//                     <p>BLABLABLA...</p>
//                 </main>
//             </ApplyWrapper>
//         </>
//     )
// }

export default ApplyWrapper

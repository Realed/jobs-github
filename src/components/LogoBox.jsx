import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"

//Styles
import fonts from "../styles/fonts"

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 10px;

  .title-box {
    width: 85%;
    display: flex;
    align-items: center;

    h1 {
      font-weight: 800;
      font-family: ${fonts.titleAccentFont};
      font-size: 1.7em;

      span {
        font-weight: 300;
      }
    }
  }

  .theme-box {
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border: 0;
      background-color: ${colors.lightTheme.backColor};

      &:focus {
        outline: none;
      }

      svg {
        min-width: 24px;
      }
    }
  }
`

const LogoBox = () => {
  return (
    <LogoWrapper>
      <div className="title-box">
        <h1>
          Github <span>Jobs</span>
        </h1>
      </div>
      <div className="theme-box">
        <button
          className="AppTemplate_appTemplate_header_themeSwitcher__2-A63"
          aria-label="theme-switcher"
        >
          <div>
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12.29 7c-.74 0-1.45.17-2.08.46 1.72.79 2.92 2.53 2.92 4.54s-1.2 3.75-2.92 4.54c.63.29 1.34.46 2.08.46 2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
            </svg>
          </div>
        </button>
      </div>
    </LogoWrapper>
  )
}

export default LogoBox

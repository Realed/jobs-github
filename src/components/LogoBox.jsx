import React from "react"
import styled, { css } from "styled-components"
import colors from "../styles/colors"

//Styles
import fonts from "../styles/fonts"

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 10px;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};

  ${({ bgWhite }) =>
    bgWhite &&
    css`
      @media only screen and (max-width: 849px) {
        background-color: ${colors.lightTheme.backColorAccent};
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
        border-radius: 5px 0 5px 0;
      }
    `}

  max-width: ${({ maxWidth }) => maxWidth};
  margin-left: auto;
  margin-right: auto;

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
    justify-content: flex-end;

    button {
      border: 0;
      background-color: ${colors.lightTheme.backColor};
      cursor: pointer;
      padding: 4px;
      border-radius: 50%;

      &.setdark:hover {
        background-color: #454f59;
      }

      &.setlight:hover {
        background-color: #f5f5f5;
      }

      &:focus {
        outline: none;
      }

      svg {
        min-width: 24px;
      }
    }
  }
`

const LogoBox = ({
  darkTheme,
  handleDarkTheme,
  padding,
  margin,
  maxWidth,
  bgWhite,
}) => {
  return (
    <LogoWrapper
      padding={padding}
      margin={margin}
      maxWidth={maxWidth}
      bgWhite={bgWhite}
    >
      <div className="title-box">
        <h1>
          Github <span>Jobs</span>
        </h1>
      </div>
      <div className="theme-box">
        {!darkTheme && (
          <button
            className="AppTemplate_appTemplate_header_themeSwitcher__2-A63 setdark"
            aria-label="theme-switcher"
            onClick={handleDarkTheme}
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
        )}
        {darkTheme && (
          <button
            className="AppTemplate_appTemplate_header_themeSwitcher__2-A63 setlight"
            aria-label="theme-switcher"
            onClick={handleDarkTheme}
          >
            <div>
              <svg
                className="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
          </button>
        )}
      </div>
    </LogoWrapper>
  )
}

export default LogoBox

import React from "react"
import styled, { css } from "styled-components"

//Components
import LogoBox from "./LogoBox"
// import Filter from "./Filter"

//Styles
import colors from "../styles/colors"
import fonts from "../styles/fonts"
const MenuBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-height: 90px;
  width: 100%;

  max-width: 1440px;
  @media only screen and (min-width: 1440px) {
    padding: 10px 9%;
  }

  @media only screen and (min-width: 950px) {
    padding: 10px 5%;
  }

  @media only screen and (max-width: 949px) {
    padding: 10px 2.5% 15px;
  }
`
const SearchWrapper = styled.div`
  width: 100%;

  .search-box {
    border-radius: 8px;
    width: 100%;
    min-height: 138px;
    background-image: url("https://i.imgur.com/qTMQ4vm.png");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    .field-box {
      max-width: 790px;
      width: 90%;
      height: 60px;
      background-color: ${({ darkTheme }) =>
        darkTheme
          ? colors.darkTheme.backColorAccent
          : colors.lightTheme.backColorAccent};
      ${({ darkTheme }) =>
        darkTheme &&
        css`
          border: 1px solid #555;
        `}
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      padding: 5px 7px;
      border-radius: 4px;
      display: flex;
      align-items: center;

      input[type="text"] {
        background-color: ${({ darkTheme }) =>
          darkTheme
            ? colors.darkTheme.backColorAccent
            : colors.lightTheme.backColorAccent};
        color: ${({ darkTheme }) =>
          darkTheme
            ? colors.darkTheme.mainColor
            : colors.lightTheme.accentColor};

        width: 70%;
        height: 100%;
        border: none;
        font-family: ${fonts.mainFont};
        padding: 5px;
        font-size: 0.8em;

        &:focus {
          outline: none;
        }
      }

      input[type="submit"] {
        border: none;
        background-color: #1e86ff;
        width: 30%;
        height: 100%;
        font-family: ${fonts.titleAccentFont};
        font-weight: 500;
        font-size: 1.1em;
        border-radius: 5px;
        color: white;
        cursor: pointer;

        &:hover {
          background-color: #4c96eb;
        }
      }
    }
  }
`

const HeaderMenu = ({ darkTheme, handleDarkTheme }) => {
  return (
    <>
      <MenuBox>
        <LogoBox darkTheme={darkTheme} handleDarkTheme={handleDarkTheme} />
        <SearchWrapper darkTheme={darkTheme}>
          <div className="search-box">
            <div className="field-box">
              <input
                type="text"
                placeholder="Title, companies, expertise or benefits"
              />
              <input type="submit" value="Search" />
            </div>
          </div>
        </SearchWrapper>
      </MenuBox>
    </>
  )
}

export default HeaderMenu

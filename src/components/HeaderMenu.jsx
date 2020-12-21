import React from "react"
import styled from "styled-components"

//Components
import LogoBox from "./LogoBox"
import Filter from "./Filter"

//Styles
import colors from "../styles/colors"
import fonts from "../styles/fonts"
const MenuBox = styled.div`
  min-height: 90px;
  width: 100%;
`
const SearchWrapper = styled.div`
  width: 100%;
  padding: 10px;

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
      width: 90%;
      height: 60px;
      background-color: ${colors.lightTheme.backColorAccent};
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      padding: 5px 7px;
      border-radius: 4px;
      display: flex;
      align-items: center;

      input[type="text"] {
        width: 70%;
        height: 100%;
        border: none;
        font-family: ${fonts.mainFont};
        padding: 5px;
        color: ${colors.lightTheme.mainColor};
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
      }
    }
  }
`

const HeaderMenu = () => {
  return (
    <>
      <MenuBox>
        <LogoBox />
        <SearchWrapper>
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
        <Filter />
      </MenuBox>
    </>
  )
}

export default HeaderMenu

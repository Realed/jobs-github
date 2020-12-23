import React from "react"
import styled, { css } from "styled-components"

//Styles
import colors from "../styles/colors"
import fonts from "../styles/fonts"

const FilterWrapper = styled.div`
  padding: 0;
  margin-right: 15px;
  max-width: 775px;
  min-width: 275px;

  @media only screen and (min-width: 1340px) {
    width: 35%;
    padding: 0;
  }

  @media only screen and (min-width: 950px) {
    display: inline-block;
    width: 40%;
    padding: 10px 0;
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
  }

  .time-box,
  .location-box {
    min-height: 30px;
    width: 100%;
  }

  .time-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    .time-check,
    .country-check {
      display: flex;
      align-items: center;
    }

    label {
      font-size: 0.9em;
    }

    input {
      width: 16px;
      height: 16px;
      margin-right: 8px;
      cursor: pointer;
    }
  }

  .location-box {
    label {
      display: block;
      font-family: ${fonts.titleAccentFont};
      font-weight: 800;
      color: ${colors.lightTheme.grayColor};
      margin-bottom: 10px;
      font-size: 0.9em;
    }

    input {
      background-color: ${({ darkTheme }) =>
        darkTheme
          ? colors.darkTheme.backColorAccent
          : colors.lightTheme.backColorAccent};
      color: ${({ darkTheme }) =>
        darkTheme ? colors.darkTheme.mainColor : colors.lightTheme.accentColor};

      ${({ darkTheme }) =>
        darkTheme &&
        css`
          border: 1px solid #555;
        `}

      width: 100%;
      height: 45px;
      padding: 0 15px;
      border: none;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
    }
  }
`

const Filter = ({ darkTheme }) => {
  return (
    <>
      <FilterWrapper darkTheme={darkTheme}>
        <div className="time-box">
          <div className="time-check">
            <input type="checkbox" name="time" />
            <label htmlFor="time">Full time</label>
          </div>
          <div className="country-check">
            <input type="checkbox" name="ownCountry" />
            <label htmlFor="ownCountry">In my country</label>
          </div>
        </div>
        <div className="location-box">
          {/* <label htmlFor="location">LOCATION</label> */}
          <input type="text" placeholder="City, state, zip code or country" />
        </div>
      </FilterWrapper>
    </>
  )
}

export default Filter

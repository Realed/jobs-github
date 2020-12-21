import React from "react"
import styled from "styled-components"

//Styles
import colors from "../styles/colors"
import fonts from "../styles/fonts"

const FilterWrapper = styled.div`
  padding: 10px 20px;

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
      background-color: ${colors.lightTheme.backColorAccent};
      width: 100%;
      height: 45px;
      padding: 0 15px;
      border: none;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
      color: ${colors.lightTheme.mainColor};
    }
  }
`

const Filter = () => {
  return (
    <>
      <FilterWrapper>
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

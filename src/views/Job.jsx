import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

//Components
import LogoBox from "../components/LogoBox"
import GlobalStyles from "../components/GlobalStyles"
import BackToSearch from "../components/BackToSearch"
import HowToApply from "../components/HowToApply"
import fonts from "../styles/fonts"
import colors from "../styles/colors"

const JobWrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 850px) {
    flex-direction: row;
    justify-content: space-between;

    .back-box {
      height: fit-content;
      background-color: ${colors.lightTheme.backColorAccent};
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
      min-width: 257px;
    }

    .job-box {
      margin-left: 15px;
      background-color: ${colors.lightTheme.backColorAccent};
      border-radius: 8px;
      padding: 0 35px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
      max-width: 75%;

      header.job-box-header {
        padding-left: 0;
        margin-left: 0;
      }
    }
  }

  .job-box {
    header.job-box-header {
      margin-top: 15px;
      h1 {
        color: ${colors.lightTheme.grayColor};
        font-weight: bold;
        font-family: ${fonts.titleAccentFont};
        text-transform: uppercase;
        font-size: 0.8em;
      }
    }

    header.title-box {
      padding-bottom: 10px;
      h1.title {
        font-family: ${fonts.titleAccentFont};
        color: ${colors.lightTheme.accentColor};
        font-size: 1.3em;
        font-weight: 800;
        margin: 8px 0;
      }

      .tags-box {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-right: 20px;
      }

      h1.tag {
        font-size: 0.8em;
        font-family: ${fonts.titleFont};
        color: ${colors.lightTheme.mainColor};
        display: inline-block;
        padding: 3px 10px;
        border: 1px solid ${colors.lightTheme.accentColor};
        border-radius: 5px;
        font-weight: bold;
        margin-right: 10px;
      }

      p.time {
        display: inline-block;
        font-size: 0.8em;
        color: ${colors.lightTheme.grayColor};
      }
    }

    .logo-box {
      display: flex;
      height: 75px;
      margin-bottom: 15px;

      .img-box {
        max-width: 75px;
        width: 24%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          max-width: 90%;
          max-height: 90%;
        }
      }

      .company-name {
        width: 76%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;

        h1 {
          display: block;
          font-family: ${fonts.titleAccentFont};
          color: ${colors.lightTheme.accentColor};
          font-size: 0.9em;
          font-weight: 800;
          margin: 3px 0;
        }

        p {
          display: inline-block;
          color: ${colors.lightTheme.grayColor};
          font-size: 0.7em;
        }
      }
    }
    main {
      padding-top: 15px;

      p {
        color: ${colors.lightTheme.mainColor};
        font-family: ${fonts.mainFont};
        font-size: 1em;
        padding-bottom: 20px;
      }

      h1,
      h2,
      h3 {
        color: ${colors.lightTheme.boldColor};
        font-family: ${fonts.mainFont};
        font-size: 1.1em;
        margin-bottom: 20px;
      }

      ul {
        padding-bottom: 20px;
        padding-left: 30px;
        li {
          list-style: circle;
          color: ${colors.lightTheme.mainColor};
          font-family: ${fonts.mainFont};
          font-size: 1em;
        }
      }
    }
  }
`

const JobPage = ({ location }) => {
  const applyMain = useRef()
  const jobDesc = useRef()
  const [job, setJob] = useState(location.state)

  const renderHtml = () => {
    applyMain.current.innerHTML = location.state.how_to_apply
    jobDesc.current.innerHTML = location.state.description
  }

  useEffect(() => {
    renderHtml()
  }, [])

  console.log(location)
  return (
    <>
      <GlobalStyles />
      <LogoBox padding="10px 20px" />
      <JobWrapper>
        <div className="back-box">
          <BackToSearch margin="20px 0" />
          <HowToApply>
            <header>
              <h1>HOW TO APPLY</h1>
            </header>
            <main ref={applyMain}></main>
          </HowToApply>
        </div>
        <div className="job-box">
          <header className="job-box-header">
            <h1>Job Info</h1>
          </header>
          <header className="title-box">
            <h1 className="title">{job.title}</h1>
            <div className="tags-box">
              <h1 className="tag">{job.type}</h1>
              <p className="time">{job.created_at}</p>
            </div>
          </header>
          <div className="logo-box">
            <div className="img-box">
              <img src={job.company_logo} alt="Company Logo" />
            </div>
            <div className="company-name">
              <h1>{job.company}</h1>
              <p>{job.location}</p>
            </div>
          </div>
          <header className="job-box-header">
            <h1>Description</h1>
          </header>
          <main ref={jobDesc}></main>
        </div>
      </JobWrapper>
    </>
  )
}

export default JobPage

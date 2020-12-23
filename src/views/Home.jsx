import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { generate as id } from "shortid"

//Components
import GlobalStyles from "../components/GlobalStyles"
import HeaderMenu from "../components/HeaderMenu"
import JobCard from "../components/JobOfferCard"
import Filter from "../components/Filter"

//Styles
const JobsWrapper = styled.div`
  margin-left: 15px;
  max-width: 850px;
  @media only screen and (min-width: 1340px) {
    width: 65%;
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-left: 0;
  }
`
const JobsBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 950px) {
    padding: 0 5%;
  }

  @media only screen and (max-width: 949px) {
    padding: 0 2.5%;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const Home = ({ history }) => {
  const [jobs, setJobs] = useState([])
  const [darkTheme, setDarkTheme] = useState(false)

  const handleDarkTheme = () => {
    setDarkTheme(!darkTheme)
  }

  const renderJobs = async (url) => {
    const res = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(`${url}`)}`
    )
    const data = await res.json()
    const jobsOffers = await JSON.parse(data.contents)
    setJobs(jobsOffers)
  }

  useEffect(() => {
    renderJobs("https://jobs.github.com/positions.json")
  }, [])

  const handleRedirect = (job) => {
    history.push(`/job/${job.title}`, job)
  }

  return (
    <>
      <GlobalStyles darkTheme={darkTheme} />
      <form action="">
        <HeaderMenu darkTheme={darkTheme} handleDarkTheme={handleDarkTheme} />
        <JobsBoxWrapper>
          <Filter darkTheme={darkTheme} />
          <JobsWrapper>
            {jobs.map((job) => (
              <JobCard
                darkTheme={darkTheme}
                key={id()}
                onClick={() => handleRedirect(job)}
              >
                <div className="logo-box">
                  <img src={job.company_logo} alt="Job-Logo" />
                </div>
                <div className="info-box">
                  <header>
                    <div className="company-box">
                      <h1> {job.company} </h1>
                    </div>
                  </header>
                  <main>
                    <div className="title-box">
                      <h1> {job.title} </h1>
                    </div>
                    <div className="time-box">
                      <h1> {job.type} </h1>
                    </div>
                  </main>
                  <footer>
                    <div className="location-box">
                      <p> {job.location} </p>
                      <p>{Math.floor(Math.random() * 10)} Days ago</p>
                    </div>
                  </footer>
                </div>
              </JobCard>
            ))}
          </JobsWrapper>
        </JobsBoxWrapper>
      </form>
    </>
  )
}

export default Home

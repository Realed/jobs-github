import React, { useState, useEffect } from "react"
import styled from "styled-components"

//Components
import GlobalStyles from "../components/GlobalStyles"
import HeaderMenu from "../components/HeaderMenu"
import JobCard from "../components/JobOfferCard"

//Styles
const JobsWrapper = styled.div`
  padding: 10px 20px;
`

const Home = () => {
  const [jobs, setJobs] = useState([])

  const renderJobs = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setJobs(data)
  }

  useEffect(() => {
    renderJobs("https://jobs.github.com/positions.json")
  }, [])

  return (
    <>
      <GlobalStyles />
      <HeaderMenu />
      <JobsWrapper>
        {jobs.map((job) => (
          <JobCard>
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
    </>
  )
}

export default Home

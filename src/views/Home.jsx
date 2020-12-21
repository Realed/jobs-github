import React, { useState, useEffect } from "react"
import styled from "styled-components"

//Components
import GlobalStyles from "../components/GlobalStyles"
import HeaderMenu from "../components/HeaderMenu"
import JobOfferCard from "../components/JobOfferCard"

//Styles
const JobsWrapper = styled.div`
  padding: 10px 20px;
`

const Home = () => {
  const [jobs, setJobs] = useState([])

  return (
    <>
      <GlobalStyles />
      <HeaderMenu />
      <JobsWrapper>
        <JobOfferCard />
      </JobsWrapper>
    </>
  )
}

export default Home

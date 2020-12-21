import React from "react"
import styled from "styled-components"

//Styles
import colors from "../styles/colors"
import fonts from "../styles/fonts"

const JobCard = styled.div`
  width: 100%;
  min-height: 150px;
  background-color: ${colors.lightTheme.backColorAccent};
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  padding: 3px 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .logo-box {
    width: 30%;
    min-height: 125px;
    height: 100%;
    display: block;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
      max-width: 80%;
      max-height: 80%;
    }
  }

  .info-box {
    width: 70%;
    min-height: 135px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    header,
    footer {
      height: 25%;
    }

    main {
      height: 50%;
    }

    .company-box {
      h1 {
        color: ${colors.lightTheme.accentColor};
        font-family: ${fonts.titleAccentFont};
        font-size: 0.7em;
        font-weight: 600;
      }
    }

    .title-box {
      h1 {
        font-family: ${fonts.mainFont};
        font-weight: 400;
        color: ${colors.lightTheme.accentColor};
        font-size: 1.1em;
        margin-bottom: 10px;
      }
    }

    .time-box {
      h1 {
        font-size: 0.8em;
        font-weight: 700;
        display: inline-block;
        width: fit-content;
        padding: 4px 5px;
        border-radius: 5px;
        font-family: ${fonts.titleAccentFont};
        color: ${colors.lightTheme.accentColor};
        border: 1px solid ${colors.lightTheme.accentColor};
      }
    }

    .location-box {
      display: flex;
      justify-content: space-between;
      p {
        display: inline-block;
        font-size: 0.7em;
        color: ${colors.lightTheme.grayColor};
        font-weight: 600;
      }
    }
  }
`

// const JobOfferCard = () => {
//   return (
//     <>
//       <JobCard>
//         <div className="logo-box">
//           <img
//             src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaTJUIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--17e537bed46c17a2a93de60195e7b50de0139b7f/Lawpilots.png"
//             alt=""
//           />
//         </div>
//         <div className="info-box">
//           <header>
//             <div className="company-box">
//               <h1>lawpilots GmbH</h1>
//             </div>
//           </header>
//           <main>
//             <div className="title-box">
//               <h1>Systemadministrator / IT Operations (m/w/d)</h1>
//             </div>
//             <div className="time-box">
//               <h1>Full Time</h1>
//             </div>
//           </main>
//           <footer>
//             <div className="location-box">
//               <p>New York</p>
//               <p>5 days ago</p>
//             </div>
//           </footer>
//         </div>
//       </JobCard>
//     </>
//   )
// }

export default JobCard

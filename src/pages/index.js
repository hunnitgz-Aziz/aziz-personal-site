import React, {useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PlayerCard } from "../components/player-card-header"
import styled from "styled-components"
import { Link } from "gatsby"

const Tabs = styled.div`
  border-bottom: 1px solid #B3B3B3;
`

const Tab = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 1rem;

  &.active {
    border-bottom: 3px solid black;
  }
`

const TabContent = styled.div`
  padding: 2rem 0;
  transition: all 200ms cubic-bezier(0.01, 0.5, 0.465, 0.81);
`

const TableWrapper = styled.div`
  @media (max-width: 768px) {
   display: none;
  } 
`

const TableHead = styled.thead`
  background-color: black;

  tr th {
    color: white;
  }
`

const BioContainer = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 3fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const AboutMe = styled.div``

const Press = styled.div`
 ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
 }
`

const MobileTable = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileCard = styled.div`
  border: 1px solid #b3b3b3;
  padding: 1rem;
`

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`

const ProjectTitle = styled.h5``

const ProjectImage = styled.img`
  margin-bottom: 0;
`

const ProjectLink = styled(props => <Link {...props}/>)`
  display: block;
  text-decoration: none;
  color: black;
  transition: all 200ms cubic-bezier(0.01, 0.5, 0.465, 0.81);
  box-shadow: none;

  &:hover {
    box-shadow: none;
  }

  @media (min-width: 641px) {
    &:hover {
      box-shadow: none;
      padding: 1rem;
      background: #c7c7c7;
    }
  }
`

const mobileData = [
  {
    year: "2014-2017",
    company: "Major League Hacking",
    position: "Creative Director, Product Designer",
    impact: "Defined brand identity legacy, multi-million dollar designs in partnership with Dell, Windows, & Alienware, event branding with 65,000 annual attendance"
  },
  {
    year: "2017-2019",
    company: "Universal Music Group",
    position: "UX & Web Designer",
    impact: "Multi-million dollar marketing websites for Kid Cudi, Post Malone, and Nicki Minaj. Crafted a design system and theme builder for 150+ e-commerce sites."
  },
  {
    year: "2019-2021",
    company: "Gerry",
    position: "UX Designer & Front-end Engineer",
    impact: "Lead UX, product designer and frontend engineer for first ever B2B2C virtual concierge for independent seniors looking for assisted living."
  },
  {
    year: "2021-2022",
    company: "Atlantic Health System",
    position: "Senior Product Designer",
    impact: "Designed the facility's first virtual urgent care system that hosted 120 patients daily. "
  },
  {
    year: "2022-2023",
    company: "Salesforce",
    position: "UX Engineer",
    impact: "Reduced development costs by $1m providing design and engineering services to create features on Salesforce Help platform."
  },
  {
    year: "2023-current",
    company: "Peloton",
    position: "Senior UX Engineer",
    impact: "Created Peloton’s multi-million dollar and first ever design system documentation for designers and engineers."
  },
]

const projectData = [
  {
    title: "Salesforce Help",
    description: "Improving support engineers daily tasks with UX design and engineering",
    link: "salesforce-help",
    image: "https://images.ctfassets.net/4ths913quwq9/2qs76tXl7FFfwy8AY8Hk7Q/0bf9e5db8e4b53eae0c169554895b66a/screen_preview-salesforce.png"
  },
  {
    title: "Reach - Voter Registration",
    description: "Designing a feature to increase voter registration numbers by large amounts",
    link: "reach-voter-registration",
    image: "https://images.ctfassets.net/4ths913quwq9/1ITRZzPedY34csJ08OFMlN/01469e67b5adee05b148cf8a470d1109/reach-preview.png"
  },
  {
    title: "Atlantic Health System Virtual Urgent Care",
    description: "A telehealth system for Atlantic Health's 10 urgent care clinics",
    link: "atlantic-health-systems-virtual-urgent-care",
    image: "https://images.ctfassets.net/4ths913quwq9/4LSNkGoZneH63VVLGc3x6L/537532c3cd581b0bd4e9e85fac248784/screen_preview.png"
  },
  {
    title: "Cardboard",
    description: "Creating a rapid prototyping tool with cardboard",
    link: "cardboard",
    image: "https://images.ctfassets.net/4ths913quwq9/6mQWdA5xghpolJIq4AqcoS/858895c4da752dcd21738a270ca1454e/cardboard_landing.jpg"
  },
]

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index)
  }


  return (
    <Layout>
      <SEO title="Home" keywords={[`aziz ramos`, `designer`, `black`, `muslim`]} />
      <div>
        <PlayerCard/>
        <Tabs>
          <Tab onClick={() => handleTabClick(0)} className={activeTab === 0 ? "active" : ""}>Overview</Tab>
          <Tab onClick={() => handleTabClick(1)} className={activeTab === 1 ? "active" : ""}>Bio</Tab>
        </Tabs>
        <TabContent>
          {activeTab === 0 && (
            <div>
              <h4>Career Stats</h4>
              <TableWrapper>
                <table>
                  <TableHead>
                    <tr>
                      <th>Years</th>
                      <th>Company</th>
                      <th>Position</th>
                      <th>Impact</th>
                    </tr>
                  </TableHead>
                  <tbody>
                    {mobileData.map((data, index) => (
                      <tr key={index}>
                        <td>{data.year}</td>
                        <td>{data.company}</td>
                        <td>{data.position}</td>
                        <td>{data.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableWrapper>
              <MobileTable>
                {mobileData.map((data, index) => (
                  <MobileCard key={index}>
                    <h5>{data.year}</h5>
                    <p>{data.company}</p>
                    <p>{data.position}</p>
                    <p>{data.impact}</p>
                  </MobileCard>
                ))}
              </MobileTable>
              <h4>Projects</h4>
                <ProjectContainer>
                  {projectData.map((data, index) => (
                    <div key={index}>
                      <ProjectLink to={`/work/${data.link}`}>
                        <ProjectImage src={data.image} alt={data.title}/>
                        <ProjectTitle>{data.title}</ProjectTitle>
                      </ProjectLink>
                    </div>
                  ))}
                </ProjectContainer>
            </div>
          )}
          {activeTab === 1 && (
            <BioContainer>
              <AboutMe>
                <h4>About</h4>
                <p>Aziz Ramos is a designer with 11 years experience building products for Salesforce, Universal Music, Atlantic Health System and Peloton. Not only is he proficient in all the skills you want in a designer he has the ability to validate his design by building his own prototypes in code - whether it’s on the web, iOS or Android he will prove why his design decisions are a force to be reckoned with. He is a team player first, but if you need someone to take over and lead your team to a win he will come in clutch every quarter.</p>
              </AboutMe>
              <Press>
                <h4>Press</h4>
                <ul>
                  <li><a href="https://designsystem.university/" target="blank">Specialize in Tinkering Design System University with Dan Mall</a></li>
                  <li><a href="https://www.youtube.com/watch?v=xi3zevzTxyU&t" target="blank">UX Engineering as a competitive advantage Code & Pixels</a></li>
                </ul>
              </Press>
            </BioContainer>
          )}
        </TabContent>
      </div>
    </Layout>
  )
}


export default IndexPage

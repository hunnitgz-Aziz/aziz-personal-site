import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Poster from "../images/services-poster.jpg"

const Wrapper = styled.div`
  display: flex;
`
const LeftSide = styled.div`
  flex: 0 1 50%;
  position: sticky;
  top: 95px;
  align-self: flex-start;

  @media (max-width: 640px) {
    display: none;
  }
`

const RightSide = styled.div`
  flex: 0 1 50%;
  padding: 1rem;

  @media (max-width: 640px) {
    flex: 0 1 100%;
    padding: 1rem 0;
  }
`

const Headline = styled.h2``
const PackageHeadline = styled.h4``
const PackagePrice= styled.h5``
const PosterImage = styled.img``
const PackageBlock = styled.div``



const Services = () => (
  <Layout>
    <SEO title="Services"/>
    <Wrapper>
      <LeftSide>
        <PosterImage src={Poster} />
      </LeftSide>
      <RightSide>
        <Headline>Services</Headline>
        <p>Aziz's expertise as a full-stack designer covers design in many facets: graphic, UI/UX, product, branding, web and mobile application.</p>
        <p>The process starts with ideation whether it's a prototype, formulating user personas, or researching competitors. Your brand is built with a logo and design system.</p>
        <p>Once your brand and design system has been created, it will come alive in a product of your choice: website or mobile application, I use React Native. Aziz takes care of your web hosting all you need is a domain. If you've got a CMS and hosting of your choice, that's totally fine, he's got experince in Wordpress, Squarespace, Wix, and Ghost. </p>
        <p><a href="https://docs.google.com/document/d/1AYMUuDntgBi7BEvsn0SK21ZspywiZDtLK4ab-C8JI7E/edit?usp=sharing" target="_blank">view resume</a></p>
        <Headline>Packages</Headline>
        <p>All packages include: free hosting, logo and branding, design system, wireframes, lifetime website maintenance, and SEO.</p>
        <PackageBlock>
          <PackageHeadline>Essential Business</PackageHeadline>
          <PackagePrice>$150/month</PackagePrice>
          <ul>
            <li>Educational or non-profit organization</li>
            <li>Quick turnaround splash page for personal use</li>
          </ul>
          <p><a href="mailto:azizramos00@gmail.com?subject=Essential Business Inquiry">Inquire</a></p>
        </PackageBlock>
        <PackageBlock>
          <PackageHeadline>Small Business</PackageHeadline>
          <PackagePrice>$250/month</PackagePrice>
          <ul>
            <li>For profit organization: creative agency, restaurant, etc</li>
            <li>Starting new business or needs brand refresh</li>
          </ul>
          <p><a href="mailto:azizramos00@gmail.com?subject=Small Business Inquiry">Inquire</a></p>
        </PackageBlock>
        <PackageBlock>
          <PackageHeadline>Corporate</PackageHeadline>
          <PackagePrice>*Consult for hourly rate</PackagePrice>
          <ul>
            <li>Private sector</li>
            <li>Looking for specialized frontend development and/or design expertise in product development process to work with your team</li>
            <li>Hiring for full-time or contract position</li>
          </ul>
          <p><a href="mailto:azizramos00@gmail.com?subject=Corporate Inquiry">Inquire</a></p>
        </PackageBlock>
      </RightSide>
    </Wrapper>
  </Layout>
)

export default Services
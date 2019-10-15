import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import ScrollContainer from "../components/scroll-container"

const PostContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const Title = styled.h3`
  max-width: 1024px;
  margin: 0 auto 1.5rem;
`

const Post = styled.div``

const LinkContainer = styled.div`
  text-align: center;
`

const ProjectHomeLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: #222;
  display: inline;
  text-align: center;
  margin: 3rem 0 2rem;
`

const FeaturedImage = styled.img`
  display: block;
  width: 100%;
`

const ProjectPost = ({ data }) => {
  const { title, body, image, tags } = data.contentfulProject
  return (
    <Layout>
      <SEO title={title} />
      <Post className="project-post">
        <FeaturedImage alt={title} src={image.file.url} />
        <Title>{title}</Title>
        <PostContainer
          dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
        />
        <LinkContainer>
          <ProjectHomeLink to="/work">View more projects</ProjectHomeLink>
        </LinkContainer>
      </Post>
    </Layout>
  )
}
export default ProjectPost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      body {
        body
        childMarkdownRemark {
          id
          html
        }
      }
      image {
        file {
          url
        }
      }
      tags
    }
  }
`

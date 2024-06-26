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
  margin: 3rem auto 1.5rem;
`

const Post = styled.div``

const LinkContainer = styled.div`
  text-align: center;
`

const ProjectHomeLink = styled(props => <Link {...props} />)`
  display: block;
  width: 100%;
  border: 4px solid #000;
  box-shadow: none;
  max-width: 1024px;
  margin: 1rem auto 2rem;
  padding: 1rem;

  &:hover {
    color: #d3d3d3;
    box-shadow: inset 0 -120px 0 rgba(0, 0, 0, 1);
  }
`

const FeaturedImage = styled.img`
  display: block;
  max-width: 1024px;
  margin: 0rem auto 1.5rem;
  width: 100%;
`

const ProjectPost = ({ data }) => {
  const { title, body, image, tags } = data.contentfulProject
  return (
    <Layout>
      <SEO title={title} />
      <Post className="project-post">
        <Title>{title}</Title>
        <FeaturedImage alt={title} src={image.file.url} />
        
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

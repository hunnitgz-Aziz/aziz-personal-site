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
  width: 100%;
`

const ArtPost = ({ data }) => {
  const { title, body, image } = data.contentfulArt
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
          <ProjectHomeLink to="/art">See more art</ProjectHomeLink>
        </LinkContainer>
      </Post>
    </Layout>
  )
}
export default ArtPost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulArt(slug: { eq: $slug }) {
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
    }
  }
`

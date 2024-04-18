import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Wrapper = styled.div`
  padding-top: 2.5rem;

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

const Project = styled.div``

const Image = styled.img`
  margin-bottom: 0.2rem;

  @media (min-width: 1024px) {
    display: inline-block;
    // height: 100%;
    vertical-align: middle;
    margin: 0;
    // width: 50%;
  }
`
//mic check 2012

const TextBlock = styled.div`
  @media (min-width: 1024px) {
    display: inline-block;
    // width: 50%;
    height: 100%;
    vertical-align: middle;
    padding: 1rem;
  }
`

const Title = styled.h4`
  margin-bottom: 0.2rem;
`

const Subtitle = styled.p`
  @media (max-width: 640px) {
    display: none;
  }
`

const Tag = styled.div`
  background-color: #afafaf;
  display: inline;
  padding: 0.1rem 0.3rem;
`

const ProjectLink = styled(props => <Link {...props} />)`
  display: block;
  text-decoration: none;
  color: #222;
  margin-bottom: 2rem;
  transition: all 200ms cubic-bezier(0.01, 0.5, 0.465, 0.81);
  box-shadow: none;

  &:hover {
    box-shadow: none;
  }

  @media (max-width: 640px) {
    &:hover {
      box-shadow: none;
    }
  }

  @media (min-width: 641px) {
    &:hover {
      box-shadow: none;
      padding: 1rem;
      background: #c7c7c7;
    }
  }
`

const ProjectPosts = ({ data }) => {
  const projectPosts = data.allContentfulProject.edges
  return (
    <Layout>
      <SEO title="Projects" />
      <Wrapper>
        {projectPosts.map(({ node: post }) => (
          <Project key={post.id}>
            <ProjectLink to={`/work/${post.slug}`}>
              <Image alt={post.title} src={post.image.file.url} />
              <TextBlock>
                <Tag>{post.tags}</Tag>
                <Title>{post.title}</Title>
                <Subtitle>{post.subtitle.subtitle}</Subtitle>
              </TextBlock>
            </ProjectLink>
          </Project>
        ))}
      </Wrapper>
    </Layout>
  )
}
export default ProjectPosts

export const query = graphql`
  query ProjectPageQuery {
    allContentfulProject(limit: 1000) {
      edges {
        node {
          id
          title
          slug
          body {
            body
          }
          subtitle {
            subtitle
          }
          image {
            file {
              url
            }
          }
          tags
        }
      }
    }
  }
`

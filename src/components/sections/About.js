import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          {/* <Grid> */}
            <div>
              {/* <h2>Are you struggling to understand and cope with challenges in your personal or professional life?</h2> */}
              <h3>Do you need help to overcome a personal crisis, 
                stressful circumstance, increased anxiety, 
                depression or a broken relationship?</h3>
                <br/>
              <p>
              Whatever obstacle you may be facing in your life, 
              therapy can help you overcome a personal crisis, 
              stressful situation, or difficult time by increasing hope, 
              understanding, skills, and connection with others. 
              </p>
              <br/>
              <p>
                And, as a therapist, Maureen Tegart may be able to help you. 
                Through a therapy approach that has been described as 
                “affirming, encouraging and non-judgmental”, 
                Maureen will support you to explore options, identify strengths, 
                develop skills and coping strategies, increase your resiliency, 
                and create meaningful change for yourself and in your relationships with others.
              </p>
              <br/>
              <p>
              Maureen Tegart utilizes a variety of approaches including:
               CBT (cognitive behavioural therapy), Trauma Informed Therapy, 
               Narrative Therapy and Emotional Focussed Therapy.
              </p>
              <br/>
              <p>
              Frequency and number of sessions may vary depending on your needs and goals.
              </p>
            </div>
            {/* <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art> */}
          {/* </Grid> */}
          {/* <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Nothing new to learn here</h2>
              <p>
                Enjoy the power of the latest web technologies – React.js ,
                Webpack , modern JavaScript and CSS and more — all set up and
                waiting for you to start building.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Grow and build your ideas</h2>
              <p>
                Waste no more time on tooling and performance. Focus on the the
                site you want to build and nothing more.
                <br />
                <br />
                Gatsby is fast in every way that matters.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid> */}
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;

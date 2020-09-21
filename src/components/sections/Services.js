import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const Services = () => (
  <StaticQuery
    query={graphql`
      query {
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
      <Section id="services">
        <Container>
          <Grid>
            <div>
              {/* <h2>Are you struggling to understand and cope with challenges in your personal or professional life?</h2> */}
              <h2>Services</h2>
                <br/>
              <h3>
              Tegart Therapy Services offers:
              </h3>
              <p>
              •	Individual Therapy</p><p>
•	Family Therapy (for adults and children 16+)</p><p>
•	In person, phone or virtual sessions available</p><p>

              </p>
              <br/>
              <h3>Individual and Family Therapy</h3>
              <p>
              Through single session consultations, short-term or longer term therapy for individuals or with families, Tegart Therapy Services can help you:</p><p>
•	Understand and manage a wide range of emotional difficulties</p><p>
•	Communicate better an reduce conflict with partners, children, parents</p><p>
•	Increase flexibility and develop skills for various life challenges</p><p>
•	Manage and reduce stress, anxiety and depression</p><p>
•	Develop more meaningful community connections</p><p>
•	Deal with loss and grief with greater self-compassion</p><p>
•	Cope with trauma, experienced personally or witnessed</p><p>
•	Overcome symptoms of trauma by working through complex feelings of fear, shame, betrayal and/or anger</p><p>
•	Develop your self-worth and self-esteem</p><p>
•	Find more satisfaction and enjoyment in life

              </p>
              
            </div>
            {/* <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art> */}
          </Grid>
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
  grid-template-columns: 1fr;
  grid-gap: 40px;
  text-align: left;
  align-items: center;
  justify-items: center;
  margin: 0 0;

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
    margin-top: 24px;

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
`;//grid-template-columns: 3fr 2fr; text-align: right; margin: 24px 0;, added margin-top to media

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default Services;

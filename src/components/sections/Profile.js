import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const Profile = () => (
  <StaticQuery
    query={graphql`
      query {
        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "Photo - Maureen Face" }
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
      <Section id="profile">
        <Container>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
            <div>
              {/* <h2>Are you struggling to understand and cope with challenges in your personal or professional life?</h2> */}
              <h2>About Maureen Tegart, MSW, RSW</h2>
                <br/>
                {/* <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art> */}
              <p>
              Maureen Tegart is a registered Social Worker who has been working as a therapist within the mental health field for over 30 years. 
              Maureen has a vast amount of experience in supporting individuals and families who are dealing with loss, 
              life changes, trauma, relationship issues and stressful situations.  
              Maureen has a Masters in Social work from Wilfrid Laurier University 
              and has pursued other post-graduate training in Cognitive behavioural Therapy, 
              Emotion Focussed Couple therapy, Narrative training, Bereavement therapy, and Dialectical Therapy.  
              Committed to life long learning, Maureen Tegart is currently pursuing a postgraduate certificate 
              in Advanced Clinical Supervision through Smith College School of Social Work. </p>
              
            </div>
            
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

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 70%;
  }
`;

export default Profile;

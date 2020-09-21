import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
//import yourSVG from './undraw_the_world_is_mine_nb0e.svg'
import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_directions: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "noun_Lavender" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `} //maxWidth: 1400 thistle-161662_1280 undraw_the_world_is_mine_nb0e
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
            {/* <img src={yourSVG} /> */}
              <Img fluid={data.art_directions.childImageSharp.fluid} />
            </Art>
            <Text>
              <h1>
                Are you struggling to cope with challenges in your life?
              </h1>
              {/* <br />
              <p>
                <StyledExternalLink href="https://github.com/ajayns/gatsby-absurd">
                  Check out source &nbsp;&#x2794;
                </StyledExternalLink>
              </p> */}
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: 10%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 50%;
      margin-bottom: -15%;
      margin-left: 25%;
      
    }
  }
`;//margin-bottom: -4.5%;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  grid-gap: 100px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 10px;

    > ${Art} {
      order: 2;
    }
  }
`; //grid-gap: 64px; md 80px;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;

import React from "react"
import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Header from '@sections/Header';
import Services from '@sections/Services';
import Footer from '@sections/Footer';
import { Section, Container } from '@components/global';
import styled from 'styled-components';

export default function Simple({ pageContext }) {
  return (
      <Layout>
          <Navbar />
          <Section>
              <Container>
                  <Grid>
                    <div>
	                    {pageContext.frontmatter.message}
                    </div>
                  </Grid>
              </Container>
          </Section>
          {/* <Services /> */}
            
          <Footer />
      </Layout>
   
  )
}

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

    
  }
`;//grid-template-columns: 3fr 2fr; text-align: right; margin: 24px 0;, added margin-top to media
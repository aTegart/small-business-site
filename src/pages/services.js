import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';
import Header from '@sections/Header';
import Services from '@sections/Services';
import Footer from '@sections/Footer';
import { Container } from '@components/global';

const ServicesPage = () => (
  <Layout>
    <Navbar />
    {/* <Header /> */}
    <Services />
    {/* <Container>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container> */}
    <Footer />
  </Layout>
);

export default ServicesPage;

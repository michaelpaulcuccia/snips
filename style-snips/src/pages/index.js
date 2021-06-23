import React from 'react';
import '../style/reset.css';
import Layout from '../components/Layout';
import Button from '../components/Button.js'

const index = () => {
  return (
    <Layout>
      Hello, from Index.js
      <Button>Click</Button>
    </Layout>
  )
}

export default index


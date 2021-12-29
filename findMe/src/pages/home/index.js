
import React from 'react';
import Banner  from "../../components/banner";
import Content  from "../../components/content";
import Card  from "../../components/card";
import Footer from "../../components/footer";
import Button from "../../components/button";


class Home extends React.Component {

  constructor(props) {
    super(props);
  }




  render() {
    return (
      <div>
        <Banner></Banner>
         <Content></Content>
         <Card></Card>
         <Footer></Footer>
         <Button></Button>
      </div>

    );
  }
}
export default Home;

import React, {useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

import "./Body.css";
import Footer from "./Footer";


function Body() {
 
  const [items, setItems] = useState([])
  const [itemsSearch, setItemsSearch] = useState([]);
  const [statusSearch, setStatusSearch] = useState(false);
  const [status, setStatus] = useState(false)
  useEffect(() => {
   fetch("https://fakestoreapi.com/products?limit=4")
     .then((res) => res.json())
     .then((json) => {
       if (json) {
         setItemsSearch(json);
         setStatusSearch(true);
         
       }
     });
  }, []);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        if (json) {
          setItems(json);
          console.log(json);
          setStatus(true)
        }
        
      } 
      
      );
    
  
  }, [])
 
  const SearchCard = itemsSearch.map((itemsSearch) => (
    <Card
      key={itemsSearch.id}
      style={{
        cursor: "pointer",
        width: "18rem",
        margin: "10px",
        display: "flex",
        alignItems: "center",
        height: "16rem",
        flexDirection: "column",
      }}
    >
      <Card.Img
        variant="top"
        style={{ width: "100px", margin: "2rem", height: "100px" }}
        src={itemsSearch.image}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "15px",
              height: "20px",
              overflowY: "hidden",
              width: "200px",
            }}
          >
            {itemsSearch.title}
          </Card.Title>
        </Card.Body>
        <h7 style={{ marginLeft: "10px", height: "20px" }}>
          {" "}
          {" ₹ " + itemsSearch.price}
        </h7>
      </div>
    </Card>
  ));

  const Cards = items.map((items) => (
    <Card
      key={items.id}
      style={{
        cursor: "pointer",
        width: "18rem",
        margin: "10px",
        display: "flex",
        alignItems: "center",
        height: "16rem",
        flexDirection: "column",
      }}
    >
      <Card.Img
        variant="top"
        style={{ width: "100px", margin: "2rem", height: "100px" }}
        src={items.image}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Card.Body>
          <Card.Title
            style={{
              fontSize: "15px",
              height: "20px",
              overflowY: "hidden",
              width: "200px",
            }}
          >
            {items.title}
          </Card.Title>
        </Card.Body>
        <h7 style={{ marginLeft: "10px", height: "20px" }}>
          {" "}
          {" ₹ " + items.price}
        </h7>
      </div>
    </Card>
  ));
  
  if (status && statusSearch) {
    return (
      <section id="main">
        <nav>im navigator</nav>
        <div className="banner"></div>
        <Container className="main">
          <div className="searched_bases_container">
            <h3>Based on your last search</h3>
            <div className="searched_bases">{SearchCard}</div>
          </div>

          <div className="recommendations_container">
            <h3>Fresh recommendations</h3>
            <div className="recommendation_bases">{Cards}</div>
          </div>
        </Container>
        <Footer />
      </section>
    );
  } else {
    return (
      <section id="main">
        <nav>im navigator</nav>
        <div className="banner"></div>
        <Container className="main">
          <div className="searched_bases_container">
            <h3>Loading....</h3>
          </div>

          <div className="recommendations_container">
            <h3>Loading....</h3>
          </div>
        </Container>
        <Footer />
      </section>
    );
  }
  

  
}

export default Body;

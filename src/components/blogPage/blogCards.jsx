import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import './BlogCards.css';

const BlogCards = () => {
  const [BlogData, setBlogData] = useState(null);

  useEffect(() => {
    client.fetch(
      `*[_type == 'post']{title, slug, mainImage{asset->{_id, url}}, rating}`)
      .then(data => setBlogData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="blogCard m-5">
      <Container fluid className="blogCard-main">
        <div className="blogCard-heading mt-3 mb-2">
          <h1>Top Novels</h1>
        </div>
        <div className="blogCard-scroll-wrapper">
          <div className="blogCard-scroll">
            {BlogData && BlogData.slice(0, 7).map((post, index) => (
              <div key={index} className="blogCard-item">
                <Link className="link" to={'/' + post.slug.current}>
                  <Card className="blogCard-card h-100">
                    <Card.Img 
                      variant="top" 
                      src={post.mainImage.asset.url} 
                      alt={post.title} 
                      className="blogCard-card-img-top" 
                    />
                    <Card.Body className="blogCard-card-body">
                      <Card.Title className="blogCard-card-title">{post.title}</Card.Title>
                      <Card.Text>Rating: {post.rating ? post.rating : 'Not rated yet'}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BlogCards;

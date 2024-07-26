import React, { useState, useEffect } from "react";
import { Container} from "react-bootstrap";
import { useParams } from "react-router-dom";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import "./blogPage.css";

const builder = imageUrlBuilder(client);

const urlFor = (source) => {
  return builder.image(source);
};

const BlogPage = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPostData(data[0])) // Assuming data is an array and you want the first item
      .catch((err) => console.error(err));
  }, [slug]);

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      {postData.mainImage && (
        <img className="slug-image"
          src={urlFor(postData.mainImage.asset.url).url()}
          alt={postData.mainImage.alt}
        />
      )}
      
      <h1 className="slug-title">{postData.title}</h1>
      <Container >
        <BlockContent blocks={postData.body} />
      </Container>
    </div>
  );
};

export default BlogPage;

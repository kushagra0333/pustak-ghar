import React, { useState } from "react";
import "./category.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Fiction Section
export const List1 = () => {
  return (
    <div className="category-content">
      <h1>Fiction</h1>
      <div className="category-section">
        <img
          src="https://media.istockphoto.com/id/1279460648/photo/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-small-child-fantasy-nature.jpg?s=612x612&w=0&k=20&c=yK_dL8T7CjeYpNTvkXecPxQDDw9WczC8FB9bCO2McOw="
          alt="Fiction"
        />
        <p>
          Explore the world of fiction, where imagination comes to life. Dive
          into the genres of action, adventure, and drama.
        </p>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <a href="#action-adventure" className="btn btn-light">
            Action & Adventure
          </a>
        </li>
        <li className="list-group-item">
          <a href="#comics" className="btn btn-light">
            Comics
          </a>
        </li>
        <li className="list-group-item">
          <a href="#mangas" className="btn btn-light">
            Mangas
          </a>
        </li>
      </ul>
    </div>
  );
};

// Non-Fiction Section
export const List2 = () => {
  return (
    <div className="category-content">
      <h1>Non-Fiction</h1>
      <div className="category-section">
        <img src="https://media.istockphoto.com/id/1279460648/photo/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-small-child-fantasy-nature.jpg?s=612x612&w=0&k=20&c=yK_dL8T7CjeYpNTvkXecPxQDDw9WczC8FB9bCO2McOw=" alt="Non-Fiction" />
        <p>
          Explore true stories and informative books that teach you about the
          world, history, and important life lessons.
        </p>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <a href="#biography" className="btn btn-light">
            Biography
          </a>
        </li>
        <li className="list-group-item">
          <a href="#history" className="btn btn-light">
            History
          </a>
        </li>
        <li className="list-group-item">
          <a href="#self-help" className="btn btn-light">
            Self-Help
          </a>
        </li>
      </ul>
    </div>
  );
};

// Children Section
export const List3 = () => {
  return (
    <div className="category-content">
      <h1>Children</h1>
      <div className="category-section">
        <img src="https://media.istockphoto.com/id/1279460648/photo/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-small-child-fantasy-nature.jpg?s=612x612&w=0&k=20&c=yK_dL8T7CjeYpNTvkXecPxQDDw9WczC8FB9bCO2McOw=" alt="Children" />
        <p>
          Stories for children that inspire creativity, laughter, and growth.
          Perfect for young readers.
        </p>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <a href="#picture-books" className="btn btn-light">
            Picture Books
          </a>
        </li>
        <li className="list-group-item">
          <a href="#fairy-tales" className="btn btn-light">
            Fairy Tales
          </a>
        </li>
        <li className="list-group-item">
          <a href="#young-adult" className="btn btn-light">
            Young Adult
          </a>
        </li>
      </ul>
    </div>
  );
};

// Sci-Fi & Fantasy Section
export const List4 = () => {
  return (
    <div className="category-content">
      <h1>Science Fiction & Fantasy</h1>
      <div className="category-section">
        <img src="https://media.istockphoto.com/id/1279460648/photo/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-small-child-fantasy-nature.jpg?s=612x612&w=0&k=20&c=yK_dL8T7CjeYpNTvkXecPxQDDw9WczC8FB9bCO2McOw=" alt="Sci-Fi & Fantasy" />
        <p>
          Explore futuristic worlds, fantasy kingdoms, and beyond in this
          captivating genre.
        </p>
      </div>
      <ul className="list-group">
        <li className="list-group-item">
          <a href="#sci-fi" className="btn btn-light">
            Science Fiction
          </a>
        </li>
        <li className="list-group-item">
          <a href="#fantasy" className="btn btn-light">
            Fantasy
          </a>
        </li>
        <li className="list-group-item">
          <a href="#dystopia" className="btn btn-light">
            Dystopia
          </a>
        </li>
      </ul>
    </div>
  );
};

const Category = () => {
  const [ChangeContent, setChangeContent] = useState(0);
  let component;
  switch (ChangeContent) {
    case 0:
      component = <List1 />;
      break;
    case 1:
      component = <List2 />;
      break;
    case 2:
      component = <List3 />;
      break;
    case 3:
      component = <List4 />;
      break;
    default:
      component = <List1 />;
      break;
  }
  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-4 category-sidebar">
          <button
            className="btn btn-dark w-100 mb-3"
            onClick={() => setChangeContent(0)}
          >
            Fiction
          </button>
          <button
            className="btn btn-dark w-100 mb-3"
            onClick={() => setChangeContent(1)}
          >
            Non-Fiction
          </button>
          <button
            className="btn btn-dark w-100 mb-3"
            onClick={() => setChangeContent(2)}
          >
            Children
          </button>
          <button
            className="btn btn-dark w-100 mb-3"
            onClick={() => setChangeContent(3)}
          >
            Sci-Fi & Fantasy
          </button>
        </div>
        <div className="col-md-8 category-content">{component}</div>
      </div>
    </div>
  );
};

export default Category;

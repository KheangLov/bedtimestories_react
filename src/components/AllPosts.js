import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AllPosts() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('http://localhost:1337/api/v1/stories?per_page=12');
    const items = await data.json();
    setItems(items.data.data);
  };

  return (
    <section className="section-wrapper">
      <div className="section-header">
        <h4 className="section-title">All Stories</h4>
        <Link to="/seemore" className="see-more">See More</Link>
      </div>
      <div className="block-grid-xs-2 block-grid-sm-4 block-grid-md-6 block-grid-lg-6">
        {items.map(item => (
          <div className="block-grid-item">
            <Link to={`/details/${item.id}`} className="block-inner card">
              <div className="thumbnail">
                <div style={{ backgroundImage: `url(/upload/thumbnails/${item.thumbnail})` }} className="thumbnail-overlay"></div>
              </div>
              <div className="block-description card-body">
                <h4 className="block-title">{item.title}</h4>
                <span className="block-type"><i className="fa fa-user"></i>{item.category_id.name}</span>
                <p className="block-text">{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
export default AllPosts;
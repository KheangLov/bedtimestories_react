import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Seemore() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const getTotal = await fetch('http://localhost:1337/api/v1/stories');
    const totals = await getTotal.json();
    console.log(totals.data.total);
    const data = await fetch(`http://localhost:1337/api/v1/stories?per_page=${totals.data.total}`);
    const items = await data.json();
    console.log(items.data.data);
    setItems(items.data.data);
  };

  return (
    <div className="container">
      <section className="section-wrapper">
        <div className="section-header">
          <h4 className="section-title">All Stories</h4>
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
    </div>
  );
}
export default Seemore;

import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchApi() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/1#');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data From Api</h1>
      <ul>
        {data && (
          <li key={data.id}>
            <strong>Title:</strong> {data.title}
          </li>
        )}
      </ul>
      {data && (
        <div>
          <h2>Product Images</h2>
          <div style={{ display: "flex" }}>
            {data.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                style={{ maxWidth: "100%", marginRight: "10px" }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchApi;

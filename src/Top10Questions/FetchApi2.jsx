import React, { useEffect, useState } from "react";

function FetchApi2() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/1#');
      const jsonObject = await response.json();
      setData(jsonObject);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data && (
          <li key={data.id}>
            <strong>Title: </strong> {data.title}
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
                style={{ maxWidth: '50%', marginRight: "10px" }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchApi2;

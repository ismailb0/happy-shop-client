import React from 'react';


function ProductPage({ match }) {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}

export default ProductPage;
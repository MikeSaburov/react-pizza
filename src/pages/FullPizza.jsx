import React from 'react';
import { useParams } from 'react-router-dom';

export const FullPizza = () => {
  const params = useParams();
  return (
    <div className="container">
      <img src="" alt="Image" />
      <h2>Маргарита</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        corrupti alias, delectus ex quis id atque suscipit consectetur natus
        cum, sapiente et harum pariatur quo quas possimus sint quae tenetur.
      </p>
      <h4>250 ₽</h4>
    </div>
  );
};

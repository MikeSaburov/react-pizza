import { useEffect, useState } from 'react';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    name: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://a4b2f70c0a223b33.mokky.dev/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        alert('Такой пиццы не существует!');
        console.log('Ошибка пр получении пиццы');
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img width={250} height={250} src={pizza.imageUrl} alt="Image" />
      <h2>{pizza.name}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;

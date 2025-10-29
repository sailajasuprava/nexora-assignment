import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../lib/axios";
import AddToCartSection from "../components/AddToCartSection";

function PizzaDetails() {
  const { pizzaId } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await axiosInstance.get(`/pizzas/${pizzaId}`);
        setPizza(res.data.data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [pizzaId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-lg text-gray-600">Loading pizza details...</p>
      </div>
    );
  }

  if (!pizza) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl text-yellow-700 font-semibold">
          Pizza not found 😢
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="flex flex-col space-y-4">
            <div className="relative w-full h-72 md:h-80 bg-gray-100 rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-200">
              <img
                src={`http://localhost:8000${pizza.image}`}
                alt={pizza.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col space-y-8">
            {/* Title and Price */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {pizza.name}
              </h1>
              <div className="flex items-end space-x-2">
                <span className="text-3xl font-bold text-yellow-600">
                  ₹{pizza.price}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 border-b-2 border-yellow-200 pb-6">
              <h2 className="text-lg font-bold text-gray-900">Description</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {pizza.description}
              </p>
            </div>

            {/* Ingredients */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-gray-900">Ingredients</h2>
              <div className="grid grid-cols-2 gap-2">
                {pizza.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-2 flex items-center space-x-2 hover:bg-yellow-100 transition"
                  >
                    <span className="text-lg">✓</span>
                    <span className="text-gray-800 text-sm font-medium">
                      {ingredient}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Cart Section */}
            <AddToCartSection pizza={pizza} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PizzaDetails;

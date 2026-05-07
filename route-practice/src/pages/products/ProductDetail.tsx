import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div>
        <Skeleton width={120} height={14} className="mb-6" />
        <div className="flex gap-8 mt-4">
          <Skeleton width={192} height={192} className="rounded" />
          <div className="flex flex-col gap-3 flex-1">
            <Skeleton width={280} height={28} />
            <Skeleton width={160} height={14} />
            <Skeleton width={80} height={20} />
            <Skeleton width={100} height={14} />
            <Skeleton count={3} height={14} />
          </div>
        </div>
      </div>
    );
  }

  if (!product) return <p className="text-gray-500">Product not found.</p>;

  return (
    <div>
      <Link to="/products" className="text-sm text-gray-500 hover:underline mb-6 inline-block">
        ← Back to products
      </Link>
      <div className="flex gap-8 mt-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-48 h-48 object-cover rounded"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-gray-500 text-sm capitalize">{product.category} {product.brand ? `· ${product.brand}` : ''}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <p className="text-sm text-gray-400">Rating: {product.rating} / 5</p>
          <p className="text-gray-600 mt-2">{product.description}</p>
        </div>
      </div>
    </div>
  );
}


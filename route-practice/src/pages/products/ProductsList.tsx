import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

function ProductRowSkeleton() {
  return (
    <li className="flex items-center gap-4 py-4">
      <Skeleton width={64} height={64} className="rounded" />
      <div className="flex flex-col gap-1 flex-1">
        <Skeleton width={200} height={16} />
        <Skeleton width={80} height={14} />
      </div>
    </li>
  );
}

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <ul className="divide-y divide-gray-100">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductRowSkeleton key={i} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="divide-y divide-gray-100">
      {products.map((product) => (
        <li key={product.id}>
          <Link
            to={`/products/${product.id}`}
            className="flex items-center gap-4 py-4 hover:bg-gray-50 transition-colors"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              width={64}
              height={64}
              className="object-cover rounded"
            />
            <div>
              <p className="font-medium">{product.title}</p>
              <p className="text-sm text-gray-500">${product.price}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

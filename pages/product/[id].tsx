import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProductItem from '../../components/products/productItem';
import { EachProduct } from '../api/products';

function ProductDetailPage(props: any) {
  const router = useRouter();
  const [productDetail, setProductDetail] = useState<EachProduct | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    const data = await fetch(`http://localhost:3000/api/product/${router.query.id}`);
    const result = await data.json();
    setProductDetail(result);
    setLoading(true);
  };

  if (!isLoading) return <p>Loading...</p>;

  return (
    <ProductItem
      imgPath={productDetail?.imgPath}
      id={productDetail?.id}
      productName={productDetail?.productName}
    />
  );
}

export default ProductDetailPage;

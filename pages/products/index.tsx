import { ProductResponse } from '../api/products';
import Image from 'next/image';

interface ProductResponseWrapper {
  data: ProductResponse;
}
const ProductPage = ({ data }: ProductResponseWrapper) => {
  return (
    <div>
      {data.result.map((val: any) => (
        <div key={val.productName}>
          <Image src={`${val.imgPath}`} width={300} height={300} />
          <div>{val.productName}</div>
        </div>
      ))}
    </div>
  );
};
export async function getStaticProps() {
  const result = await fetch('http://localhost:3000/api/products');
  const data: ProductResponse = await result.json();
  return {
    props: {
      data,
    },
  };
}
export default ProductPage;

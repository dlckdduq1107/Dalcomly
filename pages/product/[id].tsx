import ProductItem from '../../components/products/productItem';

function ProductDetailPage(props: any) {
  const { imgPath, id, productName } = props;
  return <ProductItem imgPath={imgPath} id={id} productName={productName} />;
}

export async function getServerSideProps(props: any) {
  const { id } = props.params;
  const data = await fetch(`http://localhost:3000/api/product/${id}`);
  const result = await data.json();
  return {
    props: {
      id: result.id,
      productName: result.productName,
      imgPath: result.imgPath,
    },
  };
}

export default ProductDetailPage;

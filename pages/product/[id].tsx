import ProductItem from '../../components/products/productItem';

function ProductDetailPage(props: any) {
  const { imgPath, id, productName } = props;
  return <ProductItem imgPath={imgPath} id={id} productName={productName} />;
}

export async function getStaticPaths() {
  const reponse = await fetch('http://localhost:3000/api/products');
  const result = await reponse.json();
  const productPath = result.productList.map((val: any) => {
    return {
      params: {
        id: val.id.toString(),
      },
    };
  });
  return {
    paths: [...productPath],
    fallback: 'blocking',
  };
}

export async function getStaticProps(props: any) {
  const { id } = props.params;
  const data = await fetch(`http://localhost:3000/api/product/${id}`);
  const result = await data.json();
  console.log(result);
  return {
    props: {
      id: result.id,
      productName: result.productName,
      imgPath: result.imgPath,
    },
  };
}

export default ProductDetailPage;

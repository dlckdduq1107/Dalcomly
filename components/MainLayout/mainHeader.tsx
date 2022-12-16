import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

function MainHeader() {
  return (
    <Header>
      <Link href='/'>
        <a>
          <Image src='/assets/images/metaRabbit.png' width={50} height={50} />
        </a>
      </Link>
      <SearchWrapper>
        <SearchInput />
        <SearchBtn>search</SearchBtn>
      </SearchWrapper>
      <MenuWrapper>
        <Link href='/menu1'>menu1</Link>
        <Link href='/menu2'>menu2</Link>
        <Link href='/menu3'>menu3</Link>
      </MenuWrapper>
    </Header>
  );
}
const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: skyblue;
  margin-bottom: 20px;
  border-radius: 0px 0px 20px 20px;
  padding: 20px;
  position: fixed;
  top: 0;
  z-index: 1;
`;
const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  margin: 15px;
`;
const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 100px;
  width: 50%;
`;
const SearchInput = styled.input`
  width: 100%;
`;
const SearchBtn = styled.button``;
export default MainHeader;

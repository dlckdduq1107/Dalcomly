import Image from 'next/image';
import styled from 'styled-components';

function MainFooter() {
  return (
    <FooterWrapper>
      <FooterContentWrapper>
        <Image src='/assets/images/metaRabbit.png' width={80} height={80} />
        <FooterContent>사업자 내용</FooterContent>
      </FooterContentWrapper>
    </FooterWrapper>
  );
}

export default MainFooter;

const FooterWrapper = styled.footer`
  background-color: gray;
  height: 200px;
  border-radius: 20px 20px 0px 0px;
`;
const FooterContentWrapper = styled.div`
  padding: 20px;
  display: flex;
`;
const FooterContent = styled.div`
  padding-left: 100px;
`;

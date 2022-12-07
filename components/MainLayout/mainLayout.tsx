import { Fragment } from 'react';
import styled from 'styled-components';
import MainFooter from './mainFooter';
import MainHeader from './mainHeader';

function MainLayout(props: any) {
  return (
    <Fragment>
      <MainHeader />
      <Main>{props.children}</Main>
      <MainFooter />
    </Fragment>
  );
}
export default MainLayout;

const Main = styled.main`
  margin-top: 100px;
  height: 100vh;
`;

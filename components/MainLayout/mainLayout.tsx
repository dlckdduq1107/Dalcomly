import { Fragment } from 'react';
import styled from 'styled-components';
import { MainLayoutProps } from '../../types/props';
import MainFooter from './mainFooter';
import MainHeader from './mainHeader';

function MainLayout({ children }: MainLayoutProps) {
  return (
    <Fragment>
      <MainHeader />
      <Main>{children}</Main>
      <MainFooter />
    </Fragment>
  );
}
export default MainLayout;

const Main = styled.main`
  margin-top: 100px;
  height: 100%;
`;

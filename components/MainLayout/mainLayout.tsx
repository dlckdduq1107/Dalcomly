import { Fragment } from 'react';
import MainHeader from './mainHeader';

function MainLayout(props: any) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}
export default MainLayout;

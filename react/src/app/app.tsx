import { IgrNavDrawer, IgrNavDrawerItem, IgrNavDrawerModule } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrNavDrawerModule.register();

export default function App() {
  const navigate = useNavigate();
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();

  return (
    <>
      <div className={classes("column-layout master-view-container")} key={uuid()}>
        <div className={classes("row-layout group")} key={uuid()}>
          <IgrNavDrawer open="true" position="relative" className={classes("nav-drawer")} key={uuid()}>
            <div style={{display: 'contents'}} onClick={() => navigate('/input-group')} key={uuid()}>
              <IgrNavDrawerItem key={uuid()}>
                <div slot="content" key={uuid()}>Input group</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate('/other-inputs')} key={uuid()}>
              <IgrNavDrawerItem key={uuid()}>
                <div slot="content" key={uuid()}>Other inputs</div>
              </IgrNavDrawerItem>
            </div>
          </IgrNavDrawer>
          <div className={classes("view-container")} key={uuid()}>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}

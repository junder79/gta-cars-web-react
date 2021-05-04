import logo from './logo.svg';
import 'antd/dist/antd.css';
import '../src/assets/css/estilos.css';

import { Menu } from 'antd';
import { OrderedListOutlined, FolderAddOutlined, LogoutOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Importar componentes 
import Formulario from './componentes/formulario';
import Listar from './componentes/listar';
import Login from './views/login';
function App() {
  const { SubMenu } = Menu;

  return (
    <Router>
      <Menu mode="horizontal" className="color-navbar">
        <Menu.Item key="anadir" style={{ color: '#FFF' }} icon={<FolderAddOutlined />}>
          <Link to="/nuevo" style={{ color: '#FFF' }}>Añadir</Link>
        </Menu.Item>
        <Menu.Item key="listar" style={{ color: '#FFF' }} icon={<OrderedListOutlined />}>
          <Link to="/listar" style={{ color: '#FFF' }}>Listar</Link>
        </Menu.Item>
        <Menu.Item key="login"  style={{ color: '#FFF' }}  icon={<LogoutOutlined />}>
          <Link to="/login" style={{ color: '#FFF' }}>Login</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route path="/nuevo" >
          <Formulario />
        </Route>
        <Route path="/listar">
          <Listar />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Formulario />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Importar componentes 
import Formulario from './componentes/formulario';
import Listar from './componentes/listar';

function App() {
  const { SubMenu } = Menu;

  return (
    <Router>
      <Menu mode="horizontal">
        <Menu.Item key="anadir" icon={<MailOutlined />}>
          <Link to="/nuevo">Añadir</Link>
        </Menu.Item>
        <Menu.Item key="listar" icon={<MailOutlined />}>
        <Link to="/listar">Listar</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route path="/nuevo">
          <Formulario />
        </Route>
        <Route path="/listar">
          <Listar />
        </Route>
        <Route path="/">
          <Formulario />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

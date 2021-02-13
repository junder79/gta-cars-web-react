import logo from './logo.svg';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

// Importar componentes 
import Formulario from './componentes/formulario';


function App() {
  const { SubMenu } = Menu;

  return (
    <div className="App">
      <Menu mode="horizontal">
        <Menu.Item key="anadir" icon={<MailOutlined />}>
          Añadir
        </Menu.Item>
        <Menu.Item key="listar" icon={<MailOutlined />}>
          Listar
        </Menu.Item>
      </Menu>
      <Formulario />
    </div>
  );
}

export default App;

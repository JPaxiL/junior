import { Nav } from '@components/Nav';
import { Header } from '@components/Header';
import { Content } from '@components/Content';
import { Breadcrumb } from '@components/Breadcrumb';
import { Card } from '@components/Card';
import { DataTable } from '@components/DataTable';

const Provider = () => {
  const breadcrumb = [
    {
      label: 'Inicio',
      href: '#'
    },
    {
      label: 'Proveedores',
      href: '#'
    }
  ];

  return (
    <>
      <Nav />
      <Header />
      <Content>
        <Breadcrumb list={breadcrumb} />
        <h1 className="Content__title">Proveedores</h1>
        <Card>
          <DataTable />
        </Card>
      </Content>
    </>
  );
};

export { Provider };

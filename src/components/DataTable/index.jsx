import { Button } from '@components/Button';
import { Filter } from '@components/Filter';
import { Table } from '@components/Table';
import './DataTable.css';

const DataTable = () => {
  return (
    <div className="DataTable">
      <div className="DataTable__header">
        <Button>Nuevo</Button>
        <Filter />
      </div>
      <Table />
    </div>
  );
};

export { DataTable };

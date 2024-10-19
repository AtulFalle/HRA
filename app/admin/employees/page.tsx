import { EmployeeList } from '@/components/admin/employee-list';

export default function Employees() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Employee Management</h1>
      <EmployeeList />
    </div>
  );
}
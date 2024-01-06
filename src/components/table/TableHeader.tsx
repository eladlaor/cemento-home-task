import { TableHeaderProps } from "../../types";

export default function TableHeader({ columns }: TableHeaderProps) {
  return (
    <div className="virtualized-table-header">
      {columns.map((column) => (
        <div
          key={column.id}
          className="virtualized-table-header-cell"
        >
          {column.title}
        </div>
      ))}
    </div>
  );
}
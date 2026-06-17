import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import './TableWidget.css';

export default function TableWidget({ title, actionText, actionLink, data }) {
  return (
    <div className="card table-widget">
      <div className="table-header">
        <h3 className="table-title">{title}</h3>
        {actionText && (
          <Link to={actionLink || '#'} className="table-action">
            {actionText}
          </Link>
        )}
      </div>
      <div className="table-content">
        <table className="data-table">
          <thead>
            <tr>
              <th>Organization</th>
              <th className="text-right">Total Labels</th>
              <th className="text-right">Published</th>
              <th className="text-right">Draft</th>
              <th className="text-right">Deleted</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>
                  <div className="org-cell">
                    <Building2 size={16} className="org-icon" />
                    <span>{row.organization}</span>
                  </div>
                </td>
                <td className="text-right font-medium">{row.total.toLocaleString()}</td>
                <td className="text-right">{row.published.toLocaleString()}</td>
                <td className="text-right">{row.draft.toLocaleString()}</td>
                <td className="text-right">{row.deleted.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

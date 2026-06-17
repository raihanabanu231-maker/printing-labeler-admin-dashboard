import { Link } from 'react-router-dom';
import './ListWidget.css';

export default function ListWidget({ title, actionText, actionLink, items }) {
  return (
    <div className="card list-widget">
      <div className="list-header">
        <h3 className="list-title">{title}</h3>
        {actionText && (
          <Link to={actionLink || '#'} className="list-action">
            {actionText}
          </Link>
        )}
      </div>
      <div className="list-content">
        {items.map((item, index) => (
          <div key={index} className="list-item">
            <div className="item-icon-wrapper">
              <item.icon size={16} style={{ color: item.iconColor }} />
            </div>
            <div className="item-details">
              <div className="item-title">{item.title}</div>
              <div className="item-subtitle">{item.subtitle}</div>
            </div>
            <div className="item-right">
              {item.status && (
                <span className={`item-status status-${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              )}
              {item.time && <span className="item-time">{item.time}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

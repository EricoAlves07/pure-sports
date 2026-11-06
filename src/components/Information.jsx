import React from 'react';
import { Link } from 'react-router-dom';

const Information = ({ title, informations = [] }) => {
  return (
    <div className="flex flex-column gap-3">
      <h4
        style={{
          color: '#FFFFFF',
          fontSize: '18px',
          fontWeight: 600,
          marginBottom: '8px',
        }}
      >
        {title}
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="flex flex-column gap-3">
        {informations.map((item, index) => {
          const isExternal =
            item.link && (item.link.startsWith('http://') || item.link.startsWith('https://'));
          return (
            <li key={index}>
              {isExternal ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#FFFFFF', fontSize: '16px', opacity: 0.9 }}
                >
                  {item.text}
                </a>
              ) : (
                <Link
                  to={item.link || '#'}
                  style={{ color: '#FFFFFF', fontSize: '16px', opacity: 0.9 }}
                >
                  {item.text}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Information;


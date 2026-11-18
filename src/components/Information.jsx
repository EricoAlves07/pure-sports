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
          const hasLink = Boolean(item.link && item.link !== '#');
          const isExternalHttp =
            hasLink && (item.link.startsWith('http://') || item.link.startsWith('https://'));
          const isProtocolLink =
            hasLink && (item.link.startsWith('tel:') || item.link.startsWith('mailto:'));
          const itemStyle = { color: '#FFFFFF', fontSize: '16px', opacity: 0.9 };

          return (
            <li key={index}>
              {!hasLink ? (
                <span style={itemStyle}>{item.text}</span>
              ) : isExternalHttp ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  style={itemStyle}
                >
                  {item.text}
                </a>
              ) : isProtocolLink ? (
                <a href={item.link} style={itemStyle}>
                  {item.text}
                </a>
              ) : (
                <Link to={item.link} style={itemStyle}>
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


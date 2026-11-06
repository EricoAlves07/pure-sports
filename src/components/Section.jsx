import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  const isCentered = titleAlign === 'center';
  const isExternal =
    link?.href && (link.href.startsWith('http://') || link.href.startsWith('https://'));

  return (
    <section className="my-5">
      <div
        className={`flex align-items-center mb-4 ${
          isCentered && !link ? 'justify-content-center' : 'justify-content-between'
        }`}
      >
        <h2
          style={{
            color: 'var(--dark-gray-2)',
            fontSize: '24px',
            fontWeight: 700,
            textAlign: titleAlign,
            flex: isCentered ? 1 : 'initial',
          }}
        >
          {title}
        </h2>

        {link && (
          <div>
            {isExternal ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--primary)',
                  fontSize: '18px',
                  fontWeight: 500,
                }}
                className="flex align-items-center gap-2"
              >
                <span>{link.text}</span>
                <i className="pi pi-arrow-right" style={{ fontSize: '14px' }} />
              </a>
            ) : (
              <Link
                to={link.href}
                style={{
                  color: 'var(--primary)',
                  fontSize: '18px',
                  fontWeight: 500,
                }}
                className="flex align-items-center gap-2"
              >
                <span>{link.text}</span>
                <i className="pi pi-arrow-right" style={{ fontSize: '14px' }} />
              </Link>
            )}
          </div>
        )}
      </div>

      <div>{children}</div>
    </section>
  );
};

export default Section;

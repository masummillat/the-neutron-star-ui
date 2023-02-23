import { ReactNode } from 'react';
import { LinkProps } from './NeutronEditor.types';

const Link: React.FC<LinkProps> = ({ contentState, entityKey, children }) => {
  const { url } = contentState.getEntity(entityKey).getData();
  return (
    <a className="text-blue-700" href={url}>
      {children}
    </a>
  );
};

export default Link;

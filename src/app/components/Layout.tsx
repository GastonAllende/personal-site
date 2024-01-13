import React, { ReactNode } from 'react';

const Layout: React.FC<{children?: ReactNode, className?: string}> = ({ children, className = '' }) => {
	return (
		<div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
			{children}
		</div>
	);
};

export default Layout;

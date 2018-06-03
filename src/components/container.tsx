import React from 'react';

export interface ContainerProps {
    children: any;
}
export const Container = ({ children }: ContainerProps) => (
    <div className="section">
        <div className="container">
            {children}
        </div>
    </div>
);

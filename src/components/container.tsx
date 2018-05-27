import React from 'react';

interface ContainerProps {
    children: any;
}
export default ({ children }: any) => (
    <div style={{ margin: "3rem auto", maxWidth: 600 }}> {children} </div>
);

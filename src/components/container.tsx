import React from 'react';

export const Container = (props: any) => (
    <div className="section">
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Container

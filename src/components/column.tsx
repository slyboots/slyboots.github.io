import React from 'react';

export interface ColumnProps {
    children?: any;
    isFourFifths?: boolean;
    isThreeQuarters?: boolean;
    isTwoThirds?: boolean;
    isThreeFifths?: boolean;
    isHalf?: boolean;
    isTwoFifths?: boolean;
    isOneThird?: boolean;
    isOneQuarter?: boolean;
    isOneFifth?: boolean;
}

export const Columns = (props: any) => {
    return (
        <div className="columns">
            {props.children}
        </div>
    )
}

export const Column = (props: ColumnProps) => {
    let columnClasses = "column ";
    props.isFourFifths && (columnClasses = columnClasses + "is-four-fifths")
    props.isThreeQuarters && (columnClasses = columnClasses + "is-three-quarters")
    props.isTwoThirds && (columnClasses = columnClasses + "is-two-thirds")
    props.isThreeFifths && (columnClasses = columnClasses + "is-three-fifths")
    props.isHalf && (columnClasses = columnClasses + "is-half")
    props.isTwoFifths && (columnClasses = columnClasses + "is-two-fifths")
    props.isOneThird && (columnClasses = columnClasses + "is-one-third")
    props.isOneQuarter && (columnClasses = columnClasses + "is-one-quarter")
    props.isOneFifth && (columnClasses = columnClasses + "is-one-fifth")

    return (
        <div className={`${columnClasses}`}>
            {props.children}
        </div>
    )
}

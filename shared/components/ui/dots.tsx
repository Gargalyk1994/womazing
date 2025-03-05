'use client'

import React, {
    ComponentPropsWithRef,
} from "react";


type PropType = ComponentPropsWithRef<"button">;

export const DotButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props;

    return (
        <button type="button" className="dream-of-team__bullitt" {...restProps} >
            <svg
                width="30.000000"
                height="4.000000"
                viewBox="0 0 30 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <rect
                    id="Rectangle1"
                    width="30.000000"
                    height="4.000000"
                    fill="#D1D1D1"
                    fillOpacity="1.000000"
                />
            </svg>
        </button>
    );
};

import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const SpinnerLoader = ({ loading }) => {
    return (
        <>
                <div className="loader-overlay">
                    <ThreeCircles
                        height={100}
                        width={100}
                        color="#6cd27e"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="three-circles-rotating"
                        secondaryColor="#FF6600"
                        strokeWidth={4}
                        strokeWidthSecondary={2}
                    />
                </div>
        </>
    );
};

export default SpinnerLoader;
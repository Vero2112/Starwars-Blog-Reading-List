import React from "react";

const Loading = () => {
    return (
        <div className="container fluid ">
            <div className="position-absolute top-50 start-50 translate-middle">
                <div className="text-center">
                    <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;
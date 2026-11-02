import { useState, CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
    let [loading, setLoading] = useState(true);

    return (
        <div className="sweet-loading">
            <ClipLoader
                color={"#ffffff"}
                loading={loading}
                size={120}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loading;
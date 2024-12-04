import "../index.css";   

export default function Loading() {
    return (
        <div className="loading-screen">
            <div className="ring">
                <div className="load-text">
                    LOADING
                </div>
                <span></span>
            </div>
        </div>
    )
}
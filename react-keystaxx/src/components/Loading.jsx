import "../index.css";   

export default function Loading() {
    return (
        <div className="loading-screen">
            <div className="ring">
                <div className="load-text">
                    LOADING
                </div>
                <div className="load-span">
                    <span></span>
                </div>
            </div>
        </div>
    )
}
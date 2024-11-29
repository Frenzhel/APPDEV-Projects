export default function Showcase() {
    const reviews = [
        { name: "John Doe", feedback: "Amazing craftsmanship! Love my new keyboard." },
        { name: "Jane Smith", feedback: "Great service and exceptional quality!" },
        { name: "Chris Lee", feedback: "The best keyboards I've ever used." },
    ]

    return (
        <div>
        <h2>Showcase</h2>
        {reviews.map((review, index) => (
            <div key={index}>
            <h4>{review.name}</h4>
            <p>{review.feedback}</p>
            </div>
        ))}
        </div>
    )
}  
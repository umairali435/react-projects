export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img
                    className="main-image"
                    src={props.props.img.src}
                    alt={props.props.img.alt}
                />
            </div>
            <div className="info-container">
                <img
                    className="marker"
                    src="../images/marker.png"
                    alt="map marker icon"
                />
                <span className="country">{props.props.country}</span>
                <a href={props.props.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{props.props.title}</h2>
                <p className="trip-dates">{props.props.dates}</p>
                <p className="entry-text">{props.props.text}</p>
            </div>

        </article>
    )
}
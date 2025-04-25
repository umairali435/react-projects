export default function Contacts(
    { image: img, name, phone, email }
) {
    console.log(img)
    return (
        <div className="card">
            <div>
                <img className="card-image" src={img} alt="Location" />
            </div>
            <h1>{name}</h1>
            <p className="date-para">{phone}</p>
            <p className="date-para">{email}</p>
        </div>
    )
}
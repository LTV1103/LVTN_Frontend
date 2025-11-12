import '../Card/card.styles.css'

export default function Card({ imgUrl, courseName, description, price, level }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {imgUrl && <img src={imgUrl} className="card-img-top" alt={courseName} />}
      <div className="card-body">
        <h5 className="card-title">{courseName}</h5>
        <p className="card-text">{description}</p>
        <p>Level: {level}</p>
        <p>Price: {price} VND</p>
      </div>
    </div>
  );
}

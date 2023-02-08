export default function ShowCard({cartoon}) {

    return(
        <div className="card">
            <h3>{cartoon.title}</h3>
            <img src={cartoon.image} alt={cartoon.title} />
            <p>{cartoon.genre}  {cartoon.year}</p>
            <p>{cartoon.rating}</p>
            <details>
                <summary>Info</summary>
                <p>Runtime: {cartoon.runtime_in_minutes}</p>
                <p>Episodes: {cartoon.episodes}</p>
                <p>Creator: {cartoon.creator}</p>
            </details>
        </div>

    )
}
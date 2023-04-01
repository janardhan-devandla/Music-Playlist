import './index.css'

const MusicPalyList = props => {
  const {playList, deleteButton} = props
  const {id, name, genre, imageUrl, duration} = playList
  const deleteHandler = () => {
    deleteButton(id)
  }
  return (
    <li>
      <div className="music-list-container">
        <div className="image-container">
          <img src={imageUrl} alt=" track" className="music-image" />
          <div className="play-container">
            <p>{name}</p>
            <p className="genre" key={genre}>
              {genre}
            </p>
          </div>
        </div>
        <div className="delete-container">
          <p>{duration}</p>
          <button type="button" data-testid="delete" onClick={deleteHandler}>
            ❎
          </button>
        </div>
      </div>
    </li>
  )
}

export default MusicPalyList

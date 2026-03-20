// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem, onClickingThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachItem

  const styleToBeApplied = isActive ? '' : 'blur-thumbnail'

  const clickingImg = () => {
    onClickingThumbnail(id)
  }

  return (
    <li>
      <button onClick={clickingImg} type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${styleToBeApplied}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

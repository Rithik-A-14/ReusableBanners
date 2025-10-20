import './index.css'

// Component to render a banner card
const Banner = props => {
  // Destructure the bannerCards prop
  const {bannerCards} = props
  // Destructure individual properties from bannerCards
  const {headerText, description, className} = bannerCards

  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banner

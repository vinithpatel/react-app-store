// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickButton = () => {
    onClickTab(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button
        className={`tab-item-button ${activeTabClassName}`}
        type="button"
        onClick={onClickButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

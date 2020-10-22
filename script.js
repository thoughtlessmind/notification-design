/**
 * Creates HTML Node with given type
 * @param {String} HTMLTag HTML Element type
 * @param {String} classNames Classnames which needs to be applied to element
 * @param {STring} innerHTML innerHTML of the element
 * @returns HTML Element
 */
const divCreator = (HTMLTag, classNames, innerHTML) => {
  let d = document.createElement(HTMLTag)
  if (classNames) d.className = classNames
  if (innerHTML) d.innerHTML = innerHTML
  return d
}

const NOTIFICATION_TYPE = "review"

/**
 * Create and return element left side container of the notification
 */
const leftSideContainer = () => {
  const leftContainer = divCreator("div", "leftContainer")
  const imageElement = divCreator("img", "imageStyle")
  imageElement.setAttribute(
    "src",
    "https://s3.wasabisys.com/influencelogo/logo/fire-icon.png"
  )
  leftContainer.appendChild(imageElement)
  return leftContainer
}

const rightSideContainer = () => {
  let div = divCreator("div", "rightSideContainer")
  return div
}

const footerContainer = () => {
  let div = divCreator("div", "footerContainer")
  return div
}

const rightSideTextCreator = (type) => {
  const styleClass = ["live", "bulk", "custom"].includes(type)
    ? "singleLineContent"
    : "twoLineContent"
  let bulkNotif = divCreator("div", "lineWrapper")
  let lineElement = divCreator("p", styleClass)
  let span1Element = divCreator("span", "span1Element", "2000 people")
  let span2Element = divCreator(
    "span",
    "span2Element",
    "signed up for influence in last 2 days"
  )
  lineElement.appendChild(span1Element)
  lineElement.appendChild(span2Element)
  bulkNotif.appendChild(lineElement)
  rightSideElement.appendChild(bulkNotif)
}

const checkSVG = `<svg width="10" height="10" viewBox="0 0 524 524" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>.cls-1 {
        fill: #5d93fe;
    }
    .cls-2 {
        fill: #5d93fe;
        filter: url(#a);
    }
    .cls-3 {
        fill: #fff;
        fill-rule: evenodd;
    }</style>
<filter id="a" x="51" y="51" width="423" height="423" filterUnits="userSpaceOnUse">
<feOffset in="SourceAlpha" result="offset"></feOffset>
<feGaussianBlur result="blur" stdDeviation="2.236"></feGaussianBlur>
<feFlood flood-opacity=".06" result="flood"></feFlood>
<feComposite in2="blur" operator="in" result="composite"></feComposite>
<feBlend in="SourceGraphic" result="blend"></feBlend>
</filter>
</defs>
<circle class="cls-1" cx="262" cy="262" r="262"></circle>
<circle class="cls-2" cx="262" cy="262" r="207"></circle>
<path class="cls-3" transform="translate(-640 -238)" d="m833.89 478.95 81.132 65.065a9 9 0 0 1 1.391 12.652l-25.651 31.985a9 9 0 0 1-12.652 1.39l-81.132-65.065a9 9 0 0 1-1.391-12.652l25.651-31.985a9 9 0 0 1 12.652-1.39z"></path>
<path class="cls-3" transform="translate(-640 -238)" d="m846.25 552.7 127.39-144.5a9.721 9.721 0 0 1 13.35-1.047l29.679 24.286a8.9 8.9 0 0 1 1.08 12.862l-127.39 144.5a9.721 9.721 0 0 1-13.35 1.047l-29.675-24.286a8.9 8.9 0 0 1-1.087-12.861z"></path>
</svg>`

const footerCreator = (type) => {
  /**
   * Create and returns Branding element
   * @param {String} verifiedBy Verified by text
   * @param {String} brandName Brand name text
   * @param {URL} poweredByLink Powered by link
   */
  const brandingElementCreator = (verifiedBy, brandName, poweredByLink) => {
    const brandingContainer = divCreator("p", "brandContainer")
    const verifiedBySpan = divCreator("span", "verifiedBySpan", verifiedBy)
    const checkSpan = divCreator("span", "checkIcon", checkSVG)
    const brandNameSpan = divCreator("a", "brandNameSpan", brandName)
    brandNameSpan.setAttribute("href", poweredByLink)
    brandNameSpan.setAttribute("target", "_blank")
    brandNameSpan.setAttribute("rel", "no follow")
    brandingContainer.appendChild(verifiedBySpan)
    brandingContainer.appendChild(checkSpan)
    brandingContainer.appendChild(brandNameSpan)
    return brandingContainer
  }

  /**
   * Create and return timie element
   * @param {String} time Time text for recent notif
   */
  const timeElementCreator = (time) => {
    const timeElementContainer = divCreator("p", "timeELementContainer", time)
    return timeElementContainer
  }

  /**
   * Main parent container of footer.
   */
  let mainContainer = divCreator("div", "footerWrapper")
  let brandingElement = brandingElementCreator(
    "by",
    "influence",
    "https://useinfluence.co"
  )

  if (type === "recent") {
    let timeElement = timeElementCreator("9 min(s) ago")
    mainContainer.style = "justify-content: space-between"
    mainContainer.appendChild(timeElement)
  } else {
    mainContainer.style = "justify-content: center"
  }

  mainContainer.appendChild(brandingElement)
  footerElement.appendChild(mainContainer)
}

const mainDiv = divCreator("div", "influence-social-proof")
const mainFlexContainer = divCreator("div", "mainFlexContainer")
const rightFlexContainer = divCreator("div", "rightFlexContainer")

const rightSideElement = rightSideContainer()
const footerElement = footerContainer()
const leftSideElement = leftSideContainer()

rightSideTextCreator(NOTIFICATION_TYPE)
footerCreator(NOTIFICATION_TYPE)

rightFlexContainer.appendChild(rightSideElement)
rightFlexContainer.appendChild(footerElement)

mainFlexContainer.appendChild(leftSideElement)
mainFlexContainer.appendChild(rightFlexContainer)

mainDiv.appendChild(mainFlexContainer)
document.body.appendChild(mainDiv)

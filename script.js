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

const ACTIVE_NOTIFICATION_TYPE = "review"

const starSVG = `<svg xmlns="http://www.w3.org/2000/svg" style="width:10px" version="1.1" viewBox="0 0 24 24">
<g class="toast-svg-fill" fill="#105efb" fill-opacity="1">
    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
</g>
</svg>`


const imageAssets = {
  googleLogo: "https://storage.googleapis.com/influence-197607.appspot.com/googlereview.png",
  googleYellowStar: `<svg focusable="false" style="width:15px; fill:#ffc136" viewBox="0 0 24 24" aria-hidden="true"><path transform="scale(1.33, 1.33)" d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path></svg>`,
  trustPilotLogo: "https://api.useinfluence.co/images/trustpilot.png",
  trustPilotStarSVG: `<svg style="width:10px" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
  <g class="toast-svg-fill" fill="#105efb" fill-opacity="1">
      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
  </g>
</svg>`,
  stampedLogo: "https://api.useinfluence.co/images/stamped.png",
  stampedStar: "https://app.useinfluence.co/static/media/stamped.3eca7fdc.png",
}

/**
 * Create and return element left side container of the notification
 */
const leftSideContainer = (type, imageSrc) => {
  const leftContainer = divCreator("div", `leftContainer ${ACTIVE_NOTIFICATION_TYPE}-leftContainer`)
  return leftContainer
}

const rightSideContainer = () => {
  let div = divCreator("div", `rightSideContainer ${ACTIVE_NOTIFICATION_TYPE}-rightSideContainer`)
  return div
}

const footerContainer = () => {
  let div = divCreator("div", `footerContainer ${ACTIVE_NOTIFICATION_TYPE}-footerContainer`)
  return div
}


const leftSideCreator = (type) => {
  if (type === "live") {
    const animationWrapper = divCreator("div", "animation-wrapper")
    const animationClass = divCreator("div", "animationClass")
    const circle_2 = divCreator("div", "circle-2")

    animationClass.appendChild(circle_2)
    animationWrapper.appendChild(animationClass)
    leftSideElement.appendChild(animationWrapper)
  } else {
    const imageElement = divCreator("img", `imageStyle ${type + "-imageStyle"}`)
    imageElement.setAttribute(
      "src",
      "https://s3.wasabisys.com/influencelogo/logo/fire-icon.png"
    )
    leftSideElement.appendChild(imageElement)
  }
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
    const brandingContainer = divCreator("p", `brandContainer ${type + "-brandContainer"}`)
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

  const customSlugBtnCreator = () => {
    const slugBtn = divCreator("button", "customSlugBtn", "slug")
    return slugBtn
  }

  const reviewStarCreator = (fromAppType, starCount) => {
    const reviewMainContainer = divCreator("div", `reviewMainContainer ${fromAppType}-reviewMainContainer`)
    const reviewTypeLogo = divCreator("img", `reviewTypeLogo ${fromAppType}-reviewTypeLogo`)
    const starIconContainer = divCreator("span", "starIconContainer")

    if (fromAppType === "facebook") {
      reviewTypeLogo.setAttribute("src", "https://api.useinfluence.co/images/recurly.png")
      const fbRecommendIcon = divCreator("img", "fbRecommendIcon")
      fbRecommendIcon.setAttribute("src", "https://app.useinfluence.co/static/media/fbRecommendation.88544430.png")
      starIconContainer.appendChild(fbRecommendIcon)
    } else if (fromAppType === "capterra") {
      reviewTypeLogo.setAttribute("src", "https://s3.wasabisys.com/influencelogo/logo/capterra_logo.svg")
      let totalStars = ""
      for (let i = 0; i < starCount; i++) {
        totalStars += starSVG
      }
      starIconContainer.innerHTML = totalStars
    } else if (fromAppType === "trustpilot") {
      reviewTypeLogo.setAttribute("src", imageAssets.trustPilotLogo)
      let totalStars = ""
      for (let i = 0; i < starCount; i++) {
        totalStars += imageAssets.trustPilotStarSVG
      }
      starIconContainer.innerHTML = totalStars
    } else if (fromAppType === "stamped") {
      reviewTypeLogo.setAttribute("src", imageAssets.stampedLogo)
      let totalStars = ""
      for (let i = 0; i < starCount; i++) {
        totalStars += imageAssets.trustPilotStarSVG
      }
      starIconContainer.innerHTML = totalStars
    } else {
      reviewTypeLogo.setAttribute("src", imageAssets.googleLogo)
      let totalStars = ""
      for (let i = 0; i < starCount; i++) {
        totalStars += imageAssets.googleYellowStar
      }
      starIconContainer.innerHTML = totalStars
    }

    reviewMainContainer.appendChild(reviewTypeLogo)
    reviewMainContainer.appendChild(starIconContainer)
    return reviewMainContainer
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
  } else if( type === "custom"){
    let slugBtn = customSlugBtnCreator()
    mainContainer.style = "justify-content: space-between; flex-direction:row-reverse"
    mainContainer.appendChild(slugBtn)
  } else if(type === "review"){
    let reviewStars = reviewStarCreator('stamped', 3)
    mainContainer.style = "justify-content: space-between"
    mainContainer.appendChild(reviewStars)
  } else {
    mainContainer.style = "justify-content: center"
  }

  mainContainer.appendChild(brandingElement)
  footerElement.appendChild(mainContainer)
}

const influenceSocialProof = divCreator("div", "influence-social-proof")
const parentContentWrapper = divCreator("div", "parentContentWrapper")
const rightFlexContainer = divCreator("div", "rightFlexContainer")

const rightSideElement = rightSideContainer()
const footerElement = footerContainer()
const leftSideElement = leftSideContainer()

leftSideCreator(ACTIVE_NOTIFICATION_TYPE)
rightSideTextCreator(ACTIVE_NOTIFICATION_TYPE)
footerCreator(ACTIVE_NOTIFICATION_TYPE)

rightFlexContainer.appendChild(rightSideElement)
rightFlexContainer.appendChild(footerElement)

parentContentWrapper.appendChild(leftSideElement)
parentContentWrapper.appendChild(rightFlexContainer)

influenceSocialProof.appendChild(parentContentWrapper)
document.body.appendChild(influenceSocialProof)

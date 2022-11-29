 const IsLandingPage=(location)=>{
    const landingPages=['/']
    const isLandingPage= landingPages.some((page)=>{
            return page===location
    })
    return isLandingPage
}
export default IsLandingPage
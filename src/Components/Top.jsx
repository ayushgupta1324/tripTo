import Styles from  "./Top.module.css"

function Top ()
{

    // const  Styles  = {
    //     backgroundImage:` url('https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg')`,
    //     height: "300px"
    // }

    const headingStyle={
        color:"white"
    }

    
    return(
        <div>
            <div className={Styles.TopSection} >
            <h2 style={headingStyle}>India's Largest Community of Travellers</h2>
            </div>
            {/* <img src="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg" alt="" /> */}

        </div>
    )
}

export default Top;
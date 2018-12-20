import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LogoUser from '../../containers/LogoUser'

const randomBgStyles = [{
    "background": "linear-gradient(45deg, #92baac 45px, transparent 45px)64px 64px,\nlinear-gradient(45deg, #92baac 45px, transparent 45px,transparent 91px, #e1ebbd 91px, #e1ebbd 135px, transparent 135px),\nlinear-gradient(-45deg, #92baac 23px, transparent 23px, transparent 68px,#92baac 68px,#92baac 113px,transparent 113px,transparent 158px,#92baac 158px)",
    "backgroundColor": "#e1ebbd",
    "backgroundSize": "128px 128px"
},
{
    "background": "linear-gradient(135deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),\nlinear-gradient(225deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px",
    "backgroundColor": "#708090",
    "backgroundSize": "64px 128px"
},
{
    "backgroundColor": "hsl(34, 53%, 82%)",
    "backgroundImage": "repeating-linear-gradient(45deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px,\n  hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px,\n  hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px,\n  hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px,\n  hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px,\n  hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 120px, hsla(197, 62%, 11%, 0.5) 120px, hsla(197, 62%, 11%, 0.5) 140px\n  ),\nrepeating-linear-gradient(135deg, transparent 5px, hsla(197, 62%, 11%, 0.5) 5px, hsla(197, 62%, 11%, 0.5) 10px,\n  hsla(5, 53%, 63%, 0) 10px, hsla(5, 53%, 63%, 0) 35px, hsla(5, 53%, 63%, 0.5) 35px, hsla(5, 53%, 63%, 0.5) 40px,\n  hsla(197, 62%, 11%, 0.5) 40px, hsla(197, 62%, 11%, 0.5) 50px, hsla(197, 62%, 11%, 0) 50px, hsla(197, 62%, 11%, 0) 60px,\n  hsla(5, 53%, 63%, 0.5) 60px, hsla(5, 53%, 63%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 70px, hsla(35, 91%, 65%, 0.5) 80px,\n  hsla(35, 91%, 65%, 0) 80px, hsla(35, 91%, 65%, 0) 90px, hsla(5, 53%, 63%, 0.5) 90px, hsla(5, 53%, 63%, 0.5) 110px,\n  hsla(5, 53%, 63%, 0) 110px, hsla(5, 53%, 63%, 0) 140px, hsla(197, 62%, 11%, 0.5) 140px, hsla(197, 62%, 11%, 0.5) 160px\n)"
},
{
    "background": "radial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%),\nradial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%),\nradial-gradient(circle closest-side at 40% 22%, #d35 45%, rgba(221,51,85,0) 46%),\nradial-gradient(circle closest-side at 60% 22%, #d35 45%, rgba(221,51,85,0) 46%),\nradial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221,51,85,0) 31%),\n\nradial-gradient(circle closest-side at 60% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px,\nradial-gradient(circle closest-side at 40% 43%, #b03 26%, rgba(187,0,51,0) 27%) 50px 50px,\nradial-gradient(circle closest-side at 40% 22%, #d35 45%, rgba(221,51,85,0) 46%) 50px 50px,\nradial-gradient(circle closest-side at 60% 22%, #d35 45%, rgba(221,51,85,0) 46%) 50px 50px,\nradial-gradient(circle closest-side at 50% 35%, #d35 30%, rgba(221,51,85,0) 31%) 50px 50px",
    "backgroundColor": "#b03",
    "backgroundSize": "100px 100px"
}]

export default class ImgBanner extends Component {
    static propTypes = {
        urlImg: PropTypes.string
    }

    render() {
        let randomNumber = Math.floor(Math.random() * randomBgStyles.length);
        return (
            <div className="ProfileCanopy-header u-bgUserColor" style={{ "marginTop": "0px" }}>
                <div className="ProfileCanopy-headerBg" style={randomBgStyles[randomNumber]}></div>
                <LogoUser />
            </div>
        )
    }
}

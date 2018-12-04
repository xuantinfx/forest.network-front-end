const initState = {
    name: "Anyonetube",
    bio:'Imagine if you couldn’t watch the videos you love. We support copyright reform with an Article 13 that works for everyone.',
    hashtag:'SaveYourInternet',
    location:'San Bruno, CA',
    url:'https://www.youtube.com/yt/saveyourinternet/',
    joinDate: new Date('12/3/2018, 12:09:10 AM').getTime(),
    
    withCountLink: 'https://twitter.com/YouTube/media',
    withCountNum: 8862,
    
    mediaBoxImg: [
        "./template/DtCNMu_WwAEJ-TR.jpg_thumb",
        "./template/DtBw8f3WoAEaHeu.jpg_thumb",
        "./template/Ds7kdgZXcAUrGvp.jpg_thumb",
        "./template/Ds88vRxWkAEC5Nx.jpg_thumb",
        "./template/Ds7kdgZXcAUrGvp.jpg_thumb",
        "./template/Dss2HY-WoAET5qi.jpg_thumb"
    ]

}

export default (state = initState, action) => {
    switch(action){
        default:
            return state;
    }
}
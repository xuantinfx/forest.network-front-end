const initialState = {
    userSmallListItems: [
        {
            profileLink: 'https://twitter.com/Twitter',
            avatarSrc: './template/zRim1x6M_bigger.jpg',
            fullname: 'Twitter',
            username: 'Twitter'
        },
        {
            profileLink: 'https://twitter.com/katyperry',
            avatarSrc: './template/9_8nIK5M_bigger.jpg',
            fullname: 'KATY PERRY',
            username: 'katyperry'
        },
        {
            profileLink: 'https://twitter.com/Twitter',
            avatarSrc: './template/zRim1x6M_bigger.jpg',
            fullname: 'Twitter',
            username: 'Twitter'
        },
        {
            profileLink: 'https://twitter.com/BarackObama',
            avatarSrc: './template/5g0FC8XX_bigger.jpg',
            fullname: 'Barack Obama',
            username: 'BarackObama'
        },
        {
            profileLink: 'https://twitter.com/BarackObama',
            avatarSrc: './template/5g0FC8XX_bigger.jpg',
            fullname: 'Văn Vi',
            username: 'vivan1401'
        },
    ],
    trends: [
        {
            trendLink: 'https://twitter.com/search?q=%22Funes%20Mori%22&amp;src=tren',
            trendName: 'Funes Mori',
            trendStats: 15.1,
        },
        {
            trendLink: 'https://twitter.com/hashtag/%D8%B5%D8%A8%D8%A7%D8%AD_%D8%A7%D9%84%D8%AE%D9%85%D9%8A%D8%B3?src=tren',
            trendName: '#صباح_الخميس',
            trendStats: 12.6,
        },
        {
            trendLink: 'https://twitter.com/search?q=%E6%80%A7%E6%A0%BC-16%E3%82%BF%E3%82%A4%E3%83%97%E6%80%A7%E6%A0%BC%E8%A8%BA%E6%96%AD&amp;src=tren',
            trendName: '性格-16タイプ性格診断',
            trendStats: 35.7,
        },
        {
            trendLink: 'https://twitter.com/search?q=%22Funes%20Mori%22&amp;src=tren',
            trendName: 'Funes Mori',
            trendStats: 15.1,
        },
        {
            trendLink: 'https://twitter.com/search?q=%22Funes%20Mori%22&amp;src=tren',
            trendName: 'Funes Mori',
            trendStats: 15.1,
        },
        {
            trendLink: 'https://twitter.com/search?q=%22Funes%20Mori%22&amp;src=tren',
            trendName: 'Funes Mori',
            trendStats: 15.1,
        },
        {
            trendLink: 'https://twitter.com/search?q=%22Funes%20Mori%22&amp;src=tren',
            trendName: 'Funes Mori',
            trendStats: 15.1,
        },
        {
            trendLink: 'https://twitter.com/search?q=%22Funes%20Mori%22&amp;src=tren',
            trendName: 'Funes Mori',
            trendStats: 15.1,
        }
    ]
}

export default (state = initialState, action)=>{
    switch(action){
        default:
            return state;
    }
}
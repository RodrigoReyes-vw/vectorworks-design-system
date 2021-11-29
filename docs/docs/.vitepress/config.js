const ourStorySidebar = [{text: 'Our Story', link: '/about/our-story'}]
module.exports = {
    title:'Blue Steel design system',
    themeConfig:{
        nav:[
            {text: 'Home', link: '/'},
            {text: 'Contact', link: '/contact'},
            {text: 'About', link: '/about/'},
        ],
        sidebar: {
            '/about/': ourStorySidebar
        }
        
    }
}
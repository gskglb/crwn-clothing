const INITIAL_STATE = {
    sections : [
        {
            id : 1,
            title : 'Hats',
            imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
            linkURL : 'shop'
        },
        {
            id : 2,
            title : 'Jackets',
            imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
            linkURL : ''

        },
        {
            id : 3,
            title : 'Sneackers',
            imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            linkURL : ''

        },
        {
            id : 4,
            title : 'Women',
            imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            linkURL : ''

        },
        {
            id : 5,
            title : 'Men',
            imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            linkURL : ''
        },
                                                       
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default :
            return state
    }
}

export default directoryReducer
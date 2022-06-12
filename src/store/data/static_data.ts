export interface IDataTopics {
    title: string,
    subtitle: string,
    isbn13: string,
    price: string,
    image: string,
    url: any

}
export const dataTopics = [
    {
        "title": "Dissapearance of Emile Zola",
        "subtitle": "Architecting, Developing, and Administering MongoDB",
        "isbn13": "9781484206485",
        "price": "$32.04",
        "image": "https://itbook.store/img/books/9781484206485.png",
        "url":  require('../../assets/images/Featured_Titles/Dissapearance of Emile Zola.jpg')
    },
    {
        "title": "Fatherhood",
        "subtitle": "A complete guide to dealing with Big Data using MongoDB",
        "isbn13": "9781484211830",
        "price": "$47.11",
        "image": "https://itbook.store/img/books/9781484211830.png",
        "url":  require('../../assets/images/Featured_Titles/Fatherhood.jpg')
        
    },
    {
        "title": "How To Be The Best In Time And Space",
        "subtitle": "Covers MongoDB version 3.0",
        "isbn13": "9781617291609",
        "price": "$32.10",
        "image": "https://itbook.store/img/books/9781617291609.png",
        "url":  require('../../assets/images/Featured_Titles/How To Be The Best In Time And Space.jpg')
    }
]
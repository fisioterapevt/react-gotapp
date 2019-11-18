
export default class gotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could  not fetch ${url}` +
             `, received ${res.status}`);
        }
        return await res.json();
    }
    getAllCharacters(){
        console.log("sjsjssss")
        return  this.getResource(`/characters?page=7&pageSize=10`);
    }
    getAllBooks(){
        return  this.getResource(`/books`);
    }
    getAllHouses(){
        return  this.getResource(`/houses`);
    }

    getCharacter(id){
        return  this.getResource(`/characters/${id}`)
    }
    getBook(id){
        return  this.getResource(`/books/${id}`)
    }
    getHouse(id){
        return  this.getResource(`/houses/${id}`)
    }

    
}

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
    async getAllCharacters(){
        const res = await this.getResource(`/characters?page=7&pageSize=10`);
        return  res.map(this._transformCharacter);
    }
    async getAllBooks(){
        const res = await this.getResource(`/books`);
        return res.map(this._transformBook);
    }
    async getAllHouses(){
        const res = await this.getResource(`/houses`);
        return res.map(this._transformHouse);
    }

    async getCharacter(id){
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    async getBook(id){
        const book = await this.getResource(`/books/${id}`);
        return  this._transformBook(book);
    }
    async getHouse(id){
        const house = await this.getResource(`/houses/${id}`);
        return  this._transformHouse(house);
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            fromReleaseDate: book.fromReleaseDate,
            toReleaseDate:book.toReleaseDate
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words    
        }
    }
}
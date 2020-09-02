export default class CvService {
    constructor(){
        this._apiBase = 'http://localhost:8092';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    getWork() {
        return this.getResource(`/work/`);
    }

    getSkills() {
        return this.getResource(`/skill/`)
    }

}
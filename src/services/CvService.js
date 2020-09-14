export default class CvService {
    constructor() {
        this._apiBase = 'http://localhost:8092';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    getWork = async () => {
        return this.getResource(`/work/`);
    }

    getSkills = async () => {
        return this.getResource(`/skill/`)
    }

    getTrainings = async () => {
        return this.getResource(`/training/`)
    }
}
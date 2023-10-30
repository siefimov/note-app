import http from './http.common';

class GenericService<T> {
    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll(): Promise<T[]> {
        return http.get(`/${this.endpoint}`);
    }

    get(id: number): Promise<T> {
        return http.get(`/${this.endpoint}/${id}`);
    }

    create(data: T): Promise<T> {
        return http.post(`/${this.endpoint}`, data);
    }

    update(id: number, data: T): Promise<T> {
        return http.put(`/${this.endpoint}/${id}`, data);
    }

    delete(id: number): Promise<void> {
        return http.delete(`/${this.endpoint}/${id}`);
    }

    deleteAll(): Promise<void> {
        return http.delete(`/${this.endpoint}`);
    }

    findByTitle(title: string): Promise<T[]> {
        return http.get(`/${this.endpoint}?title=${title}`);
    }
}

export default GenericService;

import http from './http.api';

class GenericService<T> {
    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    async getAll(): Promise<T[]> {
        const response = await http.get(`/${this.endpoint}`);
        return response.data;
    }

    async getOne(id: number): Promise<T> {
        const response = await http.get(`/${this.endpoint}/${id}`);
        return response.data;
    }

    async create(data: T): Promise<T> {
        return await http.post(`/${this.endpoint}`, data);
    }

    async update(id: string | undefined, data: T): Promise<T> {
        return await http.put(`/${this.endpoint}/${id}`, data);
    }

    async delete(id: string | undefined): Promise<void> {
        await http.delete(`/${this.endpoint}/${id}`);
    }

    deleteAll(): Promise<void> {
        return http.delete(`/${this.endpoint}`);
    }

    async findByTitle(title: string): Promise<T[]> {
        const response = await http.get(`/${this.endpoint}?title=${title}`);
        return response.data;
    }
}

export default GenericService;

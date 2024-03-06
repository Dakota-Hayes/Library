const token = '5d7d2bf2a4c7cf5c8a8aaa84f8343ece85f99d53b57702d6'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`https://library-72k7.onrender.com//api/books/all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://library-72k7.onrender.com//api/books/create`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }
        return await response.json()
    },

    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://library-72k7.onrender.com//api/books/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id:string[]) => {
        const response = await fetch(`https://library-72k7.onrender.com//api/books/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    }
}
import instance from "./instance"

export const read = async (id) => {
    const url = `/myinfo/${id}`
    return instance.get(url)
}

export const create = async (project) => {
    const url = `/myinfo`
    return instance.post(url, project)
}


export const remove = async (id) => {
    const url = `/myinfo/${id}`
    return instance.delete(url)
}


export const update = async (id) => {
    const url = `/myinfo/${id}/edit`
    return instance.patch(url)
}
import instance from "./instance"

export const list = async () => {
    const url = "/skills"
    return instance.get(url)
}

export const read = async (id) => {
    const url = `/skills/${id}`
    return instance.get(url)
}

export const create = async (skill) => {
    const url = `/skills`
    return instance.post(url, skill)
}


export const remove = async (id) => {
    const url = `/skills/${id}`
    return instance.delete(url)
}


export const update = async (skill) => {
    const url = `/skills/${skill._id}/edit`
    return instance.patch(url, skill)
}
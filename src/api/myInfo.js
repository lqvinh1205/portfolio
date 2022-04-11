import instance from "./instance"

export const read = async (id) => {
    const url = `/myinfo`
    return instance.get(url)
}

export const create = async (project) => {
    const url = `/myinfo`
    return instance.post(url, project)
}


export const remove = async (id) => {
    const url = `/myinfo`
    return instance.delete(url)
}


export const update = async (info) => {
    const url = `/myinfo`
    return instance.patch(url, info)
}
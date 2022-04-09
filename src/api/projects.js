import instance from "./instance"

export const list = async () => {
    const url = "/projects"
    return instance.get(url)
}

export const read = async (id) => {
    const url = `/projects/${id}`
    return instance.get(url)
}

export const create = async (project) => {
    const url = `/projects`
    return instance.post(url, project)
}


export const remove = async (id) => {
    const url = `/projects/${id}`
    return instance.delete(url)
}


export const update = async (project) => {
    const url = `/projects/${project._id}/edit`
    return instance.patch(url, project)
}
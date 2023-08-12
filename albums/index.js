const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const albumsPath = path.join(__dirname, "albums.json");

const getAll = async () => {
const data = await fs.readFile(albumsPath)

return JSON.parse(data);
}

const getById = async(id) => {
    const albums = await getAll();
    const result = albums.find(item => item.id === id);

    return result || null;
}

const add = async ({title}) => {
    const albums = await getAll();
    const newAlbum = {
        id: nanoid(),
        title,
    }

    albums.push(newAlbum);
    await fs.writeFile(albumsPath, JSON.stringify(albums, null, 2));

    return newAlbum;
}

const updateById = async(id, data) => {
    const albums = await getAll();
    const index = albums.findIndex(item => item.id === id);
    if(index === -1) {
        return null;
    }

    albums[index] = {id, ...data};
    await fs.writeFile(albumsPath, JSON.stringify(albums, null, 2));

    return albums[index]
}

const removeById = async(id) => {
    const albums = await getAll();
    const index = albums.findIndex(item => item.id ===id);
    if(index === -1) {
        return null;
    }
    const [result] = albums.splice(index, 1);
    await fs.writeFile(albumsPath, JSON.stringify(albums, null, 2));
    return result;
}
 
module.exports = {
    getAll,
    getById,
    add,
    updateById,
    removeById,
}
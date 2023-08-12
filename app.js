const albums = require("./albums");


const invokeAction = async ({action, userId, id, title}) => {
switch(action) {
case "list":
    const allAlbums = await albums.getAll();
    console.log(allAlbums);
    break;
    case "getById":
        const oneAlbum = await albums.getById(id);
        console.log(oneAlbum);
        break;
        case "add":
            const newAlbum = await albums.add({title});
            console.log(newAlbum);
            break;
            case "updateById":
                const updateAlbum = await albums.updateById(id, {title});
                console.log(updateAlbum);
                break;
                case "removeById":
                    const deleteAlbum = await albums.removeById(id);
                    console.log(deleteAlbum)
                    break;
    default:
        console.log("Unknown action")
}
}

//  invokeAction({action: "list"})
// invokeAction({action: "getById", id: 1})
// invokeAction({action: "add", title: "worm"})
// invokeAction({action: "updateById", id: "3Qjst9aJVaFwAYCNWkTVX", title: "Ward"})
invokeAction({action: "removeById", id: "3Qjst9aJVaFwAYCNWkTVX"})

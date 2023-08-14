// const yargs = require("yargs");
// const{hideBin} = require("yargs/helpers")
const {program} = require("commander")

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

// //  invokeAction({action: "list"})
// // invokeAction({action: "getById", id: 1})
// // invokeAction({action: "add", title: "worm"})
// // invokeAction({action: "updateById", id: "3Qjst9aJVaFwAYCNWkTVX", title: "Ward"})
// invokeAction({action: "removeById", id: "3Qjst9aJVaFwAYCNWkTVX"})

// const arr = hideBin(process.argv);
// const {argv} = yargs(arr);
// // console.log(argv)
// invokeAction(argv)

program
.option("--action <type>")
.option("--id <type>")
.option("--title <type>")

program.parse();

const options = program.opts();
invokeAction(options)
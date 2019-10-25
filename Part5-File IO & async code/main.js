const { Rectangle, Color } = require("scenegraph");
const fs = require("uxp").storage.localFileSystem;

function createFrame(selection, paddingV, paddingH) {
    const textNode = selection.items[0];
    const textBounds = textNode.boundsInParent;

    const padding = 10;

    let shape = new Rectangle();
    shape.width = textBounds.width + 2*paddingH;
    shape.height = textBounds.height + 2*paddingV;
    shape.stroke = new Color("blue");

    selection.insertionParent.addChild(shape);
    shape.placeInParentCoordinates({x: 0, y: 0},
      {x: textBounds.x - paddingH, y: textBounds.y - paddingV});
}

function myPluginCommand(selection) {
    return fs.getFileForOpening()
    .then(function (file) {
        console.log("User chose file: " + file);
        return file.read();
    })
    .then(function (text) {
        var json = JSON.parse(text);
        createFrame(selection, json.padding.vertical, json.padding.horizontal);
    });
}

module.exports = {
    commands: {
        myPluginCommand
    }
};
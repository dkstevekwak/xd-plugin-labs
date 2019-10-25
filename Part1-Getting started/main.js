const { Rectangle, Color } = require("scenegraph");

function myPluginCommand(selection) {

    const newElement = new Rectangle();
    newElement.width = 100;
    newElement.height = 50;
    newElement.fill = new Color("#f00");

    selection.insertionParent.addChild(newElement);
    newElement.moveInParentCoordinates(100, 100);

}

module.exports = {
    commands: {
        myPluginCommand
    }
};
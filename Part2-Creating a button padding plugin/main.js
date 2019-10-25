const { Rectangle, Color } = require("scenegraph");

function myPluginCommand(selection) {

    const textNode = selection.items[0];
    textNode.textTransform = "uppercase";
    const textBounds = textNode.boundsInParent;

    const padding = 30;

    let shape = new Rectangle();
    shape.width = textBounds.width + 2 * padding;
    shape.height = textBounds.height + 2 * padding;
    shape.stroke = new Color("blue");

    selection.insertionParent.addChild(shape);
    shape.placeInParentCoordinates({ x: 0, y: 0 },
        { x: textBounds.x - padding, y: textBounds.y - padding });

}

module.exports = {
    commands: {
        myPluginCommand
    }
};
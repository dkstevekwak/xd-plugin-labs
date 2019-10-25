const { Rectangle, Color } = require("scenegraph");

let dialog;

function createDialog() {
    dialog = document.createElement("dialog");
    dialog.innerHTML = `
        <style>
        .content {
            display: flex;
        }
        </style>
        <form method="dialog">
            <h1 class="h1">Create Button Frame</h1>
            <hr>
            <div class="content">
                <input type="text" uxp-quiet="true" id="txtV"
                  placeholder="V padding" />
                <input type="text" uxp-quiet="true" id="txtH"
                  placeholder="H padding" />
            </div>
            <footer>
                <button id="cancel" type="reset" uxp-variant="primary">Cancel</button>
                <button id="ok" type="submit" uxp-variant="cta">OK</button>
            </footer>
        </form>`;
    dialog.querySelector("#cancel").onclick = () => dialog.close("reasonCanceled");

    document.appendChild(dialog);
}

function createFrame(selection, paddingV, paddingH) {
    const textNode = selection.items[0];
    textNode.textTransform = "uppercase";
    const textBounds = textNode.boundsInParent;

    let shape = new Rectangle();
    shape.width = textBounds.width + 2 * paddingH;
    shape.height = textBounds.height + 2 * paddingV;
    shape.stroke = new Color("blue");

    selection.insertionParent.addChild(shape);
    shape.placeInParentCoordinates({ x: 0, y: 0 },
        { x: textBounds.x - paddingH, y: textBounds.y - paddingV });
}

function myPluginCommand(selection) {
    if (!dialog) createDialog();

    return dialog.showModal().then(function (result) {
        if (result !== "reasonCanceled") {
            createFrame(selection, Number(dialog.querySelector("#txtV").value),
                Number(dialog.querySelector("#txtH").value));
        }
    });
}

module.exports = {
    commands: {
        myPluginCommand
    }
};
function myPluginCommand(selection) {
    let dialog = document.createElement("dialog");
    dialog.innerHTML = "Hello, Adobe MAX!";
    document.appendChild(dialog);
    return dialog.showModal()
}

module.exports = {
    commands: {
        myPluginCommand
    }
};

const yourHtml =
    `<style>
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
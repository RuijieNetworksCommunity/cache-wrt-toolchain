const core = require("@actions/core");
const fetchCache = require("./fetch");
const saveCache = require("./save");

async function run() {
    try {
        const isPost = core.getState('isPost');

        if (isPost) {
            await saveCache();
        } else {
            core.saveState('isPost', 'true');
            await fetchCache();
        }
    } catch (error) {
        core.setFailed(`Action failed with error: ${error.message}`);
    }
}

run();
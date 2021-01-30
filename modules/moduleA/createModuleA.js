
import { dataModuleA } from "./resources/dataModuleA.js";

export function createModuleA() {
    var wrapperModuleA = document.getElementById("moduleA");
    var content = Object.keys(dataModuleA).map(data => {
        return data
    })
    wrapperModuleA.innerHTML = `${content}`
}

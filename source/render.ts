import { ChrateFunction, ChrateNode } from "./chrate.js"

function render(blobs: ChrateNode): void {
	let element = renderNodes(blobs)
	let elementRoot = "root"
	let root = document.getElementById(elementRoot)
	if(root != null) {
		root.innerHTML = ""
		root.appendChild(element)
	} else {
		console.error(`Could not find element by id "${elementRoot}"`);
	}
}

function renderNodes(blobs: ChrateNode): HTMLElement {
	let element = blobs.code()
	return element
}

export default render
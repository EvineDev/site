function render(blobs) {
	let node = renderNodes(blobs)

	let root = document.getElementById("root")
	root.appendChild(node)
}

function renderNodes(blobs) {
	let nodes = []
	for(let blob of blobs.nodes) {
		if (typeof blob == "object") {
			let r = renderNodes(blob)
			nodes.push(r)
		} else {
			nodes.push(blob)
		}
	}

	let node = blobs.code(...nodes)
	return node
}

export default render
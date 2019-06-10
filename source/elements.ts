import { chrate, ChrateFunction, ChrateNode } from "./chrate.js"

function node(x: HTMLElement | string): Text | HTMLElement {
	let result = typeof x === "object" ? x : document.createTextNode(x)
	return result
}

type Route = { [id: string]: ChrateNode }

let e = {
	h1: function(x: string): ChrateNode {
		let c = chrate(() => {
			let g = document.createElement("h1")
			g.appendChild(node(x))
			return g
		})
		return c
	},
	div: function(...x: ChrateNode[]): ChrateNode {
		let c = chrate(() => {
			let g = document.createElement("div")
			for(let e of x) {
				g.appendChild(e.code())
			}
			return g
		})
		return c
	},
	br: function(): ChrateNode {
		let c = chrate(() => {
			let g = document.createElement("br")
			return g;
		})
		return c
	},
	p: function(x: string): ChrateNode {
		let c = chrate(() => {
			let g = document.createElement("p")
			g.appendChild(node(x))
			return g
		})
		return c
	},
	code: function(x: string): ChrateNode {
		let c = chrate(() => {
			let g = document.createElement("code")
			g.appendChild(node(x))
			return g
		})
		return c
	},
	span: function(x: string): ChrateNode {
		let c = chrate(() => {
			let g = document.createElement("span")
			g.appendChild(node(x))
			return g
		})
		return c
	},
	a: function(url: string, text: string): ChrateNode {
		let c = chrate(() => {
			let g = document.createElement("a")
			g.appendChild(document.createTextNode(text))
			g.setAttribute("href", url)

			let absUrl = new URL(g.href)
			let windowUrl = new URL(window.location.toString());
			if (absUrl.origin != windowUrl.origin) {
				g.setAttribute("noreferrer", "")
				g.setAttribute("noopener", "")
				g.setAttribute("target", "_blank")
			} else {
				g.onclick = event => {
					event.preventDefault()
					window.history.pushState({}, "", url)
					// Rerun the tree
				}
			}

			return g
		})
		return c
	},
	delayLoad: function(url: string): ChrateNode {
		let c = chrate(() => {
			let g = document.createElement("code")
			fetch(url).then(x => {
				return x.text()
			}).then(x => {
				g.appendChild(document.createTextNode(x))
			})
			return g;
		})
		return c
	},
	//route: function(routes: Route): ChrateNode {
	//	let f = () => {
	//		let url = new URL(window.location.toString())
	//		let path = url.pathname.substring(1)
	//		let route = routes[path];
	//		return route ? route : routes["error"]
	//	}
	//	let c = chrate(f)
	//	return c
	//}
}

export default e
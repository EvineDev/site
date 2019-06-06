let e: any = {}

function node(x) {
	let result = typeof x === "object" ? x : document.createTextNode(x)
	return result
}

e.h1 = function(x) {
	let g = document.createElement("h1")
	g.appendChild(node(x))
	return g
}

e.div = function(...x) {
	let g = document.createElement("div")
	for(let e of x) {
		g.appendChild(e)
	}
	return g
}

e.br = function() {
	let g = document.createElement("br")
	return g;
}

e.p = function(x) {
	let g = document.createElement("p")
	g.appendChild(node(x))
	return g
}

e.code = function(x) {
	let g = document.createElement("code")
	g.appendChild(node(x))
	return g
}

e.span = function(x) {
	let g = document.createElement("span")
	g.appendChild(node(x))
	return g
}

e.a = function(url, text) {
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
		//g.onclick =
	}

	return g
}

e.delayLoad = function(url) {
	let g = document.createElement("code")
	fetch(url).then(x => {
		return x.text()
	}).then(x => {
		g.appendChild(document.createTextNode(x))
	})

	return g;
}

e.route = function(routes) {
	let url = new URL(window.location.toString())
	let path = url.pathname.substring(1)
	let route = routes[path];
	return route ? route : routes["error"]
}

export default <any>e
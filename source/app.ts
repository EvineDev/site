// Fix: iis Rewrite rule is funky on ending "/"

import e from "./elements.js"
import render from "./render.js"

//let request = fetch("api/eple.txt")
//let text = request.then(x => x.text())
//text.then(x => console.log(x))

//let index = e.div([
//	e.h1("bah"),
//	e.p("here be text"),
//	e.a("/dog", "Dog"),
//	e.br(),
//	e.a("http://google.com", "google"),
//	e.br(),
//	e.delayLoad("/api/eple.txt")
//])
//
//let dog = e.div([
//	e.h1("Good boy"),
//	e.p("a little dog barking"),
//	e.a("/", "Home")
//])
//
//let error = e.div([
//	e.h1("Not found"),
//	e.p("How did you get here")
//])
//
//let site = e.route({
//	"": index,
//	"dog": dog,
//	"error": error
//})

function chrate(f, ...nodes) {
	return {
		code: f,
		nodes: nodes
	}
}


let index = chrate(e.div,
	chrate(e.h1, "bah"),
	chrate(e.p, "here be text"),
	chrate(e.a, "/dog", "Dog"),
	chrate(e.br),
	chrate(e.a, "http://google.com", "google"),
	chrate(e.br),
	chrate(e.delayLoad, "/api/eple.txt")
)

// Stuff should be evaluated here
//render(site)
render(index)
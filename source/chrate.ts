export type ChrateFunction =
	(() => HTMLElement)

export type ChrateNode = {
	code: ChrateFunction
}

export function chrate(f: ChrateFunction): ChrateNode {
	let result: ChrateNode = {
		code: f
	}
	return result
}
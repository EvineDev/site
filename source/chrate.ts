export type ChrateFunction<T> =
	((...args: T[]) => ChrateNode<T>) |
	((args: T) => ChrateNode<T>) |
	(() => ChrateNode<T>)

export type ChrateNodeArg<T> = (ChrateNode<any> | string)[]

export type ChrateNode<T> = {
	code: ChrateFunction<T>,
	nodes: ChrateNodeArg<T>
}
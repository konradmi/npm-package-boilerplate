// the goal is to tree shake that in ts-tree-shaking-esm-module so that this package can be used on the server

console.log(document)
export const browserFunction = () => {
    (document as any).test = {}
}

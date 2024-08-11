const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.rewriter({
    "/api/*":"/$1",
    "/imagenes/:resource/:ud/show":"/:resource/:id"
}))

server.use(router)

server.listen(3000, () => {
    console.log("JSON server is runnin")
})

module.exports = server;
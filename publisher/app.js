const app = require("express")();
const seneca = require("seneca");
app.get("/", (request, response) => {
    response.send("<h2>s1!</h2>");
    seneca({ log: 'silent' }).client(process.env.RECEIVER_PORT, process.env.RECEIVER_HOSTNAME).act('callS2:1, y:Hello s2', seneca.util.print);
});
app.listen(3001);
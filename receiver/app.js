const app = require("express")();
const seneca = require("seneca");
const message = '';

seneca({ log: 'silent' }).add({ callS2: 1 }, (msg, reply) => {
    reply({ y: msg.y })
    console.log(msg.y);
}).listen(process.env.PUBLISHER_PORT);

app.get("/", (request, response) => {
    response.send("<h2>message:" + "kekw" + "</h2>");
});

app.listen(3002);
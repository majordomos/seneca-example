const app = require("express")();
const seneca = require("seneca");
app.get("/", function(request, response) {
    response.send("<h2>s1!</h2>");
    seneca({ log: 'silent' }).client(4003, 'receiver-app').act('callS2:1, y:Hello s2', seneca.util.print);
});
app.listen(3001);
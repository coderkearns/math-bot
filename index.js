const Snap = require("@coderkearns/snap-discord")

const client = new Snap({
    token: process.env.TOKEN,
    prefix: "math!",
    plugins: [require("./run.plugin"), require("./list.plugin")]
})

client.run()

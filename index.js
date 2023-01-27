const express = require("express");
const { userRoute } = require("./Routes/User.route")

const { connection } = require("./Config/db")
var cors = require("cors")
let app = express()
app.use(cors({
    origin:"*"
}))
app.get("/", (req, res) => {
    res.send("welcome to mock14")
})
app.use(express.json())
app.use("/user", userRoute)

app.listen(8080, async () => {
    try {
        await connection
    } catch (error) {
        console.log(error.message)
    }
})
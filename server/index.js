const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const postRoutes = require("./api/post/postRoutes")
const userRoutes = require("./api/user/userRoutes")
var cors = require("cors")
const path = require("path")

app.use(cors())
app.use(express.static("uploads"))
// Use body-parser middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json())

app.get("/api/countries", (req, res) => {
    const key = req.query?.country_secret_key

    if (key === "mysecretkey123") {
        const countries = [
            { code: "US", name: "United States" },
            { code: "CA", name: "Canada" },
            { code: "GB", name: "United Kingdom" }
            // Add more countries as needed
        ]
        res.json(countries).status(200)
    } else {
        res.json({ message: "Forbidden: Invalid secret key" }).status(500)
    }
})

// Use body-parser middleware to parse incoming requests with URL-encoded payloads
app.use(bodyParser.urlencoded({ extended: true }))
// Error handling middleware
app.use((err, req, res, next) => {
    // Default error response
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({
        status: "error",
        message: err.message
    })

    // Log the error
    console.error(err)
})

app.use("/api", postRoutes)
app.use("/api", userRoutes)

app.listen(8000, () => console.log(`🚀 Server ready at http://localhost:8000/`))

import { connectionDB } from "../../DB/connection.js";
import * as routers from "../Modules/index.routes.js";

export const initiateApp = (app, express) => {
    const port = process.env.PORT || 500;
    app.use(express.json());
    app.use(express.static('Public'))
    app.use(express.urlencoded({ extended: true }))
    connectionDB()
    
    app.use("/url", routers.urlRouter);

    // app.get('/', (req, res) => res.send('Hello World!'))
    // app.all("*", (req, res, next) => {
    //     res.json({ message: "404 Not Found URL" });
    // });
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
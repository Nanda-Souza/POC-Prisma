import "express-async-errors";
import express, {json} from "express";
import cors from "cors";
import routes from "./routes/index.js";


const app = express();
app.use(json());
app.use(cors());
app.use(routes);

app.get('/health', (req, res) => {
    res.send('Ok')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runing on PORT:${PORT} `));

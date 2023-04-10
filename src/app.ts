import "express-async-errors";
import express, {json} from "express";
import cors from "cors";


const app = express();
app.use(express.json())

app.get('/health', (req, res) => {
    res.send('Ok')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runing on PORT:${PORT} `));

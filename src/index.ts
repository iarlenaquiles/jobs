require('dotenv').config();
import { App } from "./app"

const PORT = process.env.PORT || 3001

new App().server.listen(PORT);
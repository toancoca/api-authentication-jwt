import 'express-async-errors'
import express from 'express'
import { AppDataSource } from './data-source'
import { errorMiddleware } from './middlewares/error'
import routes from './routes';
import cors from 'cors';

AppDataSource.initialize().then(() => {
	const app = express();
	const PORT = process.env.PORT || 8000;

	app.use(express.json());
	app.use(cors());

	app.use(routes);

	app.use(errorMiddleware);
	return app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	})
})

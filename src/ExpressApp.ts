import express, { json, Router } from 'express'
import { errorHandler } from './app/express/v1/shared/handler/ErrorHandler'
import { config } from './context/shared/infrastructure/config'
import patientRouter from './app/express/v1/patient/routers/patient.route'

const app = express()
app.use(json())
app.use(express.urlencoded({ extended: true }))

const router = Router()
patientRouter(router)
router.use(errorHandler)

app.use('/api/v1', router)
app.use(errorHandler)
app.listen(config.express.port, () => {
    console.log(`Server is running on port ${config.express.port}`)
})

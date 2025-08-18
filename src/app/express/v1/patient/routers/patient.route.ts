import { Router } from 'express'
import { ApiPatientController } from '../controllers/ApiPatientController'
import { InMemoryPatientRepository } from '../../../../../context/patient/infrastructure/persitence/InMemoryPatientRepository'

export default function (router: Router) {
    const patientController = new ApiPatientController({
        patientRepository: new InMemoryPatientRepository(),
    })
    router.get('/patient', (req, res) => patientController.index(req, res))
    router.post('/patient', (req, res) => patientController.save(req, res))
}

import { Request, Response } from 'express'
import { GetController } from '../../shared/controller/GetController'
import { PostController } from '../../shared/controller/PostController'
import { PatientRepository } from '../../../../../context/patient/domain/PatientRepository'
import { Patient } from '../../../../../context/patient/domain/Patient'
import { PatientSave } from '../../../../../context/patient/application/save/PatientSave'
import { Criteria } from '../../../../../context/shared/domain/criteria/Criteria'
import { Filters } from '../../../../../context/shared/domain/criteria/Filters'
import { Order } from '../../../../../context/shared/domain/criteria/Order'
import { PatientMatch } from '../../../../../context/patient/application/match/PatientMatch'
import { Operators } from '../../../../../context/shared/domain/criteria/Operators'
import { QueryStringCriteriaParser } from '../../../../../context/shared/domain/QueryStringCriteriaParser'

interface ApiPatientControllerProps {
    patientRepository: PatientRepository
}

export class ApiPatientController implements GetController, PostController {
    private readonly patientRepository: PatientRepository
    constructor(props: ApiPatientControllerProps) {
        ;({ patientRepository: this.patientRepository } = props)
    }

    public async save(request: Request, response: Response): Promise<void> {
        const { body } = request
        const patient = Patient.fromPrimitives(body)
        const patientSaver = new PatientSave(this.patientRepository)
        await patientSaver.run(patient)
        response.status(201).json({})
    }

    public async index(request: Request, response: Response): Promise<void> {
        const baseUrl = new URLSearchParams(request.originalUrl)
        const criteria = QueryStringCriteriaParser.parse(baseUrl)
        console.log('criteria', JSON.stringify(criteria, null, 2))
        const patientMatch = new PatientMatch(this.patientRepository)
        const patients = await patientMatch.run(criteria)
        const patientsPrimitives = patients.map((patient: Patient) =>
            patient.toPrimitives()
        )
        response.status(200).json(patientsPrimitives)
    }
}

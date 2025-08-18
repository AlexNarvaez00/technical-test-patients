import { Criteria } from '../../../shared/domain/criteria/Criteria'
import { PatientRepository } from '../../domain/PatientRepository'

export class PatientMatch {
    constructor(private readonly patientRepository: PatientRepository) {}

    public async run(criteria: Criteria) {
        return await this.patientRepository.match(criteria)
    }
}

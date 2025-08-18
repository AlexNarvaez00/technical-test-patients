import { Criteria } from '../../shared/domain/criteria/Criteria'
import { Patient } from './Patient'

export interface PatientRepository {
    save(patient: Patient): Promise<void>
    match(criteria: Criteria): Promise<Patient[]>
}

import { Criteria } from '../../../shared/domain/criteria/Criteria'
import { Patient } from '../../domain/Patient'
import { PatientRepository } from '../../domain/PatientRepository'

export class InMemoryPatientRepository implements PatientRepository {
    private patients: Map<string, Patient> = new Map()

    async save(patient: Patient): Promise<void> {
        this.patients.set(patient.id, patient)
    }

    async match(criteria: Criteria): Promise<Patient[]> {
        return Array.from(this.patients.values())
    }
}

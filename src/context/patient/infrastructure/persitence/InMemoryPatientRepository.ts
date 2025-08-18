import { Criteria } from '../../../shared/domain/criteria/Criteria'
import { InMemoryCriteriaParser } from '../../../shared/infrastructure/criteria/InMemoryCriteriaParser'
import { Patient } from '../../domain/Patient'
import { PatientProps } from '../../domain/PatientProps'
import { PatientRepository } from '../../domain/PatientRepository'

export class InMemoryPatientRepository implements PatientRepository {
    private patients: Map<string, Patient> = new Map()

    async save(patient: Patient): Promise<void> {
        this.patients.set(patient.id, patient)
    }

    async match(criteria: Criteria): Promise<Patient[]> {
        const values = Array.from(this.patients.values()).map((patient) =>
            patient.toPrimitives()
        )
        const criteriaParser = new InMemoryCriteriaParser()

        return criteriaParser
            .parse<PatientProps>(criteria, values)
            .map((primitives) =>
                Patient.fromPrimitives({
                    ...primitives,
                    id: primitives.id as string,
                })
            )
    }
}

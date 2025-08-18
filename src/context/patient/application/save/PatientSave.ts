import { Patient } from '../../domain/Patient'
import { PatientRepository } from '../../domain/PatientRepository'

export class PatientSave {
    constructor(private readonly repository: PatientRepository) {}

    public async run(patient: Patient): Promise<void> {
        await this.repository.save(patient)
    }
}

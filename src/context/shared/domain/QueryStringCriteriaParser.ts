import { Criteria } from './criteria/Criteria'
import { Filters, FilterValues } from './criteria/Filters'
import { Order } from './criteria/Order'

export class QueryStringCriteriaParser {
    static parse(url: URLSearchParams) {
        const entries = url.entries()
        const filters = []

        let filter = []
        let index = 0
        for (const entry of entries) {
            const [position, value] = entry
            if (position.includes('filter')) {
                filter[index] = value
            }

            index++

            if (index > 2) {
                index = 0
                filters.push(filter)
                filter = []
            }
        }

        return new Criteria(
            Filters.fromValues(filters as FilterValues),
            Order.none(),
            Number(url.get('skip') ?? '0'),
            Number(url.get('limit') ?? '100')
        )
    }
}

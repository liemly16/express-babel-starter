import Sample from '../models/sample'

export default class SampleController {
    constructor() {
        this.model = Sample;
    }

    async getList() {
        return await this.model.find({

        });
    }

}
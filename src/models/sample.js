import mongoose from 'mongoose';

let Sample = function(){
	var sampleSchema = mongoose.Schema({
		name: String
	});

	return mongoose.model('samples', sampleSchema);
}

export default new Sample();
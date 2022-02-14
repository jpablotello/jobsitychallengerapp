export const orderEspisodesBySeason = (episodes) => {
	var output = []
	episodes.map((value) => {
		let key = value.season - 1;
		if (output[key] == null) output[key] = [];
		output[key].push(value);
	});
	output = output.filter((value) => value.length > 0)

	return output;
}

export const sumOfText = (texts) => {
	let output = "";
	if (texts?.length > 0) {
		const { length } = texts;

		texts.map((item, index) => {
			if (index != 0)
				output += " - " + item;
			else
				output += item;
		})
	}
	return output;
}


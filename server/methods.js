Meteor.methods({
	addProyect(proyect, member1, member2, url) {
		Proyectos.insert({
			text: proyect,
			member1: member1,
			member2: member2,
			url: url,
			createdAt: new Date(),
			score: 0,
			votes: []
		});
	},
	addScore(id, vote) {
		Proyectos.update(id, {
			$push: {
				votes: vote
			}
		})
	},
	scoreProyect(id, score) {
		Proyectos.update(id, {
			$set: {
				score: score
			}
		})
	}

});
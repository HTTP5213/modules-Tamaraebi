export {theShire, buckland, HobbitSettlement};

const theShire = new HobbitSettlement('The Shire', 1601, ['Marcho', 'Blanco']);

const HobbitSettlement = class {
	constructor(name, founding, founders) {
		this.name = name;
		this.founding = founding;
		this.founders = founders;
		this.originalSettlement = { name: 'Eriador', details: eriadorDetails };
	}
};

const buckland = new HobbitSettlement('Buckland', 2340, 'Gorhendad Oldbuck');
const LocalSettings = require("../localSettings.js");

import {cloneJSON} from '../services/index.js'

const Crossover = function(phenotype) {
    phenotype = cloneJSON(phenotype)
    var mate = LocalSettings().population[Math.floor(Math.random() * LocalSettings().population.length)]
    mate = cloneJSON(mate)
    return LocalSettings().crossoverFunction(phenotype, mate)[0]
}

module.exports = Crossover;

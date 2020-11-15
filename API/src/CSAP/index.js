    const geneticAlgorithmConstructor = require('../index.js')
    const fetch = require("node-fetch");
    
    let json = {};

    const csap = function() {
        var mutationFunction = function( phenotype ) {
        return phenotype;
    }

    function crossoverFunction(phenotypeA, phenotypeB) {
        // move, copy, or append some values from a to b and from b to a
        return [ phenotypeA , phenotypeB ]
    }

    var fitnessFunction = function(phenotype) {
        var score = 0
        // use your phenotype data to figure out a fitness score

        var groupPhenotype = 
        [
            {
                students: 6,
                specialStudents: 2,
                code: "CC7P17",
                name: "Ciência da computação",
                category: "Exatas"
            },
            {
                students: 7,
                specialStudents: 2,
                code: "CC8P17",
                name: "Ciencia da computacao",
                category: "Exatas"                
            },
            {
                students: 10,
                specialStudents: 5,
                code: "CC5P18",
                name: "Ciência da computação",
                category: "Exatas"
            }
        ]               

        phenotype = {
            normalSpaces: 7,
            accessibleSpaces: 2,
            code: "F-24",
            name: "Sala de aula",
            assignedGroup: { type: String},
            attributes: [
                {
                    attributeName: "",
                    attributeDisplayName: "",
                    attributeValue: ""
                }
            ]
        };

        for (var i = 0; i < groupPhenotype.length; i++)
        {
            var students = groupPhenotype[i].students;
            var specialStudents = groupPhenotype[i].specialStudents;

            if (phenotype.normalSpaces == students && phenotype.accessibleSpaces == specialStudents)
            {    
                score = 10;
                phenotype.assignedGroup = groupPhenotype[i].code;
                groupFuntion(phenotype);
                break;
            }
            else if (phenotype.normalSpaces == students && phenotype.accessibleSpaces <= specialStudents)
                score = 8;
            else if (phenotype.normalSpaces <= students && phenotype.accessibleSpaces <= specialStudents)
                score = 5;
            else if (phenotype.normalSpaces > students && phenotype.accessibleSpaces > specialStudents)
                score = 0;
        }
        return score
    }

    var groupFuntion = function(phenotype) {
        json = phenotype;
    }    

    var geneticAlgorithm;

    return new Promise (function(resolve, reject) {
        geneticAlgorithm = geneticAlgorithmConstructor({
           mutationFunction: mutationFunction,
           crossoverFunction: crossoverFunction,
           fitnessFunction: fitnessFunction,
           population: [ json ],
           populationSize:100
        });
        if (geneticAlgorithm != null)
            resolve()
        else
           reject()

    }).then(() => {
        for( var i = 0 ; i < 100 ; i++ ) geneticAlgorithm.evolve()
        var best = geneticAlgorithm.best()
        delete best.score
        return best;
    }).catch((error) => {console.error(error);})
}

module.exports = csap;
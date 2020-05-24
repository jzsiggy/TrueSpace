const users = [
  {
    objectID: 1234,
    
    nome: 'João Zsigmond',

    cpf: '475.359.578-11',

    idade: 19,

    probCovid: '23',

    sintomas: ['dorCabeca', 'tosse', 'febre', 'pupilaBranca'],
    
    sintCancer : {
      'Câncer de Pele' : ['pupilaBranca', 'dorCabeca'],
      'Leucemia' : ['febre']
    }
    // :
    // :
    // :
  },
  {
    objectID: 1235,
    
    nome: 'André Weber',

    cpf: '488.432.343-22',

    idade: 15,

    probCovid: '65',

    sintomas: ['dorCabeca', 'tosse', 'febre', 'pupilaBranca', 'coriza', 'tontura', 'cansaco'],
    
    sintCancer : {
      'Câncer de Pele' : ['pupilaBranca', 'dorCabeca', 'cansaco'],
      'Leucemia' : ['febre']
    }
    // :
    // :
    // :
  }
]

export {
  users,
};
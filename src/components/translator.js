const dictionary = [
  { name: 'Aumento do fígado e baço (pós exame)',               id: 'aumentFigBaco' },
  { name: 'Aumento dos Linfonodos (pós exame)',              id: 'aumentLinfonodos' },
  { name: 'Alteração da Coordenação motora',                   id: 'alteracaoCoord' },
  { name: 'Casos de convulsão',                                     id: 'convulsao' },
  { name: 'Visão escurecida',                                     id: 'visaoEscura' },
  { name: 'Vesgueira',                                              id: 'vesgueira' },
  { name: 'Sono profundo, cansaço excessivo',                    id: 'sonoProfundo' },
  { name: 'Paralisia lateral do corpo',                          id: 'paralisiaLat' },
  { name: 'Suór noturno',                                         id: 'suorNoturno' },
  { name: 'Infecção viral',                                          id: 'infeccao' },
  { name: 'Aumento dos gânglios (caroços)',                     id: 'aumentGanglio' },
  { name: 'Irritação no olho',                                  id: 'irritacaoOlho' },
  { name: 'Alteração da visão',                                      id: 'altVisao' },
  { name: 'Grande dificuldade de respirar no sono',               id: 'difRespSono' },
  { name: 'Dor ao urinar',                                           id: 'dorUrina' },
  { name: 'Dor intestinal',                                      id: 'dorIntestino' },
  { name: 'Hematomas no corpo',                                      id: 'hematoma' },
  { name: 'Pressão alta',                                         id: 'pressaoAlta' },
  { name: 'Fraqueza',                                                id: 'fraqueza' },
  { name: 'Aumento dos testículos',                           id: 'aumentTesticulo' },
  { name: 'Incontinência fecal/incapacidade de controle para ir ao banheiro',       id: 'incontFecal' },
  { name: 'Febre',                    id: 'febre' },
  { name: 'Dor de Garganta',          id: 'dorGarganta' },
  { name: 'Tosse',                    id: 'tosse' },
  { name: 'Dor de Cabeça',            id: 'dorCabeca' },
  { name: 'Nariz Escorrendo',         id: 'coriza' },
  { name: 'Cansaço',                  id: 'fadiga' },
  { name: 'Diarreia',                 id: 'diarreia' },
  { name: 'Dificuldade em Respirar',  id: 'difResp' },
  { name: 'Pele Roxa',               id: 'peleRoxa' },
  { name: 'Sangramentos',            id: 'sangAnormal' },
  { name: 'Dor nas Juntas',          id: 'dorOsso' },
  { name: 'Olhos Saltados',          id: 'olhosSaltados' },
  { name: 'Pele Amarelada',          id: 'peleAmarela' },
  { name: 'Olho Amarelado',          id: 'olhoAmarelo' },
  { name: 'Dor no Abdómen',          id: 'dorAbdomem' },
  { name: 'Dor de Ouvido',           id: 'dorOuvido' },
  { name: 'Palidez',                    id: 'palidez' },
  { name: 'Vômitos',                    id: 'vomito' },
  { name: 'Dor de Barriga',             id: 'dorBarriga' },
  { name: 'Sangue na Urina',            id: 'sangueUrina' },
  { name: 'Pupila Esbranquiçada',       id: 'pupilaBranca' },
  { name: 'Perda de Peso',              id: 'perdaPeso' },
  { name: 'Inchaço',                    id: 'inchaco' },
  { name: 'Pele Vermelha',              id: 'peleVermelha' },
]

const translate = (symp) => {
  let name = '';
  dictionary.forEach(item => {
    if (item.id == symp) {
      name = item.name;
    };
  })
  return name;
}

export { translate };
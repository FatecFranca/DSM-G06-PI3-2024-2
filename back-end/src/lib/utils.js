function includeRelations(query) {

    // Por padrão, não inclui nenhum relacionamento
    const include = {}
  
    // Se o parâmentro include estiver na query string
    if(query.include) {
      // Recorta o valor do parâmetro, separando os
      // relacionamentos passados por vírgula
      const relations = query.include.split(',')
  
      // Preenche o includes com as relações informadas
      for(let rel of relations) {
        include[rel] = true
      }
    }
  
    return include
  }
  
  export { includeRelations }
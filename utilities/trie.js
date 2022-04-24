export const makeTrie = (items, iteree) => {
  // each level of the trie has a results field with items that match the query
  const trie = {results: items};

  // map each search term to corresponding item
  const terms = {};
  items.forEach(item => {
    iteree(item).forEach(t => {
      terms[t] = (terms[t] ?? []).concat(item)
    });
  })

  for(let term in terms) {
    let level = trie;
    // for each search term, go down the tree character by character
    for(let i=0; i<term.length; i++) {
      if(!level[term[i]]) {
        level[term[i]] = {}
      }
      level = level[term[i]]

      // for each level of the trie, add corresponding search items to the results field
      terms[term].forEach(item => {
        if(!level.results || !level.results.includes(item)) {
          level.results = (level.results ?? []).concat(item);
        }
      })
    }
  }

  return trie;
}

export const searchTrie = (trie, term) => {
  let level = trie;

  for(let i=0; i<term.length; i++) {
    if(!level[term[i]]) return [];
    level = level[term[i]];
  }

  return level.results;
}
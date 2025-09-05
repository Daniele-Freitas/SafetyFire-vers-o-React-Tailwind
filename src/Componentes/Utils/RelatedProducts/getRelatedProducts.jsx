/**
 * @param {object} currentProduct
 * @param {array} allProducts
 * @param {number} limit
 * @returns {array}
 */

export default function getRelatedProducts(currentProduct, allProducts, limit = 4){
    
    const currentProductTag = currentProduct.type.split(',').map(tag => tag.trim())
    //Pega as tags do produto atual e limpa os espaços em branco.

    const primaryCurrentTag = currentProductTag[0];
    const secondaryCurrentTags = currentProductTag.slice(1);

    const relatedProducts = allProducts
    .filter(p => p.id !== currentProduct.id)
    .map(productToCompare => {
        const tagsToCompare = productToCompare.type.split(',').map(tag => tag.trim())
        const primaryComparedTag = tagsToCompare[0];
        const secondaryComparedTags = tagsToCompare.slice(1);
        //Pega as tags do produto a ser comparado e limpa os espaços em branco.

        let relevanceScore = 0

        if (primaryComparedTag === primaryCurrentTag) {
            relevanceScore += 3;
        }

        secondaryComparedTags.forEach(tag => {
            if (secondaryComparedTags.includes(tag)) {
                relevanceScore++;
            }
        })
        // Conta quantas tags eles têm em comum.


        return {...productToCompare, 
                relevanceScore: relevanceScore}
    })
    const sortedProducts = relatedProducts
    .filter(product => product.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    // 3. Ordena os produtos pela pontuação (do maior para o menor)


    return sortedProducts.slice(0, limit)
    //retorna a lista de produtos relacionados com base na pontuação de relevância,até o limite de 4.
}


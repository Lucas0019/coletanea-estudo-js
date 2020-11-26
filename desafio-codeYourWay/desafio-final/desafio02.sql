-- Categorias em promoção

-- Uma determinada loja online deseja realizar uma grande promoção, 
-- porém devido a grande escassez de produtos gerado pela pandemia do 
-- coronavírus essa mesma loja precisa saber quais são as categorias 
-- que podem ou não entrar em promoção para não haver problemas com o estoque. 
-- O seu trabalho será exibir o nome de cada uma das categorias, em ordem alfabética,
--  que possuem uma quantidade de produtos maior ou igual a 10.000.

order by categoria.nome
produto.quantidade >= 10000
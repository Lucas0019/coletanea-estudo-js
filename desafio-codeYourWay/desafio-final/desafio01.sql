

-- select users -> encomenda from china
SELECT local_origem.id_cliente
FROM encomenda
INNER JOIN local_origem ON encomenda.id_local_origem=local_origem.id
WHERE id_local_origem = 4;

 SELECT id_cliente
 FROM encomenda
 INNER JOIN local_origem
 WHERE id_local_origem = 4;
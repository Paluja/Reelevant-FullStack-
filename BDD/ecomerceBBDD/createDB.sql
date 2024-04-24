-- Tabla prods
--     ->id autoincrement pk not null
--     ->nombre
--     ->precio
--     ->stock
--     ->descripcion
--     ->img
--     ->categoriaId foreing key


-- categoria
--     ->id autoincrement pk (categoriaId)
--     ->nombre


-- Usuarios
--     ->id autoincrement pk not null
--     ->isAdmin
--     ->nombre 
--     ->apellido
--     ->correo
--     ->tlf
--     "->type (enum)"


    -- order_line
    --     -> id
    --     ->cantidad
    --     ->productoId
    --     ->subtotal
--         ->order_id


-- order
--     ->id
--     ->userId
--     ->fecha 
--     ->estado
--     ->total
package repo

import models.Producto
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ProductosRepository:  JpaRepository<Producto, Long>
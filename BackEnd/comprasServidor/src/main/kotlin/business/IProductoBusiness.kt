package business

import models.Producto

interface IProductoBusiness {
    fun list(): List<Producto>
    fun load(idProducto: Long): Producto
    fun save(producto: Producto): Producto
    fun remove(idProducto: Long)
}
package business

import error.BusinessException
import error.NotFoundException
import models.Producto
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import repo.ProductosRepository
import java.util.*

@Service
class ProductoBusiness: IProductoBusiness {

    @Autowired
    val productoBusiness: ProductosRepository? = null

    @Throws(BusinessException::class)
    override fun list(): List<Producto> {
        try {
            return this.productoBusiness!!.findAll()
        } catch (e: Exception) {
            throw BusinessException(e.message)
        }
    }

    @Throws(BusinessException::class, NotFoundException::class)
    override fun load(idProducto: Long): Producto {
        val op: Optional<Producto>
        try {
            op = productoBusiness!!.findById(idProducto)
        } catch (e: Exception) {
            throw BusinessException(e.message)
        }
        if (!op.isPresent) {
            throw NotFoundException("No se encontro a la persona con el id $idProducto")
        }
        return op.get()
    }

    @Throws(BusinessException::class)
    override fun save(producto: Producto): Producto {
        try {
            return this.productoBusiness!!.save(producto)
        } catch (e: Exception) {
            throw BusinessException(e.message)
        }
    }

    @Throws(BusinessException::class)
    override fun remove(idProducto: Long) {
        val op: Optional<Producto>
        try {
            op = productoBusiness!!.findById(idProducto)
        } catch (e: Exception) {
            throw BusinessException(e.message)
        }
        if (!op.isPresent) {
            throw NotFoundException("No se encontro a la persona con el id $idProducto")
        } else {
            try {
                this.productoBusiness!!.deleteById(idProducto)
            } catch (e: Exception) {
                throw BusinessException(e.message)
            }
        }
    }

}
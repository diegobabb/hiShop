package business

import error.BusinessException
import error.NotFoundException
import models.Usuario
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import repo.UsuarioRepository
import java.util.*

@Service
class UsuarioBusiness: IUsuarioBusiness {

    @Autowired
    val usuarioRepository: UsuarioRepository? = null

    @Throws(BusinessException::class)
    override fun list(): List<Usuario> {
        try {
            return this.usuarioRepository!!.findAll()
        } catch (e: Exception) {
            throw BusinessException(e.message)
        }
    }

    @Throws(BusinessException::class, NotFoundException::class)
    override fun load(idUsuario: Long): Usuario {
        val op: Optional<Usuario>
        try {
            op = usuarioRepository!!.findById(idUsuario)
        } catch (e: Exception) {
            throw BusinessException(e.message)
        }
        if (!op.isPresent) {
            throw NotFoundException("No se encontro a la persona con el id $idUsuario")
        }
        return op.get()
    }

    @Throws(BusinessException::class)
    override fun save(usuario: Usuario): Usuario {
        try {
            return this.usuarioRepository!!.save(usuario)
        } catch (e: Exception) {
            throw BusinessException(e.message)
        }
    }

    @Throws(BusinessException::class)
    override fun remove(idUsuario: Long) {
        val op: Optional<Usuario>
        try {
            op = usuarioRepository!!.findById(idUsuario)
        } catch (e: Exception) {
            throw BusinessException(e.message)
        }
        if (!op.isPresent) {
            throw NotFoundException("No se encontro a la persona con el id $idUsuario")
        } else {
            try {
                this.usuarioRepository!!.deleteById(idUsuario)
            } catch (e: Exception) {
                throw BusinessException(e.message)
            }
        }
    }
}
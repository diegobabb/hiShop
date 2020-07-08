package business
import models.Usuario

interface IUsuarioBusiness {
    fun list(): List<Usuario>
    fun load(idUsuario: Long): Usuario
    fun save(usuario: Usuario): Usuario
    fun remove(idUsuario: Long)
}
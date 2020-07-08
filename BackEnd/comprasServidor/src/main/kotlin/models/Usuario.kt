package models

import java.time.LocalDate
import javax.persistence.*

@Entity
data class Usuario (
        val email: String = "",
        val password: String = "",
        val nombre: String = "",
        val apellidos: String = "",
        val fecha: LocalDate? = null,
        val tipo: Boolean = false){
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Long = 0

    @ManyToMany
    @JoinTable(name = "personas_productos",
            joinColumns = [JoinColumn(name = "persona_id", referencedColumnName = "id")],
            inverseJoinColumns = [JoinColumn(name = "producto_id", referencedColumnName = "id")])
    var productosComprados: Set<Producto>? = null
}

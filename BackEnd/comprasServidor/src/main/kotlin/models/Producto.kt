package models

import javax.persistence.*

@Entity
data class Producto(
        val nombre:String = "",
        val tipo: Int = 0,
        val precio: Int = 0){
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Long = 0

    @ManyToMany(mappedBy = "productosComprados")
    var personasQueCompraron: Set<Usuario>? = null
}

---
path: '/kotlin/kotlin-hibernate'
---

# Kotlin Hibernate

- I find this article is simple & easy to implement, [Kotlin & Hibernate](https://kotlinexpertise.com/hibernate-with-kotlin-spring-boot/)
- You can also find [Hibernate Entity Document](https://docs.jboss.org/hibernate/orm/5.3/userguide/html_single/Hibernate_User_Guide.html#entity).

- Some update about configuration

```kotlin
plugins {
    id("org.springframework.boot") version "2.6.3"
    id("io.spring.dependency-management") version "1.0.11.RELEASE"
    kotlin("jvm") version "1.6.10"
    kotlin("plugin.spring") version "1.6.10"
    kotlin("plugin.allopen") version "1.6.10"
    kotlin("plugin.jpa") version "1.6.10"
}

allOpen {
    annotation("javax.persistence.Entity")
    annotation("javax.persistence.MappedSuperclass")
    annotation("javax.persistence.Embeddable")
}
```

- AbstractJpaPersistable in article

```kotlin
import org.springframework.data.domain.Persistable
import org.springframework.data.util.ProxyUtils
import java.io.Serializable
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.MappedSuperclass
import javax.persistence.Transient

/**
 * Abstract base class for entities. Allows parameterization of id type, chooses auto-generation and implements
 * [equals] and [hashCode] based on that id.
 *
 * This class was inspired by [org.springframework.data.jpa.domain.AbstractPersistable], which is part of the Spring Data project.
 */
@MappedSuperclass
abstract class AbstractJpaPersistable<T : Serializable> : Persistable<T> {

    companion object {
        private val serialVersionUID = -5554308939380869754L
    }

    @Id
    @GeneratedValue
    private var id: T? = null

    override fun getId(): T? {
        return id
    }

    /**
     * Must be [Transient] in order to ensure that no JPA provider complains because of a missing setter.
     *
     * @see org.springframework.data.domain.Persistable.isNew
     */
    @Transient
    override fun isNew() = null == getId()

    override fun toString() = "Entity of type ${this.javaClass.name} with id: $id"

    override fun equals(other: Any?): Boolean {
        other ?: return false

        if (this === other) return true

        if (javaClass != ProxyUtils.getUserClass(other)) return false

        other as AbstractJpaPersistable<*>

        return if (null == this.getId()) false else this.getId() == other.getId()
    }

    override fun hashCode(): Int {
        return 31
    }
}
```

# Conclusion

Hibernate is not suitable for kotlin ORM, we are currently using native SQL, then will test kotlin oriented ORM.

package lightning.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "user")
@XmlRootElement
@NamedQueries({ 
	@NamedQuery(name = "User.findAll", query = "SELECT u FROM User u order by u.name"),
	@NamedQuery(name = "User.findById", query = "SELECT u FROM User u WHERE u.id = :id"),
	@NamedQuery(name = "User.findByNameAndPassword", query = "SELECT u FROM User u WHERE u.name = :name and u.password = :password") 
})
public class User implements Serializable {

	private static final long serialVersionUID = 8297302394387326448L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private Integer id;

	@Column(name = "name", nullable = false, length = 255)
	private String name;

	@Column(name = "email", nullable = false, length = 255)
	private String email;

	@Column(name = "password", nullable = false, length = 255)
	private String password;

	@Column(name = "registration_date", nullable = false)
	@Temporal(TemporalType.DATE)
	private Date registrationDate;

	@Column(name = "image", length = 255)
	private String image;

	public User() {
	}

	public User(Integer id) {
		this.id = id;
	}

	public User(Integer id, String name, String email, String password, Date registrationDate) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.registrationDate = registrationDate;
	}
	
	public String getImageFullPath() {
		if (image == null) return "";

		return "http://localhost:8080/lightning/images/" + image;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(Date registrationDate) {
		this.registrationDate = registrationDate;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public int hashCode() {
		int hash = 0;
		hash += (id != null ? id.hashCode() : 0);
		return hash;
	}

	@Override
	public boolean equals(Object object) {
		if (!(object instanceof User)) {
			return false;
		}
		User other = (User) object;
		if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
			return false;
		}
		return true;
	}

	@Override
	public String toString() {
		return "User { 'id' : " + id + " }";
	}

}

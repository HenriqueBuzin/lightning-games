package lightning.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

@Entity
@Table(name = "platform")
@XmlRootElement
@NamedQueries({ 
	@NamedQuery(name = "Platform.findAll", query = "SELECT p FROM Platform p order by p.name"),
	@NamedQuery(name = "Platform.findById", query = "SELECT p FROM Platform p WHERE p.id = :id"),
	@NamedQuery(name = "Platform.findByName", query = "SELECT p FROM Platform p WHERE p.name = :name") 
})
public class Platform implements Serializable {

	private static final long serialVersionUID = -4692026394701624958L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private Integer id;

	@Column(name = "name", nullable = false, length = 45)
	private String name;
	
	@Column(name = "image", length = 255)
    private String image;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "platform", fetch = FetchType.LAZY)
	private List<GameHasPlatform> gameHasPlatformList;

	public Platform() {
	}

	public Platform(Integer id) {
		this.id = id;
	}

	public Platform(Integer id, String name) {
		this.id = id;
		this.name = name;
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

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@XmlTransient
	public List<GameHasPlatform> getGameHasPlatformList() {
		return gameHasPlatformList;
	}

	public void setGameHasPlatformList(List<GameHasPlatform> gameHasPlatformList) {
		this.gameHasPlatformList = gameHasPlatformList;
	}

	@Override
	public int hashCode() {
		int hash = 0;
		hash += (id != null ? id.hashCode() : 0);
		return hash;
	}

	@Override
	public boolean equals(Object object) {
		if (!(object instanceof Platform)) {
			return false;
		}
		Platform other = (Platform) object;
		if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
			return false;
		}
		return true;
	}

	@Override
	public String toString() {
		return "Platform { 'id' : " + id + " }";
	}

}

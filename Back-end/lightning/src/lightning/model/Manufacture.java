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
@Table(name = "manufacture")
@XmlRootElement
@NamedQueries({ 
	@NamedQuery(name = "Manufacture.findAll", query = "SELECT m FROM Manufacture m order by m.name"),
	@NamedQuery(name = "Manufacture.findById", query = "SELECT m FROM Manufacture m WHERE m.id = :id"),
	@NamedQuery(name = "Manufacture.findByName", query = "SELECT m FROM Manufacture m WHERE m.name = :name") 
})
public class Manufacture implements Serializable {

	private static final long serialVersionUID = 1772934088524640776L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private Integer id;

	@Column(name = "name", nullable = false, length = 255)
	private String name;

	@Column(name = "image", length = 255)
	private String image;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "manufacture", fetch = FetchType.LAZY)
	private List<Game> gameList;

	public Manufacture() {
	}

	public Manufacture(Integer id) {
		this.id = id;
	}

	public Manufacture(Integer id, String name) {
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@XmlTransient
	public List<Game> getGameList() {
		return gameList;
	}

	public void setGameList(List<Game> gameList) {
		this.gameList = gameList;
	}

	@Override
	public int hashCode() {
		int hash = 0;
		hash += (id != null ? id.hashCode() : 0);
		return hash;
	}

	@Override
	public boolean equals(Object object) {
		if (!(object instanceof Manufacture)) {
			return false;
		}
		Manufacture other = (Manufacture) object;
		if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
			return false;
		}
		return true;
	}

	@Override
	public String toString() {
		return "Manufacture { 'id' : " + id + " }";
	}

}

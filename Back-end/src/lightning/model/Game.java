package lightning.model;

import java.io.Serializable;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

@Entity
@Table(name = "game")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Game.findAll", query = "SELECT g FROM Game g order by g.name"), 
    @NamedQuery(name = "Game.findById", query = "SELECT g FROM Game g WHERE g.id = :id"), 
    @NamedQuery(name = "Game.findByName", query = "SELECT g FROM Game g WHERE g.name = :name")
})
public class Game implements Serializable {

	private static final long serialVersionUID = 6852466106231339573L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;
    
    @Column(name = "name", nullable = false, length = 255)
    private String name;
    
    @Column(name = "category", nullable = false, length = 255)
    private String category;
    
    @Column(name = "price", nullable = false)
    private double price;
    
    @Column(name = "quantity", nullable = false)
    private int quantity;
    
    @Column(name = "production", nullable = false, columnDefinition = "TINYINT(1)")
    private boolean production;
    
    @Column(name = "description", length = 255)
    private String description;
    
    @Column(name = "image", length = 255)
    private String image;
    
    @JoinColumn(name = "manufacture_id", referencedColumnName = "id", nullable = false)
    @ManyToOne(optional = false)
    private Manufacture manufacture;
    
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "game", fetch = FetchType.EAGER)
    private List<GameHasPlatform> gameHasPlatformList;
    
    @Transient
    private String platform;
    
    @Transient
    private Integer manufactureId;

    public Game() {
    }

    public Game(Integer id) {
        this.id = id;
    }

	public Game(Integer id, String name, String category, double price, int quantity, boolean production) {
		this.id = id;
		this.name = name;
		this.category = category;
		this.price = price;
		this.quantity = quantity;
		this.production = production;
	}
    
    public String getImageFullPath() {
    	if (image == null) return "";
		
		return "http://localhost:8080/lightning/images/" + image;
	}

    public Integer getId() {
        return id;
    }

	public String getPlatform() {
		return platform;
	}

	public void setPlatform(String platform) {
		this.platform = platform;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

	public boolean isProduction() {
		return production;
	}

	public void setProduction(boolean production) {
		this.production = production;
	}

	public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Manufacture getManufacture() {
		return manufacture;
	}

	public void setManufacture(Manufacture manufacture) {
		this.manufacture = manufacture;
	}
	
	@XmlTransient
    public List<GameHasPlatform> getGameHasPlatformList() {
        return this.gameHasPlatformList;
    }

    public void setGameHasPlatformList(List<GameHasPlatform> g) {
        this.gameHasPlatformList = g;
    }
    
    public List<String> getPlatforms() {
		return gameHasPlatformList.stream()
								  .map(g -> g.getPlatform().getName())
								  .collect(Collectors.toList());
    }

	public Integer getManufactureId() {
		return manufactureId;
	}

	public void setManufactureId(Integer manufactureId) {
		this.manufactureId = manufactureId;
	}

	@Override
	public int hashCode() {
		int hash = 0;
		hash += (id != null ? id.hashCode() : 0);
		return hash;
	}

	@Override
	public boolean equals(Object object) {
		if (!(object instanceof Game)) {
			return false;
		}
		Game other = (Game) object;
		if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
			return false;
		}
		return true;
	}

    @Override
    public String toString() {
        return "Game { 'id' : " + id + " }";
    }
    
}

package lightning.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "game_has_platform")
@XmlRootElement
@NamedQueries({
	@NamedQuery(name = "GameHasPlatform.findAll", query = "SELECT g FROM GameHasPlatform g"), 
    @NamedQuery(name = "GameHasPlatform.findByGameHasPlatformId", query = "SELECT g FROM GameHasPlatform g WHERE g.gameHasPlatformId = :gameHasPlatformId")
})
public class GameHasPlatform implements Serializable {

	private static final long serialVersionUID = 5508223590459752137L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer gameHasPlatformId;
    
	@JoinColumn(name = "game_id", referencedColumnName = "id", nullable = false)
    @ManyToOne(optional = false)
    private Game game;
    
	@JoinColumn(name = "platform_id", referencedColumnName = "id", nullable = false)
    @ManyToOne(optional = false)
    private Platform platform;

    public GameHasPlatform() {
    }

    public GameHasPlatform(Integer gameHasPlatformId) {
        this.gameHasPlatformId = gameHasPlatformId;
    }

    public Integer getGameHasPlatformId() {
        return gameHasPlatformId;
    }

    public void setGameHasPlatformId(Integer gameHasPlatformId) {
        this.gameHasPlatformId = gameHasPlatformId;
    }
    
    public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
	}

	public Platform getPlatform() {
		return platform;
	}

	public void setPlatform(Platform platform) {
		this.platform = platform;
	}

	@Override
    public int hashCode() {
        int hash = 0;
        hash += (gameHasPlatformId != null ? gameHasPlatformId.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        if (!(object instanceof GameHasPlatform)) {
            return false;
        }
        GameHasPlatform other = (GameHasPlatform) object;
        if ((this.gameHasPlatformId == null && other.gameHasPlatformId != null) || (this.gameHasPlatformId != null && !this.gameHasPlatformId.equals(other.gameHasPlatformId))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "GameHasPlatform { 'gameHasPlatformId' : " + gameHasPlatformId + " }";
    }
    
}

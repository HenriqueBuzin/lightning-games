package lightning.service;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import lightning.model.Game;
import lightning.model.GameHasPlatform;
import lightning.model.Manufacture;
import lightning.model.Platform;

@RequestScoped
public class GameService extends GenericService<Game> {

	@Inject
	private PlatformService pservice;
	
	@Inject
	private EntityManager em;
	
	public List<Game> findAll() {
		TypedQuery<Game> query = em.createQuery(
			"SELECT distinct g FROM Game g "
		 + "left join fetch g.gameHasPlatformList p "
		 + "left join fetch g.manufacture "
		 + "left join fetch p.platform "
		 + "order by g.name", Game.class);
		
		return query.getResultList();
	}
	
	@Transactional
	public void remove(Integer id) {
		Game game = find(id);
		
		em.remove(game);
	}
	
	@Transactional
	public void create(Game game) {
		Manufacture m = getEntityManager().find(Manufacture.class, game.getManufactureId());
		
		game.setManufacture(m);
		
		getEntityManager().persist(game);
		
		if (game.getPlatform() != null && !"".equals(game.getPlatform().trim())) {
			Platform p = pservice.find(Integer.parseInt(game.getPlatform()));
			
			GameHasPlatform has = new GameHasPlatform();
			has.setGame(game);
			has.setPlatform(p);
			
			getEntityManager().persist(has);
		}
	}

	@Transactional
	public void edit(Game game) {
		Manufacture m = getEntityManager().find(Manufacture.class, game.getManufactureId());
		
		game.setManufacture(m);
		
		getEntityManager().merge(game);
		
		
		TypedQuery<GameHasPlatform> query = em.createQuery(
				"SELECT g FROM GameHasPlatform g "
				+ "left join fetch g.game ga "
			 +  "where ga.id = :id " , GameHasPlatform.class);
		query.setParameter("id", game.getId());
		
		
		Game g = find(game.getId());
		
		//for(GameHasPlatform p1 : query.getResultList())
			//getEntityManager().remove(p1);
		
		getEntityManager().createNativeQuery("delete from game_has_platform where game_id = ?")
        .setParameter(1, game.getId())
        .executeUpdate();
         
        //Execute the delete query
        getEntityManager().flush();
		
		if (game.getPlatform() != null && !"".equals(game.getPlatform().trim())) {
			
			Platform p = pservice.find(Integer.parseInt(game.getPlatform()));
			
			GameHasPlatform has = new GameHasPlatform();
			has.setGame(g);
			has.setPlatform(p);
			
			getEntityManager().persist(has);
		}
	}
	
	@Override
	protected EntityManager getEntityManager() {
		return em;
	}

	@Override
	protected Class<Game> getClazz() {
		return Game.class;
	}

}

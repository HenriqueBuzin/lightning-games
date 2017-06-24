package lightning.service;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import lightning.model.Game;

@RequestScoped
public class GameService extends GenericService<Game> {

	@Inject
	private EntityManager em;
	
	public List<Game> findAll() {
		TypedQuery<Game> query = em.createQuery(
			"SELECT g FROM Game g "
		 + "left join fetch g.gameHasPlatformList p "
		 + "left join fetch g.manufacture "
		 + "left join fetch p.platform "
		 + "order by g.name", Game.class);
		
		return query.getResultList();
	}
	
	@Transactional
	public void remove(Integer id) {
		try {
			Game game = find(id);
			em.remove(game);
		} catch (Exception e) {
			e.printStackTrace();
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

package lightning.service;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import lightning.model.GameHasPlatform;
import lightning.model.Platform;

@RequestScoped
public class PlatformService extends GenericService<Platform> {

	@Inject
	private EntityManager em;

	public List<Platform> findAll() {
		TypedQuery<Platform> query = em.createNamedQuery("Platform.findAll", Platform.class);
		
		return query.getResultList();
	}
	
	@Transactional
	public void remove(Integer id) {
		Platform p = find(id);
		
		for(GameHasPlatform x : p.getGameHasPlatformList()){
			em.remove(x);
		}
		
		em.remove(p);
	}

	@Override
	protected EntityManager getEntityManager() {
		return em;
	}

	@Override
	protected Class<Platform> getClazz() {
		return Platform.class;
	}
	
}

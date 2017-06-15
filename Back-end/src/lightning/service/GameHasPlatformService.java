package lightning.service;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import lightning.model.GameHasPlatform;

@RequestScoped
public class GameHasPlatformService extends GenericService<GameHasPlatform> {

	@Inject
	private EntityManager em;

	public List<GameHasPlatform> findAll() {
		TypedQuery<GameHasPlatform> query = em.createNamedQuery("GameHasPlatform.findAll", GameHasPlatform.class);

		return query.getResultList();
	}

	@Override
	protected EntityManager getEntityManager() {
		return em;
	}

	@Override
	protected Class<GameHasPlatform> getClazz() {
		return GameHasPlatform.class;
	}

}
